/* eslint-disable no-useless-escape */

export default function getBaseUrl(){
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(name) {
    name = name.replace('/[\[]/', "\\\[").replace('/[\]]/', "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)","i"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}