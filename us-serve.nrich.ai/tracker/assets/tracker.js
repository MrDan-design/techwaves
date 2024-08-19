(function(doc, queue) {
    var options = {};
    var item = null;
    var config = {};

    while (queue.length) {
        item = queue.shift();

        switch (item[0]) {
            case 'load':
                options['uuid'] = item[1];
                config = item[2] || {};
                break;
            default:
                (window.nt.sq = window.nt.sq || []).push(item);
                break;
        }
    }

    if (!options.uuid) return;
    var cookieless = config.cookieless || false;

    var configParameters = [
        'page_category',
        'page_subcategory',
        'page_type',
    ];

    var updateMeta = function(name) {
        var value = config[name] || false;
        if (!value) return;
        window.nt.sq = window.nt.sq || [];
        var hasMeta = false;
        for (var i = 0; i < window.nt.sq.length; ++i) {
            if (window.nt.sq[i][0] === 'set_meta' && window.nt.sq[i][1] === name) {
                hasMeta = true;
                break;
            }
        }
        if (!hasMeta) window.nt.sq.push(['set_meta', name, value]);
    }
    configParameters.forEach(updateMeta);

    var url = 'https://' + 'us-serve.nrich.ai' + '/tracker/' + options.uuid + '?nauid=&cb=' + Math.random() + (cookieless ? '&cookieless=' + cookieless : '');
    appendScript(url);

    function appendScript(url) {
        var body = document.getElementsByTagName('body')[0];
        var script = document.createElement('script');
        script.async = true;
        script.src = url;
        body.appendChild(script);
    }
})(document, window.nt.q || []);