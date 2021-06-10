
    $(document).ready(function() {
        $(".form__btn").click(function() {
            if ($('form')[0].checkValidity()) {
                $(".form__btn").attr("disabled", true);
                $('form')[0].submit();
            }
        });

        (function($) {
            $.fn.inputFilter = function(inputFilter) {
                return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
                    if (inputFilter(this.value)) {
                        this.oldValue = this.value;
                        this.oldSelectionStart = this.selectionStart;
                        this.oldSelectionEnd = this.selectionEnd;
                    } else if (this.hasOwnProperty("oldValue")) {
                        this.value = this.oldValue;
                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    } else {
                        this.value = "";
                    }
                });
            };
        }(jQuery));

        $(document).ready(function() {
            $(".phone").inputFilter(function(value) {
                return /^\d*$/.test(value);
            });
            $("input[name='firstname']").attr('pattern', '[A-Za-zА-Яа-яЁё]{3,}');
            $("input[name='lastname']").attr('pattern', '[A-Za-zА-Яа-яЁё ]{3,}');
            $("input[name='email']").attr('pattern', '^[^@\\s]+@[^@\\s]+\\.[a-zA-Z\\s]+$');
        });
        

        $(".href-about").click(function() {
    				    $([document.documentElement, document.body]).animate({
    				        scrollTop: $("#about-us").offset().top
    				    }, 0);
    				});
    });

document.querySelectorAll('form').forEach(function(el) {
        el.addEventListener('submit', function() {
            document.querySelector('body').classList.add("unavailable");
        });
    });