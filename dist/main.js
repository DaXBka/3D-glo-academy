(() => {
    'use strict';
    (function (e) {
        const t = document.querySelector('#timer-hours'),
            r = document.querySelector('#timer-minutes'),
            l = document.querySelector('#timer-seconds');
        let o,
            n = !0;
        const c = () => {
            const e = (() => {
                    let e =
                        (new Date('3 march 2022').getTime() -
                            new Date().getTime()) /
                        1e3;
                    return (
                        e < 0 && (n = !1),
                        {
                            hours: Math.floor(e / 3600),
                            minutes: Math.floor((e / 60) % 60),
                            seconds: Math.floor(e % 60),
                        }
                    );
                })(),
                c = e => (1 == e.toString().length ? '0' + e : e);
            n
                ? ((t.textContent = c(e.hours)),
                  (r.textContent = c(e.minutes)),
                  (l.textContent = c(e.seconds)))
                : clearInterval(o);
        };
        c(), (o = setInterval(c, 1e3));
    })(),
        (function () {
            const e = document.querySelector('.menu'),
                t = document.querySelector('menu'),
                r = [
                    e,
                    t.querySelector('.close-btn'),
                    ...t.querySelectorAll('ul > li > a'),
                ],
                l = () => {
                    t.classList.toggle('active-menu');
                };
            r.forEach(e => e.addEventListener('click', l));
        })(),
        (() => {
            const e = document.querySelector('.popup'),
                t =
                    (e.querySelector('.popup-content'),
                    document.querySelectorAll('.popup-btn')),
                r = e.querySelector('.popup-close');
            let l = document.documentElement.clientWidth;
            (e.style.transition = 'opacity 0.3s ease'), (e.style.opacity = 0);
            const o = () => {
                e.style.display
                    ? ((e.style.opacity = 0),
                      l > 768
                          ? setTimeout(() => (e.style.display = ''), 310)
                          : (e.style.display = ''))
                    : ((e.style.display = 'block'),
                      l > 768
                          ? setTimeout(() => (e.style.opacity = 1), 100)
                          : (e.style.opacity = 1));
            };
            t.forEach(e => {
                e.addEventListener('click', o);
            }),
                r.addEventListener('click', o),
                window.addEventListener(
                    'resize',
                    () => (l = document.documentElement.clientWidth)
                );
        })(),
        [
            ...document.querySelector('menu').querySelectorAll('ul > li > a'),
            document.querySelector('main').querySelector('a'),
        ].forEach(e => {
            e.addEventListener('click', t => {
                t.preventDefault();
                const r = e.getAttribute('href').substring(1);
                document
                    .getElementById(r)
                    .scrollIntoView({ inline: 'nearest', behavior: 'smooth' });
            });
        }),
        (() => {
            const e = document.querySelectorAll('.calc-item');
            let t = !1;
            e.forEach((e, r) => {
                0 !== r &&
                    e.addEventListener('blur', () => {
                        isNaN(parseFloat(e.value)) ||
                            (e.value = parseFloat(e.value)),
                            /\D/.test(e.value)
                                ? ((e.style.border = '1px solid #eb4545'),
                                  (t = !0))
                                : (e.style.border = '');
                    });
            });
        })(),
        (() => {
            String.prototype.trim = function () {
                return this.replace(
                    /^[\s\uFEFF\xA0\-]+|[\s\uFEFF\xA0\-]+$/g,
                    ''
                );
            };
            const e = document.getElementById('form1'),
                t = document.getElementById('form2'),
                r = document.getElementById('form3'),
                l = e => {
                    e.querySelectorAll('input').forEach(e => {
                        e.addEventListener('input', () => {
                            switch (e.getAttribute('name')) {
                                case 'user_name':
                                    e.value = e.value.replace(/\d/, '');
                                    break;
                                case 'user_email':
                                    e.value = e.value.replace(
                                        /[^A-z0-9\@\_\.\!\~\*\-\']/,
                                        ''
                                    );
                                    break;
                                case 'user_phone':
                                    e.value = e.value.replace(
                                        /[^\d\)\()-]/,
                                        ''
                                    );
                                    break;
                                case 'user_message':
                                    e.value = e.value.replace(/[^А-я -]/, '');
                            }
                        }),
                            e.addEventListener('blur', () => {
                                ('text' !== e.getAttribute('type') &&
                                    'user_message' !==
                                        e.getAttribute('name')) ||
                                    (e.value =
                                        e.value[0].toUpperCase() +
                                        e.value.substring(1).toLowerCase()),
                                    (e.value = e.value
                                        .replace(/\-+/g, '-')
                                        .replace(/\s+/g, ' ')
                                        .trim());
                            });
                    });
                };
            l(e), l(t), l(r);
        })();
})();
