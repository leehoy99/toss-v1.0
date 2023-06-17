$(window).on('load', function() {
    setTimeout(function(){
        $(".loading").fadeOut();
        $('body').css('overflow-y','auto')
        $('html').animate({scrollTop: 0},0);
    }, 0);
    
    setTimeout(() => {
        $('.section1 .paragraph-box').addClass('on');
        $('.section1 .app-button').addClass('on');
        $('.section1 .down-arrow').addClass('on');
        $('.section1 .down-arrow::after').addClass('on');
    }, 1300);
    
    $(window).resize(() => {
        if($(window).width() <= 680) {
            console.log($(window).width())
            $('.section3 .contents .section-img-1-box').addClass('res-ani');
            $('.section3 .contents .section-img-2-box').addClass('res-ani');
        } else if ($(window).width() > 680){
                $('.section3 .contents .section-img-1-box').removeClass('res-ani');
                $('.section3 .contents .section-img-2-box').removeClass('res-ani');
                $('.section3 .contents .section-img-1-box').css({'transform':'none'})
                $('.section3 .contents .section-img-2-box').css({'transform':'none'})
            }
        })
        $(window).trigger('resize');
    
    if($(window).width() <= 680) {
        $('.break').append('<br />')
    } 
    if ($(window).width() > 680){
        $('.break br').remove()
        }

    let clickCount = 0;
        $('.nav-box .response-box .app-download-btn').click(function (){ 
            if(clickCount%2 == 0)
            {
                $('.nav-box .response-box .app-download-menu').css({'display':'flex'});
                clickCount ++
            } else {
                $('.nav-box .response-box .app-download-menu').css({'display':'none'});
                clickCount ++
            };
        });
        $('.nav-box .response-box .toggle-btn').click(function (){ 

            if(clickCount%2 == 0)
            {
                $('.nav-box .response-box .toggle-btn-on').css({'opacity':'0'});
                $('.nav-box .response-box .toggle-btn-off').css({'opacity':'0.35'});
                $('.toggle-menu').slideToggle('fast');
                $('.toggle-menu').css({'display':'block'});
                clickCount ++;
            } else {
                $('.nav-box .response-box .toggle-btn-on').css({'opacity':'0.35'});
                $('.nav-box .response-box .toggle-btn-off').css({'opacity':'0'});
                $('.toggle-menu').slideToggle('fast');
                clickCount ++;
            };
            $('section').click(function() {
                if(clickCount%2 !== 0) {
                    $('.nav-box .response-box .toggle-btn-on').css({'opacity':'0.35'});
                    $('.nav-box .response-box .toggle-btn-off').css({'opacity':'0'});
                    $('.toggle-menu').slideToggle('fast');
                    clickCount ++
                }
            })
        });

        function gallery () {
            let count = 1;
            setInterval(() => {
                const timeCalc = count++ %3
                console.log(timeCalc);
            
                switch (timeCalc) {
                    case 0 : {
                        $('.section5 .contents .img-box .inner-img-1').addClass('on');
                        $('.section5 .contents .img-box .inner-img-2').removeClass('on');
                        $('.section5 .contents .img-box .inner-img-3').removeClass('on');
                    }
                        break;
                    case 1 : {
                        $('.section5 .contents .img-box .inner-img-1').removeClass('on');
                        $('.section5 .contents .img-box .inner-img-2').addClass('on');
                        $('.section5 .contents .img-box .inner-img-3').removeClass('on');
                    }
                        break;
                    case 2 : {
                        $('.section5 .contents .img-box .inner-img-1').removeClass('on');
                        $('.section5 .contents .img-box .inner-img-2').removeClass('on');
                        $('.section5 .contents .img-box .inner-img-3').addClass('on');
                    }
                        break;
                    default: return;
                }
            }, 3000);
        } gallery()

    $('.down-arrow').click(function(){
        const dis = $('.section2').offset().top;
        $('html').animate({scrollTop: dis}, 1000)
    })
    $(window).scroll(function () {         
        
        // nav-fix

        const sct = $(window).scrollTop();
        let calc;
        if(sct > 1) {
            $('.nav').addClass('fixed');
        } else if (sct <= 1) {
            $('.nav').removeClass('fixed');
        }

        // section scroll action

        
        function sectionOffset(section) {
            var secOff = $(section).offset();
            return secOff.top;
        }
        //section3
        
        if (sct >= sectionOffset('.section3') - 700) {
            $('.section3 .contents .main-paragraph').addClass('ani');
            $('.section3 .contents .sub-paragraph').addClass('ani');
            $('.section3 .contents .section-img-1-box .phone-img').addClass('ani');
            $('.section3 .contents .section-img-1-box .inner-img').addClass('ani');
            $('.section3 .contents .section-img-2-box .phone-img').addClass('ani');
            $('.section3 .contents .section-img-2-box .inner-img').addClass('ani');
        }

        const sec3 = -(sct-1270) 
        if (sct >= sectionOffset('.section3') && sec3 >= -230) {
            
            console.log(sectionOffset('.section3'))
            $('.section3 .contents .section-img-1-box.res-ani').css({'transform':`translateX(${(sec3 + 83)*1.2 + 'px'})`})
            $('.section3 .contents .section-img-2-box.res-ani').css({'transform':`translateX(${(sec3  + 83)*1.2 + 'px'})`})
        } 
        
        //section4

        if (sct >= sectionOffset('.section4') - 700) {
            $('.section4 .contents .main-paragraph').addClass('ani');
            $('.section4 .contents-box .contents-paragraph-box').addClass('ani');
            $('.section4 .contents-box .contents-card').addClass('ani');
        }

        //section5


        if (sct > sectionOffset('.section5') - 700) {
            $('.section5 .contents .main-paragraph').addClass('ani');
            $('.section5 .contents .img-box').addClass('ani');
            $('.section5 .contents .paragraph-box .paragraph-text-box .sub-paragraph').addClass('ani');
            $('.section5 .contents .paragraph-box .paragraph-text-box .paragraph-text-1').addClass('ani');
            $('.section5 .contents .paragraph-box .paragraph-text-box .paragraph-text-2').addClass('ani');
            $('.section5 .contents .paragraph-box .paragraph-text-box .paragraph-text-3').addClass('ani');
        }



        //section6

        if (sct >= sectionOffset('.section6') - 700) {
            $('.section6 .contents .main-paragraph').addClass('ani');
            $('.section6 .contents .contents-grid .grid .grid-text').addClass('ani');
            $('.section6 .contents .contents-grid .grid .grid-img').addClass('ani');
        }

        //section7
        
        if (sct >= sectionOffset('.section7') - 700) {
            $('.section7 .contents .main-paragraph').addClass('ani');
            $('.section7 .contents .img-text-center .img-text-L').addClass('ani');
            $('.section7 .contents .img-text-center .img-text-R').addClass('ani');
            $('.section7 .contents .img-text-center .img-text-response').addClass('ani');
            $('.section7 .contents .img-text-bottom').addClass('ani');
        }

        // section7 - chart
        const chartOpacity = () => {
            $('.section7 .contents .img-box .inner-img .chart .chart-box').css({'opacity': 0})
            if($(window).width() > 680 && sct < sectionOffset('.section9')){
                if (sct >= sectionOffset('.section7') -400 ){
                calc = (sct-8002)/1000*2.0;
                $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(3).css({'opacity': calc })
            }
                if (sct >= sectionOffset('.section7') -200 ){
                calc = (sct-8202)/1000*2.0;
                $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(2).css({'opacity': calc }
                );
                $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(4).css({'opacity': calc }
                );
            }
            if (sct >= sectionOffset('.section7') + 0 ){
                calc = (sct-8402)/1000*2.0;
                $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(1).css({'opacity': calc }
                );
                $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(5).css({'opacity': calc }
                );
            }
            if (sct >= sectionOffset('.section7') + 200 ){
                calc = (sct-8602)/1000*2.0;
                $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(0).css({'opacity': calc }
                );
                $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(6).css({'opacity': calc }
                );
            }
            }
            else if($(window).width() <= 680 && sct < sectionOffset('.section9')){
                if (sct >= sectionOffset('.section7') - 300 ){
                    console.log(sectionOffset('.section7'))
                calc = (sct-sectionOffset('.section7') + 300)/1000*2.0;
                $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(3).css({'opacity': calc })
            }
                if (sct >= sectionOffset('.section7') -200 ){
                    console.log(sectionOffset('.section7'))
                calc = (sct-sectionOffset('.section7') + 200)/1000*2.0;
                $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(2).css({'opacity': calc }
                );
                $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(4).css({'opacity': calc }
                );
            }
            if (sct >= sectionOffset('.section7') + 0 ){
                calc = (sct-sectionOffset('.section7'))/1000*2.0;
                $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(1).css({'opacity': calc }
                );
                $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(5).css({'opacity': calc }
                );
            }
            if (sct >= sectionOffset('.section7') + 200 ){
                calc = (sct-sectionOffset('.section7') - 200)/1000*2.0;
                $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(0).css({'opacity': calc }
                );
                $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(6).css({'opacity': calc }
                );
            }
            }
        }
        chartOpacity();


        // section8-width
        if($(window).width() > 680) {
            if (sct > 9470 && sct < sectionOffset('.section9')) {
                calc = (sct - 9000)*2.0;
                // console.log(calc)
                if (calc < 2100 ) {
                    $('.section8 .contents').css({'width': calc});
                    // console.log('this is calc' + calc)
                }
            }
        } else {
            $('.section8 .contents').css({'width': '100%'});
        }

        const section9Opacity = () => {
            if($(window).width() > 680 && sct < sectionOffset('.section10')){
                if(sct < sectionOffset('.section9-contents-1')-1200) {
                    $('.section9-contents-1').css({'opacity': 0});
                    $('.section9-contents-2').css({'opacity': 0});
                    $('.section9-contents-3').css({'opacity': 0});
                }
                if (sct >= sectionOffset('.section9-contents-1')- 1200) {
                    calc = (sct-10000)/1000 - 1;
                    $('.section9-contents-1').css({'opacity': calc});
                }
                if (sct >= sectionOffset('.section9-contents-2')-1200) {
                    calc = (sct-10000)/1000 - 2;
                    $('.section9-contents-2').css({'opacity': calc});
                }
                if (sct >= sectionOffset('.section9-contents-3') -1200) {
                    calc = (sct-10000)/1000 - 3.3;
                    $('.section9-contents-3').css({'opacity': calc});
                }
            } else if ($(window).width() <= 680 && sct < sectionOffset('.section10')){
                console.log('window less 680')
                if(sct < sectionOffset('.section9-contents-1')-1000) {
                    $('.section9-contents-1').css({'opacity': 0});
                    $('.section9-contents-2').css({'opacity': 0});
                    $('.section9-contents-3').css({'opacity': 0});
                }
                if (sct >= sectionOffset('.section9-contents-1')-1000) {
                    calc = (sct-10000)/1000 + 1.5;
                    $('.section9-contents-1').css({'opacity': calc});
                }
                if (sct >= sectionOffset('.section9-contents-2')-900) {
                    calc = (sct-10000)/1000 + 0.427;
                    $('.section9-contents-2').css({'opacity': calc});
                }
                if (sct >= sectionOffset('.section9-contents-3')-900) {
                    calc = (sct-10000)/1000 - 0.605;
                    $('.section9-contents-3').css({'opacity': calc});
                }
            }
        }
        section9Opacity()

        //section10

        if (sct >= sectionOffset('.section10') - 700) {
            $('.section10 .contents .main-paragraph').addClass('ani');
            $('.section10 .contents-box .inner-contents').addClass('ani');
        }

        //section11

        if (sct >= sectionOffset('.section11') - 700) {
            $('.section11 .contents .main').addClass('ani');
            $('.section11 .contents .sub').addClass('ani');
        }
    });
    $(window).trigger('scroll');
})