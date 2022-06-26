const mockSearchResults = [
  {
    kind: "customsearch#search",
    url: {
      type: "application/json",
      template:
        "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
    },
    queries: {
      request: [
        {
          title: "Google Custom Search - hello",
          totalResults: "4410000000",
          searchTerms: "hello",
          count: 10,
          startIndex: 1,
          inputEncoding: "utf8",
          outputEncoding: "utf8",
          safe: "off",
          cx: "76fa2cba6d37c6564",
        },
      ],
      nextPage: [
        {
          title: "Google Custom Search - hello",
          totalResults: "4410000000",
          searchTerms: "hello",
          count: 10,
          startIndex: 11,
          inputEncoding: "utf8",
          outputEncoding: "utf8",
          safe: "off",
          cx: "76fa2cba6d37c6564",
        },
      ],
    },
    context: {
      title: "My Google",
    },
    searchInformation: {
      searchTime: 0.378349,
      formattedSearchTime: "0.38",
      totalResults: "4410000000",
      formattedTotalResults: "4,410,000,000",
    },
    items: [
      {
        kind: "customsearch#result",
        title: "Adele - Hello - YouTube",
        htmlTitle: "Adele - <b>Hello</b> - YouTube",
        link: "https://www.youtube.com/watch?v=YQHsXMglC9A",
        displayLink: "www.youtube.com",
        snippet:
          'Oct 22, 2015 ... Adele - Hello. 2,985,094,067 views Oct 22, 2015 Listen to "Easy On Me" here: http://Adele.lnk.to/EOM Pre-order Adele\'s new album "30" before ...',
        htmlSnippet:
          "Oct 22, 2015 <b>...</b> Adele - <b>Hello</b>. 2,985,094,067 views Oct 22, 2015 Listen to &quot;Easy On Me&quot; here: http://Adele.lnk.to/EOM Pre-order Adele&#39;s new album &quot;30&quot; before&nbsp;...",
        formattedUrl: "https://www.youtube.com/watch?v=YQHsXMglC9A",
        htmlFormattedUrl: "https://www.youtube.com/watch?v=YQHsXMglC9A",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0QFbzW1X0JqqLN9Wp0KsTscWBAjUFTffvOYWy2LjnETK3WnduD2FZAg",
              width: "300",
              height: "168",
            },
          ],
          imageobject: [
            {
              width: "1280",
              url: "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
              height: "720",
            },
          ],
          person: [
            {
              name: "AdeleVEVO",
              url: "http://www.youtube.com/user/AdeleVEVO",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
              "twitter:app:url:iphone":
                "vnd.youtube://www.youtube.com/watch?v=YQHsXMglC9A&feature=applinks",
              "twitter:app:id:googleplay": "com.google.android.youtube",
              "theme-color": "rgba(255,255,255,0.98)",
              "og:image:width": "1280",
              "twitter:card": "player",
              "og:site_name": "YouTube",
              "twitter:url": "https://www.youtube.com/watch?v=YQHsXMglC9A",
              "twitter:app:url:ipad":
                "vnd.youtube://www.youtube.com/watch?v=YQHsXMglC9A&feature=applinks",
              "al:android:package": "com.google.android.youtube",
              "twitter:app:name:googleplay": "YouTube",
              title: "Adele - Hello",
              "al:ios:url":
                "vnd.youtube://www.youtube.com/watch?v=YQHsXMglC9A&feature=applinks",
              "twitter:app:id:iphone": "544007664",
              "og:description":
                'Listen to "Easy On Me" here: http://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19:  https://www.adele.comShop the "Adele...',
              "al:ios:app_store_id": "544007664",
              "twitter:image":
                "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
              "twitter:player": "https://www.youtube.com/embed/YQHsXMglC9A",
              "twitter:player:height": "720",
              "twitter:site": "@youtube",
              "og:video:type": "text/html",
              "og:video:height": "720",
              "og:video:url": "https://www.youtube.com/embed/YQHsXMglC9A",
              "og:type": "video.other",
              "twitter:title": "Adele - Hello",
              "al:ios:app_name": "YouTube",
              "og:title": "Adele - Hello",
              "og:image:height": "720",
              "twitter:app:id:ipad": "544007664",
              "al:web:url":
                "http://www.youtube.com/watch?v=YQHsXMglC9A&feature=applinks",
              "og:video:secure_url":
                "https://www.youtube.com/embed/YQHsXMglC9A",
              "og:video:tag": "Adele",
              "og:video:width": "1280",
              "al:android:url":
                "vnd.youtube://www.youtube.com/watch?v=YQHsXMglC9A&feature=applinks",
              "fb:app_id": "87741124305",
              "twitter:app:url:googleplay":
                "https://www.youtube.com/watch?v=YQHsXMglC9A",
              "twitter:app:name:ipad": "YouTube",
              "twitter:description":
                'Listen to "Easy On Me" here: http://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19:  https://www.adele.comShop the "Adele...',
              "og:url": "https://www.youtube.com/watch?v=YQHsXMglC9A",
              "twitter:player:width": "1280",
              "al:android:app_name": "YouTube",
              "twitter:app:name:iphone": "YouTube",
            },
          ],
          videoobject: [
            {
              embedurl: "https://www.youtube.com/embed/YQHsXMglC9A",
              playertype: "HTML5 Flash",
              isfamilyfriendly: "true",
              uploaddate: "2015-10-22",
              description:
                'Listen to "Easy On Me" here: http://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19: https://www.adele.comShop the "Adele...',
              videoid: "YQHsXMglC9A",
              url: "https://www.youtube.com/watch?v=YQHsXMglC9A",
              duration: "PT6M7S",
              unlisted: "False",
              name: "Adele - Hello",
              paid: "False",
              width: "1280",
              regionsallowed:
                "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
              genre: "Music",
              interactioncount: "2985094067",
              channelid: "UComP_epzeKzvBX156r6pm1Q",
              datepublished: "2015-10-22",
              thumbnailurl:
                "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
              height: "720",
            },
          ],
          cse_image: [
            {
              src: "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title:
          "HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news",
        htmlTitle:
          "<b>HELLO</b>! - Daily royal, celebrity, fashion, beauty &amp; lifestyle news",
        link: "https://www.hellomagazine.com/",
        displayLink: "www.hellomagazine.com",
        snippet:
          "HELLO! brings you the latest celebrity & royal news from the UK & around the world, magazine exclusives, fashion, beauty, lifestyle news, celeb babies, ...",
        htmlSnippet:
          "<b>HELLO</b>! brings you the latest celebrity &amp; royal news from the UK &amp; around the world, magazine exclusives, fashion, beauty, lifestyle news, celeb babies,&nbsp;...",
        cacheId: "hxjkDmKHGvIJ",
        formattedUrl: "https://www.hellomagazine.com/",
        htmlFormattedUrl: "https://www.<b>hello</b>magazine.com/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrFJKj5Z05x3Oik1ptcuuuy59bHOq359QK_F2Pug3AQIxhDa6Sb7xmPeo",
              width: "225",
              height: "225",
            },
          ],
          metatags: [
            {
              "p:domain_verify": "2e0d0d07c9164557a351ff28f09074ef",
              "og:image":
                "https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png",
              "og:site_name": "HELLO!",
              origen: "hellomagazine.com",
              title:
                "HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news",
              distribution: "global",
              "og:description":
                "HELLO! brings you the latest celebrity & royal news from the UK & around the world, magazine exclusives, fashion, beauty, lifestyle news, celeb babies, weddings, pregnancies and more!",
              last_mod: "Sat, 25 Jun 2022 13:12:09 GMT",
              "dc.creator": "HELLO!",
              "fb:admins": "89982930077",
              lang: "en-GB",
              "botify-site-verification": "rAorMmkbfzd6yOwJ3PITFmdyCjOzGLug",
              "og:type": "website",
              handheldfriendly: "True",
              "msvalidate.01": "802E2A1202224ED23A9EF77A39836CEC",
              author: "HELLO!",
              "og:title":
                "HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news",
              locality: "London, UK",
              "fb:pages": "89982930077",
              viewport: "width=device-width, initial-scale=1",
              organization: "HELLO!",
              mobileoptimized: "0",
              "resource-type": "document",
              "dc.language": "English",
              "og:url": "https://www.hellomagazine.com/",
            },
          ],
          cse_image: [
            {
              src: "https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png",
            },
          ],
          sitenavigationelement: [
            {
              name: "Celebrities",
              url: "Celebrities",
            },
            {
              name: "Celebrities",
              url: "Celebrities",
            },
            {
              name: "Celebrities",
              url: "Newsletter",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title:
          "hello | naturally friendly products, vegan + never tested on animals",
        htmlTitle:
          "<b>hello</b> | naturally friendly products, vegan + never tested on animals",
        link: "https://www.hello-products.com/",
        displayLink: "www.hello-products.com",
        snippet:
          "naturally friendly products for naturally friendly people. vegan, cruelty free, and thoughtfully formulated for everyone.",
        htmlSnippet:
          "naturally friendly products for naturally friendly people. vegan, cruelty free, and thoughtfully formulated for everyone.",
        cacheId: "lcA_2yf_mQgJ",
        formattedUrl: "https://www.hello-products.com/",
        htmlFormattedUrl: "https://www.<b>hello</b>-products.com/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS49LpojT3gru71Lz17BGAr1J27k-oxw8YS5S9-FP5SOfnlZLCRuYqnO-Bu",
              width: "312",
              height: "161",
            },
          ],
          metatags: [
            {
              "msapplication-tilecolor": "#ffffff",
              "og:image":
                "https://www.hello-products.com/wp-content/uploads/2020/01/HELLO_Strangely_Likeable_Mobile_Header_580x300.png",
              "theme-color": "#ffffff",
              "og:type": "website",
              "og:image:width": "580",
              "twitter:card": "summary",
              "og:site_name": "Hello Products",
              "msvalidate.01": "782AB2D27CB855D9F86E2B56FBC572DA",
              "og:title":
                "hello | naturally friendly products, vegan + never tested on animals",
              "og:image:height": "300",
              "og:image:type": "image/png",
              "msapplication-tileimage": "/ms-icon-144x144.png",
              "og:description":
                "naturally friendly products for naturally friendly people. vegan, cruelty free, and thoughtfully formulated for everyone.",
              "facebook-domain-verification": "5g2asge0sadcgj8wwh8380fkrcka91",
              "article:modified_time": "2022-06-16T23:48:58+00:00",
              viewport: "width=device-width, initial-scale=1.0",
              "og:locale": "en_US",
              "og:url": "https://www.hello-products.com/",
              "format-detection": "telephone=no",
            },
          ],
          cse_image: [
            {
              src: "https://www.hello-products.com/wp-content/uploads/2020/01/HELLO_Strangely_Likeable_Mobile_Header_580x300.png",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title:
          "HelloFresh: America's #1 Meal Kits | Fresh Meal Delivery for Home ...",
        htmlTitle:
          "HelloFresh: America&#39;s #1 Meal Kits | Fresh Meal Delivery for Home ...",
        link: "https://www.hellofresh.com/",
        displayLink: "www.hellofresh.com",
        snippet:
          "America's Most Popular Meal Kit :white_check_mark: Most 5-Star Reviews :white_check_mark: 50 Weekly Menu + Market Items :white_check_mark: Fresh ...",
        htmlSnippet:
          "America&#39;s Most Popular Meal Kit :white_check_mark: Most 5-Star Reviews :white_check_mark: 50 Weekly Menu + Market Items :white_check_mark: Fresh&nbsp;...",
        formattedUrl: "https://www.hellofresh.com/",
        htmlFormattedUrl: "https://www.<b>hello</b>fresh.com/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0Bq7tO5sF1V1-1v8kvaTkeniZIbr9H25KVfV0i17dZbobXY9rmtUQn6Wv",
              width: "225",
              height: "225",
            },
          ],
          metatags: [
            {
              "msapplication-tilecolor": "#FFF",
              "p:domain_verify": "5aea915e1ac0b408298cfb02478eb3b2",
              country: "US",
              "og:image":
                "https://img.hellofresh.com/hellofresh_website/logo/Logo_square.png",
              "theme-color": "#FFF",
              "og:type": "product",
              "og:site_name": "HelloFresh",
              "apple-mobile-web-app-title": "Home",
              "og:title":
                "America's #1 Meal Kits | Fresh Meal Delivery for Home Cooking | HelloFresh",
              "og:description": "HelloFresh",
              version: "0.5846.0",
              url: "https://www.hellofresh.com/",
              "next-head-count": "54",
              "twitter:site": "@hellofresh",
              "site:name": "HelloFresh",
              viewport: "width=device-width, initial-scale=1.0",
              "og:locale": "en-US",
              "og:url": "https://www.hellofresh.com/",
            },
          ],
          cse_image: [
            {
              src: "https://img.hellofresh.com/hellofresh_website/logo/Logo_square.png",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "hello network",
        htmlTitle: "<b>hello</b> network",
        link: "https://www.hello.com/",
        displayLink: "www.hello.com",
        snippet:
          "It's see you again soon. We are pausing hello while we get ready to launch something even better. We have loved having you a part of this community, and we want ...",
        htmlSnippet:
          "It&#39;s see you again soon. We are pausing <b>hello</b> while we get ready to launch something even better. We have loved having you a part of this community, and we want&nbsp;...",
        cacheId: "B0MLNJX0TmYJ",
        formattedUrl: "https://www.hello.com/",
        htmlFormattedUrl: "https://www.<b>hello</b>.com/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTXJx8iiLj_vC1pi6NSfn82J8dFiejkfN7OSJBhxEadoQo_WtyZGHiTXqk",
              width: "337",
              height: "149",
            },
          ],
          metatags: [
            {
              "apple-mobile-web-app-status-bar-style": "black",
              viewport: "width=device-width, initial-scale=1, maximum-scale=1",
              "apple-mobile-web-app-capable": "yes",
              author: "Hello Network, Inc.",
            },
          ],
          cse_image: [
            {
              src: "https://www.hello.com/img/hello-logo.png",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "The Official Home of Hello Kitty & Friends",
        htmlTitle: "The Official Home of <b>Hello</b> Kitty &amp; Friends",
        link: "https://www.sanrio.com/",
        displayLink: "www.sanrio.com",
        snippet:
          "Explore the supercute world of Sanrio, home to Hello Kitty, My Melody, Kuromi, Aggretsuko, Gudetama, and more!",
        htmlSnippet:
          "Explore the supercute world of Sanrio, home to <b>Hello</b> Kitty, My Melody, Kuromi, Aggretsuko, Gudetama, and more!",
        cacheId: "XcVtgsJCXsYJ",
        formattedUrl: "https://www.sanrio.com/",
        htmlFormattedUrl: "https://www.sanrio.com/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS2FYgqicxEKO3oVejVIYGIYCokOCM8llq1wdU_gL0767Kk2YJ7RghuREA",
              width: "225",
              height: "225",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://cdn.shopify.com/s/files/1/0416/8083/0620/files/HK_AND_Friends_cream_600x600.png?v=1604721645",
              "theme-color": "#ffffff",
              "og:type": "website",
              "og:image:width": "1200",
              "twitter:card": "summary",
              "og:site_name": "Sanrio",
              author: "Sanrio",
              "og:title": "The Official Home of Hello Kitty & Friends",
              "shopify-checkout-api-token": "16940c0cea93e91348c277a0eafbe76d",
              "og:image:height": "1200",
              "og:description":
                "Explore the supercute world of Sanrio, home to Hello Kitty, My Melody, Kuromi, Aggretsuko, Gudetama, and more!",
              "og:image:secure_url":
                "https://cdn.shopify.com/s/files/1/0416/8083/0620/files/HK_AND_Friends_cream_600x600.png?v=1604721645",
              "twitter:site": "@sanrio/",
              viewport: "width=device-width,initial-scale=1",
              "shopify-digital-wallet": "/41680830620/digital_wallets/dialog",
              "og:url": "https://www.sanrio.com/",
            },
          ],
          cse_image: [
            {
              src: "https://cdn.shopify.com/s/files/1/0416/8083/0620/files/HK_AND_Friends_cream_600x600.png?v=1604721645",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "Hello Design",
        htmlTitle: "<b>Hello</b> Design",
        link: "https://www.hellodesign.com/",
        displayLink: "www.hellodesign.com",
        snippet:
          "Hello is a creative agency driven to craft worthy experiences. We believe everything will be digital—surrounding us like the air we breathe.",
        htmlSnippet:
          "<b>Hello</b> is a creative agency driven to craft worthy experiences. We believe everything will be digital—surrounding us like the air we breathe.",
        cacheId: "bpnW6X-_EvAJ",
        formattedUrl: "https://www.hellodesign.com/",
        htmlFormattedUrl: "https://www.<b>hello</b>design.com/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR--0_qKuJoRNnvSwoiYALScg3GTJgsjRFwAbRZLQ0tpurCbrxgSMwjOngj",
              width: "310",
              height: "163",
            },
          ],
          metatags: [
            {
              cluster: "ip-10-3-2-62.us-west-2.compute.internal",
              "og:image": "https://www.hellodesign.com/image/732/b17/0.5,0.5",
              "og:type": "website",
              "twitter:title": "Hello Design",
              "og:image:width": "1200",
              "twitter:card": "summary_large_image",
              "og:site_name": "Hello",
              author: "Hello Design",
              "og:title": "Hello Design",
              "og:image:height": "630",
              "og:image:type": "jpeg",
              "og:description":
                "Hello is a creative agency driven to craft worthy experiences. We believe everything will be digital—surrounding us like the air we breathe. Hello is communication, and simply what we do.",
              "twitter:image:src":
                "https://www.hellodesign.com/image/732/b17/0.5,0.5",
              viewport:
                "width=device-width, initial-scale=1.0, shrink-to-fit=no",
              "twitter:description":
                "Hello is a creative agency driven to craft worthy experiences. We believe everything will be digital—surrounding us like the air we breathe. Hello is communication, and simply what we do.",
              "og:url": "https://www.hellodesign.com/index.html",
            },
          ],
          cse_image: [
            {
              src: "https://www.hellodesign.com/image/732/b17/0.5,0.5",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "Hello Games: Homepage",
        htmlTitle: "<b>Hello</b> Games: Homepage",
        link: "https://hellogames.org/",
        displayLink: "hellogames.org",
        snippet:
          "Hello Games. Join us on our journey to create the types of games that didn't exist before. View Jobs. Who We Are. We are a small studio who like to harness ...",
        htmlSnippet:
          "<b>Hello</b> Games. Join us on our journey to create the types of games that didn&#39;t exist before. View Jobs. Who We Are. We are a small studio who like to harness&nbsp;...",
        cacheId: "k10VN_BHc4AJ",
        formattedUrl: "https://hellogames.org/",
        htmlFormattedUrl: "https://<b>hello</b>games.org/",
        pagemap: {
          thumbnail: [
            {
              src: "https://hellogames.org/thumb.png",
            },
          ],
          metatags: [
            {
              "msapplication-tilecolor": "#ffffff",
              "og:image":
                "https://hellogames.org/app/uploads/2020/03/bg-section-background-1440w.jpg",
              "og:type": "website",
              "og:image:width": "1440",
              "twitter:card": "summary_large_image",
              "twitter:title": "Homepage - Hello Games",
              "theme-color": "#ffffff",
              thumbnail: "https://hellogames.org/thumb.png",
              "og:site_name": "Hello Games",
              "og:title": "Homepage - Hello Games",
              "og:image:height": "859",
              "og:description": "Homepage - Hello Games",
              "og:image:secure_url":
                "https://hellogames.org/app/uploads/2020/03/bg-section-background-1440w.jpg",
              "twitter:image":
                "https://hello-games-new-studio-site.azurewebsites.net/app/uploads/2020/03/bg-section-background-1440w.jpg",
              viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
              "twitter:description": "Homepage - Hello Games",
              "og:locale": "en_GB",
              "og:url": "https://hellogames.org/",
            },
          ],
          cse_image: [
            {
              src: "https://hello-games-new-studio-site.azurewebsites.net/app/uploads/2020/03/bg-nms-layer-2-2560w-768x900.png",
              width: "207",
              type: "1",
              height: "243",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "Hello Alice: Grow Your Small Business",
        htmlTitle: "<b>Hello</b> Alice: Grow Your Small Business",
        link: "https://helloalice.com/",
        displayLink: "helloalice.com",
        snippet:
          "Hello Alice is a free platform designed for AND by small business owners. We're here to guide and support you at every turn on your adventure in ...",
        htmlSnippet:
          "<b>Hello</b> Alice is a free platform designed for AND by small business owners. We&#39;re here to guide and support you at every turn on your adventure in&nbsp;...",
        cacheId: "T62uMIpDII4J",
        formattedUrl: "https://helloalice.com/",
        htmlFormattedUrl: "https://<b>hello</b>alice.com/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRIzbgvQkoOUt9dFE7YJsVn6USts5yWEpA5P-T2eQbCMwlYrvgbjf6cZmY",
              width: "242",
              height: "208",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://helloalice.com/wp-content/uploads/2022/05/Hero_Image.png",
              "og:type": "website",
              "og:image:width": "1858",
              "twitter:card": "summary_large_image",
              "og:site_name": "Hello Alice",
              "og:title": "Grow Your Small Business",
              "og:image:height": "1600",
              "og:image:type": "image/png",
              "cf-2fa-verify": "eeY8oph6wahViush8aif",
              "og:description":
                "You have unique goals, challenges, and aspirations for your small business. And Hello Alice wants to help you with all of them. Your adventure has started; let's keep growing, together.",
              "article:publisher": "https://www.facebook.com/AliceConnects",
              "facebook-domain-verification": "5110pkmkunmoqh9zx47bjng5ggbr3x",
              "twitter:site": "@HelloAlice",
              "article:modified_time": "2022-05-31T17:14:53+00:00",
              viewport: "width=device-width, initial-scale=1",
              "og:locale": "en_US",
              "og:url": "https://helloalice.com/",
            },
          ],
          cse_image: [
            {
              src: "https://helloalice.com/wp-content/uploads/2022/05/Hero_Image.png",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "Hello Bar: Home",
        htmlTitle: "<b>Hello</b> Bar: Home",
        link: "https://www.hellobar.com/",
        displayLink: "www.hellobar.com",
        snippet:
          "Convert 83% More. Visitors into Leads, Subscribers, & Buyers. Bars, Modals, Sliders — beautifully designed popups for your site. Easy to use.",
        htmlSnippet:
          "Convert 83% More. Visitors into Leads, Subscribers, &amp; Buyers. Bars, Modals, Sliders — beautifully designed popups for your site. Easy to use.",
        cacheId: "XnRADKczSwcJ",
        formattedUrl: "https://www.hellobar.com/",
        htmlFormattedUrl: "https://www.<b>hello</b>bar.com/",
        pagemap: {
          metatags: [
            {
              "og:type": "website",
              "twitter:card": "summary_large_image",
              "twitter:title": "Home - Hello Bar",
              "og:site_name": "Hello Bar",
              viewport:
                "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
              "og:title": "Home - Hello Bar",
              "og:locale": "en_US",
              "og:url": "https://www.hellobar.com/",
            },
          ],
        },
      },
    ],
  },
  {
    kind: "customsearch#search",
    url: {
      type: "application/json",
      template:
        "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
    },
    queries: {
      request: [
        {
          title: "Google Custom Search - best food in the world",
          totalResults: "5180000000",
          searchTerms: "best food in the world",
          count: 10,
          startIndex: 1,
          inputEncoding: "utf8",
          outputEncoding: "utf8",
          safe: "off",
          cx: "76fa2cba6d37c6564",
        },
      ],
      nextPage: [
        {
          title: "Google Custom Search - best food in the world",
          totalResults: "5180000000",
          searchTerms: "best food in the world",
          count: 10,
          startIndex: 11,
          inputEncoding: "utf8",
          outputEncoding: "utf8",
          safe: "off",
          cx: "76fa2cba6d37c6564",
        },
      ],
    },
    context: {
      title: "My Google",
    },
    searchInformation: {
      searchTime: 0.470471,
      formattedSearchTime: "0.47",
      totalResults: "5180000000",
      formattedTotalResults: "5,180,000,000",
    },
    items: [
      {
        kind: "customsearch#result",
        title: "World food: 50 best dishes | CNN Travel",
        htmlTitle: "<b>World food</b>: 50 <b>best dishes</b> | CNN Travel",
        link: "https://www.cnn.com/travel/article/world-best-food-dishes/index.html",
        displayLink: "www.cnn.com",
        snippet:
          "Apr 13, 2021 ... The world's 50 best foods · 50. Buttered popcorn, United States · 49. Masala dosa, India · 48. Potato chips, United Kingdom · 47. Seafood paella, ...",
        htmlSnippet:
          "Apr 13, 2021 <b>...</b> The <b>world&#39;s</b> 50 <b>best foods</b> &middot; 50. Buttered popcorn, United States &middot; 49. Masala dosa, India &middot; 48. Potato chips, United Kingdom &middot; 47. Seafood paella,&nbsp;...",
        cacheId: "Cb_HUsZ6yeQJ",
        formattedUrl:
          "https://www.cnn.com/travel/article/world-best-food-dishes/index.html",
        htmlFormattedUrl:
          "https://www.cnn.com/travel/article/<b>world</b>-<b>best</b>-<b>food</b>-<b>dishes</b>/index.html",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2rj27n69vq0kuWXzxCBeM-Yg-cijnsgIWJPCcoYMYeaqEvuRrN32H37a3",
              width: "300",
              height: "168",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods-story-top.jpg",
              "theme-color": "#31315b",
              "og:image:width": "640",
              "og:image:alt": "CNN - The world's 50 best foods",
              "og:type": "article",
              "twitter:card": "summary_large_image",
              "twitter:title": "The world's 50 best foods",
              "og:site_name": "CNN",
              author: "By CNN Travel staff",
              "og:title": "The world's 50 best foods",
              "og:image:height": "360",
              section: "foodanddrink",
              "og:description":
                "The world is full of good food. But what are the 50 best dishes -- those so delicious you should factor them into your travel plans?",
              "fb:pages": "5550296508,18793419640",
              "twitter:image":
                "https://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods-story-top.jpg",
              "fb:app_id": "80401312489",
              "twitter:image:alt": "The world's 50 best foods",
              viewport: "width=device-width, initial-scale=1",
              "og:author": "By CNN Travel staff",
              "twitter:description":
                "The world is full of good food. But what are the 50 best dishes -- those so delicious you should factor them into your travel plans?",
              "og:url":
                "https://www.cnn.com/travel/article/world-best-food-dishes/index.html",
              lastmod: "2021-05-14T22:41:07Z",
              pubdate: "2017-07-12T12:27:13Z",
            },
          ],
          cse_image: [
            {
              src: "https://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods-story-top.jpg",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title:
          "The 10 Countries With The Best Food On Earth, According To The ...",
        htmlTitle:
          "The 10 Countries With The <b>Best Food</b> On <b>Earth</b>, According To The ...",
        link: "https://uproxx.com/life/countries-with-the-best-food-in-the-world-ranked-2021/",
        displayLink: "uproxx.com",
        snippet:
          "Aug 22, 2021 ... A look at the food scenes of the ten countries deemed to have the best food in the world, according to over 40K voters.",
        htmlSnippet:
          "Aug 22, 2021 <b>...</b> A look at the food scenes of the ten countries deemed to have the <b>best food in the world</b>, according to over 40K voters.",
        cacheId: "kmb8JyoM1dQJ",
        formattedUrl:
          "https://uproxx.com/.../countries-with-the-best-food-in-the-world-ranked- 2021/",
        htmlFormattedUrl:
          "https://uproxx.com/.../countries-with-the-<b>best</b>-<b>food-in-the-world</b>-ranked- 2021/",
        pagemap: {
          hcard: [
            {
              url_text: "Zach Johnston",
              fn: "Zach Johnston",
              url: "https://uproxx.com/author/zach-johnson/",
            },
            {
              url_text: "Armon Sadler",
              fn: "Armon Sadler",
              url: "https://uproxx.com/author/armon-sadler/",
            },
            {
              url_text: "Derrick Rossignol",
              fn: "Derrick Rossignol",
              url: "https://uproxx.com/author/derrick-rossignol/",
            },
            {
              url_text: "Danielle Chelosky",
              fn: "Danielle Chelosky",
              url: "https://uproxx.com/author/danielle-chelosky/",
            },
            {
              url_text: "Wongo Okon",
              fn: "Wongo Okon",
              url: "https://uproxx.com/author/wongo-okon/",
            },
            {
              url_text: "Carolyn Droke",
              fn: "Carolyn Droke",
              url: "https://uproxx.com/author/carolyn-droke/",
            },
            {
              url_text: "Derrick Rossignol",
              fn: "Derrick Rossignol",
              url: "https://uproxx.com/author/derrick-rossignol/",
            },
          ],
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAZ_0gZdlo3zpJSMR5zjcp1mC_C9uunTDVn1cbrqXqiNBE3IKtn4kSwjQ",
              width: "299",
              height: "168",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://uproxx.com/wp-content/uploads/2021/08/food-grid-uproxx.jpeg?w=710",
              "twitter:card": "summary_large_image",
              "article:published_time": "2021-08-23T02:00:00+00:00",
              "og:image:width": "710",
              "og:site_name": "UPROXX",
              "twitter:creator": "@UPROXX",
              "og:description":
                "A look at the food scenes of the ten countries deemed to have the best food in the world, according to over 40K voters.",
              "article:publisher": "https://www.facebook.com/UPROXX",
              "twitter:image":
                "https://uproxx.com/wp-content/uploads/2021/08/food-grid-uproxx.jpeg?w=640",
              "twitter:text:title":
                "These Countries Have The Best Food On Earth, According To The Masses",
              "twitter:site": "@UPROXX",
              "article:modified_time": "2021-08-23T07:54:39+00:00",
              "qc:primary_tag": "according-to-the-masses",
              "fb:admins": "680207693,2208604",
              "twitter:title":
                "These Countries Have The Best Food On Earth, According To The Masses",
              "og:type": "article",
              "twitter:widgets:csp": "on",
              "og:title":
                "The 10 Countries With The Best Food On Earth, According To The Masses",
              "qc:section": "life",
              "og:image:height": "400",
              "qc:author": "Zach Johnston",
              "fb:pages": "116548701336",
              "fb:app_id": "117400151618132",
              "og:locale:alternate": "en_GB",
              viewport: "width=device-width, initial-scale=1",
              "og:locale": "en_US",
              "og:url":
                "https://uproxx.com/life/countries-with-the-best-food-in-the-world-ranked-2021/",
              "qc:post":
                "countries-with-the-best-food-in-the-world-ranked-2021",
            },
          ],
          cse_image: [
            {
              src: "https://uproxx.com/wp-content/uploads/2021/08/food-grid-uproxx.jpeg?w=710",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "World cuisine: 10 best food cultures | CNN Travel",
        htmlTitle:
          "<b>World cuisine</b>: 10 <b>best food</b> cultures | CNN Travel",
        link: "https://www.cnn.com/travel/article/world-best-food-cultures/index.html",
        displayLink: "www.cnn.com",
        snippet:
          "Jan 29, 2021 ... Jamon Iberico -- a whole cured ham hock usually carved by clamping it down in a wooden stand like some medieval ritual. Churros -- the world's ...",
        htmlSnippet:
          "Jan 29, 2021 <b>...</b> Jamon Iberico -- a whole cured ham hock usually carved by clamping it down in a wooden stand like some medieval ritual. Churros -- the <b>world&#39;s</b>&nbsp;...",
        cacheId: "8UPJhyyyH1cJ",
        formattedUrl:
          "https://www.cnn.com/travel/article/world-best-food-cultures/index.html",
        htmlFormattedUrl:
          "https://www.cnn.com/travel/article/<b>world</b>-<b>best</b>-<b>food</b>-cultures/index.html",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4MwAIgFLNlnkj8mCbiKRsZHeYuxDUDuf7SxBzzuaP_v63cUbTPYIvLg",
              width: "299",
              height: "168",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://cdn.cnn.com/cnnnext/dam/assets/170517150325-food-general-super-tease.jpg",
              "theme-color": "#31315b",
              "og:image:width": "1100",
              "og:image:alt": "CNN - Which country has the best food?",
              "og:type": "article",
              "twitter:card": "summary_large_image",
              "twitter:title": "Which country has the best food?",
              "og:site_name": "CNN",
              author: "By Zoe Li, CNN",
              "og:title": "Which country has the best food?",
              "og:image:height": "619",
              section: "foodanddrink",
              "og:description":
                "Italy and spaghetti? Hong Kong's dim sum? Or French escargots? When it comes to world cuisine, what are the 10 best food cultures?",
              "fb:pages": "5550296508,18793419640",
              "twitter:image":
                "https://cdn.cnn.com/cnnnext/dam/assets/170517150325-food-general-super-tease.jpg",
              "fb:app_id": "80401312489",
              "twitter:image:alt": "Which country has the best food?",
              viewport: "width=device-width, initial-scale=1",
              "og:author": "By Zoe Li, CNN",
              "twitter:description":
                "Italy and spaghetti? Hong Kong's dim sum? Or French escargots? When it comes to world cuisine, what are the 10 best food cultures?",
              "og:url":
                "https://www.cnn.com/travel/article/world-best-food-cultures/index.html",
              lastmod: "2021-05-14T22:43:15Z",
              pubdate: "2017-07-12T12:36:51Z",
            },
          ],
          cse_image: [
            {
              src: "https://cdn.cnn.com/cnnnext/dam/assets/170517150325-food-general-super-tease.jpg",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "75 Best Foods in the World, Ranked | Far & Wide",
        htmlTitle: "75 <b>Best Foods in the World</b>, Ranked | Far &amp; Wide",
        link: "https://www.farandwide.com/s/best-foods-world-39c0365243a942df",
        displayLink: "www.farandwide.com",
        snippet:
          "Oct 20, 2020 ... Food has a way of making us exaggerate, which is fitting for the ranking of the best foods in the world by TasteAtlas, a website that aims ...",
        htmlSnippet:
          "Oct 20, 2020 <b>...</b> Food has a way of making us exaggerate, which is fitting for the ranking of the <b>best foods in the world</b> by TasteAtlas, a website that aims&nbsp;...",
        cacheId: "-kZNyrMpnYEJ",
        formattedUrl:
          "https://www.farandwide.com/s/best-foods-world-39c0365243a942df",
        htmlFormattedUrl:
          "https://www.farandwide.com/s/<b>best</b>-<b>foods</b>-<b>world</b>-39c0365243a942df",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlk3qmK2qQ49OB3WEZ7LMuD2KhtjMkkhTm86SjZO8vYj9syemIplLCe-e",
              width: "311",
              height: "162",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://media.farandwide.com/c2/9d/c29d6085c2494a95869fe3f94f1f2424.jpeg",
              "fb:app_id": "317477961996211",
              "og:type": "article",
              viewport: "width=device-width, initial-scale=1",
              "og:title": "75 Best Foods in the World, Ranked",
              "og:url":
                "//www.farandwide.com/s/best-foods-world-39c0365243a942df",
              "og:description":
                "We have major opinions about this ranking of the best foods in the world.",
              "pin:media":
                "https://media.farandwide.com/be/18/be1811fbf8b4425a95b7d8fb140293b4.jpeg",
            },
          ],
          cse_image: [
            {
              src: "https://media.farandwide.com/c2/9d/c29d6085c2494a95869fe3f94f1f2424.jpeg",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "100 Most Popular Foods in the World - TasteAtlas",
        htmlTitle: "100 Most Popular <b>Foods in the World</b> - TasteAtlas",
        link: "https://www.tasteatlas.com/100-most-popular-foods-in-the-world",
        displayLink: "www.tasteatlas.com",
        snippet:
          "Jun 7, 2022 ... 100 Most Popular Foods in the World ; Ground Meat Dish · Sarma. TURKIYE · MAIN INGREDIENTS. OR. Beef · OR. Lamb · Pork · Cabbage · Chard · Rice.",
        htmlSnippet:
          "Jun 7, 2022 <b>...</b> 100 Most Popular <b>Foods in the World</b> ; Ground Meat Dish &middot; Sarma. TURKIYE &middot; MAIN INGREDIENTS. OR. Beef &middot; OR. Lamb &middot; Pork &middot; Cabbage &middot; Chard &middot; Rice.",
        cacheId: "KovEhpt6gtIJ",
        formattedUrl:
          "https://www.tasteatlas.com/100-most-popular-foods-in-the-world",
        htmlFormattedUrl:
          "https://www.tasteatlas.com/100-most-popular-<b>foods-in-the-world</b>",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXzW63Vm461va1ZJz_polUw04pthIUjdr7sbjup5NB2GzX-vMminImrw",
              width: "340",
              height: "148",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://cdn.tasteatlas.com/images/toplistarticles/fc20fbcfe5cd4690ba0cb9614192303a.jpg",
              "fb:app_id": "1827944954195705",
              "og:type": "website",
              "twitter:card": "summary_large_image",
              "twitter:title": "100 Most Popular Foods in the World",
              "og:image:width": "0",
              viewport: "width=device-width, initial-scale=1",
              "og:title": "100 Most Popular Foods in the World",
              "og:image:height": "0",
              "twitter:image":
                "https://cdn.tasteatlas.com/images/toplistarticles/fc20fbcfe5cd4690ba0cb9614192303a.jpg",
            },
          ],
          cse_image: [
            {
              src: "https://cdn.tasteatlas.com/images/toplistarticles/fc20fbcfe5cd4690ba0cb9614192303a.jpg",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "The List and Awards - The World's 50 Best Restaurants",
        htmlTitle: "The List and Awards - The World's 50 Best Restaurants",
        link: "https://www.theworlds50best.com/list/1-50",
        displayLink: "www.theworlds50best.com",
        snippet:
          "The World's 50 Best Restaurants ; Noma. Copenhagen, Denmark ; Geranium. Copenhagen, Denmark ; Asador Etxebarri. Atxondo, Spain.",
        htmlSnippet:
          "The <b>World&#39;s</b> 50 <b>Best Restaurants</b> ; Noma. Copenhagen, Denmark ; Geranium. Copenhagen, Denmark ; Asador Etxebarri. Atxondo, Spain.",
        cacheId: "yyCK-3BtETgJ",
        formattedUrl: "https://www.theworlds50best.com/list/1-50",
        htmlFormattedUrl:
          "https://www.the<b>worlds</b>50<b>best</b>.com/list/1-50",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCE3xF5y4cHg7wIvFcX81ragUwMKj_8aHVPHyFBzAEWohktKN_Apxyog",
              width: "310",
              height: "163",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://www.theworlds50best.com/filestore/jpg/50B-Restaurants-GLOBAL-Facebook-image-1200x630.jpg",
              "twitter:card": "summary",
              "twitter:title":
                "The World’s 50 Best Restaurants | The List and Awards",
              "og:site_name": "UI - 50B - Restaurants - GLOBAL",
              viewport:
                "width=device-width, initial-scale=1.0, maximum-scale=5, user-scalable=yes",
              "og:title":
                "The World’s 50 Best Restaurants | The List and Awards",
              language: "en",
              "twitter:image":
                "https://www.theworlds50best.com/filestore/jpg/50B-Restaurants-GLOBAL-Twitter-image-1200x600.jpg",
              "facebook-domain-verification": "ingc95tjw5p59b7sxrbxb3ao5zbo4b",
            },
          ],
          cse_image: [
            {
              src: "https://www.theworlds50best.com/filestore/jpg/50B-Restaurants-GLOBAL-Facebook-image-1200x630.jpg",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "Best Traditional Food in the World - TasteAtlas Awards 2021",
        htmlTitle:
          "<b>Best</b> Traditional <b>Food in the World</b> - TasteAtlas Awards 2021",
        link: "https://www.tasteatlas.com/best",
        displayLink: "www.tasteatlas.com",
        snippet:
          "Best Traditional Food in the World ; 1. Stracciatella. 4.95 ; 2 · Canastra. 4.72 ; 3. Graviera Kritis. 4.67 ; 4 · Pecorino Siciliano. 4.66 ; 5. Sirene. 4.65.",
        htmlSnippet:
          "<b>Best</b> Traditional <b>Food in the World</b> ; 1. Stracciatella. 4.95 ; 2 &middot; Canastra. 4.72 ; 3. Graviera Kritis. 4.67 ; 4 &middot; Pecorino Siciliano. 4.66 ; 5. Sirene. 4.65.",
        cacheId: "zLgs5pPLBWQJ",
        formattedUrl: "https://www.tasteatlas.com/best",
        htmlFormattedUrl: "https://www.tasteatlas.com/<b>best</b>",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTv86inLQHmA4WIYHNdkuVvRoFsspbchpTTBnrWoDkQABFVIuqp7S6jbsYF",
              width: "310",
              height: "163",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://www.tasteatlas.com/areas/awards/content/img/share/main_image.png?v1",
              "og:image:width": "1200",
              "og:type": "website",
              "twitter:card": "summary_large_image",
              "twitter:title":
                "TasteAtlas Awards: These Are the 100 Best Dishes in the World",
              "theme-color": "#000000",
              "og:title":
                "TasteAtlas Awards: These Are the 100 Best Dishes in the World",
              "og:image:height": "630",
              "og:description":
                "100 best rated traditional dishes in the world according to 100k+ ratings on TasteAtlas.",
              "twitter:creator": "@TasteAtlas",
              "msapplication-navbutton-color": "#000000",
              "twitter:image":
                "https://www.tasteatlas.com/areas/awards/content/img/share/main_image.png?v1",
              "twitter:site": "@TasteAtlas",
              "apple-mobile-web-app-status-bar-style": "#000000",
              viewport:
                "width=device-width,height=device-height, minimum-scale=1.0",
              "twitter:description":
                "100 best rated traditional dishes in the world according to 100k+ ratings on TasteAtlas.",
            },
          ],
          cse_image: [
            {
              src: "https://www.tasteatlas.com/areas/awards/content/img/share/main_image.png?v1",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "59 Most Famous Foods Around the World: Best National Dishes",
        htmlTitle:
          "59 Most <b>Famous Foods</b> Around the <b>World</b>: <b>Best</b> National <b>Dishes</b>",
        link: "https://www.worldtravelconnector.com/famous-foods-around-the-world/",
        displayLink: "www.worldtravelconnector.com",
        snippet:
          "Mar 13, 2021 ... Italian pizza is probably the most famous food in the World. Pizza has crossed the borders of Italy a long time ago and nowadays it is consumed ...",
        htmlSnippet:
          "Mar 13, 2021 <b>...</b> Italian pizza is probably the most <b>famous food in the World</b>. Pizza has crossed the borders of Italy a long time ago and nowadays it is consumed&nbsp;...",
        cacheId: "RVOB6JweC-YJ",
        formattedUrl:
          "https://www.worldtravelconnector.com/famous-foods-around-the-world/",
        htmlFormattedUrl:
          "https://www.<b>world</b>travelconnector.com/<b>famous</b>-<b>foods</b>-around-the-<b>world</b>/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT6A2E7gnIlMZXiIta-TkEE9c2QotgI8dTZ6g2mCRW4rQrQpAK2sEU59MY",
              width: "260",
              height: "194",
            },
          ],
          metatags: [
            {
              "p:domain_verify": "b6643f7820c24b598dddadd307b67cf6",
              "og:image":
                "https://www.worldtravelconnector.com/wp-content/uploads/2019/11/Famous-foods-around-the-world_-garlic-coup-with-grapes-.jpg",
              "og:image:width": "800",
              "article:published_time": "2021-03-13T21:35:44+01:00",
              "twitter:card": "summary_large_image",
              "og:site_name": "World Travel Connector",
              "twitter:label1": "Written by",
              "b-verify": "c411ba88948f394301a20acaacceb44de056de84",
              "twitter:label2": "Time to read",
              "og:image:type": "image/jpeg",
              "msapplication-tileimage":
                "https://www.worldtravelconnector.com/wp-content/uploads/2016/12/cropped-WorldTravelConnector-270x270.jpg",
              "og:description":
                "The list of most famous foods around the world covers 59 best national dishes and top cuisines, the most popular foods in the world & the best food in the world",
              "twitter:creator": "@MilijanaG",
              "article:publisher":
                "https://www.facebook.com/WorldTravelConnector/",
              "og:image:secure_url":
                "https://www.worldtravelconnector.com/wp-content/uploads/2019/11/Famous-foods-around-the-world_-garlic-coup-with-grapes-.jpg",
              "twitter:image":
                "https://www.worldtravelconnector.com/wp-content/uploads/2019/11/Famous-foods-around-the-world_-garlic-coup-with-grapes-.jpg",
              "twitter:data1": "Milijana",
              "twitter:data2": "29 minutes",
              "twitter:site": "@MilijanaG",
              "article:modified_time": "2022-04-28T21:10:23+01:00",
              "og:type": "article",
              "article:section": "FOOD TRAVEL",
              "og:image:alt":
                "French garlic soup is one of the most famous foods in the world",
              "twitter:title":
                "59 Most Famous Foods Around the World: Best National Dishes",
              "og:title":
                "59 Most Famous Foods Around the World: Best National Dishes",
              "og:image:height": "598",
              "og:updated_time": "2022-04-28T21:10:23+01:00",
              "fb:pages": "849562485284613",
              "fb:app_id": "1849562485284613",
              viewport: "width=device-width, initial-scale=1",
              "twitter:description":
                "The list of most famous foods around the world covers 59 best national dishes and top cuisines, the most popular foods in the world & the best food in the world",
              "og:locale": "en_US",
              "og:url":
                "https://www.worldtravelconnector.com/famous-foods-around-the-world/",
            },
          ],
          cse_image: [
            {
              src: "https://www.worldtravelconnector.com/wp-content/uploads/2019/11/Famous-foods-around-the-world_-garlic-coup-with-grapes-.jpg",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "22 Best Dishes in The World To Check Off Your 2022 Food List",
        htmlTitle:
          "22 <b>Best Dishes in The World</b> To Check Off Your 2022 Food List",
        link: "https://www.holidify.com/pages/best-dishes-in-the-world-1532.html",
        displayLink: "www.holidify.com",
        snippet:
          "22 Best Dishes in The World You Must Try Once In Your Life · 1. Sushi (Japan) · 2. Rendang, Indonesia · 3. Ramen, Japan · 4. Tom Yam Goong, Thailand · 5. Kebab, ...",
        htmlSnippet:
          "22 <b>Best Dishes in The World</b> You Must Try Once In Your Life &middot; 1. Sushi (Japan) &middot; 2. Rendang, Indonesia &middot; 3. Ramen, Japan &middot; 4. Tom Yam Goong, Thailand &middot; 5. Kebab,&nbsp;...",
        cacheId: "YHL7ArsvkVsJ",
        formattedUrl:
          "https://www.holidify.com/pages/best-dishes-in-the-world-1532.html",
        htmlFormattedUrl:
          "https://www.holidify.com/pages/<b>best</b>-<b>dishes-in-the-world</b>-1532.html",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwd1JmcyjmiWOKwDyPt0yQjtBXGe3-FOaWkoDVnYrrTLxixgqV6WGqLhs",
              width: "286",
              height: "176",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://www.holidify.com/images/cmsuploads/compressed/48824979_20181227134147.jpg",
              "og:type": "article",
              "fb:app_id": "358096707635831",
              viewport:
                "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
              "og:title":
                "16 Best Dishes In The World You've Got To Try Before You Die",
              "og:url":
                "https://www.holidify.com/pages/best-dishes-in-the-world-1532.html",
              "og:description":
                "A vital part of tourism is also looking out for memorable and unique eating and drinking experiences anywhere in the world. Often termed as food tourism, this pursuit is categorized under experiential travel. In present times, food stands equal to accommodation and sceneries when it comes to deciding a place to travel. Just like there are lists of best hotels to stay in and best places to visit, there should also be a food dishes list to narrow down the best items around the world.",
            },
          ],
          cse_image: [
            {
              src: "https://www.holidify.com/images/cmsuploads/compressed/48824979_20181227134147.jpg",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title:
          "The World's 50 Best Restaurants | The best restaurants in the world",
        htmlTitle:
          "The World&#39;s 50 Best Restaurants | The <b>best restaurants in the world</b>",
        link: "https://www.theworlds50best.com/",
        displayLink: "www.theworlds50best.com",
        snippet:
          "Annually ranking the top 50 best restaurants and bars around the world. The World's 50 Best Restaurants, is owned and run by William Reed Business Media, ...",
        htmlSnippet:
          "Annually ranking the <b>top</b> 50 <b>best restaurants</b> and bars around the <b>world</b>. The <b>World&#39;s</b> 50 <b>Best Restaurants</b>, is owned and run by William Reed Business Media,&nbsp;...",
        cacheId: "z5EjiO2VnKoJ",
        formattedUrl: "https://www.theworlds50best.com/",
        htmlFormattedUrl: "https://www.the<b>worlds</b>50<b>best</b>.com/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCE3xF5y4cHg7wIvFcX81ragUwMKj_8aHVPHyFBzAEWohktKN_Apxyog",
              width: "310",
              height: "163",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://www.theworlds50best.com/filestore/jpg/50B-Restaurants-GLOBAL-Facebook-image-1200x630.jpg",
              "twitter:card": "summary",
              "twitter:title":
                "The World's 50 Best Restaurants | The best restaurants in the world",
              "og:site_name": "UI - 50B - Restaurants - GLOBAL",
              viewport:
                "width=device-width, initial-scale=1.0, maximum-scale=5, user-scalable=yes",
              "twitter:description":
                "Annually ranking the top 50 best restaurants and bars around the world. The World's 50 Best Restaurants, is owned and run by William Reed Business Media, the same organisation behind The World's 50 Best Bars.",
              "og:title":
                "The World's 50 Best Restaurants | The best restaurants in the world",
              language: "en",
              "og:description":
                "Annually ranking the top 50 best restaurants and bars around the world. The World's 50 Best Restaurants, is owned and run by William Reed Business Media, the same organisation behind The World's 50 Best Bars.",
              "twitter:image":
                "https://www.theworlds50best.com/filestore/jpg/50B-Restaurants-GLOBAL-Twitter-image-1200x600.jpg",
            },
          ],
          cse_image: [
            {
              src: "https://www.theworlds50best.com/filestore/jpg/50B-Restaurants-GLOBAL-Facebook-image-1200x630.jpg",
            },
          ],
        },
      },
    ],
  },
  {
    kind: "customsearch#search",
    url: {
      type: "application/json",
      template:
        "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
    },
    queries: {
      request: [
        {
          title: "Google Custom Search - netflix series",
          totalResults: "1810000000",
          searchTerms: "netflix series",
          count: 10,
          startIndex: 1,
          inputEncoding: "utf8",
          outputEncoding: "utf8",
          safe: "off",
          cx: "76fa2cba6d37c6564",
        },
      ],
      nextPage: [
        {
          title: "Google Custom Search - netflix series",
          totalResults: "1810000000",
          searchTerms: "netflix series",
          count: 10,
          startIndex: 11,
          inputEncoding: "utf8",
          outputEncoding: "utf8",
          safe: "off",
          cx: "76fa2cba6d37c6564",
        },
      ],
    },
    context: {
      title: "My Google",
    },
    searchInformation: {
      searchTime: 0.648336,
      formattedSearchTime: "0.65",
      totalResults: "1810000000",
      formattedTotalResults: "1,810,000,000",
    },
    items: [
      {
        kind: "customsearch#result",
        title: "TV Shows | Netflix Official Site",
        htmlTitle: "TV <b>Shows</b> | <b>Netflix</b> Official Site",
        link: "https://www.netflix.com/browse/genre/83",
        displayLink: "www.netflix.com",
        snippet:
          "Popular on Netflix · Stranger Things · The Umbrella Academy · All American · The Lincoln Lawyer · Squid Game · Ozark · Demon Slayer: Kimetsu no Yaiba · Peaky Blinders ...",
        htmlSnippet:
          "Popular on <b>Netflix</b> &middot; Stranger Things &middot; The Umbrella Academy &middot; All American &middot; The Lincoln Lawyer &middot; Squid Game &middot; Ozark &middot; Demon Slayer: Kimetsu no Yaiba &middot; Peaky Blinders&nbsp;...",
        formattedUrl: "https://www.netflix.com/browse/genre/83",
        htmlFormattedUrl: "https://www.<b>netflix</b>.com/browse/genre/83",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ79-cooenTqX0AJkEKFLchjb4_osnTuWS4-6Ru2fuLgpam4zK4zEjguhI",
              width: "299",
              height: "168",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/60ab332b-3682-420e-8c7b-505d1538a139/US-en-20220620-popsignuptwoweeks-perspective_alpha_website_small.jpg",
              "twitter:card": "summary_large_image",
              "twitter:site": "@netflix",
              viewport:
                "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0",
              "og:title": "TV Shows",
              "og:description":
                "These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best programs on TV.",
            },
          ],
          cse_image: [
            {
              src: "https://occ-0-34-299.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZmakScbYf0VnUuAMcNKX2fvWcMhPc05rGSPB2K40iTaPuopC1cHqeBNV2y3lOmPrCj928frrP-Xn5SG8aOaLF04eYQQ6Vaag8bQGK8u56F7qEBFPXRJB6RizZMyN0zX5EjC.jpg?r=695",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title:
          "45 of the Best Netflix Series to Binge Watch Right Now | WIRED UK",
        htmlTitle:
          "45 of the Best <b>Netflix Series</b> to Binge Watch Right Now | WIRED UK",
        link: "https://www.wired.co.uk/article/best-shows-netflix",
        displayLink: "www.wired.co.uk",
        snippet:
          "Struggling with what to watch on Netflix tonight? Look no further than the WIRED guide to the best Netflix TV shows in 2022. Updated weekly.",
        htmlSnippet:
          "Struggling with what to watch on <b>Netflix</b> tonight? Look no further than the WIRED guide to the best <b>Netflix</b> TV <b>shows</b> in 2022. Updated weekly.",
        cacheId: "tfWpj7QwjAEJ",
        formattedUrl: "https://www.wired.co.uk/article/best-shows-netflix",
        htmlFormattedUrl:
          "https://www.wired.co.uk/article/best-<b>shows</b>-<b>netflix</b>",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxh9Yw9w3ZDO0HV7GTrM31e3OQsZVlJPmQUOqf1D7dEd5TFENamszLIds",
              width: "300",
              height: "168",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://media.wired.co.uk/photos/6275a79228c012d1b74a1f9b/16:9/w_1280,c_limit/BRIDGERTON-42-Best-Netflix-Series-Culture.jpg",
              copyright: "Copyright (c) Condé Nast 2022",
              "article:published_time": "2021-03-26T11:55:00.000Z",
              "twitter:card": "summary_large_image",
              "og:site_name": "WIRED UK",
              "parsely-metadata":
                '{"description":"Struggling with what to watch on Netflix tonight? Look no further than the WIRED guide to the best Netflix TV shows in 2022. Updated weekly.","image-16-9":"https://media.wired.co.uk/photos/6275a79228c012d1b74a1f9b/16:9/w_1000,c_limit/BRIDGERTON-42-Best-Netflix-Series-Culture.jpg","image-1-1":"https://media.wired.co.uk/photos/6275a79228c012d1b74a1f9b/1:1/w_1000,c_limit/BRIDGERTON-42-Best-Netflix-Series-Culture.jpg"}',
              "og:description":
                "Struggling with what to watch on Netflix tonight? Look no further than the WIRED guide to the best Netflix TV shows in 2022. Updated weekly.",
              "twitter:creator": "@WiredUK",
              "twitter:image":
                "https://media.wired.co.uk/photos/6275a79228c012d1b74a1f9b/16:9/w_1280,c_limit/BRIDGERTON-42-Best-Netflix-Series-Culture.jpg?mbid=social_retweet",
              "msapplication-tap-highlight": "no",
              "twitter:site": "@WiredUK",
              news_keywords: "netflix,culture guides",
              "content-type": "article",
              "article:content_tier": "free",
              id: "606dbae6687a704c2c3627d0",
              "og:type": "article",
              "article:section": "tags",
              "twitter:title":
                "45 of the Best Netflix Series to Binge Watch Right Now",
              "parsely-post-id": "606dbae6687a704c2c3627d0",
              "twitter:domain": "https://www.wired.co.uk",
              author: "Condé Nast",
              "og:title":
                "45 of the Best Netflix Series to Binge Watch Right Now",
              "fb:pages": "113615355316959",
              "article:author": "WIRED",
              referrer: "no-referrer-when-downgrade",
              "fb:app_id": "166725050017831",
              viewport: "width=device-width, initial-scale=1",
              "twitter:description":
                "Struggling with what to watch on Netflix tonight? Look no further than the WIRED guide to the best Netflix TV shows in 2022. Updated weekly.",
              "og:url": "https://www.wired.co.uk/article/best-shows-netflix",
              "article:opinion": "false",
            },
          ],
          cse_image: [
            {
              src: "https://media.wired.co.uk/photos/6275a79228c012d1b74a1f9b/16:9/w_1280,c_limit/BRIDGERTON-42-Best-Netflix-Series-Culture.jpg",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "Netflix - Watch TV Shows Online, Watch Movies Online",
        htmlTitle:
          "<b>Netflix</b> - Watch TV <b>Shows</b> Online, Watch Movies Online",
        link: "https://www.netflix.com/",
        displayLink: "www.netflix.com",
        snippet:
          "Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.",
        htmlSnippet:
          "Watch <b>Netflix</b> movies &amp; TV <b>shows</b> online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.",
        cacheId: "vqW-ZSFk72kJ",
        formattedUrl: "https://www.netflix.com/",
        htmlFormattedUrl: "https://www.<b>netflix</b>.com/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYQ6PnaLDGP3Ro-Q-LHxGrZK2Xo3nfDd3Ph-tzDzE_wVa2oi6DaGwQWNZS",
              width: "259",
              height: "194",
            },
          ],
          metatags: [
            {
              "twitter:card": "summary_large_image",
              "al:ios:app_name": "Netflix",
              "al:android:package": "com.netflix.mediaclient",
              "al:ios:url": "nflx://www.netflix.com/",
              "og:description":
                "Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.",
              "al:ios:app_store_id": "363590051",
              "al:android:url": "nflx://www.netflix.com/",
              "apple-mobile-web-app-status-bar-style": "black",
              "twitter:site": "@netflix",
              viewport:
                "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0",
              "apple-mobile-web-app-capable": "yes",
              "al:android:app_name": "Netflix",
              "format-detection": "telephone=no",
              "apple-touch-icon":
                "https://assets.nflxext.com/en_us/layout/ecweb/netflix-app-icon_152.jpg",
            },
          ],
          cse_image: [
            {
              src: "https://occ-0-37-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABRUVwm0Th8tURZtHa8QAQoQEK0s2kalECfHtYtFGZ-uckUjl7aHUOilKZVP5joQrLec41raWv_MP0jNW5JYQhcBEfVUlcQqRHcmR.png?r=fcd",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "Request TV shows or movies",
        htmlTitle: "Request TV <b>shows</b> or movies",
        link: "https://help.netflix.com/en/titlerequest",
        displayLink: "help.netflix.com",
        snippet:
          "Request TV shows or movies. Have a TV show or movie you'd like to see on Netflix? Let us know about it below. Wondering why a title is no longer available?",
        htmlSnippet:
          "Request TV <b>shows</b> or movies. Have a TV show or movie you&#39;d like to see on <b>Netflix</b>? Let us know about it below. Wondering why a title is no longer available?",
        cacheId: "GEI6ss_2LY0J",
        formattedUrl: "https://help.netflix.com/en/titlerequest",
        htmlFormattedUrl: "https://help.<b>netflix</b>.com/en/titlerequest",
        pagemap: {
          metatags: [
            {
              viewport:
                "width=device-width, initial-scale=1, viewport-fit=cover",
              _csrf: "3624cd39-1879-4611-8a2d-91f2de6a2b17",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "Watch Tidying Up with Marie Kondo | Netflix Official Site",
        htmlTitle:
          "Watch Tidying Up with Marie Kondo | <b>Netflix</b> Official Site",
        link: "https://www.netflix.com/title/80209379",
        displayLink: "www.netflix.com",
        snippet:
          "In a series of inspiring home makeovers, world-renowned tidying expert Marie Kondo helps clients clear out the clutter -- and choose joy.",
        htmlSnippet:
          "In a <b>series</b> of inspiring home makeovers, world-renowned tidying expert Marie Kondo helps clients clear out the clutter -- and choose joy.",
        cacheId: "hGox23lHvxoJ",
        formattedUrl: "https://www.netflix.com/title/80209379",
        htmlFormattedUrl: "https://www.<b>netflix</b>.com/title/80209379",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRT7YrKTpHg8d_hSBzerNy0HMSlnM0sZiQ4_qFAoMfvYowCKlKt5mq_sQg",
              width: "300",
              height: "168",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://occ-0-116-300.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABalSHBwNXMJnlHT9ltbEq7IA-qr_dA7NSxK3l0uQRD_bDMHxTXPsbRT86H-jkorYOjJe07pyrzymsf2PIXDe9csHqVV_rc_uLx0o.jpg?r=7a9",
              "twitter:card": "summary_large_image",
              "al:ios:app_name": "Netflix",
              "og:title":
                "Watch Tidying Up with Marie Kondo | Netflix Official Site",
              "al:android:package": "com.netflix.mediaclient",
              "og:video:secure_url":
                "https://occ-0-116-300.1.nflxso.net/so/soa1/387/1893613387.mp4?v=1",
              "al:ios:url": "nflx://www.netflix.com/title/80209379",
              "og:description":
                "In a series of inspiring home makeovers, world-renowned tidying expert Marie Kondo helps clients clear out the clutter -- and choose joy.",
              "al:ios:app_store_id": "363590051",
              "al:android:url": "nflx://www.netflix.com/title/80209379",
              "twitter:site": "@netflix",
              "og:video":
                "https://occ-0-116-300.1.nflxso.net/so/soa1/387/1893613387.mp4?v=1",
              viewport:
                "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0",
              "og:video:type": "video/mp4",
              "og:url": "https://www.netflix.com/title/80209379",
              "al:android:app_name": "Netflix",
            },
          ],
          cse_image: [
            {
              src: "https://occ.a.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQV2yZz4e9rgdSlzV4YAyKrYnGklLL_OPFG-n_JK-oqu5npbnTk8hWYik4SJbLB8N4XEaY9StvePg-49fGspC7itaIf0u47QxW5I5DMcOqNktFW_YeOntKIBKQy5BdAgKgYx0w.jpg?r=5ec",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title:
          "Best Netflix Series To Watch Right Now (May 2022) << Rotten ...",
        htmlTitle:
          "Best <b>Netflix Series</b> To Watch Right Now (May 2022) &lt;&lt; Rotten ...",
        link: "https://editorial.rottentomatoes.com/guide/best-netflix-shows-and-movies-to-binge-watch-now/",
        displayLink: "editorial.rottentomatoes.com",
        snippet:
          "May 11, 2022 ... To be included in our list of the best of Netflix shows, titles must be Fresh (60% or higher on the Tomatometer) and have at least 10 reviews in ...",
        htmlSnippet:
          "May 11, 2022 <b>...</b> To be included in our list of the best of <b>Netflix shows</b>, titles must be Fresh (60% or higher on the Tomatometer) and have at least 10 reviews in&nbsp;...",
        cacheId: "yLJ3munXxUkJ",
        formattedUrl:
          "https://editorial.rottentomatoes.com/.../best-netflix-shows-and-movies-to- binge-watch-now/",
        htmlFormattedUrl:
          "https://editorial.rottentomatoes.com/.../best-<b>netflix</b>-<b>shows</b>-and-movies-to- binge-watch-now/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT3wmNf0DX7EfOPCDoRsBHziK51C-oZew_QxYlWXyrrhmwRvOOmNHZYjPs",
              width: "311",
              height: "162",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2022/04/11181541/heartstopper-101-600x314-1.jpg",
              "og:type": "article",
              "twitter:card": "summary_large_image",
              "twitter:title":
                "Best Netflix Series To Watch Right Now (May 2022)",
              "og.description":
                '"Heartstopper" joins our list of the 200 best series on Netflix. Find out where the streamer’s other top series rank, including "Ozark," "Stranger Things," "Bridgerton," "The Witcher," "Sweet Tooth," and "The Crown."',
              "og:title": "Best Netflix Series To Watch Right Now (May 2022)",
              "msapplication-tileimage":
                "https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2022/05/09104817/favicon.png",
              "twitter:image":
                "https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2022/04/11181541/heartstopper-101-600x314-1.jpg",
              "fb:app_id": "326803741017",
              "twitter:site": "@rottentomatoes",
              editorialid: "175594",
              viewport: "width=device-width, initial-scale=1",
              "twitter:description":
                '"Heartstopper" joins our list of the 200 best series on Netflix. Find out where the streamer’s other top series rank, including "Ozark," "Stranger Things," "Bridgerton," "The Witcher," "Sweet Tooth," and "The Crown."',
              "og:url":
                "https://editorial.rottentomatoes.com/guide/best-netflix-shows-and-movies-to-binge-watch-now/",
            },
          ],
          cse_image: [
            {
              src: "https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2022/04/11181541/heartstopper-101-600x314-1.jpg",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "TV Drama Series | Netflix Official Site",
        htmlTitle: "TV Drama <b>Series</b> | <b>Netflix</b> Official Site",
        link: "https://www.netflix.com/browse/genre/11714",
        displayLink: "www.netflix.com",
        snippet:
          "Familiar TV Favorites · The Vampire Diaries · Grey's Anatomy · NCIS · Gilmore Girls · Shameless (U.S.) · Grace and Frankie · Lucifer · Better Call Saul ...",
        htmlSnippet:
          "Familiar TV Favorites &middot; The Vampire Diaries &middot; Grey&#39;s Anatomy &middot; NCIS &middot; Gilmore Girls &middot; Shameless (U.S.) &middot; Grace and Frankie &middot; Lucifer &middot; Better Call Saul&nbsp;...",
        formattedUrl: "https://www.netflix.com/browse/genre/11714",
        htmlFormattedUrl: "https://www.<b>netflix</b>.com/browse/genre/11714",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtf7rP7RwscjLJTUkOZjXWG5bF3Ohjs_TGrZMgIYzNkhNGTHjQrIsc7-k",
              width: "299",
              height: "168",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/60ab332b-3682-420e-8c7b-505d1538a139/US-en-20220620-popsignuptwoweeks-perspective_alpha_website_small.jpg",
              "twitter:card": "summary_large_image",
              "twitter:site": "@netflix",
              viewport:
                "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0",
              "og:title": "TV Drama Series",
              "og:description":
                "Some stories are so rich they need more than a movie to tell them. Crime sagas, medical dramas, sci-fi and more–these shows will keep you glued to your seat.",
            },
          ],
          cse_image: [
            {
              src: "https://occ-0-55-990.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABca2DuILY0smongIAf2baOcG9C41lPQeCIrlcoNTwd45m1amb8F988PPo2vsm8ljEQ8WMG5gKRiiWLnhHOeCS2foG3uSyHFVPh0H-Mi6a-PqDZKx4FrSlVNJT09xqcj1QETQ.jpg?r=5e6",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title:
          "Update: Production Suspended On Netflix Series 'The Chosen One ...",
        htmlTitle:
          "Update: Production Suspended On <b>Netflix Series</b> &#39;The Chosen One ...",
        link: "https://deadline.com/2022/06/two-actors-dead-six-injured-auto-accident-involving-crew-from-netflixs-the-chosen-one-production-suspended-1235048203/",
        displayLink: "deadline.com",
        snippet:
          '7 days ago ... Production has been suspended on Netflix series "The Chosen One" after Two Actors Die, Six Injured In Auto Accident Involving Crew.',
        htmlSnippet:
          "7 days ago <b>...</b> Production has been suspended on <b>Netflix series</b> &quot;The Chosen One&quot; after Two Actors Die, Six Injured In Auto Accident Involving Crew.",
        cacheId: "izTrKW6Z40YJ",
        formattedUrl:
          "https://deadline.com/.../two-actors-dead-six-injured-auto-accident-involving- crew-from-netflixs-the-chosen-one-production-suspended-1235048203/",
        htmlFormattedUrl:
          "https://deadline.com/.../two-actors-dead-six-injured-auto-accident-involving- crew-from-<b>netflix</b>s-the-chosen-one-production-suspended-1235048203/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzpfSdn4_snYq-ah_fRSmUGyRkaX1xoirQo_IyeKA6iC5qeurr8Y8vpJV",
              width: "236",
              height: "213",
            },
          ],
          metatags: [
            {
              comment_count: "79",
              "msapplication-config":
                "https://deadline.com/wp-content/themes/pmc-deadline-2019/assets/app/browserconfig.xml",
              "apple-itunes-app": "app-id=533209613",
              "og:image":
                "https://deadline.com/wp-content/uploads/2022/06/Cyberpunk-Edgerunners-Netflix-e1655064864668.jpg?w=615",
              "theme-color": "#fff",
              "article:published_time": "2022-06-18T19:45:44+00:00",
              "og:image:width": "615",
              "twitter:card": "summary_large_image",
              "og:site_name": "Deadline",
              "apple-mobile-web-app-title": "Deadline",
              "msapplication-tileimage":
                "https://deadline.com/wp-content/themes/pmc-deadline-2019/assets/app/icons/icon-144x144.png",
              title:
                "Update: Production Suspended On Netflix Series 'The Chosen One' After Two Actors Die, Six Injured In Auto Accident Involving Cast & Crew",
              body: 'UPDATE: More details have emerged from the accident that claimed the lives of two actors and injured two cast members and four crew members in Mexico while filming Netflix series The Chosen One.\r\n\r\nThe production of the series has been temporarily paused by Redrum, the company running the filming. The accident occurred when the victims were in transit from Santa Rosalía to the local airport on June 16th. The injured cast and crew members are in stable condition.\r\n\r\nNetflix has not yet commented on the accident.\r\n\r\nSAG-AFTRA is looking into the accident. “SAG-AFTRA has been in contact with Netflix and with the Mexican actors union ANDA about this incident and we are investigating the circumstances with local production," said a spokesperson. "On set safety is always our top priority. We will continue to take all necessary steps to ensure that our members and others are safe in their workplace.”\r\n\r\nEARLIER: Crew members were riding in a van when it crashed and flipped in an accident near filming of the Net',
              y_key: "a810be562637c603",
              "og:description":
                "UPDATE: More details have emerged from the accident that claimed the lives of two actors and injured two cast members and four crew members in Mexico while filming Netflix series The Chosen One. Th…",
              "twitter:creator": "@DEADLINE",
              "ia:markup_url_dev":
                "https://deadline.com/2022/06/two-actors-dead-six-injured-auto-accident-involving-crew-from-netflixs-the-chosen-one-production-suspended-1235048203/?ia_markup=1",
              "twitter:image":
                "https://deadline.com/wp-content/uploads/2022/06/Cyberpunk-Edgerunners-Netflix-e1655064864668.jpg?w=615",
              "twitter:site": "@DEADLINE",
              content_type: "Article",
              "article:modified_time": "2022-06-18T23:00:49+00:00",
              news_keywords: "Netflix, The Chosen One",
              published_at: "2022-06-18 12:45:44",
              "msapplication-tilecolor": "#eff4ff",
              "application-name": "Deadline",
              image:
                "https://deadline.com/wp-content/uploads/2022/06/Cyberpunk-Edgerunners-Netflix-e1655064864668.jpg?w=296&h=166&crop=1",
              "og:type": "article",
              "og:image:alt": "Netflix logo",
              "twitter:title":
                "Update: Production Suspended On Netflix Series ‘The Chosen One’ After Two Actors Die, Six Injured In Auto Accident Involving Cast & Crew",
              author: "Bruce Haring",
              topics: "Film",
              "og:title":
                "Update: Production Suspended On Netflix Series ‘The Chosen One’ After Two Actors Die, Six Injured In Auto Accident Involving Cast & Crew",
              "og:image:height": "555",
              "fb:pages": "105558754896",
              tags: "Netflix",
              fragment: "!",
              "apple-mobile-web-app-status-bar-style": "black-translucent",
              post_id: "1235048203",
              viewport: "width=device-width, initial-scale=1.0",
              "apple-mobile-web-app-capable": "yes",
              onesignal: "wordpress-plugin",
              "twitter:description":
                'Production has been suspended on Netflix series "The Chosen One" after Two Actors Die, Six Injured In Auto Accident Involving Crew',
              "mobile-web-app-capable": "yes",
              "og:locale": "en_US",
              "og:url":
                "https://deadline.com/2022/06/two-actors-dead-six-injured-auto-accident-involving-crew-from-netflixs-the-chosen-one-production-suspended-1235048203/",
              "apple-touch-fullscreen": "YES",
            },
          ],
          cse_image: [
            {
              src: "https://deadline.com/wp-content/uploads/2022/06/Cyberpunk-Edgerunners-Netflix-e1655064864668.jpg?w=615",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title:
          "The 62 Best TV Shows on Netflix to Watch Right Now (June 2022 ...",
        htmlTitle:
          "The 62 Best TV <b>Shows</b> on <b>Netflix</b> to Watch Right Now (June 2022 ...",
        link: "https://www.tvguide.com/news/best-shows-on-netflix-right-now/",
        displayLink: "www.tvguide.com",
        snippet:
          "Jun 17, 2022 ... The 62 Best TV Shows on Netflix to Watch Right Now (June 2022) · Iron Chef: Quest for an Iron Legend · Peaky Blinders · Keep Sweet: Pray and Obey.",
        htmlSnippet:
          "Jun 17, 2022 <b>...</b> The 62 Best TV <b>Shows</b> on <b>Netflix</b> to Watch Right Now (June 2022) &middot; Iron Chef: Quest for an Iron Legend &middot; Peaky Blinders &middot; Keep Sweet: Pray and Obey.",
        formattedUrl:
          "https://www.tvguide.com/news/best-shows-on-netflix-right-now/",
        htmlFormattedUrl:
          "https://www.tvguide.com/news/best-<b>shows</b>-on-<b>netflix</b>-right-now/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdx80HHTPR5EzFoDr6EhBgaho7xsqLPg6DJHi6iyY-ui_QWE_2RLI9znM",
              width: "300",
              height: "168",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://www.tvguide.com/a/i/r/2022/06/17/82a7aed2-2062-42dd-afcf-c434fa326f6d/watermark/cddbc0cc4bb778ef271df609b94e7331/061722-iron-chef.png",
              "twitter:card": "summary_large_image",
              "og:type": "article",
              "og:image:width": "850",
              "twitter:title":
                "The 62 Best TV Shows on Netflix to Watch Right Now (June 2022)",
              "og:site_name": "TVGuide.com",
              "twitter:url":
                "https://www.tvguide.com/news/best-shows-on-netflix-right-now/",
              "og:title":
                "The 62 Best TV Shows on Netflix to Watch Right Now (June 2022)",
              "og:image:height": "850",
              "og:description":
                "Get cooking with Iron Chef: Quest for an Iron Legend",
              "twitter:image":
                "https://www.tvguide.com/a/i/r/2022/06/17/82a7aed2-2062-42dd-afcf-c434fa326f6d/watermark/cddbc0cc4bb778ef271df609b94e7331/061722-iron-chef.png",
              "fb:app_id": "63084645929",
              "twitter:site": "@TVGuide",
              viewport: "width=device-width, initial-scale=1",
              nuxtstatus: "loaded",
              "twitter:description":
                "What TV shows should you watch on Netflix? We've put together a list of the best TV series streaming on Netflix right now, from classics to new releases.",
              "og:url":
                "https://www.tvguide.com/news/best-shows-on-netflix-right-now/",
            },
          ],
          cse_image: [
            {
              src: "https://www.tvguide.com/a/i/r/2022/06/17/82a7aed2-2062-42dd-afcf-c434fa326f6d/watermark/cddbc0cc4bb778ef271df609b94e7331/061722-iron-chef.png",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "The 50 Best TV Shows on Netflix Right Now - The New York Times",
        htmlTitle:
          "The 50 Best TV <b>Shows</b> on <b>Netflix</b> Right Now - The New York Times",
        link: "https://www.nytimes.com/article/best-tv-shows-netflix.html",
        displayLink: "www.nytimes.com",
        snippet:
          "The 50 Best TV Shows on Netflix Right Now · 'Somebody Feed Phil' (2018-present) · 'Borgen' (2010-present) · 'Ozark' (2017-22) · 'Love Death & Robots' (2019-present).",
        htmlSnippet:
          "The 50 Best TV <b>Shows</b> on <b>Netflix</b> Right Now &middot; &#39;Somebody Feed Phil&#39; (2018-present) &middot; &#39;Borgen&#39; (2010-present) &middot; &#39;Ozark&#39; (2017-22) &middot; &#39;Love Death &amp; Robots&#39; (2019-present).",
        formattedUrl:
          "https://www.nytimes.com/article/best-tv-shows-netflix.html",
        htmlFormattedUrl:
          "https://www.nytimes.com/article/best-tv-<b>shows</b>-<b>netflix</b>.html",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmoh-fVTS9srFdxqFzJcChORp8rqs9Romn04kHGfo2-iL-re-NkJ6sxmA",
              width: "310",
              height: "162",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://static01.nyt.com/images/2021/08/20/arts/best-netflix-chair/20thechair-3-facebookJumbo.jpg",
              nyt_uri: "nyt://article/c0395de9-a013-5baa-868e-303bb261ea28",
              "twitter:app:id:googleplay": "com.nytimes.android",
              "twitter:card": "summary_large_image",
              pt: "article",
              "twitter:url":
                "https://www.nytimes.com/article/best-tv-shows-netflix.html",
              pdate: "20200904",
              articleid: "100000007303142",
              "al:android:package": "com.nytimes.android",
              "al:ipad:app_store_id": "357066198",
              "twitter:app:name:googleplay": "NYTimes",
              "og:description":
                "New shows come to the streaming giant all the time — too many to ever watch them all. We’re here to help.",
              "twitter:image":
                "https://static01.nyt.com/images/2021/08/20/arts/best-netflix-chair/20thechair-3-videoSixteenByNine3000.jpg",
              pst: "News",
              "twitter:image:alt":
                "From left, Ken Bolden, Sandra Oh and Mark Philip Stevenson in a scene from “The Chair.”",
              "al:iphone:app_name": "NYTimes",
              "twitter:site": "@nytimes",
              "article:modified_time": "2022-06-24T21:26:18.069Z",
              news_keywords: "TV,Netflix",
              scg: "television",
              "article:content_tier": "metered",
              "msapplication-starturl": "https://www.nytimes.com",
              image:
                "https://static01.nyt.com/images/2021/08/20/arts/best-netflix-chair/20thechair-3-facebookJumbo.jpg",
              "og:type": "article",
              "og:image:alt":
                "From left, Ken Bolden, Sandra Oh and Mark Philip Stevenson in a scene from “The Chair.”",
              "twitter:title": "The 50 Best TV Shows on Netflix Right Now",
              "article:section": "Arts",
              cg: "arts",
              pubp_event_id: "pubp://event/a37607be516945c1b9648c7603ae8843",
              "og:title": "The 50 Best TV Shows on Netflix Right Now",
              "slack-app-id": "A0121HXPPTQ",
              cn: "what-to-watch",
              url: "https://www.nytimes.com/article/best-tv-shows-netflix.html",
              "article:tag": "Television",
              "al:iphone:url":
                "nytimes://www.nytimes.com/article/best-tv-shows-netflix.html",
              "al:android:url":
                "nyt://article/c0395de9-a013-5baa-868e-303bb261ea28",
              ct: "spotlight",
              "twitter:app:url:googleplay":
                "nyt://article/c0395de9-a013-5baa-868e-303bb261ea28",
              "fb:app_id": "9869919170",
              "al:ipad:url":
                "nytimes://www.nytimes.com/article/best-tv-shows-netflix.html",
              byl: "By Noel Murray",
              viewport: "width=device-width, initial-scale=1",
              "twitter:description":
                "New shows come to the streaming giant all the time — too many to ever watch them all. We’re here to help.",
              "al:iphone:app_store_id": "284862083",
              "al:ipad:app_name": "NYTimes",
              "og:url":
                "https://www.nytimes.com/article/best-tv-shows-netflix.html",
              "al:android:app_name": "NYTimes",
              "article:opinion": "false",
            },
          ],
          cse_image: [
            {
              src: "https://static01.nyt.com/images/2021/08/20/arts/best-netflix-chair/20thechair-3-facebookJumbo.jpg",
            },
          ],
        },
      },
    ],
  },
  {
    kind: "customsearch#search",
    url: {
      type: "application/json",
      template:
        "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
    },
    queries: {
      request: [
        {
          title: "Google Custom Search - netflix series",
          totalResults: "35850000000",
          searchTerms: "netflix series",
          count: 10,
          startIndex: 1,
          inputEncoding: "utf8",
          outputEncoding: "utf8",
          safe: "off",
          cx: "76fa2cba6d37c6564",
          searchType: "image",
        },
      ],
      nextPage: [
        {
          title: "Google Custom Search - netflix series",
          totalResults: "35850000000",
          searchTerms: "netflix series",
          count: 10,
          startIndex: 11,
          inputEncoding: "utf8",
          outputEncoding: "utf8",
          safe: "off",
          cx: "76fa2cba6d37c6564",
          searchType: "image",
        },
      ],
    },
    context: {
      title: "My Google",
    },
    searchInformation: {
      searchTime: 0.39501,
      formattedSearchTime: "0.40",
      totalResults: "35850000000",
      formattedTotalResults: "35,850,000,000",
    },
    items: [
      {
        kind: "customsearch#result",
        title:
          "15 Best Shows on Netflix to Stream in 2022 - Best Netflix Shows",
        htmlTitle:
          "15 Best <b>Shows</b> on <b>Netflix</b> to Stream in 2022 - Best <b>Netflix Shows</b>",
        link: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-shows-on-netflix-stranger-things-1654615148.jpeg?crop=1.00xw:0.801xh;0,0&resize=640:*",
        displayLink: "www.thepioneerwoman.com",
        snippet:
          "15 Best Shows on Netflix to Stream in 2022 - Best Netflix Shows",
        htmlSnippet:
          "15 Best <b>Shows</b> on <b>Netflix</b> to Stream in 2022 - Best <b>Netflix Shows</b>",
        mime: "image/jpeg",
        fileFormat: "image/jpeg",
        image: {
          contextLink:
            "https://www.thepioneerwoman.com/news-entertainment/g40189249/best-shows-on-netflix/",
          height: 641,
          width: 640,
          byteSize: 112709,
          thumbnailLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTFZe6f4rWQICqWpQ4sZLIXqBlDK7IqbCoSzuIkrYqYF4It5uT7Va-Tw&s",
          thumbnailHeight: 137,
          thumbnailWidth: 137,
        },
      },
      {
        kind: "customsearch#result",
        title:
          "Top 10 Best Binge-Worthy Netflix Series - The Colour Bar by Lorena",
        htmlTitle:
          "Top 10 Best Binge-Worthy <b>Netflix Series</b> - The Colour Bar by Lorena",
        link: "https://i0.wp.com/www.thecolourbar.me/wp-content/uploads/2020/04/netflixblog.png?fit=800%2C800&ssl=1",
        displayLink: "www.thecolourbar.me",
        snippet:
          "Top 10 Best Binge-Worthy Netflix Series - The Colour Bar by Lorena",
        htmlSnippet:
          "Top 10 Best Binge-Worthy <b>Netflix Series</b> - The Colour Bar by Lorena",
        mime: "image/png",
        fileFormat: "image/png",
        image: {
          contextLink:
            "https://www.thecolourbar.me/2020/04/02/netflix-binge-worthy-series/",
          height: 800,
          width: 800,
          byteSize: 583049,
          thumbnailLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Bj6TYmOz6f0DvtwT48ALN9sMwE8pAMM_-xPTXgn3zOBPFrMKwBC0N3qT&s",
          thumbnailHeight: 143,
          thumbnailWidth: 143,
        },
      },
      {
        kind: "customsearch#result",
        title:
          "57 Best Shows on Netflix in 2021 — Netflix Dramas, Mysteries, Comedies",
        htmlTitle:
          "57 Best <b>Shows</b> on <b>Netflix</b> in 2021 — <b>Netflix</b> Dramas, Mysteries, Comedies",
        link: "https://www.rd.com/wp-content/uploads/2021/12/shows-to-watch-on-netflix-FT.jpg",
        displayLink: "www.rd.com",
        snippet:
          "57 Best Shows on Netflix in 2021 — Netflix Dramas, Mysteries, Comedies",
        htmlSnippet:
          "57 Best <b>Shows</b> on <b>Netflix</b> in 2021 — <b>Netflix</b> Dramas, Mysteries, Comedies",
        mime: "image/jpeg",
        fileFormat: "image/jpeg",
        image: {
          contextLink: "https://www.rd.com/list/best-shows-on-netflix/",
          height: 1600,
          width: 2400,
          byteSize: 580649,
          thumbnailLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJcMXT-MhrOp3RXVWex4Ue_9_m9t7mpfIiA-mZxUTcAnHfJisuMMv_g&s",
          thumbnailHeight: 100,
          thumbnailWidth: 150,
        },
      },
      {
        kind: "customsearch#result",
        title: "A chilling gruesome Netflix series worth watching - The Runner",
        htmlTitle:
          "A chilling gruesome <b>Netflix series</b> worth watching - The Runner",
        link: "https://i0.wp.com/therunneronline.com/wp-content/uploads/2021/10/SquidGameReviewImage.jpeg?fit=675%2C900&ssl=1",
        displayLink: "therunneronline.com",
        snippet:
          "A chilling gruesome Netflix series worth watching - The Runner",
        htmlSnippet:
          "A chilling gruesome <b>Netflix series</b> worth watching - The Runner",
        mime: "image/jpeg",
        fileFormat: "image/jpeg",
        image: {
          contextLink:
            "https://therunneronline.com/29781/opinion/a-chilling-gruesome-netflix-series-worth-watching/",
          height: 900,
          width: 675,
          byteSize: 99824,
          thumbnailLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCi25I4bgSfFwE7X8cA83UPvBtIjkt_JuaZWgoWV_IMPStqa_kJEQLQ&s",
          thumbnailHeight: 146,
          thumbnailWidth: 110,
        },
      },
      {
        kind: "customsearch#result",
        title:
          "Netflix: Here Are The Top 10 Foreign Language TV Series And 12 New ...",
        htmlTitle:
          "<b>Netflix</b>: Here Are The Top 10 Foreign Language TV <b>Series</b> And 12 New ...",
        link: "https://imageio.forbes.com/blogs-images/danafeldman/files/2018/03/NF-TV-Time.jpg?format=jpg&width=960",
        displayLink: "www.forbes.com",
        snippet:
          "Netflix: Here Are The Top 10 Foreign Language TV Series And 12 New ...",
        htmlSnippet:
          "<b>Netflix</b>: Here Are The Top 10 Foreign Language TV <b>Series</b> And 12 New ...",
        mime: "image/jpeg",
        fileFormat: "image/jpeg",
        image: {
          contextLink:
            "https://www.forbes.com/sites/danafeldman/2018/03/07/netflix-here-are-the-top-10-foreign-language-tv-series-and-12-new-shows-coming-soon/",
          height: 645,
          width: 645,
          byteSize: 89072,
          thumbnailLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GGzS7NuUDfv9cIrigmDUkGQfKvqcSodpGJQSRm2fcCbv1p96EZEg2gB-&s",
          thumbnailHeight: 137,
          thumbnailWidth: 137,
        },
      },
      {
        kind: "customsearch#result",
        title:
          "37 Best Teen Shows on Netflix – Best Television Shows for Teens",
        htmlTitle:
          "37 Best Teen <b>Shows</b> on <b>Netflix</b> – Best Television <b>Shows</b> for Teens",
        link: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/teen-showes-1612304250.jpg",
        displayLink: "www.seventeen.com",
        snippet:
          "37 Best Teen Shows on Netflix – Best Television Shows for Teens",
        htmlSnippet:
          "37 Best Teen <b>Shows</b> on <b>Netflix</b> – Best Television <b>Shows</b> for Teens",
        mime: "image/jpeg",
        fileFormat: "image/jpeg",
        image: {
          contextLink:
            "https://www.seventeen.com/celebrity/movies-tv/g31917674/teen-shows-on-netflix/",
          height: 960,
          width: 1920,
          byteSize: 429041,
          thumbnailLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbaTKaJqbyK0lA1lKHiJKj91xk3DTrUjqsb_rf09gm_K-JtOM18BLEiQ&s",
          thumbnailHeight: 75,
          thumbnailWidth: 150,
        },
      },
      {
        kind: "customsearch#result",
        title: "Best Netflix Series - Top 11 - The Moscow Times",
        htmlTitle: "Best <b>Netflix Series</b> - Top 11 - The Moscow Times",
        link: "https://static.themoscowtimes.com/image/article_1360/95/nacosKopie.JPG",
        displayLink: "www.themoscowtimes.com",
        snippet: "Best Netflix Series - Top 11 - The Moscow Times",
        htmlSnippet: "Best <b>Netflix Series</b> - Top 11 - The Moscow Times",
        mime: "image/jpeg",
        fileFormat: "image/jpeg",
        image: {
          contextLink:
            "https://www.themoscowtimes.com/2020/04/15/best-netflix-series-top-11-a70003",
          height: 765,
          width: 1360,
          byteSize: 401875,
          thumbnailLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkW7goqUkoOymdHbyVsPxsOuwQeizzcdRup_x40W1wdmElAlW4xA1nEg&s",
          thumbnailHeight: 84,
          thumbnailWidth: 150,
        },
      },
      {
        kind: "customsearch#result",
        title:
          "Madhuri Dixit Nene's Debut Netflix Series 'The Fame Game' to ...",
        htmlTitle:
          "Madhuri Dixit Nene&#39;s Debut <b>Netflix Series</b> &#39;The Fame Game&#39; to ...",
        link: "https://images.ctfassets.net/4cd45et68cgf/2mUIgmsgzIx0sFFOGXy3r4/d371141bf033724346d5afe096ac7363/EN_IN__TheFameGame_KA2_Main_Square_40x40_sRGB.jpg?w=2560",
        displayLink: "about.netflix.com",
        snippet:
          "Madhuri Dixit Nene's Debut Netflix Series 'The Fame Game' to ...",
        htmlSnippet:
          "Madhuri Dixit Nene&#39;s Debut <b>Netflix Series</b> &#39;The Fame Game&#39; to ...",
        mime: "image/jpeg",
        fileFormat: "image/jpeg",
        image: {
          contextLink:
            "https://about.netflix.com/en/news/netflixs-the-fame-game-to-release-on-february-25",
          height: 2560,
          width: 2560,
          byteSize: 805589,
          thumbnailLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsED0EjhFIERROSJ0r1xXZw1GC3rpOv3PUMIdWA3EfR7sxHQn7UR-oF4&s",
          thumbnailHeight: 150,
          thumbnailWidth: 150,
        },
      },
      {
        kind: "customsearch#result",
        title:
          "37 Best Teen Shows on Netflix – Best Television Shows for Teens",
        htmlTitle:
          "37 Best Teen <b>Shows</b> on <b>Netflix</b> – Best Television <b>Shows</b> for Teens",
        link: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/teen-showes-1612304250.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        displayLink: "www.seventeen.com",
        snippet:
          "37 Best Teen Shows on Netflix – Best Television Shows for Teens",
        htmlSnippet:
          "37 Best Teen <b>Shows</b> on <b>Netflix</b> – Best Television <b>Shows</b> for Teens",
        mime: "image/jpeg",
        fileFormat: "image/jpeg",
        image: {
          contextLink:
            "https://www.seventeen.com/celebrity/movies-tv/g31917674/teen-shows-on-netflix/",
          height: 600,
          width: 1200,
          byteSize: 196447,
          thumbnailLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-YIhBfrK0qdd9k3JztLlwo1_oGOrzEduqa1LtAeB_qMuec6-mqvMoA&s",
          thumbnailHeight: 75,
          thumbnailWidth: 150,
        },
      },
      {
        kind: "customsearch#result",
        title: "Lucifer (TV Series 2016–2021) - IMDb",
        htmlTitle: "Lucifer (TV <b>Series</b> 2016–2021) - IMDb",
        link: "https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        displayLink: "www.imdb.com",
        snippet: "Lucifer (TV Series 2016–2021) - IMDb",
        htmlSnippet: "Lucifer (TV <b>Series</b> 2016–2021) - IMDb",
        mime: "image/jpeg",
        fileFormat: "image/jpeg",
        image: {
          contextLink: "https://www.imdb.com/title/tt4052886/",
          height: 1500,
          width: 1012,
          byteSize: 552448,
          thumbnailLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZOLTjil-JK7c3F7jWVdHZCyFAN7_X9hwgNdH5n69XrpAYGJtdF_0Ieao&s",
          thumbnailHeight: 150,
          thumbnailWidth: 101,
        },
      },
    ],
  },
];

export default mockSearchResults;
