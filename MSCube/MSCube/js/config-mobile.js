var appglobal = appglobal || {};
appglobal.configuration_mobile = [
    {
        name: "section1",
        tiles: [
           {
               id: "s1_position",
               tileId: 's1_position',
               name: "position",
               tileImage: "img/AppStore/position.jpg",
               appUrl: "app/position.htm",
               sequence: "0"
           },
           {
               id: "s1_balances",
               tileId: 's1_balances',
               name: "balances",
               appUrl: "app/balances.htm",
               tileImage: "img/AppStore/balances.jpg",
               sequence: "1"
           }
        ]
    },
			{
			    name: "section2",
			    tiles: [
                    {
                        id: "s1_jive",
                        tileId: 's1_jive',
                        name: "jive",
                        tileImage: "img/AppStore/jive.jpg",
                        appUrl: "app/jive.htm",
                        sequence: "2"
                    },
                   {
                       id: "s1_crm",
                       tileId: 's1_crm',
                       type: "folder",
                       name: "crm",                       
                       tileImage: 'img/AppStore/crmfolder.jpg',
                       sequence: "4"
                   }
                   
			    ]
			},
            {
                name: "section3",
                tiles: [
                   {
                       id: "s1_buy",
                       tileId: 's1_buy',
                       name: "buy",
                       appUrl: "app/buy.html",
                       tileImage: "img/AppStore/buy.jpg",
                       sequence: "3"
                   },
                    {
                        id: "s1_sell",
                        tileId: 's1_sell',
                        name: "sell",
                        appUrl: "app/sell.html",
                        tileImage: "img/AppStore/sell.jpg",
                        sequence: "3"
                    },
                    {
                        id: "s1_alerts",
                        tileId: 's1_alerts',
                        name: "alerts",
                        appUrl: "app/alerts.html",
                        tileImage: "img/AppStore/stats.jpg",
                        sequence: "3"
                    }
                ]
            }
]
