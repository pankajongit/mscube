var appglobal = appglobal || {};
appglobal.configuration = [
    {
        name: "section1",
        tiles: [
           {
               id: "s1_position",
               tileId: 's1_position',
               name: "position",
               tileImage: "img/AppStore/position.jpg",
               appUrl: "http://ideasdev7.msdwis.com/site/Secure/PortfolioTUI/AccountDetailsView.aspx?TabIndex=0&newPage=true&NoHeader=true&UserID=M00BFK&Office=101&Account=53380&FA=66&KeyAccount=2002-04-19-14.45.40.470091&GroupID=9568806&GroupType=0&groupby=detailview",
               sequence: "0"
           },
           {
               id: "s1_balances",
               tileId: 's1_balances',
               name: "balances",
               appUrl: "http://ideasdev7.msdwis.com/site/secure/CombinedSummaryNew/CombinedSummary.aspx?applicationname=combinedsummary&pagename=combinedsummaryui&IsHeaderEnable=false&TabIndex=0&newPage=true&NoHeader=true&UserID=M00BFK&Office=101&Account=900352&FA=195&KeyAccount=2002-01-20-12.09.12.295510&GroupID=0&GroupType=2",
               tileImage: "img/AppStore/balances.jpg",
               sequence: "1"
           }
        ]
    },
			{
			    name: "section2",
			    tiles: [                    
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
                       appUrl: "http://ideasdev7.msdwis.com/Site/secure/products/mutualfunds/mfac/MFOE/Pages/MFOE_HomePage.aspx?3D_Release=9.0&FAW3DDesktopType=V41&FAWWindowID3d=true&parm=MFOE|||||||B||",
                       tileImage: "img/AppStore/buy.jpg",
                       sequence: "3"
                   },
                    {
                        id: "s1_sell",
                        tileId: 's1_sell',
                        name: "sell",
                        appUrl: "http://ideasdev7.msdwis.com/Site/secure/products/mutualfunds/mfac/MFOE/Pages/MFOE_HomePage.aspx?3D_Release=9.0&FAW3DDesktopType=V41&FAWWindowID3d=true&parm=MFOE|||||||S||",
                        tileImage: "img/AppStore/sell.jpg",
                        sequence: "3"
                    },
                    {
                        id: "s1_alerts",
                        tileId: 's1_alerts',
                        name: "alerts",
                        appUrl: "http://ideasdev7.msdwis.com/site/secure/Tools/Alerts/Alerts.aspx?SearchType=C&3D_Release=9.0&FAW3DDesktopType=V41&FAWWindowID3d=true",
                        tileImage: "img/AppStore/stats.jpg",
                        sequence: "3"
                    }
                ]
            }
]
