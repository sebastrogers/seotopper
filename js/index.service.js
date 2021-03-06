angular
    .module('app')
    .factory('Seo', function() {

    var Seo = {
        salvar: salvar,
        getSeos: getSeos,
        remover: remover,
        editar: editar,
        seos: [
          {
              id: 0,
              name: "Exemplo",
              title: "Título da minha página",
              description: "Descrição da minha página",
              author: "Autor da minha página",
              canonical: "http://meusite.com.br",
              robots: "index/follow",
              image: "http://meusite.com.br/image.png",
              fbadmins: 123456789,
              base: "http://meusite.com.br",
              sitemap: "http://meusite.com.br/sitemap.xml",
              locale: "pt_BR",
              type: "website",
              appid: 012345,
              ttcard: "summary"
          }
        ],
        id: 1
    };
    return Seo;

    function salvar(seo) {
        Seo.seos.push(
            {
                id: Seo.id,
                title: seo.title,
                description: seo.description,
                author: seo.author,
                image: seo.image,
                base: seo.base,
                sitemap: seo.sitemap,
                canonical: seo.canonical,
                robots: seo.robots,
                locale: seo.locale,
                name: seo.name,
                type: seo.type,
                appid: seo.appid,
                fbadmins: seo.fbadmins,
                ttcard: seo.ttcard
            }
        );
        Seo.id++;
        console.log(JSON.stringify(seo, null, 12)+" --Inserido--> "+JSON.stringify(Seo.seos, null, 12)+"===============");
    }

    function getSeos(x) {
        console.log("LOG LISTA ====== "+JSON.stringify(Seo.seos, null, 12)+" ===============");
        return Seo.seos;
    }

    function remover(x) {
        Seo.seos.splice(Seo.seos.indexOf(x),1);
        console.log("LOG REMOVER ====== "+JSON.stringify(Seo.seos, null, 12)+" ===============");
    }

    function editar(x,n) {
        Seo.seos[n].title = x.title;
        Seo.seos[n].description = x.description;
        Seo.seos[n].author = x.author;
        Seo.seos[n].image = x.image;
        Seo.seos[n].canonical = x.canonical;
        Seo.seos[n].robots = x.robots;
        Seo.seos[n].locale = x.locale;
        Seo.seos[n].base = x.base;
        Seo.seos[n].sitemap = x.sitemap;
        Seo.seos[n].name = x.name;
        Seo.seos[n].type = x.type;
        Seo.seos[n].appid = x.appid;
        Seo.seos[n].fbadmins = x.fbadmins;
        Seo.seos[n].ttcard = x.ttcard;
        console.log("LOG EDIT ========= "+JSON.stringify(Seo.seos, null, 12));
    }

});
