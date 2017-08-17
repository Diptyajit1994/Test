// Initialize your app
var myApp = new Framework7({
    modalTitle: 'Regular.li',
    //Enable Material theme
    material: true,
    //materialPageLoadDelay  :100,
    allowDuplicateUrls: false,
    preloadPreviousPage: true,
    //pushState: true,
    modalCloseByOutside: false,
    cache: false,
    tapHold: false,
    uniqueHistory: true,
    uniqueHistoryIgnoreGetParameters: true,
    //template7Pages: true,
    //precompileTemplates: true,
    //imagesLazyLoadPlaceholder: '<span class="preloader"></span>',

});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: false,
    domCache: false,
    uniqueHistory: true,
    uniqueHistoryIgnoreGetParameters: true,
    allowDuplicateUrls: false,

});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

myApp.onPageInit('class7Activity', function (page) {
	
	


})

myApp.onPageInit('class11Activity', function (page) {


})

myApp.onPageInit('college', function (page) {


})

myApp.onPageInit('vibration', function (page) {
	

 $('#term_demo').terminal(function(command) {
        if (command !== '') {
            try {
                var result = window.eval(command);
                if (result !== undefined) {
                    this.echo(new String(result));
                }
            } catch(e) {
                this.error(new String(e));
            }
        } else {
           this.echo('');
        }
    }, {
        greetings: 'Javascript Interpreter',
        name: 'js_demo',
		height: 300,
        prompt: 'js> '
    });

})
var mySwiper1 = myApp.swiper('.swiper-1', {
  pagination:'.swiper-1 .swiper-pagination',
  spaceBetween: 50
});
