module.exports = {
    menu1: {
        isSousMenu: true,
        anchorUrl: '/',
        title: 'Accueil',
        sousMenus: [
            {
                titre: 'test1',
                anchorUrl: '/film'
            },
            {
                titre: 'test2',
                anchorUrl: '/'
            }
        ]
    },
    menu2: {
        isSousMenu: true,
        anchorUrl: '/film',
        title: 'Films/Séries',
        sousMenus: [
            {
                titre: 'Films',
                anchorUrl: '/film'
            }
        ]
    },
    menu3: {
        sousMenu: false,
        anchorUrl: '/clock',
        title: 'Horloge'
    },
    menu4: {
        sousMenu: false,
        anchorUrl: '/formulaire',
        title: 'Formulaire'
    },
    menu5: {
        sousMenu: false,
        anchorUrl: '/show',
        title: 'Show'
    }
};
