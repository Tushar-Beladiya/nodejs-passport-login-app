    $(document).ready(function () {
        if (window.performance) {
            console.info("window.performance works fine on this browser");
          }
            if (performance.navigation.type == 1) {
                
            } else {
                function startCount() {
                    TimeMe.initialize({
                        currentPageName: "my-home-page", // current page
                        websocketOptions: { // optional
                            websocketHost: "ws://your_host:your_port",
                            appId: "insert-your-made-up-app-id"
                        }
                    });
                    setInterval(function () {
                        var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
                        document.getElementById('timeInSeconds').textContent = timeSpentOnPage.toFixed(2);
                    }, 25);
                }
              console.info( "This page is not reloaded");
            }

       
        $("#btnstart").click(function () {
            startCount();
            $('#div').css('display', 'inline-block');
            $('#btnstart').hide();
        });
        $("#btnbreak").click(function () {
            $('#divendbreak').css('display', 'inline-block');
            $('#btnleave,#btnbreak').hide();
            TimeMe.stopTimer();
        });
        $("#btnEndBreak").click(function () {
            TimeMe.startTimer();
            $('#btnleave').css('display', 'inline-block');
            $('#btnbreak,#btnEndBreak').hide();
        });
        $("#btnleave").click(function () {
            $('#btnbreak,#btnEndBreak').hide();
            TimeMe.stopTimer();
        });
    });
