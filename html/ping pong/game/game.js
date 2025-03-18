var _STRINGS = {
    'Ad': {
        'Mobile': {
            'Preroll': {
                'ReadyIn': 'The\x20game\x20is\x20ready\x20in\x20',
                'Loading': 'Your\x20game\x20is\x20loading...',
                'Close': 'Close'
            },
            'Header': {
                'ReadyIn': 'The\x20game\x20is\x20ready\x20in\x20',
                'Loading': 'Your\x20game\x20is\x20loading...',
                'Close': 'Close'
            },
            'End': {
                'ReadyIn': 'Advertisement\x20ends\x20in\x20',
                'Loading': 'Please\x20wait\x20...',
                'Close': 'Close'
            }
        }
    },
    'Splash': {
        'Loading': 'Loading\x20...',
        'LogoLine1': 'Some\x20text\x20here',
        'LogoLine2': 'powered\x20by\x20MarketJS',
        'LogoLine3': 'none',
        'TapToStart': 'TAP\x20TO\x20START'
    },
    'Game': {
        'SelectPlayer': 'Select\x20Player',
        'Win': 'You\x20win!',
        'Lose': 'You\x20lose!',
        'Score': 'Score',
        'Time': 'Time',
        'HowToPlay': 'HOW\x20TO\x20PLAY',
        'Tutorial11': 'Drag\x20the\x20paddle',
        'Tutorial12': 'to\x20hit\x20the\x20ball',
        'Tutorial21': 'Hit\x20slowly\x20or\x20quickly',
        'Tutorial22': 'to\x20control\x20ball\x20speed',
        'Tutorial31': 'To\x20get\x20more\x20spin,',
        'Tutorial32': 'drag\x20the\x20paddle\x20sideways',
        'Tutorial33': 'after\x20hitting\x20the\x20ball'
    },
    'Results': {
        'Title': 'High\x20score'
    }
}
  , _SETTINGS = {
    'API': {
        'Enabled': !0x0,
        'Log': {
            'Events': {
                'InitializeGame': !0x0,
                'EndGame': !0x0,
                'Level': {
                    'Begin': !0x0,
                    'End': !0x0,
                    'Win': !0x0,
                    'Lose': !0x0,
                    'Draw': !0x0
                }
            }
        }
    },
    'Ad': {
        'Mobile': {
            'Preroll': {
                'Enabled': !0x1,
                'Duration': 0x5,
                'Width': 0x12c,
                'Height': 0xfa,
                'Rotation': {
                    'Enabled': !0x1,
                    'Weight': {
                        'MobileAdInGamePreroll': 0x28,
                        'MobileAdInGamePreroll2': 0x28,
                        'MobileAdInGamePreroll3': 0x14
                    }
                }
            },
            'Header': {
                'Enabled': !0x1,
                'Duration': 0x5,
                'Width': 0x140,
                'Height': 0x32,
                'Rotation': {
                    'Enabled': !0x1,
                    'Weight': {
                        'MobileAdInGameHeader': 0x28,
                        'MobileAdInGameHeader2': 0x28,
                        'MobileAdInGameHeader3': 0x14
                    }
                }
            },
            'Footer': {
                'Enabled': !0x1,
                'Duration': 0x5,
                'Width': 0x140,
                'Height': 0x32,
                'Rotation': {
                    'Enabled': !0x1,
                    'Weight': {
                        'MobileAdInGameFooter': 0x28,
                        'MobileAdInGameFooter2': 0x28,
                        'MobileAdInGameFooter3': 0x14
                    }
                }
            },
            'End': {
                'Enabled': !0x1,
                'Duration': 0x1,
                'Width': 0x12c,
                'Height': 0xfa,
                'Rotation': {
                    'Enabled': !0x1,
                    'Weight': {
                        'MobileAdInGameEnd': 0x28,
                        'MobileAdInGameEnd2': 0x28,
                        'MobileAdInGameEnd3': 0x14
                    }
                }
            }
        }
    },
    'Language': {
        'Default': 'en'
    },
    'DeveloperBranding': {
        'Splash': {
            'Enabled': !0x1
        },
        'Logo': {
            'Enabled': !0x1,
            'Link': 'http://google.com',
            'LinkEnabled': !0x1,
            'NewWindow': !0x0,
            'Width': 0xa6,
            'Height': 0x3d
        }
    },
    'Branding': {
        'Splash': {
            'Enabled': !0x1
        },
        'Logo': {
            'Enabled': !0x0,
            'Link': 'http://google.com',
            'LinkEnabled': !0x1,
            'NewWindow': !0x0,
            'Width': 0xa6,
            'Height': 0x3d
        }
    },
    'MoreGames': {
        'Enabled': !0x1,
        'Link': 'http://www.marketjs.com/game/links/mobile',
        'NewWindow': !0x0
    },
    'TapToStartAudioUnlock': {
        'Enabled': !0x1
    }
}
  , MobileAdInGamePreroll = {
    'ad_duration': _SETTINGS['Ad']['Mobile']['Preroll']['Duration'],
    'ad_width': _SETTINGS['Ad']['Mobile']['Preroll']['Width'],
    'ad_height': _SETTINGS['Ad']['Mobile']['Preroll']['Height'],
    'ready_in': _STRINGS['Ad']['Mobile']['Preroll']['ReadyIn'],
    'loading': _STRINGS['Ad']['Mobile']['Preroll']['Loading'],
    'close': _STRINGS['Ad']['Mobile']['Preroll']['Close'] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Initialize': function() {
        if (_SETTINGS['Ad']['Mobile']['Preroll']['Rotation']['Enabled']) {
            var _0x2fde69 = _SETTINGS['Ad']['Mobile']['Preroll']['Rotation']['Weight']
              , _0x33d312 = _0x2fde69['MobileAdInGamePreroll']
              , _0x420eba = _0x33d312 + _0x2fde69['MobileAdInGamePreroll2']
              , _0x2fde69 = _0x420eba + _0x2fde69['MobileAdInGamePreroll3']
              , _0x15303d = Math['floor'](0x64 * Math['random']());
            console['log']('seed:\x20', _0x15303d),
            _0x15303d <= _0x33d312 ? this['selectedOverlayName'] = 'MobileAdInGamePreroll' : _0x15303d <= _0x420eba ? this['selectedOverlayName'] = 'MobileAdInGamePreroll2' : _0x15303d <= _0x2fde69 && (this['selectedOverlayName'] = 'MobileAdInGamePreroll3'),
            console['log']('Ad\x20rotating\x20preroll\x20enabled');
        } else
            this['selectedOverlayName'] = 'MobileAdInGamePreroll',
            console['log']('Ad\x20rotating\x20preroll\x20disabled');
        console['log']('selected:', this['selectedOverlayName']),
        this['overlay'] = $('#' + this['selectedOverlayName']),
        this['box'] = $('#' + this['selectedOverlayName'] + '-Box'),
        this['game'] = $('#game'),
        this['boxContents'] = {
            'footer': $('#' + this['selectedOverlayName'] + '-Box-Footer'),
            'header': $('#' + this['selectedOverlayName'] + '-Box-Header'),
            'close': $('#' + this['selectedOverlayName'] + '-Box-Close'),
            'body': $('#' + this['selectedOverlayName'] + '-Box-Body')
        },
        this['box']['width'](this['ad_width']),
        this['box']['height'](this['ad_height']),
        this['box']['css']('left', (this['overlay']['width']() - this['box']['width']()) / 0x2),
        this['box']['css']('top', (this['overlay']['height']() - this['box']['height']() - this['boxContents']['header']['height']() - this['boxContents']['footer']['height']()) / 0x2),
        this['overlay']['show'](this['Timer'](this['ad_duration']));
    },
    'Timer': function(_0x5abe9b) {
        var _0x288bf3 = _0x5abe9b
          , _0x58332a = setInterval(function() {
            MobileAdInGamePreroll['boxContents']['header']['text'](MobileAdInGamePreroll['ready_in'] + _0x288bf3 + '...'),
            MobileAdInGamePreroll['boxContents']['footer']['text'](MobileAdInGamePreroll['loading']),
            _0x288bf3--,
            0x0 > _0x288bf3 && (clearInterval(_0x58332a),
            MobileAdInGamePreroll['boxContents']['close']['css']('left', MobileAdInGamePreroll['boxContents']['body']['width']() - 0x17),
            MobileAdInGamePreroll['boxContents']['close']['show'](),
            MobileAdInGamePreroll['boxContents']['header']['html'](MobileAdInGamePreroll['close']),
            MobileAdInGamePreroll['boxContents']['footer']['text'](''));
        }, 0x3e8);
    },
    'Close': function() {
        this['boxContents']['close']['hide'](),
        this['overlay']['hide']();
    }
}
  , MobileAdInGameHeader = {
    'ad_duration': _SETTINGS['Ad']['Mobile']['Header']['Duration'],
    'ad_width': _SETTINGS['Ad']['Mobile']['Header']['Width'],
    'ad_height': _SETTINGS['Ad']['Mobile']['Header']['Height'],
    'Initialize': function() {
        if (_SETTINGS['Ad']['Mobile']['Header']['Rotation']['Enabled']) {
            var _0x391a5b = _SETTINGS['Ad']['Mobile']['Header']['Rotation']['Weight']
              , _0x315123 = _0x391a5b['MobileAdInGameHeader']
              , _0x4c4abd = _0x315123 + _0x391a5b['MobileAdInGameHeader2']
              , _0x391a5b = _0x4c4abd + _0x391a5b['MobileAdInGameHeader3']
              , _0x20d583 = Math['floor'](0x64 * Math['random']());
            console['log']('seed:\x20', _0x20d583),
            _0x20d583 <= _0x315123 ? this['selectedOverlayName'] = 'MobileAdInGameHeader' : _0x20d583 <= _0x4c4abd ? this['selectedOverlayName'] = 'MobileAdInGameHeader2' : _0x20d583 <= _0x391a5b && (this['selectedOverlayName'] = 'MobileAdInGameHeader3'),
            console['log']('Ad\x20rotating\x20header\x20enabled');
        } else
            this['selectedOverlayName'] = 'MobileAdInGameHeader',
            console['log']('Ad\x20rotating\x20header\x20disabled');
        this['div'] = $('#' + this['selectedOverlayName']),
        this['game'] = $('#game'),
        this['div']['width'](this['ad_width']),
        this['div']['height'](this['ad_height']),
        this['div']['css']('left', this['game']['position']()['left'] + (this['game']['width']() - this['div']['width']()) / 0x2),
        this['div']['css']('top', 0x0),
        this['div']['show'](this['Timer'](this['ad_duration']));
    },
    'Timer': function(_0x4e1767) {
        var _0x141b08 = setInterval(function() {
            _0x4e1767--,
            0x0 > _0x4e1767 && (MobileAdInGameHeader['div']['hide'](),
            clearInterval(_0x141b08));
        }, 0x3e8);
    }
}
  , MobileAdInGameFooter = {
    'ad_duration': _SETTINGS['Ad']['Mobile']['Footer']['Duration'],
    'ad_width': _SETTINGS['Ad']['Mobile']['Footer']['Width'],
    'ad_height': _SETTINGS['Ad']['Mobile']['Footer']['Height'],
    'Initialize': function() {
        if (_SETTINGS['Ad']['Mobile']['Footer']['Rotation']['Enabled']) {
            var _0x4531cf = _SETTINGS['Ad']['Mobile']['Footer']['Rotation']['Weight']
              , _0x2195a0 = _0x4531cf['MobileAdInGameFooter']
              , _0x1207c9 = _0x2195a0 + _0x4531cf['MobileAdInGameFooter2']
              , _0x4531cf = _0x1207c9 + _0x4531cf['MobileAdInGameFooter3']
              , _0x3c9334 = Math['floor'](0x64 * Math['random']());
            console['log']('seed:\x20', _0x3c9334),
            _0x3c9334 <= _0x2195a0 ? this['selectedOverlayName'] = 'MobileAdInGameFooter' : _0x3c9334 <= _0x1207c9 ? this['selectedOverlayName'] = 'MobileAdInGameFooter2' : _0x3c9334 <= _0x4531cf && (this['selectedOverlayName'] = 'MobileAdInGameFooter3'),
            console['log']('Ad\x20rotating\x20footer\x20enabled');
        } else
            this['selectedOverlayName'] = 'MobileAdInGameFooter',
            console['log']('Ad\x20rotating\x20footer\x20disabled');
        this['div'] = $('#' + this['selectedOverlayName']),
        this['game'] = $('#game'),
        this['div']['width'](this['ad_width']),
        this['div']['height'](this['ad_height']),
        this['div']['css']('left', this['game']['position']()['left'] + (this['game']['width']() - this['div']['width']()) / 0x2),
        this['div']['css']('top', this['game']['height']() - this['div']['height']() - 0x5),
        this['div']['show'](this['Timer'](this['ad_duration']));
    },
    'Timer': function(_0x48bb2f) {
        var _0x1f22e5 = setInterval(function() {
            _0x48bb2f--,
            0x0 > _0x48bb2f && (MobileAdInGameFooter['div']['hide'](),
            clearInterval(_0x1f22e5));
        }, 0x3e8);
    }
}
  , MobileAdInGameEnd = {
    'ad_duration': _SETTINGS['Ad']['Mobile']['End']['Duration'],
    'ad_width': _SETTINGS['Ad']['Mobile']['End']['Width'],
    'ad_height': _SETTINGS['Ad']['Mobile']['End']['Height'],
    'ready_in': _STRINGS['Ad']['Mobile']['End']['ReadyIn'],
    'loading': _STRINGS['Ad']['Mobile']['End']['Loading'],
    'close': _STRINGS['Ad']['Mobile']['End']['Close'] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Initialize': function() {
        if (_SETTINGS['Ad']['Mobile']['End']['Rotation']['Enabled']) {
            var _0xeaa7b7 = _SETTINGS['Ad']['Mobile']['End']['Rotation']['Weight']
              , _0x3f0e17 = _0xeaa7b7['MobileAdInGameEnd']
              , _0x53754d = _0x3f0e17 + _0xeaa7b7['MobileAdInGameEnd2']
              , _0xeaa7b7 = _0x53754d + _0xeaa7b7['MobileAdInGameEnd3']
              , _0x16f9b1 = Math['floor'](0x64 * Math['random']());
            console['log']('seed:\x20', _0x16f9b1),
            _0x16f9b1 <= _0x3f0e17 ? this['selectedOverlayName'] = 'MobileAdInGameEnd' : _0x16f9b1 <= _0x53754d ? this['selectedOverlayName'] = 'MobileAdInGameEnd2' : _0x16f9b1 <= _0xeaa7b7 && (this['selectedOverlayName'] = 'MobileAdInGameEnd3'),
            console['log']('Ad\x20rotating\x20end\x20enabled');
        } else
            this['selectedOverlayName'] = 'MobileAdInGameEnd',
            console['log']('Ad\x20rotating\x20end\x20disabled');
        console['log']('selected:', this['selectedOverlayName']),
        this['overlay'] = $('#' + this['selectedOverlayName']),
        this['box'] = $('#' + this['selectedOverlayName'] + '-Box'),
        this['game'] = $('#game'),
        this['boxContents'] = {
            'footer': $('#' + this['selectedOverlayName'] + '-Box-Footer'),
            'header': $('#' + this['selectedOverlayName'] + '-Box-Header'),
            'close': $('#' + this['selectedOverlayName'] + '-Box-Close'),
            'body': $('#' + this['selectedOverlayName'] + '-Box-Body')
        },
        this['box']['width'](this['ad_width']),
        this['box']['height'](this['ad_height']),
        this['box']['css']('left', (this['overlay']['width']() - this['box']['width']()) / 0x2),
        this['box']['css']('top', (this['overlay']['height']() - this['box']['height']() - this['boxContents']['header']['height']() - this['boxContents']['footer']['height']()) / 0x2),
        this['overlay']['show'](this['Timer'](this['ad_duration']));
    },
    'Timer': function(_0x3e661d) {
        var _0xe49499 = _0x3e661d
          , _0x45ae07 = setInterval(function() {
            MobileAdInGameEnd['boxContents']['header']['text'](MobileAdInGameEnd['ready_in'] + _0xe49499 + '...'),
            MobileAdInGameEnd['boxContents']['footer']['text'](MobileAdInGameEnd['loading']),
            _0xe49499--,
            0x0 > _0xe49499 && (clearInterval(_0x45ae07),
            MobileAdInGameEnd['boxContents']['close']['css']('left', MobileAdInGameEnd['boxContents']['body']['width']() - 0x17),
            MobileAdInGameEnd['boxContents']['close']['show'](),
            MobileAdInGameEnd['boxContents']['header']['html'](MobileAdInGameEnd['close']),
            MobileAdInGameEnd['boxContents']['footer']['text'](''));
        }, 0x3e8);
    },
    'Close': function() {
        this['boxContents']['close']['hide'](),
        this['overlay']['hide']();
    }
};
!function(_0x21aa1d, _0x400bf5) {
    'object' == typeof module && 'object' == typeof module['exports'] ? module['exports'] = _0x21aa1d['document'] ? _0x400bf5(_0x21aa1d, !0x0) : function(_0x2fa5f6) {
        if (!_0x2fa5f6['document'])
            throw Error('jQuery\x20requires\x20a\x20window\x20with\x20a\x20document');
        return _0x400bf5(_0x2fa5f6);
    }
    : _0x400bf5(_0x21aa1d);
}('undefined' != typeof window ? window : this, function(_0x5768c8, _0x8b82f4) {
    function _0x332abd(_0x4db1d3, _0xc86d38) {
        _0xc86d38 = _0xc86d38 || _0x22efbf;
        var _0x3b5ef5 = _0xc86d38['createElement']('script');
        _0x3b5ef5['text'] = _0x4db1d3,
        _0xc86d38['head']['appendChild'](_0x3b5ef5)['parentNode']['removeChild'](_0x3b5ef5);
    }
    function _0xe6b36c(_0x3537ce) {
        var _0x437896 = !!_0x3537ce && 'length'in _0x3537ce && _0x3537ce['length']
          , _0x937a9c = _0x5daaf9['type'](_0x3537ce);
        return 'function' !== _0x937a9c && !_0x5daaf9['isWindow'](_0x3537ce) && ('array' === _0x937a9c || 0x0 === _0x437896 || 'number' == typeof _0x437896 && 0x0 < _0x437896 && _0x437896 - 0x1 in _0x3537ce);
    }
    function _0x4bed0e(_0xb768a1, _0x4f7336) {
        return _0xb768a1['nodeName'] && _0xb768a1['nodeName']['toLowerCase']() === _0x4f7336['toLowerCase']();
    }
    function _0x2b2266(_0x24ca35, _0x54e802, _0x3365fa) {
        return _0x5daaf9['isFunction'](_0x54e802) ? _0x5daaf9['grep'](_0x24ca35, function(_0x2e850d, _0x4e6fe9) {
            return !!_0x54e802['call'](_0x2e850d, _0x4e6fe9, _0x2e850d) !== _0x3365fa;
        }) : _0x54e802['nodeType'] ? _0x5daaf9['grep'](_0x24ca35, function(_0x35b9e4) {
            return _0x35b9e4 === _0x54e802 !== _0x3365fa;
        }) : 'string' != typeof _0x54e802 ? _0x5daaf9['grep'](_0x24ca35, function(_0x40dc28) {
            return -0x1 < _0x4fdb20['call'](_0x54e802, _0x40dc28) !== _0x3365fa;
        }) : _0x4c3b9e['test'](_0x54e802) ? _0x5daaf9['filter'](_0x54e802, _0x24ca35, _0x3365fa) : (_0x54e802 = _0x5daaf9['filter'](_0x54e802, _0x24ca35),
        _0x5daaf9['grep'](_0x24ca35, function(_0x198416) {
            return -0x1 < _0x4fdb20['call'](_0x54e802, _0x198416) !== _0x3365fa && 0x1 === _0x198416['nodeType'];
        }));
    }
    function _0x14d28b(_0x5df6cd, _0x22a6f9) {
        for (; (_0x5df6cd = _0x5df6cd[_0x22a6f9]) && 0x1 !== _0x5df6cd['nodeType']; )
            ;
        return _0x5df6cd;
    }
    function _0x41dcf3(_0x5d26f7) {
        return _0x5d26f7;
    }
    function _0x25bf08(_0x5e25af) {
        throw _0x5e25af;
    }
    function _0x30ee37(_0x3ae935, _0x183a44, _0x39be0d, _0x2dd300) {
        var _0x147a42;
        try {
            _0x3ae935 && _0x5daaf9['isFunction'](_0x147a42 = _0x3ae935['promise']) ? _0x147a42['call'](_0x3ae935)['done'](_0x183a44)['fail'](_0x39be0d) : _0x3ae935 && _0x5daaf9['isFunction'](_0x147a42 = _0x3ae935['then']) ? _0x147a42['call'](_0x3ae935, _0x183a44, _0x39be0d) : _0x183a44['apply'](void 0x0, [_0x3ae935]['slice'](_0x2dd300));
        } catch (_0x1796aa) {
            _0x39be0d['apply'](void 0x0, [_0x1796aa]);
        }
    }
    function _0x3451f1() {
        _0x22efbf['removeEventListener']('DOMContentLoaded', _0x3451f1),
        _0x5768c8['removeEventListener']('load', _0x3451f1),
        _0x5daaf9['ready']();
    }
    function _0x4b514c() {
        this['expando'] = _0x5daaf9['expando'] + _0x4b514c['uid']++;
    }
    function _0xb16934(_0x3d226f, _0xf563ee, _0x48366e) {
        var _0xda6f25;
        if (void 0x0 === _0x48366e && 0x1 === _0x3d226f['nodeType']) {
            if (_0xda6f25 = 'data-' + _0xf563ee['replace'](_0x379898, '-$&')['toLowerCase'](),
            _0x48366e = _0x3d226f['getAttribute'](_0xda6f25),
            'string' == typeof _0x48366e) {
                try {
                    _0x48366e = 'true' === _0x48366e || 'false' !== _0x48366e && ('null' === _0x48366e ? null : _0x48366e === +_0x48366e + '' ? +_0x48366e : _0x33f665['test'](_0x48366e) ? JSON['parse'](_0x48366e) : _0x48366e);
                } catch (_0x440d24) {}
                _0x67abda['set'](_0x3d226f, _0xf563ee, _0x48366e);
            } else
                _0x48366e = void 0x0;
        }
        return _0x48366e;
    }
    function _0x53dc82(_0x36f4b2, _0x1d0183, _0x14f8c0, _0x17c52e) {
        var _0x5f3e7f, _0x143df1 = 0x1, _0x47b809 = 0x14, _0x33fb9c = _0x17c52e ? function() {
            return _0x17c52e['cur']();
        }
        : function() {
            return _0x5daaf9['css'](_0x36f4b2, _0x1d0183, '');
        }
        , _0x29a698 = _0x33fb9c(), _0x4eb609 = _0x14f8c0 && _0x14f8c0[0x3] || (_0x5daaf9['cssNumber'][_0x1d0183] ? '' : 'px'), _0x5c5d69 = (_0x5daaf9['cssNumber'][_0x1d0183] || 'px' !== _0x4eb609 && +_0x29a698) && _0x3431b4['exec'](_0x5daaf9['css'](_0x36f4b2, _0x1d0183));
        if (_0x5c5d69 && _0x5c5d69[0x3] !== _0x4eb609) {
            _0x4eb609 = _0x4eb609 || _0x5c5d69[0x3],
            _0x14f8c0 = _0x14f8c0 || [],
            _0x5c5d69 = +_0x29a698 || 0x1;
            do
                _0x143df1 = _0x143df1 || '.5',
                _0x5c5d69 /= _0x143df1,
                _0x5daaf9['style'](_0x36f4b2, _0x1d0183, _0x5c5d69 + _0x4eb609);
            while (_0x143df1 !== (_0x143df1 = _0x33fb9c() / _0x29a698) && 0x1 !== _0x143df1 && --_0x47b809);
        }
        return _0x14f8c0 && (_0x5c5d69 = +_0x5c5d69 || +_0x29a698 || 0x0,
        _0x5f3e7f = _0x14f8c0[0x1] ? _0x5c5d69 + (_0x14f8c0[0x1] + 0x1) * _0x14f8c0[0x2] : +_0x14f8c0[0x2],
        _0x17c52e && (_0x17c52e['unit'] = _0x4eb609,
        _0x17c52e['start'] = _0x5c5d69,
        _0x17c52e['end'] = _0x5f3e7f)),
        _0x5f3e7f;
    }
    function _0x5e22ab(_0x1425d5, _0x404e9e) {
        for (var _0x86f576, _0x32cc33, _0x5b050a = [], _0x516d5b = 0x0, _0x394ced = _0x1425d5['length']; _0x516d5b < _0x394ced; _0x516d5b++)
            if (_0x32cc33 = _0x1425d5[_0x516d5b],
            _0x32cc33['style']) {
                if (_0x86f576 = _0x32cc33['style']['display'],
                _0x404e9e) {
                    if ('none' === _0x86f576 && (_0x5b050a[_0x516d5b] = _0x244154['get'](_0x32cc33, 'display') || null,
                    _0x5b050a[_0x516d5b] || (_0x32cc33['style']['display'] = '')),
                    '' === _0x32cc33['style']['display'] && _0x3ba294(_0x32cc33)) {
                        _0x86f576 = _0x5b050a;
                        var _0x373fbd = _0x516d5b, _0x158045, _0x43829d = void 0x0;
                        _0x158045 = _0x32cc33['ownerDocument'];
                        var _0x1bc3bd = _0x32cc33['nodeName'];
                        _0x158045 = (_0x32cc33 = _0x117174[_0x1bc3bd]) ? _0x32cc33 : (_0x43829d = _0x158045['body']['appendChild'](_0x158045['createElement'](_0x1bc3bd)),
                        _0x32cc33 = _0x5daaf9['css'](_0x43829d, 'display'),
                        _0x43829d['parentNode']['removeChild'](_0x43829d),
                        'none' === _0x32cc33 && (_0x32cc33 = 'block'),
                        _0x117174[_0x1bc3bd] = _0x32cc33,
                        _0x32cc33),
                        _0x86f576[_0x373fbd] = _0x158045;
                    }
                } else
                    'none' !== _0x86f576 && (_0x5b050a[_0x516d5b] = 'none',
                    _0x244154['set'](_0x32cc33, 'display', _0x86f576));
            }
        for (_0x516d5b = 0x0; _0x516d5b < _0x394ced; _0x516d5b++)
            null != _0x5b050a[_0x516d5b] && (_0x1425d5[_0x516d5b]['style']['display'] = _0x5b050a[_0x516d5b]);
        return _0x1425d5;
    }
    function _0x4e787(_0x465201, _0x220c5c) {
        var _0x1a1846;
        return _0x1a1846 = 'undefined' != typeof _0x465201['getElementsByTagName'] ? _0x465201['getElementsByTagName'](_0x220c5c || '*') : 'undefined' != typeof _0x465201['querySelectorAll'] ? _0x465201['querySelectorAll'](_0x220c5c || '*') : [],
        void 0x0 === _0x220c5c || _0x220c5c && _0x4bed0e(_0x465201, _0x220c5c) ? _0x5daaf9['merge']([_0x465201], _0x1a1846) : _0x1a1846;
    }
    function _0x598a4d(_0x225254, _0x4bee23) {
        for (var _0x4e4752 = 0x0, _0x207c00 = _0x225254['length']; _0x4e4752 < _0x207c00; _0x4e4752++)
            _0x244154['set'](_0x225254[_0x4e4752], 'globalEval', !_0x4bee23 || _0x244154['get'](_0x4bee23[_0x4e4752], 'globalEval'));
    }
    function _0x282af9(_0x580212, _0x4c81eb, _0x1ba988, _0x5a1551, _0x3d478c) {
        for (var _0x4130bd, _0x190937, _0x40aed4, _0x8e19bb, _0x67d365 = _0x4c81eb['createDocumentFragment'](), _0x3276f6 = [], _0x5425e3 = 0x0, _0x232ec8 = _0x580212['length']; _0x5425e3 < _0x232ec8; _0x5425e3++)
            if (_0x4130bd = _0x580212[_0x5425e3],
            _0x4130bd || 0x0 === _0x4130bd) {
                if ('object' === _0x5daaf9['type'](_0x4130bd))
                    _0x5daaf9['merge'](_0x3276f6, _0x4130bd['nodeType'] ? [_0x4130bd] : _0x4130bd);
                else {
                    if (_0x3f97a4['test'](_0x4130bd)) {
                        _0x190937 = _0x190937 || _0x67d365['appendChild'](_0x4c81eb['createElement']('div')),
                        _0x40aed4 = (_0x2be8c8['exec'](_0x4130bd) || ['', ''])[0x1]['toLowerCase'](),
                        _0x40aed4 = _0x5566ff[_0x40aed4] || _0x5566ff['_default'],
                        _0x190937['innerHTML'] = _0x40aed4[0x1] + _0x5daaf9['htmlPrefilter'](_0x4130bd) + _0x40aed4[0x2];
                        for (_0x40aed4 = _0x40aed4[0x0]; _0x40aed4--; )
                            _0x190937 = _0x190937['lastChild'];
                        _0x5daaf9['merge'](_0x3276f6, _0x190937['childNodes']),
                        _0x190937 = _0x67d365['firstChild'],
                        _0x190937['textContent'] = '';
                    } else
                        _0x3276f6['push'](_0x4c81eb['createTextNode'](_0x4130bd));
                }
            }
        _0x67d365['textContent'] = '';
        for (_0x5425e3 = 0x0; _0x4130bd = _0x3276f6[_0x5425e3++]; )
            if (_0x5a1551 && -0x1 < _0x5daaf9['inArray'](_0x4130bd, _0x5a1551))
                _0x3d478c && _0x3d478c['push'](_0x4130bd);
            else {
                if (_0x8e19bb = _0x5daaf9['contains'](_0x4130bd['ownerDocument'], _0x4130bd),
                _0x190937 = _0x4e787(_0x67d365['appendChild'](_0x4130bd), 'script'),
                _0x8e19bb && _0x598a4d(_0x190937),
                _0x1ba988)
                    for (_0x40aed4 = 0x0; _0x4130bd = _0x190937[_0x40aed4++]; )
                        _0x4273ae['test'](_0x4130bd['type'] || '') && _0x1ba988['push'](_0x4130bd);
            }
        return _0x67d365;
    }
    function _0x52300a() {
        return !0x0;
    }
    function _0x5e2ec6() {
        return !0x1;
    }
    function _0x4afc9e() {
        try {
            return _0x22efbf['activeElement'];
        } catch (_0x5d205e) {}
    }
    function _0x5a3c09(_0x16b9e7, _0x3d9d08, _0x569590, _0x73a30d, _0x4d3a2e, _0x424fe7) {
        var _0x557f96, _0xdf3753;
        if ('object' == typeof _0x3d9d08) {
            'string' != typeof _0x569590 && (_0x73a30d = _0x73a30d || _0x569590,
            _0x569590 = void 0x0);
            for (_0xdf3753 in _0x3d9d08)
                _0x5a3c09(_0x16b9e7, _0xdf3753, _0x569590, _0x73a30d, _0x3d9d08[_0xdf3753], _0x424fe7);
            return _0x16b9e7;
        }
        if (null == _0x73a30d && null == _0x4d3a2e ? (_0x4d3a2e = _0x569590,
        _0x73a30d = _0x569590 = void 0x0) : null == _0x4d3a2e && ('string' == typeof _0x569590 ? (_0x4d3a2e = _0x73a30d,
        _0x73a30d = void 0x0) : (_0x4d3a2e = _0x73a30d,
        _0x73a30d = _0x569590,
        _0x569590 = void 0x0)),
        !0x1 === _0x4d3a2e)
            _0x4d3a2e = _0x5e2ec6;
        else {
            if (!_0x4d3a2e)
                return _0x16b9e7;
        }
        return 0x1 === _0x424fe7 && (_0x557f96 = _0x4d3a2e,
        _0x4d3a2e = function(_0x4b6d8a) {
            return _0x5daaf9()['off'](_0x4b6d8a),
            _0x557f96['apply'](this, arguments);
        }
        ,
        _0x4d3a2e['guid'] = _0x557f96['guid'] || (_0x557f96['guid'] = _0x5daaf9['guid']++)),
        _0x16b9e7['each'](function() {
            _0x5daaf9['event']['add'](this, _0x3d9d08, _0x4d3a2e, _0x73a30d, _0x569590);
        });
    }
    function _0xdc2e01(_0x37fece, _0x55f973) {
        return _0x4bed0e(_0x37fece, 'table') && _0x4bed0e(0xb !== _0x55f973['nodeType'] ? _0x55f973 : _0x55f973['firstChild'], 'tr') ? _0x5daaf9('>tbody', _0x37fece)[0x0] || _0x37fece : _0x37fece;
    }
    function _0x4d86d6(_0x512c9c) {
        return _0x512c9c['type'] = (null !== _0x512c9c['getAttribute']('type')) + '/' + _0x512c9c['type'],
        _0x512c9c;
    }
    function _0x56a680(_0x2d0e57) {
        var _0x53f17c = _0x4ce55f['exec'](_0x2d0e57['type']);
        return _0x53f17c ? _0x2d0e57['type'] = _0x53f17c[0x1] : _0x2d0e57['removeAttribute']('type'),
        _0x2d0e57;
    }
    function _0x1863d8(_0x5bacb3, _0x20be42) {
        var _0x10e10a, _0x13f690, _0x529790, _0x366aca, _0x2ffa6d, _0x2d04b6;
        if (0x1 === _0x20be42['nodeType']) {
            if (_0x244154['hasData'](_0x5bacb3) && (_0x10e10a = _0x244154['access'](_0x5bacb3),
            _0x13f690 = _0x244154['set'](_0x20be42, _0x10e10a),
            _0x2d04b6 = _0x10e10a['events']))
                for (_0x529790 in (delete _0x13f690['handle'],
                _0x13f690['events'] = {},
                _0x2d04b6)) {
                    _0x10e10a = 0x0;
                    for (_0x13f690 = _0x2d04b6[_0x529790]['length']; _0x10e10a < _0x13f690; _0x10e10a++)
                        _0x5daaf9['event']['add'](_0x20be42, _0x529790, _0x2d04b6[_0x529790][_0x10e10a]);
                }
            _0x67abda['hasData'](_0x5bacb3) && (_0x366aca = _0x67abda['access'](_0x5bacb3),
            _0x2ffa6d = _0x5daaf9['extend']({}, _0x366aca),
            _0x67abda['set'](_0x20be42, _0x2ffa6d));
        }
    }
    function _0x2fc343(_0x4a793e, _0x58cb61, _0x136849, _0x3c1398) {
        _0x58cb61 = _0x4cf276['apply']([], _0x58cb61);
        var _0x3384f9, _0x4b7730, _0x17de56, _0x555203, _0x4edd54 = 0x0, _0x1f8b5d = _0x4a793e['length'], _0x24a205 = _0x1f8b5d - 0x1, _0xf49c86 = _0x58cb61[0x0], _0x43b313 = _0x5daaf9['isFunction'](_0xf49c86);
        if (_0x43b313 || 0x1 < _0x1f8b5d && 'string' == typeof _0xf49c86 && !_0x1c56b9['checkClone'] && _0x4fe34d['test'](_0xf49c86))
            return _0x4a793e['each'](function(_0x4f06b0) {
                var _0x16a9f2 = _0x4a793e['eq'](_0x4f06b0);
                _0x43b313 && (_0x58cb61[0x0] = _0xf49c86['call'](this, _0x4f06b0, _0x16a9f2['html']())),
                _0x2fc343(_0x16a9f2, _0x58cb61, _0x136849, _0x3c1398);
            });
        if (_0x1f8b5d && (_0x3384f9 = _0x282af9(_0x58cb61, _0x4a793e[0x0]['ownerDocument'], !0x1, _0x4a793e, _0x3c1398),
        _0x4b7730 = _0x3384f9['firstChild'],
        0x1 === _0x3384f9['childNodes']['length'] && (_0x3384f9 = _0x4b7730),
        _0x4b7730 || _0x3c1398)) {
            _0x4b7730 = _0x5daaf9['map'](_0x4e787(_0x3384f9, 'script'), _0x4d86d6);
            for (_0x17de56 = _0x4b7730['length']; _0x4edd54 < _0x1f8b5d; _0x4edd54++)
                _0x555203 = _0x3384f9,
                _0x4edd54 !== _0x24a205 && (_0x555203 = _0x5daaf9['clone'](_0x555203, !0x0, !0x0),
                _0x17de56 && _0x5daaf9['merge'](_0x4b7730, _0x4e787(_0x555203, 'script'))),
                _0x136849['call'](_0x4a793e[_0x4edd54], _0x555203, _0x4edd54);
            if (_0x17de56) {
                _0x3384f9 = _0x4b7730[_0x4b7730['length'] - 0x1]['ownerDocument'],
                _0x5daaf9['map'](_0x4b7730, _0x56a680);
                for (_0x4edd54 = 0x0; _0x4edd54 < _0x17de56; _0x4edd54++)
                    _0x555203 = _0x4b7730[_0x4edd54],
                    _0x4273ae['test'](_0x555203['type'] || '') && !_0x244154['access'](_0x555203, 'globalEval') && _0x5daaf9['contains'](_0x3384f9, _0x555203) && (_0x555203['src'] ? _0x5daaf9['_evalUrl'] && _0x5daaf9['_evalUrl'](_0x555203['src']) : _0x332abd(_0x555203['textContent']['replace'](_0x47284b, ''), _0x3384f9));
            }
        }
        return _0x4a793e;
    }
    function _0x1d3b03(_0x4cc226, _0x2b5c66, _0x1a6d82) {
        for (var _0x54a15e = _0x2b5c66 ? _0x5daaf9['filter'](_0x2b5c66, _0x4cc226) : _0x4cc226, _0x55b356 = 0x0; null != (_0x2b5c66 = _0x54a15e[_0x55b356]); _0x55b356++)
            _0x1a6d82 || 0x1 !== _0x2b5c66['nodeType'] || _0x5daaf9['cleanData'](_0x4e787(_0x2b5c66)),
            _0x2b5c66['parentNode'] && (_0x1a6d82 && _0x5daaf9['contains'](_0x2b5c66['ownerDocument'], _0x2b5c66) && _0x598a4d(_0x4e787(_0x2b5c66, 'script')),
            _0x2b5c66['parentNode']['removeChild'](_0x2b5c66));
        return _0x4cc226;
    }
    function _0x3c24d2(_0x2572f9, _0x5ab2e4, _0x5938ad) {
        var _0x5e8337, _0x349264, _0x43ad03, _0x40b449, _0x5226d1 = _0x2572f9['style'];
        return _0x5938ad = _0x5938ad || _0x1471e7(_0x2572f9),
        _0x5938ad && (_0x40b449 = _0x5938ad['getPropertyValue'](_0x5ab2e4) || _0x5938ad[_0x5ab2e4],
        '' !== _0x40b449 || _0x5daaf9['contains'](_0x2572f9['ownerDocument'], _0x2572f9) || (_0x40b449 = _0x5daaf9['style'](_0x2572f9, _0x5ab2e4)),
        !_0x1c56b9['pixelMarginRight']() && _0x90d65a['test'](_0x40b449) && _0x4ff4f2['test'](_0x5ab2e4) && (_0x5e8337 = _0x5226d1['width'],
        _0x349264 = _0x5226d1['minWidth'],
        _0x43ad03 = _0x5226d1['maxWidth'],
        _0x5226d1['minWidth'] = _0x5226d1['maxWidth'] = _0x5226d1['width'] = _0x40b449,
        _0x40b449 = _0x5938ad['width'],
        _0x5226d1['width'] = _0x5e8337,
        _0x5226d1['minWidth'] = _0x349264,
        _0x5226d1['maxWidth'] = _0x43ad03)),
        void 0x0 !== _0x40b449 ? _0x40b449 + '' : _0x40b449;
    }
    function _0x2a4d2d(_0x4dda1c, _0x5dcdbb) {
        return {
            'get': function() {
                return _0x4dda1c() ? void delete this['get'] : (this['get'] = _0x5dcdbb)['apply'](this, arguments);
            }
        };
    }
    function _0x29a08c(_0x3c5a0c) {
        var _0x2f3efb = _0x5daaf9['cssProps'][_0x3c5a0c];
        if (!_0x2f3efb) {
            var _0x2f3efb = _0x5daaf9['cssProps'], _0x32768e;
            _0x1d624d: if (_0x32768e = _0x3c5a0c,
            !(_0x32768e in _0x43f5a6)) {
                for (var _0x42e213 = _0x32768e[0x0]['toUpperCase']() + _0x32768e['slice'](0x1), _0x4b5a17 = _0x11bffc['length']; _0x4b5a17--; )
                    if (_0x32768e = _0x11bffc[_0x4b5a17] + _0x42e213,
                    _0x32768e in _0x43f5a6)
                        break _0x1d624d;
                _0x32768e = void 0x0;
            }
            _0x2f3efb = _0x2f3efb[_0x3c5a0c] = _0x32768e || _0x3c5a0c;
        }
        return _0x2f3efb;
    }
    function _0x24f37b(_0x1265cc, _0x5a5100, _0x49bfdd) {
        return (_0x1265cc = _0x3431b4['exec'](_0x5a5100)) ? Math['max'](0x0, _0x1265cc[0x2] - (_0x49bfdd || 0x0)) + (_0x1265cc[0x3] || 'px') : _0x5a5100;
    }
    function _0x4c8b0e(_0x4e86b7, _0x26f326, _0x5bbb2c, _0x4c250d, _0x594ff6) {
        var _0x217120 = 0x0;
        for (_0x26f326 = _0x5bbb2c === (_0x4c250d ? 'border' : 'content') ? 0x4 : 'width' === _0x26f326 ? 0x1 : 0x0; 0x4 > _0x26f326; _0x26f326 += 0x2)
            'margin' === _0x5bbb2c && (_0x217120 += _0x5daaf9['css'](_0x4e86b7, _0x5bbb2c + _0x3cfee8[_0x26f326], !0x0, _0x594ff6)),
            _0x4c250d ? ('content' === _0x5bbb2c && (_0x217120 -= _0x5daaf9['css'](_0x4e86b7, 'padding' + _0x3cfee8[_0x26f326], !0x0, _0x594ff6)),
            'margin' !== _0x5bbb2c && (_0x217120 -= _0x5daaf9['css'](_0x4e86b7, 'border' + _0x3cfee8[_0x26f326] + 'Width', !0x0, _0x594ff6))) : (_0x217120 += _0x5daaf9['css'](_0x4e86b7, 'padding' + _0x3cfee8[_0x26f326], !0x0, _0x594ff6),
            'padding' !== _0x5bbb2c && (_0x217120 += _0x5daaf9['css'](_0x4e86b7, 'border' + _0x3cfee8[_0x26f326] + 'Width', !0x0, _0x594ff6)));
        return _0x217120;
    }
    function _0x5e8940(_0x290d1e, _0x2b829c, _0x4a977a) {
        var _0x48365f, _0x597115 = _0x1471e7(_0x290d1e), _0x517797 = _0x3c24d2(_0x290d1e, _0x2b829c, _0x597115), _0x47df03 = 'border-box' === _0x5daaf9['css'](_0x290d1e, 'boxSizing', !0x1, _0x597115);
        return _0x90d65a['test'](_0x517797) ? _0x517797 : (_0x48365f = _0x47df03 && (_0x1c56b9['boxSizingReliable']() || _0x517797 === _0x290d1e['style'][_0x2b829c]),
        'auto' === _0x517797 && (_0x517797 = _0x290d1e['offset' + _0x2b829c[0x0]['toUpperCase']() + _0x2b829c['slice'](0x1)]),
        _0x517797 = parseFloat(_0x517797) || 0x0,
        _0x517797 + _0x4c8b0e(_0x290d1e, _0x2b829c, _0x4a977a || (_0x47df03 ? 'border' : 'content'), _0x48365f, _0x597115) + 'px');
    }
    function _0x4aa03e(_0x531aca, _0x6ad3b5, _0x99a130, _0x13bf15, _0x35bac9) {
        return new _0x4aa03e['prototype']['init'](_0x531aca,_0x6ad3b5,_0x99a130,_0x13bf15,_0x35bac9);
    }
    function _0x170fcf() {
        _0x14262a && (!0x1 === _0x22efbf['hidden'] && _0x5768c8['requestAnimationFrame'] ? _0x5768c8['requestAnimationFrame'](_0x170fcf) : _0x5768c8['setTimeout'](_0x170fcf, _0x5daaf9['fx']['interval']),
        _0x5daaf9['fx']['tick']());
    }
    function _0x28b751() {
        return _0x5768c8['setTimeout'](function() {
            _0x2174d0 = void 0x0;
        }),
        _0x2174d0 = _0x5daaf9['now']();
    }
    function _0x47ce33(_0x4601fe, _0x26b97c) {
        var _0x58f5d4, _0x44052f = 0x0, _0x533059 = {
            'height': _0x4601fe
        };
        for (_0x26b97c = _0x26b97c ? 0x1 : 0x0; 0x4 > _0x44052f; _0x44052f += 0x2 - _0x26b97c)
            _0x58f5d4 = _0x3cfee8[_0x44052f],
            _0x533059['margin' + _0x58f5d4] = _0x533059['padding' + _0x58f5d4] = _0x4601fe;
        return _0x26b97c && (_0x533059['opacity'] = _0x533059['width'] = _0x4601fe),
        _0x533059;
    }
    function _0x428955(_0x586ad1, _0x52e5f9, _0x1dc130) {
        for (var _0x294123, _0x57e4f7 = (_0x53aba3['tweeners'][_0x52e5f9] || [])['concat'](_0x53aba3['tweeners']['*']), _0x2a26c5 = 0x0, _0x29566e = _0x57e4f7['length']; _0x2a26c5 < _0x29566e; _0x2a26c5++)
            if (_0x294123 = _0x57e4f7[_0x2a26c5]['call'](_0x1dc130, _0x52e5f9, _0x586ad1))
                return _0x294123;
    }
    function _0x53aba3(_0x25e068, _0xe62f66, _0xb638a9) {
        var _0x1a46c5, _0x3b68ad, _0x28be77 = 0x0, _0x31c8f1 = _0x53aba3['prefilters']['length'], _0x321622 = _0x5daaf9['Deferred']()['always'](function() {
            delete _0x5b60fd['elem'];
        }), _0x5b60fd = function() {
            if (_0x3b68ad)
                return !0x1;
            for (var _0x2708c7 = _0x2174d0 || _0x28b751(), _0x2708c7 = Math['max'](0x0, _0x3a0e58['startTime'] + _0x3a0e58['duration'] - _0x2708c7), _0x156ed2 = 0x1 - (_0x2708c7 / _0x3a0e58['duration'] || 0x0), _0x59a32a = 0x0, _0x2f0472 = _0x3a0e58['tweens']['length']; _0x59a32a < _0x2f0472; _0x59a32a++)
                _0x3a0e58['tweens'][_0x59a32a]['run'](_0x156ed2);
            return _0x321622['notifyWith'](_0x25e068, [_0x3a0e58, _0x156ed2, _0x2708c7]),
            0x1 > _0x156ed2 && _0x2f0472 ? _0x2708c7 : (_0x2f0472 || _0x321622['notifyWith'](_0x25e068, [_0x3a0e58, 0x1, 0x0]),
            _0x321622['resolveWith'](_0x25e068, [_0x3a0e58]),
            !0x1);
        }, _0x3a0e58 = _0x321622['promise']({
            'elem': _0x25e068,
            'props': _0x5daaf9['extend']({}, _0xe62f66),
            'opts': _0x5daaf9['extend'](!0x0, {
                'specialEasing': {},
                'easing': _0x5daaf9['easing']['_default']
            }, _0xb638a9),
            'originalProperties': _0xe62f66,
            'originalOptions': _0xb638a9,
            'startTime': _0x2174d0 || _0x28b751(),
            'duration': _0xb638a9['duration'],
            'tweens': [],
            'createTween': function(_0x1d6a83, _0x495e1c) {
                var _0x5f5098 = _0x5daaf9['Tween'](_0x25e068, _0x3a0e58['opts'], _0x1d6a83, _0x495e1c, _0x3a0e58['opts']['specialEasing'][_0x1d6a83] || _0x3a0e58['opts']['easing']);
                return _0x3a0e58['tweens']['push'](_0x5f5098),
                _0x5f5098;
            },
            'stop': function(_0x2bbcfd) {
                var _0x8a940 = 0x0
                  , _0xeeb63b = _0x2bbcfd ? _0x3a0e58['tweens']['length'] : 0x0;
                if (_0x3b68ad)
                    return this;
                for (_0x3b68ad = !0x0; _0x8a940 < _0xeeb63b; _0x8a940++)
                    _0x3a0e58['tweens'][_0x8a940]['run'](0x1);
                return _0x2bbcfd ? (_0x321622['notifyWith'](_0x25e068, [_0x3a0e58, 0x1, 0x0]),
                _0x321622['resolveWith'](_0x25e068, [_0x3a0e58, _0x2bbcfd])) : _0x321622['rejectWith'](_0x25e068, [_0x3a0e58, _0x2bbcfd]),
                this;
            }
        });
        _0xe62f66 = _0x3a0e58['props'],
        _0xb638a9 = _0x3a0e58['opts']['specialEasing'];
        var _0x3be5a6, _0x2c14a8, _0x16ac6c, _0x419c22;
        for (_0x1a46c5 in _0xe62f66)
            if (_0x3be5a6 = _0x5daaf9['camelCase'](_0x1a46c5),
            _0x2c14a8 = _0xb638a9[_0x3be5a6],
            _0x16ac6c = _0xe62f66[_0x1a46c5],
            Array['isArray'](_0x16ac6c) && (_0x2c14a8 = _0x16ac6c[0x1],
            _0x16ac6c = _0xe62f66[_0x1a46c5] = _0x16ac6c[0x0]),
            _0x1a46c5 !== _0x3be5a6 && (_0xe62f66[_0x3be5a6] = _0x16ac6c,
            delete _0xe62f66[_0x1a46c5]),
            _0x419c22 = _0x5daaf9['cssHooks'][_0x3be5a6],
            _0x419c22 && 'expand'in _0x419c22)
                for (_0x1a46c5 in (_0x16ac6c = _0x419c22['expand'](_0x16ac6c),
                delete _0xe62f66[_0x3be5a6],
                _0x16ac6c))
                    _0x1a46c5 in _0xe62f66 || (_0xe62f66[_0x1a46c5] = _0x16ac6c[_0x1a46c5],
                    _0xb638a9[_0x1a46c5] = _0x2c14a8);
            else
                _0xb638a9[_0x3be5a6] = _0x2c14a8;
        for (; _0x28be77 < _0x31c8f1; _0x28be77++)
            if (_0x1a46c5 = _0x53aba3['prefilters'][_0x28be77]['call'](_0x3a0e58, _0x25e068, _0xe62f66, _0x3a0e58['opts']))
                return _0x5daaf9['isFunction'](_0x1a46c5['stop']) && (_0x5daaf9['_queueHooks'](_0x3a0e58['elem'], _0x3a0e58['opts']['queue'])['stop'] = _0x5daaf9['proxy'](_0x1a46c5['stop'], _0x1a46c5)),
                _0x1a46c5;
        return _0x5daaf9['map'](_0xe62f66, _0x428955, _0x3a0e58),
        _0x5daaf9['isFunction'](_0x3a0e58['opts']['start']) && _0x3a0e58['opts']['start']['call'](_0x25e068, _0x3a0e58),
        _0x3a0e58['progress'](_0x3a0e58['opts']['progress'])['done'](_0x3a0e58['opts']['done'], _0x3a0e58['opts']['complete'])['fail'](_0x3a0e58['opts']['fail'])['always'](_0x3a0e58['opts']['always']),
        _0x5daaf9['fx']['timer'](_0x5daaf9['extend'](_0x5b60fd, {
            'elem': _0x25e068,
            'anim': _0x3a0e58,
            'queue': _0x3a0e58['opts']['queue']
        })),
        _0x3a0e58;
    }
    function _0x553627(_0x218de8) {
        return (_0x218de8['match'](_0x182fa8) || [])['join']('\x20');
    }
    function _0x455d42(_0x540dde) {
        return _0x540dde['getAttribute'] && _0x540dde['getAttribute']('class') || '';
    }
    function _0x177632(_0x1ad254, _0x4ef634, _0x11cd13, _0x51332b) {
        var _0x408c72;
        if (Array['isArray'](_0x4ef634))
            _0x5daaf9['each'](_0x4ef634, function(_0x58cc88, _0x5acea1) {
                _0x11cd13 || _0x2efef1['test'](_0x1ad254) ? _0x51332b(_0x1ad254, _0x5acea1) : _0x177632(_0x1ad254 + '[' + ('object' == typeof _0x5acea1 && null != _0x5acea1 ? _0x58cc88 : '') + ']', _0x5acea1, _0x11cd13, _0x51332b);
            });
        else {
            if (_0x11cd13 || 'object' !== _0x5daaf9['type'](_0x4ef634))
                _0x51332b(_0x1ad254, _0x4ef634);
            else
                for (_0x408c72 in _0x4ef634)
                    _0x177632(_0x1ad254 + '[' + _0x408c72 + ']', _0x4ef634[_0x408c72], _0x11cd13, _0x51332b);
        }
    }
    function _0x145e7e(_0x13862d) {
        return function(_0xbe0bc4, _0x4549b7) {
            'string' != typeof _0xbe0bc4 && (_0x4549b7 = _0xbe0bc4,
            _0xbe0bc4 = '*');
            var _0x5ec941, _0x2f5e39 = 0x0, _0x192885 = _0xbe0bc4['toLowerCase']()['match'](_0x182fa8) || [];
            if (_0x5daaf9['isFunction'](_0x4549b7))
                for (; _0x5ec941 = _0x192885[_0x2f5e39++]; )
                    '+' === _0x5ec941[0x0] ? (_0x5ec941 = _0x5ec941['slice'](0x1) || '*',
                    (_0x13862d[_0x5ec941] = _0x13862d[_0x5ec941] || [])['unshift'](_0x4549b7)) : (_0x13862d[_0x5ec941] = _0x13862d[_0x5ec941] || [])['push'](_0x4549b7);
        }
        ;
    }
    function _0x1017e1(_0x2ecaa4, _0x46f6cc, _0x4f56c1, _0xde603) {
        function _0x340244(_0x38b810) {
            var _0x3c65a7;
            return _0x29b450[_0x38b810] = !0x0,
            _0x5daaf9['each'](_0x2ecaa4[_0x38b810] || [], function(_0x2fb37e, _0x1f86d9) {
                var _0x4d63d4 = _0x1f86d9(_0x46f6cc, _0x4f56c1, _0xde603);
                return 'string' != typeof _0x4d63d4 || _0xece786 || _0x29b450[_0x4d63d4] ? _0xece786 ? !(_0x3c65a7 = _0x4d63d4) : void 0x0 : (_0x46f6cc['dataTypes']['unshift'](_0x4d63d4),
                _0x340244(_0x4d63d4),
                !0x1);
            }),
            _0x3c65a7;
        }
        var _0x29b450 = {}
          , _0xece786 = _0x2ecaa4 === _0x1d98d1;
        return _0x340244(_0x46f6cc['dataTypes'][0x0]) || !_0x29b450['*'] && _0x340244('*');
    }
    function _0x3d394f(_0x4812c3, _0xd30760) {
        var _0x5a1c87, _0x4083cf, _0xedb301 = _0x5daaf9['ajaxSettings']['flatOptions'] || {};
        for (_0x5a1c87 in _0xd30760)
            void 0x0 !== _0xd30760[_0x5a1c87] && ((_0xedb301[_0x5a1c87] ? _0x4812c3 : _0x4083cf || (_0x4083cf = {}))[_0x5a1c87] = _0xd30760[_0x5a1c87]);
        return _0x4083cf && _0x5daaf9['extend'](!0x0, _0x4812c3, _0x4083cf),
        _0x4812c3;
    }
    var _0xff239a = []
      , _0x22efbf = _0x5768c8['document']
      , _0x2ebe1b = Object['getPrototypeOf']
      , _0xff736b = _0xff239a['slice']
      , _0x4cf276 = _0xff239a['concat']
      , _0x1a7321 = _0xff239a['push']
      , _0x4fdb20 = _0xff239a['indexOf']
      , _0x4a8660 = {}
      , _0x1b2f72 = _0x4a8660['toString']
      , _0x4c3b51 = _0x4a8660['hasOwnProperty']
      , _0x5295a7 = _0x4c3b51['toString']
      , _0x1351fa = _0x5295a7['call'](Object)
      , _0x1c56b9 = {}
      , _0x5daaf9 = function(_0x291e13, _0x3355fe) {
        return new _0x5daaf9['fn']['init'](_0x291e13,_0x3355fe);
    }
      , _0x5ce9dd = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , _0x4c693e = /^-ms-/
      , _0xa269ba = /-([a-z])/g
      , _0x2b994c = function(_0x5da6cf, _0x559ce8) {
        return _0x559ce8['toUpperCase']();
    };
    _0x5daaf9['fn'] = _0x5daaf9['prototype'] = {
        'jquery': '3.2.1',
        'constructor': _0x5daaf9,
        'length': 0x0,
        'toArray': function() {
            return _0xff736b['call'](this);
        },
        'get': function(_0x4c6d2c) {
            return null == _0x4c6d2c ? _0xff736b['call'](this) : 0x0 > _0x4c6d2c ? this[_0x4c6d2c + this['length']] : this[_0x4c6d2c];
        },
        'pushStack': function(_0x345232) {
            return _0x345232 = _0x5daaf9['merge'](this['constructor'](), _0x345232),
            (_0x345232['prevObject'] = this,
            _0x345232);
        },
        'each': function(_0x48eec9) {
            return _0x5daaf9['each'](this, _0x48eec9);
        },
        'map': function(_0x5d9a05) {
            return this['pushStack'](_0x5daaf9['map'](this, function(_0x4ade02, _0x44681e) {
                return _0x5d9a05['call'](_0x4ade02, _0x44681e, _0x4ade02);
            }));
        },
        'slice': function() {
            return this['pushStack'](_0xff736b['apply'](this, arguments));
        },
        'first': function() {
            return this['eq'](0x0);
        },
        'last': function() {
            return this['eq'](-0x1);
        },
        'eq': function(_0x2694a6) {
            var _0x4db092 = this['length'];
            return _0x2694a6 = +_0x2694a6 + (0x0 > _0x2694a6 ? _0x4db092 : 0x0),
            this['pushStack'](0x0 <= _0x2694a6 && _0x2694a6 < _0x4db092 ? [this[_0x2694a6]] : []);
        },
        'end': function() {
            return this['prevObject'] || this['constructor']();
        },
        'push': _0x1a7321,
        'sort': _0xff239a['sort'],
        'splice': _0xff239a['splice']
    },
    _0x5daaf9['extend'] = _0x5daaf9['fn']['extend'] = function() {
        var _0x51b6c2, _0x3b0765, _0x1230ee, _0x5f0b82, _0x559208, _0x35dbb0, _0x4ce42d = arguments[0x0] || {}, _0x24c5ce = 0x1, _0x519edb = arguments['length'], _0x5f1169 = !0x1;
        'boolean' == typeof _0x4ce42d && (_0x5f1169 = _0x4ce42d,
        _0x4ce42d = arguments[_0x24c5ce] || {},
        _0x24c5ce++),
        'object' == typeof _0x4ce42d || _0x5daaf9['isFunction'](_0x4ce42d) || (_0x4ce42d = {});
        for (_0x24c5ce === _0x519edb && (_0x4ce42d = this,
        _0x24c5ce--); _0x24c5ce < _0x519edb; _0x24c5ce++)
            if (null != (_0x51b6c2 = arguments[_0x24c5ce]))
                for (_0x3b0765 in _0x51b6c2)
                    _0x1230ee = _0x4ce42d[_0x3b0765],
                    _0x5f0b82 = _0x51b6c2[_0x3b0765],
                    _0x4ce42d !== _0x5f0b82 && (_0x5f1169 && _0x5f0b82 && (_0x5daaf9['isPlainObject'](_0x5f0b82) || (_0x559208 = Array['isArray'](_0x5f0b82))) ? (_0x559208 ? (_0x559208 = !0x1,
                    _0x35dbb0 = _0x1230ee && Array['isArray'](_0x1230ee) ? _0x1230ee : []) : _0x35dbb0 = _0x1230ee && _0x5daaf9['isPlainObject'](_0x1230ee) ? _0x1230ee : {},
                    _0x4ce42d[_0x3b0765] = _0x5daaf9['extend'](_0x5f1169, _0x35dbb0, _0x5f0b82)) : void 0x0 !== _0x5f0b82 && (_0x4ce42d[_0x3b0765] = _0x5f0b82));
        return _0x4ce42d;
    }
    ,
    _0x5daaf9['extend']({
        'expando': 'jQuery' + ('3.2.1' + Math['random']())['replace'](/\D/g, ''),
        'isReady': !0x0,
        'error': function(_0x282cad) {
            throw Error(_0x282cad);
        },
        'noop': function() {},
        'isFunction': function(_0x316157) {
            return 'function' === _0x5daaf9['type'](_0x316157);
        },
        'isWindow': function(_0x12b60c) {
            return null != _0x12b60c && _0x12b60c === _0x12b60c['window'];
        },
        'isNumeric': function(_0x1f77d1) {
            var _0x48767a = _0x5daaf9['type'](_0x1f77d1);
            return ('number' === _0x48767a || 'string' === _0x48767a) && !isNaN(_0x1f77d1 - parseFloat(_0x1f77d1));
        },
        'isPlainObject': function(_0x2b93e4) {
            var _0x1d078a, _0x58cdc0;
            return !(!_0x2b93e4 || '[object\x20Object]' !== _0x1b2f72['call'](_0x2b93e4)) && (!(_0x1d078a = _0x2ebe1b(_0x2b93e4)) || (_0x58cdc0 = _0x4c3b51['call'](_0x1d078a, 'constructor') && _0x1d078a['constructor'],
            'function' == typeof _0x58cdc0 && _0x5295a7['call'](_0x58cdc0) === _0x1351fa));
        },
        'isEmptyObject': function(_0x20ee10) {
            for (var _0x51c26d in _0x20ee10)
                return !0x1;
            return !0x0;
        },
        'type': function(_0x17cbb2) {
            return null == _0x17cbb2 ? _0x17cbb2 + '' : 'object' == typeof _0x17cbb2 || 'function' == typeof _0x17cbb2 ? _0x4a8660[_0x1b2f72['call'](_0x17cbb2)] || 'object' : typeof _0x17cbb2;
        },
        'globalEval': function(_0x430651) {
            _0x332abd(_0x430651);
        },
        'camelCase': function(_0x164427) {
            return _0x164427['replace'](_0x4c693e, 'ms-')['replace'](_0xa269ba, _0x2b994c);
        },
        'each': function(_0x2ac548, _0x428c4a) {
            var _0x498bc1, _0x52f212 = 0x0;
            if (_0xe6b36c(_0x2ac548))
                for (_0x498bc1 = _0x2ac548['length']; _0x52f212 < _0x498bc1 && !0x1 !== _0x428c4a['call'](_0x2ac548[_0x52f212], _0x52f212, _0x2ac548[_0x52f212]); _0x52f212++)
                    ;
            else
                for (_0x52f212 in _0x2ac548)
                    if (!0x1 === _0x428c4a['call'](_0x2ac548[_0x52f212], _0x52f212, _0x2ac548[_0x52f212]))
                        break;
            return _0x2ac548;
        },
        'trim': function(_0x4a91fd) {
            return null == _0x4a91fd ? '' : (_0x4a91fd + '')['replace'](_0x5ce9dd, '');
        },
        'makeArray': function(_0x52ce00, _0x16a305) {
            var _0x3ac7f6 = _0x16a305 || [];
            return null != _0x52ce00 && (_0xe6b36c(Object(_0x52ce00)) ? _0x5daaf9['merge'](_0x3ac7f6, 'string' == typeof _0x52ce00 ? [_0x52ce00] : _0x52ce00) : _0x1a7321['call'](_0x3ac7f6, _0x52ce00)),
            _0x3ac7f6;
        },
        'inArray': function(_0x58101d, _0x145f15, _0x2b01c6) {
            return null == _0x145f15 ? -0x1 : _0x4fdb20['call'](_0x145f15, _0x58101d, _0x2b01c6);
        },
        'merge': function(_0x37a710, _0xc659bb) {
            for (var _0xdfc1b = +_0xc659bb['length'], _0x4d753c = 0x0, _0xeba315 = _0x37a710['length']; _0x4d753c < _0xdfc1b; _0x4d753c++)
                _0x37a710[_0xeba315++] = _0xc659bb[_0x4d753c];
            return _0x37a710['length'] = _0xeba315,
            _0x37a710;
        },
        'grep': function(_0x65b3ed, _0x1c3308, _0x4cff94) {
            for (var _0x56bc01 = [], _0x546375 = 0x0, _0x5bf336 = _0x65b3ed['length'], _0x154b12 = !_0x4cff94; _0x546375 < _0x5bf336; _0x546375++)
                _0x4cff94 = !_0x1c3308(_0x65b3ed[_0x546375], _0x546375),
                _0x4cff94 !== _0x154b12 && _0x56bc01['push'](_0x65b3ed[_0x546375]);
            return _0x56bc01;
        },
        'map': function(_0x5cda13, _0x36168b, _0x5c9782) {
            var _0x4b31f1, _0x5bc502, _0x277b5b = 0x0, _0x2a9737 = [];
            if (_0xe6b36c(_0x5cda13))
                for (_0x4b31f1 = _0x5cda13['length']; _0x277b5b < _0x4b31f1; _0x277b5b++)
                    _0x5bc502 = _0x36168b(_0x5cda13[_0x277b5b], _0x277b5b, _0x5c9782),
                    null != _0x5bc502 && _0x2a9737['push'](_0x5bc502);
            else
                for (_0x277b5b in _0x5cda13)
                    _0x5bc502 = _0x36168b(_0x5cda13[_0x277b5b], _0x277b5b, _0x5c9782),
                    null != _0x5bc502 && _0x2a9737['push'](_0x5bc502);
            return _0x4cf276['apply']([], _0x2a9737);
        },
        'guid': 0x1,
        'proxy': function(_0x263d57, _0x30cb53) {
            var _0xb66623, _0x5d1e26, _0x563aa5;
            if ('string' == typeof _0x30cb53 && (_0xb66623 = _0x263d57[_0x30cb53],
            _0x30cb53 = _0x263d57,
            _0x263d57 = _0xb66623),
            _0x5daaf9['isFunction'](_0x263d57))
                return _0x5d1e26 = _0xff736b['call'](arguments, 0x2),
                _0x563aa5 = function() {
                    return _0x263d57['apply'](_0x30cb53 || this, _0x5d1e26['concat'](_0xff736b['call'](arguments)));
                }
                ,
                _0x563aa5['guid'] = _0x263d57['guid'] = _0x263d57['guid'] || _0x5daaf9['guid']++,
                _0x563aa5;
        },
        'now': Date['now'],
        'support': _0x1c56b9
    }),
    'function' == typeof Symbol && (_0x5daaf9['fn'][Symbol['iterator']] = _0xff239a[Symbol['iterator']]),
    _0x5daaf9['each']('Boolean\x20Number\x20String\x20Function\x20Array\x20Date\x20RegExp\x20Object\x20Error\x20Symbol'['split']('\x20'), function(_0x4e1f28, _0x1082ff) {
        _0x4a8660['[object\x20' + _0x1082ff + ']'] = _0x1082ff['toLowerCase']();
    });
    var _0xffc0d9, _0x24b423 = _0x5768c8, _0x262490 = function(_0xf8f1d3, _0x413de7, _0x51109b, _0x4557fc) {
        var _0x4ad4a0, _0x3649b9, _0x5aea30, _0xcf4e91, _0xc67043, _0x1d69cd = _0x413de7 && _0x413de7['ownerDocument'], _0x4bf33b = _0x413de7 ? _0x413de7['nodeType'] : 0x9;
        if (_0x51109b = _0x51109b || [],
        'string' != typeof _0xf8f1d3 || !_0xf8f1d3 || 0x1 !== _0x4bf33b && 0x9 !== _0x4bf33b && 0xb !== _0x4bf33b)
            return _0x51109b;
        if (!_0x4557fc && ((_0x413de7 ? _0x413de7['ownerDocument'] || _0x413de7 : _0xd6cd9b) !== _0x159f70 && _0x42f45f(_0x413de7),
        _0x413de7 = _0x413de7 || _0x159f70,
        _0x4162dc)) {
            if (0xb !== _0x4bf33b && (_0xcf4e91 = _0x4c1868['exec'](_0xf8f1d3))) {
                if (_0x4ad4a0 = _0xcf4e91[0x1]) {
                    if (0x9 === _0x4bf33b) {
                        if (!(_0x3649b9 = _0x413de7['getElementById'](_0x4ad4a0)))
                            return _0x51109b;
                        if (_0x3649b9['id'] === _0x4ad4a0)
                            return _0x51109b['push'](_0x3649b9),
                            _0x51109b;
                    } else {
                        if (_0x1d69cd && (_0x3649b9 = _0x1d69cd['getElementById'](_0x4ad4a0)) && _0x146455(_0x413de7, _0x3649b9) && _0x3649b9['id'] === _0x4ad4a0)
                            return _0x51109b['push'](_0x3649b9),
                            _0x51109b;
                    }
                } else {
                    if (_0xcf4e91[0x2])
                        return _0xf50024['apply'](_0x51109b, _0x413de7['getElementsByTagName'](_0xf8f1d3)),
                        _0x51109b;
                    if ((_0x4ad4a0 = _0xcf4e91[0x3]) && _0x4b237a['getElementsByClassName'] && _0x413de7['getElementsByClassName'])
                        return _0xf50024['apply'](_0x51109b, _0x413de7['getElementsByClassName'](_0x4ad4a0)),
                        _0x51109b;
                }
            }
            if (_0x4b237a['qsa'] && !_0x167a55[_0xf8f1d3 + '\x20'] && (!_0x27957f || !_0x27957f['test'](_0xf8f1d3))) {
                if (0x1 !== _0x4bf33b)
                    _0x1d69cd = _0x413de7,
                    _0xc67043 = _0xf8f1d3;
                else {
                    if ('object' !== _0x413de7['nodeName']['toLowerCase']()) {
                        (_0x5aea30 = _0x413de7['getAttribute']('id')) ? _0x5aea30 = _0x5aea30['replace'](_0x6c78aa, _0x2832d7) : _0x413de7['setAttribute']('id', _0x5aea30 = _0x3d485b),
                        _0x3649b9 = _0x15ea03(_0xf8f1d3);
                        for (_0x4ad4a0 = _0x3649b9['length']; _0x4ad4a0--; )
                            _0x3649b9[_0x4ad4a0] = '#' + _0x5aea30 + '\x20' + _0x3d9776(_0x3649b9[_0x4ad4a0]);
                        _0xc67043 = _0x3649b9['join'](','),
                        _0x1d69cd = _0x881e70['test'](_0xf8f1d3) && _0x4b4e05(_0x413de7['parentNode']) || _0x413de7;
                    }
                }
                if (_0xc67043)
                    try {
                        return _0xf50024['apply'](_0x51109b, _0x1d69cd['querySelectorAll'](_0xc67043)),
                        _0x51109b;
                    } catch (_0x18826e) {} finally {
                        _0x5aea30 === _0x3d485b && _0x413de7['removeAttribute']('id');
                    }
            }
        }
        return _0x285f60(_0xf8f1d3['replace'](_0x39f795, '$1'), _0x413de7, _0x51109b, _0x4557fc);
    }, _0x4eb7c3 = function() {
        function _0x3ddcca(_0x2b6db3, _0x26fef9) {
            return _0x1ce7cd['push'](_0x2b6db3 + '\x20') > _0xa72516['cacheLength'] && delete _0x3ddcca[_0x1ce7cd['shift']()],
            _0x3ddcca[_0x2b6db3 + '\x20'] = _0x26fef9;
        }
        var _0x1ce7cd = [];
        return _0x3ddcca;
    }, _0x193866 = function(_0x37695b) {
        return _0x37695b[_0x3d485b] = !0x0,
        _0x37695b;
    }, _0x45627d = function(_0x33d19f) {
        var _0x20baf1 = _0x159f70['createElement']('fieldset');
        try {
            return !!_0x33d19f(_0x20baf1);
        } catch (_0x502fe2) {
            return !0x1;
        } finally {
            _0x20baf1['parentNode'] && _0x20baf1['parentNode']['removeChild'](_0x20baf1);
        }
    }, _0x517c8b = function(_0x40bdea, _0x12169b) {
        for (var _0x96b665 = _0x40bdea['split']('|'), _0x180f6a = _0x96b665['length']; _0x180f6a--; )
            _0xa72516['attrHandle'][_0x96b665[_0x180f6a]] = _0x12169b;
    }, _0x2db253 = function(_0x4091ea, _0x234bc8) {
        var _0x5a96d4 = _0x234bc8 && _0x4091ea
          , _0x3be8ec = _0x5a96d4 && 0x1 === _0x4091ea['nodeType'] && 0x1 === _0x234bc8['nodeType'] && _0x4091ea['sourceIndex'] - _0x234bc8['sourceIndex'];
        if (_0x3be8ec)
            return _0x3be8ec;
        if (_0x5a96d4)
            for (; _0x5a96d4 = _0x5a96d4['nextSibling']; )
                if (_0x5a96d4 === _0x234bc8)
                    return -0x1;
        return _0x4091ea ? 0x1 : -0x1;
    }, _0x23fedd = function(_0x43542d) {
        return function(_0x7e22c) {
            return 'input' === _0x7e22c['nodeName']['toLowerCase']() && _0x7e22c['type'] === _0x43542d;
        }
        ;
    }, _0x22f1bc = function(_0x5683a1) {
        return function(_0x449427) {
            var _0x104191 = _0x449427['nodeName']['toLowerCase']();
            return ('input' === _0x104191 || 'button' === _0x104191) && _0x449427['type'] === _0x5683a1;
        }
        ;
    }, _0x27fa0f = function(_0x5bfcfa) {
        return function(_0x3ccffc) {
            return 'form'in _0x3ccffc ? _0x3ccffc['parentNode'] && !0x1 === _0x3ccffc['disabled'] ? 'label'in _0x3ccffc ? 'label'in _0x3ccffc['parentNode'] ? _0x3ccffc['parentNode']['disabled'] === _0x5bfcfa : _0x3ccffc['disabled'] === _0x5bfcfa : _0x3ccffc['isDisabled'] === _0x5bfcfa || _0x3ccffc['isDisabled'] !== !_0x5bfcfa && _0x159e4a(_0x3ccffc) === _0x5bfcfa : _0x3ccffc['disabled'] === _0x5bfcfa : 'label'in _0x3ccffc && _0x3ccffc['disabled'] === _0x5bfcfa;
        }
        ;
    }, _0x121626 = function(_0x32e303) {
        return _0x193866(function(_0x5f0347) {
            return _0x5f0347 = +_0x5f0347,
            _0x193866(function(_0x14202c, _0x44da2b) {
                for (var _0x2ca98b, _0x309bb3 = _0x32e303([], _0x14202c['length'], _0x5f0347), _0x4ccbc6 = _0x309bb3['length']; _0x4ccbc6--; )
                    _0x14202c[_0x2ca98b = _0x309bb3[_0x4ccbc6]] && (_0x14202c[_0x2ca98b] = !(_0x44da2b[_0x2ca98b] = _0x14202c[_0x2ca98b]));
            });
        });
    }, _0x4b4e05 = function(_0x26f008) {
        return _0x26f008 && 'undefined' != typeof _0x26f008['getElementsByTagName'] && _0x26f008;
    }, _0x427c7d = function() {}, _0x3d9776 = function(_0x24b240) {
        for (var _0x19bfec = 0x0, _0x2e0f18 = _0x24b240['length'], _0x1676f4 = ''; _0x19bfec < _0x2e0f18; _0x19bfec++)
            _0x1676f4 += _0x24b240[_0x19bfec]['value'];
        return _0x1676f4;
    }, _0x5df56e = function(_0xd5a5cb, _0x49c80f, _0x31a3a6) {
        var _0x47a29e = _0x49c80f['dir']
          , _0x485484 = _0x49c80f['next']
          , _0x236f46 = _0x485484 || _0x47a29e
          , _0x4b3bd4 = _0x31a3a6 && 'parentNode' === _0x236f46
          , _0x4b287b = _0x3a06f0++;
        return _0x49c80f['first'] ? function(_0x3979ef, _0xbac24a, _0xe43516) {
            for (; _0x3979ef = _0x3979ef[_0x47a29e]; )
                if (0x1 === _0x3979ef['nodeType'] || _0x4b3bd4)
                    return _0xd5a5cb(_0x3979ef, _0xbac24a, _0xe43516);
            return !0x1;
        }
        : function(_0x155d4b, _0x1b0ec5, _0x49ef3e) {
            var _0x122295, _0x5898ff, _0x1e2449, _0x18a78b = [_0x1a1a94, _0x4b287b];
            if (_0x49ef3e)
                for (; _0x155d4b = _0x155d4b[_0x47a29e]; ) {
                    if ((0x1 === _0x155d4b['nodeType'] || _0x4b3bd4) && _0xd5a5cb(_0x155d4b, _0x1b0ec5, _0x49ef3e))
                        return !0x0;
                }
            else
                for (; _0x155d4b = _0x155d4b[_0x47a29e]; )
                    if (0x1 === _0x155d4b['nodeType'] || _0x4b3bd4) {
                        if (_0x1e2449 = _0x155d4b[_0x3d485b] || (_0x155d4b[_0x3d485b] = {}),
                        _0x5898ff = _0x1e2449[_0x155d4b['uniqueID']] || (_0x1e2449[_0x155d4b['uniqueID']] = {}),
                        _0x485484 && _0x485484 === _0x155d4b['nodeName']['toLowerCase']())
                            _0x155d4b = _0x155d4b[_0x47a29e] || _0x155d4b;
                        else {
                            if ((_0x122295 = _0x5898ff[_0x236f46]) && _0x122295[0x0] === _0x1a1a94 && _0x122295[0x1] === _0x4b287b)
                                return _0x18a78b[0x2] = _0x122295[0x2];
                            if (_0x5898ff[_0x236f46] = _0x18a78b,
                            _0x18a78b[0x2] = _0xd5a5cb(_0x155d4b, _0x1b0ec5, _0x49ef3e))
                                return !0x0;
                        }
                    }
            return !0x1;
        }
        ;
    }, _0x16ae84 = function(_0x5dd735) {
        return 0x1 < _0x5dd735['length'] ? function(_0x265a57, _0x365437, _0x523c7f) {
            for (var _0xe7b09d = _0x5dd735['length']; _0xe7b09d--; )
                if (!_0x5dd735[_0xe7b09d](_0x265a57, _0x365437, _0x523c7f))
                    return !0x1;
            return !0x0;
        }
        : _0x5dd735[0x0];
    }, _0x1e5f08 = function(_0x20dfc2, _0x3a6586, _0x21d458, _0x200d07, _0x118296) {
        for (var _0x494b94, _0x492b26 = [], _0x55f5e1 = 0x0, _0x132137 = _0x20dfc2['length'], _0x341038 = null != _0x3a6586; _0x55f5e1 < _0x132137; _0x55f5e1++)
            (_0x494b94 = _0x20dfc2[_0x55f5e1]) && (_0x21d458 && !_0x21d458(_0x494b94, _0x200d07, _0x118296) || (_0x492b26['push'](_0x494b94),
            _0x341038 && _0x3a6586['push'](_0x55f5e1)));
        return _0x492b26;
    }, _0x4242c2 = function(_0x29cb3f, _0x37c2bd, _0x3bc670, _0x3520e7, _0x43ae80, _0x108779) {
        return _0x3520e7 && !_0x3520e7[_0x3d485b] && (_0x3520e7 = _0x4242c2(_0x3520e7)),
        _0x43ae80 && !_0x43ae80[_0x3d485b] && (_0x43ae80 = _0x4242c2(_0x43ae80, _0x108779)),
        _0x193866(function(_0x537ef2, _0x59694d, _0x52e640, _0x4ce33d) {
            var _0x13b0f1, _0x3cac72, _0xcb3bd2 = [], _0x5a59a6 = [], _0x47ae02 = _0x59694d['length'], _0x315c0f;
            if (!(_0x315c0f = _0x537ef2)) {
                _0x315c0f = _0x37c2bd || '*';
                for (var _0x58cd50 = _0x52e640['nodeType'] ? [_0x52e640] : _0x52e640, _0x267dc0 = [], _0x25bb48 = 0x0, _0xdf1b81 = _0x58cd50['length']; _0x25bb48 < _0xdf1b81; _0x25bb48++)
                    _0x262490(_0x315c0f, _0x58cd50[_0x25bb48], _0x267dc0);
                _0x315c0f = _0x267dc0;
            }
            _0x315c0f = !_0x29cb3f || !_0x537ef2 && _0x37c2bd ? _0x315c0f : _0x1e5f08(_0x315c0f, _0xcb3bd2, _0x29cb3f, _0x52e640, _0x4ce33d),
            _0x58cd50 = _0x3bc670 ? _0x43ae80 || (_0x537ef2 ? _0x29cb3f : _0x47ae02 || _0x3520e7) ? [] : _0x59694d : _0x315c0f;
            if (_0x3bc670 && _0x3bc670(_0x315c0f, _0x58cd50, _0x52e640, _0x4ce33d),
            _0x3520e7) {
                _0x13b0f1 = _0x1e5f08(_0x58cd50, _0x5a59a6),
                _0x3520e7(_0x13b0f1, [], _0x52e640, _0x4ce33d);
                for (_0x52e640 = _0x13b0f1['length']; _0x52e640--; )
                    (_0x3cac72 = _0x13b0f1[_0x52e640]) && (_0x58cd50[_0x5a59a6[_0x52e640]] = !(_0x315c0f[_0x5a59a6[_0x52e640]] = _0x3cac72));
            }
            if (_0x537ef2) {
                if (_0x43ae80 || _0x29cb3f) {
                    if (_0x43ae80) {
                        _0x13b0f1 = [];
                        for (_0x52e640 = _0x58cd50['length']; _0x52e640--; )
                            (_0x3cac72 = _0x58cd50[_0x52e640]) && _0x13b0f1['push'](_0x315c0f[_0x52e640] = _0x3cac72);
                        _0x43ae80(null, _0x58cd50 = [], _0x13b0f1, _0x4ce33d);
                    }
                    for (_0x52e640 = _0x58cd50['length']; _0x52e640--; )
                        (_0x3cac72 = _0x58cd50[_0x52e640]) && -0x1 < (_0x13b0f1 = _0x43ae80 ? _0xbc31c7(_0x537ef2, _0x3cac72) : _0xcb3bd2[_0x52e640]) && (_0x537ef2[_0x13b0f1] = !(_0x59694d[_0x13b0f1] = _0x3cac72));
                }
            } else
                _0x58cd50 = _0x1e5f08(_0x58cd50 === _0x59694d ? _0x58cd50['splice'](_0x47ae02, _0x58cd50['length']) : _0x58cd50),
                _0x43ae80 ? _0x43ae80(null, _0x59694d, _0x58cd50, _0x4ce33d) : _0xf50024['apply'](_0x59694d, _0x58cd50);
        });
    }, _0xa2e7aa = function(_0x1dac1d) {
        var _0xe2fc0a, _0x1a7b01, _0x4b5dc8, _0x5105af = _0x1dac1d['length'], _0x5d25d3 = _0xa72516['relative'][_0x1dac1d[0x0]['type']];
        _0x1a7b01 = _0x5d25d3 || _0xa72516['relative']['\x20'];
        for (var _0xf928f3 = _0x5d25d3 ? 0x1 : 0x0, _0x537d11 = _0x5df56e(function(_0x41a6ed) {
            return _0x41a6ed === _0xe2fc0a;
        }, _0x1a7b01, !0x0), _0x139d3c = _0x5df56e(function(_0x42af4c) {
            return -0x1 < _0xbc31c7(_0xe2fc0a, _0x42af4c);
        }, _0x1a7b01, !0x0), _0x307d20 = [function(_0x554ab0, _0x1a5ab6, _0x552cfe) {
            return _0x554ab0 = !_0x5d25d3 && (_0x552cfe || _0x1a5ab6 !== _0x547c80) || ((_0xe2fc0a = _0x1a5ab6)['nodeType'] ? _0x537d11(_0x554ab0, _0x1a5ab6, _0x552cfe) : _0x139d3c(_0x554ab0, _0x1a5ab6, _0x552cfe)),
            (_0xe2fc0a = null,
            _0x554ab0);
        }
        ]; _0xf928f3 < _0x5105af; _0xf928f3++)
            if (_0x1a7b01 = _0xa72516['relative'][_0x1dac1d[_0xf928f3]['type']])
                _0x307d20 = [_0x5df56e(_0x16ae84(_0x307d20), _0x1a7b01)];
            else {
                if (_0x1a7b01 = _0xa72516['filter'][_0x1dac1d[_0xf928f3]['type']]['apply'](null, _0x1dac1d[_0xf928f3]['matches']),
                _0x1a7b01[_0x3d485b]) {
                    for (_0x4b5dc8 = ++_0xf928f3; _0x4b5dc8 < _0x5105af && !_0xa72516['relative'][_0x1dac1d[_0x4b5dc8]['type']]; _0x4b5dc8++)
                        ;
                    return _0x4242c2(0x1 < _0xf928f3 && _0x16ae84(_0x307d20), 0x1 < _0xf928f3 && _0x3d9776(_0x1dac1d['slice'](0x0, _0xf928f3 - 0x1)['concat']({
                        'value': '\x20' === _0x1dac1d[_0xf928f3 - 0x2]['type'] ? '*' : ''
                    }))['replace'](_0x39f795, '$1'), _0x1a7b01, _0xf928f3 < _0x4b5dc8 && _0xa2e7aa(_0x1dac1d['slice'](_0xf928f3, _0x4b5dc8)), _0x4b5dc8 < _0x5105af && _0xa2e7aa(_0x1dac1d = _0x1dac1d['slice'](_0x4b5dc8)), _0x4b5dc8 < _0x5105af && _0x3d9776(_0x1dac1d));
                }
                _0x307d20['push'](_0x1a7b01);
            }
        return _0x16ae84(_0x307d20);
    }, _0x5191f2, _0x4b237a, _0xa72516, _0x58b0e2, _0x412e77, _0x15ea03, _0x4a47cf, _0x285f60, _0x547c80, _0x36e429, _0x1645a9, _0x42f45f, _0x159f70, _0x336c65, _0x4162dc, _0x27957f, _0x395905, _0x14579b, _0x146455, _0x3d485b = 'sizzle' + 0x1 * new Date(), _0xd6cd9b = _0x24b423['document'], _0x1a1a94 = 0x0, _0x3a06f0 = 0x0, _0x3a6448 = _0x4eb7c3(), _0x3b952a = _0x4eb7c3(), _0x167a55 = _0x4eb7c3(), _0x24c177 = function(_0x392f24, _0x55517d) {
        return _0x392f24 === _0x55517d && (_0x1645a9 = !0x0),
        0x0;
    }, _0x1eebb4 = {}['hasOwnProperty'], _0x4ccd0e = [], _0x507582 = _0x4ccd0e['pop'], _0x4dcacd = _0x4ccd0e['push'], _0xf50024 = _0x4ccd0e['push'], _0x2dacd4 = _0x4ccd0e['slice'], _0xbc31c7 = function(_0x1e7e18, _0x564237) {
        for (var _0x303b0f = 0x0, _0x15388b = _0x1e7e18['length']; _0x303b0f < _0x15388b; _0x303b0f++)
            if (_0x1e7e18[_0x303b0f] === _0x564237)
                return _0x303b0f;
        return -0x1;
    }, _0x5d28d5 = /[\x20\t\r\n\f]+/g, _0x39f795 = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, _0x3bb7b5 = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, _0x518073 = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, _0x1da53a = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, _0x40bac2 = RegExp(':((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+)(?:\x5c(((\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22)|((?:\x5c\x5c.|[^\x5c\x5c()[\x5c]]|\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c])*)|.*)\x5c)|)'), _0xbbc0b7 = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, _0x1455fa = {
        'ID': /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
        'CLASS': /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
        'TAG': /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
        'ATTR': RegExp('^\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c]'),
        'PSEUDO': RegExp('^:((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+)(?:\x5c(((\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22)|((?:\x5c\x5c.|[^\x5c\x5c()[\x5c]]|\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c])*)|.*)\x5c)|)'),
        'CHILD': RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\x5c([\x5cx20\x5ct\x5cr\x5cn\x5cf]*(even|odd|(([+-]|)(\x5cd*)n|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:([+-]|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(\x5cd+)|))[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c)|)', 'i'),
        'bool': RegExp('^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$', 'i'),
        'needsContext': RegExp('^[\x5cx20\x5ct\x5cr\x5cn\x5cf]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\x5c([\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:-\x5cd)?\x5cd*)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c)|)(?=[^-]|$)', 'i')
    }, _0x5a15d5 = /^(?:input|select|textarea|button)$/i, _0x525ae6 = /^h\d$/i, _0x64939f = /^[^{]+\{\s*\[native \w/, _0x4c1868 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _0x881e70 = /[+~]/, _0x407fc4 = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, _0x22af57 = function(_0x3ae41a, _0x152761, _0x23860e) {
        return _0x3ae41a = '0x' + _0x152761 - 0x10000,
        _0x3ae41a !== _0x3ae41a || _0x23860e ? _0x152761 : 0x0 > _0x3ae41a ? String['fromCharCode'](_0x3ae41a + 0x10000) : String['fromCharCode'](_0x3ae41a >> 0xa | 0xd800, 0x3ff & _0x3ae41a | 0xdc00);
    }, _0x6c78aa = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, _0x2832d7 = function(_0x953cb3, _0x3f723a) {
        return _0x3f723a ? '\x00' === _0x953cb3 ? '�' : _0x953cb3['slice'](0x0, -0x1) + '\x5c' + _0x953cb3['charCodeAt'](_0x953cb3['length'] - 0x1)['toString'](0x10) + '\x20' : '\x5c' + _0x953cb3;
    }, _0xc36c2a = function() {
        _0x42f45f();
    }, _0x159e4a = _0x5df56e(function(_0x1ffccd) {
        return !0x0 === _0x1ffccd['disabled'] && ('form'in _0x1ffccd || 'label'in _0x1ffccd);
    }, {
        'dir': 'parentNode',
        'next': 'legend'
    });
    try {
        _0xf50024['apply'](_0x4ccd0e = _0x2dacd4['call'](_0xd6cd9b['childNodes']), _0xd6cd9b['childNodes']),
        _0x4ccd0e[_0xd6cd9b['childNodes']['length']]['nodeType'];
    } catch (_0x5dd500) {
        _0xf50024 = {
            'apply': _0x4ccd0e['length'] ? function(_0x204e7f, _0x525fc1) {
                _0x4dcacd['apply'](_0x204e7f, _0x2dacd4['call'](_0x525fc1));
            }
            : function(_0x5a6ead, _0x4f3896) {
                for (var _0x1570f2 = _0x5a6ead['length'], _0x3b570e = 0x0; _0x5a6ead[_0x1570f2++] = _0x4f3896[_0x3b570e++]; )
                    ;
                _0x5a6ead['length'] = _0x1570f2 - 0x1;
            }
        };
    }
    _0x4b237a = _0x262490['support'] = {},
    _0x412e77 = _0x262490['isXML'] = function(_0x50908b) {
        return _0x50908b = _0x50908b && (_0x50908b['ownerDocument'] || _0x50908b)['documentElement'],
        !!_0x50908b && 'HTML' !== _0x50908b['nodeName'];
    }
    ,
    _0x42f45f = _0x262490['setDocument'] = function(_0x38bfa3) {
        var _0x51df2a, _0xe96afc;
        return _0x38bfa3 = _0x38bfa3 ? _0x38bfa3['ownerDocument'] || _0x38bfa3 : _0xd6cd9b,
        _0x38bfa3 !== _0x159f70 && 0x9 === _0x38bfa3['nodeType'] && _0x38bfa3['documentElement'] ? (_0x159f70 = _0x38bfa3,
        _0x336c65 = _0x159f70['documentElement'],
        _0x4162dc = !_0x412e77(_0x159f70),
        _0xd6cd9b !== _0x159f70 && (_0xe96afc = _0x159f70['defaultView']) && _0xe96afc['top'] !== _0xe96afc && (_0xe96afc['addEventListener'] ? _0xe96afc['addEventListener']('unload', _0xc36c2a, !0x1) : _0xe96afc['attachEvent'] && _0xe96afc['attachEvent']('onunload', _0xc36c2a)),
        _0x4b237a['attributes'] = _0x45627d(function(_0x35f25b) {
            return _0x35f25b['className'] = 'i',
            !_0x35f25b['getAttribute']('className');
        }),
        _0x4b237a['getElementsByTagName'] = _0x45627d(function(_0xdf6769) {
            return _0xdf6769['appendChild'](_0x159f70['createComment']('')),
            !_0xdf6769['getElementsByTagName']('*')['length'];
        }),
        _0x4b237a['getElementsByClassName'] = _0x64939f['test'](_0x159f70['getElementsByClassName']),
        _0x4b237a['getById'] = _0x45627d(function(_0x5181e2) {
            return _0x336c65['appendChild'](_0x5181e2)['id'] = _0x3d485b,
            !_0x159f70['getElementsByName'] || !_0x159f70['getElementsByName'](_0x3d485b)['length'];
        }),
        _0x4b237a['getById'] ? (_0xa72516['filter']['ID'] = function(_0x2cb69d) {
            var _0x59119f = _0x2cb69d['replace'](_0x407fc4, _0x22af57);
            return function(_0x22d5e9) {
                return _0x22d5e9['getAttribute']('id') === _0x59119f;
            }
            ;
        }
        ,
        _0xa72516['find']['ID'] = function(_0x5d2f85, _0xe380f4) {
            if ('undefined' != typeof _0xe380f4['getElementById'] && _0x4162dc) {
                var _0x2ba489 = _0xe380f4['getElementById'](_0x5d2f85);
                return _0x2ba489 ? [_0x2ba489] : [];
            }
        }
        ) : (_0xa72516['filter']['ID'] = function(_0x4448e5) {
            var _0x439e9e = _0x4448e5['replace'](_0x407fc4, _0x22af57);
            return function(_0x471724) {
                return (_0x471724 = 'undefined' != typeof _0x471724['getAttributeNode'] && _0x471724['getAttributeNode']('id')) && _0x471724['value'] === _0x439e9e;
            }
            ;
        }
        ,
        _0xa72516['find']['ID'] = function(_0x359dc9, _0x580128) {
            if ('undefined' != typeof _0x580128['getElementById'] && _0x4162dc) {
                var _0x3e5b6c, _0xfd0e00, _0xe622f7, _0x3037ae = _0x580128['getElementById'](_0x359dc9);
                if (_0x3037ae) {
                    if (_0x3e5b6c = _0x3037ae['getAttributeNode']('id'),
                    _0x3e5b6c && _0x3e5b6c['value'] === _0x359dc9)
                        return [_0x3037ae];
                    _0xe622f7 = _0x580128['getElementsByName'](_0x359dc9);
                    for (_0xfd0e00 = 0x0; _0x3037ae = _0xe622f7[_0xfd0e00++]; )
                        if (_0x3e5b6c = _0x3037ae['getAttributeNode']('id'),
                        _0x3e5b6c && _0x3e5b6c['value'] === _0x359dc9)
                            return [_0x3037ae];
                }
                return [];
            }
        }
        ),
        _0xa72516['find']['TAG'] = _0x4b237a['getElementsByTagName'] ? function(_0x3f1c71, _0x22cf1f) {
            return 'undefined' != typeof _0x22cf1f['getElementsByTagName'] ? _0x22cf1f['getElementsByTagName'](_0x3f1c71) : _0x4b237a['qsa'] ? _0x22cf1f['querySelectorAll'](_0x3f1c71) : void 0x0;
        }
        : function(_0x1ad0d8, _0x5e29f0) {
            var _0x2f3f18, _0x836c03 = [], _0x4422b6 = 0x0, _0x1887f0 = _0x5e29f0['getElementsByTagName'](_0x1ad0d8);
            if ('*' === _0x1ad0d8) {
                for (; _0x2f3f18 = _0x1887f0[_0x4422b6++]; )
                    0x1 === _0x2f3f18['nodeType'] && _0x836c03['push'](_0x2f3f18);
                return _0x836c03;
            }
            return _0x1887f0;
        }
        ,
        _0xa72516['find']['CLASS'] = _0x4b237a['getElementsByClassName'] && function(_0x5d47ae, _0x198656) {
            if ('undefined' != typeof _0x198656['getElementsByClassName'] && _0x4162dc)
                return _0x198656['getElementsByClassName'](_0x5d47ae);
        }
        ,
        _0x395905 = [],
        _0x27957f = [],
        (_0x4b237a['qsa'] = _0x64939f['test'](_0x159f70['querySelectorAll'])) && (_0x45627d(function(_0x161666) {
            _0x336c65['appendChild'](_0x161666)['innerHTML'] = '<a\x20id=\x27' + _0x3d485b + '\x27></a><select\x20id=\x27' + _0x3d485b + '-\x0d\x5c\x27\x20msallowcapture=\x27\x27><option\x20selected=\x27\x27></option></select>',
            _0x161666['querySelectorAll']('[msallowcapture^=\x27\x27]')['length'] && _0x27957f['push']('[*^$]=[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27\x27|\x22\x22)'),
            _0x161666['querySelectorAll']('[selected]')['length'] || _0x27957f['push']('\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)'),
            _0x161666['querySelectorAll']('[id~=' + _0x3d485b + '-]')['length'] || _0x27957f['push']('~='),
            _0x161666['querySelectorAll'](':checked')['length'] || _0x27957f['push'](':checked'),
            _0x161666['querySelectorAll']('a#' + _0x3d485b + '+*')['length'] || _0x27957f['push']('.#.+[+~]');
        }),
        _0x45627d(function(_0x4fc3d7) {
            _0x4fc3d7['innerHTML'] = '<a\x20href=\x27\x27\x20disabled=\x27disabled\x27></a><select\x20disabled=\x27disabled\x27><option/></select>';
            var _0x713b3b = _0x159f70['createElement']('input');
            _0x713b3b['setAttribute']('type', 'hidden'),
            _0x4fc3d7['appendChild'](_0x713b3b)['setAttribute']('name', 'D'),
            _0x4fc3d7['querySelectorAll']('[name=d]')['length'] && _0x27957f['push']('name[\x5cx20\x5ct\x5cr\x5cn\x5cf]*[*^$|!~]?='),
            0x2 !== _0x4fc3d7['querySelectorAll'](':enabled')['length'] && _0x27957f['push'](':enabled', ':disabled'),
            _0x336c65['appendChild'](_0x4fc3d7)['disabled'] = !0x0,
            0x2 !== _0x4fc3d7['querySelectorAll'](':disabled')['length'] && _0x27957f['push'](':enabled', ':disabled'),
            _0x4fc3d7['querySelectorAll']('*,:x'),
            _0x27957f['push'](',.*:');
        })),
        (_0x4b237a['matchesSelector'] = _0x64939f['test'](_0x14579b = _0x336c65['matches'] || _0x336c65['webkitMatchesSelector'] || _0x336c65['mozMatchesSelector'] || _0x336c65['oMatchesSelector'] || _0x336c65['msMatchesSelector'])) && _0x45627d(function(_0x10297a) {
            _0x4b237a['disconnectedMatch'] = _0x14579b['call'](_0x10297a, '*'),
            _0x14579b['call'](_0x10297a, '[s!=\x27\x27]:x'),
            _0x395905['push']('!=', ':((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+)(?:\x5c(((\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22)|((?:\x5c\x5c.|[^\x5c\x5c()[\x5c]]|\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c])*)|.*)\x5c)|)');
        }),
        _0x27957f = _0x27957f['length'] && RegExp(_0x27957f['join']('|')),
        _0x395905 = _0x395905['length'] && RegExp(_0x395905['join']('|')),
        _0x51df2a = _0x64939f['test'](_0x336c65['compareDocumentPosition']),
        _0x146455 = _0x51df2a || _0x64939f['test'](_0x336c65['contains']) ? function(_0x59bbad, _0x423db8) {
            var _0x3c9f15 = 0x9 === _0x59bbad['nodeType'] ? _0x59bbad['documentElement'] : _0x59bbad
              , _0x583d1c = _0x423db8 && _0x423db8['parentNode'];
            return _0x59bbad === _0x583d1c || !(!_0x583d1c || 0x1 !== _0x583d1c['nodeType'] || !(_0x3c9f15['contains'] ? _0x3c9f15['contains'](_0x583d1c) : _0x59bbad['compareDocumentPosition'] && 0x10 & _0x59bbad['compareDocumentPosition'](_0x583d1c)));
        }
        : function(_0x5ceaaa, _0x5664df) {
            if (_0x5664df)
                for (; _0x5664df = _0x5664df['parentNode']; )
                    if (_0x5664df === _0x5ceaaa)
                        return !0x0;
            return !0x1;
        }
        ,
        _0x24c177 = _0x51df2a ? function(_0xe7055f, _0x3b7f35) {
            if (_0xe7055f === _0x3b7f35)
                return _0x1645a9 = !0x0,
                0x0;
            var _0x21f9c0 = !_0xe7055f['compareDocumentPosition'] - !_0x3b7f35['compareDocumentPosition'];
            return _0x21f9c0 ? _0x21f9c0 : (_0x21f9c0 = (_0xe7055f['ownerDocument'] || _0xe7055f) === (_0x3b7f35['ownerDocument'] || _0x3b7f35) ? _0xe7055f['compareDocumentPosition'](_0x3b7f35) : 0x1,
            0x1 & _0x21f9c0 || !_0x4b237a['sortDetached'] && _0x3b7f35['compareDocumentPosition'](_0xe7055f) === _0x21f9c0 ? _0xe7055f === _0x159f70 || _0xe7055f['ownerDocument'] === _0xd6cd9b && _0x146455(_0xd6cd9b, _0xe7055f) ? -0x1 : _0x3b7f35 === _0x159f70 || _0x3b7f35['ownerDocument'] === _0xd6cd9b && _0x146455(_0xd6cd9b, _0x3b7f35) ? 0x1 : _0x36e429 ? _0xbc31c7(_0x36e429, _0xe7055f) - _0xbc31c7(_0x36e429, _0x3b7f35) : 0x0 : 0x4 & _0x21f9c0 ? -0x1 : 0x1);
        }
        : function(_0x5b371d, _0x7cd233) {
            if (_0x5b371d === _0x7cd233)
                return _0x1645a9 = !0x0,
                0x0;
            var _0x1f165b, _0x5a1de3 = 0x0;
            _0x1f165b = _0x5b371d['parentNode'];
            var _0x3acca3 = _0x7cd233['parentNode']
              , _0x28f99e = [_0x5b371d]
              , _0x178878 = [_0x7cd233];
            if (!_0x1f165b || !_0x3acca3)
                return _0x5b371d === _0x159f70 ? -0x1 : _0x7cd233 === _0x159f70 ? 0x1 : _0x1f165b ? -0x1 : _0x3acca3 ? 0x1 : _0x36e429 ? _0xbc31c7(_0x36e429, _0x5b371d) - _0xbc31c7(_0x36e429, _0x7cd233) : 0x0;
            if (_0x1f165b === _0x3acca3)
                return _0x2db253(_0x5b371d, _0x7cd233);
            for (_0x1f165b = _0x5b371d; _0x1f165b = _0x1f165b['parentNode']; )
                _0x28f99e['unshift'](_0x1f165b);
            for (_0x1f165b = _0x7cd233; _0x1f165b = _0x1f165b['parentNode']; )
                _0x178878['unshift'](_0x1f165b);
            for (; _0x28f99e[_0x5a1de3] === _0x178878[_0x5a1de3]; )
                _0x5a1de3++;
            return _0x5a1de3 ? _0x2db253(_0x28f99e[_0x5a1de3], _0x178878[_0x5a1de3]) : _0x28f99e[_0x5a1de3] === _0xd6cd9b ? -0x1 : _0x178878[_0x5a1de3] === _0xd6cd9b ? 0x1 : 0x0;
        }
        ,
        _0x159f70) : _0x159f70;
    }
    ,
    _0x262490['matches'] = function(_0x4360fd, _0x440d6b) {
        return _0x262490(_0x4360fd, null, null, _0x440d6b);
    }
    ,
    _0x262490['matchesSelector'] = function(_0x3d1934, _0x5d8eb7) {
        if ((_0x3d1934['ownerDocument'] || _0x3d1934) !== _0x159f70 && _0x42f45f(_0x3d1934),
        _0x5d8eb7 = _0x5d8eb7['replace'](_0x1da53a, '=\x27$1\x27]'),
        _0x4b237a['matchesSelector'] && _0x4162dc && !_0x167a55[_0x5d8eb7 + '\x20'] && (!_0x395905 || !_0x395905['test'](_0x5d8eb7)) && (!_0x27957f || !_0x27957f['test'](_0x5d8eb7)))
            try {
                var _0x2d7a78 = _0x14579b['call'](_0x3d1934, _0x5d8eb7);
                if (_0x2d7a78 || _0x4b237a['disconnectedMatch'] || _0x3d1934['document'] && 0xb !== _0x3d1934['document']['nodeType'])
                    return _0x2d7a78;
            } catch (_0x16119d) {}
        return 0x0 < _0x262490(_0x5d8eb7, _0x159f70, null, [_0x3d1934])['length'];
    }
    ,
    _0x262490['contains'] = function(_0x1fda34, _0xbe75f3) {
        return (_0x1fda34['ownerDocument'] || _0x1fda34) !== _0x159f70 && _0x42f45f(_0x1fda34),
        _0x146455(_0x1fda34, _0xbe75f3);
    }
    ,
    _0x262490['attr'] = function(_0x36da92, _0x3a8928) {
        (_0x36da92['ownerDocument'] || _0x36da92) !== _0x159f70 && _0x42f45f(_0x36da92);
        var _0x4740bd = _0xa72516['attrHandle'][_0x3a8928['toLowerCase']()]
          , _0x4740bd = _0x4740bd && _0x1eebb4['call'](_0xa72516['attrHandle'], _0x3a8928['toLowerCase']()) ? _0x4740bd(_0x36da92, _0x3a8928, !_0x4162dc) : void 0x0;
        return void 0x0 !== _0x4740bd ? _0x4740bd : _0x4b237a['attributes'] || !_0x4162dc ? _0x36da92['getAttribute'](_0x3a8928) : (_0x4740bd = _0x36da92['getAttributeNode'](_0x3a8928)) && _0x4740bd['specified'] ? _0x4740bd['value'] : null;
    }
    ,
    _0x262490['escape'] = function(_0x3980ad) {
        return (_0x3980ad + '')['replace'](_0x6c78aa, _0x2832d7);
    }
    ,
    _0x262490['error'] = function(_0xbea71) {
        throw Error('Syntax\x20error,\x20unrecognized\x20expression:\x20' + _0xbea71);
    }
    ,
    _0x262490['uniqueSort'] = function(_0x21a0cb) {
        var _0x202d7f, _0x11bd04 = [], _0x30b9b0 = 0x0, _0x2a50ad = 0x0;
        if (_0x1645a9 = !_0x4b237a['detectDuplicates'],
        _0x36e429 = !_0x4b237a['sortStable'] && _0x21a0cb['slice'](0x0),
        _0x21a0cb['sort'](_0x24c177),
        _0x1645a9) {
            for (; _0x202d7f = _0x21a0cb[_0x2a50ad++]; )
                _0x202d7f === _0x21a0cb[_0x2a50ad] && (_0x30b9b0 = _0x11bd04['push'](_0x2a50ad));
            for (; _0x30b9b0--; )
                _0x21a0cb['splice'](_0x11bd04[_0x30b9b0], 0x1);
        }
        return _0x36e429 = null,
        _0x21a0cb;
    }
    ,
    _0x58b0e2 = _0x262490['getText'] = function(_0x5de9d4) {
        var _0x566ef3, _0xf73f70 = '', _0x21de88 = 0x0;
        if (_0x566ef3 = _0x5de9d4['nodeType']) {
            if (0x1 === _0x566ef3 || 0x9 === _0x566ef3 || 0xb === _0x566ef3) {
                if ('string' == typeof _0x5de9d4['textContent'])
                    return _0x5de9d4['textContent'];
                for (_0x5de9d4 = _0x5de9d4['firstChild']; _0x5de9d4; _0x5de9d4 = _0x5de9d4['nextSibling'])
                    _0xf73f70 += _0x58b0e2(_0x5de9d4);
            } else {
                if (0x3 === _0x566ef3 || 0x4 === _0x566ef3)
                    return _0x5de9d4['nodeValue'];
            }
        } else
            for (; _0x566ef3 = _0x5de9d4[_0x21de88++]; )
                _0xf73f70 += _0x58b0e2(_0x566ef3);
        return _0xf73f70;
    }
    ,
    _0xa72516 = _0x262490['selectors'] = {
        'cacheLength': 0x32,
        'createPseudo': _0x193866,
        'match': _0x1455fa,
        'attrHandle': {},
        'find': {},
        'relative': {
            '>': {
                'dir': 'parentNode',
                'first': !0x0
            },
            '\x20': {
                'dir': 'parentNode'
            },
            '+': {
                'dir': 'previousSibling',
                'first': !0x0
            },
            '~': {
                'dir': 'previousSibling'
            }
        },
        'preFilter': {
            'ATTR': function(_0x333561) {
                return _0x333561[0x1] = _0x333561[0x1]['replace'](_0x407fc4, _0x22af57),
                _0x333561[0x3] = (_0x333561[0x3] || _0x333561[0x4] || _0x333561[0x5] || '')['replace'](_0x407fc4, _0x22af57),
                '~=' === _0x333561[0x2] && (_0x333561[0x3] = '\x20' + _0x333561[0x3] + '\x20'),
                _0x333561['slice'](0x0, 0x4);
            },
            'CHILD': function(_0x5bf91c) {
                return _0x5bf91c[0x1] = _0x5bf91c[0x1]['toLowerCase'](),
                'nth' === _0x5bf91c[0x1]['slice'](0x0, 0x3) ? (_0x5bf91c[0x3] || _0x262490['error'](_0x5bf91c[0x0]),
                _0x5bf91c[0x4] = +(_0x5bf91c[0x4] ? _0x5bf91c[0x5] + (_0x5bf91c[0x6] || 0x1) : 0x2 * ('even' === _0x5bf91c[0x3] || 'odd' === _0x5bf91c[0x3])),
                _0x5bf91c[0x5] = +(_0x5bf91c[0x7] + _0x5bf91c[0x8] || 'odd' === _0x5bf91c[0x3])) : _0x5bf91c[0x3] && _0x262490['error'](_0x5bf91c[0x0]),
                _0x5bf91c;
            },
            'PSEUDO': function(_0x55f3da) {
                var _0x289b01, _0x1b95ce = !_0x55f3da[0x6] && _0x55f3da[0x2];
                return _0x1455fa['CHILD']['test'](_0x55f3da[0x0]) ? null : (_0x55f3da[0x3] ? _0x55f3da[0x2] = _0x55f3da[0x4] || _0x55f3da[0x5] || '' : _0x1b95ce && _0x40bac2['test'](_0x1b95ce) && (_0x289b01 = _0x15ea03(_0x1b95ce, !0x0)) && (_0x289b01 = _0x1b95ce['indexOf'](')', _0x1b95ce['length'] - _0x289b01) - _0x1b95ce['length']) && (_0x55f3da[0x0] = _0x55f3da[0x0]['slice'](0x0, _0x289b01),
                _0x55f3da[0x2] = _0x1b95ce['slice'](0x0, _0x289b01)),
                _0x55f3da['slice'](0x0, 0x3));
            }
        },
        'filter': {
            'TAG': function(_0x219454) {
                var _0x50ab41 = _0x219454['replace'](_0x407fc4, _0x22af57)['toLowerCase']();
                return '*' === _0x219454 ? function() {
                    return !0x0;
                }
                : function(_0x4e3adc) {
                    return _0x4e3adc['nodeName'] && _0x4e3adc['nodeName']['toLowerCase']() === _0x50ab41;
                }
                ;
            },
            'CLASS': function(_0x80a917) {
                var _0xf42df0 = _0x3a6448[_0x80a917 + '\x20'];
                return _0xf42df0 || (_0xf42df0 = RegExp('(^|[\x5cx20\x5ct\x5cr\x5cn\x5cf])' + _0x80a917 + '([\x5cx20\x5ct\x5cr\x5cn\x5cf]|$)')) && _0x3a6448(_0x80a917, function(_0x493504) {
                    return _0xf42df0['test']('string' == typeof _0x493504['className'] && _0x493504['className'] || 'undefined' != typeof _0x493504['getAttribute'] && _0x493504['getAttribute']('class') || '');
                });
            },
            'ATTR': function(_0x5afa99, _0x39dd62, _0xcc62f3) {
                return function(_0x4dbbbb) {
                    return _0x4dbbbb = _0x262490['attr'](_0x4dbbbb, _0x5afa99),
                    null == _0x4dbbbb ? '!=' === _0x39dd62 : !_0x39dd62 || (_0x4dbbbb += '',
                    '=' === _0x39dd62 ? _0x4dbbbb === _0xcc62f3 : '!=' === _0x39dd62 ? _0x4dbbbb !== _0xcc62f3 : '^=' === _0x39dd62 ? _0xcc62f3 && 0x0 === _0x4dbbbb['indexOf'](_0xcc62f3) : '*=' === _0x39dd62 ? _0xcc62f3 && -0x1 < _0x4dbbbb['indexOf'](_0xcc62f3) : '$=' === _0x39dd62 ? _0xcc62f3 && _0x4dbbbb['slice'](-_0xcc62f3['length']) === _0xcc62f3 : '~=' === _0x39dd62 ? -0x1 < ('\x20' + _0x4dbbbb['replace'](_0x5d28d5, '\x20') + '\x20')['indexOf'](_0xcc62f3) : '|=' === _0x39dd62 && (_0x4dbbbb === _0xcc62f3 || _0x4dbbbb['slice'](0x0, _0xcc62f3['length'] + 0x1) === _0xcc62f3 + '-'));
                }
                ;
            },
            'CHILD': function(_0x12978a, _0x2e11ab, _0x5bebb4, _0x510262, _0x410bfe) {
                var _0x395c8e = 'nth' !== _0x12978a['slice'](0x0, 0x3)
                  , _0x145a29 = 'last' !== _0x12978a['slice'](-0x4)
                  , _0x24d3be = 'of-type' === _0x2e11ab;
                return 0x1 === _0x510262 && 0x0 === _0x410bfe ? function(_0x255de1) {
                    return !!_0x255de1['parentNode'];
                }
                : function(_0x462888, _0x36f8b0, _0x1b5343) {
                    var _0x5822bf, _0x322a8e, _0xd473a6, _0x164de7, _0x30bb22, _0x24e709;
                    _0x36f8b0 = _0x395c8e !== _0x145a29 ? 'nextSibling' : 'previousSibling';
                    var _0x270ad7 = _0x462888['parentNode']
                      , _0x214b45 = _0x24d3be && _0x462888['nodeName']['toLowerCase']();
                    _0x1b5343 = !_0x1b5343 && !_0x24d3be;
                    var _0x6f9ff4 = !0x1;
                    if (_0x270ad7) {
                        if (_0x395c8e) {
                            for (; _0x36f8b0; ) {
                                for (_0x164de7 = _0x462888; _0x164de7 = _0x164de7[_0x36f8b0]; )
                                    if (_0x24d3be ? _0x164de7['nodeName']['toLowerCase']() === _0x214b45 : 0x1 === _0x164de7['nodeType'])
                                        return !0x1;
                                _0x24e709 = _0x36f8b0 = 'only' === _0x12978a && !_0x24e709 && 'nextSibling';
                            }
                            return !0x0;
                        }
                        if (_0x24e709 = [_0x145a29 ? _0x270ad7['firstChild'] : _0x270ad7['lastChild']],
                        _0x145a29 && _0x1b5343) {
                            _0x164de7 = _0x270ad7,
                            _0xd473a6 = _0x164de7[_0x3d485b] || (_0x164de7[_0x3d485b] = {}),
                            _0x322a8e = _0xd473a6[_0x164de7['uniqueID']] || (_0xd473a6[_0x164de7['uniqueID']] = {}),
                            _0x5822bf = _0x322a8e[_0x12978a] || [],
                            _0x6f9ff4 = (_0x30bb22 = _0x5822bf[0x0] === _0x1a1a94 && _0x5822bf[0x1]) && _0x5822bf[0x2];
                            for (_0x164de7 = _0x30bb22 && _0x270ad7['childNodes'][_0x30bb22]; _0x164de7 = ++_0x30bb22 && _0x164de7 && _0x164de7[_0x36f8b0] || (_0x6f9ff4 = _0x30bb22 = 0x0) || _0x24e709['pop'](); )
                                if (0x1 === _0x164de7['nodeType'] && ++_0x6f9ff4 && _0x164de7 === _0x462888) {
                                    _0x322a8e[_0x12978a] = [_0x1a1a94, _0x30bb22, _0x6f9ff4];
                                    break;
                                }
                        } else {
                            if (_0x1b5343 && (_0x164de7 = _0x462888,
                            _0xd473a6 = _0x164de7[_0x3d485b] || (_0x164de7[_0x3d485b] = {}),
                            _0x322a8e = _0xd473a6[_0x164de7['uniqueID']] || (_0xd473a6[_0x164de7['uniqueID']] = {}),
                            _0x5822bf = _0x322a8e[_0x12978a] || [],
                            _0x30bb22 = _0x5822bf[0x0] === _0x1a1a94 && _0x5822bf[0x1],
                            _0x6f9ff4 = _0x30bb22),
                            !0x1 === _0x6f9ff4)
                                for (; (_0x164de7 = ++_0x30bb22 && _0x164de7 && _0x164de7[_0x36f8b0] || (_0x6f9ff4 = _0x30bb22 = 0x0) || _0x24e709['pop']()) && (!(_0x24d3be ? _0x164de7['nodeName']['toLowerCase']() === _0x214b45 : 0x1 === _0x164de7['nodeType']) || !++_0x6f9ff4 || !(_0x1b5343 && (_0xd473a6 = _0x164de7[_0x3d485b] || (_0x164de7[_0x3d485b] = {}),
                                _0x322a8e = _0xd473a6[_0x164de7['uniqueID']] || (_0xd473a6[_0x164de7['uniqueID']] = {}),
                                _0x322a8e[_0x12978a] = [_0x1a1a94, _0x6f9ff4]),
                                _0x164de7 === _0x462888)); )
                                    ;
                        }
                        return _0x6f9ff4 -= _0x410bfe,
                        _0x6f9ff4 === _0x510262 || 0x0 === _0x6f9ff4 % _0x510262 && 0x0 <= _0x6f9ff4 / _0x510262;
                    }
                }
                ;
            },
            'PSEUDO': function(_0x25a5ba, _0x442824) {
                var _0x5df4d8, _0x5731b6 = _0xa72516['pseudos'][_0x25a5ba] || _0xa72516['setFilters'][_0x25a5ba['toLowerCase']()] || _0x262490['error']('unsupported\x20pseudo:\x20' + _0x25a5ba);
                return _0x5731b6[_0x3d485b] ? _0x5731b6(_0x442824) : 0x1 < _0x5731b6['length'] ? (_0x5df4d8 = [_0x25a5ba, _0x25a5ba, '', _0x442824],
                _0xa72516['setFilters']['hasOwnProperty'](_0x25a5ba['toLowerCase']()) ? _0x193866(function(_0x5b3502, _0x5d7b64) {
                    for (var _0x368514, _0x32e521 = _0x5731b6(_0x5b3502, _0x442824), _0x1c9705 = _0x32e521['length']; _0x1c9705--; )
                        _0x368514 = _0xbc31c7(_0x5b3502, _0x32e521[_0x1c9705]),
                        _0x5b3502[_0x368514] = !(_0x5d7b64[_0x368514] = _0x32e521[_0x1c9705]);
                }) : function(_0x523dca) {
                    return _0x5731b6(_0x523dca, 0x0, _0x5df4d8);
                }
                ) : _0x5731b6;
            }
        },
        'pseudos': {
            'not': _0x193866(function(_0x451b65) {
                var _0x26565d = []
                  , _0x3bd0d0 = []
                  , _0x1896e9 = _0x4a47cf(_0x451b65['replace'](_0x39f795, '$1'));
                return _0x1896e9[_0x3d485b] ? _0x193866(function(_0x2f432c, _0x4a93b8, _0x1d7ff0, _0x1a5a8c) {
                    var _0xc87e68;
                    _0x1d7ff0 = _0x1896e9(_0x2f432c, null, _0x1a5a8c, []);
                    for (_0x1a5a8c = _0x2f432c['length']; _0x1a5a8c--; )
                        (_0xc87e68 = _0x1d7ff0[_0x1a5a8c]) && (_0x2f432c[_0x1a5a8c] = !(_0x4a93b8[_0x1a5a8c] = _0xc87e68));
                }) : function(_0x482a2b, _0x55215b, _0x3a6c73) {
                    return _0x26565d[0x0] = _0x482a2b,
                    _0x1896e9(_0x26565d, null, _0x3a6c73, _0x3bd0d0),
                    _0x26565d[0x0] = null,
                    !_0x3bd0d0['pop']();
                }
                ;
            }),
            'has': _0x193866(function(_0x50db58) {
                return function(_0x35ab5a) {
                    return 0x0 < _0x262490(_0x50db58, _0x35ab5a)['length'];
                }
                ;
            }),
            'contains': _0x193866(function(_0x57b00f) {
                return _0x57b00f = _0x57b00f['replace'](_0x407fc4, _0x22af57),
                function(_0x3630d7) {
                    return -0x1 < (_0x3630d7['textContent'] || _0x3630d7['innerText'] || _0x58b0e2(_0x3630d7))['indexOf'](_0x57b00f);
                }
                ;
            }),
            'lang': _0x193866(function(_0x36d182) {
                return _0xbbc0b7['test'](_0x36d182 || '') || _0x262490['error']('unsupported\x20lang:\x20' + _0x36d182),
                _0x36d182 = _0x36d182['replace'](_0x407fc4, _0x22af57)['toLowerCase'](),
                function(_0x3c66a4) {
                    var _0x2aaa4;
                    do
                        if (_0x2aaa4 = _0x4162dc ? _0x3c66a4['lang'] : _0x3c66a4['getAttribute']('xml:lang') || _0x3c66a4['getAttribute']('lang'))
                            return _0x2aaa4 = _0x2aaa4['toLowerCase'](),
                            _0x2aaa4 === _0x36d182 || 0x0 === _0x2aaa4['indexOf'](_0x36d182 + '-');
                    while ((_0x3c66a4 = _0x3c66a4['parentNode']) && 0x1 === _0x3c66a4['nodeType']);
                    return !0x1;
                }
                ;
            }),
            'target': function(_0x5e7e97) {
                var _0x57d230 = _0x24b423['location'] && _0x24b423['location']['hash'];
                return _0x57d230 && _0x57d230['slice'](0x1) === _0x5e7e97['id'];
            },
            'root': function(_0x4d017d) {
                return _0x4d017d === _0x336c65;
            },
            'focus': function(_0x5c920a) {
                return _0x5c920a === _0x159f70['activeElement'] && (!_0x159f70['hasFocus'] || _0x159f70['hasFocus']()) && !(!_0x5c920a['type'] && !_0x5c920a['href'] && !~_0x5c920a['tabIndex']);
            },
            'enabled': _0x27fa0f(!0x1),
            'disabled': _0x27fa0f(!0x0),
            'checked': function(_0x52086f) {
                var _0x522ba3 = _0x52086f['nodeName']['toLowerCase']();
                return 'input' === _0x522ba3 && !!_0x52086f['checked'] || 'option' === _0x522ba3 && !!_0x52086f['selected'];
            },
            'selected': function(_0x448710) {
                return _0x448710['parentNode'] && _0x448710['parentNode']['selectedIndex'],
                !0x0 === _0x448710['selected'];
            },
            'empty': function(_0x15c6ad) {
                for (_0x15c6ad = _0x15c6ad['firstChild']; _0x15c6ad; _0x15c6ad = _0x15c6ad['nextSibling'])
                    if (0x6 > _0x15c6ad['nodeType'])
                        return !0x1;
                return !0x0;
            },
            'parent': function(_0xeca57) {
                return !_0xa72516['pseudos']['empty'](_0xeca57);
            },
            'header': function(_0x17702a) {
                return _0x525ae6['test'](_0x17702a['nodeName']);
            },
            'input': function(_0x274ee6) {
                return _0x5a15d5['test'](_0x274ee6['nodeName']);
            },
            'button': function(_0x7506ee) {
                var _0x3d67aa = _0x7506ee['nodeName']['toLowerCase']();
                return 'input' === _0x3d67aa && 'button' === _0x7506ee['type'] || 'button' === _0x3d67aa;
            },
            'text': function(_0x505686) {
                var _0x438e7b;
                return 'input' === _0x505686['nodeName']['toLowerCase']() && 'text' === _0x505686['type'] && (null == (_0x438e7b = _0x505686['getAttribute']('type')) || 'text' === _0x438e7b['toLowerCase']());
            },
            'first': _0x121626(function() {
                return [0x0];
            }),
            'last': _0x121626(function(_0x1da637, _0x1376e6) {
                return [_0x1376e6 - 0x1];
            }),
            'eq': _0x121626(function(_0x17b23, _0x54b191, _0x537d93) {
                return [0x0 > _0x537d93 ? _0x537d93 + _0x54b191 : _0x537d93];
            }),
            'even': _0x121626(function(_0x2d18fa, _0x5ee32a) {
                for (var _0x469dde = 0x0; _0x469dde < _0x5ee32a; _0x469dde += 0x2)
                    _0x2d18fa['push'](_0x469dde);
                return _0x2d18fa;
            }),
            'odd': _0x121626(function(_0x3c90e0, _0x2f1870) {
                for (var _0x53c710 = 0x1; _0x53c710 < _0x2f1870; _0x53c710 += 0x2)
                    _0x3c90e0['push'](_0x53c710);
                return _0x3c90e0;
            }),
            'lt': _0x121626(function(_0x5e2e19, _0x4671c9, _0x4ac0bf) {
                for (_0x4671c9 = 0x0 > _0x4ac0bf ? _0x4ac0bf + _0x4671c9 : _0x4ac0bf; 0x0 <= --_0x4671c9; )
                    _0x5e2e19['push'](_0x4671c9);
                return _0x5e2e19;
            }),
            'gt': _0x121626(function(_0x4d2506, _0x348c6b, _0xfb1e69) {
                for (_0xfb1e69 = 0x0 > _0xfb1e69 ? _0xfb1e69 + _0x348c6b : _0xfb1e69; ++_0xfb1e69 < _0x348c6b; )
                    _0x4d2506['push'](_0xfb1e69);
                return _0x4d2506;
            })
        }
    },
    _0xa72516['pseudos']['nth'] = _0xa72516['pseudos']['eq'];
    for (_0x5191f2 in {
        'radio': !0x0,
        'checkbox': !0x0,
        'file': !0x0,
        'password': !0x0,
        'image': !0x0
    })
        _0xa72516['pseudos'][_0x5191f2] = _0x23fedd(_0x5191f2);
    for (_0x5191f2 in {
        'submit': !0x0,
        'reset': !0x0
    })
        _0xa72516['pseudos'][_0x5191f2] = _0x22f1bc(_0x5191f2);
    _0x427c7d['prototype'] = _0xa72516['filters'] = _0xa72516['pseudos'],
    _0xa72516['setFilters'] = new _0x427c7d(),
    _0x15ea03 = _0x262490['tokenize'] = function(_0x369084, _0x4a7fbf) {
        var _0x4894a6, _0x5285be, _0xb9da8f, _0x119ea3, _0x33ebbb, _0x56e964, _0x2e839f;
        if (_0x33ebbb = _0x3b952a[_0x369084 + '\x20'])
            return _0x4a7fbf ? 0x0 : _0x33ebbb['slice'](0x0);
        _0x33ebbb = _0x369084,
        _0x56e964 = [];
        for (_0x2e839f = _0xa72516['preFilter']; _0x33ebbb; ) {
            _0x4894a6 && !(_0x5285be = _0x3bb7b5['exec'](_0x33ebbb)) || (_0x5285be && (_0x33ebbb = _0x33ebbb['slice'](_0x5285be[0x0]['length']) || _0x33ebbb),
            _0x56e964['push'](_0xb9da8f = [])),
            _0x4894a6 = !0x1,
            (_0x5285be = _0x518073['exec'](_0x33ebbb)) && (_0x4894a6 = _0x5285be['shift'](),
            _0xb9da8f['push']({
                'value': _0x4894a6,
                'type': _0x5285be[0x0]['replace'](_0x39f795, '\x20')
            }),
            _0x33ebbb = _0x33ebbb['slice'](_0x4894a6['length']));
            for (_0x119ea3 in _0xa72516['filter'])
                !(_0x5285be = _0x1455fa[_0x119ea3]['exec'](_0x33ebbb)) || _0x2e839f[_0x119ea3] && !(_0x5285be = _0x2e839f[_0x119ea3](_0x5285be)) || (_0x4894a6 = _0x5285be['shift'](),
                _0xb9da8f['push']({
                    'value': _0x4894a6,
                    'type': _0x119ea3,
                    'matches': _0x5285be
                }),
                _0x33ebbb = _0x33ebbb['slice'](_0x4894a6['length']));
            if (!_0x4894a6)
                break;
        }
        return _0x4a7fbf ? _0x33ebbb['length'] : _0x33ebbb ? _0x262490['error'](_0x369084) : _0x3b952a(_0x369084, _0x56e964)['slice'](0x0);
    }
    ,
    _0xffc0d9 = (_0x4a47cf = _0x262490['compile'] = function(_0x10eafc, _0x8c411c) {
        var _0x222da4, _0x5dc85a = [], _0x3c5eec = [], _0x4fe08c = _0x167a55[_0x10eafc + '\x20'];
        if (!_0x4fe08c) {
            _0x8c411c || (_0x8c411c = _0x15ea03(_0x10eafc));
            for (_0x222da4 = _0x8c411c['length']; _0x222da4--; )
                _0x4fe08c = _0xa2e7aa(_0x8c411c[_0x222da4]),
                _0x4fe08c[_0x3d485b] ? _0x5dc85a['push'](_0x4fe08c) : _0x3c5eec['push'](_0x4fe08c);
            _0x222da4 = _0x167a55;
            var _0x4f6121 = 0x0 < _0x5dc85a['length']
              , _0x29c423 = 0x0 < _0x3c5eec['length']
              , _0x4fe08c = function(_0x4465a3, _0x40dd9e, _0x52c6e4, _0x1f7c52, _0x49a9b3) {
                var _0x5d1fe2, _0x563f51, _0x159a51, _0x242392 = 0x0, _0x572826 = '0', _0x2a811c = _0x4465a3 && [], _0x142c85 = [], _0xdc4ebb = _0x547c80, _0x2230a9 = _0x4465a3 || _0x29c423 && _0xa72516['find']['TAG']('*', _0x49a9b3), _0x58ff3e = _0x1a1a94 += null == _0xdc4ebb ? 0x1 : Math['random']() || 0.1, _0x4a9ee6 = _0x2230a9['length'];
                for (_0x49a9b3 && (_0x547c80 = _0x40dd9e === _0x159f70 || _0x40dd9e || _0x49a9b3); _0x572826 !== _0x4a9ee6 && null != (_0x5d1fe2 = _0x2230a9[_0x572826]); _0x572826++) {
                    if (_0x29c423 && _0x5d1fe2) {
                        _0x563f51 = 0x0;
                        for (_0x40dd9e || _0x5d1fe2['ownerDocument'] === _0x159f70 || (_0x42f45f(_0x5d1fe2),
                        _0x52c6e4 = !_0x4162dc); _0x159a51 = _0x3c5eec[_0x563f51++]; )
                            if (_0x159a51(_0x5d1fe2, _0x40dd9e || _0x159f70, _0x52c6e4)) {
                                _0x1f7c52['push'](_0x5d1fe2);
                                break;
                            }
                        _0x49a9b3 && (_0x1a1a94 = _0x58ff3e);
                    }
                    _0x4f6121 && ((_0x5d1fe2 = !_0x159a51 && _0x5d1fe2) && _0x242392--,
                    _0x4465a3 && _0x2a811c['push'](_0x5d1fe2));
                }
                if (_0x242392 += _0x572826,
                _0x4f6121 && _0x572826 !== _0x242392) {
                    for (_0x563f51 = 0x0; _0x159a51 = _0x5dc85a[_0x563f51++]; )
                        _0x159a51(_0x2a811c, _0x142c85, _0x40dd9e, _0x52c6e4);
                    if (_0x4465a3) {
                        if (0x0 < _0x242392)
                            for (; _0x572826--; )
                                _0x2a811c[_0x572826] || _0x142c85[_0x572826] || (_0x142c85[_0x572826] = _0x507582['call'](_0x1f7c52));
                        _0x142c85 = _0x1e5f08(_0x142c85);
                    }
                    _0xf50024['apply'](_0x1f7c52, _0x142c85),
                    _0x49a9b3 && !_0x4465a3 && 0x0 < _0x142c85['length'] && 0x1 < _0x242392 + _0x5dc85a['length'] && _0x262490['uniqueSort'](_0x1f7c52);
                }
                return _0x49a9b3 && (_0x1a1a94 = _0x58ff3e,
                _0x547c80 = _0xdc4ebb),
                _0x2a811c;
            }
              , _0x4fe08c = _0x4f6121 ? _0x193866(_0x4fe08c) : _0x4fe08c
              , _0x4fe08c = _0x222da4(_0x10eafc, _0x4fe08c);
            _0x4fe08c['selector'] = _0x10eafc;
        }
        return _0x4fe08c;
    }
    ,
    _0x285f60 = _0x262490['select'] = function(_0x47cfad, _0x4871da, _0x521212, _0x5911b5) {
        var _0x5f3c76, _0x26733a, _0x1204ac, _0x1925c8, _0x2d41f8, _0xcb84d0 = 'function' == typeof _0x47cfad && _0x47cfad, _0x1b43da = !_0x5911b5 && _0x15ea03(_0x47cfad = _0xcb84d0['selector'] || _0x47cfad);
        if (_0x521212 = _0x521212 || [],
        0x1 === _0x1b43da['length']) {
            if (_0x26733a = _0x1b43da[0x0] = _0x1b43da[0x0]['slice'](0x0),
            0x2 < _0x26733a['length'] && 'ID' === (_0x1204ac = _0x26733a[0x0])['type'] && 0x9 === _0x4871da['nodeType'] && _0x4162dc && _0xa72516['relative'][_0x26733a[0x1]['type']]) {
                if (_0x4871da = (_0xa72516['find']['ID'](_0x1204ac['matches'][0x0]['replace'](_0x407fc4, _0x22af57), _0x4871da) || [])[0x0],
                !_0x4871da)
                    return _0x521212;
                _0xcb84d0 && (_0x4871da = _0x4871da['parentNode']),
                _0x47cfad = _0x47cfad['slice'](_0x26733a['shift']()['value']['length']);
            }
            for (_0x5f3c76 = _0x1455fa['needsContext']['test'](_0x47cfad) ? 0x0 : _0x26733a['length']; _0x5f3c76-- && !(_0x1204ac = _0x26733a[_0x5f3c76],
            _0xa72516['relative'][_0x1925c8 = _0x1204ac['type']]); )
                if ((_0x2d41f8 = _0xa72516['find'][_0x1925c8]) && (_0x5911b5 = _0x2d41f8(_0x1204ac['matches'][0x0]['replace'](_0x407fc4, _0x22af57), _0x881e70['test'](_0x26733a[0x0]['type']) && _0x4b4e05(_0x4871da['parentNode']) || _0x4871da))) {
                    if (_0x26733a['splice'](_0x5f3c76, 0x1),
                    _0x47cfad = _0x5911b5['length'] && _0x3d9776(_0x26733a),
                    !_0x47cfad)
                        return _0xf50024['apply'](_0x521212, _0x5911b5),
                        _0x521212;
                    break;
                }
        }
        return (_0xcb84d0 || _0x4a47cf(_0x47cfad, _0x1b43da))(_0x5911b5, _0x4871da, !_0x4162dc, _0x521212, !_0x4871da || _0x881e70['test'](_0x47cfad) && _0x4b4e05(_0x4871da['parentNode']) || _0x4871da),
        _0x521212;
    }
    ,
    _0x4b237a['sortStable'] = _0x3d485b['split']('')['sort'](_0x24c177)['join']('') === _0x3d485b,
    _0x4b237a['detectDuplicates'] = !!_0x1645a9,
    _0x42f45f(),
    _0x4b237a['sortDetached'] = _0x45627d(function(_0x227fbb) {
        return 0x1 & _0x227fbb['compareDocumentPosition'](_0x159f70['createElement']('fieldset'));
    }),
    _0x45627d(function(_0x21ec9a) {
        return _0x21ec9a['innerHTML'] = '<a\x20href=\x27#\x27></a>',
        '#' === _0x21ec9a['firstChild']['getAttribute']('href');
    }) || _0x517c8b('type|href|height|width', function(_0x22e590, _0x17e855, _0xad3c8f) {
        if (!_0xad3c8f)
            return _0x22e590['getAttribute'](_0x17e855, 'type' === _0x17e855['toLowerCase']() ? 0x1 : 0x2);
    }),
    _0x4b237a['attributes'] && _0x45627d(function(_0x18238a) {
        return _0x18238a['innerHTML'] = '<input/>',
        _0x18238a['firstChild']['setAttribute']('value', ''),
        '' === _0x18238a['firstChild']['getAttribute']('value');
    }) || _0x517c8b('value', function(_0x579ab6, _0x4f04bd, _0x287096) {
        if (!_0x287096 && 'input' === _0x579ab6['nodeName']['toLowerCase']())
            return _0x579ab6['defaultValue'];
    }),
    _0x45627d(function(_0x48f21b) {
        return null == _0x48f21b['getAttribute']('disabled');
    }) || _0x517c8b('checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', function(_0x526d77, _0x195f8e, _0x242974) {
        var _0x281eec;
        if (!_0x242974)
            return !0x0 === _0x526d77[_0x195f8e] ? _0x195f8e['toLowerCase']() : (_0x281eec = _0x526d77['getAttributeNode'](_0x195f8e)) && _0x281eec['specified'] ? _0x281eec['value'] : null;
    }),
    _0x262490),
    _0x5daaf9['find'] = _0xffc0d9,
    _0x5daaf9['expr'] = _0xffc0d9['selectors'],
    _0x5daaf9['expr'][':'] = _0x5daaf9['expr']['pseudos'],
    _0x5daaf9['uniqueSort'] = _0x5daaf9['unique'] = _0xffc0d9['uniqueSort'],
    _0x5daaf9['text'] = _0xffc0d9['getText'],
    _0x5daaf9['isXMLDoc'] = _0xffc0d9['isXML'],
    _0x5daaf9['contains'] = _0xffc0d9['contains'],
    _0x5daaf9['escapeSelector'] = _0xffc0d9['escape'];
    var _0x55e00c = function(_0x492ee8, _0x2bbd0d, _0x376d53) {
        for (var _0x2889bd = [], _0x24ebff = void 0x0 !== _0x376d53; (_0x492ee8 = _0x492ee8[_0x2bbd0d]) && 0x9 !== _0x492ee8['nodeType']; )
            if (0x1 === _0x492ee8['nodeType']) {
                if (_0x24ebff && _0x5daaf9(_0x492ee8)['is'](_0x376d53))
                    break;
                _0x2889bd['push'](_0x492ee8);
            }
        return _0x2889bd;
    }
      , _0xcfe08f = function(_0x988c2b, _0x5e3a6c) {
        for (var _0x5cb299 = []; _0x988c2b; _0x988c2b = _0x988c2b['nextSibling'])
            0x1 === _0x988c2b['nodeType'] && _0x988c2b !== _0x5e3a6c && _0x5cb299['push'](_0x988c2b);
        return _0x5cb299;
    }
      , _0x218c1e = _0x5daaf9['expr']['match']['needsContext']
      , _0x145a9d = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , _0x4c3b9e = /^.[^:#\[\.,]*$/;
    _0x5daaf9['filter'] = function(_0x201fdd, _0x1c4b26, _0x3312b9) {
        var _0x1522bb = _0x1c4b26[0x0];
        return _0x3312b9 && (_0x201fdd = ':not(' + _0x201fdd + ')'),
        0x1 === _0x1c4b26['length'] && 0x1 === _0x1522bb['nodeType'] ? _0x5daaf9['find']['matchesSelector'](_0x1522bb, _0x201fdd) ? [_0x1522bb] : [] : _0x5daaf9['find']['matches'](_0x201fdd, _0x5daaf9['grep'](_0x1c4b26, function(_0x18b738) {
            return 0x1 === _0x18b738['nodeType'];
        }));
    }
    ,
    _0x5daaf9['fn']['extend']({
        'find': function(_0x3313c1) {
            var _0x1f5ef7, _0x5d2be3, _0x2b296c = this['length'], _0xac7911 = this;
            if ('string' != typeof _0x3313c1)
                return this['pushStack'](_0x5daaf9(_0x3313c1)['filter'](function() {
                    for (_0x1f5ef7 = 0x0; _0x1f5ef7 < _0x2b296c; _0x1f5ef7++)
                        if (_0x5daaf9['contains'](_0xac7911[_0x1f5ef7], this))
                            return !0x0;
                }));
            _0x5d2be3 = this['pushStack']([]);
            for (_0x1f5ef7 = 0x0; _0x1f5ef7 < _0x2b296c; _0x1f5ef7++)
                _0x5daaf9['find'](_0x3313c1, _0xac7911[_0x1f5ef7], _0x5d2be3);
            return 0x1 < _0x2b296c ? _0x5daaf9['uniqueSort'](_0x5d2be3) : _0x5d2be3;
        },
        'filter': function(_0x45e989) {
            return this['pushStack'](_0x2b2266(this, _0x45e989 || [], !0x1));
        },
        'not': function(_0x303e73) {
            return this['pushStack'](_0x2b2266(this, _0x303e73 || [], !0x0));
        },
        'is': function(_0x4fcbcf) {
            return !!_0x2b2266(this, 'string' == typeof _0x4fcbcf && _0x218c1e['test'](_0x4fcbcf) ? _0x5daaf9(_0x4fcbcf) : _0x4fcbcf || [], !0x1)['length'];
        }
    });
    var _0x451e88, _0x24348c = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_0x5daaf9['fn']['init'] = function(_0x520c90, _0x443fa4, _0x3090a7) {
        var _0x22c6c7, _0x450a2e;
        if (!_0x520c90)
            return this;
        if (_0x3090a7 = _0x3090a7 || _0x451e88,
        'string' == typeof _0x520c90) {
            if (_0x22c6c7 = '<' === _0x520c90[0x0] && '>' === _0x520c90[_0x520c90['length'] - 0x1] && 0x3 <= _0x520c90['length'] ? [null, _0x520c90, null] : _0x24348c['exec'](_0x520c90),
            !_0x22c6c7 || !_0x22c6c7[0x1] && _0x443fa4)
                return !_0x443fa4 || _0x443fa4['jquery'] ? (_0x443fa4 || _0x3090a7)['find'](_0x520c90) : this['constructor'](_0x443fa4)['find'](_0x520c90);
            if (_0x22c6c7[0x1]) {
                if (_0x443fa4 = _0x443fa4 instanceof _0x5daaf9 ? _0x443fa4[0x0] : _0x443fa4,
                _0x5daaf9['merge'](this, _0x5daaf9['parseHTML'](_0x22c6c7[0x1], _0x443fa4 && _0x443fa4['nodeType'] ? _0x443fa4['ownerDocument'] || _0x443fa4 : _0x22efbf, !0x0)),
                _0x145a9d['test'](_0x22c6c7[0x1]) && _0x5daaf9['isPlainObject'](_0x443fa4))
                    for (_0x22c6c7 in _0x443fa4)
                        _0x5daaf9['isFunction'](this[_0x22c6c7]) ? this[_0x22c6c7](_0x443fa4[_0x22c6c7]) : this['attr'](_0x22c6c7, _0x443fa4[_0x22c6c7]);
                return this;
            }
            return _0x450a2e = _0x22efbf['getElementById'](_0x22c6c7[0x2]),
            _0x450a2e && (this[0x0] = _0x450a2e,
            this['length'] = 0x1),
            this;
        }
        return _0x520c90['nodeType'] ? (this[0x0] = _0x520c90,
        this['length'] = 0x1,
        this) : _0x5daaf9['isFunction'](_0x520c90) ? void 0x0 !== _0x3090a7['ready'] ? _0x3090a7['ready'](_0x520c90) : _0x520c90(_0x5daaf9) : _0x5daaf9['makeArray'](_0x520c90, this);
    }
    )['prototype'] = _0x5daaf9['fn'],
    _0x451e88 = _0x5daaf9(_0x22efbf);
    var _0x4de948 = /^(?:parents|prev(?:Until|All))/
      , _0x515071 = {
        'children': !0x0,
        'contents': !0x0,
        'next': !0x0,
        'prev': !0x0
    };
    _0x5daaf9['fn']['extend']({
        'has': function(_0x4044c4) {
            var _0x3e88c6 = _0x5daaf9(_0x4044c4, this)
              , _0x2e2aa1 = _0x3e88c6['length'];
            return this['filter'](function() {
                for (var _0x29bbed = 0x0; _0x29bbed < _0x2e2aa1; _0x29bbed++)
                    if (_0x5daaf9['contains'](this, _0x3e88c6[_0x29bbed]))
                        return !0x0;
            });
        },
        'closest': function(_0x1f1c25, _0x4a7765) {
            var _0x36c1f6, _0x16c96f = 0x0, _0x586c64 = this['length'], _0x5b8cc5 = [], _0x430d84 = 'string' != typeof _0x1f1c25 && _0x5daaf9(_0x1f1c25);
            if (!_0x218c1e['test'](_0x1f1c25))
                for (; _0x16c96f < _0x586c64; _0x16c96f++)
                    for (_0x36c1f6 = this[_0x16c96f]; _0x36c1f6 && _0x36c1f6 !== _0x4a7765; _0x36c1f6 = _0x36c1f6['parentNode'])
                        if (0xb > _0x36c1f6['nodeType'] && (_0x430d84 ? -0x1 < _0x430d84['index'](_0x36c1f6) : 0x1 === _0x36c1f6['nodeType'] && _0x5daaf9['find']['matchesSelector'](_0x36c1f6, _0x1f1c25))) {
                            _0x5b8cc5['push'](_0x36c1f6);
                            break;
                        }
            return this['pushStack'](0x1 < _0x5b8cc5['length'] ? _0x5daaf9['uniqueSort'](_0x5b8cc5) : _0x5b8cc5);
        },
        'index': function(_0xdce0cc) {
            return _0xdce0cc ? 'string' == typeof _0xdce0cc ? _0x4fdb20['call'](_0x5daaf9(_0xdce0cc), this[0x0]) : _0x4fdb20['call'](this, _0xdce0cc['jquery'] ? _0xdce0cc[0x0] : _0xdce0cc) : this[0x0] && this[0x0]['parentNode'] ? this['first']()['prevAll']()['length'] : -0x1;
        },
        'add': function(_0x441988, _0x5acc46) {
            return this['pushStack'](_0x5daaf9['uniqueSort'](_0x5daaf9['merge'](this['get'](), _0x5daaf9(_0x441988, _0x5acc46))));
        },
        'addBack': function(_0x46bd65) {
            return this['add'](null == _0x46bd65 ? this['prevObject'] : this['prevObject']['filter'](_0x46bd65));
        }
    }),
    _0x5daaf9['each']({
        'parent': function(_0x19b439) {
            return (_0x19b439 = _0x19b439['parentNode']) && 0xb !== _0x19b439['nodeType'] ? _0x19b439 : null;
        },
        'parents': function(_0x23b1e2) {
            return _0x55e00c(_0x23b1e2, 'parentNode');
        },
        'parentsUntil': function(_0x16d5ad, _0x14139f, _0x166965) {
            return _0x55e00c(_0x16d5ad, 'parentNode', _0x166965);
        },
        'next': function(_0x59a02f) {
            return _0x14d28b(_0x59a02f, 'nextSibling');
        },
        'prev': function(_0x58aea3) {
            return _0x14d28b(_0x58aea3, 'previousSibling');
        },
        'nextAll': function(_0x39c2d4) {
            return _0x55e00c(_0x39c2d4, 'nextSibling');
        },
        'prevAll': function(_0x754791) {
            return _0x55e00c(_0x754791, 'previousSibling');
        },
        'nextUntil': function(_0x334452, _0x5c85bd, _0x5c36b8) {
            return _0x55e00c(_0x334452, 'nextSibling', _0x5c36b8);
        },
        'prevUntil': function(_0x1c144a, _0x2b31aa, _0x3a823f) {
            return _0x55e00c(_0x1c144a, 'previousSibling', _0x3a823f);
        },
        'siblings': function(_0x13b445) {
            return _0xcfe08f((_0x13b445['parentNode'] || {})['firstChild'], _0x13b445);
        },
        'children': function(_0x4fc274) {
            return _0xcfe08f(_0x4fc274['firstChild']);
        },
        'contents': function(_0x5b8f2d) {
            return _0x4bed0e(_0x5b8f2d, 'iframe') ? _0x5b8f2d['contentDocument'] : (_0x4bed0e(_0x5b8f2d, 'template') && (_0x5b8f2d = _0x5b8f2d['content'] || _0x5b8f2d),
            _0x5daaf9['merge']([], _0x5b8f2d['childNodes']));
        }
    }, function(_0x2a2fbc, _0x1f0715) {
        _0x5daaf9['fn'][_0x2a2fbc] = function(_0xfafe57, _0x2e38a5) {
            var _0x4d2423 = _0x5daaf9['map'](this, _0x1f0715, _0xfafe57);
            return 'Until' !== _0x2a2fbc['slice'](-0x5) && (_0x2e38a5 = _0xfafe57),
            _0x2e38a5 && 'string' == typeof _0x2e38a5 && (_0x4d2423 = _0x5daaf9['filter'](_0x2e38a5, _0x4d2423)),
            0x1 < this['length'] && (_0x515071[_0x2a2fbc] || _0x5daaf9['uniqueSort'](_0x4d2423),
            _0x4de948['test'](_0x2a2fbc) && _0x4d2423['reverse']()),
            this['pushStack'](_0x4d2423);
        }
        ;
    });
    var _0x182fa8 = /[^\x20\t\r\n\f]+/g;
    _0x5daaf9['Callbacks'] = function(_0x3ade05) {
        var _0x441fd3;
        if ('string' == typeof _0x3ade05) {
            var _0x1b3c85 = {};
            _0x441fd3 = (_0x5daaf9['each'](_0x3ade05['match'](_0x182fa8) || [], function(_0x36285a, _0x3a3fa2) {
                _0x1b3c85[_0x3a3fa2] = !0x0;
            }),
            _0x1b3c85);
        } else
            _0x441fd3 = _0x5daaf9['extend']({}, _0x3ade05);
        _0x3ade05 = _0x441fd3;
        var _0x42dc2c, _0x4edf22, _0x795c52, _0x535b56, _0x5ecdc7 = [], _0x269a3c = [], _0x3036b6 = -0x1, _0x3787a8 = function() {
            _0x535b56 = _0x535b56 || _0x3ade05['once'];
            for (_0x795c52 = _0x42dc2c = !0x0; _0x269a3c['length']; _0x3036b6 = -0x1)
                for (_0x4edf22 = _0x269a3c['shift'](); ++_0x3036b6 < _0x5ecdc7['length']; )
                    !0x1 === _0x5ecdc7[_0x3036b6]['apply'](_0x4edf22[0x0], _0x4edf22[0x1]) && _0x3ade05['stopOnFalse'] && (_0x3036b6 = _0x5ecdc7['length'],
                    _0x4edf22 = !0x1);
            _0x3ade05['memory'] || (_0x4edf22 = !0x1),
            _0x42dc2c = !0x1,
            _0x535b56 && (_0x5ecdc7 = _0x4edf22 ? [] : '');
        }, _0x20a971 = {
            'add': function() {
                return _0x5ecdc7 && (_0x4edf22 && !_0x42dc2c && (_0x3036b6 = _0x5ecdc7['length'] - 0x1,
                _0x269a3c['push'](_0x4edf22)),
                function _0x58e5a8(_0x39e5b1) {
                    _0x5daaf9['each'](_0x39e5b1, function(_0x2a96e6, _0x517a40) {
                        _0x5daaf9['isFunction'](_0x517a40) ? _0x3ade05['unique'] && _0x20a971['has'](_0x517a40) || _0x5ecdc7['push'](_0x517a40) : _0x517a40 && _0x517a40['length'] && 'string' !== _0x5daaf9['type'](_0x517a40) && _0x58e5a8(_0x517a40);
                    });
                }(arguments),
                _0x4edf22 && !_0x42dc2c && _0x3787a8()),
                this;
            },
            'remove': function() {
                return _0x5daaf9['each'](arguments, function(_0x5e97d6, _0x1ec14c) {
                    for (var _0x37a050; -0x1 < (_0x37a050 = _0x5daaf9['inArray'](_0x1ec14c, _0x5ecdc7, _0x37a050)); )
                        _0x5ecdc7['splice'](_0x37a050, 0x1),
                        _0x37a050 <= _0x3036b6 && _0x3036b6--;
                }),
                this;
            },
            'has': function(_0x1575a1) {
                return _0x1575a1 ? -0x1 < _0x5daaf9['inArray'](_0x1575a1, _0x5ecdc7) : 0x0 < _0x5ecdc7['length'];
            },
            'empty': function() {
                return _0x5ecdc7 && (_0x5ecdc7 = []),
                this;
            },
            'disable': function() {
                return _0x535b56 = _0x269a3c = [],
                _0x5ecdc7 = _0x4edf22 = '',
                this;
            },
            'disabled': function() {
                return !_0x5ecdc7;
            },
            'lock': function() {
                return _0x535b56 = _0x269a3c = [],
                _0x4edf22 || _0x42dc2c || (_0x5ecdc7 = _0x4edf22 = ''),
                this;
            },
            'locked': function() {
                return !!_0x535b56;
            },
            'fireWith': function(_0x293123, _0x43dc9a) {
                return _0x535b56 || (_0x43dc9a = _0x43dc9a || [],
                _0x43dc9a = [_0x293123, _0x43dc9a['slice'] ? _0x43dc9a['slice']() : _0x43dc9a],
                _0x269a3c['push'](_0x43dc9a),
                _0x42dc2c || _0x3787a8()),
                this;
            },
            'fire': function() {
                return _0x20a971['fireWith'](this, arguments),
                this;
            },
            'fired': function() {
                return !!_0x795c52;
            }
        };
        return _0x20a971;
    }
    ,
    _0x5daaf9['extend']({
        'Deferred': function(_0x35bde9) {
            var _0x15d5bd = [['notify', 'progress', _0x5daaf9['Callbacks']('memory'), _0x5daaf9['Callbacks']('memory'), 0x2], ['resolve', 'done', _0x5daaf9['Callbacks']('once\x20memory'), _0x5daaf9['Callbacks']('once\x20memory'), 0x0, 'resolved'], ['reject', 'fail', _0x5daaf9['Callbacks']('once\x20memory'), _0x5daaf9['Callbacks']('once\x20memory'), 0x1, 'rejected']]
              , _0x4117f6 = 'pending'
              , _0x386586 = {
                'state': function() {
                    return _0x4117f6;
                },
                'always': function() {
                    return _0x43ebb2['done'](arguments)['fail'](arguments),
                    this;
                },
                'catch': function(_0x338849) {
                    return _0x386586['then'](null, _0x338849);
                },
                'pipe': function() {
                    var _0x437a4d = arguments;
                    return _0x5daaf9['Deferred'](function(_0xb9e464) {
                        _0x5daaf9['each'](_0x15d5bd, function(_0x3ccb42, _0x3c22b4) {
                            var _0x5f46df = _0x5daaf9['isFunction'](_0x437a4d[_0x3c22b4[0x4]]) && _0x437a4d[_0x3c22b4[0x4]];
                            _0x43ebb2[_0x3c22b4[0x1]](function() {
                                var _0x83bbe = _0x5f46df && _0x5f46df['apply'](this, arguments);
                                _0x83bbe && _0x5daaf9['isFunction'](_0x83bbe['promise']) ? _0x83bbe['promise']()['progress'](_0xb9e464['notify'])['done'](_0xb9e464['resolve'])['fail'](_0xb9e464['reject']) : _0xb9e464[_0x3c22b4[0x0] + 'With'](this, _0x5f46df ? [_0x83bbe] : arguments);
                            });
                        }),
                        _0x437a4d = null;
                    })['promise']();
                },
                'then': function(_0x473422, _0x315579, _0x18c58d) {
                    function _0x40a70a(_0x464c5d, _0x3fa4ea, _0x4cbc73, _0x3c2512) {
                        return function() {
                            var _0x4591ec = this
                              , _0x161f85 = arguments
                              , _0x1b647e = function() {
                                var _0x56c1db, _0x3fd6c5;
                                if (!(_0x464c5d < _0x206e11)) {
                                    if (_0x56c1db = _0x4cbc73['apply'](_0x4591ec, _0x161f85),
                                    _0x56c1db === _0x3fa4ea['promise']())
                                        throw new TypeError('Thenable\x20self-resolution');
                                    _0x3fd6c5 = _0x56c1db && ('object' == typeof _0x56c1db || 'function' == typeof _0x56c1db) && _0x56c1db['then'],
                                    _0x5daaf9['isFunction'](_0x3fd6c5) ? _0x3c2512 ? _0x3fd6c5['call'](_0x56c1db, _0x40a70a(_0x206e11, _0x3fa4ea, _0x41dcf3, _0x3c2512), _0x40a70a(_0x206e11, _0x3fa4ea, _0x25bf08, _0x3c2512)) : (_0x206e11++,
                                    _0x3fd6c5['call'](_0x56c1db, _0x40a70a(_0x206e11, _0x3fa4ea, _0x41dcf3, _0x3c2512), _0x40a70a(_0x206e11, _0x3fa4ea, _0x25bf08, _0x3c2512), _0x40a70a(_0x206e11, _0x3fa4ea, _0x41dcf3, _0x3fa4ea['notifyWith']))) : (_0x4cbc73 !== _0x41dcf3 && (_0x4591ec = void 0x0,
                                    _0x161f85 = [_0x56c1db]),
                                    (_0x3c2512 || _0x3fa4ea['resolveWith'])(_0x4591ec, _0x161f85));
                                }
                            }
                              , _0x3bd039 = _0x3c2512 ? _0x1b647e : function() {
                                try {
                                    _0x1b647e();
                                } catch (_0x45b8b9) {
                                    _0x5daaf9['Deferred']['exceptionHook'] && _0x5daaf9['Deferred']['exceptionHook'](_0x45b8b9, _0x3bd039['stackTrace']),
                                    _0x464c5d + 0x1 >= _0x206e11 && (_0x4cbc73 !== _0x25bf08 && (_0x4591ec = void 0x0,
                                    _0x161f85 = [_0x45b8b9]),
                                    _0x3fa4ea['rejectWith'](_0x4591ec, _0x161f85));
                                }
                            }
                            ;
                            _0x464c5d ? _0x3bd039() : (_0x5daaf9['Deferred']['getStackHook'] && (_0x3bd039['stackTrace'] = _0x5daaf9['Deferred']['getStackHook']()),
                            _0x5768c8['setTimeout'](_0x3bd039));
                        }
                        ;
                    }
                    var _0x206e11 = 0x0;
                    return _0x5daaf9['Deferred'](function(_0x469727) {
                        _0x15d5bd[0x0][0x3]['add'](_0x40a70a(0x0, _0x469727, _0x5daaf9['isFunction'](_0x18c58d) ? _0x18c58d : _0x41dcf3, _0x469727['notifyWith'])),
                        _0x15d5bd[0x1][0x3]['add'](_0x40a70a(0x0, _0x469727, _0x5daaf9['isFunction'](_0x473422) ? _0x473422 : _0x41dcf3)),
                        _0x15d5bd[0x2][0x3]['add'](_0x40a70a(0x0, _0x469727, _0x5daaf9['isFunction'](_0x315579) ? _0x315579 : _0x25bf08));
                    })['promise']();
                },
                'promise': function(_0x1c542f) {
                    return null != _0x1c542f ? _0x5daaf9['extend'](_0x1c542f, _0x386586) : _0x386586;
                }
            }
              , _0x43ebb2 = {};
            return _0x5daaf9['each'](_0x15d5bd, function(_0x3b4cb9, _0x2bde26) {
                var _0xb77929 = _0x2bde26[0x2]
                  , _0x5509b7 = _0x2bde26[0x5];
                _0x386586[_0x2bde26[0x1]] = _0xb77929['add'],
                _0x5509b7 && _0xb77929['add'](function() {
                    _0x4117f6 = _0x5509b7;
                }, _0x15d5bd[0x3 - _0x3b4cb9][0x2]['disable'], _0x15d5bd[0x0][0x2]['lock']),
                _0xb77929['add'](_0x2bde26[0x3]['fire']),
                _0x43ebb2[_0x2bde26[0x0]] = function() {
                    return _0x43ebb2[_0x2bde26[0x0] + 'With'](this === _0x43ebb2 ? void 0x0 : this, arguments),
                    this;
                }
                ,
                _0x43ebb2[_0x2bde26[0x0] + 'With'] = _0xb77929['fireWith'];
            }),
            _0x386586['promise'](_0x43ebb2),
            _0x35bde9 && _0x35bde9['call'](_0x43ebb2, _0x43ebb2),
            _0x43ebb2;
        },
        'when': function(_0x510d95) {
            var _0x325b72 = arguments['length']
              , _0x49d0ac = _0x325b72
              , _0x197265 = Array(_0x49d0ac)
              , _0x51b00e = _0xff736b['call'](arguments)
              , _0x49b269 = _0x5daaf9['Deferred']()
              , _0x418080 = function(_0x31e90e) {
                return function(_0x4aa282) {
                    _0x197265[_0x31e90e] = this,
                    _0x51b00e[_0x31e90e] = 0x1 < arguments['length'] ? _0xff736b['call'](arguments) : _0x4aa282,
                    --_0x325b72 || _0x49b269['resolveWith'](_0x197265, _0x51b00e);
                }
                ;
            };
            if (0x1 >= _0x325b72 && (_0x30ee37(_0x510d95, _0x49b269['done'](_0x418080(_0x49d0ac))['resolve'], _0x49b269['reject'], !_0x325b72),
            'pending' === _0x49b269['state']() || _0x5daaf9['isFunction'](_0x51b00e[_0x49d0ac] && _0x51b00e[_0x49d0ac]['then'])))
                return _0x49b269['then']();
            for (; _0x49d0ac--; )
                _0x30ee37(_0x51b00e[_0x49d0ac], _0x418080(_0x49d0ac), _0x49b269['reject']);
            return _0x49b269['promise']();
        }
    });
    var _0x3d7dfd = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _0x5daaf9['Deferred']['exceptionHook'] = function(_0x2500db, _0x4c7c84) {
        _0x5768c8['console'] && _0x5768c8['console']['warn'] && _0x2500db && _0x3d7dfd['test'](_0x2500db['name']) && _0x5768c8['console']['warn']('jQuery.Deferred\x20exception:\x20' + _0x2500db['message'], _0x2500db['stack'], _0x4c7c84);
    }
    ,
    _0x5daaf9['readyException'] = function(_0xc82ae0) {
        _0x5768c8['setTimeout'](function() {
            throw _0xc82ae0;
        });
    }
    ;
    var _0xc474a7 = _0x5daaf9['Deferred']();
    _0x5daaf9['fn']['ready'] = function(_0x191c66) {
        return _0xc474a7['then'](_0x191c66)['catch'](function(_0x1dde54) {
            _0x5daaf9['readyException'](_0x1dde54);
        }),
        this;
    }
    ,
    _0x5daaf9['extend']({
        'isReady': !0x1,
        'readyWait': 0x1,
        'ready': function(_0x266dc0) {
            (!0x0 === _0x266dc0 ? --_0x5daaf9['readyWait'] : _0x5daaf9['isReady']) || (_0x5daaf9['isReady'] = !0x0,
            !0x0 !== _0x266dc0 && 0x0 < --_0x5daaf9['readyWait'] || _0xc474a7['resolveWith'](_0x22efbf, [_0x5daaf9]));
        }
    }),
    _0x5daaf9['ready']['then'] = _0xc474a7['then'],
    'complete' === _0x22efbf['readyState'] || 'loading' !== _0x22efbf['readyState'] && !_0x22efbf['documentElement']['doScroll'] ? _0x5768c8['setTimeout'](_0x5daaf9['ready']) : (_0x22efbf['addEventListener']('DOMContentLoaded', _0x3451f1),
    _0x5768c8['addEventListener']('load', _0x3451f1));
    var _0x1807ec = function(_0x4b1985, _0x450794, _0xe0f38, _0x1d23fe, _0x5ed6d6, _0x34e195, _0x3db40f) {
        var _0x391b74 = 0x0
          , _0xa31541 = _0x4b1985['length']
          , _0x488e52 = null == _0xe0f38;
        if ('object' === _0x5daaf9['type'](_0xe0f38))
            for (_0x391b74 in (_0x5ed6d6 = !0x0,
            _0xe0f38))
                _0x1807ec(_0x4b1985, _0x450794, _0x391b74, _0xe0f38[_0x391b74], !0x0, _0x34e195, _0x3db40f);
        else {
            if (void 0x0 !== _0x1d23fe && (_0x5ed6d6 = !0x0,
            _0x5daaf9['isFunction'](_0x1d23fe) || (_0x3db40f = !0x0),
            _0x488e52 && (_0x3db40f ? (_0x450794['call'](_0x4b1985, _0x1d23fe),
            _0x450794 = null) : (_0x488e52 = _0x450794,
            _0x450794 = function(_0x5b4402, _0x29d704, _0x7d5315) {
                return _0x488e52['call'](_0x5daaf9(_0x5b4402), _0x7d5315);
            }
            )),
            _0x450794))
                for (; _0x391b74 < _0xa31541; _0x391b74++)
                    _0x450794(_0x4b1985[_0x391b74], _0xe0f38, _0x3db40f ? _0x1d23fe : _0x1d23fe['call'](_0x4b1985[_0x391b74], _0x391b74, _0x450794(_0x4b1985[_0x391b74], _0xe0f38)));
        }
        return _0x5ed6d6 ? _0x4b1985 : _0x488e52 ? _0x450794['call'](_0x4b1985) : _0xa31541 ? _0x450794(_0x4b1985[0x0], _0xe0f38) : _0x34e195;
    }
      , _0x3ca99b = function(_0x3670d5) {
        return 0x1 === _0x3670d5['nodeType'] || 0x9 === _0x3670d5['nodeType'] || !+_0x3670d5['nodeType'];
    };
    _0x4b514c['uid'] = 0x1,
    _0x4b514c['prototype'] = {
        'cache': function(_0x661d85) {
            var _0x4a3ce8 = _0x661d85[this['expando']];
            return _0x4a3ce8 || (_0x4a3ce8 = {},
            _0x3ca99b(_0x661d85) && (_0x661d85['nodeType'] ? _0x661d85[this['expando']] = _0x4a3ce8 : Object['defineProperty'](_0x661d85, this['expando'], {
                'value': _0x4a3ce8,
                'configurable': !0x0
            }))),
            _0x4a3ce8;
        },
        'set': function(_0x1bcfbb, _0x2d705a, _0x58c3d0) {
            var _0xbcebec;
            _0x1bcfbb = this['cache'](_0x1bcfbb);
            if ('string' == typeof _0x2d705a)
                _0x1bcfbb[_0x5daaf9['camelCase'](_0x2d705a)] = _0x58c3d0;
            else
                for (_0xbcebec in _0x2d705a)
                    _0x1bcfbb[_0x5daaf9['camelCase'](_0xbcebec)] = _0x2d705a[_0xbcebec];
            return _0x1bcfbb;
        },
        'get': function(_0x4de154, _0x5a802b) {
            return void 0x0 === _0x5a802b ? this['cache'](_0x4de154) : _0x4de154[this['expando']] && _0x4de154[this['expando']][_0x5daaf9['camelCase'](_0x5a802b)];
        },
        'access': function(_0x6b4719, _0x4852a9, _0x5ef5f3) {
            return void 0x0 === _0x4852a9 || _0x4852a9 && 'string' == typeof _0x4852a9 && void 0x0 === _0x5ef5f3 ? this['get'](_0x6b4719, _0x4852a9) : (this['set'](_0x6b4719, _0x4852a9, _0x5ef5f3),
            void 0x0 !== _0x5ef5f3 ? _0x5ef5f3 : _0x4852a9);
        },
        'remove': function(_0x5e096f, _0x2ce206) {
            var _0x488f1c, _0x21c860 = _0x5e096f[this['expando']];
            if (void 0x0 !== _0x21c860) {
                if (void 0x0 !== _0x2ce206) {
                    Array['isArray'](_0x2ce206) ? _0x2ce206 = _0x2ce206['map'](_0x5daaf9['camelCase']) : (_0x2ce206 = _0x5daaf9['camelCase'](_0x2ce206),
                    _0x2ce206 = _0x2ce206 in _0x21c860 ? [_0x2ce206] : _0x2ce206['match'](_0x182fa8) || []);
                    for (_0x488f1c = _0x2ce206['length']; _0x488f1c--; )
                        delete _0x21c860[_0x2ce206[_0x488f1c]];
                }
                (void 0x0 === _0x2ce206 || _0x5daaf9['isEmptyObject'](_0x21c860)) && (_0x5e096f['nodeType'] ? _0x5e096f[this['expando']] = void 0x0 : delete _0x5e096f[this['expando']]);
            }
        },
        'hasData': function(_0x422861) {
            return _0x422861 = _0x422861[this['expando']],
            void 0x0 !== _0x422861 && !_0x5daaf9['isEmptyObject'](_0x422861);
        }
    };
    var _0x244154 = new _0x4b514c()
      , _0x67abda = new _0x4b514c()
      , _0x33f665 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , _0x379898 = /[A-Z]/g;
    _0x5daaf9['extend']({
        'hasData': function(_0x5a81f4) {
            return _0x67abda['hasData'](_0x5a81f4) || _0x244154['hasData'](_0x5a81f4);
        },
        'data': function(_0x3549cc, _0x52d399, _0x40cb47) {
            return _0x67abda['access'](_0x3549cc, _0x52d399, _0x40cb47);
        },
        'removeData': function(_0x3221fc, _0x7e23f6) {
            _0x67abda['remove'](_0x3221fc, _0x7e23f6);
        },
        '_data': function(_0x1b9b70, _0x73caf1, _0x4b72a9) {
            return _0x244154['access'](_0x1b9b70, _0x73caf1, _0x4b72a9);
        },
        '_removeData': function(_0x2f23be, _0x4c11c5) {
            _0x244154['remove'](_0x2f23be, _0x4c11c5);
        }
    }),
    _0x5daaf9['fn']['extend']({
        'data': function(_0x2a3a5f, _0x3e3a04) {
            var _0x3598de, _0x7ea912, _0x2da0ba, _0x3e16bb = this[0x0], _0x24a809 = _0x3e16bb && _0x3e16bb['attributes'];
            if (void 0x0 === _0x2a3a5f) {
                if (this['length'] && (_0x2da0ba = _0x67abda['get'](_0x3e16bb),
                0x1 === _0x3e16bb['nodeType'] && !_0x244154['get'](_0x3e16bb, 'hasDataAttrs'))) {
                    for (_0x3598de = _0x24a809['length']; _0x3598de--; )
                        _0x24a809[_0x3598de] && (_0x7ea912 = _0x24a809[_0x3598de]['name'],
                        0x0 === _0x7ea912['indexOf']('data-') && (_0x7ea912 = _0x5daaf9['camelCase'](_0x7ea912['slice'](0x5)),
                        _0xb16934(_0x3e16bb, _0x7ea912, _0x2da0ba[_0x7ea912])));
                    _0x244154['set'](_0x3e16bb, 'hasDataAttrs', !0x0);
                }
                return _0x2da0ba;
            }
            return 'object' == typeof _0x2a3a5f ? this['each'](function() {
                _0x67abda['set'](this, _0x2a3a5f);
            }) : _0x1807ec(this, function(_0x365fb8) {
                var _0x51c74c;
                if (_0x3e16bb && void 0x0 === _0x365fb8) {
                    if ((_0x51c74c = _0x67abda['get'](_0x3e16bb, _0x2a3a5f),
                    void 0x0 !== _0x51c74c) || (_0x51c74c = _0xb16934(_0x3e16bb, _0x2a3a5f),
                    void 0x0 !== _0x51c74c))
                        return _0x51c74c;
                } else
                    this['each'](function() {
                        _0x67abda['set'](this, _0x2a3a5f, _0x365fb8);
                    });
            }, null, _0x3e3a04, 0x1 < arguments['length'], null, !0x0);
        },
        'removeData': function(_0x9c5165) {
            return this['each'](function() {
                _0x67abda['remove'](this, _0x9c5165);
            });
        }
    }),
    _0x5daaf9['extend']({
        'queue': function(_0x8294a, _0x5b3e98, _0x248c2b) {
            var _0x6bf646;
            if (_0x8294a)
                return _0x5b3e98 = (_0x5b3e98 || 'fx') + 'queue',
                _0x6bf646 = _0x244154['get'](_0x8294a, _0x5b3e98),
                _0x248c2b && (!_0x6bf646 || Array['isArray'](_0x248c2b) ? _0x6bf646 = _0x244154['access'](_0x8294a, _0x5b3e98, _0x5daaf9['makeArray'](_0x248c2b)) : _0x6bf646['push'](_0x248c2b)),
                _0x6bf646 || [];
        },
        'dequeue': function(_0x4ec507, _0x5e05c6) {
            _0x5e05c6 = _0x5e05c6 || 'fx';
            var _0x4ca620 = _0x5daaf9['queue'](_0x4ec507, _0x5e05c6)
              , _0x2dbe06 = _0x4ca620['length']
              , _0x4f6b0b = _0x4ca620['shift']()
              , _0x21e26d = _0x5daaf9['_queueHooks'](_0x4ec507, _0x5e05c6)
              , _0xf74a89 = function() {
                _0x5daaf9['dequeue'](_0x4ec507, _0x5e05c6);
            };
            'inprogress' === _0x4f6b0b && (_0x4f6b0b = _0x4ca620['shift'](),
            _0x2dbe06--),
            _0x4f6b0b && ('fx' === _0x5e05c6 && _0x4ca620['unshift']('inprogress'),
            delete _0x21e26d['stop'],
            _0x4f6b0b['call'](_0x4ec507, _0xf74a89, _0x21e26d)),
            !_0x2dbe06 && _0x21e26d && _0x21e26d['empty']['fire']();
        },
        '_queueHooks': function(_0x290c19, _0x26dec7) {
            var _0x1df529 = _0x26dec7 + 'queueHooks';
            return _0x244154['get'](_0x290c19, _0x1df529) || _0x244154['access'](_0x290c19, _0x1df529, {
                'empty': _0x5daaf9['Callbacks']('once\x20memory')['add'](function() {
                    _0x244154['remove'](_0x290c19, [_0x26dec7 + 'queue', _0x1df529]);
                })
            });
        }
    }),
    _0x5daaf9['fn']['extend']({
        'queue': function(_0x6e2a2a, _0x56e166) {
            var _0x385bfd = 0x2;
            return 'string' != typeof _0x6e2a2a && (_0x56e166 = _0x6e2a2a,
            _0x6e2a2a = 'fx',
            _0x385bfd--),
            arguments['length'] < _0x385bfd ? _0x5daaf9['queue'](this[0x0], _0x6e2a2a) : void 0x0 === _0x56e166 ? this : this['each'](function() {
                var _0x39e973 = _0x5daaf9['queue'](this, _0x6e2a2a, _0x56e166);
                _0x5daaf9['_queueHooks'](this, _0x6e2a2a),
                'fx' === _0x6e2a2a && 'inprogress' !== _0x39e973[0x0] && _0x5daaf9['dequeue'](this, _0x6e2a2a);
            });
        },
        'dequeue': function(_0x5f2b9b) {
            return this['each'](function() {
                _0x5daaf9['dequeue'](this, _0x5f2b9b);
            });
        },
        'clearQueue': function(_0x1f9978) {
            return this['queue'](_0x1f9978 || 'fx', []);
        },
        'promise': function(_0x1454a8, _0x48bedb) {
            var _0x5654b0, _0x1007d7 = 0x1, _0x22cac8 = _0x5daaf9['Deferred'](), _0x2a1b5e = this, _0x2ab5af = this['length'], _0x2e2ca1 = function() {
                --_0x1007d7 || _0x22cac8['resolveWith'](_0x2a1b5e, [_0x2a1b5e]);
            };
            'string' != typeof _0x1454a8 && (_0x48bedb = _0x1454a8,
            _0x1454a8 = void 0x0);
            for (_0x1454a8 = _0x1454a8 || 'fx'; _0x2ab5af--; )
                (_0x5654b0 = _0x244154['get'](_0x2a1b5e[_0x2ab5af], _0x1454a8 + 'queueHooks')) && _0x5654b0['empty'] && (_0x1007d7++,
                _0x5654b0['empty']['add'](_0x2e2ca1));
            return _0x2e2ca1(),
            _0x22cac8['promise'](_0x48bedb);
        }
    });
    var _0x2df67d = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/['source']
      , _0x3431b4 = RegExp('^(?:([+-])=|)(' + _0x2df67d + ')([a-z%]*)$', 'i')
      , _0x3cfee8 = ['Top', 'Right', 'Bottom', 'Left']
      , _0x3ba294 = function(_0x5c80c6, _0x40568b) {
        return _0x5c80c6 = _0x40568b || _0x5c80c6,
        'none' === _0x5c80c6['style']['display'] || '' === _0x5c80c6['style']['display'] && _0x5daaf9['contains'](_0x5c80c6['ownerDocument'], _0x5c80c6) && 'none' === _0x5daaf9['css'](_0x5c80c6, 'display');
    }
      , _0x30f84a = function(_0x4e32bb, _0x6d764a, _0x9ac75, _0x217d41) {
        var _0x5a89d7, _0x5226bf = {};
        for (_0x5a89d7 in _0x6d764a)
            _0x5226bf[_0x5a89d7] = _0x4e32bb['style'][_0x5a89d7],
            _0x4e32bb['style'][_0x5a89d7] = _0x6d764a[_0x5a89d7];
        _0x9ac75 = _0x9ac75['apply'](_0x4e32bb, _0x217d41 || []);
        for (_0x5a89d7 in _0x6d764a)
            _0x4e32bb['style'][_0x5a89d7] = _0x5226bf[_0x5a89d7];
        return _0x9ac75;
    }
      , _0x117174 = {};
    _0x5daaf9['fn']['extend']({
        'show': function() {
            return _0x5e22ab(this, !0x0);
        },
        'hide': function() {
            return _0x5e22ab(this);
        },
        'toggle': function(_0x136d18) {
            return 'boolean' == typeof _0x136d18 ? _0x136d18 ? this['show']() : this['hide']() : this['each'](function() {
                _0x3ba294(this) ? _0x5daaf9(this)['show']() : _0x5daaf9(this)['hide']();
            });
        }
    });
    var _0x400127 = /^(?:checkbox|radio)$/i
      , _0x2be8c8 = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , _0x4273ae = /^$|\/(?:java|ecma)script/i
      , _0x5566ff = {
        'option': [0x1, '<select\x20multiple=\x27multiple\x27>', '</select>'],
        'thead': [0x1, '<table>', '</table>'],
        'col': [0x2, '<table><colgroup>', '</colgroup></table>'],
        'tr': [0x2, '<table><tbody>', '</tbody></table>'],
        'td': [0x3, '<table><tbody><tr>', '</tr></tbody></table>'],
        '_default': [0x0, '', '']
    };
    _0x5566ff['optgroup'] = _0x5566ff['option'],
    _0x5566ff['tbody'] = _0x5566ff['tfoot'] = _0x5566ff['colgroup'] = _0x5566ff['caption'] = _0x5566ff['thead'],
    _0x5566ff['th'] = _0x5566ff['td'];
    var _0x3f97a4 = /<|&#?\w+;/
      , _0x3f47a7 = _0x22efbf['createDocumentFragment']()['appendChild'](_0x22efbf['createElement']('div'))
      , _0x5c5c20 = _0x22efbf['createElement']('input');
    _0x5c5c20['setAttribute']('type', 'radio'),
    _0x5c5c20['setAttribute']('checked', 'checked'),
    _0x5c5c20['setAttribute']('name', 't'),
    _0x3f47a7['appendChild'](_0x5c5c20),
    _0x1c56b9['checkClone'] = _0x3f47a7['cloneNode'](!0x0)['cloneNode'](!0x0)['lastChild']['checked'],
    _0x3f47a7['innerHTML'] = '<textarea>x</textarea>',
    _0x1c56b9['noCloneChecked'] = !!_0x3f47a7['cloneNode'](!0x0)['lastChild']['defaultValue'],
    !0x0;
    var _0xc9227d = _0x22efbf['documentElement']
      , _0x11f634 = /^key/
      , _0xc98886 = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , _0x476063 = /^([^.]*)(?:\.(.+)|)/;
    _0x5daaf9['event'] = {
        'global': {},
        'add': function(_0x266b91, _0x23dbe7, _0x34f2d8, _0x122114, _0xe490d6) {
            var _0x3d57cb, _0x3762b0, _0x436ce9, _0xf3701f, _0x15d108, _0xf1900d, _0x49b35a, _0x304688, _0x4ba049, _0x505d0c;
            if (_0x15d108 = _0x244154['get'](_0x266b91)) {
                _0x34f2d8['handler'] && (_0x3d57cb = _0x34f2d8,
                _0x34f2d8 = _0x3d57cb['handler'],
                _0xe490d6 = _0x3d57cb['selector']),
                _0xe490d6 && _0x5daaf9['find']['matchesSelector'](_0xc9227d, _0xe490d6),
                _0x34f2d8['guid'] || (_0x34f2d8['guid'] = _0x5daaf9['guid']++),
                (_0xf3701f = _0x15d108['events']) || (_0xf3701f = _0x15d108['events'] = {}),
                (_0x3762b0 = _0x15d108['handle']) || (_0x3762b0 = _0x15d108['handle'] = function(_0x20eb67) {
                    return 'undefined' != typeof _0x5daaf9 && _0x5daaf9['event']['triggered'] !== _0x20eb67['type'] ? _0x5daaf9['event']['dispatch']['apply'](_0x266b91, arguments) : void 0x0;
                }
                ),
                _0x23dbe7 = (_0x23dbe7 || '')['match'](_0x182fa8) || [''];
                for (_0x15d108 = _0x23dbe7['length']; _0x15d108--; )
                    _0x436ce9 = _0x476063['exec'](_0x23dbe7[_0x15d108]) || [],
                    _0x4ba049 = _0x505d0c = _0x436ce9[0x1],
                    _0x436ce9 = (_0x436ce9[0x2] || '')['split']('.')['sort'](),
                    _0x4ba049 && (_0x49b35a = _0x5daaf9['event']['special'][_0x4ba049] || {},
                    _0x4ba049 = (_0xe490d6 ? _0x49b35a['delegateType'] : _0x49b35a['bindType']) || _0x4ba049,
                    _0x49b35a = _0x5daaf9['event']['special'][_0x4ba049] || {},
                    _0xf1900d = _0x5daaf9['extend']({
                        'type': _0x4ba049,
                        'origType': _0x505d0c,
                        'data': _0x122114,
                        'handler': _0x34f2d8,
                        'guid': _0x34f2d8['guid'],
                        'selector': _0xe490d6,
                        'needsContext': _0xe490d6 && _0x5daaf9['expr']['match']['needsContext']['test'](_0xe490d6),
                        'namespace': _0x436ce9['join']('.')
                    }, _0x3d57cb),
                    (_0x304688 = _0xf3701f[_0x4ba049]) || (_0x304688 = _0xf3701f[_0x4ba049] = [],
                    _0x304688['delegateCount'] = 0x0,
                    _0x49b35a['setup'] && !0x1 !== _0x49b35a['setup']['call'](_0x266b91, _0x122114, _0x436ce9, _0x3762b0) || _0x266b91['addEventListener'] && _0x266b91['addEventListener'](_0x4ba049, _0x3762b0)),
                    _0x49b35a['add'] && (_0x49b35a['add']['call'](_0x266b91, _0xf1900d),
                    _0xf1900d['handler']['guid'] || (_0xf1900d['handler']['guid'] = _0x34f2d8['guid'])),
                    _0xe490d6 ? _0x304688['splice'](_0x304688['delegateCount']++, 0x0, _0xf1900d) : _0x304688['push'](_0xf1900d),
                    _0x5daaf9['event']['global'][_0x4ba049] = !0x0);
            }
        },
        'remove': function(_0x4fef11, _0x4bd065, _0x1f2b12, _0x1b1131, _0x327492) {
            var _0x54f626, _0x56cebf, _0x574462, _0x18eeea, _0x4a0d43, _0x1232af, _0x5741b0, _0x5c0fc7, _0x3bb6f8, _0xe96b5e, _0x9cd271, _0x54f6b8 = _0x244154['hasData'](_0x4fef11) && _0x244154['get'](_0x4fef11);
            if (_0x54f6b8 && (_0x18eeea = _0x54f6b8['events'])) {
                _0x4bd065 = (_0x4bd065 || '')['match'](_0x182fa8) || [''];
                for (_0x4a0d43 = _0x4bd065['length']; _0x4a0d43--; )
                    if (_0x574462 = _0x476063['exec'](_0x4bd065[_0x4a0d43]) || [],
                    _0x3bb6f8 = _0x9cd271 = _0x574462[0x1],
                    _0xe96b5e = (_0x574462[0x2] || '')['split']('.')['sort'](),
                    _0x3bb6f8) {
                        _0x5741b0 = _0x5daaf9['event']['special'][_0x3bb6f8] || {},
                        _0x3bb6f8 = (_0x1b1131 ? _0x5741b0['delegateType'] : _0x5741b0['bindType']) || _0x3bb6f8,
                        _0x5c0fc7 = _0x18eeea[_0x3bb6f8] || [],
                        _0x574462 = _0x574462[0x2] && RegExp('(^|\x5c.)' + _0xe96b5e['join']('\x5c.(?:.*\x5c.|)') + '(\x5c.|$)');
                        for (_0x56cebf = _0x54f626 = _0x5c0fc7['length']; _0x54f626--; )
                            _0x1232af = _0x5c0fc7[_0x54f626],
                            !_0x327492 && _0x9cd271 !== _0x1232af['origType'] || _0x1f2b12 && _0x1f2b12['guid'] !== _0x1232af['guid'] || _0x574462 && !_0x574462['test'](_0x1232af['namespace']) || _0x1b1131 && _0x1b1131 !== _0x1232af['selector'] && ('**' !== _0x1b1131 || !_0x1232af['selector']) || (_0x5c0fc7['splice'](_0x54f626, 0x1),
                            _0x1232af['selector'] && _0x5c0fc7['delegateCount']--,
                            _0x5741b0['remove'] && _0x5741b0['remove']['call'](_0x4fef11, _0x1232af));
                        _0x56cebf && !_0x5c0fc7['length'] && (_0x5741b0['teardown'] && !0x1 !== _0x5741b0['teardown']['call'](_0x4fef11, _0xe96b5e, _0x54f6b8['handle']) || _0x5daaf9['removeEvent'](_0x4fef11, _0x3bb6f8, _0x54f6b8['handle']),
                        delete _0x18eeea[_0x3bb6f8]);
                    } else
                        for (_0x3bb6f8 in _0x18eeea)
                            _0x5daaf9['event']['remove'](_0x4fef11, _0x3bb6f8 + _0x4bd065[_0x4a0d43], _0x1f2b12, _0x1b1131, !0x0);
                _0x5daaf9['isEmptyObject'](_0x18eeea) && _0x244154['remove'](_0x4fef11, 'handle\x20events');
            }
        },
        'dispatch': function(_0x11d729) {
            var _0x2473b7 = _0x5daaf9['event']['fix'](_0x11d729), _0x1841a6, _0x1fb594, _0x58bfce, _0x3f40fd, _0x27c30e, _0x4aa91e, _0x458bad = Array(arguments['length']);
            _0x1fb594 = (_0x244154['get'](this, 'events') || {})[_0x2473b7['type']] || [];
            var _0x398189 = _0x5daaf9['event']['special'][_0x2473b7['type']] || {};
            _0x458bad[0x0] = _0x2473b7;
            for (_0x1841a6 = 0x1; _0x1841a6 < arguments['length']; _0x1841a6++)
                _0x458bad[_0x1841a6] = arguments[_0x1841a6];
            if (_0x2473b7['delegateTarget'] = this,
            !_0x398189['preDispatch'] || !0x1 !== _0x398189['preDispatch']['call'](this, _0x2473b7)) {
                _0x4aa91e = _0x5daaf9['event']['handlers']['call'](this, _0x2473b7, _0x1fb594);
                for (_0x1841a6 = 0x0; (_0x3f40fd = _0x4aa91e[_0x1841a6++]) && !_0x2473b7['isPropagationStopped'](); ) {
                    _0x2473b7['currentTarget'] = _0x3f40fd['elem'];
                    for (_0x1fb594 = 0x0; (_0x27c30e = _0x3f40fd['handlers'][_0x1fb594++]) && !_0x2473b7['isImmediatePropagationStopped'](); )
                        _0x2473b7['rnamespace'] && !_0x2473b7['rnamespace']['test'](_0x27c30e['namespace']) || (_0x2473b7['handleObj'] = _0x27c30e,
                        _0x2473b7['data'] = _0x27c30e['data'],
                        _0x58bfce = ((_0x5daaf9['event']['special'][_0x27c30e['origType']] || {})['handle'] || _0x27c30e['handler'])['apply'](_0x3f40fd['elem'], _0x458bad),
                        void 0x0 !== _0x58bfce && !0x1 === (_0x2473b7['result'] = _0x58bfce) && (_0x2473b7['preventDefault'](),
                        _0x2473b7['stopPropagation']()));
                }
                return _0x398189['postDispatch'] && _0x398189['postDispatch']['call'](this, _0x2473b7),
                _0x2473b7['result'];
            }
        },
        'handlers': function(_0xdae24b, _0x508517) {
            var _0x43c896, _0x2b2f30, _0x3cfaa5, _0x80c397, _0x30b319, _0x68f9dc = [], _0x47eeb2 = _0x508517['delegateCount'], _0x40b97f = _0xdae24b['target'];
            if (_0x47eeb2 && _0x40b97f['nodeType'] && !('click' === _0xdae24b['type'] && 0x1 <= _0xdae24b['button']))
                for (; _0x40b97f !== this; _0x40b97f = _0x40b97f['parentNode'] || this)
                    if (0x1 === _0x40b97f['nodeType'] && ('click' !== _0xdae24b['type'] || !0x0 !== _0x40b97f['disabled'])) {
                        _0x80c397 = [],
                        _0x30b319 = {};
                        for (_0x43c896 = 0x0; _0x43c896 < _0x47eeb2; _0x43c896++)
                            _0x2b2f30 = _0x508517[_0x43c896],
                            _0x3cfaa5 = _0x2b2f30['selector'] + '\x20',
                            void 0x0 === _0x30b319[_0x3cfaa5] && (_0x30b319[_0x3cfaa5] = _0x2b2f30['needsContext'] ? -0x1 < _0x5daaf9(_0x3cfaa5, this)['index'](_0x40b97f) : _0x5daaf9['find'](_0x3cfaa5, this, null, [_0x40b97f])['length']),
                            _0x30b319[_0x3cfaa5] && _0x80c397['push'](_0x2b2f30);
                        _0x80c397['length'] && _0x68f9dc['push']({
                            'elem': _0x40b97f,
                            'handlers': _0x80c397
                        });
                    }
            return _0x40b97f = this,
            _0x47eeb2 < _0x508517['length'] && _0x68f9dc['push']({
                'elem': _0x40b97f,
                'handlers': _0x508517['slice'](_0x47eeb2)
            }),
            _0x68f9dc;
        },
        'addProp': function(_0x14dd9d, _0x48c3a6) {
            Object['defineProperty'](_0x5daaf9['Event']['prototype'], _0x14dd9d, {
                'enumerable': !0x0,
                'configurable': !0x0,
                'get': _0x5daaf9['isFunction'](_0x48c3a6) ? function() {
                    if (this['originalEvent'])
                        return _0x48c3a6(this['originalEvent']);
                }
                : function() {
                    if (this['originalEvent'])
                        return this['originalEvent'][_0x14dd9d];
                }
                ,
                'set': function(_0x19ceaa) {
                    Object['defineProperty'](this, _0x14dd9d, {
                        'enumerable': !0x0,
                        'configurable': !0x0,
                        'writable': !0x0,
                        'value': _0x19ceaa
                    });
                }
            });
        },
        'fix': function(_0x58fd9a) {
            return _0x58fd9a[_0x5daaf9['expando']] ? _0x58fd9a : new _0x5daaf9['Event'](_0x58fd9a);
        },
        'special': {
            'load': {
                'noBubble': !0x0
            },
            'focus': {
                'trigger': function() {
                    if (this !== _0x4afc9e() && this['focus'])
                        return this['focus'](),
                        !0x1;
                },
                'delegateType': 'focusin'
            },
            'blur': {
                'trigger': function() {
                    if (this === _0x4afc9e() && this['blur'])
                        return this['blur'](),
                        !0x1;
                },
                'delegateType': 'focusout'
            },
            'click': {
                'trigger': function() {
                    if ('checkbox' === this['type'] && this['click'] && _0x4bed0e(this, 'input'))
                        return this['click'](),
                        !0x1;
                },
                '_default': function(_0xbeda93) {
                    return _0x4bed0e(_0xbeda93['target'], 'a');
                }
            },
            'beforeunload': {
                'postDispatch': function(_0x1bb0d1) {
                    void 0x0 !== _0x1bb0d1['result'] && _0x1bb0d1['originalEvent'] && (_0x1bb0d1['originalEvent']['returnValue'] = _0x1bb0d1['result']);
                }
            }
        }
    },
    _0x5daaf9['removeEvent'] = function(_0x2fca8e, _0x1b1ccf, _0x3e9688) {
        _0x2fca8e['removeEventListener'] && _0x2fca8e['removeEventListener'](_0x1b1ccf, _0x3e9688);
    }
    ,
    _0x5daaf9['Event'] = function(_0x2a073b, _0x2778ac) {
        return this instanceof _0x5daaf9['Event'] ? (_0x2a073b && _0x2a073b['type'] ? (this['originalEvent'] = _0x2a073b,
        this['type'] = _0x2a073b['type'],
        this['isDefaultPrevented'] = _0x2a073b['defaultPrevented'] || void 0x0 === _0x2a073b['defaultPrevented'] && !0x1 === _0x2a073b['returnValue'] ? _0x52300a : _0x5e2ec6,
        this['target'] = _0x2a073b['target'] && 0x3 === _0x2a073b['target']['nodeType'] ? _0x2a073b['target']['parentNode'] : _0x2a073b['target'],
        this['currentTarget'] = _0x2a073b['currentTarget'],
        this['relatedTarget'] = _0x2a073b['relatedTarget']) : this['type'] = _0x2a073b,
        _0x2778ac && _0x5daaf9['extend'](this, _0x2778ac),
        this['timeStamp'] = _0x2a073b && _0x2a073b['timeStamp'] || _0x5daaf9['now'](),
        void (this[_0x5daaf9['expando']] = !0x0)) : new _0x5daaf9['Event'](_0x2a073b,_0x2778ac);
    }
    ,
    _0x5daaf9['Event']['prototype'] = {
        'constructor': _0x5daaf9['Event'],
        'isDefaultPrevented': _0x5e2ec6,
        'isPropagationStopped': _0x5e2ec6,
        'isImmediatePropagationStopped': _0x5e2ec6,
        'isSimulated': !0x1,
        'preventDefault': function() {
            var _0x42e85e = this['originalEvent'];
            this['isDefaultPrevented'] = _0x52300a,
            _0x42e85e && !this['isSimulated'] && _0x42e85e['preventDefault']();
        },
        'stopPropagation': function() {
            var _0x263b8b = this['originalEvent'];
            this['isPropagationStopped'] = _0x52300a,
            _0x263b8b && !this['isSimulated'] && _0x263b8b['stopPropagation']();
        },
        'stopImmediatePropagation': function() {
            var _0x20fda4 = this['originalEvent'];
            this['isImmediatePropagationStopped'] = _0x52300a,
            _0x20fda4 && !this['isSimulated'] && _0x20fda4['stopImmediatePropagation'](),
            this['stopPropagation']();
        }
    },
    _0x5daaf9['each']({
        'altKey': !0x0,
        'bubbles': !0x0,
        'cancelable': !0x0,
        'changedTouches': !0x0,
        'ctrlKey': !0x0,
        'detail': !0x0,
        'eventPhase': !0x0,
        'metaKey': !0x0,
        'pageX': !0x0,
        'pageY': !0x0,
        'shiftKey': !0x0,
        'view': !0x0,
        'char': !0x0,
        'charCode': !0x0,
        'key': !0x0,
        'keyCode': !0x0,
        'button': !0x0,
        'buttons': !0x0,
        'clientX': !0x0,
        'clientY': !0x0,
        'offsetX': !0x0,
        'offsetY': !0x0,
        'pointerId': !0x0,
        'pointerType': !0x0,
        'screenX': !0x0,
        'screenY': !0x0,
        'targetTouches': !0x0,
        'toElement': !0x0,
        'touches': !0x0,
        'which': function(_0x3dc156) {
            var _0x1d2a46 = _0x3dc156['button'];
            return null == _0x3dc156['which'] && _0x11f634['test'](_0x3dc156['type']) ? null != _0x3dc156['charCode'] ? _0x3dc156['charCode'] : _0x3dc156['keyCode'] : !_0x3dc156['which'] && void 0x0 !== _0x1d2a46 && _0xc98886['test'](_0x3dc156['type']) ? 0x1 & _0x1d2a46 ? 0x1 : 0x2 & _0x1d2a46 ? 0x3 : 0x4 & _0x1d2a46 ? 0x2 : 0x0 : _0x3dc156['which'];
        }
    }, _0x5daaf9['event']['addProp']),
    _0x5daaf9['each']({
        'mouseenter': 'mouseover',
        'mouseleave': 'mouseout',
        'pointerenter': 'pointerover',
        'pointerleave': 'pointerout'
    }, function(_0x367658, _0x490c6b) {
        _0x5daaf9['event']['special'][_0x367658] = {
            'delegateType': _0x490c6b,
            'bindType': _0x490c6b,
            'handle': function(_0x4d9077) {
                var _0x3e0b99, _0x3e706a = _0x4d9077['relatedTarget'], _0xc74a53 = _0x4d9077['handleObj'];
                return _0x3e706a && (_0x3e706a === this || _0x5daaf9['contains'](this, _0x3e706a)) || (_0x4d9077['type'] = _0xc74a53['origType'],
                _0x3e0b99 = _0xc74a53['handler']['apply'](this, arguments),
                _0x4d9077['type'] = _0x490c6b),
                _0x3e0b99;
            }
        };
    }),
    _0x5daaf9['fn']['extend']({
        'on': function(_0x319c43, _0x5726e4, _0x50ebf1, _0xad32a3) {
            return _0x5a3c09(this, _0x319c43, _0x5726e4, _0x50ebf1, _0xad32a3);
        },
        'one': function(_0x255f23, _0x13cca1, _0xbb50de, _0x2b4fcb) {
            return _0x5a3c09(this, _0x255f23, _0x13cca1, _0xbb50de, _0x2b4fcb, 0x1);
        },
        'off': function(_0x32f703, _0x1c2a4b, _0x2bedef) {
            var _0x3b18d3, _0x2bedff;
            if (_0x32f703 && _0x32f703['preventDefault'] && _0x32f703['handleObj'])
                return _0x3b18d3 = _0x32f703['handleObj'],
                _0x5daaf9(_0x32f703['delegateTarget'])['off'](_0x3b18d3['namespace'] ? _0x3b18d3['origType'] + '.' + _0x3b18d3['namespace'] : _0x3b18d3['origType'], _0x3b18d3['selector'], _0x3b18d3['handler']),
                this;
            if ('object' == typeof _0x32f703) {
                for (_0x2bedff in _0x32f703)
                    this['off'](_0x2bedff, _0x1c2a4b, _0x32f703[_0x2bedff]);
                return this;
            }
            return !0x1 !== _0x1c2a4b && 'function' != typeof _0x1c2a4b || (_0x2bedef = _0x1c2a4b,
            _0x1c2a4b = void 0x0),
            !0x1 === _0x2bedef && (_0x2bedef = _0x5e2ec6),
            this['each'](function() {
                _0x5daaf9['event']['remove'](this, _0x32f703, _0x2bedef, _0x1c2a4b);
            });
        }
    });
    var _0x4d3965 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , _0x2a757e = /<script|<style|<link/i
      , _0x4fe34d = /checked\s*(?:[^=]|=\s*.checked.)/i
      , _0x4ce55f = /^true\/(.*)/
      , _0x47284b = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    _0x5daaf9['extend']({
        'htmlPrefilter': function(_0x675fa5) {
            return _0x675fa5['replace'](_0x4d3965, '<$1></$2>');
        },
        'clone': function(_0x33aa17, _0x37ec16, _0x48b169) {
            var _0x2dea38, _0x44cbce, _0x3b3f7a, _0x11c00e, _0x43795d = _0x33aa17['cloneNode'](!0x0), _0xf843fa = _0x5daaf9['contains'](_0x33aa17['ownerDocument'], _0x33aa17);
            if (!_0x1c56b9['noCloneChecked'] && !(0x1 !== _0x33aa17['nodeType'] && 0xb !== _0x33aa17['nodeType'] || _0x5daaf9['isXMLDoc'](_0x33aa17))) {
                _0x11c00e = _0x4e787(_0x43795d),
                _0x3b3f7a = _0x4e787(_0x33aa17),
                _0x2dea38 = 0x0;
                for (_0x44cbce = _0x3b3f7a['length']; _0x2dea38 < _0x44cbce; _0x2dea38++) {
                    var _0x54a4c6 = _0x3b3f7a[_0x2dea38]
                      , _0x58ae61 = _0x11c00e[_0x2dea38]
                      , _0x3b6bc9 = _0x58ae61['nodeName']['toLowerCase']();
                    'input' === _0x3b6bc9 && _0x400127['test'](_0x54a4c6['type']) ? _0x58ae61['checked'] = _0x54a4c6['checked'] : 'input' !== _0x3b6bc9 && 'textarea' !== _0x3b6bc9 || (_0x58ae61['defaultValue'] = _0x54a4c6['defaultValue']);
                }
            }
            if (_0x37ec16) {
                if (_0x48b169) {
                    _0x3b3f7a = _0x3b3f7a || _0x4e787(_0x33aa17),
                    _0x11c00e = _0x11c00e || _0x4e787(_0x43795d),
                    _0x2dea38 = 0x0;
                    for (_0x44cbce = _0x3b3f7a['length']; _0x2dea38 < _0x44cbce; _0x2dea38++)
                        _0x1863d8(_0x3b3f7a[_0x2dea38], _0x11c00e[_0x2dea38]);
                } else
                    _0x1863d8(_0x33aa17, _0x43795d);
            }
            return _0x11c00e = _0x4e787(_0x43795d, 'script'),
            0x0 < _0x11c00e['length'] && _0x598a4d(_0x11c00e, !_0xf843fa && _0x4e787(_0x33aa17, 'script')),
            _0x43795d;
        },
        'cleanData': function(_0x32a0f1) {
            for (var _0x1253bb, _0x4d073c, _0x21e1b2, _0x11ef83 = _0x5daaf9['event']['special'], _0x4c5221 = 0x0; void 0x0 !== (_0x4d073c = _0x32a0f1[_0x4c5221]); _0x4c5221++)
                if (_0x3ca99b(_0x4d073c)) {
                    if (_0x1253bb = _0x4d073c[_0x244154['expando']]) {
                        if (_0x1253bb['events'])
                            for (_0x21e1b2 in _0x1253bb['events'])
                                _0x11ef83[_0x21e1b2] ? _0x5daaf9['event']['remove'](_0x4d073c, _0x21e1b2) : _0x5daaf9['removeEvent'](_0x4d073c, _0x21e1b2, _0x1253bb['handle']);
                        _0x4d073c[_0x244154['expando']] = void 0x0;
                    }
                    _0x4d073c[_0x67abda['expando']] && (_0x4d073c[_0x67abda['expando']] = void 0x0);
                }
        }
    }),
    _0x5daaf9['fn']['extend']({
        'detach': function(_0x403175) {
            return _0x1d3b03(this, _0x403175, !0x0);
        },
        'remove': function(_0x5b875e) {
            return _0x1d3b03(this, _0x5b875e);
        },
        'text': function(_0x30a0e6) {
            return _0x1807ec(this, function(_0x2ee6b5) {
                return void 0x0 === _0x2ee6b5 ? _0x5daaf9['text'](this) : this['empty']()['each'](function() {
                    0x1 !== this['nodeType'] && 0xb !== this['nodeType'] && 0x9 !== this['nodeType'] || (this['textContent'] = _0x2ee6b5);
                });
            }, null, _0x30a0e6, arguments['length']);
        },
        'append': function() {
            return _0x2fc343(this, arguments, function(_0x40e9bc) {
                (0x1 === this['nodeType'] || 0xb === this['nodeType'] || 0x9 === this['nodeType']) && _0xdc2e01(this, _0x40e9bc)['appendChild'](_0x40e9bc);
            });
        },
        'prepend': function() {
            return _0x2fc343(this, arguments, function(_0x539e00) {
                if (0x1 === this['nodeType'] || 0xb === this['nodeType'] || 0x9 === this['nodeType']) {
                    var _0x352ddd = _0xdc2e01(this, _0x539e00);
                    _0x352ddd['insertBefore'](_0x539e00, _0x352ddd['firstChild']);
                }
            });
        },
        'before': function() {
            return _0x2fc343(this, arguments, function(_0x7b0c3e) {
                this['parentNode'] && this['parentNode']['insertBefore'](_0x7b0c3e, this);
            });
        },
        'after': function() {
            return _0x2fc343(this, arguments, function(_0x22654a) {
                this['parentNode'] && this['parentNode']['insertBefore'](_0x22654a, this['nextSibling']);
            });
        },
        'empty': function() {
            for (var _0x2edde2, _0x6cf2ed = 0x0; null != (_0x2edde2 = this[_0x6cf2ed]); _0x6cf2ed++)
                0x1 === _0x2edde2['nodeType'] && (_0x5daaf9['cleanData'](_0x4e787(_0x2edde2, !0x1)),
                _0x2edde2['textContent'] = '');
            return this;
        },
        'clone': function(_0x515b6a, _0x3667bd) {
            return _0x515b6a = null != _0x515b6a && _0x515b6a,
            _0x3667bd = null == _0x3667bd ? _0x515b6a : _0x3667bd,
            this['map'](function() {
                return _0x5daaf9['clone'](this, _0x515b6a, _0x3667bd);
            });
        },
        'html': function(_0x33bf70) {
            return _0x1807ec(this, function(_0x2dfc2e) {
                var _0x1d3bbd = this[0x0] || {}
                  , _0xaaecc4 = 0x0
                  , _0x29b7fc = this['length'];
                if (void 0x0 === _0x2dfc2e && 0x1 === _0x1d3bbd['nodeType'])
                    return _0x1d3bbd['innerHTML'];
                if ('string' == typeof _0x2dfc2e && !_0x2a757e['test'](_0x2dfc2e) && !_0x5566ff[(_0x2be8c8['exec'](_0x2dfc2e) || ['', ''])[0x1]['toLowerCase']()]) {
                    _0x2dfc2e = _0x5daaf9['htmlPrefilter'](_0x2dfc2e);
                    try {
                        for (; _0xaaecc4 < _0x29b7fc; _0xaaecc4++)
                            _0x1d3bbd = this[_0xaaecc4] || {},
                            0x1 === _0x1d3bbd['nodeType'] && (_0x5daaf9['cleanData'](_0x4e787(_0x1d3bbd, !0x1)),
                            _0x1d3bbd['innerHTML'] = _0x2dfc2e);
                        _0x1d3bbd = 0x0;
                    } catch (_0x13ac6d) {}
                }
                _0x1d3bbd && this['empty']()['append'](_0x2dfc2e);
            }, null, _0x33bf70, arguments['length']);
        },
        'replaceWith': function() {
            var _0x42fbe5 = [];
            return _0x2fc343(this, arguments, function(_0x237b82) {
                var _0x429197 = this['parentNode'];
                0x0 > _0x5daaf9['inArray'](this, _0x42fbe5) && (_0x5daaf9['cleanData'](_0x4e787(this)),
                _0x429197 && _0x429197['replaceChild'](_0x237b82, this));
            }, _0x42fbe5);
        }
    }),
    _0x5daaf9['each']({
        'appendTo': 'append',
        'prependTo': 'prepend',
        'insertBefore': 'before',
        'insertAfter': 'after',
        'replaceAll': 'replaceWith'
    }, function(_0x5dd3d2, _0x101f63) {
        _0x5daaf9['fn'][_0x5dd3d2] = function(_0x44b12a) {
            for (var _0x34a466 = [], _0x5a3b29 = _0x5daaf9(_0x44b12a), _0x1bd6f5 = _0x5a3b29['length'] - 0x1, _0x161f6c = 0x0; _0x161f6c <= _0x1bd6f5; _0x161f6c++)
                _0x44b12a = _0x161f6c === _0x1bd6f5 ? this : this['clone'](!0x0),
                _0x5daaf9(_0x5a3b29[_0x161f6c])[_0x101f63](_0x44b12a),
                _0x1a7321['apply'](_0x34a466, _0x44b12a['get']());
            return this['pushStack'](_0x34a466);
        }
        ;
    });
    var _0x4ff4f2 = /^margin/, _0x90d65a = RegExp('^(' + _0x2df67d + ')(?!px)[a-z%]+$', 'i'), _0x1471e7 = function(_0x36957a) {
        var _0x362d5a = _0x36957a['ownerDocument']['defaultView'];
        return _0x362d5a && _0x362d5a['opener'] || (_0x362d5a = _0x5768c8),
        _0x362d5a['getComputedStyle'](_0x36957a);
    }, _0x9871e8 = function() {
        if (_0xdf0451) {
            _0xdf0451['style']['cssText'] = 'box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%',
            _0xdf0451['innerHTML'] = '',
            _0xc9227d['appendChild'](_0x189ddc);
            var _0x290470 = _0x5768c8['getComputedStyle'](_0xdf0451);
            _0x10f84e = '1%' !== _0x290470['top'],
            _0xc3e009 = '2px' === _0x290470['marginLeft'],
            _0x2f7086 = '4px' === _0x290470['width'],
            _0xdf0451['style']['marginRight'] = '50%',
            _0x266145 = '4px' === _0x290470['marginRight'],
            _0xc9227d['removeChild'](_0x189ddc),
            _0xdf0451 = null;
        }
    }, _0x10f84e, _0x2f7086, _0x266145, _0xc3e009, _0x189ddc = _0x22efbf['createElement']('div'), _0xdf0451 = _0x22efbf['createElement']('div');
    _0xdf0451['style'] && (_0xdf0451['style']['backgroundClip'] = 'content-box',
    _0xdf0451['cloneNode'](!0x0)['style']['backgroundClip'] = '',
    _0x1c56b9['clearCloneStyle'] = 'content-box' === _0xdf0451['style']['backgroundClip'],
    _0x189ddc['style']['cssText'] = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute',
    _0x189ddc['appendChild'](_0xdf0451),
    _0x5daaf9['extend'](_0x1c56b9, {
        'pixelPosition': function() {
            return _0x9871e8(),
            _0x10f84e;
        },
        'boxSizingReliable': function() {
            return _0x9871e8(),
            _0x2f7086;
        },
        'pixelMarginRight': function() {
            return _0x9871e8(),
            _0x266145;
        },
        'reliableMarginLeft': function() {
            return _0x9871e8(),
            _0xc3e009;
        }
    })),
    !0x0;
    var _0x2eeb08 = /^(none|table(?!-c[ea]).+)/
      , _0x81bc73 = /^--/
      , _0x447c88 = {
        'position': 'absolute',
        'visibility': 'hidden',
        'display': 'block'
    }
      , _0x220b1a = {
        'letterSpacing': '0',
        'fontWeight': '400'
    }
      , _0x11bffc = ['Webkit', 'Moz', 'ms']
      , _0x43f5a6 = _0x22efbf['createElement']('div')['style'];
    _0x5daaf9['extend']({
        'cssHooks': {
            'opacity': {
                'get': function(_0x270882, _0x480656) {
                    if (_0x480656) {
                        var _0x2d5859 = _0x3c24d2(_0x270882, 'opacity');
                        return '' === _0x2d5859 ? '1' : _0x2d5859;
                    }
                }
            }
        },
        'cssNumber': {
            'animationIterationCount': !0x0,
            'columnCount': !0x0,
            'fillOpacity': !0x0,
            'flexGrow': !0x0,
            'flexShrink': !0x0,
            'fontWeight': !0x0,
            'lineHeight': !0x0,
            'opacity': !0x0,
            'order': !0x0,
            'orphans': !0x0,
            'widows': !0x0,
            'zIndex': !0x0,
            'zoom': !0x0
        },
        'cssProps': {
            'float': 'cssFloat'
        },
        'style': function(_0x3eb084, _0x8459b, _0x3d336b, _0x42b9d4) {
            if (_0x3eb084 && 0x3 !== _0x3eb084['nodeType'] && 0x8 !== _0x3eb084['nodeType'] && _0x3eb084['style']) {
                var _0x573071, _0x469064, _0x3dfc4b, _0x3a319c = _0x5daaf9['camelCase'](_0x8459b), _0x1bddaf = _0x81bc73['test'](_0x8459b), _0x4d1dc4 = _0x3eb084['style'];
                return _0x1bddaf || (_0x8459b = _0x29a08c(_0x3a319c)),
                _0x3dfc4b = _0x5daaf9['cssHooks'][_0x8459b] || _0x5daaf9['cssHooks'][_0x3a319c],
                void 0x0 === _0x3d336b ? _0x3dfc4b && 'get'in _0x3dfc4b && void 0x0 !== (_0x573071 = _0x3dfc4b['get'](_0x3eb084, !0x1, _0x42b9d4)) ? _0x573071 : _0x4d1dc4[_0x8459b] : (_0x469064 = typeof _0x3d336b,
                'string' === _0x469064 && (_0x573071 = _0x3431b4['exec'](_0x3d336b)) && _0x573071[0x1] && (_0x3d336b = _0x53dc82(_0x3eb084, _0x8459b, _0x573071),
                _0x469064 = 'number'),
                null != _0x3d336b && _0x3d336b === _0x3d336b && ('number' === _0x469064 && (_0x3d336b += _0x573071 && _0x573071[0x3] || (_0x5daaf9['cssNumber'][_0x3a319c] ? '' : 'px')),
                _0x1c56b9['clearCloneStyle'] || '' !== _0x3d336b || 0x0 !== _0x8459b['indexOf']('background') || (_0x4d1dc4[_0x8459b] = 'inherit'),
                _0x3dfc4b && 'set'in _0x3dfc4b && void 0x0 === (_0x3d336b = _0x3dfc4b['set'](_0x3eb084, _0x3d336b, _0x42b9d4)) || (_0x1bddaf ? _0x4d1dc4['setProperty'](_0x8459b, _0x3d336b) : _0x4d1dc4[_0x8459b] = _0x3d336b)),
                void 0x0);
            }
        },
        'css': function(_0x25f28c, _0x34067a, _0x2d5c6c, _0x5a81c8) {
            var _0xc3cb5, _0xdb4f50, _0x189dc8, _0x1b22b7 = _0x5daaf9['camelCase'](_0x34067a);
            return _0x81bc73['test'](_0x34067a) || (_0x34067a = _0x29a08c(_0x1b22b7)),
            _0x189dc8 = _0x5daaf9['cssHooks'][_0x34067a] || _0x5daaf9['cssHooks'][_0x1b22b7],
            _0x189dc8 && 'get'in _0x189dc8 && (_0xc3cb5 = _0x189dc8['get'](_0x25f28c, !0x0, _0x2d5c6c)),
            void 0x0 === _0xc3cb5 && (_0xc3cb5 = _0x3c24d2(_0x25f28c, _0x34067a, _0x5a81c8)),
            'normal' === _0xc3cb5 && _0x34067a in _0x220b1a && (_0xc3cb5 = _0x220b1a[_0x34067a]),
            '' === _0x2d5c6c || _0x2d5c6c ? (_0xdb4f50 = parseFloat(_0xc3cb5),
            !0x0 === _0x2d5c6c || isFinite(_0xdb4f50) ? _0xdb4f50 || 0x0 : _0xc3cb5) : _0xc3cb5;
        }
    }),
    _0x5daaf9['each'](['height', 'width'], function(_0x442efb, _0x1b8bc9) {
        _0x5daaf9['cssHooks'][_0x1b8bc9] = {
            'get': function(_0x1c3ce6, _0x5517c0, _0x496216) {
                if (_0x5517c0)
                    return !_0x2eeb08['test'](_0x5daaf9['css'](_0x1c3ce6, 'display')) || _0x1c3ce6['getClientRects']()['length'] && _0x1c3ce6['getBoundingClientRect']()['width'] ? _0x5e8940(_0x1c3ce6, _0x1b8bc9, _0x496216) : _0x30f84a(_0x1c3ce6, _0x447c88, function() {
                        return _0x5e8940(_0x1c3ce6, _0x1b8bc9, _0x496216);
                    });
            },
            'set': function(_0x356884, _0x4770b1, _0x5c254f) {
                var _0x581e9c, _0x5177ee = _0x5c254f && _0x1471e7(_0x356884);
                return _0x5c254f = _0x5c254f && _0x4c8b0e(_0x356884, _0x1b8bc9, _0x5c254f, 'border-box' === _0x5daaf9['css'](_0x356884, 'boxSizing', !0x1, _0x5177ee), _0x5177ee),
                (_0x5c254f && (_0x581e9c = _0x3431b4['exec'](_0x4770b1)) && 'px' !== (_0x581e9c[0x3] || 'px') && (_0x356884['style'][_0x1b8bc9] = _0x4770b1,
                _0x4770b1 = _0x5daaf9['css'](_0x356884, _0x1b8bc9)),
                _0x24f37b(_0x356884, _0x4770b1, _0x5c254f));
            }
        };
    }),
    _0x5daaf9['cssHooks']['marginLeft'] = _0x2a4d2d(_0x1c56b9['reliableMarginLeft'], function(_0x3fcf89, _0x45d5ef) {
        if (_0x45d5ef)
            return (parseFloat(_0x3c24d2(_0x3fcf89, 'marginLeft')) || _0x3fcf89['getBoundingClientRect']()['left'] - _0x30f84a(_0x3fcf89, {
                'marginLeft': 0x0
            }, function() {
                return _0x3fcf89['getBoundingClientRect']()['left'];
            })) + 'px';
    }),
    _0x5daaf9['each']({
        'margin': '',
        'padding': '',
        'border': 'Width'
    }, function(_0x5b33e9, _0x4e3267) {
        _0x5daaf9['cssHooks'][_0x5b33e9 + _0x4e3267] = {
            'expand': function(_0xe7dc6) {
                var _0x5a951c = 0x0
                  , _0x4b578d = {};
                for (_0xe7dc6 = 'string' == typeof _0xe7dc6 ? _0xe7dc6['split']('\x20') : [_0xe7dc6]; 0x4 > _0x5a951c; _0x5a951c++)
                    _0x4b578d[_0x5b33e9 + _0x3cfee8[_0x5a951c] + _0x4e3267] = _0xe7dc6[_0x5a951c] || _0xe7dc6[_0x5a951c - 0x2] || _0xe7dc6[0x0];
                return _0x4b578d;
            }
        },
        _0x4ff4f2['test'](_0x5b33e9) || (_0x5daaf9['cssHooks'][_0x5b33e9 + _0x4e3267]['set'] = _0x24f37b);
    }),
    _0x5daaf9['fn']['extend']({
        'css': function(_0x2a4410, _0x3feeb7) {
            return _0x1807ec(this, function(_0x7d4cb7, _0x8fb700, _0x3aa708) {
                var _0x4e3f2c, _0x295fa9 = {}, _0x571696 = 0x0;
                if (Array['isArray'](_0x8fb700)) {
                    _0x3aa708 = _0x1471e7(_0x7d4cb7);
                    for (_0x4e3f2c = _0x8fb700['length']; _0x571696 < _0x4e3f2c; _0x571696++)
                        _0x295fa9[_0x8fb700[_0x571696]] = _0x5daaf9['css'](_0x7d4cb7, _0x8fb700[_0x571696], !0x1, _0x3aa708);
                    return _0x295fa9;
                }
                return void 0x0 !== _0x3aa708 ? _0x5daaf9['style'](_0x7d4cb7, _0x8fb700, _0x3aa708) : _0x5daaf9['css'](_0x7d4cb7, _0x8fb700);
            }, _0x2a4410, _0x3feeb7, 0x1 < arguments['length']);
        }
    }),
    _0x5daaf9['Tween'] = _0x4aa03e,
    _0x4aa03e['prototype'] = {
        'constructor': _0x4aa03e,
        'init': function(_0x67d952, _0x8a7956, _0x4d8401, _0xe27cf, _0x5ce61f, _0x5883b1) {
            this['elem'] = _0x67d952,
            this['prop'] = _0x4d8401,
            this['easing'] = _0x5ce61f || _0x5daaf9['easing']['_default'],
            this['options'] = _0x8a7956,
            this['start'] = this['now'] = this['cur'](),
            this['end'] = _0xe27cf,
            this['unit'] = _0x5883b1 || (_0x5daaf9['cssNumber'][_0x4d8401] ? '' : 'px');
        },
        'cur': function() {
            var _0x446e69 = _0x4aa03e['propHooks'][this['prop']];
            return _0x446e69 && _0x446e69['get'] ? _0x446e69['get'](this) : _0x4aa03e['propHooks']['_default']['get'](this);
        },
        'run': function(_0x8db392) {
            var _0x204c31, _0x3e058e = _0x4aa03e['propHooks'][this['prop']];
            return this['options']['duration'] ? this['pos'] = _0x204c31 = _0x5daaf9['easing'][this['easing']](_0x8db392, this['options']['duration'] * _0x8db392, 0x0, 0x1, this['options']['duration']) : this['pos'] = _0x204c31 = _0x8db392,
            this['now'] = (this['end'] - this['start']) * _0x204c31 + this['start'],
            this['options']['step'] && this['options']['step']['call'](this['elem'], this['now'], this),
            _0x3e058e && _0x3e058e['set'] ? _0x3e058e['set'](this) : _0x4aa03e['propHooks']['_default']['set'](this),
            this;
        }
    },
    _0x4aa03e['prototype']['init']['prototype'] = _0x4aa03e['prototype'],
    _0x4aa03e['propHooks'] = {
        '_default': {
            'get': function(_0x14a0fd) {
                var _0x33aa88;
                return 0x1 !== _0x14a0fd['elem']['nodeType'] || null != _0x14a0fd['elem'][_0x14a0fd['prop']] && null == _0x14a0fd['elem']['style'][_0x14a0fd['prop']] ? _0x14a0fd['elem'][_0x14a0fd['prop']] : (_0x33aa88 = _0x5daaf9['css'](_0x14a0fd['elem'], _0x14a0fd['prop'], ''),
                _0x33aa88 && 'auto' !== _0x33aa88 ? _0x33aa88 : 0x0);
            },
            'set': function(_0x3e3b1f) {
                _0x5daaf9['fx']['step'][_0x3e3b1f['prop']] ? _0x5daaf9['fx']['step'][_0x3e3b1f['prop']](_0x3e3b1f) : 0x1 !== _0x3e3b1f['elem']['nodeType'] || null == _0x3e3b1f['elem']['style'][_0x5daaf9['cssProps'][_0x3e3b1f['prop']]] && !_0x5daaf9['cssHooks'][_0x3e3b1f['prop']] ? _0x3e3b1f['elem'][_0x3e3b1f['prop']] = _0x3e3b1f['now'] : _0x5daaf9['style'](_0x3e3b1f['elem'], _0x3e3b1f['prop'], _0x3e3b1f['now'] + _0x3e3b1f['unit']);
            }
        }
    },
    _0x4aa03e['propHooks']['scrollTop'] = _0x4aa03e['propHooks']['scrollLeft'] = {
        'set': function(_0x4a3bb8) {
            _0x4a3bb8['elem']['nodeType'] && _0x4a3bb8['elem']['parentNode'] && (_0x4a3bb8['elem'][_0x4a3bb8['prop']] = _0x4a3bb8['now']);
        }
    },
    _0x5daaf9['easing'] = {
        'linear': function(_0x28181c) {
            return _0x28181c;
        },
        'swing': function(_0x3400ec) {
            return 0.5 - Math['cos'](_0x3400ec * Math['PI']) / 0x2;
        },
        '_default': 'swing'
    },
    _0x5daaf9['fx'] = _0x4aa03e['prototype']['init'],
    _0x5daaf9['fx']['step'] = {};
    var _0x2174d0, _0x14262a, _0x3b2213 = /^(?:toggle|show|hide)$/, _0x50f2ab = /queueHooks$/;
    _0x5daaf9['Animation'] = _0x5daaf9['extend'](_0x53aba3, {
        'tweeners': {
            '*': [function(_0x1d106c, _0x53cee8) {
                var _0x5c3eb8 = this['createTween'](_0x1d106c, _0x53cee8);
                return _0x53dc82(_0x5c3eb8['elem'], _0x1d106c, _0x3431b4['exec'](_0x53cee8), _0x5c3eb8),
                _0x5c3eb8;
            }
            ]
        },
        'tweener': function(_0x2b0370, _0x41135f) {
            _0x5daaf9['isFunction'](_0x2b0370) ? (_0x41135f = _0x2b0370,
            _0x2b0370 = ['*']) : _0x2b0370 = _0x2b0370['match'](_0x182fa8);
            for (var _0x11ee7e, _0x21be2b = 0x0, _0x13edbc = _0x2b0370['length']; _0x21be2b < _0x13edbc; _0x21be2b++)
                _0x11ee7e = _0x2b0370[_0x21be2b],
                _0x53aba3['tweeners'][_0x11ee7e] = _0x53aba3['tweeners'][_0x11ee7e] || [],
                _0x53aba3['tweeners'][_0x11ee7e]['unshift'](_0x41135f);
        },
        'prefilters': [function(_0x36ad60, _0x39b2af, _0x178b0b) {
            var _0x2df7ad, _0x1ba677, _0x4bb685, _0x374c0a, _0x5686c6, _0x4e3bb2, _0x4c59f5, _0x498e16, _0x4ba71b = 'width'in _0x39b2af || 'height'in _0x39b2af, _0x1119d0 = this, _0x24e58e = {}, _0x3d1211 = _0x36ad60['style'], _0x4e3b49 = _0x36ad60['nodeType'] && _0x3ba294(_0x36ad60), _0x37a523 = _0x244154['get'](_0x36ad60, 'fxshow');
            _0x178b0b['queue'] || (_0x374c0a = _0x5daaf9['_queueHooks'](_0x36ad60, 'fx'),
            null == _0x374c0a['unqueued'] && (_0x374c0a['unqueued'] = 0x0,
            _0x5686c6 = _0x374c0a['empty']['fire'],
            _0x374c0a['empty']['fire'] = function() {
                _0x374c0a['unqueued'] || _0x5686c6();
            }
            ),
            _0x374c0a['unqueued']++,
            _0x1119d0['always'](function() {
                _0x1119d0['always'](function() {
                    _0x374c0a['unqueued']--,
                    _0x5daaf9['queue'](_0x36ad60, 'fx')['length'] || _0x374c0a['empty']['fire']();
                });
            }));
            for (_0x2df7ad in _0x39b2af)
                if (_0x1ba677 = _0x39b2af[_0x2df7ad],
                _0x3b2213['test'](_0x1ba677)) {
                    if (delete _0x39b2af[_0x2df7ad],
                    _0x4bb685 = _0x4bb685 || 'toggle' === _0x1ba677,
                    _0x1ba677 === (_0x4e3b49 ? 'hide' : 'show')) {
                        if ('show' !== _0x1ba677 || !_0x37a523 || void 0x0 === _0x37a523[_0x2df7ad])
                            continue;
                        _0x4e3b49 = !0x0;
                    }
                    _0x24e58e[_0x2df7ad] = _0x37a523 && _0x37a523[_0x2df7ad] || _0x5daaf9['style'](_0x36ad60, _0x2df7ad);
                }
            if (_0x4e3bb2 = !_0x5daaf9['isEmptyObject'](_0x39b2af),
            _0x4e3bb2 || !_0x5daaf9['isEmptyObject'](_0x24e58e))
                for (_0x2df7ad in (_0x4ba71b && 0x1 === _0x36ad60['nodeType'] && (_0x178b0b['overflow'] = [_0x3d1211['overflow'], _0x3d1211['overflowX'], _0x3d1211['overflowY']],
                _0x4c59f5 = _0x37a523 && _0x37a523['display'],
                null == _0x4c59f5 && (_0x4c59f5 = _0x244154['get'](_0x36ad60, 'display')),
                _0x498e16 = _0x5daaf9['css'](_0x36ad60, 'display'),
                'none' === _0x498e16 && (_0x4c59f5 ? _0x498e16 = _0x4c59f5 : (_0x5e22ab([_0x36ad60], !0x0),
                _0x4c59f5 = _0x36ad60['style']['display'] || _0x4c59f5,
                _0x498e16 = _0x5daaf9['css'](_0x36ad60, 'display'),
                _0x5e22ab([_0x36ad60]))),
                ('inline' === _0x498e16 || 'inline-block' === _0x498e16 && null != _0x4c59f5) && 'none' === _0x5daaf9['css'](_0x36ad60, 'float') && (_0x4e3bb2 || (_0x1119d0['done'](function() {
                    _0x3d1211['display'] = _0x4c59f5;
                }),
                null == _0x4c59f5 && (_0x498e16 = _0x3d1211['display'],
                _0x4c59f5 = 'none' === _0x498e16 ? '' : _0x498e16)),
                _0x3d1211['display'] = 'inline-block')),
                _0x178b0b['overflow'] && (_0x3d1211['overflow'] = 'hidden',
                _0x1119d0['always'](function() {
                    _0x3d1211['overflow'] = _0x178b0b['overflow'][0x0],
                    _0x3d1211['overflowX'] = _0x178b0b['overflow'][0x1],
                    _0x3d1211['overflowY'] = _0x178b0b['overflow'][0x2];
                })),
                _0x4e3bb2 = !0x1,
                _0x24e58e))
                    _0x4e3bb2 || (_0x37a523 ? 'hidden'in _0x37a523 && (_0x4e3b49 = _0x37a523['hidden']) : _0x37a523 = _0x244154['access'](_0x36ad60, 'fxshow', {
                        'display': _0x4c59f5
                    }),
                    _0x4bb685 && (_0x37a523['hidden'] = !_0x4e3b49),
                    _0x4e3b49 && _0x5e22ab([_0x36ad60], !0x0),
                    _0x1119d0['done'](function() {
                        _0x4e3b49 || _0x5e22ab([_0x36ad60]),
                        _0x244154['remove'](_0x36ad60, 'fxshow');
                        for (_0x2df7ad in _0x24e58e)
                            _0x5daaf9['style'](_0x36ad60, _0x2df7ad, _0x24e58e[_0x2df7ad]);
                    })),
                    _0x4e3bb2 = _0x428955(_0x4e3b49 ? _0x37a523[_0x2df7ad] : 0x0, _0x2df7ad, _0x1119d0),
                    _0x2df7ad in _0x37a523 || (_0x37a523[_0x2df7ad] = _0x4e3bb2['start'],
                    _0x4e3b49 && (_0x4e3bb2['end'] = _0x4e3bb2['start'],
                    _0x4e3bb2['start'] = 0x0));
        }
        ],
        'prefilter': function(_0x50d4a6, _0xc900c3) {
            _0xc900c3 ? _0x53aba3['prefilters']['unshift'](_0x50d4a6) : _0x53aba3['prefilters']['push'](_0x50d4a6);
        }
    }),
    _0x5daaf9['speed'] = function(_0x705065, _0x579291, _0xe62155) {
        var _0x3f4348 = _0x705065 && 'object' == typeof _0x705065 ? _0x5daaf9['extend']({}, _0x705065) : {
            'complete': _0xe62155 || !_0xe62155 && _0x579291 || _0x5daaf9['isFunction'](_0x705065) && _0x705065,
            'duration': _0x705065,
            'easing': _0xe62155 && _0x579291 || _0x579291 && !_0x5daaf9['isFunction'](_0x579291) && _0x579291
        };
        return _0x5daaf9['fx']['off'] ? _0x3f4348['duration'] = 0x0 : 'number' != typeof _0x3f4348['duration'] && (_0x3f4348['duration']in _0x5daaf9['fx']['speeds'] ? _0x3f4348['duration'] = _0x5daaf9['fx']['speeds'][_0x3f4348['duration']] : _0x3f4348['duration'] = _0x5daaf9['fx']['speeds']['_default']),
        null != _0x3f4348['queue'] && !0x0 !== _0x3f4348['queue'] || (_0x3f4348['queue'] = 'fx'),
        _0x3f4348['old'] = _0x3f4348['complete'],
        _0x3f4348['complete'] = function() {
            _0x5daaf9['isFunction'](_0x3f4348['old']) && _0x3f4348['old']['call'](this),
            _0x3f4348['queue'] && _0x5daaf9['dequeue'](this, _0x3f4348['queue']);
        }
        ,
        _0x3f4348;
    }
    ,
    _0x5daaf9['fn']['extend']({
        'fadeTo': function(_0x44a95d, _0x4811e9, _0x1eacf6, _0x30dcbc) {
            return this['filter'](_0x3ba294)['css']('opacity', 0x0)['show']()['end']()['animate']({
                'opacity': _0x4811e9
            }, _0x44a95d, _0x1eacf6, _0x30dcbc);
        },
        'animate': function(_0x20afd1, _0x427469, _0x1b3f45, _0x4aa6dc) {
            var _0x295a25 = _0x5daaf9['isEmptyObject'](_0x20afd1)
              , _0x54d55c = _0x5daaf9['speed'](_0x427469, _0x1b3f45, _0x4aa6dc);
            return _0x427469 = function() {
                var _0x674b90 = _0x53aba3(this, _0x5daaf9['extend']({}, _0x20afd1), _0x54d55c);
                (_0x295a25 || _0x244154['get'](this, 'finish')) && _0x674b90['stop'](!0x0);
            }
            ,
            (_0x427469['finish'] = _0x427469,
            _0x295a25 || !0x1 === _0x54d55c['queue'] ? this['each'](_0x427469) : this['queue'](_0x54d55c['queue'], _0x427469));
        },
        'stop': function(_0x8e2d8a, _0x268ac8, _0x12a264) {
            var _0x5235fd = function(_0x3e272d) {
                var _0x3e7a7e = _0x3e272d['stop'];
                delete _0x3e272d['stop'],
                _0x3e7a7e(_0x12a264);
            };
            return 'string' != typeof _0x8e2d8a && (_0x12a264 = _0x268ac8,
            _0x268ac8 = _0x8e2d8a,
            _0x8e2d8a = void 0x0),
            _0x268ac8 && !0x1 !== _0x8e2d8a && this['queue'](_0x8e2d8a || 'fx', []),
            this['each'](function() {
                var _0x3ab117 = !0x0
                  , _0x25e5d1 = null != _0x8e2d8a && _0x8e2d8a + 'queueHooks'
                  , _0x391006 = _0x5daaf9['timers']
                  , _0x266971 = _0x244154['get'](this);
                if (_0x25e5d1)
                    _0x266971[_0x25e5d1] && _0x266971[_0x25e5d1]['stop'] && _0x5235fd(_0x266971[_0x25e5d1]);
                else
                    for (_0x25e5d1 in _0x266971)
                        _0x266971[_0x25e5d1] && _0x266971[_0x25e5d1]['stop'] && _0x50f2ab['test'](_0x25e5d1) && _0x5235fd(_0x266971[_0x25e5d1]);
                for (_0x25e5d1 = _0x391006['length']; _0x25e5d1--; )
                    _0x391006[_0x25e5d1]['elem'] !== this || null != _0x8e2d8a && _0x391006[_0x25e5d1]['queue'] !== _0x8e2d8a || (_0x391006[_0x25e5d1]['anim']['stop'](_0x12a264),
                    _0x3ab117 = !0x1,
                    _0x391006['splice'](_0x25e5d1, 0x1));
                !_0x3ab117 && _0x12a264 || _0x5daaf9['dequeue'](this, _0x8e2d8a);
            });
        },
        'finish': function(_0x3164bb) {
            return !0x1 !== _0x3164bb && (_0x3164bb = _0x3164bb || 'fx'),
            this['each'](function() {
                var _0x59376c, _0x2d5a50 = _0x244154['get'](this), _0x13d512 = _0x2d5a50[_0x3164bb + 'queue'];
                _0x59376c = _0x2d5a50[_0x3164bb + 'queueHooks'];
                var _0x5e15ea = _0x5daaf9['timers']
                  , _0x2a6b0b = _0x13d512 ? _0x13d512['length'] : 0x0;
                _0x2d5a50['finish'] = !0x0,
                _0x5daaf9['queue'](this, _0x3164bb, []),
                _0x59376c && _0x59376c['stop'] && _0x59376c['stop']['call'](this, !0x0);
                for (_0x59376c = _0x5e15ea['length']; _0x59376c--; )
                    _0x5e15ea[_0x59376c]['elem'] === this && _0x5e15ea[_0x59376c]['queue'] === _0x3164bb && (_0x5e15ea[_0x59376c]['anim']['stop'](!0x0),
                    _0x5e15ea['splice'](_0x59376c, 0x1));
                for (_0x59376c = 0x0; _0x59376c < _0x2a6b0b; _0x59376c++)
                    _0x13d512[_0x59376c] && _0x13d512[_0x59376c]['finish'] && _0x13d512[_0x59376c]['finish']['call'](this);
                delete _0x2d5a50['finish'];
            });
        }
    }),
    _0x5daaf9['each'](['toggle', 'show', 'hide'], function(_0x190979, _0x37a4ae) {
        var _0x2ce334 = _0x5daaf9['fn'][_0x37a4ae];
        _0x5daaf9['fn'][_0x37a4ae] = function(_0xc63112, _0x1e23c7, _0x2f2a83) {
            return null == _0xc63112 || 'boolean' == typeof _0xc63112 ? _0x2ce334['apply'](this, arguments) : this['animate'](_0x47ce33(_0x37a4ae, !0x0), _0xc63112, _0x1e23c7, _0x2f2a83);
        }
        ;
    }),
    _0x5daaf9['each']({
        'slideDown': _0x47ce33('show'),
        'slideUp': _0x47ce33('hide'),
        'slideToggle': _0x47ce33('toggle'),
        'fadeIn': {
            'opacity': 'show'
        },
        'fadeOut': {
            'opacity': 'hide'
        },
        'fadeToggle': {
            'opacity': 'toggle'
        }
    }, function(_0xd15697, _0x53db12) {
        _0x5daaf9['fn'][_0xd15697] = function(_0x3007a8, _0x59d1d0, _0x441548) {
            return this['animate'](_0x53db12, _0x3007a8, _0x59d1d0, _0x441548);
        }
        ;
    }),
    _0x5daaf9['timers'] = [],
    _0x5daaf9['fx']['tick'] = function() {
        var _0x21a4a8, _0x52166a = 0x0, _0x2b5f51 = _0x5daaf9['timers'];
        for (_0x2174d0 = _0x5daaf9['now'](); _0x52166a < _0x2b5f51['length']; _0x52166a++)
            _0x21a4a8 = _0x2b5f51[_0x52166a],
            _0x21a4a8() || _0x2b5f51[_0x52166a] !== _0x21a4a8 || _0x2b5f51['splice'](_0x52166a--, 0x1);
        _0x2b5f51['length'] || _0x5daaf9['fx']['stop'](),
        _0x2174d0 = void 0x0;
    }
    ,
    _0x5daaf9['fx']['timer'] = function(_0xf81965) {
        _0x5daaf9['timers']['push'](_0xf81965),
        _0x5daaf9['fx']['start']();
    }
    ,
    _0x5daaf9['fx']['interval'] = 0xd,
    _0x5daaf9['fx']['start'] = function() {
        _0x14262a || (_0x14262a = !0x0,
        _0x170fcf());
    }
    ,
    _0x5daaf9['fx']['stop'] = function() {
        _0x14262a = null;
    }
    ,
    _0x5daaf9['fx']['speeds'] = {
        'slow': 0x258,
        'fast': 0xc8,
        '_default': 0x190
    },
    _0x5daaf9['fn']['delay'] = function(_0x4839b4, _0x26d572) {
        return _0x4839b4 = _0x5daaf9['fx'] ? _0x5daaf9['fx']['speeds'][_0x4839b4] || _0x4839b4 : _0x4839b4,
        _0x26d572 = _0x26d572 || 'fx',
        this['queue'](_0x26d572, function(_0x16548a, _0x2c02e0) {
            var _0x2a50a4 = _0x5768c8['setTimeout'](_0x16548a, _0x4839b4);
            _0x2c02e0['stop'] = function() {
                _0x5768c8['clearTimeout'](_0x2a50a4);
            }
            ;
        });
    }
    ;
    var _0x80eb61 = _0x22efbf['createElement']('input')
      , _0x1f064b = _0x22efbf['createElement']('select')['appendChild'](_0x22efbf['createElement']('option'));
    _0x80eb61['type'] = 'checkbox',
    _0x1c56b9['checkOn'] = '' !== _0x80eb61['value'],
    _0x1c56b9['optSelected'] = _0x1f064b['selected'],
    _0x80eb61 = _0x22efbf['createElement']('input'),
    _0x80eb61['value'] = 't',
    _0x80eb61['type'] = 'radio',
    _0x1c56b9['radioValue'] = 't' === _0x80eb61['value'];
    var _0x2810bf, _0x3cdd65 = _0x5daaf9['expr']['attrHandle'];
    _0x5daaf9['fn']['extend']({
        'attr': function(_0x464ed7, _0xc76ae3) {
            return _0x1807ec(this, _0x5daaf9['attr'], _0x464ed7, _0xc76ae3, 0x1 < arguments['length']);
        },
        'removeAttr': function(_0x55990c) {
            return this['each'](function() {
                _0x5daaf9['removeAttr'](this, _0x55990c);
            });
        }
    }),
    _0x5daaf9['extend']({
        'attr': function(_0x3bed00, _0x312b74, _0x4c5653) {
            var _0x2d58ac, _0x5149c8, _0x5b0093 = _0x3bed00['nodeType'];
            if (0x3 !== _0x5b0093 && 0x8 !== _0x5b0093 && 0x2 !== _0x5b0093)
                return 'undefined' == typeof _0x3bed00['getAttribute'] ? _0x5daaf9['prop'](_0x3bed00, _0x312b74, _0x4c5653) : (0x1 === _0x5b0093 && _0x5daaf9['isXMLDoc'](_0x3bed00) || (_0x5149c8 = _0x5daaf9['attrHooks'][_0x312b74['toLowerCase']()] || (_0x5daaf9['expr']['match']['bool']['test'](_0x312b74) ? _0x2810bf : void 0x0)),
                void 0x0 !== _0x4c5653 ? null === _0x4c5653 ? void _0x5daaf9['removeAttr'](_0x3bed00, _0x312b74) : _0x5149c8 && 'set'in _0x5149c8 && void 0x0 !== (_0x2d58ac = _0x5149c8['set'](_0x3bed00, _0x4c5653, _0x312b74)) ? _0x2d58ac : (_0x3bed00['setAttribute'](_0x312b74, _0x4c5653 + ''),
                _0x4c5653) : _0x5149c8 && 'get'in _0x5149c8 && null !== (_0x2d58ac = _0x5149c8['get'](_0x3bed00, _0x312b74)) ? _0x2d58ac : (_0x2d58ac = _0x5daaf9['find']['attr'](_0x3bed00, _0x312b74),
                null == _0x2d58ac ? void 0x0 : _0x2d58ac));
        },
        'attrHooks': {
            'type': {
                'set': function(_0x1cd507, _0x3bd832) {
                    if (!_0x1c56b9['radioValue'] && 'radio' === _0x3bd832 && _0x4bed0e(_0x1cd507, 'input')) {
                        var _0x26447a = _0x1cd507['value'];
                        return _0x1cd507['setAttribute']('type', _0x3bd832),
                        _0x26447a && (_0x1cd507['value'] = _0x26447a),
                        _0x3bd832;
                    }
                }
            }
        },
        'removeAttr': function(_0x175a15, _0x3cfde5) {
            var _0x57943e, _0x37660c = 0x0, _0x1ba304 = _0x3cfde5 && _0x3cfde5['match'](_0x182fa8);
            if (_0x1ba304 && 0x1 === _0x175a15['nodeType'])
                for (; _0x57943e = _0x1ba304[_0x37660c++]; )
                    _0x175a15['removeAttribute'](_0x57943e);
        }
    }),
    _0x2810bf = {
        'set': function(_0x30a1ae, _0x531a68, _0x18f981) {
            return !0x1 === _0x531a68 ? _0x5daaf9['removeAttr'](_0x30a1ae, _0x18f981) : _0x30a1ae['setAttribute'](_0x18f981, _0x18f981),
            _0x18f981;
        }
    },
    _0x5daaf9['each'](_0x5daaf9['expr']['match']['bool']['source']['match'](/\w+/g), function(_0x3be7ba, _0x5e3850) {
        var _0x10aa8e = _0x3cdd65[_0x5e3850] || _0x5daaf9['find']['attr'];
        _0x3cdd65[_0x5e3850] = function(_0x9b7792, _0x3a8439, _0x442b5d) {
            var _0x465a04, _0x5352a1, _0x55de6b = _0x3a8439['toLowerCase']();
            return _0x442b5d || (_0x5352a1 = _0x3cdd65[_0x55de6b],
            _0x3cdd65[_0x55de6b] = _0x465a04,
            _0x465a04 = null != _0x10aa8e(_0x9b7792, _0x3a8439, _0x442b5d) ? _0x55de6b : null,
            _0x3cdd65[_0x55de6b] = _0x5352a1),
            _0x465a04;
        }
        ;
    });
    var _0x121b80 = /^(?:input|select|textarea|button)$/i
      , _0x534055 = /^(?:a|area)$/i;
    _0x5daaf9['fn']['extend']({
        'prop': function(_0x5b7857, _0x3a5405) {
            return _0x1807ec(this, _0x5daaf9['prop'], _0x5b7857, _0x3a5405, 0x1 < arguments['length']);
        },
        'removeProp': function(_0x47c8ac) {
            return this['each'](function() {
                delete this[_0x5daaf9['propFix'][_0x47c8ac] || _0x47c8ac];
            });
        }
    }),
    _0x5daaf9['extend']({
        'prop': function(_0x10c278, _0x4b1c83, _0x248897) {
            var _0x335230, _0x3fa540, _0x1edf54 = _0x10c278['nodeType'];
            if (0x3 !== _0x1edf54 && 0x8 !== _0x1edf54 && 0x2 !== _0x1edf54)
                return 0x1 === _0x1edf54 && _0x5daaf9['isXMLDoc'](_0x10c278) || (_0x4b1c83 = _0x5daaf9['propFix'][_0x4b1c83] || _0x4b1c83,
                _0x3fa540 = _0x5daaf9['propHooks'][_0x4b1c83]),
                void 0x0 !== _0x248897 ? _0x3fa540 && 'set'in _0x3fa540 && void 0x0 !== (_0x335230 = _0x3fa540['set'](_0x10c278, _0x248897, _0x4b1c83)) ? _0x335230 : _0x10c278[_0x4b1c83] = _0x248897 : _0x3fa540 && 'get'in _0x3fa540 && null !== (_0x335230 = _0x3fa540['get'](_0x10c278, _0x4b1c83)) ? _0x335230 : _0x10c278[_0x4b1c83];
        },
        'propHooks': {
            'tabIndex': {
                'get': function(_0xbe5ae1) {
                    var _0x1b9599 = _0x5daaf9['find']['attr'](_0xbe5ae1, 'tabindex');
                    return _0x1b9599 ? parseInt(_0x1b9599, 0xa) : _0x121b80['test'](_0xbe5ae1['nodeName']) || _0x534055['test'](_0xbe5ae1['nodeName']) && _0xbe5ae1['href'] ? 0x0 : -0x1;
                }
            }
        },
        'propFix': {
            'for': 'htmlFor',
            'class': 'className'
        }
    }),
    _0x1c56b9['optSelected'] || (_0x5daaf9['propHooks']['selected'] = {
        'get': function(_0x2f6b88) {
            return _0x2f6b88 = _0x2f6b88['parentNode'],
            (_0x2f6b88 && _0x2f6b88['parentNode'] && _0x2f6b88['parentNode']['selectedIndex'],
            null);
        },
        'set': function(_0x415da0) {
            _0x415da0 = _0x415da0['parentNode'],
            _0x415da0 && (_0x415da0['selectedIndex'],
            _0x415da0['parentNode'] && _0x415da0['parentNode']['selectedIndex']);
        }
    }),
    _0x5daaf9['each']('tabIndex\x20readOnly\x20maxLength\x20cellSpacing\x20cellPadding\x20rowSpan\x20colSpan\x20useMap\x20frameBorder\x20contentEditable'['split']('\x20'), function() {
        _0x5daaf9['propFix'][this['toLowerCase']()] = this;
    }),
    _0x5daaf9['fn']['extend']({
        'addClass': function(_0x4bf1d8) {
            var _0x1f7ab9, _0x3c3a73, _0x4dbd42, _0x10fed5, _0x26e8a4, _0x5763cd, _0x2c8c1e = 0x0;
            if (_0x5daaf9['isFunction'](_0x4bf1d8))
                return this['each'](function(_0x20923c) {
                    _0x5daaf9(this)['addClass'](_0x4bf1d8['call'](this, _0x20923c, _0x455d42(this)));
                });
            if ('string' == typeof _0x4bf1d8 && _0x4bf1d8)
                for (_0x1f7ab9 = _0x4bf1d8['match'](_0x182fa8) || []; _0x3c3a73 = this[_0x2c8c1e++]; )
                    if (_0x10fed5 = _0x455d42(_0x3c3a73),
                    _0x4dbd42 = 0x1 === _0x3c3a73['nodeType'] && '\x20' + _0x553627(_0x10fed5) + '\x20') {
                        for (_0x5763cd = 0x0; _0x26e8a4 = _0x1f7ab9[_0x5763cd++]; )
                            0x0 > _0x4dbd42['indexOf']('\x20' + _0x26e8a4 + '\x20') && (_0x4dbd42 += _0x26e8a4 + '\x20');
                        _0x4dbd42 = _0x553627(_0x4dbd42),
                        _0x10fed5 !== _0x4dbd42 && _0x3c3a73['setAttribute']('class', _0x4dbd42);
                    }
            return this;
        },
        'removeClass': function(_0x32c933) {
            var _0x5046c1, _0x1d9494, _0x15b3c8, _0x4592bb, _0x3357a5, _0x588a03, _0x2cc36b = 0x0;
            if (_0x5daaf9['isFunction'](_0x32c933))
                return this['each'](function(_0x2b81a2) {
                    _0x5daaf9(this)['removeClass'](_0x32c933['call'](this, _0x2b81a2, _0x455d42(this)));
                });
            if (!arguments['length'])
                return this['attr']('class', '');
            if ('string' == typeof _0x32c933 && _0x32c933)
                for (_0x5046c1 = _0x32c933['match'](_0x182fa8) || []; _0x1d9494 = this[_0x2cc36b++]; )
                    if (_0x4592bb = _0x455d42(_0x1d9494),
                    _0x15b3c8 = 0x1 === _0x1d9494['nodeType'] && '\x20' + _0x553627(_0x4592bb) + '\x20') {
                        for (_0x588a03 = 0x0; _0x3357a5 = _0x5046c1[_0x588a03++]; )
                            for (; -0x1 < _0x15b3c8['indexOf']('\x20' + _0x3357a5 + '\x20'); )
                                _0x15b3c8 = _0x15b3c8['replace']('\x20' + _0x3357a5 + '\x20', '\x20');
                        _0x15b3c8 = _0x553627(_0x15b3c8),
                        _0x4592bb !== _0x15b3c8 && _0x1d9494['setAttribute']('class', _0x15b3c8);
                    }
            return this;
        },
        'toggleClass': function(_0x282a54, _0x4a6b72) {
            var _0x3ce1b4 = typeof _0x282a54;
            return 'boolean' == typeof _0x4a6b72 && 'string' === _0x3ce1b4 ? _0x4a6b72 ? this['addClass'](_0x282a54) : this['removeClass'](_0x282a54) : _0x5daaf9['isFunction'](_0x282a54) ? this['each'](function(_0x46600f) {
                _0x5daaf9(this)['toggleClass'](_0x282a54['call'](this, _0x46600f, _0x455d42(this), _0x4a6b72), _0x4a6b72);
            }) : this['each'](function() {
                var _0x1d3cf0, _0x224816, _0x2307b1, _0x532c82;
                if ('string' === _0x3ce1b4) {
                    _0x224816 = 0x0,
                    _0x2307b1 = _0x5daaf9(this);
                    for (_0x532c82 = _0x282a54['match'](_0x182fa8) || []; _0x1d3cf0 = _0x532c82[_0x224816++]; )
                        _0x2307b1['hasClass'](_0x1d3cf0) ? _0x2307b1['removeClass'](_0x1d3cf0) : _0x2307b1['addClass'](_0x1d3cf0);
                } else
                    void 0x0 !== _0x282a54 && 'boolean' !== _0x3ce1b4 || (_0x1d3cf0 = _0x455d42(this),
                    _0x1d3cf0 && _0x244154['set'](this, '__className__', _0x1d3cf0),
                    this['setAttribute'] && this['setAttribute']('class', _0x1d3cf0 || !0x1 === _0x282a54 ? '' : _0x244154['get'](this, '__className__') || ''));
            });
        },
        'hasClass': function(_0x3743c9) {
            var _0x37d724, _0x40f843 = 0x0;
            for (_0x3743c9 = '\x20' + _0x3743c9 + '\x20'; _0x37d724 = this[_0x40f843++]; )
                if (0x1 === _0x37d724['nodeType'] && -0x1 < ('\x20' + _0x553627(_0x455d42(_0x37d724)) + '\x20')['indexOf'](_0x3743c9))
                    return !0x0;
            return !0x1;
        }
    });
    var _0xb70027 = /\r/g;
    _0x5daaf9['fn']['extend']({
        'val': function(_0x8bc224) {
            var _0x56ed17, _0xf99749, _0x44ca24, _0x570523 = this[0x0];
            if (arguments['length'])
                return _0x44ca24 = _0x5daaf9['isFunction'](_0x8bc224),
                this['each'](function(_0x47af2e) {
                    var _0x339081;
                    0x1 === this['nodeType'] && (_0x339081 = _0x44ca24 ? _0x8bc224['call'](this, _0x47af2e, _0x5daaf9(this)['val']()) : _0x8bc224,
                    null == _0x339081 ? _0x339081 = '' : 'number' == typeof _0x339081 ? _0x339081 += '' : Array['isArray'](_0x339081) && (_0x339081 = _0x5daaf9['map'](_0x339081, function(_0x402cc3) {
                        return null == _0x402cc3 ? '' : _0x402cc3 + '';
                    })),
                    _0x56ed17 = _0x5daaf9['valHooks'][this['type']] || _0x5daaf9['valHooks'][this['nodeName']['toLowerCase']()],
                    _0x56ed17 && 'set'in _0x56ed17 && void 0x0 !== _0x56ed17['set'](this, _0x339081, 'value') || (this['value'] = _0x339081));
                });
            if (_0x570523)
                return _0x56ed17 = _0x5daaf9['valHooks'][_0x570523['type']] || _0x5daaf9['valHooks'][_0x570523['nodeName']['toLowerCase']()],
                _0x56ed17 && 'get'in _0x56ed17 && void 0x0 !== (_0xf99749 = _0x56ed17['get'](_0x570523, 'value')) ? _0xf99749 : (_0xf99749 = _0x570523['value'],
                'string' == typeof _0xf99749 ? _0xf99749['replace'](_0xb70027, '') : null == _0xf99749 ? '' : _0xf99749);
        }
    }),
    _0x5daaf9['extend']({
        'valHooks': {
            'option': {
                'get': function(_0x537801) {
                    var _0x4af5d5 = _0x5daaf9['find']['attr'](_0x537801, 'value');
                    return null != _0x4af5d5 ? _0x4af5d5 : _0x553627(_0x5daaf9['text'](_0x537801));
                }
            },
            'select': {
                'get': function(_0x5460df) {
                    var _0x42ba80, _0x309e78, _0x4475b3 = _0x5460df['options'], _0x53310b = _0x5460df['selectedIndex'], _0x3d5a9c = 'select-one' === _0x5460df['type'], _0x698ec9 = _0x3d5a9c ? null : [], _0x480add = _0x3d5a9c ? _0x53310b + 0x1 : _0x4475b3['length'];
                    for (_0x309e78 = 0x0 > _0x53310b ? _0x480add : _0x3d5a9c ? _0x53310b : 0x0; _0x309e78 < _0x480add; _0x309e78++)
                        if (_0x42ba80 = _0x4475b3[_0x309e78],
                        (_0x42ba80['selected'] || _0x309e78 === _0x53310b) && !_0x42ba80['disabled'] && (!_0x42ba80['parentNode']['disabled'] || !_0x4bed0e(_0x42ba80['parentNode'], 'optgroup'))) {
                            if (_0x5460df = _0x5daaf9(_0x42ba80)['val'](),
                            _0x3d5a9c)
                                return _0x5460df;
                            _0x698ec9['push'](_0x5460df);
                        }
                    return _0x698ec9;
                },
                'set': function(_0x355423, _0x98874e) {
                    for (var _0x35f70a, _0x2e9894, _0x553525 = _0x355423['options'], _0x5ad69d = _0x5daaf9['makeArray'](_0x98874e), _0x46692f = _0x553525['length']; _0x46692f--; )
                        _0x2e9894 = _0x553525[_0x46692f],
                        (_0x2e9894['selected'] = -0x1 < _0x5daaf9['inArray'](_0x5daaf9['valHooks']['option']['get'](_0x2e9894), _0x5ad69d)) && (_0x35f70a = !0x0);
                    return _0x35f70a || (_0x355423['selectedIndex'] = -0x1),
                    _0x5ad69d;
                }
            }
        }
    }),
    _0x5daaf9['each'](['radio', 'checkbox'], function() {
        _0x5daaf9['valHooks'][this] = {
            'set': function(_0x2334e, _0x4f6dd8) {
                if (Array['isArray'](_0x4f6dd8))
                    return _0x2334e['checked'] = -0x1 < _0x5daaf9['inArray'](_0x5daaf9(_0x2334e)['val'](), _0x4f6dd8);
            }
        },
        _0x1c56b9['checkOn'] || (_0x5daaf9['valHooks'][this]['get'] = function(_0x4b5071) {
            return null === _0x4b5071['getAttribute']('value') ? 'on' : _0x4b5071['value'];
        }
        );
    });
    var _0x5f53e9 = /^(?:focusinfocus|focusoutblur)$/;
    _0x5daaf9['extend'](_0x5daaf9['event'], {
        'trigger': function(_0x4eb77b, _0x4e1ad9, _0x28184d, _0x57fe7b) {
            var _0x34cccd, _0x3d49bc, _0x3ec489, _0x3accf9, _0x3d4bd4, _0x2cf2b2, _0x157cbc, _0x556550 = [_0x28184d || _0x22efbf], _0xee0630 = _0x4c3b51['call'](_0x4eb77b, 'type') ? _0x4eb77b['type'] : _0x4eb77b;
            _0x34cccd = _0x4c3b51['call'](_0x4eb77b, 'namespace') ? _0x4eb77b['namespace']['split']('.') : [];
            if (_0x3d49bc = _0x3ec489 = _0x28184d = _0x28184d || _0x22efbf,
            0x3 !== _0x28184d['nodeType'] && 0x8 !== _0x28184d['nodeType'] && !_0x5f53e9['test'](_0xee0630 + _0x5daaf9['event']['triggered']) && (-0x1 < _0xee0630['indexOf']('.') && (_0x34cccd = _0xee0630['split']('.'),
            _0xee0630 = _0x34cccd['shift'](),
            _0x34cccd['sort']()),
            _0x3d4bd4 = 0x0 > _0xee0630['indexOf'](':') && 'on' + _0xee0630,
            _0x4eb77b = _0x4eb77b[_0x5daaf9['expando']] ? _0x4eb77b : new _0x5daaf9['Event'](_0xee0630,'object' == typeof _0x4eb77b && _0x4eb77b),
            _0x4eb77b['isTrigger'] = _0x57fe7b ? 0x2 : 0x3,
            _0x4eb77b['namespace'] = _0x34cccd['join']('.'),
            _0x4eb77b['rnamespace'] = _0x4eb77b['namespace'] ? RegExp('(^|\x5c.)' + _0x34cccd['join']('\x5c.(?:.*\x5c.|)') + '(\x5c.|$)') : null,
            _0x4eb77b['result'] = void 0x0,
            _0x4eb77b['target'] || (_0x4eb77b['target'] = _0x28184d),
            _0x4e1ad9 = null == _0x4e1ad9 ? [_0x4eb77b] : _0x5daaf9['makeArray'](_0x4e1ad9, [_0x4eb77b]),
            _0x157cbc = _0x5daaf9['event']['special'][_0xee0630] || {},
            _0x57fe7b || !_0x157cbc['trigger'] || !0x1 !== _0x157cbc['trigger']['apply'](_0x28184d, _0x4e1ad9))) {
                if (!_0x57fe7b && !_0x157cbc['noBubble'] && !_0x5daaf9['isWindow'](_0x28184d)) {
                    _0x3accf9 = _0x157cbc['delegateType'] || _0xee0630;
                    for (_0x5f53e9['test'](_0x3accf9 + _0xee0630) || (_0x3d49bc = _0x3d49bc['parentNode']); _0x3d49bc; _0x3d49bc = _0x3d49bc['parentNode'])
                        _0x556550['push'](_0x3d49bc),
                        _0x3ec489 = _0x3d49bc;
                    _0x3ec489 === (_0x28184d['ownerDocument'] || _0x22efbf) && _0x556550['push'](_0x3ec489['defaultView'] || _0x3ec489['parentWindow'] || _0x5768c8);
                }
                for (_0x34cccd = 0x0; (_0x3d49bc = _0x556550[_0x34cccd++]) && !_0x4eb77b['isPropagationStopped'](); )
                    _0x4eb77b['type'] = 0x1 < _0x34cccd ? _0x3accf9 : _0x157cbc['bindType'] || _0xee0630,
                    (_0x2cf2b2 = (_0x244154['get'](_0x3d49bc, 'events') || {})[_0x4eb77b['type']] && _0x244154['get'](_0x3d49bc, 'handle')) && _0x2cf2b2['apply'](_0x3d49bc, _0x4e1ad9),
                    (_0x2cf2b2 = _0x3d4bd4 && _0x3d49bc[_0x3d4bd4]) && _0x2cf2b2['apply'] && _0x3ca99b(_0x3d49bc) && (_0x4eb77b['result'] = _0x2cf2b2['apply'](_0x3d49bc, _0x4e1ad9),
                    !0x1 === _0x4eb77b['result'] && _0x4eb77b['preventDefault']());
                return _0x4eb77b['type'] = _0xee0630,
                _0x57fe7b || _0x4eb77b['isDefaultPrevented']() || _0x157cbc['_default'] && !0x1 !== _0x157cbc['_default']['apply'](_0x556550['pop'](), _0x4e1ad9) || !_0x3ca99b(_0x28184d) || _0x3d4bd4 && _0x5daaf9['isFunction'](_0x28184d[_0xee0630]) && !_0x5daaf9['isWindow'](_0x28184d) && (_0x3ec489 = _0x28184d[_0x3d4bd4],
                _0x3ec489 && (_0x28184d[_0x3d4bd4] = null),
                _0x5daaf9['event']['triggered'] = _0xee0630,
                _0x28184d[_0xee0630](),
                _0x5daaf9['event']['triggered'] = void 0x0,
                _0x3ec489 && (_0x28184d[_0x3d4bd4] = _0x3ec489)),
                _0x4eb77b['result'];
            }
        },
        'simulate': function(_0x17d740, _0x29e766, _0x5465d8) {
            _0x17d740 = _0x5daaf9['extend'](new _0x5daaf9['Event'](), _0x5465d8, {
                'type': _0x17d740,
                'isSimulated': !0x0
            }),
            _0x5daaf9['event']['trigger'](_0x17d740, null, _0x29e766);
        }
    }),
    _0x5daaf9['fn']['extend']({
        'trigger': function(_0x41045e, _0x6f3c95) {
            return this['each'](function() {
                _0x5daaf9['event']['trigger'](_0x41045e, _0x6f3c95, this);
            });
        },
        'triggerHandler': function(_0x504053, _0x3f8640) {
            var _0x565a6c = this[0x0];
            if (_0x565a6c)
                return _0x5daaf9['event']['trigger'](_0x504053, _0x3f8640, _0x565a6c, !0x0);
        }
    }),
    _0x5daaf9['each']('blur\x20focus\x20focusin\x20focusout\x20resize\x20scroll\x20click\x20dblclick\x20mousedown\x20mouseup\x20mousemove\x20mouseover\x20mouseout\x20mouseenter\x20mouseleave\x20change\x20select\x20submit\x20keydown\x20keypress\x20keyup\x20contextmenu'['split']('\x20'), function(_0x2b8e96, _0x575e60) {
        _0x5daaf9['fn'][_0x575e60] = function(_0x5599fb, _0x468d06) {
            return 0x0 < arguments['length'] ? this['on'](_0x575e60, null, _0x5599fb, _0x468d06) : this['trigger'](_0x575e60);
        }
        ;
    }),
    _0x5daaf9['fn']['extend']({
        'hover': function(_0x20939b, _0x1616f6) {
            return this['mouseenter'](_0x20939b)['mouseleave'](_0x1616f6 || _0x20939b);
        }
    }),
    _0x1c56b9['focusin'] = 'onfocusin'in _0x5768c8,
    _0x1c56b9['focusin'] || _0x5daaf9['each']({
        'focus': 'focusin',
        'blur': 'focusout'
    }, function(_0x3674ab, _0x1feb2a) {
        var _0x5d4dc9 = function(_0x11d929) {
            _0x5daaf9['event']['simulate'](_0x1feb2a, _0x11d929['target'], _0x5daaf9['event']['fix'](_0x11d929));
        };
        _0x5daaf9['event']['special'][_0x1feb2a] = {
            'setup': function() {
                var _0x34acf8 = this['ownerDocument'] || this
                  , _0x2aecb8 = _0x244154['access'](_0x34acf8, _0x1feb2a);
                _0x2aecb8 || _0x34acf8['addEventListener'](_0x3674ab, _0x5d4dc9, !0x0),
                _0x244154['access'](_0x34acf8, _0x1feb2a, (_0x2aecb8 || 0x0) + 0x1);
            },
            'teardown': function() {
                var _0x3d3116 = this['ownerDocument'] || this
                  , _0x141bcc = _0x244154['access'](_0x3d3116, _0x1feb2a) - 0x1;
                _0x141bcc ? _0x244154['access'](_0x3d3116, _0x1feb2a, _0x141bcc) : (_0x3d3116['removeEventListener'](_0x3674ab, _0x5d4dc9, !0x0),
                _0x244154['remove'](_0x3d3116, _0x1feb2a));
            }
        };
    });
    var _0x58fcde = _0x5768c8['location']
      , _0x524e5b = _0x5daaf9['now']()
      , _0x220f97 = /\?/;
    _0x5daaf9['parseXML'] = function(_0xfaf268) {
        var _0x42ad66;
        if (!_0xfaf268 || 'string' != typeof _0xfaf268)
            return null;
        try {
            _0x42ad66 = new _0x5768c8['DOMParser']()['parseFromString'](_0xfaf268, 'text/xml');
        } catch (_0x21952d) {
            _0x42ad66 = void 0x0;
        }
        return _0x42ad66 && !_0x42ad66['getElementsByTagName']('parsererror')['length'] || _0x5daaf9['error']('Invalid\x20XML:\x20' + _0xfaf268),
        _0x42ad66;
    }
    ;
    var _0x2efef1 = /\[\]$/
      , _0x50cfbf = /\r?\n/g
      , _0x45bde3 = /^(?:submit|button|image|reset|file)$/i
      , _0x3890c4 = /^(?:input|select|textarea|keygen)/i;
    _0x5daaf9['param'] = function(_0x2bcd97, _0x387366) {
        var _0x2d5b8c, _0x2732dd = [], _0x2d39e0 = function(_0x391a6e, _0x455f83) {
            var _0x24c43 = _0x5daaf9['isFunction'](_0x455f83) ? _0x455f83() : _0x455f83;
            _0x2732dd[_0x2732dd['length']] = encodeURIComponent(_0x391a6e) + '=' + encodeURIComponent(null == _0x24c43 ? '' : _0x24c43);
        };
        if (Array['isArray'](_0x2bcd97) || _0x2bcd97['jquery'] && !_0x5daaf9['isPlainObject'](_0x2bcd97))
            _0x5daaf9['each'](_0x2bcd97, function() {
                _0x2d39e0(this['name'], this['value']);
            });
        else
            for (_0x2d5b8c in _0x2bcd97)
                _0x177632(_0x2d5b8c, _0x2bcd97[_0x2d5b8c], _0x387366, _0x2d39e0);
        return _0x2732dd['join']('&');
    }
    ,
    _0x5daaf9['fn']['extend']({
        'serialize': function() {
            return _0x5daaf9['param'](this['serializeArray']());
        },
        'serializeArray': function() {
            return this['map'](function() {
                var _0x3964c6 = _0x5daaf9['prop'](this, 'elements');
                return _0x3964c6 ? _0x5daaf9['makeArray'](_0x3964c6) : this;
            })['filter'](function() {
                var _0xec9105 = this['type'];
                return this['name'] && !_0x5daaf9(this)['is'](':disabled') && _0x3890c4['test'](this['nodeName']) && !_0x45bde3['test'](_0xec9105) && (this['checked'] || !_0x400127['test'](_0xec9105));
            })['map'](function(_0x511dc5, _0x24e942) {
                var _0x97edf = _0x5daaf9(this)['val']();
                return null == _0x97edf ? null : Array['isArray'](_0x97edf) ? _0x5daaf9['map'](_0x97edf, function(_0x20da21) {
                    return {
                        'name': _0x24e942['name'],
                        'value': _0x20da21['replace'](_0x50cfbf, '\x0d\x0a')
                    };
                }) : {
                    'name': _0x24e942['name'],
                    'value': _0x97edf['replace'](_0x50cfbf, '\x0d\x0a')
                };
            })['get']();
        }
    });
    var _0x1a6ddd = /%20/g
      , _0x26d444 = /#.*$/
      , _0x2297ae = /([?&])_=[^&]*/
      , _0x20e29d = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , _0x21e2e9 = /^(?:GET|HEAD)$/
      , _0x381635 = /^\/\//
      , _0x288e7e = {}
      , _0x1d98d1 = {}
      , _0x93f1ff = '*/'['concat']('*')
      , _0x5c2cea = _0x22efbf['createElement']('a');
    _0x5c2cea['href'] = _0x58fcde['href'],
    _0x5daaf9['extend']({
        'active': 0x0,
        'lastModified': {},
        'etag': {},
        'ajaxSettings': {
            'url': _0x58fcde['href'],
            'type': 'GET',
            'isLocal': /^(?:about|app|app-storage|.+-extension|file|res|widget):$/['test'](_0x58fcde['protocol']),
            'global': !0x0,
            'processData': !0x0,
            'async': !0x0,
            'contentType': 'application/x-www-form-urlencoded;\x20charset=UTF-8',
            'accepts': {
                '*': _0x93f1ff,
                'text': 'text/plain',
                'html': 'text/html',
                'xml': 'application/xml,\x20text/xml',
                'json': 'application/json,\x20text/javascript'
            },
            'contents': {
                'xml': /\bxml\b/,
                'html': /\bhtml/,
                'json': /\bjson\b/
            },
            'responseFields': {
                'xml': 'responseXML',
                'text': 'responseText',
                'json': 'responseJSON'
            },
            'converters': {
                '*\x20text': String,
                'text\x20html': !0x0,
                'text\x20json': JSON['parse'],
                'text\x20xml': _0x5daaf9['parseXML']
            },
            'flatOptions': {
                'url': !0x0,
                'context': !0x0
            }
        },
        'ajaxSetup': function(_0xa7c2ce, _0x247ce3) {
            return _0x247ce3 ? _0x3d394f(_0x3d394f(_0xa7c2ce, _0x5daaf9['ajaxSettings']), _0x247ce3) : _0x3d394f(_0x5daaf9['ajaxSettings'], _0xa7c2ce);
        },
        'ajaxPrefilter': _0x145e7e(_0x288e7e),
        'ajaxTransport': _0x145e7e(_0x1d98d1),
        'ajax': function(_0x5a602e, _0x4a2f91) {
            function _0x2dc67a(_0x1d2f5b, _0x2e4b52, _0x201275, _0x261ea7) {
                var _0xe8a8e6, _0x5af6d7, _0x367369, _0x2378d0, _0x4532dc = _0x2e4b52;
                if (!_0x1e41d8) {
                    _0x1e41d8 = !0x0,
                    _0x4be237 && _0x5768c8['clearTimeout'](_0x4be237),
                    _0x5025c6 = void 0x0,
                    _0x5303ff = _0x261ea7 || '',
                    _0xc00235['readyState'] = 0x0 < _0x1d2f5b ? 0x4 : 0x0,
                    _0x261ea7 = 0xc8 <= _0x1d2f5b && 0x12c > _0x1d2f5b || 0x130 === _0x1d2f5b;
                    if (_0x201275) {
                        _0x367369 = _0x42de22;
                        for (var _0x24c440 = _0xc00235, _0x10ea93, _0x5ec635, _0x475a32, _0x4d2a01, _0x406a29 = _0x367369['contents'], _0x54ea8f = _0x367369['dataTypes']; '*' === _0x54ea8f[0x0]; )
                            _0x54ea8f['shift'](),
                            void 0x0 === _0x10ea93 && (_0x10ea93 = _0x367369['mimeType'] || _0x24c440['getResponseHeader']('Content-Type'));
                        if (_0x10ea93)
                            for (_0x5ec635 in _0x406a29)
                                if (_0x406a29[_0x5ec635] && _0x406a29[_0x5ec635]['test'](_0x10ea93)) {
                                    _0x54ea8f['unshift'](_0x5ec635);
                                    break;
                                }
                        if (_0x54ea8f[0x0]in _0x201275)
                            _0x475a32 = _0x54ea8f[0x0];
                        else {
                            for (_0x5ec635 in _0x201275) {
                                if (!_0x54ea8f[0x0] || _0x367369['converters'][_0x5ec635 + '\x20' + _0x54ea8f[0x0]]) {
                                    _0x475a32 = _0x5ec635;
                                    break;
                                }
                                _0x4d2a01 || (_0x4d2a01 = _0x5ec635);
                            }
                            _0x475a32 = _0x475a32 || _0x4d2a01;
                        }
                        _0x367369 = _0x201275 = _0x475a32 ? (_0x475a32 !== _0x54ea8f[0x0] && _0x54ea8f['unshift'](_0x475a32),
                        _0x201275[_0x475a32]) : void 0x0;
                    }
                    var _0x300c4a;
                    _0xfacdc3: {
                        _0x201275 = _0x42de22,
                        _0x10ea93 = _0x367369,
                        _0x5ec635 = _0xc00235,
                        _0x475a32 = _0x261ea7;
                        var _0x13d8aa, _0x46cd74, _0x46ccde;
                        _0x367369 = {},
                        _0x24c440 = _0x201275['dataTypes']['slice']();
                        if (_0x24c440[0x1])
                            for (_0x13d8aa in _0x201275['converters'])
                                _0x367369[_0x13d8aa['toLowerCase']()] = _0x201275['converters'][_0x13d8aa];
                        for (_0x4d2a01 = _0x24c440['shift'](); _0x4d2a01; )
                            if (_0x201275['responseFields'][_0x4d2a01] && (_0x5ec635[_0x201275['responseFields'][_0x4d2a01]] = _0x10ea93),
                            !_0x46ccde && _0x475a32 && _0x201275['dataFilter'] && (_0x10ea93 = _0x201275['dataFilter'](_0x10ea93, _0x201275['dataType'])),
                            _0x46ccde = _0x4d2a01,
                            _0x4d2a01 = _0x24c440['shift']()) {
                                if ('*' === _0x4d2a01)
                                    _0x4d2a01 = _0x46ccde;
                                else {
                                    if ('*' !== _0x46ccde && _0x46ccde !== _0x4d2a01) {
                                        if (_0x13d8aa = _0x367369[_0x46ccde + '\x20' + _0x4d2a01] || _0x367369['*\x20' + _0x4d2a01],
                                        !_0x13d8aa)
                                            for (_0x300c4a in _0x367369)
                                                if (_0x46cd74 = _0x300c4a['split']('\x20'),
                                                _0x46cd74[0x1] === _0x4d2a01 && (_0x13d8aa = _0x367369[_0x46ccde + '\x20' + _0x46cd74[0x0]] || _0x367369['*\x20' + _0x46cd74[0x0]])) {
                                                    !0x0 === _0x13d8aa ? _0x13d8aa = _0x367369[_0x300c4a] : !0x0 !== _0x367369[_0x300c4a] && (_0x4d2a01 = _0x46cd74[0x0],
                                                    _0x24c440['unshift'](_0x46cd74[0x1]));
                                                    break;
                                                }
                                        if (!0x0 !== _0x13d8aa) {
                                            if (_0x13d8aa && _0x201275['throws'])
                                                _0x10ea93 = _0x13d8aa(_0x10ea93);
                                            else
                                                try {
                                                    _0x10ea93 = _0x13d8aa(_0x10ea93);
                                                } catch (_0x55f717) {
                                                    _0x300c4a = {
                                                        'state': 'parsererror',
                                                        'error': _0x13d8aa ? _0x55f717 : 'No\x20conversion\x20from\x20' + _0x46ccde + '\x20to\x20' + _0x4d2a01
                                                    };
                                                    break _0xfacdc3;
                                                }
                                        }
                                    }
                                }
                            }
                        _0x300c4a = {
                            'state': 'success',
                            'data': _0x10ea93
                        };
                    }
                    _0x367369 = _0x300c4a,
                    _0x261ea7 ? (_0x42de22['ifModified'] && (_0x2378d0 = _0xc00235['getResponseHeader']('Last-Modified'),
                    _0x2378d0 && (_0x5daaf9['lastModified'][_0x3aebea] = _0x2378d0),
                    _0x2378d0 = _0xc00235['getResponseHeader']('etag'),
                    _0x2378d0 && (_0x5daaf9['etag'][_0x3aebea] = _0x2378d0)),
                    0xcc === _0x1d2f5b || 'HEAD' === _0x42de22['type'] ? _0x4532dc = 'nocontent' : 0x130 === _0x1d2f5b ? _0x4532dc = 'notmodified' : (_0x4532dc = _0x367369['state'],
                    _0xe8a8e6 = _0x367369['data'],
                    _0x5af6d7 = _0x367369['error'],
                    _0x261ea7 = !_0x5af6d7)) : (_0x5af6d7 = _0x4532dc,
                    !_0x1d2f5b && _0x4532dc || (_0x4532dc = 'error',
                    0x0 > _0x1d2f5b && (_0x1d2f5b = 0x0))),
                    _0xc00235['status'] = _0x1d2f5b,
                    _0xc00235['statusText'] = (_0x2e4b52 || _0x4532dc) + '',
                    _0x261ea7 ? _0x256303['resolveWith'](_0x34dc73, [_0xe8a8e6, _0x4532dc, _0xc00235]) : _0x256303['rejectWith'](_0x34dc73, [_0xc00235, _0x4532dc, _0x5af6d7]),
                    _0xc00235['statusCode'](_0x2b6c57),
                    _0x2b6c57 = void 0x0,
                    _0x4f1494 && _0x55ba8b['trigger'](_0x261ea7 ? 'ajaxSuccess' : 'ajaxError', [_0xc00235, _0x42de22, _0x261ea7 ? _0xe8a8e6 : _0x5af6d7]),
                    _0x5071bf['fireWith'](_0x34dc73, [_0xc00235, _0x4532dc]),
                    _0x4f1494 && (_0x55ba8b['trigger']('ajaxComplete', [_0xc00235, _0x42de22]),
                    --_0x5daaf9['active'] || _0x5daaf9['event']['trigger']('ajaxStop'));
                }
            }
            'object' == typeof _0x5a602e && (_0x4a2f91 = _0x5a602e,
            _0x5a602e = void 0x0),
            _0x4a2f91 = _0x4a2f91 || {};
            var _0x5025c6, _0x3aebea, _0x5303ff, _0x56ffab, _0x4be237, _0xe07390, _0x1e41d8, _0x4f1494, _0x18fecf, _0x58c769, _0x42de22 = _0x5daaf9['ajaxSetup']({}, _0x4a2f91), _0x34dc73 = _0x42de22['context'] || _0x42de22, _0x55ba8b = _0x42de22['context'] && (_0x34dc73['nodeType'] || _0x34dc73['jquery']) ? _0x5daaf9(_0x34dc73) : _0x5daaf9['event'], _0x256303 = _0x5daaf9['Deferred'](), _0x5071bf = _0x5daaf9['Callbacks']('once\x20memory'), _0x2b6c57 = _0x42de22['statusCode'] || {}, _0x567669 = {}, _0x3fd985 = {}, _0x3535e7 = 'canceled', _0xc00235 = {
                'readyState': 0x0,
                'getResponseHeader': function(_0xef6402) {
                    var _0x589745;
                    if (_0x1e41d8) {
                        if (!_0x56ffab)
                            for (_0x56ffab = {}; _0x589745 = _0x20e29d['exec'](_0x5303ff); )
                                _0x56ffab[_0x589745[0x1]['toLowerCase']()] = _0x589745[0x2];
                        _0x589745 = _0x56ffab[_0xef6402['toLowerCase']()];
                    }
                    return null == _0x589745 ? null : _0x589745;
                },
                'getAllResponseHeaders': function() {
                    return _0x1e41d8 ? _0x5303ff : null;
                },
                'setRequestHeader': function(_0x176e76, _0x370f6c) {
                    return null == _0x1e41d8 && (_0x176e76 = _0x3fd985[_0x176e76['toLowerCase']()] = _0x3fd985[_0x176e76['toLowerCase']()] || _0x176e76,
                    _0x567669[_0x176e76] = _0x370f6c),
                    this;
                },
                'overrideMimeType': function(_0x43c8bb) {
                    return null == _0x1e41d8 && (_0x42de22['mimeType'] = _0x43c8bb),
                    this;
                },
                'statusCode': function(_0xd50fff) {
                    var _0x197989;
                    if (_0xd50fff) {
                        if (_0x1e41d8)
                            _0xc00235['always'](_0xd50fff[_0xc00235['status']]);
                        else
                            for (_0x197989 in _0xd50fff)
                                _0x2b6c57[_0x197989] = [_0x2b6c57[_0x197989], _0xd50fff[_0x197989]];
                    }
                    return this;
                },
                'abort': function(_0x579050) {
                    return _0x579050 = _0x579050 || _0x3535e7,
                    (_0x5025c6 && _0x5025c6['abort'](_0x579050),
                    _0x2dc67a(0x0, _0x579050),
                    this);
                }
            };
            if (_0x256303['promise'](_0xc00235),
            _0x42de22['url'] = ((_0x5a602e || _0x42de22['url'] || _0x58fcde['href']) + '')['replace'](_0x381635, _0x58fcde['protocol'] + '//'),
            _0x42de22['type'] = _0x4a2f91['method'] || _0x4a2f91['type'] || _0x42de22['method'] || _0x42de22['type'],
            _0x42de22['dataTypes'] = (_0x42de22['dataType'] || '*')['toLowerCase']()['match'](_0x182fa8) || [''],
            null == _0x42de22['crossDomain']) {
                _0xe07390 = _0x22efbf['createElement']('a');
                try {
                    _0xe07390['href'] = _0x42de22['url'],
                    _0xe07390['href'] = _0xe07390['href'],
                    _0x42de22['crossDomain'] = _0x5c2cea['protocol'] + '//' + _0x5c2cea['host'] != _0xe07390['protocol'] + '//' + _0xe07390['host'];
                } catch (_0x13cd53) {
                    _0x42de22['crossDomain'] = !0x0;
                }
            }
            if (_0x42de22['data'] && _0x42de22['processData'] && 'string' != typeof _0x42de22['data'] && (_0x42de22['data'] = _0x5daaf9['param'](_0x42de22['data'], _0x42de22['traditional'])),
            _0x1017e1(_0x288e7e, _0x42de22, _0x4a2f91, _0xc00235),
            _0x1e41d8)
                return _0xc00235;
            (_0x4f1494 = _0x5daaf9['event'] && _0x42de22['global']) && 0x0 === _0x5daaf9['active']++ && _0x5daaf9['event']['trigger']('ajaxStart'),
            _0x42de22['type'] = _0x42de22['type']['toUpperCase'](),
            _0x42de22['hasContent'] = !_0x21e2e9['test'](_0x42de22['type']),
            _0x3aebea = _0x42de22['url']['replace'](_0x26d444, ''),
            _0x42de22['hasContent'] ? _0x42de22['data'] && _0x42de22['processData'] && 0x0 === (_0x42de22['contentType'] || '')['indexOf']('application/x-www-form-urlencoded') && (_0x42de22['data'] = _0x42de22['data']['replace'](_0x1a6ddd, '+')) : (_0x58c769 = _0x42de22['url']['slice'](_0x3aebea['length']),
            _0x42de22['data'] && (_0x3aebea += (_0x220f97['test'](_0x3aebea) ? '&' : '?') + _0x42de22['data'],
            delete _0x42de22['data']),
            !0x1 === _0x42de22['cache'] && (_0x3aebea = _0x3aebea['replace'](_0x2297ae, '$1'),
            _0x58c769 = (_0x220f97['test'](_0x3aebea) ? '&' : '?') + '_=' + _0x524e5b++ + _0x58c769),
            _0x42de22['url'] = _0x3aebea + _0x58c769),
            _0x42de22['ifModified'] && (_0x5daaf9['lastModified'][_0x3aebea] && _0xc00235['setRequestHeader']('If-Modified-Since', _0x5daaf9['lastModified'][_0x3aebea]),
            _0x5daaf9['etag'][_0x3aebea] && _0xc00235['setRequestHeader']('If-None-Match', _0x5daaf9['etag'][_0x3aebea])),
            (_0x42de22['data'] && _0x42de22['hasContent'] && !0x1 !== _0x42de22['contentType'] || _0x4a2f91['contentType']) && _0xc00235['setRequestHeader']('Content-Type', _0x42de22['contentType']),
            _0xc00235['setRequestHeader']('Accept', _0x42de22['dataTypes'][0x0] && _0x42de22['accepts'][_0x42de22['dataTypes'][0x0]] ? _0x42de22['accepts'][_0x42de22['dataTypes'][0x0]] + ('*' !== _0x42de22['dataTypes'][0x0] ? ',\x20' + _0x93f1ff + ';\x20q=0.01' : '') : _0x42de22['accepts']['*']);
            for (_0x18fecf in _0x42de22['headers'])
                _0xc00235['setRequestHeader'](_0x18fecf, _0x42de22['headers'][_0x18fecf]);
            if (_0x42de22['beforeSend'] && (!0x1 === _0x42de22['beforeSend']['call'](_0x34dc73, _0xc00235, _0x42de22) || _0x1e41d8))
                return _0xc00235['abort']();
            if (_0x3535e7 = 'abort',
            _0x5071bf['add'](_0x42de22['complete']),
            _0xc00235['done'](_0x42de22['success']),
            _0xc00235['fail'](_0x42de22['error']),
            _0x5025c6 = _0x1017e1(_0x1d98d1, _0x42de22, _0x4a2f91, _0xc00235)) {
                if (_0xc00235['readyState'] = 0x1,
                _0x4f1494 && _0x55ba8b['trigger']('ajaxSend', [_0xc00235, _0x42de22]),
                _0x1e41d8)
                    return _0xc00235;
                _0x42de22['async'] && 0x0 < _0x42de22['timeout'] && (_0x4be237 = _0x5768c8['setTimeout'](function() {
                    _0xc00235['abort']('timeout');
                }, _0x42de22['timeout']));
                try {
                    _0x1e41d8 = !0x1,
                    _0x5025c6['send'](_0x567669, _0x2dc67a);
                } catch (_0x256e1f) {
                    if (_0x1e41d8)
                        throw _0x256e1f;
                    _0x2dc67a(-0x1, _0x256e1f);
                }
            } else
                _0x2dc67a(-0x1, 'No\x20Transport');
            return _0xc00235;
        },
        'getJSON': function(_0x4eb600, _0xdb3cd5, _0x2f3b94) {
            return _0x5daaf9['get'](_0x4eb600, _0xdb3cd5, _0x2f3b94, 'json');
        },
        'getScript': function(_0x51beab, _0x43005e) {
            return _0x5daaf9['get'](_0x51beab, void 0x0, _0x43005e, 'script');
        }
    }),
    _0x5daaf9['each'](['get', 'post'], function(_0x2bb3fa, _0x14673c) {
        _0x5daaf9[_0x14673c] = function(_0x47073d, _0x2ade35, _0x50f574, _0x1a7380) {
            return _0x5daaf9['isFunction'](_0x2ade35) && (_0x1a7380 = _0x1a7380 || _0x50f574,
            _0x50f574 = _0x2ade35,
            _0x2ade35 = void 0x0),
            _0x5daaf9['ajax'](_0x5daaf9['extend']({
                'url': _0x47073d,
                'type': _0x14673c,
                'dataType': _0x1a7380,
                'data': _0x2ade35,
                'success': _0x50f574
            }, _0x5daaf9['isPlainObject'](_0x47073d) && _0x47073d));
        }
        ;
    }),
    _0x5daaf9['_evalUrl'] = function(_0x2002dc) {
        return _0x5daaf9['ajax']({
            'url': _0x2002dc,
            'type': 'GET',
            'dataType': 'script',
            'cache': !0x0,
            'async': !0x1,
            'global': !0x1,
            'throws': !0x0
        });
    }
    ,
    _0x5daaf9['fn']['extend']({
        'wrapAll': function(_0x38601b) {
            var _0x368a7b;
            return this[0x0] && (_0x5daaf9['isFunction'](_0x38601b) && (_0x38601b = _0x38601b['call'](this[0x0])),
            _0x368a7b = _0x5daaf9(_0x38601b, this[0x0]['ownerDocument'])['eq'](0x0)['clone'](!0x0),
            this[0x0]['parentNode'] && _0x368a7b['insertBefore'](this[0x0]),
            _0x368a7b['map'](function() {
                for (var _0x325314 = this; _0x325314['firstElementChild']; )
                    _0x325314 = _0x325314['firstElementChild'];
                return _0x325314;
            })['append'](this)),
            this;
        },
        'wrapInner': function(_0x3f2bc7) {
            return _0x5daaf9['isFunction'](_0x3f2bc7) ? this['each'](function(_0x11d036) {
                _0x5daaf9(this)['wrapInner'](_0x3f2bc7['call'](this, _0x11d036));
            }) : this['each'](function() {
                var _0x27ab3c = _0x5daaf9(this)
                  , _0x21ecec = _0x27ab3c['contents']();
                _0x21ecec['length'] ? _0x21ecec['wrapAll'](_0x3f2bc7) : _0x27ab3c['append'](_0x3f2bc7);
            });
        },
        'wrap': function(_0x247525) {
            var _0xfebb5c = _0x5daaf9['isFunction'](_0x247525);
            return this['each'](function(_0x26f48d) {
                _0x5daaf9(this)['wrapAll'](_0xfebb5c ? _0x247525['call'](this, _0x26f48d) : _0x247525);
            });
        },
        'unwrap': function(_0x14746d) {
            return this['parent'](_0x14746d)['not']('body')['each'](function() {
                _0x5daaf9(this)['replaceWith'](this['childNodes']);
            }),
            this;
        }
    }),
    _0x5daaf9['expr']['pseudos']['hidden'] = function(_0x13b8f9) {
        return !_0x5daaf9['expr']['pseudos']['visible'](_0x13b8f9);
    }
    ,
    _0x5daaf9['expr']['pseudos']['visible'] = function(_0x5399d0) {
        return !(!_0x5399d0['offsetWidth'] && !_0x5399d0['offsetHeight'] && !_0x5399d0['getClientRects']()['length']);
    }
    ,
    _0x5daaf9['ajaxSettings']['xhr'] = function() {
        try {
            return new _0x5768c8['XMLHttpRequest']();
        } catch (_0x16648b) {}
    }
    ;
    var _0x3dd2d9 = {
        '0': 0xc8,
        0x4c7: 0xcc
    }
      , _0x54c63a = _0x5daaf9['ajaxSettings']['xhr']();
    _0x1c56b9['cors'] = !!_0x54c63a && 'withCredentials'in _0x54c63a,
    _0x1c56b9['ajax'] = _0x54c63a = !!_0x54c63a,
    _0x5daaf9['ajaxTransport'](function(_0x55ca40) {
        var _0xa8dad5, _0x29f30e;
        if (_0x1c56b9['cors'] || _0x54c63a && !_0x55ca40['crossDomain'])
            return {
                'send': function(_0x5e11a7, _0x1aa6e6) {
                    var _0x5d2067, _0x347827 = _0x55ca40['xhr']();
                    if (_0x347827['open'](_0x55ca40['type'], _0x55ca40['url'], _0x55ca40['async'], _0x55ca40['username'], _0x55ca40['password']),
                    _0x55ca40['xhrFields'])
                        for (_0x5d2067 in _0x55ca40['xhrFields'])
                            _0x347827[_0x5d2067] = _0x55ca40['xhrFields'][_0x5d2067];
                    _0x55ca40['mimeType'] && _0x347827['overrideMimeType'] && _0x347827['overrideMimeType'](_0x55ca40['mimeType']),
                    _0x55ca40['crossDomain'] || _0x5e11a7['X-Requested-With'] || (_0x5e11a7['X-Requested-With'] = 'XMLHttpRequest');
                    for (_0x5d2067 in _0x5e11a7)
                        _0x347827['setRequestHeader'](_0x5d2067, _0x5e11a7[_0x5d2067]);
                    _0xa8dad5 = function(_0x7c9bd1) {
                        return function() {
                            _0xa8dad5 && (_0xa8dad5 = _0x29f30e = _0x347827['onload'] = _0x347827['onerror'] = _0x347827['onabort'] = _0x347827['onreadystatechange'] = null,
                            'abort' === _0x7c9bd1 ? _0x347827['abort']() : 'error' === _0x7c9bd1 ? 'number' != typeof _0x347827['status'] ? _0x1aa6e6(0x0, 'error') : _0x1aa6e6(_0x347827['status'], _0x347827['statusText']) : _0x1aa6e6(_0x3dd2d9[_0x347827['status']] || _0x347827['status'], _0x347827['statusText'], 'text' !== (_0x347827['responseType'] || 'text') || 'string' != typeof _0x347827['responseText'] ? {
                                'binary': _0x347827['response']
                            } : {
                                'text': _0x347827['responseText']
                            }, _0x347827['getAllResponseHeaders']()));
                        }
                        ;
                    }
                    ,
                    _0x347827['onload'] = _0xa8dad5(),
                    _0x29f30e = _0x347827['onerror'] = _0xa8dad5('error'),
                    void 0x0 !== _0x347827['onabort'] ? _0x347827['onabort'] = _0x29f30e : _0x347827['onreadystatechange'] = function() {
                        0x4 === _0x347827['readyState'] && _0x5768c8['setTimeout'](function() {
                            _0xa8dad5 && _0x29f30e();
                        });
                    }
                    ,
                    _0xa8dad5 = _0xa8dad5('abort');
                    try {
                        _0x347827['send'](_0x55ca40['hasContent'] && _0x55ca40['data'] || null);
                    } catch (_0x3c30e4) {
                        if (_0xa8dad5)
                            throw _0x3c30e4;
                    }
                },
                'abort': function() {
                    _0xa8dad5 && _0xa8dad5();
                }
            };
    }),
    _0x5daaf9['ajaxPrefilter'](function(_0x287b9c) {
        _0x287b9c['crossDomain'] && (_0x287b9c['contents']['script'] = !0x1);
    }),
    _0x5daaf9['ajaxSetup']({
        'accepts': {
            'script': 'text/javascript,\x20application/javascript,\x20application/ecmascript,\x20application/x-ecmascript'
        },
        'contents': {
            'script': /\b(?:java|ecma)script\b/
        },
        'converters': {
            'text\x20script': function(_0x193d05) {
                return _0x5daaf9['globalEval'](_0x193d05),
                _0x193d05;
            }
        }
    }),
    _0x5daaf9['ajaxPrefilter']('script', function(_0x97be86) {
        void 0x0 === _0x97be86['cache'] && (_0x97be86['cache'] = !0x1),
        _0x97be86['crossDomain'] && (_0x97be86['type'] = 'GET');
    }),
    _0x5daaf9['ajaxTransport']('script', function(_0x37c700) {
        if (_0x37c700['crossDomain']) {
            var _0x5e9c8a, _0x55f990;
            return {
                'send': function(_0x31f698, _0x16c96c) {
                    _0x5e9c8a = _0x5daaf9('<script>')['prop']({
                        'charset': _0x37c700['scriptCharset'],
                        'src': _0x37c700['url']
                    })['on']('load\x20error', _0x55f990 = function(_0x46e1ac) {
                        _0x5e9c8a['remove'](),
                        _0x55f990 = null,
                        _0x46e1ac && _0x16c96c('error' === _0x46e1ac['type'] ? 0x194 : 0xc8, _0x46e1ac['type']);
                    }
                    ),
                    _0x22efbf['head']['appendChild'](_0x5e9c8a[0x0]);
                },
                'abort': function() {
                    _0x55f990 && _0x55f990();
                }
            };
        }
    });
    var _0x4fb808 = []
      , _0x8b83 = /(=)\?(?=&|$)|\?\?/;
    _0x5daaf9['ajaxSetup']({
        'jsonp': 'callback',
        'jsonpCallback': function() {
            var _0x3f1db7 = _0x4fb808['pop']() || _0x5daaf9['expando'] + '_' + _0x524e5b++;
            return this[_0x3f1db7] = !0x0,
            _0x3f1db7;
        }
    }),
    _0x5daaf9['ajaxPrefilter']('json\x20jsonp', function(_0x26e3bc, _0x498c6a, _0x3a0655) {
        var _0x351d51, _0x54c6d3, _0x13679a, _0x360ebd = !0x1 !== _0x26e3bc['jsonp'] && (_0x8b83['test'](_0x26e3bc['url']) ? 'url' : 'string' == typeof _0x26e3bc['data'] && 0x0 === (_0x26e3bc['contentType'] || '')['indexOf']('application/x-www-form-urlencoded') && _0x8b83['test'](_0x26e3bc['data']) && 'data');
        if (_0x360ebd || 'jsonp' === _0x26e3bc['dataTypes'][0x0])
            return _0x351d51 = _0x26e3bc['jsonpCallback'] = _0x5daaf9['isFunction'](_0x26e3bc['jsonpCallback']) ? _0x26e3bc['jsonpCallback']() : _0x26e3bc['jsonpCallback'],
            _0x360ebd ? _0x26e3bc[_0x360ebd] = _0x26e3bc[_0x360ebd]['replace'](_0x8b83, '$1' + _0x351d51) : !0x1 !== _0x26e3bc['jsonp'] && (_0x26e3bc['url'] += (_0x220f97['test'](_0x26e3bc['url']) ? '&' : '?') + _0x26e3bc['jsonp'] + '=' + _0x351d51),
            _0x26e3bc['converters']['script\x20json'] = function() {
                return _0x13679a || _0x5daaf9['error'](_0x351d51 + '\x20was\x20not\x20called'),
                _0x13679a[0x0];
            }
            ,
            _0x26e3bc['dataTypes'][0x0] = 'json',
            _0x54c6d3 = _0x5768c8[_0x351d51],
            _0x5768c8[_0x351d51] = function() {
                _0x13679a = arguments;
            }
            ,
            _0x3a0655['always'](function() {
                void 0x0 === _0x54c6d3 ? _0x5daaf9(_0x5768c8)['removeProp'](_0x351d51) : _0x5768c8[_0x351d51] = _0x54c6d3,
                _0x26e3bc[_0x351d51] && (_0x26e3bc['jsonpCallback'] = _0x498c6a['jsonpCallback'],
                _0x4fb808['push'](_0x351d51)),
                _0x13679a && _0x5daaf9['isFunction'](_0x54c6d3) && _0x54c6d3(_0x13679a[0x0]),
                _0x13679a = _0x54c6d3 = void 0x0;
            }),
            'script';
    });
    var _0x1df2ee = _0x1c56b9, _0x45a25b, _0xb1033e = _0x22efbf['implementation']['createHTMLDocument']('')['body'];
    _0x45a25b = (_0xb1033e['innerHTML'] = '<form></form><form></form>',
    0x2 === _0xb1033e['childNodes']['length']),
    _0x1df2ee['createHTMLDocument'] = _0x45a25b,
    _0x5daaf9['parseHTML'] = function(_0x50025f, _0x12172c, _0x4e2a9f) {
        if ('string' != typeof _0x50025f)
            return [];
        'boolean' == typeof _0x12172c && (_0x4e2a9f = _0x12172c,
        _0x12172c = !0x1);
        var _0x35bfa6, _0x37c1f4, _0x3fe376;
        return _0x12172c || (_0x1c56b9['createHTMLDocument'] ? (_0x12172c = _0x22efbf['implementation']['createHTMLDocument'](''),
        _0x35bfa6 = _0x12172c['createElement']('base'),
        _0x35bfa6['href'] = _0x22efbf['location']['href'],
        _0x12172c['head']['appendChild'](_0x35bfa6)) : _0x12172c = _0x22efbf),
        _0x37c1f4 = _0x145a9d['exec'](_0x50025f),
        _0x3fe376 = !_0x4e2a9f && [],
        _0x37c1f4 ? [_0x12172c['createElement'](_0x37c1f4[0x1])] : (_0x37c1f4 = _0x282af9([_0x50025f], _0x12172c, _0x3fe376),
        _0x3fe376 && _0x3fe376['length'] && _0x5daaf9(_0x3fe376)['remove'](),
        _0x5daaf9['merge']([], _0x37c1f4['childNodes']));
    }
    ,
    _0x5daaf9['fn']['load'] = function(_0x35e993, _0x2e742e, _0x2d597b) {
        var _0x242ca7, _0xdbe1bc, _0x1a975d, _0x7a5e7e = this, _0xf7196e = _0x35e993['indexOf']('\x20');
        return -0x1 < _0xf7196e && (_0x242ca7 = _0x553627(_0x35e993['slice'](_0xf7196e)),
        _0x35e993 = _0x35e993['slice'](0x0, _0xf7196e)),
        _0x5daaf9['isFunction'](_0x2e742e) ? (_0x2d597b = _0x2e742e,
        _0x2e742e = void 0x0) : _0x2e742e && 'object' == typeof _0x2e742e && (_0xdbe1bc = 'POST'),
        0x0 < _0x7a5e7e['length'] && _0x5daaf9['ajax']({
            'url': _0x35e993,
            'type': _0xdbe1bc || 'GET',
            'dataType': 'html',
            'data': _0x2e742e
        })['done'](function(_0x4629b9) {
            _0x1a975d = arguments,
            _0x7a5e7e['html'](_0x242ca7 ? _0x5daaf9('<div>')['append'](_0x5daaf9['parseHTML'](_0x4629b9))['find'](_0x242ca7) : _0x4629b9);
        })['always'](_0x2d597b && function(_0x40ab27, _0x9239a2) {
            _0x7a5e7e['each'](function() {
                _0x2d597b['apply'](this, _0x1a975d || [_0x40ab27['responseText'], _0x9239a2, _0x40ab27]);
            });
        }
        ),
        this;
    }
    ,
    _0x5daaf9['each']('ajaxStart\x20ajaxStop\x20ajaxComplete\x20ajaxError\x20ajaxSuccess\x20ajaxSend'['split']('\x20'), function(_0x515897, _0x11013b) {
        _0x5daaf9['fn'][_0x11013b] = function(_0x2378a1) {
            return this['on'](_0x11013b, _0x2378a1);
        }
        ;
    }),
    _0x5daaf9['expr']['pseudos']['animated'] = function(_0xdba2fe) {
        return _0x5daaf9['grep'](_0x5daaf9['timers'], function(_0x5bd087) {
            return _0xdba2fe === _0x5bd087['elem'];
        })['length'];
    }
    ,
    _0x5daaf9['offset'] = {
        'setOffset': function(_0x17f32c, _0x5e5683, _0x32785b) {
            var _0x475044, _0x274328, _0x5f43b5, _0x388287, _0x4c9373, _0x20d843, _0x4e3ea8 = _0x5daaf9['css'](_0x17f32c, 'position'), _0x388b2a = _0x5daaf9(_0x17f32c), _0x56fc92 = {};
            'static' === _0x4e3ea8 && (_0x17f32c['style']['position'] = 'relative'),
            _0x4c9373 = _0x388b2a['offset'](),
            _0x5f43b5 = _0x5daaf9['css'](_0x17f32c, 'top'),
            _0x20d843 = _0x5daaf9['css'](_0x17f32c, 'left'),
            ('absolute' === _0x4e3ea8 || 'fixed' === _0x4e3ea8) && -0x1 < (_0x5f43b5 + _0x20d843)['indexOf']('auto') ? (_0x475044 = _0x388b2a['position'](),
            _0x388287 = _0x475044['top'],
            _0x274328 = _0x475044['left']) : (_0x388287 = parseFloat(_0x5f43b5) || 0x0,
            _0x274328 = parseFloat(_0x20d843) || 0x0),
            _0x5daaf9['isFunction'](_0x5e5683) && (_0x5e5683 = _0x5e5683['call'](_0x17f32c, _0x32785b, _0x5daaf9['extend']({}, _0x4c9373))),
            null != _0x5e5683['top'] && (_0x56fc92['top'] = _0x5e5683['top'] - _0x4c9373['top'] + _0x388287),
            null != _0x5e5683['left'] && (_0x56fc92['left'] = _0x5e5683['left'] - _0x4c9373['left'] + _0x274328),
            'using'in _0x5e5683 ? _0x5e5683['using']['call'](_0x17f32c, _0x56fc92) : _0x388b2a['css'](_0x56fc92);
        }
    },
    _0x5daaf9['fn']['extend']({
        'offset': function(_0x158e3d) {
            if (arguments['length'])
                return void 0x0 === _0x158e3d ? this : this['each'](function(_0x480ef0) {
                    _0x5daaf9['offset']['setOffset'](this, _0x158e3d, _0x480ef0);
                });
            var _0x3bce92, _0x3296c4, _0x3880b8, _0x54351b, _0x4b27db = this[0x0];
            if (_0x4b27db)
                return _0x4b27db['getClientRects']()['length'] ? (_0x3880b8 = _0x4b27db['getBoundingClientRect'](),
                _0x3bce92 = _0x4b27db['ownerDocument'],
                _0x3296c4 = _0x3bce92['documentElement'],
                _0x54351b = _0x3bce92['defaultView'],
                {
                    'top': _0x3880b8['top'] + _0x54351b['pageYOffset'] - _0x3296c4['clientTop'],
                    'left': _0x3880b8['left'] + _0x54351b['pageXOffset'] - _0x3296c4['clientLeft']
                }) : {
                    'top': 0x0,
                    'left': 0x0
                };
        },
        'position': function() {
            if (this[0x0]) {
                var _0xe521bb, _0x3b66b6, _0x283463 = this[0x0], _0x4f75a7 = {
                    'top': 0x0,
                    'left': 0x0
                };
                return 'fixed' === _0x5daaf9['css'](_0x283463, 'position') ? _0x3b66b6 = _0x283463['getBoundingClientRect']() : (_0xe521bb = this['offsetParent'](),
                _0x3b66b6 = this['offset'](),
                _0x4bed0e(_0xe521bb[0x0], 'html') || (_0x4f75a7 = _0xe521bb['offset']()),
                _0x4f75a7 = {
                    'top': _0x4f75a7['top'] + _0x5daaf9['css'](_0xe521bb[0x0], 'borderTopWidth', !0x0),
                    'left': _0x4f75a7['left'] + _0x5daaf9['css'](_0xe521bb[0x0], 'borderLeftWidth', !0x0)
                }),
                {
                    'top': _0x3b66b6['top'] - _0x4f75a7['top'] - _0x5daaf9['css'](_0x283463, 'marginTop', !0x0),
                    'left': _0x3b66b6['left'] - _0x4f75a7['left'] - _0x5daaf9['css'](_0x283463, 'marginLeft', !0x0)
                };
            }
        },
        'offsetParent': function() {
            return this['map'](function() {
                for (var _0x15df47 = this['offsetParent']; _0x15df47 && 'static' === _0x5daaf9['css'](_0x15df47, 'position'); )
                    _0x15df47 = _0x15df47['offsetParent'];
                return _0x15df47 || _0xc9227d;
            });
        }
    }),
    _0x5daaf9['each']({
        'scrollLeft': 'pageXOffset',
        'scrollTop': 'pageYOffset'
    }, function(_0x95db6e, _0x183c2c) {
        var _0x515f71 = 'pageYOffset' === _0x183c2c;
        _0x5daaf9['fn'][_0x95db6e] = function(_0x29dd03) {
            return _0x1807ec(this, function(_0x16491d, _0x2d9743, _0x2bcb2f) {
                var _0xf35286;
                return _0x5daaf9['isWindow'](_0x16491d) ? _0xf35286 = _0x16491d : 0x9 === _0x16491d['nodeType'] && (_0xf35286 = _0x16491d['defaultView']),
                void 0x0 === _0x2bcb2f ? _0xf35286 ? _0xf35286[_0x183c2c] : _0x16491d[_0x2d9743] : void (_0xf35286 ? _0xf35286['scrollTo'](_0x515f71 ? _0xf35286['pageXOffset'] : _0x2bcb2f, _0x515f71 ? _0x2bcb2f : _0xf35286['pageYOffset']) : _0x16491d[_0x2d9743] = _0x2bcb2f);
            }, _0x95db6e, _0x29dd03, arguments['length']);
        }
        ;
    }),
    _0x5daaf9['each'](['top', 'left'], function(_0x1bf146, _0x39e353) {
        _0x5daaf9['cssHooks'][_0x39e353] = _0x2a4d2d(_0x1c56b9['pixelPosition'], function(_0x2eada6, _0x2b24d7) {
            if (_0x2b24d7)
                return _0x2b24d7 = _0x3c24d2(_0x2eada6, _0x39e353),
                _0x90d65a['test'](_0x2b24d7) ? _0x5daaf9(_0x2eada6)['position']()[_0x39e353] + 'px' : _0x2b24d7;
        });
    }),
    _0x5daaf9['each']({
        'Height': 'height',
        'Width': 'width'
    }, function(_0x212c71, _0x426150) {
        _0x5daaf9['each']({
            'padding': 'inner' + _0x212c71,
            'content': _0x426150,
            '': 'outer' + _0x212c71
        }, function(_0xa959c1, _0x289b77) {
            _0x5daaf9['fn'][_0x289b77] = function(_0x38cd14, _0x22cd90) {
                var _0x572b07 = arguments['length'] && (_0xa959c1 || 'boolean' != typeof _0x38cd14)
                  , _0x346549 = _0xa959c1 || (!0x0 === _0x38cd14 || !0x0 === _0x22cd90 ? 'margin' : 'border');
                return _0x1807ec(this, function(_0xb382bc, _0x2041e4, _0x2bc9d5) {
                    var _0x1c5863;
                    return _0x5daaf9['isWindow'](_0xb382bc) ? 0x0 === _0x289b77['indexOf']('outer') ? _0xb382bc['inner' + _0x212c71] : _0xb382bc['document']['documentElement']['client' + _0x212c71] : 0x9 === _0xb382bc['nodeType'] ? (_0x1c5863 = _0xb382bc['documentElement'],
                    Math['max'](_0xb382bc['body']['scroll' + _0x212c71], _0x1c5863['scroll' + _0x212c71], _0xb382bc['body']['offset' + _0x212c71], _0x1c5863['offset' + _0x212c71], _0x1c5863['client' + _0x212c71])) : void 0x0 === _0x2bc9d5 ? _0x5daaf9['css'](_0xb382bc, _0x2041e4, _0x346549) : _0x5daaf9['style'](_0xb382bc, _0x2041e4, _0x2bc9d5, _0x346549);
                }, _0x426150, _0x572b07 ? _0x38cd14 : void 0x0, _0x572b07);
            }
            ;
        });
    }),
    _0x5daaf9['fn']['extend']({
        'bind': function(_0x41d460, _0x1bacb0, _0x308b1b) {
            return this['on'](_0x41d460, null, _0x1bacb0, _0x308b1b);
        },
        'unbind': function(_0x4e1834, _0x54b0b7) {
            return this['off'](_0x4e1834, null, _0x54b0b7);
        },
        'delegate': function(_0x4122c2, _0x4f4678, _0x52346e, _0xde4c8f) {
            return this['on'](_0x4f4678, _0x4122c2, _0x52346e, _0xde4c8f);
        },
        'undelegate': function(_0x2034c0, _0x39890e, _0x4d10d8) {
            return 0x1 === arguments['length'] ? this['off'](_0x2034c0, '**') : this['off'](_0x39890e, _0x2034c0 || '**', _0x4d10d8);
        }
    }),
    _0x5daaf9['holdReady'] = function(_0x2459b2) {
        _0x2459b2 ? _0x5daaf9['readyWait']++ : _0x5daaf9['ready'](!0x0);
    }
    ,
    _0x5daaf9['isArray'] = Array['isArray'],
    _0x5daaf9['parseJSON'] = JSON['parse'],
    _0x5daaf9['nodeName'] = _0x4bed0e,
    'function' == typeof define && define['amd'] && define('jquery', [], function() {
        return _0x5daaf9;
    });
    var _0x24ec70 = _0x5768c8['jQuery']
      , _0x306d15 = _0x5768c8['$'];
    return _0x5daaf9['noConflict'] = function(_0x1cdee4) {
        return _0x5768c8['$'] === _0x5daaf9 && (_0x5768c8['$'] = _0x306d15),
        _0x1cdee4 && _0x5768c8['jQuery'] === _0x5daaf9 && (_0x5768c8['jQuery'] = _0x24ec70),
        _0x5daaf9;
    }
    ,
    _0x8b82f4 || (_0x5768c8['jQuery'] = _0x5768c8['$'] = _0x5daaf9),
    _0x5daaf9;
});
function getInternetExplorerVersion() {
    var _0xa89e8b = -0x1;
    return 'Microsoft\x20Internet\x20Explorer' == navigator['appName'] && null != /MSIE ([0-9]{1,}[.0-9]{0,})/['exec'](navigator['userAgent']) && (_0xa89e8b = parseFloat(RegExp['$1'])),
    _0xa89e8b;
}
var ie = getInternetExplorerVersion();
function getQueryVariable(_0x9b30b1) {
    for (var _0x39537a = window['location']['search']['substring'](0x1)['split']('&'), _0x58a0b4 = 0x0; _0x58a0b4 < _0x39537a['length']; _0x58a0b4++) {
        var _0x3be1a0 = _0x39537a[_0x58a0b4]['split']('=');
        if (decodeURIComponent(_0x3be1a0[0x0]) == _0x9b30b1)
            return decodeURIComponent(_0x3be1a0[0x1]);
    }
}
this['jukebox'] = {},
jukebox['Player'] = function(_0x4722d9, _0xb3feac) {
    this['id'] = ++jukebox['__jukeboxId'],
    this['origin'] = _0xb3feac || null,
    this['settings'] = {};
    for (var _0x371462 in this['defaults'])
        this['settings'][_0x371462] = this['defaults'][_0x371462];
    if ('[object\x20Object]' === Object['prototype']['toString']['call'](_0x4722d9))
        for (var _0x4e5797 in _0x4722d9)
            this['settings'][_0x4e5797] = _0x4722d9[_0x4e5797];
    '[object\x20Function]' === Object['prototype']['toString']['call'](jukebox['Manager']) && (jukebox['Manager'] = new jukebox['Manager']()),
    this['resource'] = this['isPlaying'] = null,
    this['resource'] = '[object\x20Object]' === Object['prototype']['toString']['call'](jukebox['Manager']) ? jukebox['Manager']['getPlayableResource'](this['settings']['resources']) : this['settings']['resources'][0x0] || null;
    if (null === this['resource'])
        throw 'Your\x20browser\x20can\x27t\x20playback\x20the\x20given\x20resources\x20-\x20or\x20you\x20have\x20missed\x20to\x20include\x20jukebox.Manager';
    return this['__init'](),
    this;
}
,
jukebox['__jukeboxId'] = 0x0,
jukebox['Player']['prototype'] = {
    'defaults': {
        'resources': [],
        'autoplay': !0x1,
        'spritemap': {},
        'flashMediaElement': './swf/FlashMediaElement.swf',
        'timeout': 0x3e8
    },
    '__addToManager': function() {
        !0x0 !== this['__wasAddedToManager'] && (jukebox['Manager']['add'](this),
        this['__wasAddedToManager'] = !0x0);
    },
    '__init': function() {
        var _0xbbac8c = this, _0x163efc = this['settings'], _0x14fda0 = {}, _0x4955dc;
        jukebox['Manager'] && void 0x0 !== jukebox['Manager']['features'] && (_0x14fda0 = jukebox['Manager']['features']);
        if (!0x0 === _0x14fda0['html5audio']) {
            this['context'] = new Audio(),
            this['context']['src'] = this['resource'];
            if (null === this['origin']) {
                var _0x2d743a = function(_0xdadc8f) {
                    _0xbbac8c['__addToManager'](_0xdadc8f);
                };
                this['context']['addEventListener']('canplaythrough', _0x2d743a, !0x0),
                window['setTimeout'](function() {
                    _0xbbac8c['context']['removeEventListener']('canplaythrough', _0x2d743a, !0x0),
                    _0x2d743a('timeout');
                }, _0x163efc['timeout']);
            }
            this['context']['autobuffer'] = !0x0,
            this['context']['preload'] = !0x0;
            for (_0x4955dc in this['HTML5API'])
                this[_0x4955dc] = this['HTML5API'][_0x4955dc];
            0x1 < _0x14fda0['channels'] ? !0x0 === _0x163efc['autoplay'] ? this['context']['autoplay'] = !0x0 : void 0x0 !== _0x163efc['spritemap'][_0x163efc['autoplay']] && this['play'](_0x163efc['autoplay']) : 0x1 === _0x14fda0['channels'] && void 0x0 !== _0x163efc['spritemap'][_0x163efc['autoplay']] && (this['backgroundMusic'] = _0x163efc['spritemap'][_0x163efc['autoplay']],
            this['backgroundMusic']['started'] = Date['now'] ? Date['now']() : +new Date(),
            this['play'](_0x163efc['autoplay'])),
            0x1 == _0x14fda0['channels'] && !0x0 !== _0x163efc['canPlayBackground'] && (window['addEventListener']('pagehide', function() {
                null !== _0xbbac8c['isPlaying'] && (_0xbbac8c['pause'](),
                _0xbbac8c['__wasAutoPaused'] = !0x0);
            }),
            window['addEventListener']('pageshow', function() {
                _0xbbac8c['__wasAutoPaused'] && (_0xbbac8c['resume'](),
                delete _0xbbac8c['_wasAutoPaused']);
            }));
        } else {
            if (!0x0 === _0x14fda0['flashaudio']) {
                for (_0x4955dc in this['FLASHAPI'])
                    this[_0x4955dc] = this['FLASHAPI'][_0x4955dc];
                _0x14fda0 = ['id=jukebox-flashstream-' + this['id'], 'autoplay=' + _0x163efc['autoplay'], 'file=' + window['encodeURIComponent'](this['resource'])],
                this['__initFlashContext'](_0x14fda0),
                !0x0 === _0x163efc['autoplay'] ? this['play'](0x0) : _0x163efc['spritemap'][_0x163efc['autoplay']] && this['play'](_0x163efc['autoplay']);
            } else
                throw 'Your\x20Browser\x20does\x20not\x20support\x20Flash\x20Audio\x20or\x20HTML5\x20Audio.';
        }
    },
    '__initFlashContext': function(_0x369444) {
        var _0x34d5bb, _0x24faee = this['settings']['flashMediaElement'], _0x52975e, _0x36e980 = {
            'flashvars': _0x369444['join']('&'),
            'quality': 'high',
            'bgcolor': '#000000',
            'wmode': 'transparent',
            'allowscriptaccess': 'always',
            'allowfullscreen': 'true'
        };
        if (navigator['userAgent']['match'](/MSIE/)) {
            _0x34d5bb = document['createElement']('div'),
            document['getElementsByTagName']('body')[0x0]['appendChild'](_0x34d5bb);
            var _0x4f3506 = document['createElement']('object');
            _0x4f3506['id'] = 'jukebox-flashstream-' + this['id'],
            _0x4f3506['setAttribute']('type', 'application/x-shockwave-flash'),
            _0x4f3506['setAttribute']('classid', 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'),
            _0x4f3506['setAttribute']('width', '0'),
            _0x4f3506['setAttribute']('height', '0'),
            _0x36e980['movie'] = _0x24faee + '?x=' + (Date['now'] ? Date['now']() : +new Date()),
            _0x36e980['flashvars'] = _0x369444['join']('&amp;');
            for (_0x52975e in _0x36e980)
                _0x369444 = document['createElement']('param'),
                _0x369444['setAttribute']('name', _0x52975e),
                _0x369444['setAttribute']('value', _0x36e980[_0x52975e]),
                _0x4f3506['appendChild'](_0x369444);
            _0x34d5bb['outerHTML'] = _0x4f3506['outerHTML'],
            this['context'] = document['getElementById']('jukebox-flashstream-' + this['id']);
        } else {
            _0x34d5bb = document['createElement']('embed'),
            _0x34d5bb['id'] = 'jukebox-flashstream-' + this['id'],
            _0x34d5bb['setAttribute']('type', 'application/x-shockwave-flash'),
            _0x34d5bb['setAttribute']('width', '100'),
            _0x34d5bb['setAttribute']('height', '100'),
            _0x36e980['play'] = !0x1,
            _0x36e980['loop'] = !0x1,
            _0x36e980['src'] = _0x24faee + '?x=' + (Date['now'] ? Date['now']() : +new Date());
            for (_0x52975e in _0x36e980)
                _0x34d5bb['setAttribute'](_0x52975e, _0x36e980[_0x52975e]);
            document['getElementsByTagName']('body')[0x0]['appendChild'](_0x34d5bb),
            this['context'] = _0x34d5bb;
        }
    },
    'backgroundHackForiOS': function() {
        if (void 0x0 !== this['backgroundMusic']) {
            var _0x526661 = Date['now'] ? Date['now']() : +new Date();
            void 0x0 === this['backgroundMusic']['started'] ? (this['backgroundMusic']['started'] = _0x526661,
            this['setCurrentTime'](this['backgroundMusic']['start'])) : (this['backgroundMusic']['lastPointer'] = (_0x526661 - this['backgroundMusic']['started']) / 0x3e8 % (this['backgroundMusic']['end'] - this['backgroundMusic']['start']) + this['backgroundMusic']['start'],
            this['play'](this['backgroundMusic']['lastPointer']));
        }
    },
    'play': function(_0x13c360, _0x29b0c3) {
        if (null !== this['isPlaying'] && !0x0 !== _0x29b0c3)
            void 0x0 !== jukebox['Manager'] && jukebox['Manager']['addToQueue'](_0x13c360, this['id']);
        else {
            var _0x1cb9fd = this['settings']['spritemap'], _0x5a7e47;
            if (void 0x0 !== _0x1cb9fd[_0x13c360])
                _0x5a7e47 = _0x1cb9fd[_0x13c360]['start'];
            else {
                if ('number' === typeof _0x13c360) {
                    _0x5a7e47 = _0x13c360;
                    for (var _0x42b1fe in _0x1cb9fd)
                        if (_0x5a7e47 >= _0x1cb9fd[_0x42b1fe]['start'] && _0x5a7e47 <= _0x1cb9fd[_0x42b1fe]['end']) {
                            _0x13c360 = _0x42b1fe;
                            break;
                        }
                }
            }
            void 0x0 !== _0x5a7e47 && '[object\x20Object]' === Object['prototype']['toString']['call'](_0x1cb9fd[_0x13c360]) && (this['isPlaying'] = this['settings']['spritemap'][_0x13c360],
            this['context']['play'] && this['context']['play'](),
            this['wasReady'] = this['setCurrentTime'](_0x5a7e47));
        }
    },
    'stop': function() {
        return this['__lastPosition'] = 0x0,
        this['isPlaying'] = null,
        this['backgroundMusic'] ? this['backgroundHackForiOS']() : this['context']['pause'](),
        !0x0;
    },
    'pause': function() {
        return this['isPlaying'] = null,
        this['__lastPosition'] = this['getCurrentTime'](),
        this['context']['pause'](),
        this['__lastPosition'];
    },
    'resume': function(_0x36948c) {
        _0x36948c = 'number' === typeof _0x36948c ? _0x36948c : this['__lastPosition'];
        if (null !== _0x36948c)
            return this['play'](_0x36948c),
            this['__lastPosition'] = null,
            !0x0;
        return this['context']['play'](),
        !0x1;
    },
    'HTML5API': {
        'getVolume': function() {
            return this['context']['volume'] || 0x1;
        },
        'setVolume': function(_0x425e92) {
            return this['context']['volume'] = _0x425e92,
            0.0001 > Math['abs'](this['context']['volume'] - _0x425e92) ? !0x0 : !0x1;
        },
        'getCurrentTime': function() {
            return this['context']['currentTime'] || 0x0;
        },
        'setCurrentTime': function(_0x4ecfe7) {
            try {
                return this['context']['currentTime'] = _0x4ecfe7,
                !0x0;
            } catch (_0x419524) {
                return !0x1;
            }
        }
    },
    'FLASHAPI': {
        'getVolume': function() {
            return this['context'] && 'function' === typeof this['context']['getVolume'] ? this['context']['getVolume']() : 0x1;
        },
        'setVolume': function(_0x1c0b26) {
            return this['context'] && 'function' === typeof this['context']['setVolume'] ? (this['context']['setVolume'](_0x1c0b26),
            !0x0) : !0x1;
        },
        'getCurrentTime': function() {
            return this['context'] && 'function' === typeof this['context']['getCurrentTime'] ? this['context']['getCurrentTime']() : 0x0;
        },
        'setCurrentTime': function(_0x196478) {
            return this['context'] && 'function' === typeof this['context']['setCurrentTime'] ? this['context']['setCurrentTime'](_0x196478) : !0x1;
        }
    }
};
if (void 0x0 === this['jukebox'])
    throw 'jukebox.Manager\x20requires\x20jukebox.Player\x20(Player.js)\x20to\x20run\x20properly.';
jukebox['Manager'] = function(_0x56f56b) {
    this['features'] = {},
    this['codecs'] = {},
    this['__players'] = {},
    this['__playersLength'] = 0x0,
    this['__clones'] = {},
    this['__queue'] = [],
    this['settings'] = {};
    for (var _0x31799d in this['defaults'])
        this['settings'][_0x31799d] = this['defaults'][_0x31799d];
    if ('[object\x20Object]' === Object['prototype']['toString']['call'](_0x56f56b))
        for (var _0x282505 in _0x56f56b)
            this['settings'][_0x282505] = _0x56f56b[_0x282505];
    this['__detectFeatures'](),
    jukebox['Manager']['__initialized'] = !0x1 === this['settings']['useGameLoop'] ? window['setInterval'](function() {
        jukebox['Manager']['loop']();
    }, 0x14) : !0x0;
}
,
jukebox['Manager']['prototype'] = {
    'defaults': {
        'useFlash': !0x1,
        'useGameLoop': !0x1
    },
    '__detectFeatures': function() {
        var _0x431fff = window['Audio'] && new Audio();
        if (_0x431fff && _0x431fff['canPlayType'] && !0x1 === this['settings']['useFlash']) {
            for (var _0x3cf400 = [{
                'e': '3gp',
                'm': ['audio/3gpp', 'audio/amr']
            }, {
                'e': 'aac',
                'm': ['audio/aac', 'audio/aacp']
            }, {
                'e': 'amr',
                'm': ['audio/amr', 'audio/3gpp']
            }, {
                'e': 'caf',
                'm': ['audio/IMA-ADPCM', 'audio/x-adpcm', 'audio/x-aiff;\x20codecs=\x22IMA-ADPCM,\x20ADPCM\x22']
            }, {
                'e': 'm4a',
                'm': 'audio/mp4{audio/mp4;\x20codecs=\x22mp4a.40.2,avc1.42E01E\x22{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'['split']('{')
            }, {
                'e': 'mp3',
                'm': ['audio/mp3', 'audio/mpeg', 'audio/mpeg;\x20codecs=\x22mp3\x22', 'audio/MPA', 'audio/mpa-robust']
            }, {
                'e': 'mpga',
                'm': ['audio/MPA', 'audio/mpa-robust', 'audio/mpeg', 'video/mpeg']
            }, {
                'e': 'mp4',
                'm': ['audio/mp4', 'video/mp4']
            }, {
                'e': 'ogg',
                'm': ['application/ogg', 'audio/ogg', 'audio/ogg;\x20codecs=\x22theora,\x20vorbis\x22', 'video/ogg', 'video/ogg;\x20codecs=\x22theora,\x20vorbis\x22']
            }, {
                'e': 'wav',
                'm': ['audio/wave', 'audio/wav', 'audio/wav;\x20codecs=\x221\x22', 'audio/x-wav', 'audio/x-pn-wav']
            }, {
                'e': 'webm',
                'm': ['audio/webm', 'audio/webm;\x20codecs=\x22vorbis\x22', 'video/webm']
            }], _0x5b900b, _0x5b9fea, _0x138516 = 0x0, _0x80b49 = _0x3cf400['length']; _0x138516 < _0x80b49; _0x138516++)
                if (_0x5b9fea = _0x3cf400[_0x138516]['e'],
                _0x3cf400[_0x138516]['m']['length'] && 'object' === typeof _0x3cf400[_0x138516]['m'])
                    for (var _0x46050a = 0x0, _0x1db339 = _0x3cf400[_0x138516]['m']['length']; _0x46050a < _0x1db339; _0x46050a++)
                        if (_0x5b900b = _0x3cf400[_0x138516]['m'][_0x46050a],
                        '' !== _0x431fff['canPlayType'](_0x5b900b)) {
                            this['codecs'][_0x5b9fea] = _0x5b900b;
                            break;
                        } else
                            this['codecs'][_0x5b9fea] || (this['codecs'][_0x5b9fea] = !0x1);
            this['features']['html5audio'] = !(!this['codecs']['mp3'] && !this['codecs']['ogg'] && !this['codecs']['webm'] && !this['codecs']['wav']),
            this['features']['channels'] = 0x8,
            _0x431fff['volume'] = 0.1337,
            this['features']['volume'] = !!(0.0001 > Math['abs'](_0x431fff['volume'] - 0.1337)),
            navigator['userAgent']['match'](/iPhone|iPod|iPad/i) && (this['features']['channels'] = 0x1);
        }
        this['features']['flashaudio'] = !!navigator['mimeTypes']['application/x-shockwave-flash'] || !!navigator['plugins']['Shockwave\x20Flash'] || !0x1;
        if (window['ActiveXObject'])
            try {
                new ActiveXObject('ShockwaveFlash.ShockwaveFlash.10'),
                this['features']['flashaudio'] = !0x0;
            } catch (_0x93a0a4) {}
        !0x0 === this['settings']['useFlash'] && (this['features']['flashaudio'] = !0x0),
        !0x0 === this['features']['flashaudio'] && !this['features']['html5audio'] && (this['codecs']['mp3'] = 'audio/mp3',
        this['codecs']['mpga'] = 'audio/mpeg',
        this['codecs']['mp4'] = 'audio/mp4',
        this['codecs']['m4a'] = 'audio/mp4',
        this['codecs']['3gp'] = 'audio/3gpp',
        this['codecs']['amr'] = 'audio/amr',
        this['features']['volume'] = !0x0,
        this['features']['channels'] = 0x1);
    },
    '__getPlayerById': function(_0x3263af) {
        return this['__players'] && void 0x0 !== this['__players'][_0x3263af] ? this['__players'][_0x3263af] : null;
    },
    '__getClone': function(_0x55dbb3, _0x35cf36) {
        for (var _0x407dca in this['__clones']) {
            var _0x558607 = this['__clones'][_0x407dca];
            if (null === _0x558607['isPlaying'] && _0x558607['origin'] === _0x55dbb3)
                return _0x558607;
        }
        if ('[object\x20Object]' === Object['prototype']['toString']['call'](_0x35cf36)) {
            _0x407dca = {};
            for (var _0x571b00 in _0x35cf36)
                _0x407dca[_0x571b00] = _0x35cf36[_0x571b00];
            return _0x407dca['autoplay'] = !0x1,
            _0x571b00 = new jukebox['Player'](_0x407dca,_0x55dbb3),
            _0x571b00['isClone'] = !0x0,
            _0x571b00['wasReady'] = !0x1,
            this['__clones'][_0x571b00['id']] = _0x571b00;
        }
        return null;
    },
    'loop': function() {
        if (0x0 !== this['__playersLength']) {
            if (this['__queue']['length'] && this['__playersLength'] < this['features']['channels']) {
                var _0x510cba = this['__queue'][0x0]
                  , _0x1921fe = this['__getPlayerById'](_0x510cba['origin']);
                if (null !== _0x1921fe) {
                    var _0x574015 = this['__getClone'](_0x510cba['origin'], _0x1921fe['settings']);
                    null !== _0x574015 && (!0x0 === this['features']['volume'] && (_0x1921fe = this['__players'][_0x510cba['origin']]) && _0x574015['setVolume'](_0x1921fe['getVolume']()),
                    this['add'](_0x574015),
                    _0x574015['play'](_0x510cba['pointer'], !0x0));
                }
                this['__queue']['splice'](0x0, 0x1);
            } else
                for (_0x574015 in (this['__queue']['length'] && 0x1 === this['features']['channels'] && (_0x510cba = this['__queue'][0x0],
                _0x1921fe = this['__getPlayerById'](_0x510cba['origin']),
                null !== _0x1921fe && _0x1921fe['play'](_0x510cba['pointer'], !0x0),
                this['__queue']['splice'](0x0, 0x1)),
                this['__players']))
                    _0x510cba = this['__players'][_0x574015],
                    _0x1921fe = _0x510cba['getCurrentTime']() || 0x0,
                    _0x510cba['isPlaying'] && !0x1 === _0x510cba['wasReady'] ? _0x510cba['wasReady'] = _0x510cba['setCurrentTime'](_0x510cba['isPlaying']['start']) : _0x510cba['isPlaying'] && !0x0 === _0x510cba['wasReady'] ? _0x1921fe > _0x510cba['isPlaying']['end'] && (!0x0 === _0x510cba['isPlaying']['loop'] ? _0x510cba['play'](_0x510cba['isPlaying']['start'], !0x0) : _0x510cba['stop']()) : _0x510cba['isClone'] && null === _0x510cba['isPlaying'] ? this['remove'](_0x510cba) : void 0x0 !== _0x510cba['backgroundMusic'] && null === _0x510cba['isPlaying'] && _0x1921fe > _0x510cba['backgroundMusic']['end'] && _0x510cba['backgroundHackForiOS']();
        }
    },
    'getPlayableResource': function(_0xe180dd) {
        '[object\x20Array]' !== Object['prototype']['toString']['call'](_0xe180dd) && (_0xe180dd = [_0xe180dd]);
        for (var _0x1780b4 = 0x0, _0x11de99 = _0xe180dd['length']; _0x1780b4 < _0x11de99; _0x1780b4++) {
            var _0x3c77b8 = _0xe180dd[_0x1780b4]
              , _0x3691bb = _0x3c77b8['match'](/\.([^\.]*)$/)[0x1];
            if (_0x3691bb && this['codecs'][_0x3691bb])
                return _0x3c77b8;
        }
        return null;
    },
    'add': function(_0x4fff58) {
        return _0x4fff58 instanceof jukebox['Player'] && void 0x0 === this['__players'][_0x4fff58['id']] ? (this['__playersLength']++,
        this['__players'][_0x4fff58['id']] = _0x4fff58,
        !0x0) : !0x1;
    },
    'remove': function(_0x458155) {
        return _0x458155 instanceof jukebox['Player'] && void 0x0 !== this['__players'][_0x458155['id']] ? (this['__playersLength']--,
        delete this['__players'][_0x458155['id']],
        !0x0) : !0x1;
    },
    'addToQueue': function(_0x33ad8e, _0x4c4661) {
        return ('string' === typeof _0x33ad8e || 'number' === typeof _0x33ad8e) && void 0x0 !== this['__players'][_0x4c4661] ? (this['__queue']['push']({
            'pointer': _0x33ad8e,
            'origin': _0x4c4661
        }),
        !0x0) : !0x1;
    }
},
function() {
    var _0x10334e = function() {
        this['init']();
    };
    _0x10334e['prototype'] = {
        'init': function() {
            var _0x3c935e = this || _0x3c263a;
            return _0x3c935e['_counter'] = 0x3e8,
            _0x3c935e['_html5AudioPool'] = [],
            _0x3c935e['html5PoolSize'] = 0xa,
            _0x3c935e['_codecs'] = {},
            _0x3c935e['_howls'] = [],
            _0x3c935e['_muted'] = !0x1,
            _0x3c935e['_volume'] = 0x1,
            _0x3c935e['_canPlayEvent'] = 'canplaythrough',
            _0x3c935e['_navigator'] = 'undefined' !== typeof window && window['navigator'] ? window['navigator'] : null,
            _0x3c935e['masterGain'] = null,
            _0x3c935e['noAudio'] = !0x1,
            _0x3c935e['usingWebAudio'] = !0x0,
            _0x3c935e['autoSuspend'] = !0x1,
            _0x3c935e['ctx'] = null,
            _0x3c935e['autoUnlock'] = !0x0,
            _0x3c935e['_setup'](),
            _0x3c935e;
        },
        'volume': function(_0x3447f2) {
            var _0x13994b = this || _0x3c263a;
            _0x3447f2 = parseFloat(_0x3447f2),
            _0x13994b['ctx'] || _0xff13d6();
            if ('undefined' !== typeof _0x3447f2 && 0x0 <= _0x3447f2 && 0x1 >= _0x3447f2) {
                _0x13994b['_volume'] = _0x3447f2;
                if (_0x13994b['_muted'])
                    return _0x13994b;
                _0x13994b['usingWebAudio'] && _0x13994b['masterGain']['gain']['setValueAtTime'](_0x3447f2, _0x3c263a['ctx']['currentTime']);
                for (var _0x484816 = 0x0; _0x484816 < _0x13994b['_howls']['length']; _0x484816++)
                    if (!_0x13994b['_howls'][_0x484816]['_webAudio'])
                        for (var _0x471f19 = _0x13994b['_howls'][_0x484816]['_getSoundIds'](), _0x2daecd = 0x0; _0x2daecd < _0x471f19['length']; _0x2daecd++) {
                            var _0x37cc74 = _0x13994b['_howls'][_0x484816]['_soundById'](_0x471f19[_0x2daecd]);
                            _0x37cc74 && _0x37cc74['_node'] && (_0x37cc74['_node']['volume'] = _0x37cc74['_volume'] * _0x3447f2);
                        }
                return _0x13994b;
            }
            return _0x13994b['_volume'];
        },
        'mute': function(_0x36ae9e) {
            var _0x377dd2 = this || _0x3c263a;
            _0x377dd2['ctx'] || _0xff13d6(),
            _0x377dd2['_muted'] = _0x36ae9e,
            _0x377dd2['usingWebAudio'] && _0x377dd2['masterGain']['gain']['setValueAtTime'](_0x36ae9e ? 0x0 : _0x377dd2['_volume'], _0x3c263a['ctx']['currentTime']);
            for (var _0x5ac3de = 0x0; _0x5ac3de < _0x377dd2['_howls']['length']; _0x5ac3de++)
                if (!_0x377dd2['_howls'][_0x5ac3de]['_webAudio'])
                    for (var _0x368aaa = _0x377dd2['_howls'][_0x5ac3de]['_getSoundIds'](), _0xbbd798 = 0x0; _0xbbd798 < _0x368aaa['length']; _0xbbd798++) {
                        var _0x4023c2 = _0x377dd2['_howls'][_0x5ac3de]['_soundById'](_0x368aaa[_0xbbd798]);
                        _0x4023c2 && _0x4023c2['_node'] && (_0x4023c2['_node']['muted'] = _0x36ae9e ? !0x0 : _0x4023c2['_muted']);
                    }
            return _0x377dd2;
        },
        'stop': function() {
            for (var _0xf57ae2 = this || _0x3c263a, _0x3388f7 = 0x0; _0x3388f7 < _0xf57ae2['_howls']['length']; _0x3388f7++)
                _0xf57ae2['_howls'][_0x3388f7]['stop']();
            return _0xf57ae2;
        },
        'unload': function() {
            for (var _0x13b5fe = this || _0x3c263a, _0x51f6fe = _0x13b5fe['_howls']['length'] - 0x1; 0x0 <= _0x51f6fe; _0x51f6fe--)
                _0x13b5fe['_howls'][_0x51f6fe]['unload']();
            return _0x13b5fe['usingWebAudio'] && _0x13b5fe['ctx'] && 'undefined' !== typeof _0x13b5fe['ctx']['close'] && (_0x13b5fe['ctx']['close'](),
            _0x13b5fe['ctx'] = null,
            _0xff13d6()),
            _0x13b5fe;
        },
        'codecs': function(_0x5bf180) {
            return (this || _0x3c263a)['_codecs'][_0x5bf180['replace'](/^x-/, '')];
        },
        '_setup': function() {
            var _0x190f01 = this || _0x3c263a;
            _0x190f01['state'] = _0x190f01['ctx'] ? _0x190f01['ctx']['state'] || 'suspended' : 'suspended',
            _0x190f01['_autoSuspend']();
            if (!_0x190f01['usingWebAudio']) {
                if ('undefined' !== typeof Audio)
                    try {
                        var _0x3e2da7 = new Audio();
                        'undefined' === typeof _0x3e2da7['oncanplaythrough'] && (_0x190f01['_canPlayEvent'] = 'canplay');
                    } catch (_0x54328) {
                        _0x190f01['noAudio'] = !0x0;
                    }
                else
                    _0x190f01['noAudio'] = !0x0;
            }
            try {
                _0x3e2da7 = new Audio(),
                _0x3e2da7['muted'] && (_0x190f01['noAudio'] = !0x0);
            } catch (_0x3471d1) {}
            return _0x190f01['noAudio'] || _0x190f01['_setupCodecs'](),
            _0x190f01;
        },
        '_setupCodecs': function() {
            var _0x4a6f8a = this || _0x3c263a
              , _0x47566d = null;
            try {
                _0x47566d = 'undefined' !== typeof Audio ? new Audio() : null;
            } catch (_0x46448a) {
                return _0x4a6f8a;
            }
            if (!_0x47566d || 'function' !== typeof _0x47566d['canPlayType'])
                return _0x4a6f8a;
            var _0x409fd6 = _0x47566d['canPlayType']('audio/mpeg;')['replace'](/^no$/, '')
              , _0x589d0b = _0x4a6f8a['_navigator'] && _0x4a6f8a['_navigator']['userAgent']['match'](/OPR\/([0-6].)/g)
              , _0x589d0b = _0x589d0b && 0x21 > parseInt(_0x589d0b[0x0]['split']('/')[0x1], 0xa);
            return _0x4a6f8a['_codecs'] = {
                'mp3': !(_0x589d0b || !_0x409fd6 && !_0x47566d['canPlayType']('audio/mp3;')['replace'](/^no$/, '')),
                'mpeg': !!_0x409fd6,
                'opus': !!_0x47566d['canPlayType']('audio/ogg;\x20codecs=\x22opus\x22')['replace'](/^no$/, ''),
                'ogg': !!_0x47566d['canPlayType']('audio/ogg;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                'oga': !!_0x47566d['canPlayType']('audio/ogg;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                'wav': !!_0x47566d['canPlayType']('audio/wav;\x20codecs=\x221\x22')['replace'](/^no$/, ''),
                'aac': !!_0x47566d['canPlayType']('audio/aac;')['replace'](/^no$/, ''),
                'caf': !!_0x47566d['canPlayType']('audio/x-caf;')['replace'](/^no$/, ''),
                'm4a': !!(_0x47566d['canPlayType']('audio/x-m4a;') || _0x47566d['canPlayType']('audio/m4a;') || _0x47566d['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                'm4b': !!(_0x47566d['canPlayType']('audio/x-m4b;') || _0x47566d['canPlayType']('audio/m4b;') || _0x47566d['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                'mp4': !!(_0x47566d['canPlayType']('audio/x-mp4;') || _0x47566d['canPlayType']('audio/mp4;') || _0x47566d['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                'weba': !!_0x47566d['canPlayType']('audio/webm;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                'webm': !!_0x47566d['canPlayType']('audio/webm;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                'dolby': !!_0x47566d['canPlayType']('audio/mp4;\x20codecs=\x22ec-3\x22')['replace'](/^no$/, ''),
                'flac': !!(_0x47566d['canPlayType']('audio/x-flac;') || _0x47566d['canPlayType']('audio/flac;'))['replace'](/^no$/, '')
            },
            _0x4a6f8a;
        },
        '_unlockAudio': function() {
            var _0x204c03 = this || _0x3c263a;
            if (!_0x204c03['_audioUnlocked'] && _0x204c03['ctx']) {
                _0x204c03['_audioUnlocked'] = !0x1,
                _0x204c03['autoUnlock'] = !0x1,
                !_0x204c03['_mobileUnloaded'] && 0xac44 !== _0x204c03['ctx']['sampleRate'] && (_0x204c03['_mobileUnloaded'] = !0x0,
                _0x204c03['unload']()),
                _0x204c03['_scratchBuffer'] = _0x204c03['ctx']['createBuffer'](0x1, 0x1, 0x5622);
                var _0x53d9cf = function() {
                    for (; _0x204c03['_html5AudioPool']['length'] < _0x204c03['html5PoolSize']; )
                        try {
                            var _0x1abc1d = new Audio();
                            _0x1abc1d['_unlocked'] = !0x0,
                            _0x204c03['_releaseHtml5Audio'](_0x1abc1d);
                        } catch (_0x21393e) {
                            _0x204c03['noAudio'] = !0x0;
                            break;
                        }
                    for (_0x1abc1d = 0x0; _0x1abc1d < _0x204c03['_howls']['length']; _0x1abc1d++)
                        if (!_0x204c03['_howls'][_0x1abc1d]['_webAudio'])
                            for (var _0x2b1826 = _0x204c03['_howls'][_0x1abc1d]['_getSoundIds'](), _0x385f38 = 0x0; _0x385f38 < _0x2b1826['length']; _0x385f38++) {
                                var _0x571ae8 = _0x204c03['_howls'][_0x1abc1d]['_soundById'](_0x2b1826[_0x385f38]);
                                _0x571ae8 && _0x571ae8['_node'] && !_0x571ae8['_node']['_unlocked'] && (_0x571ae8['_node']['_unlocked'] = !0x0,
                                _0x571ae8['_node']['load']());
                            }
                    _0x204c03['_autoResume']();
                    var _0x560113 = _0x204c03['ctx']['createBufferSource']();
                    _0x560113['buffer'] = _0x204c03['_scratchBuffer'],
                    _0x560113['connect'](_0x204c03['ctx']['destination']),
                    'undefined' === typeof _0x560113['start'] ? _0x560113['noteOn'](0x0) : _0x560113['start'](0x0),
                    'function' === typeof _0x204c03['ctx']['resume'] && _0x204c03['ctx']['resume'](),
                    _0x560113['onended'] = function() {
                        _0x560113['disconnect'](0x0),
                        _0x204c03['_audioUnlocked'] = !0x0,
                        document['removeEventListener']('touchstart', _0x53d9cf, !0x0),
                        document['removeEventListener']('touchend', _0x53d9cf, !0x0),
                        document['removeEventListener']('click', _0x53d9cf, !0x0);
                        for (var _0x5d06bb = 0x0; _0x5d06bb < _0x204c03['_howls']['length']; _0x5d06bb++)
                            _0x204c03['_howls'][_0x5d06bb]['_emit']('unlock');
                    }
                    ;
                };
                return document['addEventListener']('touchstart', _0x53d9cf, !0x0),
                document['addEventListener']('touchend', _0x53d9cf, !0x0),
                document['addEventListener']('click', _0x53d9cf, !0x0),
                _0x204c03;
            }
        },
        '_obtainHtml5Audio': function() {
            var _0x177ddd = this || _0x3c263a;
            if (_0x177ddd['_html5AudioPool']['length'])
                return _0x177ddd['_html5AudioPool']['pop']();
            return (_0x177ddd = new Audio()['play']()) && 'undefined' !== typeof Promise && (_0x177ddd instanceof Promise || 'function' === typeof _0x177ddd['then']) && _0x177ddd['catch'](function() {
                console['warn']('HTML5\x20Audio\x20pool\x20exhausted,\x20returning\x20potentially\x20locked\x20audio\x20object.');
            }),
            new Audio();
        },
        '_releaseHtml5Audio': function(_0x28c352) {
            var _0x32ccd6 = this || _0x3c263a;
            return _0x28c352['_unlocked'] && _0x32ccd6['_html5AudioPool']['push'](_0x28c352),
            _0x32ccd6;
        },
        '_autoSuspend': function() {
            var _0x2c087d = this;
            if (_0x2c087d['autoSuspend'] && _0x2c087d['ctx'] && 'undefined' !== typeof _0x2c087d['ctx']['suspend'] && _0x3c263a['usingWebAudio']) {
                for (var _0x228afd = 0x0; _0x228afd < _0x2c087d['_howls']['length']; _0x228afd++)
                    if (_0x2c087d['_howls'][_0x228afd]['_webAudio'])
                        for (var _0x48208b = 0x0; _0x48208b < _0x2c087d['_howls'][_0x228afd]['_sounds']['length']; _0x48208b++)
                            if (!_0x2c087d['_howls'][_0x228afd]['_sounds'][_0x48208b]['_paused'])
                                return _0x2c087d;
                return _0x2c087d['_suspendTimer'] && clearTimeout(_0x2c087d['_suspendTimer']),
                _0x2c087d['_suspendTimer'] = setTimeout(function() {
                    if (_0x2c087d['autoSuspend']) {
                        _0x2c087d['_suspendTimer'] = null,
                        _0x2c087d['state'] = 'suspending';
                        var _0x556b0a = function() {
                            _0x2c087d['state'] = 'suspended',
                            _0x2c087d['_resumeAfterSuspend'] && (delete _0x2c087d['_resumeAfterSuspend'],
                            _0x2c087d['_autoResume']());
                        };
                        _0x2c087d['ctx']['suspend']()['then'](_0x556b0a, _0x556b0a);
                    }
                }, 0x7530),
                _0x2c087d;
            }
        },
        '_autoResume': function() {
            var _0xc32c1d = this;
            if (_0xc32c1d['ctx'] && 'undefined' !== typeof _0xc32c1d['ctx']['resume'] && _0x3c263a['usingWebAudio'])
                return 'running' === _0xc32c1d['state'] && 'interrupted' !== _0xc32c1d['ctx']['state'] && _0xc32c1d['_suspendTimer'] ? (clearTimeout(_0xc32c1d['_suspendTimer']),
                _0xc32c1d['_suspendTimer'] = null) : 'suspended' === _0xc32c1d['state'] || 'running' === _0xc32c1d['state'] && 'interrupted' === _0xc32c1d['ctx']['state'] ? (_0xc32c1d['ctx']['resume']()['then'](function() {
                    _0xc32c1d['state'] = 'running';
                    for (var _0x2bbca2 = 0x0; _0x2bbca2 < _0xc32c1d['_howls']['length']; _0x2bbca2++)
                        _0xc32c1d['_howls'][_0x2bbca2]['_emit']('resume');
                }),
                _0xc32c1d['_suspendTimer'] && (clearTimeout(_0xc32c1d['_suspendTimer']),
                _0xc32c1d['_suspendTimer'] = null)) : 'suspending' === _0xc32c1d['state'] && (_0xc32c1d['_resumeAfterSuspend'] = !0x0),
                _0xc32c1d;
        }
    };
    var _0x3c263a = new _0x10334e()
      , _0x1389b8 = function(_0x34edfc) {
        !_0x34edfc['src'] || 0x0 === _0x34edfc['src']['length'] ? console['error']('An\x20array\x20of\x20source\x20files\x20must\x20be\x20passed\x20with\x20any\x20new\x20Howl.') : this['init'](_0x34edfc);
    };
    _0x1389b8['prototype'] = {
        'init': function(_0x3a082a) {
            var _0x1a30c6 = this;
            return _0x3c263a['ctx'] || _0xff13d6(),
            _0x1a30c6['_autoplay'] = _0x3a082a['autoplay'] || !0x1,
            _0x1a30c6['_format'] = 'string' !== typeof _0x3a082a['format'] ? _0x3a082a['format'] : [_0x3a082a['format']],
            _0x1a30c6['_html5'] = _0x3a082a['html5'] || !0x1,
            _0x1a30c6['_muted'] = _0x3a082a['mute'] || !0x1,
            _0x1a30c6['_loop'] = _0x3a082a['loop'] || !0x1,
            _0x1a30c6['_pool'] = _0x3a082a['pool'] || 0x5,
            _0x1a30c6['_preload'] = 'boolean' === typeof _0x3a082a['preload'] || 'metadata' === _0x3a082a['preload'] ? _0x3a082a['preload'] : !0x0,
            _0x1a30c6['_rate'] = _0x3a082a['rate'] || 0x1,
            _0x1a30c6['_sprite'] = _0x3a082a['sprite'] || {},
            _0x1a30c6['_src'] = 'string' !== typeof _0x3a082a['src'] ? _0x3a082a['src'] : [_0x3a082a['src']],
            _0x1a30c6['_volume'] = void 0x0 !== _0x3a082a['volume'] ? _0x3a082a['volume'] : 0x1,
            _0x1a30c6['_xhr'] = {
                'method': _0x3a082a['xhr'] && _0x3a082a['xhr']['method'] ? _0x3a082a['xhr']['method'] : 'GET',
                'headers': _0x3a082a['xhr'] && _0x3a082a['xhr']['headers'] ? _0x3a082a['xhr']['headers'] : null,
                'withCredentials': _0x3a082a['xhr'] && _0x3a082a['xhr']['withCredentials'] ? _0x3a082a['xhr']['withCredentials'] : !0x1
            },
            _0x1a30c6['_duration'] = 0x0,
            _0x1a30c6['_state'] = 'unloaded',
            _0x1a30c6['_sounds'] = [],
            _0x1a30c6['_endTimers'] = {},
            _0x1a30c6['_queue'] = [],
            _0x1a30c6['_playLock'] = !0x1,
            _0x1a30c6['_onend'] = _0x3a082a['onend'] ? [{
                'fn': _0x3a082a['onend']
            }] : [],
            _0x1a30c6['_onfade'] = _0x3a082a['onfade'] ? [{
                'fn': _0x3a082a['onfade']
            }] : [],
            _0x1a30c6['_onload'] = _0x3a082a['onload'] ? [{
                'fn': _0x3a082a['onload']
            }] : [],
            _0x1a30c6['_onloaderror'] = _0x3a082a['onloaderror'] ? [{
                'fn': _0x3a082a['onloaderror']
            }] : [],
            _0x1a30c6['_onplayerror'] = _0x3a082a['onplayerror'] ? [{
                'fn': _0x3a082a['onplayerror']
            }] : [],
            _0x1a30c6['_onpause'] = _0x3a082a['onpause'] ? [{
                'fn': _0x3a082a['onpause']
            }] : [],
            _0x1a30c6['_onplay'] = _0x3a082a['onplay'] ? [{
                'fn': _0x3a082a['onplay']
            }] : [],
            _0x1a30c6['_onstop'] = _0x3a082a['onstop'] ? [{
                'fn': _0x3a082a['onstop']
            }] : [],
            _0x1a30c6['_onmute'] = _0x3a082a['onmute'] ? [{
                'fn': _0x3a082a['onmute']
            }] : [],
            _0x1a30c6['_onvolume'] = _0x3a082a['onvolume'] ? [{
                'fn': _0x3a082a['onvolume']
            }] : [],
            _0x1a30c6['_onrate'] = _0x3a082a['onrate'] ? [{
                'fn': _0x3a082a['onrate']
            }] : [],
            _0x1a30c6['_onseek'] = _0x3a082a['onseek'] ? [{
                'fn': _0x3a082a['onseek']
            }] : [],
            _0x1a30c6['_onunlock'] = _0x3a082a['onunlock'] ? [{
                'fn': _0x3a082a['onunlock']
            }] : [],
            _0x1a30c6['_onresume'] = [],
            _0x1a30c6['_webAudio'] = _0x3c263a['usingWebAudio'] && !_0x1a30c6['_html5'],
            'undefined' !== typeof _0x3c263a['ctx'] && _0x3c263a['ctx'] && _0x3c263a['autoUnlock'] && _0x3c263a['_unlockAudio'](),
            _0x3c263a['_howls']['push'](_0x1a30c6),
            _0x1a30c6['_autoplay'] && _0x1a30c6['_queue']['push']({
                'event': 'play',
                'action': function() {
                    _0x1a30c6['play']();
                }
            }),
            _0x1a30c6['_preload'] && 'none' !== _0x1a30c6['_preload'] && _0x1a30c6['load'](),
            _0x1a30c6;
        },
        'load': function() {
            var _0x2601d0 = null;
            if (_0x3c263a['noAudio'])
                this['_emit']('loaderror', null, 'No\x20audio\x20support.');
            else {
                'string' === typeof this['_src'] && (this['_src'] = [this['_src']]);
                for (var _0x12c47d = 0x0; _0x12c47d < this['_src']['length']; _0x12c47d++) {
                    var _0x3005a1, _0x18f9cc;
                    if (this['_format'] && this['_format'][_0x12c47d])
                        _0x3005a1 = this['_format'][_0x12c47d];
                    else {
                        _0x18f9cc = this['_src'][_0x12c47d];
                        if ('string' !== typeof _0x18f9cc) {
                            this['_emit']('loaderror', null, 'Non-string\x20found\x20in\x20selected\x20audio\x20sources\x20-\x20ignoring.');
                            continue;
                        }
                        (_0x3005a1 = /^data:audio\/([^;,]+);/i['exec'](_0x18f9cc)) || (_0x3005a1 = /\.([^.]+)$/['exec'](_0x18f9cc['split']('?', 0x1)[0x0])),
                        _0x3005a1 && (_0x3005a1 = _0x3005a1[0x1]['toLowerCase']());
                    }
                    _0x3005a1 || console['warn']('No\x20file\x20extension\x20was\x20found.\x20Consider\x20using\x20the\x20\x22format\x22\x20property\x20or\x20specify\x20an\x20extension.');
                    if (_0x3005a1 && _0x3c263a['codecs'](_0x3005a1)) {
                        _0x2601d0 = this['_src'][_0x12c47d];
                        break;
                    }
                }
                if (_0x2601d0) {
                    this['_src'] = _0x2601d0,
                    this['_state'] = 'loading',
                    'https:' === window['location']['protocol'] && 'http:' === _0x2601d0['slice'](0x0, 0x5) && (this['_html5'] = !0x0,
                    this['_webAudio'] = !0x1),
                    new _0x25d97a(this);
                    if (this['_webAudio']) {
                        var _0x286158 = this
                          , _0x486caf = _0x286158['_src'];
                        if (_0x4a5f2b[_0x486caf])
                            _0x286158['_duration'] = _0x4a5f2b[_0x486caf]['duration'],
                            _0x4d0857(_0x286158);
                        else {
                            if (/^data:[^;]+;base64,/['test'](_0x486caf)) {
                                _0x2601d0 = atob(_0x486caf['split'](',')[0x1]),
                                _0x12c47d = new Uint8Array(_0x2601d0['length']);
                                for (_0x3005a1 = 0x0; _0x3005a1 < _0x2601d0['length']; ++_0x3005a1)
                                    _0x12c47d[_0x3005a1] = _0x2601d0['charCodeAt'](_0x3005a1);
                                _0x272148(_0x12c47d['buffer'], _0x286158);
                            } else {
                                var _0xe87323 = new XMLHttpRequest();
                                _0xe87323['open'](_0x286158['_xhr']['method'], _0x486caf, !0x0),
                                _0xe87323['withCredentials'] = _0x286158['_xhr']['withCredentials'],
                                _0xe87323['responseType'] = 'arraybuffer',
                                _0x286158['_xhr']['headers'] && Object['keys'](_0x286158['_xhr']['headers'])['forEach'](function(_0x488212) {
                                    _0xe87323['setRequestHeader'](_0x488212, _0x286158['_xhr']['headers'][_0x488212]);
                                }),
                                _0xe87323['onload'] = function() {
                                    var _0x121043 = (_0xe87323['status'] + '')[0x0];
                                    '0' !== _0x121043 && '2' !== _0x121043 && '3' !== _0x121043 ? _0x286158['_emit']('loaderror', null, 'Failed\x20loading\x20audio\x20file\x20with\x20status:\x20' + _0xe87323['status'] + '.') : _0x272148(_0xe87323['response'], _0x286158);
                                }
                                ,
                                _0xe87323['onerror'] = function() {
                                    _0x286158['_webAudio'] && (_0x286158['_html5'] = !0x0,
                                    _0x286158['_webAudio'] = !0x1,
                                    _0x286158['_sounds'] = [],
                                    delete _0x4a5f2b[_0x486caf],
                                    _0x286158['load']());
                                }
                                ;
                                try {
                                    _0xe87323['send']();
                                } catch (_0x4683ff) {
                                    _0xe87323['onerror']();
                                }
                            }
                        }
                    }
                    return this;
                }
                this['_emit']('loaderror', null, 'No\x20codec\x20support\x20for\x20selected\x20audio\x20sources.');
            }
        },
        'play': function(_0x14cc5c, _0x1d2762) {
            var _0x2e98c8 = this
              , _0x58288b = null;
            if ('number' === typeof _0x14cc5c)
                _0x58288b = _0x14cc5c,
                _0x14cc5c = null;
            else {
                if ('string' === typeof _0x14cc5c && 'loaded' === _0x2e98c8['_state'] && !_0x2e98c8['_sprite'][_0x14cc5c])
                    return null;
                if ('undefined' === typeof _0x14cc5c && (_0x14cc5c = '__default',
                !_0x2e98c8['_playLock'])) {
                    for (var _0x4ff9ae = 0x0, _0x282e64 = 0x0; _0x282e64 < _0x2e98c8['_sounds']['length']; _0x282e64++)
                        _0x2e98c8['_sounds'][_0x282e64]['_paused'] && !_0x2e98c8['_sounds'][_0x282e64]['_ended'] && (_0x4ff9ae++,
                        _0x58288b = _0x2e98c8['_sounds'][_0x282e64]['_id']);
                    0x1 === _0x4ff9ae ? _0x14cc5c = null : _0x58288b = null;
                }
            }
            var _0x66c5e2 = _0x58288b ? _0x2e98c8['_soundById'](_0x58288b) : _0x2e98c8['_inactiveSound']();
            if (!_0x66c5e2)
                return null;
            _0x58288b && !_0x14cc5c && (_0x14cc5c = _0x66c5e2['_sprite'] || '__default');
            if ('loaded' !== _0x2e98c8['_state']) {
                _0x66c5e2['_sprite'] = _0x14cc5c,
                _0x66c5e2['_ended'] = !0x1;
                var _0x38b1b8 = _0x66c5e2['_id'];
                return _0x2e98c8['_queue']['push']({
                    'event': 'play',
                    'action': function() {
                        _0x2e98c8['play'](_0x38b1b8);
                    }
                }),
                _0x38b1b8;
            }
            if (_0x58288b && !_0x66c5e2['_paused'])
                return _0x1d2762 || _0x2e98c8['_loadQueue']('play'),
                _0x66c5e2['_id'];
            _0x2e98c8['_webAudio'] && _0x3c263a['_autoResume']();
            var _0x57317f = Math['max'](0x0, 0x0 < _0x66c5e2['_seek'] ? _0x66c5e2['_seek'] : _0x2e98c8['_sprite'][_0x14cc5c][0x0] / 0x3e8)
              , _0x8f6169 = Math['max'](0x0, (_0x2e98c8['_sprite'][_0x14cc5c][0x0] + _0x2e98c8['_sprite'][_0x14cc5c][0x1]) / 0x3e8 - _0x57317f)
              , _0x5267ba = 0x3e8 * _0x8f6169 / Math['abs'](_0x66c5e2['_rate'])
              , _0x1b2175 = _0x2e98c8['_sprite'][_0x14cc5c][0x0] / 0x3e8
              , _0x59b6af = (_0x2e98c8['_sprite'][_0x14cc5c][0x0] + _0x2e98c8['_sprite'][_0x14cc5c][0x1]) / 0x3e8;
            _0x66c5e2['_sprite'] = _0x14cc5c,
            _0x66c5e2['_ended'] = !0x1;
            var _0x3b7b56 = function() {
                _0x66c5e2['_paused'] = !0x1,
                _0x66c5e2['_seek'] = _0x57317f,
                _0x66c5e2['_start'] = _0x1b2175,
                _0x66c5e2['_stop'] = _0x59b6af,
                _0x66c5e2['_loop'] = !(!_0x66c5e2['_loop'] && !_0x2e98c8['_sprite'][_0x14cc5c][0x2]);
            };
            if (_0x57317f >= _0x59b6af)
                _0x2e98c8['_ended'](_0x66c5e2);
            else {
                var _0x57f96b = _0x66c5e2['_node'];
                if (_0x2e98c8['_webAudio'])
                    _0x58288b = function() {
                        _0x2e98c8['_playLock'] = !0x1,
                        _0x3b7b56(),
                        _0x2e98c8['_refreshBuffer'](_0x66c5e2),
                        _0x57f96b['gain']['setValueAtTime'](_0x66c5e2['_muted'] || _0x2e98c8['_muted'] ? 0x0 : _0x66c5e2['_volume'], _0x3c263a['ctx']['currentTime']),
                        _0x66c5e2['_playStart'] = _0x3c263a['ctx']['currentTime'],
                        'undefined' === typeof _0x57f96b['bufferSource']['start'] ? _0x66c5e2['_loop'] ? _0x57f96b['bufferSource']['noteGrainOn'](0x0, _0x57317f, 0x15180) : _0x57f96b['bufferSource']['noteGrainOn'](0x0, _0x57317f, _0x8f6169) : _0x66c5e2['_loop'] ? _0x57f96b['bufferSource']['start'](0x0, _0x57317f, 0x15180) : _0x57f96b['bufferSource']['start'](0x0, _0x57317f, _0x8f6169),
                        Infinity !== _0x5267ba && (_0x2e98c8['_endTimers'][_0x66c5e2['_id']] = setTimeout(_0x2e98c8['_ended']['bind'](_0x2e98c8, _0x66c5e2), _0x5267ba)),
                        _0x1d2762 || setTimeout(function() {
                            _0x2e98c8['_emit']('play', _0x66c5e2['_id']),
                            _0x2e98c8['_loadQueue']();
                        }, 0x0);
                    }
                    ,
                    'running' === _0x3c263a['state'] && 'interrupted' !== _0x3c263a['ctx']['state'] ? _0x58288b() : (_0x2e98c8['_playLock'] = !0x0,
                    _0x2e98c8['once']('resume', _0x58288b),
                    _0x2e98c8['_clearTimer'](_0x66c5e2['_id']));
                else {
                    var _0x1341f3 = function() {
                        _0x57f96b['currentTime'] = _0x57317f,
                        _0x57f96b['muted'] = _0x66c5e2['_muted'] || _0x2e98c8['_muted'] || _0x3c263a['_muted'] || _0x57f96b['muted'],
                        _0x57f96b['volume'] = _0x66c5e2['_volume'] * _0x3c263a['volume'](),
                        _0x57f96b['playbackRate'] = _0x66c5e2['_rate'];
                        try {
                            var _0x354df8 = _0x57f96b['play']();
                            _0x354df8 && 'undefined' !== typeof Promise && (_0x354df8 instanceof Promise || 'function' === typeof _0x354df8['then']) ? (_0x2e98c8['_playLock'] = !0x0,
                            _0x3b7b56(),
                            _0x354df8['then'](function() {
                                _0x2e98c8['_playLock'] = !0x1,
                                _0x57f96b['_unlocked'] = !0x0,
                                _0x1d2762 || (_0x2e98c8['_emit']('play', _0x66c5e2['_id']),
                                _0x2e98c8['_loadQueue']());
                            })['catch'](function() {
                                _0x2e98c8['_playLock'] = !0x1,
                                _0x2e98c8['_emit']('playerror', _0x66c5e2['_id'], 'Playback\x20was\x20unable\x20to\x20start.\x20This\x20is\x20most\x20commonly\x20an\x20issue\x20on\x20mobile\x20devices\x20and\x20Chrome\x20where\x20playback\x20was\x20not\x20within\x20a\x20user\x20interaction.'),
                                _0x66c5e2['_ended'] = !0x0,
                                _0x66c5e2['_paused'] = !0x0;
                            })) : _0x1d2762 || (_0x2e98c8['_playLock'] = !0x1,
                            _0x3b7b56(),
                            _0x2e98c8['_emit']('play', _0x66c5e2['_id']),
                            _0x2e98c8['_loadQueue']()),
                            _0x57f96b['playbackRate'] = _0x66c5e2['_rate'],
                            _0x57f96b['paused'] ? _0x2e98c8['_emit']('playerror', _0x66c5e2['_id'], 'Playback\x20was\x20unable\x20to\x20start.\x20This\x20is\x20most\x20commonly\x20an\x20issue\x20on\x20mobile\x20devices\x20and\x20Chrome\x20where\x20playback\x20was\x20not\x20within\x20a\x20user\x20interaction.') : '__default' !== _0x14cc5c || _0x66c5e2['_loop'] ? _0x2e98c8['_endTimers'][_0x66c5e2['_id']] = setTimeout(_0x2e98c8['_ended']['bind'](_0x2e98c8, _0x66c5e2), _0x5267ba) : (_0x2e98c8['_endTimers'][_0x66c5e2['_id']] = function() {
                                _0x2e98c8['_ended'](_0x66c5e2),
                                _0x57f96b['removeEventListener']('ended', _0x2e98c8['_endTimers'][_0x66c5e2['_id']], !0x1);
                            }
                            ,
                            _0x57f96b['addEventListener']('ended', _0x2e98c8['_endTimers'][_0x66c5e2['_id']], !0x1));
                        } catch (_0xb69a18) {
                            _0x2e98c8['_emit']('playerror', _0x66c5e2['_id'], _0xb69a18);
                        }
                    };
                    'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA' === _0x57f96b['src'] && (_0x57f96b['src'] = _0x2e98c8['_src'],
                    _0x57f96b['load']()),
                    _0x58288b = window && window['ejecta'] || !_0x57f96b['readyState'] && _0x3c263a['_navigator']['isCocoonJS'];
                    if (0x3 <= _0x57f96b['readyState'] || _0x58288b)
                        _0x1341f3();
                    else {
                        _0x2e98c8['_playLock'] = !0x0;
                        var _0x5f804e = function() {
                            _0x1341f3(),
                            _0x57f96b['removeEventListener'](_0x3c263a['_canPlayEvent'], _0x5f804e, !0x1);
                        };
                        _0x57f96b['addEventListener'](_0x3c263a['_canPlayEvent'], _0x5f804e, !0x1),
                        _0x2e98c8['_clearTimer'](_0x66c5e2['_id']);
                    }
                }
                return _0x66c5e2['_id'];
            }
        },
        'pause': function(_0x1ab99d, _0x47882d) {
            var _0x3c40e4 = this;
            if ('loaded' !== _0x3c40e4['_state'] || _0x3c40e4['_playLock'])
                return _0x3c40e4['_queue']['push']({
                    'event': 'pause',
                    'action': function() {
                        _0x3c40e4['pause'](_0x1ab99d);
                    }
                }),
                _0x3c40e4;
            for (var _0x1228f8 = _0x3c40e4['_getSoundIds'](_0x1ab99d), _0x2d32c9 = 0x0; _0x2d32c9 < _0x1228f8['length']; _0x2d32c9++) {
                _0x3c40e4['_clearTimer'](_0x1228f8[_0x2d32c9]);
                var _0x3f482b = _0x3c40e4['_soundById'](_0x1228f8[_0x2d32c9]);
                if (_0x3f482b && !_0x3f482b['_paused'] && (_0x3f482b['_seek'] = _0x3c40e4['seek'](_0x1228f8[_0x2d32c9]),
                _0x3f482b['_rateSeek'] = 0x0,
                _0x3f482b['_paused'] = !0x0,
                _0x3c40e4['_stopFade'](_0x1228f8[_0x2d32c9]),
                _0x3f482b['_node'])) {
                    if (_0x3c40e4['_webAudio']) {
                        if (!_0x3f482b['_node']['bufferSource'])
                            continue;
                        'undefined' === typeof _0x3f482b['_node']['bufferSource']['stop'] ? _0x3f482b['_node']['bufferSource']['noteOff'](0x0) : _0x3f482b['_node']['bufferSource']['stop'](0x0),
                        _0x3c40e4['_cleanBuffer'](_0x3f482b['_node']);
                    } else
                        (!isNaN(_0x3f482b['_node']['duration']) || Infinity === _0x3f482b['_node']['duration']) && _0x3f482b['_node']['pause']();
                }
                _0x47882d || _0x3c40e4['_emit']('pause', _0x3f482b ? _0x3f482b['_id'] : null);
            }
            return _0x3c40e4;
        },
        'stop': function(_0x1230fe, _0x552782) {
            var _0x1395db = this;
            if ('loaded' !== _0x1395db['_state'] || _0x1395db['_playLock'])
                return _0x1395db['_queue']['push']({
                    'event': 'stop',
                    'action': function() {
                        _0x1395db['stop'](_0x1230fe);
                    }
                }),
                _0x1395db;
            for (var _0x4f0a73 = _0x1395db['_getSoundIds'](_0x1230fe), _0x357ed5 = 0x0; _0x357ed5 < _0x4f0a73['length']; _0x357ed5++) {
                _0x1395db['_clearTimer'](_0x4f0a73[_0x357ed5]);
                var _0x52347c = _0x1395db['_soundById'](_0x4f0a73[_0x357ed5]);
                if (_0x52347c) {
                    _0x52347c['_seek'] = _0x52347c['_start'] || 0x0,
                    _0x52347c['_rateSeek'] = 0x0,
                    _0x52347c['_paused'] = !0x0,
                    _0x52347c['_ended'] = !0x0,
                    _0x1395db['_stopFade'](_0x4f0a73[_0x357ed5]);
                    if (_0x52347c['_node']) {
                        if (_0x1395db['_webAudio'])
                            _0x52347c['_node']['bufferSource'] && ('undefined' === typeof _0x52347c['_node']['bufferSource']['stop'] ? _0x52347c['_node']['bufferSource']['noteOff'](0x0) : _0x52347c['_node']['bufferSource']['stop'](0x0),
                            _0x1395db['_cleanBuffer'](_0x52347c['_node']));
                        else {
                            if (!isNaN(_0x52347c['_node']['duration']) || Infinity === _0x52347c['_node']['duration'])
                                _0x52347c['_node']['currentTime'] = _0x52347c['_start'] || 0x0,
                                _0x52347c['_node']['pause'](),
                                Infinity === _0x52347c['_node']['duration'] && _0x1395db['_clearSound'](_0x52347c['_node']);
                        }
                    }
                    _0x552782 || _0x1395db['_emit']('stop', _0x52347c['_id']);
                }
            }
            return _0x1395db;
        },
        'mute': function(_0x21380c, _0x4ce8be) {
            var _0x22ba3d = this;
            if ('loaded' !== _0x22ba3d['_state'] || _0x22ba3d['_playLock'])
                return _0x22ba3d['_queue']['push']({
                    'event': 'mute',
                    'action': function() {
                        _0x22ba3d['mute'](_0x21380c, _0x4ce8be);
                    }
                }),
                _0x22ba3d;
            if ('undefined' === typeof _0x4ce8be) {
                if ('boolean' === typeof _0x21380c)
                    _0x22ba3d['_muted'] = _0x21380c;
                else
                    return _0x22ba3d['_muted'];
            }
            for (var _0x5394c0 = _0x22ba3d['_getSoundIds'](_0x4ce8be), _0x23c1b1 = 0x0; _0x23c1b1 < _0x5394c0['length']; _0x23c1b1++) {
                var _0x3b51fe = _0x22ba3d['_soundById'](_0x5394c0[_0x23c1b1]);
                _0x3b51fe && (_0x3b51fe['_muted'] = _0x21380c,
                _0x3b51fe['_interval'] && _0x22ba3d['_stopFade'](_0x3b51fe['_id']),
                _0x22ba3d['_webAudio'] && _0x3b51fe['_node'] ? _0x3b51fe['_node']['gain']['setValueAtTime'](_0x21380c ? 0x0 : _0x3b51fe['_volume'], _0x3c263a['ctx']['currentTime']) : _0x3b51fe['_node'] && (_0x3b51fe['_node']['muted'] = _0x3c263a['_muted'] ? !0x0 : _0x21380c),
                _0x22ba3d['_emit']('mute', _0x3b51fe['_id']));
            }
            return _0x22ba3d;
        },
        'volume': function() {
            var _0x496c81 = this, _0x294e9b = arguments, _0x3de081, _0x1e01b1;
            if (0x0 === _0x294e9b['length'])
                return _0x496c81['_volume'];
            0x1 === _0x294e9b['length'] || 0x2 === _0x294e9b['length'] && 'undefined' === typeof _0x294e9b[0x1] ? 0x0 <= _0x496c81['_getSoundIds']()['indexOf'](_0x294e9b[0x0]) ? _0x1e01b1 = parseInt(_0x294e9b[0x0], 0xa) : _0x3de081 = parseFloat(_0x294e9b[0x0]) : 0x2 <= _0x294e9b['length'] && (_0x3de081 = parseFloat(_0x294e9b[0x0]),
            _0x1e01b1 = parseInt(_0x294e9b[0x1], 0xa));
            var _0x77152f;
            if ('undefined' !== typeof _0x3de081 && 0x0 <= _0x3de081 && 0x1 >= _0x3de081) {
                if ('loaded' !== _0x496c81['_state'] || _0x496c81['_playLock'])
                    return _0x496c81['_queue']['push']({
                        'event': 'volume',
                        'action': function() {
                            _0x496c81['volume']['apply'](_0x496c81, _0x294e9b);
                        }
                    }),
                    _0x496c81;
                'undefined' === typeof _0x1e01b1 && (_0x496c81['_volume'] = _0x3de081),
                _0x1e01b1 = _0x496c81['_getSoundIds'](_0x1e01b1);
                for (var _0x19df72 = 0x0; _0x19df72 < _0x1e01b1['length']; _0x19df72++)
                    if (_0x77152f = _0x496c81['_soundById'](_0x1e01b1[_0x19df72]))
                        _0x77152f['_volume'] = _0x3de081,
                        _0x294e9b[0x2] || _0x496c81['_stopFade'](_0x1e01b1[_0x19df72]),
                        _0x496c81['_webAudio'] && _0x77152f['_node'] && !_0x77152f['_muted'] ? _0x77152f['_node']['gain']['setValueAtTime'](_0x3de081, _0x3c263a['ctx']['currentTime']) : _0x77152f['_node'] && !_0x77152f['_muted'] && (_0x77152f['_node']['volume'] = _0x3de081 * _0x3c263a['volume']()),
                        _0x496c81['_emit']('volume', _0x77152f['_id']);
            } else
                return (_0x77152f = _0x1e01b1 ? _0x496c81['_soundById'](_0x1e01b1) : _0x496c81['_sounds'][0x0]) ? _0x77152f['_volume'] : 0x0;
            return _0x496c81;
        },
        'fade': function(_0x164931, _0x31b870, _0x2498dd, _0x4a7f0b) {
            var _0x1845b7 = this;
            if ('loaded' !== _0x1845b7['_state'] || _0x1845b7['_playLock'])
                return _0x1845b7['_queue']['push']({
                    'event': 'fade',
                    'action': function() {
                        _0x1845b7['fade'](_0x164931, _0x31b870, _0x2498dd, _0x4a7f0b);
                    }
                }),
                _0x1845b7;
            _0x164931 = Math['min'](Math['max'](0x0, parseFloat(_0x164931)), 0x1),
            _0x31b870 = Math['min'](Math['max'](0x0, parseFloat(_0x31b870)), 0x1),
            _0x2498dd = parseFloat(_0x2498dd),
            _0x1845b7['volume'](_0x164931, _0x4a7f0b);
            for (var _0x51c4e1 = _0x1845b7['_getSoundIds'](_0x4a7f0b), _0x209546 = 0x0; _0x209546 < _0x51c4e1['length']; _0x209546++) {
                var _0x1b1f1c = _0x1845b7['_soundById'](_0x51c4e1[_0x209546]);
                if (_0x1b1f1c) {
                    _0x4a7f0b || _0x1845b7['_stopFade'](_0x51c4e1[_0x209546]);
                    if (_0x1845b7['_webAudio'] && !_0x1b1f1c['_muted']) {
                        var _0x1fe7db = _0x3c263a['ctx']['currentTime']
                          , _0x2ce7b0 = _0x1fe7db + _0x2498dd / 0x3e8;
                        _0x1b1f1c['_volume'] = _0x164931,
                        _0x1b1f1c['_node']['gain']['setValueAtTime'](_0x164931, _0x1fe7db),
                        _0x1b1f1c['_node']['gain']['linearRampToValueAtTime'](_0x31b870, _0x2ce7b0);
                    }
                    _0x1845b7['_startFadeInterval'](_0x1b1f1c, _0x164931, _0x31b870, _0x2498dd, _0x51c4e1[_0x209546], 'undefined' === typeof _0x4a7f0b);
                }
            }
            return _0x1845b7;
        },
        '_startFadeInterval': function(_0x210801, _0x53e676, _0x1eda33, _0x255abd, _0x4a7842, _0x359614) {
            var _0x18d796 = this
              , _0x35b099 = _0x53e676
              , _0x35fabc = _0x1eda33 - _0x53e676;
            _0x4a7842 = Math['abs'](_0x35fabc / 0.01),
            _0x4a7842 = Math['max'](0x4, 0x0 < _0x4a7842 ? _0x255abd / _0x4a7842 : _0x255abd);
            var _0x1ca23c = Date['now']();
            _0x210801['_fadeTo'] = _0x1eda33,
            _0x210801['_interval'] = setInterval(function() {
                var _0x11c07d = (Date['now']() - _0x1ca23c) / _0x255abd;
                _0x1ca23c = Date['now'](),
                _0x35b099 += _0x35fabc * _0x11c07d,
                _0x35b099 = 0x0 > _0x35fabc ? Math['max'](_0x1eda33, _0x35b099) : Math['min'](_0x1eda33, _0x35b099),
                _0x35b099 = Math['round'](0x64 * _0x35b099) / 0x64,
                _0x18d796['_webAudio'] ? _0x210801['_volume'] = _0x35b099 : _0x18d796['volume'](_0x35b099, _0x210801['_id'], !0x0),
                _0x359614 && (_0x18d796['_volume'] = _0x35b099);
                if (_0x1eda33 < _0x53e676 && _0x35b099 <= _0x1eda33 || _0x1eda33 > _0x53e676 && _0x35b099 >= _0x1eda33)
                    clearInterval(_0x210801['_interval']),
                    _0x210801['_interval'] = null,
                    _0x210801['_fadeTo'] = null,
                    _0x18d796['volume'](_0x1eda33, _0x210801['_id']),
                    _0x18d796['_emit']('fade', _0x210801['_id']);
            }, _0x4a7842);
        },
        '_stopFade': function(_0x43824b) {
            var _0x46f08f = this['_soundById'](_0x43824b);
            return _0x46f08f && _0x46f08f['_interval'] && (this['_webAudio'] && _0x46f08f['_node']['gain']['cancelScheduledValues'](_0x3c263a['ctx']['currentTime']),
            clearInterval(_0x46f08f['_interval']),
            _0x46f08f['_interval'] = null,
            this['volume'](_0x46f08f['_fadeTo'], _0x43824b),
            _0x46f08f['_fadeTo'] = null,
            this['_emit']('fade', _0x43824b)),
            this;
        },
        'loop': function() {
            var _0x4d8197 = arguments, _0x3a3a7b, _0x39f436;
            if (0x0 === _0x4d8197['length'])
                return this['_loop'];
            if (0x1 === _0x4d8197['length']) {
                if ('boolean' === typeof _0x4d8197[0x0])
                    this['_loop'] = _0x3a3a7b = _0x4d8197[0x0];
                else
                    return (_0x4d8197 = this['_soundById'](parseInt(_0x4d8197[0x0], 0xa))) ? _0x4d8197['_loop'] : !0x1;
            } else
                0x2 === _0x4d8197['length'] && (_0x3a3a7b = _0x4d8197[0x0],
                _0x39f436 = parseInt(_0x4d8197[0x1], 0xa));
            _0x39f436 = this['_getSoundIds'](_0x39f436);
            for (var _0xd92bbe = 0x0; _0xd92bbe < _0x39f436['length']; _0xd92bbe++)
                if (_0x4d8197 = this['_soundById'](_0x39f436[_0xd92bbe])) {
                    if (_0x4d8197['_loop'] = _0x3a3a7b,
                    this['_webAudio'] && _0x4d8197['_node'] && _0x4d8197['_node']['bufferSource'] && (_0x4d8197['_node']['bufferSource']['loop'] = _0x3a3a7b))
                        _0x4d8197['_node']['bufferSource']['loopStart'] = _0x4d8197['_start'] || 0x0,
                        _0x4d8197['_node']['bufferSource']['loopEnd'] = _0x4d8197['_stop'];
                }
            return this;
        },
        'rate': function() {
            var _0x3a6bfa = this, _0x304c6d = arguments, _0x2f92d1, _0x44c21f;
            0x0 === _0x304c6d['length'] ? _0x44c21f = _0x3a6bfa['_sounds'][0x0]['_id'] : 0x1 === _0x304c6d['length'] ? 0x0 <= _0x3a6bfa['_getSoundIds']()['indexOf'](_0x304c6d[0x0]) ? _0x44c21f = parseInt(_0x304c6d[0x0], 0xa) : _0x2f92d1 = parseFloat(_0x304c6d[0x0]) : 0x2 === _0x304c6d['length'] && (_0x2f92d1 = parseFloat(_0x304c6d[0x0]),
            _0x44c21f = parseInt(_0x304c6d[0x1], 0xa));
            var _0x25dc1d;
            if ('number' === typeof _0x2f92d1) {
                if ('loaded' !== _0x3a6bfa['_state'] || _0x3a6bfa['_playLock'])
                    return _0x3a6bfa['_queue']['push']({
                        'event': 'rate',
                        'action': function() {
                            _0x3a6bfa['rate']['apply'](_0x3a6bfa, _0x304c6d);
                        }
                    }),
                    _0x3a6bfa;
                'undefined' === typeof _0x44c21f && (_0x3a6bfa['_rate'] = _0x2f92d1),
                _0x44c21f = _0x3a6bfa['_getSoundIds'](_0x44c21f);
                for (var _0x476133 = 0x0; _0x476133 < _0x44c21f['length']; _0x476133++)
                    if (_0x25dc1d = _0x3a6bfa['_soundById'](_0x44c21f[_0x476133])) {
                        _0x3a6bfa['playing'](_0x44c21f[_0x476133]) && (_0x25dc1d['_rateSeek'] = _0x3a6bfa['seek'](_0x44c21f[_0x476133]),
                        _0x25dc1d['_playStart'] = _0x3a6bfa['_webAudio'] ? _0x3c263a['ctx']['currentTime'] : _0x25dc1d['_playStart']),
                        _0x25dc1d['_rate'] = _0x2f92d1,
                        _0x3a6bfa['_webAudio'] && _0x25dc1d['_node'] && _0x25dc1d['_node']['bufferSource'] ? _0x25dc1d['_node']['bufferSource']['playbackRate']['setValueAtTime'](_0x2f92d1, _0x3c263a['ctx']['currentTime']) : _0x25dc1d['_node'] && (_0x25dc1d['_node']['playbackRate'] = _0x2f92d1);
                        var _0x2f07a3 = _0x3a6bfa['seek'](_0x44c21f[_0x476133])
                          , _0x2f07a3 = 0x3e8 * ((_0x3a6bfa['_sprite'][_0x25dc1d['_sprite']][0x0] + _0x3a6bfa['_sprite'][_0x25dc1d['_sprite']][0x1]) / 0x3e8 - _0x2f07a3) / Math['abs'](_0x25dc1d['_rate']);
                        if (_0x3a6bfa['_endTimers'][_0x44c21f[_0x476133]] || !_0x25dc1d['_paused'])
                            _0x3a6bfa['_clearTimer'](_0x44c21f[_0x476133]),
                            _0x3a6bfa['_endTimers'][_0x44c21f[_0x476133]] = setTimeout(_0x3a6bfa['_ended']['bind'](_0x3a6bfa, _0x25dc1d), _0x2f07a3);
                        _0x3a6bfa['_emit']('rate', _0x25dc1d['_id']);
                    }
            } else
                return (_0x25dc1d = _0x3a6bfa['_soundById'](_0x44c21f)) ? _0x25dc1d['_rate'] : _0x3a6bfa['_rate'];
            return _0x3a6bfa;
        },
        'seek': function() {
            var _0x1da69a = this, _0x370ff2 = arguments, _0x41e6bb, _0x5dc983;
            0x0 === _0x370ff2['length'] ? _0x5dc983 = _0x1da69a['_sounds'][0x0]['_id'] : 0x1 === _0x370ff2['length'] ? 0x0 <= _0x1da69a['_getSoundIds']()['indexOf'](_0x370ff2[0x0]) ? _0x5dc983 = parseInt(_0x370ff2[0x0], 0xa) : _0x1da69a['_sounds']['length'] && (_0x5dc983 = _0x1da69a['_sounds'][0x0]['_id'],
            _0x41e6bb = parseFloat(_0x370ff2[0x0])) : 0x2 === _0x370ff2['length'] && (_0x41e6bb = parseFloat(_0x370ff2[0x0]),
            _0x5dc983 = parseInt(_0x370ff2[0x1], 0xa));
            if ('undefined' === typeof _0x5dc983)
                return _0x1da69a;
            if ('loaded' !== _0x1da69a['_state'] || _0x1da69a['_playLock'])
                return _0x1da69a['_queue']['push']({
                    'event': 'seek',
                    'action': function() {
                        _0x1da69a['seek']['apply'](_0x1da69a, _0x370ff2);
                    }
                }),
                _0x1da69a;
            var _0x1e4d1b = _0x1da69a['_soundById'](_0x5dc983);
            if (_0x1e4d1b) {
                if ('number' === typeof _0x41e6bb && 0x0 <= _0x41e6bb) {
                    var _0x11a10f = _0x1da69a['playing'](_0x5dc983);
                    _0x11a10f && _0x1da69a['pause'](_0x5dc983, !0x0),
                    _0x1e4d1b['_seek'] = _0x41e6bb,
                    _0x1e4d1b['_ended'] = !0x1,
                    _0x1da69a['_clearTimer'](_0x5dc983),
                    !_0x1da69a['_webAudio'] && _0x1e4d1b['_node'] && !isNaN(_0x1e4d1b['_node']['duration']) && (_0x1e4d1b['_node']['currentTime'] = _0x41e6bb);
                    var _0x3f7687 = function() {
                        _0x1da69a['_emit']('seek', _0x5dc983),
                        _0x11a10f && _0x1da69a['play'](_0x5dc983, !0x0);
                    };
                    if (_0x11a10f && !_0x1da69a['_webAudio']) {
                        var _0x1e490e = function() {
                            _0x1da69a['_playLock'] ? setTimeout(_0x1e490e, 0x0) : _0x3f7687();
                        };
                        setTimeout(_0x1e490e, 0x0);
                    } else
                        _0x3f7687();
                } else
                    return _0x1da69a['_webAudio'] ? (_0x41e6bb = _0x1da69a['playing'](_0x5dc983) ? _0x3c263a['ctx']['currentTime'] - _0x1e4d1b['_playStart'] : 0x0,
                    _0x1e4d1b['_seek'] + ((_0x1e4d1b['_rateSeek'] ? _0x1e4d1b['_rateSeek'] - _0x1e4d1b['_seek'] : 0x0) + _0x41e6bb * Math['abs'](_0x1e4d1b['_rate']))) : _0x1e4d1b['_node']['currentTime'];
            }
            return _0x1da69a;
        },
        'playing': function(_0x4f6001) {
            if ('number' === typeof _0x4f6001)
                return (_0x4f6001 = this['_soundById'](_0x4f6001)) ? !_0x4f6001['_paused'] : !0x1;
            for (_0x4f6001 = 0x0; _0x4f6001 < this['_sounds']['length']; _0x4f6001++)
                if (!this['_sounds'][_0x4f6001]['_paused'])
                    return !0x0;
            return !0x1;
        },
        'duration': function(_0x260513) {
            var _0x1a3960 = this['_duration'];
            return (_0x260513 = this['_soundById'](_0x260513)) && (_0x1a3960 = this['_sprite'][_0x260513['_sprite']][0x1] / 0x3e8),
            _0x1a3960;
        },
        'state': function() {
            return this['_state'];
        },
        'unload': function() {
            for (var _0x43a88f = this['_sounds'], _0x5a79e7 = 0x0; _0x5a79e7 < _0x43a88f['length']; _0x5a79e7++)
                _0x43a88f[_0x5a79e7]['_paused'] || this['stop'](_0x43a88f[_0x5a79e7]['_id']),
                this['_webAudio'] || (this['_clearSound'](_0x43a88f[_0x5a79e7]['_node']),
                _0x43a88f[_0x5a79e7]['_node']['removeEventListener']('error', _0x43a88f[_0x5a79e7]['_errorFn'], !0x1),
                _0x43a88f[_0x5a79e7]['_node']['removeEventListener'](_0x3c263a['_canPlayEvent'], _0x43a88f[_0x5a79e7]['_loadFn'], !0x1),
                _0x3c263a['_releaseHtml5Audio'](_0x43a88f[_0x5a79e7]['_node'])),
                delete _0x43a88f[_0x5a79e7]['_node'],
                this['_clearTimer'](_0x43a88f[_0x5a79e7]['_id']);
            _0x5a79e7 = _0x3c263a['_howls']['indexOf'](this),
            0x0 <= _0x5a79e7 && _0x3c263a['_howls']['splice'](_0x5a79e7, 0x1),
            _0x43a88f = !0x0;
            for (_0x5a79e7 = 0x0; _0x5a79e7 < _0x3c263a['_howls']['length']; _0x5a79e7++)
                if (_0x3c263a['_howls'][_0x5a79e7]['_src'] === this['_src'] || 0x0 <= this['_src']['indexOf'](_0x3c263a['_howls'][_0x5a79e7]['_src'])) {
                    _0x43a88f = !0x1;
                    break;
                }
            return _0x4a5f2b && _0x43a88f && delete _0x4a5f2b[this['_src']],
            _0x3c263a['noAudio'] = !0x1,
            this['_state'] = 'unloaded',
            this['_sounds'] = [],
            null;
        },
        'on': function(_0x481885, _0x473300, _0x36e3c8, _0x37ec6d) {
            return _0x481885 = this['_on' + _0x481885],
            'function' === typeof _0x473300 && _0x481885['push'](_0x37ec6d ? {
                'id': _0x36e3c8,
                'fn': _0x473300,
                'once': _0x37ec6d
            } : {
                'id': _0x36e3c8,
                'fn': _0x473300
            }),
            this;
        },
        'off': function(_0x26e083, _0x4179c2, _0x5a3f13) {
            var _0x1339a1 = this['_on' + _0x26e083]
              , _0x3a3f09 = 0x0;
            'number' === typeof _0x4179c2 && (_0x5a3f13 = _0x4179c2,
            _0x4179c2 = null);
            if (_0x4179c2 || _0x5a3f13)
                for (_0x3a3f09 = 0x0; _0x3a3f09 < _0x1339a1['length']; _0x3a3f09++) {
                    if (_0x26e083 = _0x5a3f13 === _0x1339a1[_0x3a3f09]['id'],
                    _0x4179c2 === _0x1339a1[_0x3a3f09]['fn'] && _0x26e083 || !_0x4179c2 && _0x26e083) {
                        _0x1339a1['splice'](_0x3a3f09, 0x1);
                        break;
                    }
                }
            else {
                if (_0x26e083)
                    this['_on' + _0x26e083] = [];
                else {
                    _0x4179c2 = Object['keys'](this);
                    for (_0x3a3f09 = 0x0; _0x3a3f09 < _0x4179c2['length']; _0x3a3f09++)
                        0x0 === _0x4179c2[_0x3a3f09]['indexOf']('_on') && Array['isArray'](this[_0x4179c2[_0x3a3f09]]) && (this[_0x4179c2[_0x3a3f09]] = []);
                }
            }
            return this;
        },
        'once': function(_0x5cb7d3, _0x25c8dd, _0x256788) {
            return this['on'](_0x5cb7d3, _0x25c8dd, _0x256788, 0x1),
            this;
        },
        '_emit': function(_0x6fffa6, _0x1a4962, _0x46f604) {
            for (var _0xc2cc6c = this['_on' + _0x6fffa6], _0x1e2278 = _0xc2cc6c['length'] - 0x1; 0x0 <= _0x1e2278; _0x1e2278--)
                if (!_0xc2cc6c[_0x1e2278]['id'] || _0xc2cc6c[_0x1e2278]['id'] === _0x1a4962 || 'load' === _0x6fffa6)
                    setTimeout(function(_0x49edc4) {
                        _0x49edc4['call'](this, _0x1a4962, _0x46f604);
                    }
                    ['bind'](this, _0xc2cc6c[_0x1e2278]['fn']), 0x0),
                    _0xc2cc6c[_0x1e2278]['once'] && this['off'](_0x6fffa6, _0xc2cc6c[_0x1e2278]['fn'], _0xc2cc6c[_0x1e2278]['id']);
            return this['_loadQueue'](_0x6fffa6),
            this;
        },
        '_loadQueue': function(_0x315ebd) {
            if (0x0 < this['_queue']['length']) {
                var _0x121c95 = this['_queue'][0x0];
                _0x121c95['event'] === _0x315ebd && (this['_queue']['shift'](),
                this['_loadQueue']()),
                _0x315ebd || _0x121c95['action']();
            }
            return this;
        },
        '_ended': function(_0x5110bd) {
            var _0x3c8de9 = _0x5110bd['_sprite'];
            if (!this['_webAudio'] && _0x5110bd['_node'] && !_0x5110bd['_node']['paused'] && !_0x5110bd['_node']['ended'] && _0x5110bd['_node']['currentTime'] < _0x5110bd['_stop'])
                return setTimeout(this['_ended']['bind'](this, _0x5110bd), 0x64),
                this;
            _0x3c8de9 = !(!_0x5110bd['_loop'] && !this['_sprite'][_0x3c8de9][0x2]),
            this['_emit']('end', _0x5110bd['_id']),
            !this['_webAudio'] && _0x3c8de9 && this['stop'](_0x5110bd['_id'], !0x0)['play'](_0x5110bd['_id']);
            if (this['_webAudio'] && _0x3c8de9) {
                this['_emit']('play', _0x5110bd['_id']),
                _0x5110bd['_seek'] = _0x5110bd['_start'] || 0x0,
                _0x5110bd['_rateSeek'] = 0x0,
                _0x5110bd['_playStart'] = _0x3c263a['ctx']['currentTime'];
                var _0x159bf9 = 0x3e8 * (_0x5110bd['_stop'] - _0x5110bd['_start']) / Math['abs'](_0x5110bd['_rate']);
                this['_endTimers'][_0x5110bd['_id']] = setTimeout(this['_ended']['bind'](this, _0x5110bd), _0x159bf9);
            }
            return this['_webAudio'] && !_0x3c8de9 && (_0x5110bd['_paused'] = !0x0,
            _0x5110bd['_ended'] = !0x0,
            _0x5110bd['_seek'] = _0x5110bd['_start'] || 0x0,
            _0x5110bd['_rateSeek'] = 0x0,
            this['_clearTimer'](_0x5110bd['_id']),
            this['_cleanBuffer'](_0x5110bd['_node']),
            _0x3c263a['_autoSuspend']()),
            !this['_webAudio'] && !_0x3c8de9 && this['stop'](_0x5110bd['_id'], !0x0),
            this;
        },
        '_clearTimer': function(_0xb95195) {
            if (this['_endTimers'][_0xb95195]) {
                if ('function' !== typeof this['_endTimers'][_0xb95195])
                    clearTimeout(this['_endTimers'][_0xb95195]);
                else {
                    var _0x12033c = this['_soundById'](_0xb95195);
                    _0x12033c && _0x12033c['_node'] && _0x12033c['_node']['removeEventListener']('ended', this['_endTimers'][_0xb95195], !0x1);
                }
                delete this['_endTimers'][_0xb95195];
            }
            return this;
        },
        '_soundById': function(_0x29a6e5) {
            for (var _0xca1248 = 0x0; _0xca1248 < this['_sounds']['length']; _0xca1248++)
                if (_0x29a6e5 === this['_sounds'][_0xca1248]['_id'])
                    return this['_sounds'][_0xca1248];
            return null;
        },
        '_inactiveSound': function() {
            this['_drain']();
            for (var _0x5cd492 = 0x0; _0x5cd492 < this['_sounds']['length']; _0x5cd492++)
                if (this['_sounds'][_0x5cd492]['_ended'])
                    return this['_sounds'][_0x5cd492]['reset']();
            return new _0x25d97a(this);
        },
        '_drain': function() {
            var _0xba8ca1 = this['_pool']
              , _0x25d2bf = 0x0
              , _0x1a0288 = 0x0;
            if (!(this['_sounds']['length'] < _0xba8ca1)) {
                for (_0x1a0288 = 0x0; _0x1a0288 < this['_sounds']['length']; _0x1a0288++)
                    this['_sounds'][_0x1a0288]['_ended'] && _0x25d2bf++;
                for (_0x1a0288 = this['_sounds']['length'] - 0x1; 0x0 <= _0x1a0288 && !(_0x25d2bf <= _0xba8ca1); _0x1a0288--)
                    this['_sounds'][_0x1a0288]['_ended'] && (this['_webAudio'] && this['_sounds'][_0x1a0288]['_node'] && this['_sounds'][_0x1a0288]['_node']['disconnect'](0x0),
                    this['_sounds']['splice'](_0x1a0288, 0x1),
                    _0x25d2bf--);
            }
        },
        '_getSoundIds': function(_0x3a2609) {
            if ('undefined' === typeof _0x3a2609) {
                _0x3a2609 = [];
                for (var _0x2fa624 = 0x0; _0x2fa624 < this['_sounds']['length']; _0x2fa624++)
                    _0x3a2609['push'](this['_sounds'][_0x2fa624]['_id']);
                return _0x3a2609;
            }
            return [_0x3a2609];
        },
        '_refreshBuffer': function(_0x324088) {
            _0x324088['_node']['bufferSource'] = _0x3c263a['ctx']['createBufferSource'](),
            _0x324088['_node']['bufferSource']['buffer'] = _0x4a5f2b[this['_src']],
            _0x324088['_panner'] ? _0x324088['_node']['bufferSource']['connect'](_0x324088['_panner']) : _0x324088['_node']['bufferSource']['connect'](_0x324088['_node']);
            if (_0x324088['_node']['bufferSource']['loop'] = _0x324088['_loop'])
                _0x324088['_node']['bufferSource']['loopStart'] = _0x324088['_start'] || 0x0,
                _0x324088['_node']['bufferSource']['loopEnd'] = _0x324088['_stop'] || 0x0;
            return _0x324088['_node']['bufferSource']['playbackRate']['setValueAtTime'](_0x324088['_rate'], _0x3c263a['ctx']['currentTime']),
            this;
        },
        '_cleanBuffer': function(_0x4c9eee) {
            var _0x94723c = _0x3c263a['_navigator'] && 0x0 <= _0x3c263a['_navigator']['vendor']['indexOf']('Apple');
            if (_0x3c263a['_scratchBuffer'] && _0x4c9eee['bufferSource'] && (_0x4c9eee['bufferSource']['onended'] = null,
            _0x4c9eee['bufferSource']['disconnect'](0x0),
            _0x94723c))
                try {
                    _0x4c9eee['bufferSource']['buffer'] = _0x3c263a['_scratchBuffer'];
                } catch (_0xd3545) {}
            return _0x4c9eee['bufferSource'] = null,
            this;
        },
        '_clearSound': function(_0x2a32e5) {
            /MSIE |Trident\//['test'](_0x3c263a['_navigator'] && _0x3c263a['_navigator']['userAgent']) || (_0x2a32e5['src'] = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
        }
    };
    var _0x25d97a = function(_0x4ca193) {
        this['_parent'] = _0x4ca193,
        this['init']();
    };
    _0x25d97a['prototype'] = {
        'init': function() {
            var _0x3031de = this['_parent'];
            return this['_muted'] = _0x3031de['_muted'],
            this['_loop'] = _0x3031de['_loop'],
            this['_volume'] = _0x3031de['_volume'],
            this['_rate'] = _0x3031de['_rate'],
            this['_seek'] = 0x0,
            this['_ended'] = this['_paused'] = !0x0,
            this['_sprite'] = '__default',
            this['_id'] = ++_0x3c263a['_counter'],
            _0x3031de['_sounds']['push'](this),
            this['create'](),
            this;
        },
        'create': function() {
            var _0x3b43ce = this['_parent']
              , _0x6141b9 = _0x3c263a['_muted'] || this['_muted'] || this['_parent']['_muted'] ? 0x0 : this['_volume'];
            return _0x3b43ce['_webAudio'] ? (this['_node'] = 'undefined' === typeof _0x3c263a['ctx']['createGain'] ? _0x3c263a['ctx']['createGainNode']() : _0x3c263a['ctx']['createGain'](),
            this['_node']['gain']['setValueAtTime'](_0x6141b9, _0x3c263a['ctx']['currentTime']),
            this['_node']['paused'] = !0x0,
            this['_node']['connect'](_0x3c263a['masterGain'])) : _0x3c263a['noAudio'] || (this['_node'] = _0x3c263a['_obtainHtml5Audio'](),
            this['_errorFn'] = this['_errorListener']['bind'](this),
            this['_node']['addEventListener']('error', this['_errorFn'], !0x1),
            this['_loadFn'] = this['_loadListener']['bind'](this),
            this['_node']['addEventListener'](_0x3c263a['_canPlayEvent'], this['_loadFn'], !0x1),
            this['_node']['src'] = _0x3b43ce['_src'],
            this['_node']['preload'] = !0x0 === _0x3b43ce['_preload'] ? 'auto' : _0x3b43ce['_preload'],
            this['_node']['volume'] = _0x6141b9 * _0x3c263a['volume'](),
            this['_node']['load']()),
            this;
        },
        'reset': function() {
            var _0x7dc001 = this['_parent'];
            return this['_muted'] = _0x7dc001['_muted'],
            this['_loop'] = _0x7dc001['_loop'],
            this['_volume'] = _0x7dc001['_volume'],
            this['_rate'] = _0x7dc001['_rate'],
            this['_rateSeek'] = this['_seek'] = 0x0,
            this['_ended'] = this['_paused'] = !0x0,
            this['_sprite'] = '__default',
            this['_id'] = ++_0x3c263a['_counter'],
            this;
        },
        '_errorListener': function() {
            this['_parent']['_emit']('loaderror', this['_id'], this['_node']['error'] ? this['_node']['error']['code'] : 0x0),
            this['_node']['removeEventListener']('error', this['_errorFn'], !0x1);
        },
        '_loadListener': function() {
            var _0x3be04c = this['_parent'];
            _0x3be04c['_duration'] = Math['ceil'](0xa * this['_node']['duration']) / 0xa,
            0x0 === Object['keys'](_0x3be04c['_sprite'])['length'] && (_0x3be04c['_sprite'] = {
                '__default': [0x0, 0x3e8 * _0x3be04c['_duration']]
            }),
            'loaded' !== _0x3be04c['_state'] && (_0x3be04c['_state'] = 'loaded',
            _0x3be04c['_emit']('load'),
            _0x3be04c['_loadQueue']()),
            this['_node']['removeEventListener'](_0x3c263a['_canPlayEvent'], this['_loadFn'], !0x1);
        }
    };
    var _0x4a5f2b = {}
      , _0x272148 = function(_0x57e561, _0x4e5113) {
        var _0x48e03f = function() {
            _0x4e5113['_emit']('loaderror', null, 'Decoding\x20audio\x20data\x20failed.');
        }
          , _0x5a018f = function(_0x3a2c73) {
            _0x3a2c73 && 0x0 < _0x4e5113['_sounds']['length'] ? (_0x4a5f2b[_0x4e5113['_src']] = _0x3a2c73,
            _0x4d0857(_0x4e5113, _0x3a2c73)) : _0x48e03f();
        };
        'undefined' !== typeof Promise && 0x1 === _0x3c263a['ctx']['decodeAudioData']['length'] ? _0x3c263a['ctx']['decodeAudioData'](_0x57e561)['then'](_0x5a018f)['catch'](_0x48e03f) : _0x3c263a['ctx']['decodeAudioData'](_0x57e561, _0x5a018f, _0x48e03f);
    }
      , _0x4d0857 = function(_0xe591d9, _0x40fdc5) {
        _0x40fdc5 && !_0xe591d9['_duration'] && (_0xe591d9['_duration'] = _0x40fdc5['duration']),
        0x0 === Object['keys'](_0xe591d9['_sprite'])['length'] && (_0xe591d9['_sprite'] = {
            '__default': [0x0, 0x3e8 * _0xe591d9['_duration']]
        }),
        'loaded' !== _0xe591d9['_state'] && (_0xe591d9['_state'] = 'loaded',
        _0xe591d9['_emit']('load'),
        _0xe591d9['_loadQueue']());
    }
      , _0xff13d6 = function() {
        if (_0x3c263a['usingWebAudio']) {
            try {
                'undefined' !== typeof AudioContext ? _0x3c263a['ctx'] = new AudioContext() : 'undefined' !== typeof webkitAudioContext ? _0x3c263a['ctx'] = new webkitAudioContext() : _0x3c263a['usingWebAudio'] = !0x1;
            } catch (_0x3f9527) {
                _0x3c263a['usingWebAudio'] = !0x1;
            }
            _0x3c263a['ctx'] || (_0x3c263a['usingWebAudio'] = !0x1);
            var _0x172610 = /iP(hone|od|ad)/['test'](_0x3c263a['_navigator'] && _0x3c263a['_navigator']['platform'])
              , _0x9ba9e6 = _0x3c263a['_navigator'] && _0x3c263a['_navigator']['appVersion']['match'](/OS (\d+)_(\d+)_?(\d+)?/)
              , _0x9ba9e6 = _0x9ba9e6 ? parseInt(_0x9ba9e6[0x1], 0xa) : null;
            _0x172610 && _0x9ba9e6 && 0x9 > _0x9ba9e6 && (_0x172610 = /safari/['test'](_0x3c263a['_navigator'] && _0x3c263a['_navigator']['userAgent']['toLowerCase']()),
            _0x3c263a['_navigator'] && !_0x172610 && (_0x3c263a['usingWebAudio'] = !0x1)),
            _0x3c263a['usingWebAudio'] && (_0x3c263a['masterGain'] = 'undefined' === typeof _0x3c263a['ctx']['createGain'] ? _0x3c263a['ctx']['createGainNode']() : _0x3c263a['ctx']['createGain'](),
            _0x3c263a['masterGain']['gain']['setValueAtTime'](_0x3c263a['_muted'] ? 0x0 : _0x3c263a['_volume'], _0x3c263a['ctx']['currentTime']),
            _0x3c263a['masterGain']['connect'](_0x3c263a['ctx']['destination'])),
            _0x3c263a['_setup']();
        }
    };
    'function' === typeof define && define['amd'] && define([], function() {
        return {
            'Howler': _0x3c263a,
            'Howl': _0x1389b8
        };
    }),
    'undefined' !== typeof exports && (exports['Howler'] = _0x3c263a,
    exports['Howl'] = _0x1389b8),
    'undefined' !== typeof global ? (global['HowlerGlobal'] = _0x10334e,
    global['Howler'] = _0x3c263a,
    global['Howl'] = _0x1389b8,
    global['Sound'] = _0x25d97a) : 'undefined' !== typeof window && (window['HowlerGlobal'] = _0x10334e,
    window['Howler'] = _0x3c263a,
    window['Howl'] = _0x1389b8,
    window['Sound'] = _0x25d97a);
}(),
function() {
    HowlerGlobal['prototype']['_pos'] = [0x0, 0x0, 0x0],
    HowlerGlobal['prototype']['_orientation'] = [0x0, 0x0, -0x1, 0x0, 0x1, 0x0],
    HowlerGlobal['prototype']['stereo'] = function(_0x192525) {
        if (!this['ctx'] || !this['ctx']['listener'])
            return this;
        for (var _0x515cbb = this['_howls']['length'] - 0x1; 0x0 <= _0x515cbb; _0x515cbb--)
            this['_howls'][_0x515cbb]['stereo'](_0x192525);
        return this;
    }
    ,
    HowlerGlobal['prototype']['pos'] = function(_0x378423, _0x51e3bc, _0x421a95) {
        if (!this['ctx'] || !this['ctx']['listener'])
            return this;
        _0x51e3bc = 'number' !== typeof _0x51e3bc ? this['_pos'][0x1] : _0x51e3bc,
        _0x421a95 = 'number' !== typeof _0x421a95 ? this['_pos'][0x2] : _0x421a95;
        if ('number' === typeof _0x378423)
            this['_pos'] = [_0x378423, _0x51e3bc, _0x421a95],
            'undefined' !== typeof this['ctx']['listener']['positionX'] ? (this['ctx']['listener']['positionX']['setTargetAtTime'](this['_pos'][0x0], Howler['ctx']['currentTime'], 0.1),
            this['ctx']['listener']['positionY']['setTargetAtTime'](this['_pos'][0x1], Howler['ctx']['currentTime'], 0.1),
            this['ctx']['listener']['positionZ']['setTargetAtTime'](this['_pos'][0x2], Howler['ctx']['currentTime'], 0.1)) : this['ctx']['listener']['setPosition'](this['_pos'][0x0], this['_pos'][0x1], this['_pos'][0x2]);
        else
            return this['_pos'];
        return this;
    }
    ,
    HowlerGlobal['prototype']['orientation'] = function(_0x4e8315, _0x3dd636, _0x4ae0d6, _0x3f5153, _0x11788e, _0xa6efe) {
        if (!this['ctx'] || !this['ctx']['listener'])
            return this;
        var _0x2e3fba = this['_orientation'];
        _0x3dd636 = 'number' !== typeof _0x3dd636 ? _0x2e3fba[0x1] : _0x3dd636,
        _0x4ae0d6 = 'number' !== typeof _0x4ae0d6 ? _0x2e3fba[0x2] : _0x4ae0d6,
        _0x3f5153 = 'number' !== typeof _0x3f5153 ? _0x2e3fba[0x3] : _0x3f5153,
        _0x11788e = 'number' !== typeof _0x11788e ? _0x2e3fba[0x4] : _0x11788e,
        _0xa6efe = 'number' !== typeof _0xa6efe ? _0x2e3fba[0x5] : _0xa6efe;
        if ('number' === typeof _0x4e8315)
            this['_orientation'] = [_0x4e8315, _0x3dd636, _0x4ae0d6, _0x3f5153, _0x11788e, _0xa6efe],
            'undefined' !== typeof this['ctx']['listener']['forwardX'] ? (this['ctx']['listener']['forwardX']['setTargetAtTime'](_0x4e8315, Howler['ctx']['currentTime'], 0.1),
            this['ctx']['listener']['forwardY']['setTargetAtTime'](_0x3dd636, Howler['ctx']['currentTime'], 0.1),
            this['ctx']['listener']['forwardZ']['setTargetAtTime'](_0x4ae0d6, Howler['ctx']['currentTime'], 0.1),
            this['ctx']['listener']['upX']['setTargetAtTime'](_0x3f5153, Howler['ctx']['currentTime'], 0.1),
            this['ctx']['listener']['upY']['setTargetAtTime'](_0x11788e, Howler['ctx']['currentTime'], 0.1),
            this['ctx']['listener']['upZ']['setTargetAtTime'](_0xa6efe, Howler['ctx']['currentTime'], 0.1)) : this['ctx']['listener']['setOrientation'](_0x4e8315, _0x3dd636, _0x4ae0d6, _0x3f5153, _0x11788e, _0xa6efe);
        else
            return _0x2e3fba;
        return this;
    }
    ;
    var _0x1cb9c1 = Howl['prototype']['init'];
    Howl['prototype']['init'] = function(_0x127f92) {
        return this['_orientation'] = _0x127f92['orientation'] || [0x1, 0x0, 0x0],
        this['_stereo'] = _0x127f92['stereo'] || null,
        this['_pos'] = _0x127f92['pos'] || null,
        this['_pannerAttr'] = {
            'coneInnerAngle': 'undefined' !== typeof _0x127f92['coneInnerAngle'] ? _0x127f92['coneInnerAngle'] : 0x168,
            'coneOuterAngle': 'undefined' !== typeof _0x127f92['coneOuterAngle'] ? _0x127f92['coneOuterAngle'] : 0x168,
            'coneOuterGain': 'undefined' !== typeof _0x127f92['coneOuterGain'] ? _0x127f92['coneOuterGain'] : 0x0,
            'distanceModel': 'undefined' !== typeof _0x127f92['distanceModel'] ? _0x127f92['distanceModel'] : 'inverse',
            'maxDistance': 'undefined' !== typeof _0x127f92['maxDistance'] ? _0x127f92['maxDistance'] : 0x2710,
            'panningModel': 'undefined' !== typeof _0x127f92['panningModel'] ? _0x127f92['panningModel'] : 'HRTF',
            'refDistance': 'undefined' !== typeof _0x127f92['refDistance'] ? _0x127f92['refDistance'] : 0x1,
            'rolloffFactor': 'undefined' !== typeof _0x127f92['rolloffFactor'] ? _0x127f92['rolloffFactor'] : 0x1
        },
        this['_onstereo'] = _0x127f92['onstereo'] ? [{
            'fn': _0x127f92['onstereo']
        }] : [],
        this['_onpos'] = _0x127f92['onpos'] ? [{
            'fn': _0x127f92['onpos']
        }] : [],
        this['_onorientation'] = _0x127f92['onorientation'] ? [{
            'fn': _0x127f92['onorientation']
        }] : [],
        _0x1cb9c1['call'](this, _0x127f92);
    }
    ,
    Howl['prototype']['stereo'] = function(_0x1968b4, _0x9c0525) {
        var _0x997e6f = this;
        if (!_0x997e6f['_webAudio'])
            return _0x997e6f;
        if ('loaded' !== _0x997e6f['_state'])
            return _0x997e6f['_queue']['push']({
                'event': 'stereo',
                'action': function() {
                    _0x997e6f['stereo'](_0x1968b4, _0x9c0525);
                }
            }),
            _0x997e6f;
        var _0x2d8ead = 'undefined' === typeof Howler['ctx']['createStereoPanner'] ? 'spatial' : 'stereo';
        if ('undefined' === typeof _0x9c0525) {
            if ('number' === typeof _0x1968b4)
                _0x997e6f['_stereo'] = _0x1968b4,
                _0x997e6f['_pos'] = [_0x1968b4, 0x0, 0x0];
            else
                return _0x997e6f['_stereo'];
        }
        for (var _0x2028b2 = _0x997e6f['_getSoundIds'](_0x9c0525), _0x4cec63 = 0x0; _0x4cec63 < _0x2028b2['length']; _0x4cec63++) {
            var _0x4449ea = _0x997e6f['_soundById'](_0x2028b2[_0x4cec63]);
            if (_0x4449ea) {
                if ('number' === typeof _0x1968b4)
                    _0x4449ea['_stereo'] = _0x1968b4,
                    _0x4449ea['_pos'] = [_0x1968b4, 0x0, 0x0],
                    _0x4449ea['_node'] && (_0x4449ea['_pannerAttr']['panningModel'] = 'equalpower',
                    (!_0x4449ea['_panner'] || !_0x4449ea['_panner']['pan']) && _0x56578a(_0x4449ea, _0x2d8ead),
                    'spatial' === _0x2d8ead ? 'undefined' !== typeof _0x4449ea['_panner']['positionX'] ? (_0x4449ea['_panner']['positionX']['setValueAtTime'](_0x1968b4, Howler['ctx']['currentTime']),
                    _0x4449ea['_panner']['positionY']['setValueAtTime'](0x0, Howler['ctx']['currentTime']),
                    _0x4449ea['_panner']['positionZ']['setValueAtTime'](0x0, Howler['ctx']['currentTime'])) : _0x4449ea['_panner']['setPosition'](_0x1968b4, 0x0, 0x0) : _0x4449ea['_panner']['pan']['setValueAtTime'](_0x1968b4, Howler['ctx']['currentTime'])),
                    _0x997e6f['_emit']('stereo', _0x4449ea['_id']);
                else
                    return _0x4449ea['_stereo'];
            }
        }
        return _0x997e6f;
    }
    ,
    Howl['prototype']['pos'] = function(_0x1a85b2, _0x1b1fa5, _0x815c4a, _0x4f4046) {
        var _0x196a68 = this;
        if (!_0x196a68['_webAudio'])
            return _0x196a68;
        if ('loaded' !== _0x196a68['_state'])
            return _0x196a68['_queue']['push']({
                'event': 'pos',
                'action': function() {
                    _0x196a68['pos'](_0x1a85b2, _0x1b1fa5, _0x815c4a, _0x4f4046);
                }
            }),
            _0x196a68;
        _0x1b1fa5 = 'number' !== typeof _0x1b1fa5 ? 0x0 : _0x1b1fa5,
        _0x815c4a = 'number' !== typeof _0x815c4a ? -0.5 : _0x815c4a;
        if ('undefined' === typeof _0x4f4046) {
            if ('number' === typeof _0x1a85b2)
                _0x196a68['_pos'] = [_0x1a85b2, _0x1b1fa5, _0x815c4a];
            else
                return _0x196a68['_pos'];
        }
        for (var _0x5dc129 = _0x196a68['_getSoundIds'](_0x4f4046), _0x15d61e = 0x0; _0x15d61e < _0x5dc129['length']; _0x15d61e++) {
            var _0xf2b62b = _0x196a68['_soundById'](_0x5dc129[_0x15d61e]);
            if (_0xf2b62b) {
                if ('number' === typeof _0x1a85b2)
                    _0xf2b62b['_pos'] = [_0x1a85b2, _0x1b1fa5, _0x815c4a],
                    _0xf2b62b['_node'] && ((!_0xf2b62b['_panner'] || _0xf2b62b['_panner']['pan']) && _0x56578a(_0xf2b62b, 'spatial'),
                    'undefined' !== typeof _0xf2b62b['_panner']['positionX'] ? (_0xf2b62b['_panner']['positionX']['setValueAtTime'](_0x1a85b2, Howler['ctx']['currentTime']),
                    _0xf2b62b['_panner']['positionY']['setValueAtTime'](_0x1b1fa5, Howler['ctx']['currentTime']),
                    _0xf2b62b['_panner']['positionZ']['setValueAtTime'](_0x815c4a, Howler['ctx']['currentTime'])) : _0xf2b62b['_panner']['setPosition'](_0x1a85b2, _0x1b1fa5, _0x815c4a)),
                    _0x196a68['_emit']('pos', _0xf2b62b['_id']);
                else
                    return _0xf2b62b['_pos'];
            }
        }
        return _0x196a68;
    }
    ,
    Howl['prototype']['orientation'] = function(_0x43b0ab, _0x2506b3, _0x3041ff, _0x29aa47) {
        var _0x2242c2 = this;
        if (!_0x2242c2['_webAudio'])
            return _0x2242c2;
        if ('loaded' !== _0x2242c2['_state'])
            return _0x2242c2['_queue']['push']({
                'event': 'orientation',
                'action': function() {
                    _0x2242c2['orientation'](_0x43b0ab, _0x2506b3, _0x3041ff, _0x29aa47);
                }
            }),
            _0x2242c2;
        _0x2506b3 = 'number' !== typeof _0x2506b3 ? _0x2242c2['_orientation'][0x1] : _0x2506b3,
        _0x3041ff = 'number' !== typeof _0x3041ff ? _0x2242c2['_orientation'][0x2] : _0x3041ff;
        if ('undefined' === typeof _0x29aa47) {
            if ('number' === typeof _0x43b0ab)
                _0x2242c2['_orientation'] = [_0x43b0ab, _0x2506b3, _0x3041ff];
            else
                return _0x2242c2['_orientation'];
        }
        for (var _0x31267b = _0x2242c2['_getSoundIds'](_0x29aa47), _0x5d2e7c = 0x0; _0x5d2e7c < _0x31267b['length']; _0x5d2e7c++) {
            var _0x2f9dc5 = _0x2242c2['_soundById'](_0x31267b[_0x5d2e7c]);
            if (_0x2f9dc5) {
                if ('number' === typeof _0x43b0ab)
                    _0x2f9dc5['_orientation'] = [_0x43b0ab, _0x2506b3, _0x3041ff],
                    _0x2f9dc5['_node'] && (_0x2f9dc5['_panner'] || (_0x2f9dc5['_pos'] || (_0x2f9dc5['_pos'] = _0x2242c2['_pos'] || [0x0, 0x0, -0.5]),
                    _0x56578a(_0x2f9dc5, 'spatial')),
                    'undefined' !== typeof _0x2f9dc5['_panner']['orientationX'] ? (_0x2f9dc5['_panner']['orientationX']['setValueAtTime'](_0x43b0ab, Howler['ctx']['currentTime']),
                    _0x2f9dc5['_panner']['orientationY']['setValueAtTime'](_0x2506b3, Howler['ctx']['currentTime']),
                    _0x2f9dc5['_panner']['orientationZ']['setValueAtTime'](_0x3041ff, Howler['ctx']['currentTime'])) : _0x2f9dc5['_panner']['setOrientation'](_0x43b0ab, _0x2506b3, _0x3041ff)),
                    _0x2242c2['_emit']('orientation', _0x2f9dc5['_id']);
                else
                    return _0x2f9dc5['_orientation'];
            }
        }
        return _0x2242c2;
    }
    ,
    Howl['prototype']['pannerAttr'] = function() {
        var _0x3fff07 = arguments, _0x4bb322, _0x5c444c;
        if (!this['_webAudio'])
            return this;
        if (0x0 === _0x3fff07['length'])
            return this['_pannerAttr'];
        if (0x1 === _0x3fff07['length']) {
            if ('object' === typeof _0x3fff07[0x0])
                _0x4bb322 = _0x3fff07[0x0],
                'undefined' === typeof _0x5c444c && (_0x4bb322['pannerAttr'] || (_0x4bb322['pannerAttr'] = {
                    'coneInnerAngle': _0x4bb322['coneInnerAngle'],
                    'coneOuterAngle': _0x4bb322['coneOuterAngle'],
                    'coneOuterGain': _0x4bb322['coneOuterGain'],
                    'distanceModel': _0x4bb322['distanceModel'],
                    'maxDistance': _0x4bb322['maxDistance'],
                    'refDistance': _0x4bb322['refDistance'],
                    'rolloffFactor': _0x4bb322['rolloffFactor'],
                    'panningModel': _0x4bb322['panningModel']
                }),
                this['_pannerAttr'] = {
                    'coneInnerAngle': 'undefined' !== typeof _0x4bb322['pannerAttr']['coneInnerAngle'] ? _0x4bb322['pannerAttr']['coneInnerAngle'] : this['_coneInnerAngle'],
                    'coneOuterAngle': 'undefined' !== typeof _0x4bb322['pannerAttr']['coneOuterAngle'] ? _0x4bb322['pannerAttr']['coneOuterAngle'] : this['_coneOuterAngle'],
                    'coneOuterGain': 'undefined' !== typeof _0x4bb322['pannerAttr']['coneOuterGain'] ? _0x4bb322['pannerAttr']['coneOuterGain'] : this['_coneOuterGain'],
                    'distanceModel': 'undefined' !== typeof _0x4bb322['pannerAttr']['distanceModel'] ? _0x4bb322['pannerAttr']['distanceModel'] : this['_distanceModel'],
                    'maxDistance': 'undefined' !== typeof _0x4bb322['pannerAttr']['maxDistance'] ? _0x4bb322['pannerAttr']['maxDistance'] : this['_maxDistance'],
                    'refDistance': 'undefined' !== typeof _0x4bb322['pannerAttr']['refDistance'] ? _0x4bb322['pannerAttr']['refDistance'] : this['_refDistance'],
                    'rolloffFactor': 'undefined' !== typeof _0x4bb322['pannerAttr']['rolloffFactor'] ? _0x4bb322['pannerAttr']['rolloffFactor'] : this['_rolloffFactor'],
                    'panningModel': 'undefined' !== typeof _0x4bb322['pannerAttr']['panningModel'] ? _0x4bb322['pannerAttr']['panningModel'] : this['_panningModel']
                });
            else
                return (_0x3fff07 = this['_soundById'](parseInt(_0x3fff07[0x0], 0xa))) ? _0x3fff07['_pannerAttr'] : this['_pannerAttr'];
        } else
            0x2 === _0x3fff07['length'] && (_0x4bb322 = _0x3fff07[0x0],
            _0x5c444c = parseInt(_0x3fff07[0x1], 0xa));
        _0x5c444c = this['_getSoundIds'](_0x5c444c);
        for (var _0x122b99 = 0x0; _0x122b99 < _0x5c444c['length']; _0x122b99++)
            if (_0x3fff07 = this['_soundById'](_0x5c444c[_0x122b99])) {
                var _0xba43a0 = _0x3fff07['_pannerAttr']
                  , _0xba43a0 = {
                    'coneInnerAngle': 'undefined' !== typeof _0x4bb322['coneInnerAngle'] ? _0x4bb322['coneInnerAngle'] : _0xba43a0['coneInnerAngle'],
                    'coneOuterAngle': 'undefined' !== typeof _0x4bb322['coneOuterAngle'] ? _0x4bb322['coneOuterAngle'] : _0xba43a0['coneOuterAngle'],
                    'coneOuterGain': 'undefined' !== typeof _0x4bb322['coneOuterGain'] ? _0x4bb322['coneOuterGain'] : _0xba43a0['coneOuterGain'],
                    'distanceModel': 'undefined' !== typeof _0x4bb322['distanceModel'] ? _0x4bb322['distanceModel'] : _0xba43a0['distanceModel'],
                    'maxDistance': 'undefined' !== typeof _0x4bb322['maxDistance'] ? _0x4bb322['maxDistance'] : _0xba43a0['maxDistance'],
                    'refDistance': 'undefined' !== typeof _0x4bb322['refDistance'] ? _0x4bb322['refDistance'] : _0xba43a0['refDistance'],
                    'rolloffFactor': 'undefined' !== typeof _0x4bb322['rolloffFactor'] ? _0x4bb322['rolloffFactor'] : _0xba43a0['rolloffFactor'],
                    'panningModel': 'undefined' !== typeof _0x4bb322['panningModel'] ? _0x4bb322['panningModel'] : _0xba43a0['panningModel']
                }
                  , _0x425ea8 = _0x3fff07['_panner'];
                _0x425ea8 ? (_0x425ea8['coneInnerAngle'] = _0xba43a0['coneInnerAngle'],
                _0x425ea8['coneOuterAngle'] = _0xba43a0['coneOuterAngle'],
                _0x425ea8['coneOuterGain'] = _0xba43a0['coneOuterGain'],
                _0x425ea8['distanceModel'] = _0xba43a0['distanceModel'],
                _0x425ea8['maxDistance'] = _0xba43a0['maxDistance'],
                _0x425ea8['refDistance'] = _0xba43a0['refDistance'],
                _0x425ea8['rolloffFactor'] = _0xba43a0['rolloffFactor'],
                _0x425ea8['panningModel'] = _0xba43a0['panningModel']) : (_0x3fff07['_pos'] || (_0x3fff07['_pos'] = this['_pos'] || [0x0, 0x0, -0.5]),
                _0x56578a(_0x3fff07, 'spatial'));
            }
        return this;
    }
    ;
    var _0x19282d = Sound['prototype']['init'];
    Sound['prototype']['init'] = function() {
        var _0x37c34d = this['_parent'];
        this['_orientation'] = _0x37c34d['_orientation'],
        this['_stereo'] = _0x37c34d['_stereo'],
        this['_pos'] = _0x37c34d['_pos'],
        this['_pannerAttr'] = _0x37c34d['_pannerAttr'],
        _0x19282d['call'](this),
        this['_stereo'] ? _0x37c34d['stereo'](this['_stereo']) : this['_pos'] && _0x37c34d['pos'](this['_pos'][0x0], this['_pos'][0x1], this['_pos'][0x2], this['_id']);
    }
    ;
    var _0x1597b7 = Sound['prototype']['reset'];
    Sound['prototype']['reset'] = function() {
        var _0xace355 = this['_parent'];
        return this['_orientation'] = _0xace355['_orientation'],
        this['_stereo'] = _0xace355['_stereo'],
        this['_pos'] = _0xace355['_pos'],
        this['_pannerAttr'] = _0xace355['_pannerAttr'],
        this['_stereo'] ? _0xace355['stereo'](this['_stereo']) : this['_pos'] ? _0xace355['pos'](this['_pos'][0x0], this['_pos'][0x1], this['_pos'][0x2], this['_id']) : this['_panner'] && (this['_panner']['disconnect'](0x0),
        this['_panner'] = void 0x0,
        _0xace355['_refreshBuffer'](this)),
        _0x1597b7['call'](this);
    }
    ;
    var _0x56578a = function(_0x39b444, _0x23ab06) {
        'spatial' === (_0x23ab06 || 'spatial') ? (_0x39b444['_panner'] = Howler['ctx']['createPanner'](),
        _0x39b444['_panner']['coneInnerAngle'] = _0x39b444['_pannerAttr']['coneInnerAngle'],
        _0x39b444['_panner']['coneOuterAngle'] = _0x39b444['_pannerAttr']['coneOuterAngle'],
        _0x39b444['_panner']['coneOuterGain'] = _0x39b444['_pannerAttr']['coneOuterGain'],
        _0x39b444['_panner']['distanceModel'] = _0x39b444['_pannerAttr']['distanceModel'],
        _0x39b444['_panner']['maxDistance'] = _0x39b444['_pannerAttr']['maxDistance'],
        _0x39b444['_panner']['refDistance'] = _0x39b444['_pannerAttr']['refDistance'],
        _0x39b444['_panner']['rolloffFactor'] = _0x39b444['_pannerAttr']['rolloffFactor'],
        _0x39b444['_panner']['panningModel'] = _0x39b444['_pannerAttr']['panningModel'],
        'undefined' !== typeof _0x39b444['_panner']['positionX'] ? (_0x39b444['_panner']['positionX']['setValueAtTime'](_0x39b444['_pos'][0x0], Howler['ctx']['currentTime']),
        _0x39b444['_panner']['positionY']['setValueAtTime'](_0x39b444['_pos'][0x1], Howler['ctx']['currentTime']),
        _0x39b444['_panner']['positionZ']['setValueAtTime'](_0x39b444['_pos'][0x2], Howler['ctx']['currentTime'])) : _0x39b444['_panner']['setPosition'](_0x39b444['_pos'][0x0], _0x39b444['_pos'][0x1], _0x39b444['_pos'][0x2]),
        'undefined' !== typeof _0x39b444['_panner']['orientationX'] ? (_0x39b444['_panner']['orientationX']['setValueAtTime'](_0x39b444['_orientation'][0x0], Howler['ctx']['currentTime']),
        _0x39b444['_panner']['orientationY']['setValueAtTime'](_0x39b444['_orientation'][0x1], Howler['ctx']['currentTime']),
        _0x39b444['_panner']['orientationZ']['setValueAtTime'](_0x39b444['_orientation'][0x2], Howler['ctx']['currentTime'])) : _0x39b444['_panner']['setOrientation'](_0x39b444['_orientation'][0x0], _0x39b444['_orientation'][0x1], _0x39b444['_orientation'][0x2])) : (_0x39b444['_panner'] = Howler['ctx']['createStereoPanner'](),
        _0x39b444['_panner']['pan']['setValueAtTime'](_0x39b444['_stereo'], Howler['ctx']['currentTime'])),
        _0x39b444['_panner']['connect'](_0x39b444['_node']),
        _0x39b444['_paused'] || _0x39b444['_parent']['pause'](_0x39b444['_id'], !0x0)['play'](_0x39b444['_id'], !0x0);
    };
}(),
!function(_0xea1e39, _0x23b85f) {
    'object' == typeof exports && 'undefined' != typeof module ? _0x23b85f() : 'function' == typeof define && define['amd'] ? define(_0x23b85f) : _0x23b85f();
}(0x0, function() {
    function _0x240064(_0x5d615d) {
        var _0x6b384c = this['constructor'];
        return this['then'](function(_0x306ece) {
            return _0x6b384c['resolve'](_0x5d615d())['then'](function() {
                return _0x306ece;
            });
        }, function(_0x21b2a2) {
            return _0x6b384c['resolve'](_0x5d615d())['then'](function() {
                return _0x6b384c['reject'](_0x21b2a2);
            });
        });
    }
    function _0x52d8a9() {}
    function _0x4a5e7e(_0x4bfe54) {
        if (!(this instanceof _0x4a5e7e))
            throw new TypeError('Promises\x20must\x20be\x20constructed\x20via\x20new');
        if ('function' != typeof _0x4bfe54)
            throw new TypeError('not\x20a\x20function');
        this['_state'] = 0x0,
        this['_handled'] = !0x1,
        this['_value'] = void 0x0,
        this['_deferreds'] = [],
        _0x1f99b4(_0x4bfe54, this);
    }
    function _0x8540dd(_0xc9848a, _0x4a481a) {
        for (; 0x3 === _0xc9848a['_state']; )
            _0xc9848a = _0xc9848a['_value'];
        0x0 !== _0xc9848a['_state'] ? (_0xc9848a['_handled'] = !0x0,
        _0x4a5e7e['_immediateFn'](function() {
            var _0x5b553d = 0x1 === _0xc9848a['_state'] ? _0x4a481a['onFulfilled'] : _0x4a481a['onRejected'];
            if (null !== _0x5b553d) {
                var _0x4fba56;
                try {
                    _0x4fba56 = _0x5b553d(_0xc9848a['_value']);
                } catch (_0x5a5aa3) {
                    return void _0xfe24c0(_0x4a481a['promise'], _0x5a5aa3);
                }
                _0x4c78c1(_0x4a481a['promise'], _0x4fba56);
            } else
                (0x1 === _0xc9848a['_state'] ? _0x4c78c1 : _0xfe24c0)(_0x4a481a['promise'], _0xc9848a['_value']);
        })) : _0xc9848a['_deferreds']['push'](_0x4a481a);
    }
    function _0x4c78c1(_0x5dff3e, _0x1a7b6d) {
        try {
            if (_0x1a7b6d === _0x5dff3e)
                throw new TypeError('A\x20promise\x20cannot\x20be\x20resolved\x20with\x20itself.');
            if (_0x1a7b6d && ('object' == typeof _0x1a7b6d || 'function' == typeof _0x1a7b6d)) {
                var _0x54a00b = _0x1a7b6d['then'];
                if (_0x1a7b6d instanceof _0x4a5e7e)
                    return _0x5dff3e['_state'] = 0x3,
                    _0x5dff3e['_value'] = _0x1a7b6d,
                    void _0x1c673c(_0x5dff3e);
                if ('function' == typeof _0x54a00b)
                    return void _0x1f99b4(function() {
                        _0x54a00b['apply'](_0x1a7b6d, arguments);
                    }, _0x5dff3e);
            }
            _0x5dff3e['_state'] = 0x1,
            _0x5dff3e['_value'] = _0x1a7b6d,
            _0x1c673c(_0x5dff3e);
        } catch (_0x50ccc8) {
            _0xfe24c0(_0x5dff3e, _0x50ccc8);
        }
    }
    function _0xfe24c0(_0x3585de, _0xa317e6) {
        _0x3585de['_state'] = 0x2,
        _0x3585de['_value'] = _0xa317e6,
        _0x1c673c(_0x3585de);
    }
    function _0x1c673c(_0xa0e584) {
        0x2 === _0xa0e584['_state'] && 0x0 === _0xa0e584['_deferreds']['length'] && _0x4a5e7e['_immediateFn'](function() {
            _0xa0e584['_handled'] || _0x4a5e7e['_unhandledRejectionFn'](_0xa0e584['_value']);
        });
        for (var _0x15ed4c = 0x0, _0x3b6704 = _0xa0e584['_deferreds']['length']; _0x3b6704 > _0x15ed4c; _0x15ed4c++)
            _0x8540dd(_0xa0e584, _0xa0e584['_deferreds'][_0x15ed4c]);
        _0xa0e584['_deferreds'] = null;
    }
    function _0x1f99b4(_0x3d2c98, _0x3aa5f9) {
        var _0x3f46af = !0x1;
        try {
            _0x3d2c98(function(_0x20ba37) {
                _0x3f46af || (_0x3f46af = !0x0,
                _0x4c78c1(_0x3aa5f9, _0x20ba37));
            }, function(_0x214d20) {
                _0x3f46af || (_0x3f46af = !0x0,
                _0xfe24c0(_0x3aa5f9, _0x214d20));
            });
        } catch (_0x183faa) {
            _0x3f46af || (_0x3f46af = !0x0,
            _0xfe24c0(_0x3aa5f9, _0x183faa));
        }
    }
    var _0x2a7898 = setTimeout;
    _0x4a5e7e['prototype']['catch'] = function(_0x12b75f) {
        return this['then'](null, _0x12b75f);
    }
    ,
    _0x4a5e7e['prototype']['then'] = function(_0x3b2878, _0x584c7d) {
        var _0x4e297f = new this['constructor'](_0x52d8a9);
        return _0x8540dd(this, new function(_0x1eb002, _0x89f53c, _0x2201e1) {
            this['onFulfilled'] = 'function' == typeof _0x1eb002 ? _0x1eb002 : null,
            this['onRejected'] = 'function' == typeof _0x89f53c ? _0x89f53c : null,
            this['promise'] = _0x2201e1;
        }
        (_0x3b2878,_0x584c7d,_0x4e297f)),
        _0x4e297f;
    }
    ,
    _0x4a5e7e['prototype']['finally'] = _0x240064,
    _0x4a5e7e['all'] = function(_0xd9e0a7) {
        return new _0x4a5e7e(function(_0x578cc3, _0x5c37c2) {
            function _0x1fd498(_0x57daf3, _0x2dbac1) {
                try {
                    if (_0x2dbac1 && ('object' == typeof _0x2dbac1 || 'function' == typeof _0x2dbac1)) {
                        var _0xe65a9f = _0x2dbac1['then'];
                        if ('function' == typeof _0xe65a9f)
                            return void _0xe65a9f['call'](_0x2dbac1, function(_0xf96e75) {
                                _0x1fd498(_0x57daf3, _0xf96e75);
                            }, _0x5c37c2);
                    }
                    _0x42ace0[_0x57daf3] = _0x2dbac1,
                    0x0 == --_0x2058c8 && _0x578cc3(_0x42ace0);
                } catch (_0x2826a2) {
                    _0x5c37c2(_0x2826a2);
                }
            }
            if (!_0xd9e0a7 || 'undefined' == typeof _0xd9e0a7['length'])
                throw new TypeError('Promise.all\x20accepts\x20an\x20array');
            var _0x42ace0 = Array['prototype']['slice']['call'](_0xd9e0a7);
            if (0x0 === _0x42ace0['length'])
                return _0x578cc3([]);
            for (var _0x2058c8 = _0x42ace0['length'], _0x13c418 = 0x0; _0x42ace0['length'] > _0x13c418; _0x13c418++)
                _0x1fd498(_0x13c418, _0x42ace0[_0x13c418]);
        }
        );
    }
    ,
    _0x4a5e7e['resolve'] = function(_0x3b0607) {
        return _0x3b0607 && 'object' == typeof _0x3b0607 && _0x3b0607['constructor'] === _0x4a5e7e ? _0x3b0607 : new _0x4a5e7e(function(_0x2d860c) {
            _0x2d860c(_0x3b0607);
        }
        );
    }
    ,
    _0x4a5e7e['reject'] = function(_0x21951f) {
        return new _0x4a5e7e(function(_0x3d985f, _0x36e685) {
            _0x36e685(_0x21951f);
        }
        );
    }
    ,
    _0x4a5e7e['race'] = function(_0x512571) {
        return new _0x4a5e7e(function(_0x1f706e, _0x12cf72) {
            for (var _0x252373 = 0x0, _0x18e947 = _0x512571['length']; _0x18e947 > _0x252373; _0x252373++)
                _0x512571[_0x252373]['then'](_0x1f706e, _0x12cf72);
        }
        );
    }
    ,
    _0x4a5e7e['_immediateFn'] = 'function' == typeof setImmediate && function(_0x33b824) {
        setImmediate(_0x33b824);
    }
    || function(_0x5c5c43) {
        _0x2a7898(_0x5c5c43, 0x0);
    }
    ,
    _0x4a5e7e['_unhandledRejectionFn'] = function(_0x32f768) {
        void 0x0 !== console && console && console['warn']('Possible\x20Unhandled\x20Promise\x20Rejection:', _0x32f768);
    }
    ;
    var _0x4a9828 = function() {
        if ('undefined' != typeof self)
            return self;
        if ('undefined' != typeof window)
            return window;
        if ('undefined' != typeof global)
            return global;
        throw Error('unable\x20to\x20locate\x20global\x20object');
    }();
    'Promise'in _0x4a9828 ? _0x4a9828['Promise']['prototype']['finally'] || (_0x4a9828['Promise']['prototype']['finally'] = _0x240064) : _0x4a9828['Promise'] = _0x4a5e7e;
}),
function() {
    function _0x6e590b(_0x5b0812, _0x2a66be) {
        document['addEventListener'] ? _0x5b0812['addEventListener']('scroll', _0x2a66be, !0x1) : _0x5b0812['attachEvent']('scroll', _0x2a66be);
    }
    function _0x8d1fa3(_0x7a97) {
        this['a'] = document['createElement']('div'),
        this['a']['setAttribute']('aria-hidden', 'true'),
        this['a']['appendChild'](document['createTextNode'](_0x7a97)),
        this['b'] = document['createElement']('span'),
        this['c'] = document['createElement']('span'),
        this['h'] = document['createElement']('span'),
        this['f'] = document['createElement']('span'),
        this['g'] = -0x1,
        this['b']['style']['cssText'] = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;',
        this['c']['style']['cssText'] = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;',
        this['f']['style']['cssText'] = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;',
        this['h']['style']['cssText'] = 'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;',
        this['b']['appendChild'](this['h']),
        this['c']['appendChild'](this['f']),
        this['a']['appendChild'](this['b']),
        this['a']['appendChild'](this['c']);
    }
    function _0x333c3a(_0x46c693, _0x34c7c3) {
        _0x46c693['a']['style']['cssText'] = 'max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:' + _0x34c7c3 + ';';
    }
    function _0x32ab85(_0x2ebd1e) {
        var _0x3d553b = _0x2ebd1e['a']['offsetWidth']
          , _0x3ae683 = _0x3d553b + 0x64;
        return _0x2ebd1e['f']['style']['width'] = _0x3ae683 + 'px',
        _0x2ebd1e['c']['scrollLeft'] = _0x3ae683,
        _0x2ebd1e['b']['scrollLeft'] = _0x2ebd1e['b']['scrollWidth'] + 0x64,
        _0x2ebd1e['g'] !== _0x3d553b ? (_0x2ebd1e['g'] = _0x3d553b,
        !0x0) : !0x1;
    }
    function _0x591300(_0x5bb268, _0x368a6e) {
        function _0x3a6581() {
            var _0x3057b7 = _0xa59c10;
            _0x32ab85(_0x3057b7) && _0x3057b7['a']['parentNode'] && _0x368a6e(_0x3057b7['g']);
        }
        var _0xa59c10 = _0x5bb268;
        _0x6e590b(_0x5bb268['b'], _0x3a6581),
        _0x6e590b(_0x5bb268['c'], _0x3a6581),
        _0x32ab85(_0x5bb268);
    }
    function _0x1e07f5(_0x8ce384, _0x2ba1e6) {
        var _0x4010fc = _0x2ba1e6 || {};
        this['family'] = _0x8ce384,
        this['style'] = _0x4010fc['style'] || 'normal',
        this['weight'] = _0x4010fc['weight'] || 'normal',
        this['stretch'] = _0x4010fc['stretch'] || 'normal';
    }
    function _0x4f3b0a() {
        return null === _0x349504 && (_0x349504 = !!document['fonts']),
        _0x349504;
    }
    function _0x228118() {
        if (null === _0x100afd) {
            var _0x1bbf3d = document['createElement']('div');
            try {
                _0x1bbf3d['style']['font'] = 'condensed\x20100px\x20sans-serif';
            } catch (_0x43862e) {}
            _0x100afd = '' !== _0x1bbf3d['style']['font'];
        }
        return _0x100afd;
    }
    function _0x4843de(_0x865015, _0x43fccf) {
        return [_0x865015['style'], _0x865015['weight'], _0x228118() ? _0x865015['stretch'] : '', '100px', _0x43fccf]['join']('\x20');
    }
    var _0x5219f7 = null
      , _0x18a76b = null
      , _0x100afd = null
      , _0x349504 = null;
    _0x1e07f5['prototype']['load'] = function(_0x4dad8a, _0x281390) {
        var _0x5f4aa6 = this
          , _0x1d44de = _0x4dad8a || 'BESbswy'
          , _0x259707 = 0x0
          , _0x48c23f = _0x281390 || 0xbb8
          , _0x4cfc7f = new Date()['getTime']();
        return new Promise(function(_0x4aa710, _0x25b218) {
            var _0x48355b;
            if (_0x48355b = _0x4f3b0a())
                null === _0x18a76b && (_0x4f3b0a() && /Apple/['test'](window['navigator']['vendor']) ? (_0x48355b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/['exec'](window['navigator']['userAgent']),
                _0x18a76b = !!_0x48355b && 0x25b > parseInt(_0x48355b[0x1], 0xa)) : _0x18a76b = !0x1),
                _0x48355b = !_0x18a76b;
            if (_0x48355b) {
                _0x48355b = new Promise(function(_0x4e7c54, _0x5dfabb) {
                    function _0x38388d() {
                        new Date()['getTime']() - _0x4cfc7f >= _0x48c23f ? _0x5dfabb(Error('' + _0x48c23f + 'ms\x20timeout\x20exceeded')) : document['fonts']['load'](_0x4843de(_0x5f4aa6, '\x22' + _0x5f4aa6['family'] + '\x22'), _0x1d44de)['then'](function(_0x249866) {
                            0x1 <= _0x249866['length'] ? _0x4e7c54() : setTimeout(_0x38388d, 0x19);
                        }, _0x5dfabb);
                    }
                    _0x38388d();
                }
                );
                var _0x1f354a = new Promise(function(_0x210d01, _0x3fe6ab) {
                    _0x259707 = setTimeout(function() {
                        _0x3fe6ab(Error('' + _0x48c23f + 'ms\x20timeout\x20exceeded'));
                    }, _0x48c23f);
                }
                );
                Promise['race']([_0x1f354a, _0x48355b])['then'](function() {
                    clearTimeout(_0x259707),
                    _0x4aa710(_0x5f4aa6);
                }, _0x25b218);
            } else {
                var _0x369f9f = function() {
                    function _0x1fcd4c() {
                        var _0x1be987;
                        if (_0x1be987 = -0x1 != _0x5af5ee && -0x1 != _0x26071e || -0x1 != _0x5af5ee && -0x1 != _0x490a1e || -0x1 != _0x26071e && -0x1 != _0x490a1e)
                            (_0x1be987 = _0x5af5ee != _0x26071e && _0x5af5ee != _0x490a1e && _0x26071e != _0x490a1e) || (null === _0x5219f7 && (_0x1be987 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/['exec'](window['navigator']['userAgent']),
                            _0x5219f7 = !!_0x1be987 && (0x218 > parseInt(_0x1be987[0x1], 0xa) || 0x218 === parseInt(_0x1be987[0x1], 0xa) && 0xb >= parseInt(_0x1be987[0x2], 0xa))),
                            _0x1be987 = _0x5219f7 && (_0x5af5ee == _0x5063da && _0x26071e == _0x5063da && _0x490a1e == _0x5063da || _0x5af5ee == _0x2a80f2 && _0x26071e == _0x2a80f2 && _0x490a1e == _0x2a80f2 || _0x5af5ee == _0x212991 && _0x26071e == _0x212991 && _0x490a1e == _0x212991)),
                            _0x1be987 = !_0x1be987;
                        _0x1be987 && (_0x117fd6['parentNode'] && _0x117fd6['parentNode']['removeChild'](_0x117fd6),
                        clearTimeout(_0x259707),
                        _0x4aa710(_0x5f4aa6));
                    }
                    function _0x146c28() {
                        if (new Date()['getTime']() - _0x4cfc7f >= _0x48c23f)
                            _0x117fd6['parentNode'] && _0x117fd6['parentNode']['removeChild'](_0x117fd6),
                            _0x25b218(Error('' + _0x48c23f + 'ms\x20timeout\x20exceeded'));
                        else {
                            var _0x468e24 = document['hidden'];
                            if (!0x0 === _0x468e24 || void 0x0 === _0x468e24)
                                _0x5af5ee = _0x36d691['a']['offsetWidth'],
                                _0x26071e = _0x19646f['a']['offsetWidth'],
                                _0x490a1e = _0x1e29d8['a']['offsetWidth'],
                                _0x1fcd4c();
                            _0x259707 = setTimeout(_0x146c28, 0x32);
                        }
                    }
                    var _0x36d691 = new _0x8d1fa3(_0x1d44de)
                      , _0x19646f = new _0x8d1fa3(_0x1d44de)
                      , _0x1e29d8 = new _0x8d1fa3(_0x1d44de)
                      , _0x5af5ee = -0x1
                      , _0x26071e = -0x1
                      , _0x490a1e = -0x1
                      , _0x5063da = -0x1
                      , _0x2a80f2 = -0x1
                      , _0x212991 = -0x1
                      , _0x117fd6 = document['createElement']('div');
                    _0x117fd6['dir'] = 'ltr',
                    _0x333c3a(_0x36d691, _0x4843de(_0x5f4aa6, 'sans-serif')),
                    _0x333c3a(_0x19646f, _0x4843de(_0x5f4aa6, 'serif')),
                    _0x333c3a(_0x1e29d8, _0x4843de(_0x5f4aa6, 'monospace')),
                    _0x117fd6['appendChild'](_0x36d691['a']),
                    _0x117fd6['appendChild'](_0x19646f['a']),
                    _0x117fd6['appendChild'](_0x1e29d8['a']),
                    document['body']['appendChild'](_0x117fd6),
                    _0x5063da = _0x36d691['a']['offsetWidth'],
                    _0x2a80f2 = _0x19646f['a']['offsetWidth'],
                    _0x212991 = _0x1e29d8['a']['offsetWidth'],
                    _0x146c28(),
                    _0x591300(_0x36d691, function(_0x57af2c) {
                        _0x5af5ee = _0x57af2c,
                        _0x1fcd4c();
                    }),
                    _0x333c3a(_0x36d691, _0x4843de(_0x5f4aa6, '\x22' + _0x5f4aa6['family'] + '\x22,sans-serif')),
                    _0x591300(_0x19646f, function(_0x3b8705) {
                        _0x26071e = _0x3b8705,
                        _0x1fcd4c();
                    }),
                    _0x333c3a(_0x19646f, _0x4843de(_0x5f4aa6, '\x22' + _0x5f4aa6['family'] + '\x22,serif')),
                    _0x591300(_0x1e29d8, function(_0x491c57) {
                        _0x490a1e = _0x491c57,
                        _0x1fcd4c();
                    }),
                    _0x333c3a(_0x1e29d8, _0x4843de(_0x5f4aa6, '\x22' + _0x5f4aa6['family'] + '\x22,monospace'));
                };
                document['body'] ? _0x369f9f() : document['addEventListener'] ? document['addEventListener']('DOMContentLoaded', function _0x305914() {
                    document['removeEventListener']('DOMContentLoaded', _0x305914),
                    _0x369f9f();
                }) : document['attachEvent']('onreadystatechange', function _0x54a6f7() {
                    if ('interactive' == document['readyState'] || 'complete' == document['readyState'])
                        document['detachEvent']('onreadystatechange', _0x54a6f7),
                        _0x369f9f();
                });
            }
        }
        );
    }
    ,
    'object' === typeof module ? module['exports'] = _0x1e07f5 : (window['FontFaceObserver'] = _0x1e07f5,
    window['FontFaceObserver']['prototype']['load'] = _0x1e07f5['prototype']['load']);
}(),
function(_0x81f418) {
    Number['prototype']['map'] = function(_0x1fb110, _0x2ca527, _0x15ef3a, _0x4a2f1a) {
        return _0x15ef3a + (_0x4a2f1a - _0x15ef3a) * ((this - _0x1fb110) / (_0x2ca527 - _0x1fb110));
    }
    ,
    Number['prototype']['limit'] = function(_0x5ac23f, _0x2d1a97) {
        return Math['min'](_0x2d1a97, Math['max'](_0x5ac23f, this));
    }
    ,
    Number['prototype']['round'] = function(_0x509191) {
        return _0x509191 = Math['pow'](0xa, _0x509191 || 0x0),
        Math['round'](this * _0x509191) / _0x509191;
    }
    ,
    Number['prototype']['floor'] = function() {
        return Math['floor'](this);
    }
    ,
    Number['prototype']['ceil'] = function() {
        return Math['ceil'](this);
    }
    ,
    Number['prototype']['toInt'] = function() {
        return this | 0x0;
    }
    ,
    Number['prototype']['toRad'] = function() {
        return this / 0xb4 * Math['PI'];
    }
    ,
    Number['prototype']['toDeg'] = function() {
        return 0xb4 * this / Math['PI'];
    }
    ,
    Array['prototype']['erase'] = function(_0x52f68b) {
        for (var _0x1b2822 = this['length']; _0x1b2822--; )
            this[_0x1b2822] === _0x52f68b && this['splice'](_0x1b2822, 0x1);
        return this;
    }
    ,
    Array['prototype']['random'] = function() {
        return this[Math['floor'](Math['random']() * this['length'])];
    }
    ,
    Function['prototype']['bind'] = Function['prototype']['bind'] || function(_0x19cb63) {
        if ('function' !== typeof this)
            throw new TypeError('Function.prototype.bind\x20-\x20what\x20is\x20trying\x20to\x20be\x20bound\x20is\x20not\x20callable');
        var _0x384e60 = Array['prototype']['slice']['call'](arguments, 0x1)
          , _0x817b88 = this
          , _0x5c9aa7 = function() {}
          , _0x5a578d = function() {
            return _0x817b88['apply'](this instanceof _0x5c9aa7 && _0x19cb63 ? this : _0x19cb63, _0x384e60['concat'](Array['prototype']['slice']['call'](arguments)));
        };
        return _0x5c9aa7['prototype'] = this['prototype'],
        _0x5a578d['prototype'] = new _0x5c9aa7(),
        _0x5a578d;
    }
    ,
    _0x81f418['ig'] = {
        'game': null,
        'debug': null,
        'version': '1.23',
        'global': _0x81f418,
        'modules': {},
        'resources': [],
        'ready': !0x1,
        'baked': !0x1,
        'nocache': '',
        'ua': {},
        'prefix': _0x81f418['ImpactPrefix'] || '',
        'lib': 'lib/',
        '_current': null,
        '_loadQueue': [],
        '_waitForOnload': 0x0,
        '$': function(_0x2fa81b) {
            return '#' == _0x2fa81b['charAt'](0x0) ? document['getElementById'](_0x2fa81b['substr'](0x1)) : document['getElementsByTagName'](_0x2fa81b);
        },
        '$new': function(_0x58aa1f) {
            return document['createElement'](_0x58aa1f);
        },
        'copy': function(_0xd0ed4) {
            if (!_0xd0ed4 || 'object' != typeof _0xd0ed4 || _0xd0ed4 instanceof HTMLElement || _0xd0ed4 instanceof ig['Class'])
                return _0xd0ed4;
            if (_0xd0ed4 instanceof Array)
                for (var _0x5cb1ed = [], _0x137019 = 0x0, _0x2619bd = _0xd0ed4['length']; _0x137019 < _0x2619bd; _0x137019++)
                    _0x5cb1ed[_0x137019] = ig['copy'](_0xd0ed4[_0x137019]);
            else
                for (_0x137019 in (_0x5cb1ed = {},
                _0xd0ed4))
                    _0x5cb1ed[_0x137019] = ig['copy'](_0xd0ed4[_0x137019]);
            return _0x5cb1ed;
        },
        'merge': function(_0x17a951, _0x4ac354) {
            for (var _0x25fc39 in _0x4ac354) {
                var _0x3f3db6 = _0x4ac354[_0x25fc39];
                if ('object' != typeof _0x3f3db6 || _0x3f3db6 instanceof HTMLElement || _0x3f3db6 instanceof ig['Class'] || null === _0x3f3db6)
                    _0x17a951[_0x25fc39] = _0x3f3db6;
                else {
                    if (!_0x17a951[_0x25fc39] || 'object' != typeof _0x17a951[_0x25fc39])
                        _0x17a951[_0x25fc39] = _0x3f3db6 instanceof Array ? [] : {};
                    ig['merge'](_0x17a951[_0x25fc39], _0x3f3db6);
                }
            }
            return _0x17a951;
        },
        'ksort': function(_0x622956) {
            if (!_0x622956 || 'object' != typeof _0x622956)
                return [];
            var _0x11844f = [], _0x3eff0e = [], _0x286255;
            for (_0x286255 in _0x622956)
                _0x11844f['push'](_0x286255);
            _0x11844f['sort']();
            for (_0x286255 = 0x0; _0x286255 < _0x11844f['length']; _0x286255++)
                _0x3eff0e['push'](_0x622956[_0x11844f[_0x286255]]);
            return _0x3eff0e;
        },
        'setVendorAttribute': function(_0x9ff7e4, _0x49b2a7, _0x110cd7) {
            var _0xe6f23d = _0x49b2a7['charAt'](0x0)['toUpperCase']() + _0x49b2a7['substr'](0x1);
            _0x9ff7e4[_0x49b2a7] = 'undefined' !== typeof _0x9ff7e4['imageSmoothingEnabled'] ? _0x9ff7e4['ms' + _0xe6f23d] = _0x9ff7e4['moz' + _0xe6f23d] = _0x9ff7e4['o' + _0xe6f23d] = _0x110cd7 : _0x9ff7e4['ms' + _0xe6f23d] = _0x9ff7e4['moz' + _0xe6f23d] = _0x9ff7e4['webkit' + _0xe6f23d] = _0x9ff7e4['o' + _0xe6f23d] = _0x110cd7;
        },
        'getVendorAttribute': function(_0xe9550d, _0x55697c) {
            var _0x392d50 = _0x55697c['charAt'](0x0)['toUpperCase']() + _0x55697c['substr'](0x1);
            return 'undefined' !== typeof _0xe9550d['imageSmoothingEnabled'] ? _0xe9550d[_0x55697c] || _0xe9550d['ms' + _0x392d50] || _0xe9550d['moz' + _0x392d50] || _0xe9550d['o' + _0x392d50] : _0xe9550d[_0x55697c] || _0xe9550d['ms' + _0x392d50] || _0xe9550d['moz' + _0x392d50] || _0xe9550d['webkit' + _0x392d50] || _0xe9550d['o' + _0x392d50];
        },
        'normalizeVendorAttribute': function(_0x1195ad, _0x489088) {
            var _0x2c6414 = ig['getVendorAttribute'](_0x1195ad, _0x489088);
            !_0x1195ad[_0x489088] && _0x2c6414 && (_0x1195ad[_0x489088] = _0x2c6414);
        },
        'getImagePixels': function(_0x133a0e, _0x5ede61, _0x53901e, _0x3da5f2, _0x374e29) {
            var _0x2238e4 = ig['$new']('canvas');
            _0x2238e4['width'] = _0x133a0e['width'],
            _0x2238e4['height'] = _0x133a0e['height'];
            var _0x14ffda = _0x2238e4['getContext']('2d');
            ig['System']['SCALE']['CRISP'](_0x2238e4, _0x14ffda);
            var _0x2339e1 = ig['getVendorAttribute'](_0x14ffda, 'backingStorePixelRatio') || 0x1;
            ig['normalizeVendorAttribute'](_0x14ffda, 'getImageDataHD');
            var _0x858c12 = _0x133a0e['width'] / _0x2339e1
              , _0x1957ad = _0x133a0e['height'] / _0x2339e1;
            return _0x2238e4['width'] = Math['ceil'](_0x858c12),
            _0x2238e4['height'] = Math['ceil'](_0x1957ad),
            _0x14ffda['drawImage'](_0x133a0e, 0x0, 0x0, _0x858c12, _0x1957ad),
            0x1 === _0x2339e1 ? _0x14ffda['getImageData'](_0x5ede61, _0x53901e, _0x3da5f2, _0x374e29) : _0x14ffda['getImageDataHD'](_0x5ede61, _0x53901e, _0x3da5f2, _0x374e29);
        },
        'module': function(_0x389316) {
            if (ig['_current'])
                throw 'Module\x20\x27' + ig['_current']['name'] + '\x27\x20defines\x20nothing';
            if (ig['modules'][_0x389316] && ig['modules'][_0x389316]['body'])
                throw 'Module\x20\x27' + _0x389316 + '\x27\x20is\x20already\x20defined';
            return ig['_current'] = {
                'name': _0x389316,
                'requires': [],
                'loaded': !0x1,
                'body': null
            },
            ig['modules'][_0x389316] = ig['_current'],
            ig['_loadQueue']['push'](ig['_current']),
            ig;
        },
        'requires': function() {
            return ig['_current']['requires'] = Array['prototype']['slice']['call'](arguments),
            ig;
        },
        'defines': function(_0x448d09) {
            ig['_current']['body'] = _0x448d09,
            ig['_current'] = null,
            ig['_initDOMReady']();
        },
        'addResource': function(_0x56525d) {
            ig['resources']['push'](_0x56525d);
        },
        'setNocache': function(_0x3c86ff) {
            ig['nocache'] = _0x3c86ff ? '?' + Date['now']() : '';
        },
        'log': function() {},
        'assert': function() {},
        'show': function() {},
        'mark': function() {},
        '_loadScript': function(_0x3b89fb, _0x17ba63) {
            ig['modules'][_0x3b89fb] = {
                'name': _0x3b89fb,
                'requires': [],
                'loaded': !0x1,
                'body': null
            },
            ig['_waitForOnload']++;
            var _0x1ee914 = ig['prefix'] + ig['lib'] + _0x3b89fb['replace'](/\./g, '/') + '.js' + ig['nocache']
              , _0x246aac = ig['$new']('script');
            _0x246aac['type'] = 'text/javascript',
            _0x246aac['src'] = _0x1ee914,
            _0x246aac['onload'] = function() {
                ig['_waitForOnload']--,
                ig['_execModules']();
            }
            ,
            _0x246aac['onerror'] = function() {
                throw 'Failed\x20to\x20load\x20module\x20' + _0x3b89fb + '\x20at\x20' + _0x1ee914 + '\x20required\x20from\x20' + _0x17ba63;
            }
            ,
            ig['$']('head')[0x0]['appendChild'](_0x246aac);
        },
        '_execModules': function() {
            for (var _0x1dbb07 = !0x1, _0x258923 = 0x0; _0x258923 < ig['_loadQueue']['length']; _0x258923++) {
                for (var _0x4ba56a = ig['_loadQueue'][_0x258923], _0x5d8c6c = !0x0, _0x1a25e7 = 0x0; _0x1a25e7 < _0x4ba56a['requires']['length']; _0x1a25e7++) {
                    var _0x17e74f = _0x4ba56a['requires'][_0x1a25e7];
                    ig['modules'][_0x17e74f] ? ig['modules'][_0x17e74f]['loaded'] || (_0x5d8c6c = !0x1) : (_0x5d8c6c = !0x1,
                    ig['_loadScript'](_0x17e74f, _0x4ba56a['name']));
                }
                _0x5d8c6c && _0x4ba56a['body'] && (ig['_loadQueue']['splice'](_0x258923, 0x1),
                _0x4ba56a['loaded'] = !0x0,
                _0x4ba56a['body'](),
                _0x1dbb07 = !0x0,
                _0x258923--);
            }
            if (_0x1dbb07)
                ig['_execModules']();
            else {
                if (!ig['baked'] && 0x0 == ig['_waitForOnload'] && 0x0 != ig['_loadQueue']['length']) {
                    _0x1dbb07 = [];
                    for (_0x258923 = 0x0; _0x258923 < ig['_loadQueue']['length']; _0x258923++) {
                        _0x5d8c6c = [],
                        _0x17e74f = ig['_loadQueue'][_0x258923]['requires'];
                        for (_0x1a25e7 = 0x0; _0x1a25e7 < _0x17e74f['length']; _0x1a25e7++)
                            _0x4ba56a = ig['modules'][_0x17e74f[_0x1a25e7]],
                            (!_0x4ba56a || !_0x4ba56a['loaded']) && _0x5d8c6c['push'](_0x17e74f[_0x1a25e7]);
                        _0x1dbb07['push'](ig['_loadQueue'][_0x258923]['name'] + '\x20(requires:\x20' + _0x5d8c6c['join'](',\x20') + ')');
                    }
                    throw 'Unresolved\x20(or\x20circular?)\x20dependencies.\x20Most\x20likely\x20there\x27s\x20a\x20name/path\x20mismatch\x20for\x20one\x20of\x20the\x20listed\x20modules\x20or\x20a\x20previous\x20syntax\x20error\x20prevents\x20a\x20module\x20from\x20loading:\x0a' + _0x1dbb07['join']('\x0a');
                }
            }
        },
        '_DOMReady': function() {
            if (!ig['modules']['dom.ready']['loaded']) {
                if (!document['body'])
                    return setTimeout(ig['_DOMReady'], 0xd);
                ig['modules']['dom.ready']['loaded'] = !0x0,
                ig['_waitForOnload']--,
                ig['_execModules']();
            }
            return 0x0;
        },
        '_boot': function() {
            document['location']['href']['match'](/\?nocache/) && ig['setNocache'](!0x0),
            ig['ua']['pixelRatio'] = _0x81f418['devicePixelRatio'] || 0x1,
            ig['ua']['viewport'] = {
                'width': _0x81f418['innerWidth'],
                'height': _0x81f418['innerHeight']
            },
            ig['ua']['screen'] = {
                'width': _0x81f418['screen']['availWidth'] * ig['ua']['pixelRatio'],
                'height': _0x81f418['screen']['availHeight'] * ig['ua']['pixelRatio']
            },
            ig['ua']['iPhone'] = /iPhone/i['test'](navigator['userAgent']),
            ig['ua']['iPhone4'] = ig['ua']['iPhone'] && 0x2 == ig['ua']['pixelRatio'],
            ig['ua']['iPad'] = /iPad/i['test'](navigator['userAgent']),
            ig['ua']['android'] = /android/i['test'](navigator['userAgent']),
            ig['ua']['winPhone'] = /Windows Phone/i['test'](navigator['userAgent']),
            ig['ua']['is_uiwebview'] = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i['test'](navigator['userAgent']),
            ig['ua']['is_safari_or_uiwebview'] = /(iPhone|iPod|iPad).*AppleWebKit/i['test'](navigator['userAgent']),
            ig['ua']['iOS'] = ig['ua']['iPhone'] || ig['ua']['iPad'],
            ig['ua']['iOS6_tag'] = /OS 6_/i['test'](navigator['userAgent']),
            ig['ua']['iOS6'] = (ig['ua']['iPhone'] || ig['ua']['iPad']) && ig['ua']['iOS6_tag'],
            ig['ua']['iOSgt5'] = ig['ua']['iOS'] && 0x5 < parseInt(navigator['appVersion']['match'](/OS (\d+)_(\d+)_?(\d+)?/)[0x1]),
            ig['ua']['HTCONE'] = /HTC_One/i['test'](navigator['userAgent']),
            ig['ua']['winPhone'] = /Windows Phone/i['test'](navigator['userAgent']),
            ig['ua']['Kindle'] = /Silk/i['test'](navigator['userAgent']),
            ig['ua']['touchDevice'] = 'ontouchstart'in _0x81f418 || _0x81f418['navigator']['msMaxTouchPoints'],
            ig['ua']['mobile'] = ig['ua']['iOS'] || ig['ua']['android'] || ig['ua']['iOS6'] || ig['ua']['winPhone'] || ig['ua']['Kindle'] || /mobile/i['test'](navigator['userAgent']),
            'MacIntel' === navigator['platform'] && 0x1 < navigator['maxTouchPoints'] && (ig['ua']['iOS'] = !0x0);
        },
        '_initDOMReady': function() {
            ig['modules']['dom.ready'] ? ig['_execModules']() : (ig['_boot'](),
            ig['modules']['dom.ready'] = {
                'requires': [],
                'loaded': !0x1,
                'body': null
            },
            ig['_waitForOnload']++,
            'complete' === document['readyState'] ? ig['_DOMReady']() : (document['addEventListener']('DOMContentLoaded', ig['_DOMReady'], !0x1),
            _0x81f418['addEventListener']('load', ig['_DOMReady'], !0x1)));
        }
    },
    ig['normalizeVendorAttribute'](_0x81f418, 'requestAnimationFrame');
    if (_0x81f418['requestAnimationFrame']) {
        var _0x3005aa = 0x1
          , _0x536424 = {};
        _0x81f418['ig']['setAnimation'] = function(_0x18ea5c, _0x5b9139) {
            var _0x5c7b99 = _0x3005aa++;
            _0x536424[_0x5c7b99] = !0x0;
            var _0x17c28d = function() {
                _0x536424[_0x5c7b99] && (_0x81f418['requestAnimationFrame'](_0x17c28d, _0x5b9139),
                _0x18ea5c());
            };
            return _0x81f418['requestAnimationFrame'](_0x17c28d, _0x5b9139),
            _0x5c7b99;
        }
        ,
        _0x81f418['ig']['clearAnimation'] = function(_0x4efab8) {
            delete _0x536424[_0x4efab8];
        }
        ;
    } else
        _0x81f418['ig']['setAnimation'] = function(_0x5cafc3) {
            return _0x81f418['setInterval'](_0x5cafc3, 0x3e8 / 0x3c);
        }
        ,
        _0x81f418['ig']['clearAnimation'] = function(_0x3e7e07) {
            _0x81f418['clearInterval'](_0x3e7e07);
        }
        ;
    var _0x153767 = !0x1
      , _0xe4a63f = /xyz/['test'](function() {
        xyz;
    }) ? /\bparent\b/ : /.*/
      , _0x16764b = 0x0;
    _0x81f418['ig']['Class'] = function() {}
    ;
    var _0x32fb01 = function(_0xece612) {
        var _0x27fb7c = this['prototype'], _0x26c880 = {}, _0x550ccd;
        for (_0x550ccd in _0xece612)
            'function' == typeof _0xece612[_0x550ccd] && 'function' == typeof _0x27fb7c[_0x550ccd] && _0xe4a63f['test'](_0xece612[_0x550ccd]) ? (_0x26c880[_0x550ccd] = _0x27fb7c[_0x550ccd],
            _0x27fb7c[_0x550ccd] = function(_0x47d4b6, _0x444277) {
                return function() {
                    var _0x4b2e67 = this['parent'];
                    this['parent'] = _0x26c880[_0x47d4b6];
                    var _0x524f27 = _0x444277['apply'](this, arguments);
                    return this['parent'] = _0x4b2e67,
                    _0x524f27;
                }
                ;
            }(_0x550ccd, _0xece612[_0x550ccd])) : _0x27fb7c[_0x550ccd] = _0xece612[_0x550ccd];
    };
    _0x81f418['ig']['Class']['extend'] = function(_0xee0345) {
        function _0x45e25b() {
            if (!_0x153767) {
                if (this['staticInstantiate']) {
                    var _0x3899f2 = this['staticInstantiate']['apply'](this, arguments);
                    if (_0x3899f2)
                        return _0x3899f2;
                }
                for (var _0x1a0761 in this)
                    'object' == typeof this[_0x1a0761] && (this[_0x1a0761] = ig['copy'](this[_0x1a0761]));
                this['init'] && this['init']['apply'](this, arguments);
            }
            return this;
        }
        var _0x5a5ae2 = this['prototype'];
        _0x153767 = !0x0;
        var _0x190f78 = new this();
        _0x153767 = !0x1;
        for (var _0x14c783 in _0xee0345)
            _0x190f78[_0x14c783] = 'function' == typeof _0xee0345[_0x14c783] && 'function' == typeof _0x5a5ae2[_0x14c783] && _0xe4a63f['test'](_0xee0345[_0x14c783]) ? function(_0x23dd86, _0x498426) {
                return function() {
                    var _0x778757 = this['parent'];
                    this['parent'] = _0x5a5ae2[_0x23dd86];
                    var _0x4d412e = _0x498426['apply'](this, arguments);
                    return this['parent'] = _0x778757,
                    _0x4d412e;
                }
                ;
            }(_0x14c783, _0xee0345[_0x14c783]) : _0xee0345[_0x14c783];
        return _0x45e25b['prototype'] = _0x190f78,
        _0x45e25b['prototype']['constructor'] = _0x45e25b,
        _0x45e25b['extend'] = _0x81f418['ig']['Class']['extend'],
        _0x45e25b['inject'] = _0x32fb01,
        _0x45e25b['classId'] = _0x190f78['classId'] = ++_0x16764b,
        _0x45e25b;
    }
    ,
    _0x81f418['ImpactMixin'] && ig['merge'](ig, _0x81f418['ImpactMixin']);
}(window),
ig['baked'] = !0x0,
ig['module']('impact.image')['defines'](function() {
    ig['Image'] = ig['Class']['extend']({
        'data': null,
        'width': 0x0,
        'height': 0x0,
        'loaded': !0x1,
        'failed': !0x1,
        'loadCallback': null,
        'path': '',
        'staticInstantiate': function(_0x31fa08) {
            return ig['Image']['cache'][_0x31fa08] || null;
        },
        'init': function(_0x4c9bda) {
            this['path'] = _0x4c9bda,
            this['load']();
        },
        'load': function(_0x408472) {
            this['loaded'] ? _0x408472 && _0x408472(this['path'], !0x0) : (!this['loaded'] && ig['ready'] ? (this['loadCallback'] = _0x408472 || null,
            this['data'] = new Image(),
            this['data']['onload'] = this['onload']['bind'](this),
            this['data']['onerror'] = this['onerror']['bind'](this),
            this['data']['src'] = ig['prefix'] + this['path'] + ig['nocache']) : ig['addResource'](this),
            ig['Image']['cache'][this['path']] = this);
        },
        'reload': function() {
            this['loaded'] = !0x1,
            this['data'] = new Image(),
            this['data']['onload'] = this['onload']['bind'](this),
            this['data']['src'] = this['path'] + '?' + Date['now']();
        },
        'onload': function() {
            this['width'] = this['data']['width'],
            this['height'] = this['data']['height'],
            this['loaded'] = !0x0,
            0x1 != ig['system']['scale'] && this['resize'](ig['system']['scale']),
            this['loadCallback'] && this['loadCallback'](this['path'], !0x0);
        },
        'onerror': function() {
            this['failed'] = !0x0,
            this['loadCallback'] && this['loadCallback'](this['path'], !0x1);
        },
        'resize': function(_0x43b53e) {
            var _0x5d4bf9 = ig['getImagePixels'](this['data'], 0x0, 0x0, this['width'], this['height'])
              , _0x4bfffb = this['width'] * _0x43b53e
              , _0x2a02f2 = this['height'] * _0x43b53e
              , _0x44cb54 = ig['$new']('canvas');
            _0x44cb54['width'] = _0x4bfffb,
            _0x44cb54['height'] = _0x2a02f2;
            for (var _0x160a28 = _0x44cb54['getContext']('2d'), _0x520f50 = _0x160a28['getImageData'](0x0, 0x0, _0x4bfffb, _0x2a02f2), _0x272712 = 0x0; _0x272712 < _0x2a02f2; _0x272712++)
                for (var _0x2d6f4b = 0x0; _0x2d6f4b < _0x4bfffb; _0x2d6f4b++) {
                    var _0x2c85bf = 0x4 * (Math['floor'](_0x272712 / _0x43b53e) * this['width'] + Math['floor'](_0x2d6f4b / _0x43b53e))
                      , _0x422f6c = 0x4 * (_0x272712 * _0x4bfffb + _0x2d6f4b);
                    _0x520f50['data'][_0x422f6c] = _0x5d4bf9['data'][_0x2c85bf],
                    _0x520f50['data'][_0x422f6c + 0x1] = _0x5d4bf9['data'][_0x2c85bf + 0x1],
                    _0x520f50['data'][_0x422f6c + 0x2] = _0x5d4bf9['data'][_0x2c85bf + 0x2],
                    _0x520f50['data'][_0x422f6c + 0x3] = _0x5d4bf9['data'][_0x2c85bf + 0x3];
                }
            _0x160a28['putImageData'](_0x520f50, 0x0, 0x0),
            this['data'] = _0x44cb54;
        },
        'draw': function(_0x1a44c1, _0x958f76, _0x1f0189, _0x57a1a3, _0x8d3173, _0xf7942c) {
            if (this['loaded']) {
                var _0x537fc7 = ig['system']['scale'];
                _0x8d3173 = (_0x8d3173 ? _0x8d3173 : this['width']) * _0x537fc7,
                _0xf7942c = (_0xf7942c ? _0xf7942c : this['height']) * _0x537fc7,
                ig['system']['context']['drawImage'](this['data'], _0x1f0189 ? _0x1f0189 * _0x537fc7 : 0x0, _0x57a1a3 ? _0x57a1a3 * _0x537fc7 : 0x0, _0x8d3173, _0xf7942c, ig['system']['getDrawPos'](_0x1a44c1), ig['system']['getDrawPos'](_0x958f76), _0x8d3173, _0xf7942c),
                ig['Image']['drawCount']++;
            }
        },
        'drawTile': function(_0x381398, _0x2c8e1c, _0x204875, _0x191fb8, _0x2771c9, _0x418cb1, _0x4e4cad) {
            _0x2771c9 = _0x2771c9 ? _0x2771c9 : _0x191fb8;
            if (this['loaded'] && !(_0x191fb8 > this['width'] || _0x2771c9 > this['height'])) {
                var _0x45b618 = ig['system']['scale']
                  , _0x4053be = Math['floor'](_0x191fb8 * _0x45b618)
                  , _0x120681 = Math['floor'](_0x2771c9 * _0x45b618)
                  , _0x310c6a = _0x418cb1 ? -0x1 : 0x1
                  , _0x40a797 = _0x4e4cad ? -0x1 : 0x1;
                if (_0x418cb1 || _0x4e4cad)
                    ig['system']['context']['save'](),
                    ig['system']['context']['scale'](_0x310c6a, _0x40a797);
                ig['system']['context']['drawImage'](this['data'], Math['floor'](_0x204875 * _0x191fb8) % this['width'] * _0x45b618, Math['floor'](_0x204875 * _0x191fb8 / this['width']) * _0x2771c9 * _0x45b618, _0x4053be, _0x120681, ig['system']['getDrawPos'](_0x381398) * _0x310c6a - (_0x418cb1 ? _0x4053be : 0x0), ig['system']['getDrawPos'](_0x2c8e1c) * _0x40a797 - (_0x4e4cad ? _0x120681 : 0x0), _0x4053be, _0x120681),
                (_0x418cb1 || _0x4e4cad) && ig['system']['context']['restore'](),
                ig['Image']['drawCount']++;
            }
        }
    }),
    ig['Image']['drawCount'] = 0x0,
    ig['Image']['cache'] = {},
    ig['Image']['reloadCache'] = function() {
        for (var _0x1aac92 in ig['Image']['cache'])
            ig['Image']['cache'][_0x1aac92]['reload']();
    }
    ;
}),
ig['baked'] = !0x0,
ig['module']('impact.font')['requires']('impact.image')['defines'](function() {
    ig['Font'] = ig['Image']['extend']({
        'widthMap': [],
        'indices': [],
        'firstChar': 0x20,
        'alpha': 0x1,
        'letterSpacing': 0x1,
        'lineSpacing': 0x0,
        'onload': function(_0x57fd94) {
            this['_loadMetrics'](this['data']),
            this['parent'](_0x57fd94);
        },
        'widthForString': function(_0x2f15ea) {
            if (-0x1 !== _0x2f15ea['indexOf']('\x0a')) {
                _0x2f15ea = _0x2f15ea['split']('\x0a');
                for (var _0x3f32c0 = 0x0, _0x56ff17 = 0x0; _0x56ff17 < _0x2f15ea['length']; _0x56ff17++)
                    _0x3f32c0 = Math['max'](_0x3f32c0, this['_widthForLine'](_0x2f15ea[_0x56ff17]));
                return _0x3f32c0;
            }
            return this['_widthForLine'](_0x2f15ea);
        },
        '_widthForLine': function(_0x48b06b) {
            for (var _0x2348f8 = 0x0, _0x383180 = 0x0; _0x383180 < _0x48b06b['length']; _0x383180++)
                _0x2348f8 += this['widthMap'][_0x48b06b['charCodeAt'](_0x383180) - this['firstChar']] + this['letterSpacing'];
            return _0x2348f8;
        },
        'heightForString': function(_0x539d06) {
            return _0x539d06['split']('\x0a')['length'] * (this['height'] + this['lineSpacing']);
        },
        'draw': function(_0x3c518e, _0x1667c3, _0x5ecde7, _0x33fe24) {
            'string' != typeof _0x3c518e && (_0x3c518e = _0x3c518e['toString']());
            if (-0x1 !== _0x3c518e['indexOf']('\x0a')) {
                _0x3c518e = _0x3c518e['split']('\x0a');
                for (var _0x554774 = this['height'] + this['lineSpacing'], _0x579664 = 0x0; _0x579664 < _0x3c518e['length']; _0x579664++)
                    this['draw'](_0x3c518e[_0x579664], _0x1667c3, _0x5ecde7 + _0x579664 * _0x554774, _0x33fe24);
            } else {
                if (_0x33fe24 == ig['Font']['ALIGN']['RIGHT'] || _0x33fe24 == ig['Font']['ALIGN']['CENTER'])
                    _0x579664 = this['_widthForLine'](_0x3c518e),
                    _0x1667c3 -= _0x33fe24 == ig['Font']['ALIGN']['CENTER'] ? _0x579664 / 0x2 : _0x579664;
                0x1 !== this['alpha'] && (ig['system']['context']['globalAlpha'] = this['alpha']);
                for (_0x579664 = 0x0; _0x579664 < _0x3c518e['length']; _0x579664++)
                    _0x33fe24 = _0x3c518e['charCodeAt'](_0x579664),
                    _0x1667c3 += this['_drawChar'](_0x33fe24 - this['firstChar'], _0x1667c3, _0x5ecde7);
                0x1 !== this['alpha'] && (ig['system']['context']['globalAlpha'] = 0x1),
                ig['Image']['drawCount'] += _0x3c518e['length'];
            }
        },
        '_drawChar': function(_0xf588c3, _0x13e17b, _0x3d8864) {
            if (!this['loaded'] || 0x0 > _0xf588c3 || _0xf588c3 >= this['indices']['length'])
                return 0x0;
            var _0x353a64 = ig['system']['scale']
              , _0x103ec5 = this['widthMap'][_0xf588c3] * _0x353a64
              , _0x3ae7ec = (this['height'] - 0x2) * _0x353a64;
            return ig['system']['context']['drawImage'](this['data'], this['indices'][_0xf588c3] * _0x353a64, 0x0, _0x103ec5, _0x3ae7ec, ig['system']['getDrawPos'](_0x13e17b), ig['system']['getDrawPos'](_0x3d8864), _0x103ec5, _0x3ae7ec),
            this['widthMap'][_0xf588c3] + this['letterSpacing'];
        },
        '_loadMetrics': function(_0x30c06a) {
            this['height'] = _0x30c06a['height'] - 0x1,
            this['widthMap'] = [],
            this['indices'] = [];
            for (var _0x7970fa = ig['getImagePixels'](_0x30c06a, 0x0, _0x30c06a['height'] - 0x1, _0x30c06a['width'], 0x1), _0x5743bf = 0x0, _0x1f18e8 = 0x0, _0x560b3a = 0x0; _0x560b3a < _0x30c06a['width']; _0x560b3a++) {
                var _0x31b310 = 0x4 * _0x560b3a + 0x3;
                0x7f < _0x7970fa['data'][_0x31b310] ? _0x1f18e8++ : 0x80 > _0x7970fa['data'][_0x31b310] && _0x1f18e8 && (this['widthMap']['push'](_0x1f18e8),
                this['indices']['push'](_0x560b3a - _0x1f18e8),
                _0x5743bf++,
                _0x1f18e8 = 0x0);
            }
            this['widthMap']['push'](_0x1f18e8),
            this['indices']['push'](_0x560b3a - _0x1f18e8);
        }
    }),
    ig['Font']['ALIGN'] = {
        'LEFT': 0x0,
        'RIGHT': 0x1,
        'CENTER': 0x2
    };
}),
ig['baked'] = !0x0,
ig['module']('impact.sound')['defines'](function() {
    ig['SoundManager'] = ig['Class']['extend']({
        'clips': {},
        'volume': 0x1,
        'format': null,
        'init': function() {
            if (!ig['Sound']['enabled'] || !window['Audio'])
                ig['Sound']['enabled'] = !0x1;
            else {
                for (var _0x5d8e14 = new Audio(), _0x3c211e = 0x0; _0x3c211e < ig['Sound']['use']['length']; _0x3c211e++) {
                    var _0x1c9569 = ig['Sound']['use'][_0x3c211e];
                    if (_0x5d8e14['canPlayType'](_0x1c9569['mime'])) {
                        this['format'] = _0x1c9569;
                        break;
                    }
                }
                this['format'] || (ig['Sound']['enabled'] = !0x1);
            }
        },
        'load': function(_0x12e17c, _0x5633b8, _0x25a4c7) {
            var _0x5acda8 = ig['prefix'] + _0x12e17c['replace'](/[^\.]+$/, this['format']['ext']) + ig['nocache'];
            if (this['clips'][_0x12e17c]) {
                if (_0x5633b8 && this['clips'][_0x12e17c]['length'] < ig['Sound']['channels'])
                    for (_0x5633b8 = this['clips'][_0x12e17c]['length']; _0x5633b8 < ig['Sound']['channels']; _0x5633b8++) {
                        var _0x359e0e = new Audio(_0x5acda8);
                        _0x359e0e['load'](),
                        this['clips'][_0x12e17c]['push'](_0x359e0e);
                    }
                return this['clips'][_0x12e17c][0x0];
            }
            var _0x2f67f3 = new Audio(_0x5acda8);
            _0x25a4c7 && (_0x2f67f3['addEventListener']('canplaythrough', function _0x24ff85(_0x33418e) {
                _0x2f67f3['removeEventListener']('canplaythrough', _0x24ff85, !0x1),
                _0x25a4c7(_0x12e17c, !0x0, _0x33418e);
            }, !0x1),
            _0x2f67f3['addEventListener']('error', function(_0x34c294) {
                _0x25a4c7(_0x12e17c, !0x1, _0x34c294);
            }, !0x1)),
            _0x2f67f3['preload'] = 'auto',
            _0x2f67f3['load'](),
            this['clips'][_0x12e17c] = [_0x2f67f3];
            if (_0x5633b8)
                for (_0x5633b8 = 0x1; _0x5633b8 < ig['Sound']['channels']; _0x5633b8++)
                    _0x359e0e = new Audio(_0x5acda8),
                    _0x359e0e['load'](),
                    this['clips'][_0x12e17c]['push'](_0x359e0e);
            return _0x2f67f3;
        },
        'get': function(_0x2417b3) {
            _0x2417b3 = this['clips'][_0x2417b3];
            for (var _0x3a7347 = 0x0, _0x55f141; _0x55f141 = _0x2417b3[_0x3a7347++]; )
                if (_0x55f141['paused'] || _0x55f141['ended'])
                    return _0x55f141['ended'] && (_0x55f141['currentTime'] = 0x0),
                    _0x55f141;
            return _0x2417b3[0x0]['pause'](),
            _0x2417b3[0x0]['currentTime'] = 0x0,
            _0x2417b3[0x0];
        }
    }),
    ig['Music'] = ig['Class']['extend']({
        'tracks': [],
        'namedTracks': {},
        'currentTrack': null,
        'currentIndex': 0x0,
        'random': !0x1,
        '_volume': 0x1,
        '_loop': !0x1,
        '_fadeInterval': 0x0,
        '_fadeTimer': null,
        '_endedCallbackBound': null,
        'init': function() {
            this['_endedCallbackBound'] = this['_endedCallback']['bind'](this),
            Object['defineProperty'] ? (Object['defineProperty'](this, 'volume', {
                'get': this['getVolume']['bind'](this),
                'set': this['setVolume']['bind'](this)
            }),
            Object['defineProperty'](this, 'loop', {
                'get': this['getLooping']['bind'](this),
                'set': this['setLooping']['bind'](this)
            })) : this['__defineGetter__'] && (this['__defineGetter__']('volume', this['getVolume']['bind'](this)),
            this['__defineSetter__']('volume', this['setVolume']['bind'](this)),
            this['__defineGetter__']('loop', this['getLooping']['bind'](this)),
            this['__defineSetter__']('loop', this['setLooping']['bind'](this)));
        },
        'add': function(_0x159bad, _0x2f04e6) {
            if (ig['Sound']['enabled']) {
                var _0x2f6eba = ig['soundManager']['load'](_0x159bad instanceof ig['Sound'] ? _0x159bad['path'] : _0x159bad, !0x1);
                _0x2f6eba['loop'] = this['_loop'],
                _0x2f6eba['volume'] = this['_volume'],
                _0x2f6eba['addEventListener']('ended', this['_endedCallbackBound'], !0x1),
                this['tracks']['push'](_0x2f6eba),
                _0x2f04e6 && (this['namedTracks'][_0x2f04e6] = _0x2f6eba),
                this['currentTrack'] || (this['currentTrack'] = _0x2f6eba);
            }
        },
        'next': function() {
            this['tracks']['length'] && (this['stop'](),
            this['currentIndex'] = this['random'] ? Math['floor'](Math['random']() * this['tracks']['length']) : (this['currentIndex'] + 0x1) % this['tracks']['length'],
            this['currentTrack'] = this['tracks'][this['currentIndex']],
            this['play']());
        },
        'pause': function() {
            this['currentTrack'] && this['currentTrack']['pause']();
        },
        'stop': function() {
            this['currentTrack'] && (this['currentTrack']['pause'](),
            this['currentTrack']['currentTime'] = 0x0);
        },
        'play': function(_0x202064) {
            if (_0x202064 && this['namedTracks'][_0x202064])
                _0x202064 = this['namedTracks'][_0x202064],
                _0x202064 != this['currentTrack'] && (this['stop'](),
                this['currentTrack'] = _0x202064);
            else {
                if (!this['currentTrack'])
                    return;
            }
            this['currentTrack']['play']();
        },
        'getLooping': function() {
            return this['_loop'];
        },
        'setLooping': function(_0x116279) {
            this['_loop'] = _0x116279;
            for (var _0x147a70 in this['tracks'])
                this['tracks'][_0x147a70]['loop'] = _0x116279;
        },
        'getVolume': function() {
            return this['_volume'];
        },
        'setVolume': function(_0x8449f3) {
            this['_volume'] = _0x8449f3['limit'](0x0, 0x1);
            for (var _0x5404ad in this['tracks'])
                this['tracks'][_0x5404ad]['volume'] = this['_volume'];
        },
        'fadeOut': function(_0x3c8b66) {
            this['currentTrack'] && (clearInterval(this['_fadeInterval']),
            this['fadeTimer'] = new ig['Timer'](_0x3c8b66),
            this['_fadeInterval'] = setInterval(this['_fadeStep']['bind'](this), 0x32));
        },
        '_fadeStep': function() {
            var _0x33f5bd = this['fadeTimer']['delta']()['map'](-this['fadeTimer']['target'], 0x0, 0x1, 0x0)['limit'](0x0, 0x1) * this['_volume'];
            0.01 >= _0x33f5bd ? (this['stop'](),
            this['currentTrack']['volume'] = this['_volume'],
            clearInterval(this['_fadeInterval'])) : this['currentTrack']['volume'] = _0x33f5bd;
        },
        '_endedCallback': function() {
            this['_loop'] ? this['play']() : this['next']();
        }
    }),
    ig['Sound'] = ig['Class']['extend']({
        'path': '',
        'volume': 0x1,
        'currentClip': null,
        'multiChannel': !0x0,
        'init': function(_0x54d8c5, _0x444dde) {
            this['path'] = _0x54d8c5,
            this['multiChannel'] = !0x1 !== _0x444dde,
            this['load']();
        },
        'load': function(_0x50dc23) {
            ig['Sound']['enabled'] ? ig['ready'] ? ig['soundManager']['load'](this['path'], this['multiChannel'], _0x50dc23) : ig['addResource'](this) : _0x50dc23 && _0x50dc23(this['path'], !0x0);
        },
        'play': function() {
            ig['Sound']['enabled'] && (this['currentClip'] = ig['soundManager']['get'](this['path']),
            this['currentClip']['volume'] = ig['soundManager']['volume'] * this['volume'],
            this['currentClip']['play']());
        },
        'stop': function() {
            this['currentClip'] && (this['currentClip']['pause'](),
            this['currentClip']['currentTime'] = 0x0);
        }
    }),
    ig['Sound']['FORMAT'] = {
        'MP3': {
            'ext': 'mp3',
            'mime': 'audio/mpeg'
        },
        'M4A': {
            'ext': 'm4a',
            'mime': 'audio/mp4;\x20codecs=mp4a'
        },
        'OGG': {
            'ext': 'ogg',
            'mime': 'audio/ogg;\x20codecs=vorbis'
        },
        'WEBM': {
            'ext': 'webm',
            'mime': 'audio/webm;\x20codecs=vorbis'
        },
        'CAF': {
            'ext': 'caf',
            'mime': 'audio/x-caf'
        }
    },
    ig['Sound']['use'] = [ig['Sound']['FORMAT']['OGG'], ig['Sound']['FORMAT']['MP3']],
    ig['Sound']['channels'] = 0x4,
    ig['Sound']['enabled'] = !0x0;
}),
ig['baked'] = !0x0,
ig['module']('impact.loader')['requires']('impact.image', 'impact.font', 'impact.sound')['defines'](function() {
    ig['Loader'] = ig['Class']['extend']({
        'resources': [],
        'gameClass': null,
        'status': 0x0,
        'done': !0x1,
        '_unloaded': [],
        '_drawStatus': 0x0,
        '_intervalId': 0x0,
        '_loadCallbackBound': null,
        'init': function(_0x79622f, _0x5a868e) {
            this['gameClass'] = _0x79622f,
            this['resources'] = _0x5a868e,
            this['_loadCallbackBound'] = this['_loadCallback']['bind'](this);
            for (var _0x487109 = 0x0; _0x487109 < this['resources']['length']; _0x487109++)
                this['_unloaded']['push'](this['resources'][_0x487109]['path']);
        },
        'load': function() {
            ig['system']['clear']('#000');
            if (this['resources']['length']) {
                for (var _0x4f1b1e = 0x0; _0x4f1b1e < this['resources']['length']; _0x4f1b1e++)
                    this['loadResource'](this['resources'][_0x4f1b1e]);
                this['_intervalId'] = setInterval(this['draw']['bind'](this), 0x10);
            } else
                this['end']();
        },
        'loadResource': function(_0x58de5f) {
            _0x58de5f['load'](this['_loadCallbackBound']);
        },
        'end': function() {
            this['done'] || (this['done'] = !0x0,
            clearInterval(this['_intervalId']));
        },
        'draw': function() {},
        '_loadCallback': function(_0x57d830, _0x3be66c) {
            if (_0x3be66c)
                this['_unloaded']['erase'](_0x57d830);
            else
                throw 'Failed\x20to\x20load\x20resource:\x20' + _0x57d830;
            this['status'] = 0x1 - this['_unloaded']['length'] / this['resources']['length'],
            0x0 == this['_unloaded']['length'] && setTimeout(this['end']['bind'](this), 0xfa);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('impact.timer')['defines'](function() {
    ig['Timer'] = ig['Class']['extend']({
        'target': 0x0,
        'base': 0x0,
        'last': 0x0,
        'pausedAt': 0x0,
        'init': function(_0x2172f7) {
            this['last'] = this['base'] = ig['Timer']['time'],
            this['target'] = _0x2172f7 || 0x0;
        },
        'set': function(_0x1581db) {
            this['target'] = _0x1581db || 0x0,
            this['base'] = ig['Timer']['time'],
            this['pausedAt'] = 0x0;
        },
        'reset': function() {
            this['base'] = ig['Timer']['time'],
            this['pausedAt'] = 0x0;
        },
        'tick': function() {
            var _0x61c58c = ig['Timer']['time'] - this['last'];
            return this['last'] = ig['Timer']['time'],
            this['pausedAt'] ? 0x0 : _0x61c58c;
        },
        'delta': function() {
            return (this['pausedAt'] || ig['Timer']['time']) - this['base'] - this['target'];
        },
        'pause': function() {
            this['pausedAt'] || (this['pausedAt'] = ig['Timer']['time']);
        },
        'unpause': function() {
            this['pausedAt'] && (this['base'] += ig['Timer']['time'] - this['pausedAt'],
            this['pausedAt'] = 0x0);
        }
    }),
    ig['Timer']['_last'] = 0x0,
    ig['Timer']['time'] = Number['MIN_VALUE'],
    ig['Timer']['timeScale'] = 0x1,
    ig['Timer']['maxStep'] = 0.05,
    ig['Timer']['step'] = function() {
        var _0x5e5d3c = Date['now']();
        ig['Timer']['time'] += Math['min']((_0x5e5d3c - ig['Timer']['_last']) / 0x3e8, ig['Timer']['maxStep']) * ig['Timer']['timeScale'],
        ig['Timer']['_last'] = _0x5e5d3c;
    }
    ;
}),
ig['baked'] = !0x0,
ig['module']('impact.system')['requires']('impact.timer', 'impact.image')['defines'](function() {
    ig['System'] = ig['Class']['extend']({
        'fps': 0x1e,
        'width': 0x140,
        'height': 0xf0,
        'realWidth': 0x140,
        'realHeight': 0xf0,
        'scale': 0x1,
        'tick': 0x0,
        'animationId': 0x0,
        'newGameClass': null,
        'running': !0x1,
        'delegate': null,
        'clock': null,
        'canvas': null,
        'context': null,
        'init': function(_0x59ffa1, _0x400ff8, _0x51895e, _0x2c2a34, _0x41e19d) {
            this['fps'] = _0x400ff8,
            this['clock'] = new ig['Timer'](),
            this['canvas'] = ig['$'](_0x59ffa1),
            this['resize'](_0x51895e, _0x2c2a34, _0x41e19d),
            this['context'] = this['canvas']['getContext']('2d'),
            this['getDrawPos'] = ig['System']['drawMode'],
            0x1 != this['scale'] && (ig['System']['scaleMode'] = ig['System']['SCALE']['CRISP']),
            ig['System']['scaleMode'](this['canvas'], this['context']);
        },
        'resize': function(_0x5c0057, _0x1eb58a, _0x35e0ee) {
            this['width'] = _0x5c0057,
            this['height'] = _0x1eb58a,
            this['scale'] = _0x35e0ee || this['scale'],
            this['realWidth'] = this['width'] * this['scale'],
            this['realHeight'] = this['height'] * this['scale'],
            this['canvas']['width'] = this['realWidth'],
            this['canvas']['height'] = this['realHeight'];
        },
        'setGame': function(_0x2d968c) {
            this['running'] ? this['newGameClass'] = _0x2d968c : this['setGameNow'](_0x2d968c);
        },
        'setGameNow': function(_0x172901) {
            ig['game'] = new _0x172901(),
            ig['system']['setDelegate'](ig['game']);
        },
        'setDelegate': function(_0x449b76) {
            if ('function' == typeof _0x449b76['run'])
                this['delegate'] = _0x449b76,
                this['startRunLoop']();
            else
                throw 'System.setDelegate:\x20No\x20run()\x20function\x20in\x20object';
        },
        'stopRunLoop': function() {
            ig['clearAnimation'](this['animationId']),
            this['running'] = !0x1;
        },
        'startRunLoop': function() {
            this['stopRunLoop'](),
            this['animationId'] = ig['setAnimation'](this['run']['bind'](this), this['canvas']),
            this['running'] = !0x0;
        },
        'clear': function(_0x3bcdc8) {
            this['context']['fillStyle'] = _0x3bcdc8,
            this['context']['fillRect'](0x0, 0x0, this['realWidth'], this['realHeight']);
        },
        'run': function() {
            ig['Timer']['step'](),
            this['tick'] = this['clock']['tick'](),
            this['delegate']['run'](),
            ig['input']['clearPressed'](),
            this['newGameClass'] && (this['setGameNow'](this['newGameClass']),
            this['newGameClass'] = null);
        },
        'getDrawPos': null
    }),
    ig['System']['DRAW'] = {
        'AUTHENTIC': function(_0x459aa7) {
            return Math['round'](_0x459aa7) * this['scale'];
        },
        'SMOOTH': function(_0x257054) {
            return Math['round'](_0x257054 * this['scale']);
        },
        'SUBPIXEL': function(_0x36cbec) {
            return _0x36cbec * this['scale'];
        }
    },
    ig['System']['drawMode'] = ig['System']['DRAW']['SMOOTH'],
    ig['System']['SCALE'] = {
        'CRISP': function(_0x48aea8, _0x311581) {
            ig['setVendorAttribute'](_0x311581, 'imageSmoothingEnabled', !0x1),
            _0x48aea8['style']['imageRendering'] = '-moz-crisp-edges',
            _0x48aea8['style']['imageRendering'] = '-o-crisp-edges',
            _0x48aea8['style']['imageRendering'] = '-webkit-optimize-contrast',
            _0x48aea8['style']['imageRendering'] = 'crisp-edges',
            _0x48aea8['style']['msInterpolationMode'] = 'nearest-neighbor';
        },
        'SMOOTH': function(_0x206093, _0x2149cc) {
            ig['setVendorAttribute'](_0x2149cc, 'imageSmoothingEnabled', !0x0),
            _0x206093['style']['imageRendering'] = '',
            _0x206093['style']['msInterpolationMode'] = '';
        }
    },
    ig['System']['scaleMode'] = ig['System']['SCALE']['SMOOTH'];
}),
ig['baked'] = !0x0,
ig['module']('impact.input')['defines'](function() {
    ig['KEY'] = {
        'MOUSE1': -0x1,
        'MOUSE2': -0x3,
        'MWHEEL_UP': -0x4,
        'MWHEEL_DOWN': -0x5,
        'BACKSPACE': 0x8,
        'TAB': 0x9,
        'ENTER': 0xd,
        'PAUSE': 0x13,
        'CAPS': 0x14,
        'ESC': 0x1b,
        'SPACE': 0x20,
        'PAGE_UP': 0x21,
        'PAGE_DOWN': 0x22,
        'END': 0x23,
        'HOME': 0x24,
        'LEFT_ARROW': 0x25,
        'UP_ARROW': 0x26,
        'RIGHT_ARROW': 0x27,
        'DOWN_ARROW': 0x28,
        'INSERT': 0x2d,
        'DELETE': 0x2e,
        '_0': 0x30,
        '_1': 0x31,
        '_2': 0x32,
        '_3': 0x33,
        '_4': 0x34,
        '_5': 0x35,
        '_6': 0x36,
        '_7': 0x37,
        '_8': 0x38,
        '_9': 0x39,
        'A': 0x41,
        'B': 0x42,
        'C': 0x43,
        'D': 0x44,
        'E': 0x45,
        'F': 0x46,
        'G': 0x47,
        'H': 0x48,
        'I': 0x49,
        'J': 0x4a,
        'K': 0x4b,
        'L': 0x4c,
        'M': 0x4d,
        'N': 0x4e,
        'O': 0x4f,
        'P': 0x50,
        'Q': 0x51,
        'R': 0x52,
        'S': 0x53,
        'T': 0x54,
        'U': 0x55,
        'V': 0x56,
        'W': 0x57,
        'X': 0x58,
        'Y': 0x59,
        'Z': 0x5a,
        'NUMPAD_0': 0x60,
        'NUMPAD_1': 0x61,
        'NUMPAD_2': 0x62,
        'NUMPAD_3': 0x63,
        'NUMPAD_4': 0x64,
        'NUMPAD_5': 0x65,
        'NUMPAD_6': 0x66,
        'NUMPAD_7': 0x67,
        'NUMPAD_8': 0x68,
        'NUMPAD_9': 0x69,
        'MULTIPLY': 0x6a,
        'ADD': 0x6b,
        'SUBSTRACT': 0x6d,
        'DECIMAL': 0x6e,
        'DIVIDE': 0x6f,
        'F1': 0x70,
        'F2': 0x71,
        'F3': 0x72,
        'F4': 0x73,
        'F5': 0x74,
        'F6': 0x75,
        'F7': 0x76,
        'F8': 0x77,
        'F9': 0x78,
        'F10': 0x79,
        'F11': 0x7a,
        'F12': 0x7b,
        'SHIFT': 0x10,
        'CTRL': 0x11,
        'ALT': 0x12,
        'PLUS': 0xbb,
        'COMMA': 0xbc,
        'MINUS': 0xbd,
        'PERIOD': 0xbe
    },
    ig['Input'] = ig['Class']['extend']({
        'bindings': {},
        'actions': {},
        'presses': {},
        'locks': {},
        'delayedKeyup': {},
        'isUsingMouse': !0x1,
        'isUsingKeyboard': !0x1,
        'isUsingAccelerometer': !0x1,
        'mouse': {
            'x': 0x0,
            'y': 0x0
        },
        'accel': {
            'x': 0x0,
            'y': 0x0,
            'z': 0x0
        },
        'initMouse': function() {
            if (!this['isUsingMouse']) {
                this['isUsingMouse'] = !0x0;
                var _0x3ca354 = this['mousewheel']['bind'](this);
                ig['system']['canvas']['addEventListener']('mousewheel', _0x3ca354, !0x1),
                ig['system']['canvas']['addEventListener']('DOMMouseScroll', _0x3ca354, !0x1),
                ig['system']['canvas']['addEventListener']('contextmenu', this['contextmenu']['bind'](this), !0x1),
                ig['system']['canvas']['addEventListener']('mousedown', this['keydown']['bind'](this), !0x1),
                ig['system']['canvas']['addEventListener']('mouseup', this['keyup']['bind'](this), !0x1),
                ig['system']['canvas']['addEventListener']('mousemove', this['mousemove']['bind'](this), !0x1),
                ig['ua']['touchDevice'] && (ig['system']['canvas']['addEventListener']('touchstart', this['keydown']['bind'](this), !0x1),
                ig['system']['canvas']['addEventListener']('touchend', this['keyup']['bind'](this), !0x1),
                ig['system']['canvas']['addEventListener']('touchmove', this['mousemove']['bind'](this), !0x1),
                ig['system']['canvas']['addEventListener']('MSPointerDown', this['keydown']['bind'](this), !0x1),
                ig['system']['canvas']['addEventListener']('MSPointerUp', this['keyup']['bind'](this), !0x1),
                ig['system']['canvas']['addEventListener']('MSPointerMove', this['mousemove']['bind'](this), !0x1),
                ig['system']['canvas']['style']['msTouchAction'] = 'none');
            }
        },
        'initKeyboard': function() {
            this['isUsingKeyboard'] || (this['isUsingKeyboard'] = !0x0,
            window['addEventListener']('keydown', this['keydown']['bind'](this), !0x1),
            window['addEventListener']('keyup', this['keyup']['bind'](this), !0x1));
        },
        'initAccelerometer': function() {
            this['isUsingAccelerometer'] || window['addEventListener']('devicemotion', this['devicemotion']['bind'](this), !0x1);
        },
        'mousewheel': function(_0x366caa) {
            var _0x53b06f = this['bindings'][0x0 < (_0x366caa['wheelDelta'] ? _0x366caa['wheelDelta'] : -0x1 * _0x366caa['detail']) ? ig['KEY']['MWHEEL_UP'] : ig['KEY']['MWHEEL_DOWN']];
            _0x53b06f && (this['actions'][_0x53b06f] = !0x0,
            this['presses'][_0x53b06f] = !0x0,
            this['delayedKeyup'][_0x53b06f] = !0x0,
            _0x366caa['stopPropagation'](),
            _0x366caa['preventDefault']());
        },
        'mousemove': function(_0x5abf86) {
            var _0x290bd1 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth']
              , _0x290bd1 = ig['system']['scale'] * (_0x290bd1 / ig['system']['realWidth'])
              , _0x3f5717 = {
                'left': 0x0,
                'top': 0x0
            };
            ig['system']['canvas']['getBoundingClientRect'] && (_0x3f5717 = ig['system']['canvas']['getBoundingClientRect']()),
            _0x5abf86 = _0x5abf86['touches'] ? _0x5abf86['touches'][0x0] : _0x5abf86,
            this['mouse']['x'] = (_0x5abf86['clientX'] - _0x3f5717['left']) / _0x290bd1,
            this['mouse']['y'] = (_0x5abf86['clientY'] - _0x3f5717['top']) / _0x290bd1;
        },
        'contextmenu': function(_0x15af5d) {
            this['bindings'][ig['KEY']['MOUSE2']] && (_0x15af5d['stopPropagation'](),
            _0x15af5d['preventDefault']());
        },
        'keydown': function(_0x14ec8a) {
            var _0x137df4 = _0x14ec8a['target']['tagName'];
            if (!('INPUT' == _0x137df4 || 'TEXTAREA' == _0x137df4)) {
                if (_0x137df4 = 'keydown' == _0x14ec8a['type'] ? _0x14ec8a['keyCode'] : 0x2 == _0x14ec8a['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1'],
                ('touchstart' == _0x14ec8a['type'] || 'mousedown' == _0x14ec8a['type']) && this['mousemove'](_0x14ec8a),
                _0x137df4 = this['bindings'][_0x137df4])
                    this['actions'][_0x137df4] = !0x0,
                    this['locks'][_0x137df4] || (this['presses'][_0x137df4] = !0x0,
                    this['locks'][_0x137df4] = !0x0),
                    _0x14ec8a['stopPropagation'](),
                    _0x14ec8a['preventDefault']();
            }
        },
        'keyup': function(_0x1fe452) {
            var _0x597d5d = _0x1fe452['target']['tagName'];
            if (!('INPUT' == _0x597d5d || 'TEXTAREA' == _0x597d5d)) {
                if (_0x597d5d = this['bindings']['keyup' == _0x1fe452['type'] ? _0x1fe452['keyCode'] : 0x2 == _0x1fe452['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1']])
                    this['delayedKeyup'][_0x597d5d] = !0x0,
                    _0x1fe452['stopPropagation'](),
                    _0x1fe452['preventDefault']();
            }
        },
        'devicemotion': function(_0x24157d) {
            this['accel'] = _0x24157d['accelerationIncludingGravity'];
        },
        'bind': function(_0x599dcc, _0xbf3fa3) {
            0x0 > _0x599dcc ? this['initMouse']() : 0x0 < _0x599dcc && this['initKeyboard'](),
            this['bindings'][_0x599dcc] = _0xbf3fa3;
        },
        'bindTouch': function(_0x1d9946, _0x4e783c) {
            var _0x3d04a7 = ig['$'](_0x1d9946)
              , _0x4a817e = this;
            _0x3d04a7['addEventListener']('touchstart', function(_0x3e52f1) {
                _0x4a817e['touchStart'](_0x3e52f1, _0x4e783c);
            }, !0x1),
            _0x3d04a7['addEventListener']('touchend', function(_0x1996a4) {
                _0x4a817e['touchEnd'](_0x1996a4, _0x4e783c);
            }, !0x1),
            _0x3d04a7['addEventListener']('MSPointerDown', function(_0x56d7e5) {
                _0x4a817e['touchStart'](_0x56d7e5, _0x4e783c);
            }, !0x1),
            _0x3d04a7['addEventListener']('MSPointerUp', function(_0x17eba8) {
                _0x4a817e['touchEnd'](_0x17eba8, _0x4e783c);
            }, !0x1);
        },
        'unbind': function(_0x26654e) {
            this['delayedKeyup'][this['bindings'][_0x26654e]] = !0x0,
            this['bindings'][_0x26654e] = null;
        },
        'unbindAll': function() {
            this['bindings'] = {},
            this['actions'] = {},
            this['presses'] = {},
            this['locks'] = {},
            this['delayedKeyup'] = {};
        },
        'state': function(_0x529cd3) {
            return this['actions'][_0x529cd3];
        },
        'pressed': function(_0x29febc) {
            return this['presses'][_0x29febc];
        },
        'released': function(_0x4f819f) {
            return !!this['delayedKeyup'][_0x4f819f];
        },
        'clearPressed': function() {
            for (var _0x4d4705 in this['delayedKeyup'])
                this['actions'][_0x4d4705] = !0x1,
                this['locks'][_0x4d4705] = !0x1;
            this['delayedKeyup'] = {},
            this['presses'] = {};
        },
        'touchStart': function(_0x250d47, _0x1ef66e) {
            return this['actions'][_0x1ef66e] = !0x0,
            this['presses'][_0x1ef66e] = !0x0,
            _0x250d47['stopPropagation'](),
            _0x250d47['preventDefault'](),
            !0x1;
        },
        'touchEnd': function(_0x100ecb, _0x30e56d) {
            return this['delayedKeyup'][_0x30e56d] = !0x0,
            _0x100ecb['stopPropagation'](),
            _0x100ecb['preventDefault'](),
            !0x1;
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('impact.impact')['requires']('dom.ready', 'impact.loader', 'impact.system', 'impact.input', 'impact.sound')['defines'](function() {
    ig['main'] = function(_0x508004, _0x437829, _0x3bb50a, _0x1c9c50, _0x38d3db, _0x17a8fc, _0x2e43f2) {
        ig['system'] = new ig['System'](_0x508004,_0x3bb50a,_0x1c9c50,_0x38d3db,_0x17a8fc || 0x1),
        ig['input'] = new ig['Input'](),
        ig['soundManager'] = new ig['SoundManager'](),
        ig['music'] = new ig['Music'](),
        ig['ready'] = !0x0,
        new (_0x2e43f2 || ig['Loader'])(_0x437829,ig['resources'])['load']();
    }
    ;
}),
ig['baked'] = !0x0,
ig['module']('impact.animation')['requires']('impact.timer', 'impact.image')['defines'](function() {
    ig['AnimationSheet'] = ig['Class']['extend']({
        'width': 0x8,
        'height': 0x8,
        'image': null,
        'init': function(_0x47ab26, _0x2e0052, _0x268780) {
            this['width'] = _0x2e0052,
            this['height'] = _0x268780,
            this['image'] = new ig['Image'](_0x47ab26);
        }
    }),
    ig['Animation'] = ig['Class']['extend']({
        'sheet': null,
        'timer': null,
        'sequence': [],
        'flip': {
            'x': !0x1,
            'y': !0x1
        },
        'pivot': {
            'x': 0x0,
            'y': 0x0
        },
        'frame': 0x0,
        'tile': 0x0,
        'loopCount': 0x0,
        'alpha': 0x1,
        'angle': 0x0,
        'init': function(_0x9984c3, _0x344161, _0xe44a61, _0x342866) {
            this['sheet'] = _0x9984c3,
            this['pivot'] = {
                'x': _0x9984c3['width'] / 0x2,
                'y': _0x9984c3['height'] / 0x2
            },
            this['timer'] = new ig['Timer'](),
            this['frameTime'] = _0x344161,
            this['sequence'] = _0xe44a61,
            this['stop'] = !!_0x342866,
            this['tile'] = this['sequence'][0x0];
        },
        'rewind': function() {
            return this['timer']['set'](),
            this['frame'] = this['loopCount'] = 0x0,
            this['tile'] = this['sequence'][0x0],
            this;
        },
        'gotoFrame': function(_0x3ab840) {
            this['timer']['set'](this['frameTime'] * -_0x3ab840 - 0.0001),
            this['update']();
        },
        'gotoRandomFrame': function() {
            this['gotoFrame'](Math['floor'](Math['random']() * this['sequence']['length']));
        },
        'update': function() {
            var _0x4f89df = Math['floor'](this['timer']['delta']() / this['frameTime']);
            this['loopCount'] = Math['floor'](_0x4f89df / this['sequence']['length']),
            this['frame'] = this['stop'] && 0x0 < this['loopCount'] ? this['sequence']['length'] - 0x1 : _0x4f89df % this['sequence']['length'],
            this['tile'] = this['sequence'][this['frame']];
        },
        'draw': function(_0xfc5908, _0x44626b) {
            var _0x3cbdab = Math['max'](this['sheet']['width'], this['sheet']['height']);
            _0xfc5908 > ig['system']['width'] || _0x44626b > ig['system']['height'] || (0x0 > _0xfc5908 + _0x3cbdab || 0x0 > _0x44626b + _0x3cbdab) || (0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = this['alpha']),
            0x0 == this['angle'] ? this['sheet']['image']['drawTile'](_0xfc5908, _0x44626b, this['tile'], this['sheet']['width'], this['sheet']['height'], this['flip']['x'], this['flip']['y']) : (ig['system']['context']['save'](),
            ig['system']['context']['translate'](ig['system']['getDrawPos'](_0xfc5908 + this['pivot']['x']), ig['system']['getDrawPos'](_0x44626b + this['pivot']['y'])),
            ig['system']['context']['rotate'](this['angle']),
            this['sheet']['image']['drawTile'](-this['pivot']['x'], -this['pivot']['y'], this['tile'], this['sheet']['width'], this['sheet']['height'], this['flip']['x'], this['flip']['y']),
            ig['system']['context']['restore']()),
            0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = 0x1));
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('impact.entity')['requires']('impact.animation', 'impact.impact')['defines'](function() {
    ig['Entity'] = ig['Class']['extend']({
        'id': 0x0,
        'settings': {},
        'size': {
            'x': 0x10,
            'y': 0x10
        },
        'offset': {
            'x': 0x0,
            'y': 0x0
        },
        'pos': {
            'x': 0x0,
            'y': 0x0
        },
        'last': {
            'x': 0x0,
            'y': 0x0
        },
        'vel': {
            'x': 0x0,
            'y': 0x0
        },
        'accel': {
            'x': 0x0,
            'y': 0x0
        },
        'friction': {
            'x': 0x0,
            'y': 0x0
        },
        'maxVel': {
            'x': 0x64,
            'y': 0x64
        },
        'zIndex': 0x0,
        'gravityFactor': 0x1,
        'standing': !0x1,
        'bounciness': 0x0,
        'minBounceVelocity': 0x28,
        'anims': {},
        'animSheet': null,
        'currentAnim': null,
        'health': 0xa,
        'type': 0x0,
        'checkAgainst': 0x0,
        'collides': 0x0,
        '_killed': !0x1,
        'slopeStanding': {
            'min': 0x2c['toRad'](),
            'max': 0x88['toRad']()
        },
        'init': function(_0x30c000, _0x50f4cd, _0x358056) {
            this['id'] = ++ig['Entity']['_lastId'],
            this['pos']['x'] = this['last']['x'] = _0x30c000,
            this['pos']['y'] = this['last']['y'] = _0x50f4cd,
            ig['merge'](this, _0x358056);
        },
        'reset': function(_0x2c22f3, _0x487a0c, _0x3348e1) {
            var _0x40da8e = this['constructor']['prototype'];
            this['pos']['x'] = _0x2c22f3,
            this['pos']['y'] = _0x487a0c,
            this['last']['x'] = _0x2c22f3,
            this['last']['y'] = _0x487a0c,
            this['vel']['x'] = _0x40da8e['vel']['x'],
            this['vel']['y'] = _0x40da8e['vel']['y'],
            this['accel']['x'] = _0x40da8e['accel']['x'],
            this['accel']['y'] = _0x40da8e['accel']['y'],
            this['health'] = _0x40da8e['health'],
            this['_killed'] = _0x40da8e['_killed'],
            this['standing'] = _0x40da8e['standing'],
            this['type'] = _0x40da8e['type'],
            this['checkAgainst'] = _0x40da8e['checkAgainst'],
            this['collides'] = _0x40da8e['collides'],
            ig['merge'](this, _0x3348e1);
        },
        'addAnim': function(_0x218cd7, _0x8241c6, _0x49b439, _0x1fa3f6) {
            if (!this['animSheet'])
                throw 'No\x20animSheet\x20to\x20add\x20the\x20animation\x20' + _0x218cd7 + '\x20to.';
            return _0x8241c6 = new ig['Animation'](this['animSheet'],_0x8241c6,_0x49b439,_0x1fa3f6),
            this['anims'][_0x218cd7] = _0x8241c6,
            this['currentAnim'] || (this['currentAnim'] = _0x8241c6),
            _0x8241c6;
        },
        'update': function() {
            this['last']['x'] = this['pos']['x'],
            this['last']['y'] = this['pos']['y'],
            this['vel']['y'] += ig['game']['gravity'] * ig['system']['tick'] * this['gravityFactor'],
            this['vel']['x'] = this['getNewVelocity'](this['vel']['x'], this['accel']['x'], this['friction']['x'], this['maxVel']['x']),
            this['vel']['y'] = this['getNewVelocity'](this['vel']['y'], this['accel']['y'], this['friction']['y'], this['maxVel']['y']);
            var _0x5d77df = ig['game']['collisionMap']['trace'](this['pos']['x'], this['pos']['y'], this['vel']['x'] * ig['system']['tick'], this['vel']['y'] * ig['system']['tick'], this['size']['x'], this['size']['y']);
            this['handleMovementTrace'](_0x5d77df),
            this['currentAnim'] && this['currentAnim']['update']();
        },
        'getNewVelocity': function(_0x2fcf3a, _0x145209, _0x4eeea0, _0x5916ef) {
            return _0x145209 ? (_0x2fcf3a + _0x145209 * ig['system']['tick'])['limit'](-_0x5916ef, _0x5916ef) : _0x4eeea0 ? (_0x145209 = _0x4eeea0 * ig['system']['tick'],
            0x0 < _0x2fcf3a - _0x145209 ? _0x2fcf3a - _0x145209 : 0x0 > _0x2fcf3a + _0x145209 ? _0x2fcf3a + _0x145209 : 0x0) : _0x2fcf3a['limit'](-_0x5916ef, _0x5916ef);
        },
        'handleMovementTrace': function(_0x584311) {
            this['standing'] = !0x1,
            _0x584311['collision']['y'] && (0x0 < this['bounciness'] && Math['abs'](this['vel']['y']) > this['minBounceVelocity'] ? this['vel']['y'] *= -this['bounciness'] : (0x0 < this['vel']['y'] && (this['standing'] = !0x0),
            this['vel']['y'] = 0x0)),
            _0x584311['collision']['x'] && (this['vel']['x'] = 0x0 < this['bounciness'] && Math['abs'](this['vel']['x']) > this['minBounceVelocity'] ? this['vel']['x'] * -this['bounciness'] : 0x0);
            if (_0x584311['collision']['slope']) {
                var _0x1c7873 = _0x584311['collision']['slope'];
                if (0x0 < this['bounciness']) {
                    var _0xd9d5f7 = this['vel']['x'] * _0x1c7873['nx'] + this['vel']['y'] * _0x1c7873['ny'];
                    this['vel']['x'] = (this['vel']['x'] - 0x2 * _0x1c7873['nx'] * _0xd9d5f7) * this['bounciness'],
                    this['vel']['y'] = (this['vel']['y'] - 0x2 * _0x1c7873['ny'] * _0xd9d5f7) * this['bounciness'];
                } else
                    _0xd9d5f7 = (this['vel']['x'] * _0x1c7873['x'] + this['vel']['y'] * _0x1c7873['y']) / (_0x1c7873['x'] * _0x1c7873['x'] + _0x1c7873['y'] * _0x1c7873['y']),
                    this['vel']['x'] = _0x1c7873['x'] * _0xd9d5f7,
                    this['vel']['y'] = _0x1c7873['y'] * _0xd9d5f7,
                    _0x1c7873 = Math['atan2'](_0x1c7873['x'], _0x1c7873['y']),
                    _0x1c7873 > this['slopeStanding']['min'] && _0x1c7873 < this['slopeStanding']['max'] && (this['standing'] = !0x0);
            }
            this['pos'] = _0x584311['pos'];
        },
        'draw': function() {
            this['currentAnim'] && this['currentAnim']['draw'](this['pos']['x'] - this['offset']['x'] - ig['game']['_rscreen']['x'], this['pos']['y'] - this['offset']['y'] - ig['game']['_rscreen']['y']);
        },
        'kill': function() {
            ig['game']['removeEntity'](this);
        },
        'receiveDamage': function(_0x4b27aa) {
            this['health'] -= _0x4b27aa,
            0x0 >= this['health'] && this['kill']();
        },
        'touches': function(_0x12cee8) {
            return !(this['pos']['x'] >= _0x12cee8['pos']['x'] + _0x12cee8['size']['x'] || this['pos']['x'] + this['size']['x'] <= _0x12cee8['pos']['x'] || this['pos']['y'] >= _0x12cee8['pos']['y'] + _0x12cee8['size']['y'] || this['pos']['y'] + this['size']['y'] <= _0x12cee8['pos']['y']);
        },
        'distanceTo': function(_0x34920c) {
            var _0x2126b1 = this['pos']['x'] + this['size']['x'] / 0x2 - (_0x34920c['pos']['x'] + _0x34920c['size']['x'] / 0x2);
            return _0x34920c = this['pos']['y'] + this['size']['y'] / 0x2 - (_0x34920c['pos']['y'] + _0x34920c['size']['y'] / 0x2),
            Math['sqrt'](_0x2126b1 * _0x2126b1 + _0x34920c * _0x34920c);
        },
        'angleTo': function(_0x406a9c) {
            return Math['atan2'](_0x406a9c['pos']['y'] + _0x406a9c['size']['y'] / 0x2 - (this['pos']['y'] + this['size']['y'] / 0x2), _0x406a9c['pos']['x'] + _0x406a9c['size']['x'] / 0x2 - (this['pos']['x'] + this['size']['x'] / 0x2));
        },
        'check': function() {},
        'collideWith': function() {},
        'ready': function() {},
        'erase': function() {}
    }),
    ig['Entity']['_lastId'] = 0x0,
    ig['Entity']['COLLIDES'] = {
        'NEVER': 0x0,
        'LITE': 0x1,
        'PASSIVE': 0x2,
        'ACTIVE': 0x4,
        'FIXED': 0x8
    },
    ig['Entity']['TYPE'] = {
        'NONE': 0x0,
        'A': 0x1,
        'B': 0x2,
        'BOTH': 0x3
    },
    ig['Entity']['checkPair'] = function(_0x1c53c4, _0x70ef4c) {
        _0x1c53c4['checkAgainst'] & _0x70ef4c['type'] && _0x1c53c4['check'](_0x70ef4c),
        _0x70ef4c['checkAgainst'] & _0x1c53c4['type'] && _0x70ef4c['check'](_0x1c53c4),
        _0x1c53c4['collides'] && _0x70ef4c['collides'] && _0x1c53c4['collides'] + _0x70ef4c['collides'] > ig['Entity']['COLLIDES']['ACTIVE'] && ig['Entity']['solveCollision'](_0x1c53c4, _0x70ef4c);
    }
    ,
    ig['Entity']['solveCollision'] = function(_0x4d6a21, _0xdfab52) {
        var _0x848cf4 = null;
        if (_0x4d6a21['collides'] == ig['Entity']['COLLIDES']['LITE'] || _0xdfab52['collides'] == ig['Entity']['COLLIDES']['FIXED'])
            _0x848cf4 = _0x4d6a21;
        else {
            if (_0xdfab52['collides'] == ig['Entity']['COLLIDES']['LITE'] || _0x4d6a21['collides'] == ig['Entity']['COLLIDES']['FIXED'])
                _0x848cf4 = _0xdfab52;
        }
        _0x4d6a21['last']['x'] + _0x4d6a21['size']['x'] > _0xdfab52['last']['x'] && _0x4d6a21['last']['x'] < _0xdfab52['last']['x'] + _0xdfab52['size']['x'] ? (_0x4d6a21['last']['y'] < _0xdfab52['last']['y'] ? ig['Entity']['seperateOnYAxis'](_0x4d6a21, _0xdfab52, _0x848cf4) : ig['Entity']['seperateOnYAxis'](_0xdfab52, _0x4d6a21, _0x848cf4),
        _0x4d6a21['collideWith'](_0xdfab52, 'y'),
        _0xdfab52['collideWith'](_0x4d6a21, 'y')) : _0x4d6a21['last']['y'] + _0x4d6a21['size']['y'] > _0xdfab52['last']['y'] && _0x4d6a21['last']['y'] < _0xdfab52['last']['y'] + _0xdfab52['size']['y'] && (_0x4d6a21['last']['x'] < _0xdfab52['last']['x'] ? ig['Entity']['seperateOnXAxis'](_0x4d6a21, _0xdfab52, _0x848cf4) : ig['Entity']['seperateOnXAxis'](_0xdfab52, _0x4d6a21, _0x848cf4),
        _0x4d6a21['collideWith'](_0xdfab52, 'x'),
        _0xdfab52['collideWith'](_0x4d6a21, 'x'));
    }
    ,
    ig['Entity']['seperateOnXAxis'] = function(_0x3c7fc1, _0x48f490, _0x133416) {
        var _0x4c2322 = _0x3c7fc1['pos']['x'] + _0x3c7fc1['size']['x'] - _0x48f490['pos']['x'];
        _0x133416 ? (_0x133416['vel']['x'] = -_0x133416['vel']['x'] * _0x133416['bounciness'] + (_0x3c7fc1 === _0x133416 ? _0x48f490 : _0x3c7fc1)['vel']['x'],
        _0x48f490 = ig['game']['collisionMap']['trace'](_0x133416['pos']['x'], _0x133416['pos']['y'], _0x133416 == _0x3c7fc1 ? -_0x4c2322 : _0x4c2322, 0x0, _0x133416['size']['x'], _0x133416['size']['y']),
        _0x133416['pos']['x'] = _0x48f490['pos']['x']) : (_0x133416 = (_0x3c7fc1['vel']['x'] - _0x48f490['vel']['x']) / 0x2,
        _0x3c7fc1['vel']['x'] = -_0x133416,
        _0x48f490['vel']['x'] = _0x133416,
        _0x133416 = ig['game']['collisionMap']['trace'](_0x3c7fc1['pos']['x'], _0x3c7fc1['pos']['y'], -_0x4c2322 / 0x2, 0x0, _0x3c7fc1['size']['x'], _0x3c7fc1['size']['y']),
        _0x3c7fc1['pos']['x'] = Math['floor'](_0x133416['pos']['x']),
        _0x3c7fc1 = ig['game']['collisionMap']['trace'](_0x48f490['pos']['x'], _0x48f490['pos']['y'], _0x4c2322 / 0x2, 0x0, _0x48f490['size']['x'], _0x48f490['size']['y']),
        _0x48f490['pos']['x'] = Math['ceil'](_0x3c7fc1['pos']['x']));
    }
    ,
    ig['Entity']['seperateOnYAxis'] = function(_0x3c6cfb, _0x24b0bf, _0x552bf3) {
        var _0xd84ceb = _0x3c6cfb['pos']['y'] + _0x3c6cfb['size']['y'] - _0x24b0bf['pos']['y'];
        if (_0x552bf3) {
            _0x24b0bf = _0x3c6cfb === _0x552bf3 ? _0x24b0bf : _0x3c6cfb,
            _0x552bf3['vel']['y'] = -_0x552bf3['vel']['y'] * _0x552bf3['bounciness'] + _0x24b0bf['vel']['y'];
            var _0x49be86 = 0x0;
            _0x552bf3 == _0x3c6cfb && Math['abs'](_0x552bf3['vel']['y'] - _0x24b0bf['vel']['y']) < _0x552bf3['minBounceVelocity'] && (_0x552bf3['standing'] = !0x0,
            _0x49be86 = _0x24b0bf['vel']['x'] * ig['system']['tick']),
            _0x3c6cfb = ig['game']['collisionMap']['trace'](_0x552bf3['pos']['x'], _0x552bf3['pos']['y'], _0x49be86, _0x552bf3 == _0x3c6cfb ? -_0xd84ceb : _0xd84ceb, _0x552bf3['size']['x'], _0x552bf3['size']['y']),
            _0x552bf3['pos']['y'] = _0x3c6cfb['pos']['y'],
            _0x552bf3['pos']['x'] = _0x3c6cfb['pos']['x'];
        } else
            ig['game']['gravity'] && (_0x24b0bf['standing'] || 0x0 < _0x3c6cfb['vel']['y']) ? (_0x552bf3 = ig['game']['collisionMap']['trace'](_0x3c6cfb['pos']['x'], _0x3c6cfb['pos']['y'], 0x0, -(_0x3c6cfb['pos']['y'] + _0x3c6cfb['size']['y'] - _0x24b0bf['pos']['y']), _0x3c6cfb['size']['x'], _0x3c6cfb['size']['y']),
            _0x3c6cfb['pos']['y'] = _0x552bf3['pos']['y'],
            0x0 < _0x3c6cfb['bounciness'] && _0x3c6cfb['vel']['y'] > _0x3c6cfb['minBounceVelocity'] ? _0x3c6cfb['vel']['y'] *= -_0x3c6cfb['bounciness'] : (_0x3c6cfb['standing'] = !0x0,
            _0x3c6cfb['vel']['y'] = 0x0)) : (_0x552bf3 = (_0x3c6cfb['vel']['y'] - _0x24b0bf['vel']['y']) / 0x2,
            _0x3c6cfb['vel']['y'] = -_0x552bf3,
            _0x24b0bf['vel']['y'] = _0x552bf3,
            _0x49be86 = _0x24b0bf['vel']['x'] * ig['system']['tick'],
            _0x552bf3 = ig['game']['collisionMap']['trace'](_0x3c6cfb['pos']['x'], _0x3c6cfb['pos']['y'], _0x49be86, -_0xd84ceb / 0x2, _0x3c6cfb['size']['x'], _0x3c6cfb['size']['y']),
            _0x3c6cfb['pos']['y'] = _0x552bf3['pos']['y'],
            _0x3c6cfb = ig['game']['collisionMap']['trace'](_0x24b0bf['pos']['x'], _0x24b0bf['pos']['y'], 0x0, _0xd84ceb / 0x2, _0x24b0bf['size']['x'], _0x24b0bf['size']['y']),
            _0x24b0bf['pos']['y'] = _0x3c6cfb['pos']['y']);
    }
    ;
}),
ig['baked'] = !0x0,
ig['module']('impact.map')['defines'](function() {
    ig['Map'] = ig['Class']['extend']({
        'tilesize': 0x8,
        'width': 0x1,
        'height': 0x1,
        'data': [[]],
        'name': null,
        'init': function(_0xe2c6d6, _0x47444a) {
            this['tilesize'] = _0xe2c6d6,
            this['data'] = _0x47444a,
            this['height'] = _0x47444a['length'],
            this['width'] = _0x47444a[0x0]['length'],
            this['pxWidth'] = this['width'] * this['tilesize'],
            this['pxHeight'] = this['height'] * this['tilesize'];
        },
        'getTile': function(_0x115af9, _0x4a07b8) {
            var _0x5ce075 = Math['floor'](_0x115af9 / this['tilesize'])
              , _0x59d0fe = Math['floor'](_0x4a07b8 / this['tilesize']);
            return 0x0 <= _0x5ce075 && _0x5ce075 < this['width'] && 0x0 <= _0x59d0fe && _0x59d0fe < this['height'] ? this['data'][_0x59d0fe][_0x5ce075] : 0x0;
        },
        'setTile': function(_0x40cabb, _0x542c2b, _0x5c15b8) {
            _0x40cabb = Math['floor'](_0x40cabb / this['tilesize']),
            _0x542c2b = Math['floor'](_0x542c2b / this['tilesize']),
            0x0 <= _0x40cabb && _0x40cabb < this['width'] && 0x0 <= _0x542c2b && _0x542c2b < this['height'] && (this['data'][_0x542c2b][_0x40cabb] = _0x5c15b8);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('impact.collision-map')['requires']('impact.map')['defines'](function() {
    ig['CollisionMap'] = ig['Map']['extend']({
        'lastSlope': 0x1,
        'tiledef': null,
        'init': function(_0x387467, _0x1faef6, _0xe16a15) {
            this['parent'](_0x387467, _0x1faef6),
            this['tiledef'] = _0xe16a15 || ig['CollisionMap']['defaultTileDef'];
            for (var _0x243b23 in this['tiledef'])
                _0x243b23 | 0x0 > this['lastSlope'] && (this['lastSlope'] = _0x243b23 | 0x0);
        },
        'trace': function(_0x543964, _0x5a3a71, _0x799dff, _0x3a6f52, _0x224b82, _0x17001f) {
            var _0x4fb12c = {
                'collision': {
                    'x': !0x1,
                    'y': !0x1,
                    'slope': !0x1
                },
                'pos': {
                    'x': _0x543964,
                    'y': _0x5a3a71
                },
                'tile': {
                    'x': 0x0,
                    'y': 0x0
                }
            }
              , _0x1ddfb2 = Math['ceil'](Math['max'](Math['abs'](_0x799dff), Math['abs'](_0x3a6f52)) / this['tilesize']);
            if (0x1 < _0x1ddfb2)
                for (var _0x318bf7 = _0x799dff / _0x1ddfb2, _0x4b1de2 = _0x3a6f52 / _0x1ddfb2, _0x450367 = 0x0; _0x450367 < _0x1ddfb2 && (_0x318bf7 || _0x4b1de2) && !(this['_traceStep'](_0x4fb12c, _0x543964, _0x5a3a71, _0x318bf7, _0x4b1de2, _0x224b82, _0x17001f, _0x799dff, _0x3a6f52, _0x450367),
                _0x543964 = _0x4fb12c['pos']['x'],
                _0x5a3a71 = _0x4fb12c['pos']['y'],
                _0x4fb12c['collision']['x'] && (_0x799dff = _0x318bf7 = 0x0),
                _0x4fb12c['collision']['y'] && (_0x3a6f52 = _0x4b1de2 = 0x0),
                _0x4fb12c['collision']['slope']); _0x450367++)
                    ;
            else
                this['_traceStep'](_0x4fb12c, _0x543964, _0x5a3a71, _0x799dff, _0x3a6f52, _0x224b82, _0x17001f, _0x799dff, _0x3a6f52, 0x0);
            return _0x4fb12c;
        },
        '_traceStep': function(_0x556c29, _0x228300, _0x3c0c71, _0x109020, _0x533108, _0x4e15c0, _0x33bff5, _0x25ba5a, _0x55a616, _0x2b12a2) {
            _0x556c29['pos']['x'] += _0x109020,
            _0x556c29['pos']['y'] += _0x533108;
            var _0x32136a = 0x0;
            if (_0x109020) {
                var _0x11c7a3 = 0x0 < _0x109020 ? _0x4e15c0 : 0x0
                  , _0x43617e = 0x0 > _0x109020 ? this['tilesize'] : 0x0
                  , _0x32136a = Math['max'](Math['floor'](_0x3c0c71 / this['tilesize']), 0x0)
                  , _0x3098bc = Math['min'](Math['ceil']((_0x3c0c71 + _0x33bff5) / this['tilesize']), this['height']);
                _0x109020 = Math['floor']((_0x556c29['pos']['x'] + _0x11c7a3) / this['tilesize']);
                var _0x95ec6d = Math['floor']((_0x228300 + _0x11c7a3) / this['tilesize']);
                if (0x0 < _0x2b12a2 || _0x109020 == _0x95ec6d || 0x0 > _0x95ec6d || _0x95ec6d >= this['width'])
                    _0x95ec6d = -0x1;
                if (0x0 <= _0x109020 && _0x109020 < this['width'])
                    for (var _0x5bf81d = _0x32136a; _0x5bf81d < _0x3098bc && !(-0x1 != _0x95ec6d && (_0x32136a = this['data'][_0x5bf81d][_0x95ec6d],
                    0x1 < _0x32136a && _0x32136a <= this['lastSlope'] && this['_checkTileDef'](_0x556c29, _0x32136a, _0x228300, _0x3c0c71, _0x25ba5a, _0x55a616, _0x4e15c0, _0x33bff5, _0x95ec6d, _0x5bf81d))); _0x5bf81d++)
                        if (_0x32136a = this['data'][_0x5bf81d][_0x109020],
                        0x1 == _0x32136a || _0x32136a > this['lastSlope'] || 0x1 < _0x32136a && this['_checkTileDef'](_0x556c29, _0x32136a, _0x228300, _0x3c0c71, _0x25ba5a, _0x55a616, _0x4e15c0, _0x33bff5, _0x109020, _0x5bf81d)) {
                            if (0x1 < _0x32136a && _0x32136a <= this['lastSlope'] && _0x556c29['collision']['slope'])
                                break;
                            _0x556c29['collision']['x'] = !0x0,
                            _0x556c29['tile']['x'] = _0x32136a,
                            _0x228300 = _0x556c29['pos']['x'] = _0x109020 * this['tilesize'] - _0x11c7a3 + _0x43617e,
                            _0x25ba5a = 0x0;
                            break;
                        }
            }
            if (_0x533108) {
                _0x11c7a3 = 0x0 < _0x533108 ? _0x33bff5 : 0x0,
                _0x533108 = 0x0 > _0x533108 ? this['tilesize'] : 0x0,
                _0x32136a = Math['max'](Math['floor'](_0x556c29['pos']['x'] / this['tilesize']), 0x0),
                _0x43617e = Math['min'](Math['ceil']((_0x556c29['pos']['x'] + _0x4e15c0) / this['tilesize']), this['width']),
                _0x5bf81d = Math['floor']((_0x556c29['pos']['y'] + _0x11c7a3) / this['tilesize']),
                _0x3098bc = Math['floor']((_0x3c0c71 + _0x11c7a3) / this['tilesize']);
                if (0x0 < _0x2b12a2 || _0x5bf81d == _0x3098bc || 0x0 > _0x3098bc || _0x3098bc >= this['height'])
                    _0x3098bc = -0x1;
                if (0x0 <= _0x5bf81d && _0x5bf81d < this['height'])
                    for (_0x109020 = _0x32136a; _0x109020 < _0x43617e && !(-0x1 != _0x3098bc && (_0x32136a = this['data'][_0x3098bc][_0x109020],
                    0x1 < _0x32136a && _0x32136a <= this['lastSlope'] && this['_checkTileDef'](_0x556c29, _0x32136a, _0x228300, _0x3c0c71, _0x25ba5a, _0x55a616, _0x4e15c0, _0x33bff5, _0x109020, _0x3098bc))); _0x109020++)
                        if (_0x32136a = this['data'][_0x5bf81d][_0x109020],
                        0x1 == _0x32136a || _0x32136a > this['lastSlope'] || 0x1 < _0x32136a && this['_checkTileDef'](_0x556c29, _0x32136a, _0x228300, _0x3c0c71, _0x25ba5a, _0x55a616, _0x4e15c0, _0x33bff5, _0x109020, _0x5bf81d)) {
                            if (0x1 < _0x32136a && _0x32136a <= this['lastSlope'] && _0x556c29['collision']['slope'])
                                break;
                            _0x556c29['collision']['y'] = !0x0,
                            _0x556c29['tile']['y'] = _0x32136a,
                            _0x556c29['pos']['y'] = _0x5bf81d * this['tilesize'] - _0x11c7a3 + _0x533108;
                            break;
                        }
            }
        },
        '_checkTileDef': function(_0x50ea6b, _0x29da78, _0xda6d83, _0x211295, _0x3c54db, _0x10892a, _0x23372b, _0x3f9946, _0xbdd34c, _0x362d6f) {
            var _0x32187f = this['tiledef'][_0x29da78];
            if (!_0x32187f)
                return !0x1;
            _0x29da78 = (_0x32187f[0x2] - _0x32187f[0x0]) * this['tilesize'];
            var _0x4f6459 = (_0x32187f[0x3] - _0x32187f[0x1]) * this['tilesize']
              , _0x15cd80 = _0x32187f[0x4];
            _0x23372b = _0xda6d83 + _0x3c54db + (0x0 > _0x4f6459 ? _0x23372b : 0x0) - (_0xbdd34c + _0x32187f[0x0]) * this['tilesize'],
            _0x3f9946 = _0x211295 + _0x10892a + (0x0 < _0x29da78 ? _0x3f9946 : 0x0) - (_0x362d6f + _0x32187f[0x1]) * this['tilesize'];
            if (0x0 < _0x29da78 * _0x3f9946 - _0x4f6459 * _0x23372b) {
                if (0x0 > _0x3c54db * -_0x4f6459 + _0x10892a * _0x29da78)
                    return _0x15cd80;
                _0xbdd34c = Math['sqrt'](_0x29da78 * _0x29da78 + _0x4f6459 * _0x4f6459),
                _0x362d6f = _0x4f6459 / _0xbdd34c,
                _0xbdd34c = -_0x29da78 / _0xbdd34c;
                var _0x288008 = _0x23372b * _0x362d6f + _0x3f9946 * _0xbdd34c
                  , _0x32187f = _0x362d6f * _0x288008
                  , _0x288008 = _0xbdd34c * _0x288008;
                if (_0x32187f * _0x32187f + _0x288008 * _0x288008 >= _0x3c54db * _0x3c54db + _0x10892a * _0x10892a)
                    return _0x15cd80 || 0.5 > _0x29da78 * (_0x3f9946 - _0x10892a) - _0x4f6459 * (_0x23372b - _0x3c54db);
                return _0x50ea6b['pos']['x'] = _0xda6d83 + _0x3c54db - _0x32187f,
                _0x50ea6b['pos']['y'] = _0x211295 + _0x10892a - _0x288008,
                _0x50ea6b['collision']['slope'] = {
                    'x': _0x29da78,
                    'y': _0x4f6459,
                    'nx': _0x362d6f,
                    'ny': _0xbdd34c
                },
                !0x0;
            }
            return !0x1;
        }
    });
    var _0x30b7fd = 0x1 / 0x3
      , _0x45bfa3 = 0x2 / 0x3;
    ig['CollisionMap']['defaultTileDef'] = {
        0x5: [0x0, 0x1, 0x1, _0x45bfa3, !0x0],
        0x6: [0x0, _0x45bfa3, 0x1, _0x30b7fd, !0x0],
        0x7: [0x0, _0x30b7fd, 0x1, 0x0, !0x0],
        0x3: [0x0, 0x1, 0x1, 0.5, !0x0],
        0x4: [0x0, 0.5, 0x1, 0x0, !0x0],
        0x2: [0x0, 0x1, 0x1, 0x0, !0x0],
        0xa: [0.5, 0x1, 0x1, 0x0, !0x0],
        0x15: [0x0, 0x1, 0.5, 0x0, !0x0],
        0x20: [_0x45bfa3, 0x1, 0x1, 0x0, !0x0],
        0x2b: [_0x30b7fd, 0x1, _0x45bfa3, 0x0, !0x0],
        0x36: [0x0, 0x1, _0x30b7fd, 0x0, !0x0],
        0x1b: [0x0, 0x0, 0x1, _0x30b7fd, !0x0],
        0x1c: [0x0, _0x30b7fd, 0x1, _0x45bfa3, !0x0],
        0x1d: [0x0, _0x45bfa3, 0x1, 0x1, !0x0],
        0x19: [0x0, 0x0, 0x1, 0.5, !0x0],
        0x1a: [0x0, 0.5, 0x1, 0x1, !0x0],
        0x18: [0x0, 0x0, 0x1, 0x1, !0x0],
        0xb: [0x0, 0x0, 0.5, 0x1, !0x0],
        0x16: [0.5, 0x0, 0x1, 0x1, !0x0],
        0x21: [0x0, 0x0, _0x30b7fd, 0x1, !0x0],
        0x2c: [_0x30b7fd, 0x0, _0x45bfa3, 0x1, !0x0],
        0x37: [_0x45bfa3, 0x0, 0x1, 0x1, !0x0],
        0x10: [0x1, _0x30b7fd, 0x0, 0x0, !0x0],
        0x11: [0x1, _0x45bfa3, 0x0, _0x30b7fd, !0x0],
        0x12: [0x1, 0x1, 0x0, _0x45bfa3, !0x0],
        0xe: [0x1, 0.5, 0x0, 0x0, !0x0],
        0xf: [0x1, 0x1, 0x0, 0.5, !0x0],
        0xd: [0x1, 0x1, 0x0, 0x0, !0x0],
        0x8: [0.5, 0x1, 0x0, 0x0, !0x0],
        0x13: [0x1, 0x1, 0.5, 0x0, !0x0],
        0x1e: [_0x30b7fd, 0x1, 0x0, 0x0, !0x0],
        0x29: [_0x45bfa3, 0x1, _0x30b7fd, 0x0, !0x0],
        0x34: [0x1, 0x1, _0x45bfa3, 0x0, !0x0],
        0x26: [0x1, _0x45bfa3, 0x0, 0x1, !0x0],
        0x27: [0x1, _0x30b7fd, 0x0, _0x45bfa3, !0x0],
        0x28: [0x1, 0x0, 0x0, _0x30b7fd, !0x0],
        0x24: [0x1, 0.5, 0x0, 0x1, !0x0],
        0x25: [0x1, 0x0, 0x0, 0.5, !0x0],
        0x23: [0x1, 0x0, 0x0, 0x1, !0x0],
        0x9: [0x1, 0x0, 0.5, 0x1, !0x0],
        0x14: [0.5, 0x0, 0x0, 0x1, !0x0],
        0x1f: [0x1, 0x0, _0x45bfa3, 0x1, !0x0],
        0x2a: [_0x45bfa3, 0x0, _0x30b7fd, 0x1, !0x0],
        0x35: [_0x30b7fd, 0x0, 0x0, 0x1, !0x0],
        0xc: [0x0, 0x0, 0x1, 0x0, !0x1],
        0x17: [0x1, 0x1, 0x0, 0x1, !0x1],
        0x22: [0x1, 0x0, 0x1, 0x1, !0x1],
        0x2d: [0x0, 0x1, 0x0, 0x0, !0x1]
    },
    ig['CollisionMap']['staticNoCollision'] = {
        'trace': function(_0x3bc9ce, _0x1a7602, _0x52e0e3, _0x5d694e) {
            return {
                'collision': {
                    'x': !0x1,
                    'y': !0x1,
                    'slope': !0x1
                },
                'pos': {
                    'x': _0x3bc9ce + _0x52e0e3,
                    'y': _0x1a7602 + _0x5d694e
                },
                'tile': {
                    'x': 0x0,
                    'y': 0x0
                }
            };
        }
    };
}),
ig['baked'] = !0x0,
ig['module']('impact.background-map')['requires']('impact.map', 'impact.image')['defines'](function() {
    ig['BackgroundMap'] = ig['Map']['extend']({
        'tiles': null,
        'scroll': {
            'x': 0x0,
            'y': 0x0
        },
        'distance': 0x1,
        'repeat': !0x1,
        'tilesetName': '',
        'foreground': !0x1,
        'enabled': !0x0,
        'preRender': !0x1,
        'preRenderedChunks': null,
        'chunkSize': 0x200,
        'debugChunks': !0x1,
        'anims': {},
        'init': function(_0x1417e9, _0x21b73b, _0xed5d98) {
            this['parent'](_0x1417e9, _0x21b73b),
            this['setTileset'](_0xed5d98);
        },
        'setTileset': function(_0x45bc88) {
            this['tilesetName'] = _0x45bc88 instanceof ig['Image'] ? _0x45bc88['path'] : _0x45bc88,
            this['tiles'] = new ig['Image'](this['tilesetName']),
            this['preRenderedChunks'] = null;
        },
        'setScreenPos': function(_0x1ad1b0, _0x5448d2) {
            this['scroll']['x'] = _0x1ad1b0 / this['distance'],
            this['scroll']['y'] = _0x5448d2 / this['distance'];
        },
        'preRenderMapToChunks': function() {
            var _0x3785f2 = this['width'] * this['tilesize'] * ig['system']['scale']
              , _0xc17344 = this['height'] * this['tilesize'] * ig['system']['scale'];
            this['chunkSize'] = Math['min'](Math['max'](_0x3785f2, _0xc17344), this['chunkSize']);
            var _0x52b42f = Math['ceil'](_0x3785f2 / this['chunkSize'])
              , _0x1c03f8 = Math['ceil'](_0xc17344 / this['chunkSize']);
            this['preRenderedChunks'] = [];
            for (var _0x105d40 = 0x0; _0x105d40 < _0x1c03f8; _0x105d40++) {
                this['preRenderedChunks'][_0x105d40] = [];
                for (var _0x29b6d9 = 0x0; _0x29b6d9 < _0x52b42f; _0x29b6d9++)
                    this['preRenderedChunks'][_0x105d40][_0x29b6d9] = this['preRenderChunk'](_0x29b6d9, _0x105d40, _0x29b6d9 == _0x52b42f - 0x1 ? _0x3785f2 - _0x29b6d9 * this['chunkSize'] : this['chunkSize'], _0x105d40 == _0x1c03f8 - 0x1 ? _0xc17344 - _0x105d40 * this['chunkSize'] : this['chunkSize']);
            }
        },
        'preRenderChunk': function(_0x41c583, _0xa36cda, _0x54ecb5, _0x20c3ec) {
            var _0x5e0938 = _0x54ecb5 / this['tilesize'] / ig['system']['scale'] + 0x1
              , _0x317422 = _0x20c3ec / this['tilesize'] / ig['system']['scale'] + 0x1
              , _0x17618c = _0x41c583 * this['chunkSize'] / ig['system']['scale'] % this['tilesize']
              , _0x578ffc = _0xa36cda * this['chunkSize'] / ig['system']['scale'] % this['tilesize'];
            _0x41c583 = Math['floor'](_0x41c583 * this['chunkSize'] / this['tilesize'] / ig['system']['scale']),
            _0xa36cda = Math['floor'](_0xa36cda * this['chunkSize'] / this['tilesize'] / ig['system']['scale']);
            var _0x164dbd = ig['$new']('canvas');
            _0x164dbd['width'] = _0x54ecb5,
            _0x164dbd['height'] = _0x20c3ec,
            _0x164dbd['retinaResolutionEnabled'] = !0x1,
            _0x20c3ec = _0x164dbd['getContext']('2d'),
            ig['System']['scaleMode'](_0x164dbd, _0x20c3ec),
            _0x54ecb5 = ig['system']['context'],
            ig['system']['context'] = _0x20c3ec;
            for (_0x20c3ec = 0x0; _0x20c3ec < _0x5e0938; _0x20c3ec++)
                for (var _0x525d4f = 0x0; _0x525d4f < _0x317422; _0x525d4f++)
                    if (_0x20c3ec + _0x41c583 < this['width'] && _0x525d4f + _0xa36cda < this['height']) {
                        var _0x8b00ea = this['data'][_0x525d4f + _0xa36cda][_0x20c3ec + _0x41c583];
                        _0x8b00ea && this['tiles']['drawTile'](_0x20c3ec * this['tilesize'] - _0x17618c, _0x525d4f * this['tilesize'] - _0x578ffc, _0x8b00ea - 0x1, this['tilesize']);
                    }
            return ig['system']['context'] = _0x54ecb5,
            _0x164dbd;
        },
        'draw': function() {
            this['tiles']['loaded'] && this['enabled'] && (this['preRender'] ? this['drawPreRendered']() : this['drawTiled']());
        },
        'drawPreRendered': function() {
            this['preRenderedChunks'] || this['preRenderMapToChunks']();
            var _0x38beb8 = ig['system']['getDrawPos'](this['scroll']['x'])
              , _0x4be3aa = ig['system']['getDrawPos'](this['scroll']['y']);
            if (this['repeat'])
                var _0x575d7a = this['width'] * this['tilesize'] * ig['system']['scale']
                  , _0x38beb8 = (_0x38beb8 % _0x575d7a + _0x575d7a) % _0x575d7a
                  , _0x575d7a = this['height'] * this['tilesize'] * ig['system']['scale']
                  , _0x4be3aa = (_0x4be3aa % _0x575d7a + _0x575d7a) % _0x575d7a;
            var _0x575d7a = Math['max'](Math['floor'](_0x38beb8 / this['chunkSize']), 0x0)
              , _0x33b64d = Math['max'](Math['floor'](_0x4be3aa / this['chunkSize']), 0x0)
              , _0x1e696c = Math['ceil']((_0x38beb8 + ig['system']['realWidth']) / this['chunkSize'])
              , _0x3533ae = Math['ceil']((_0x4be3aa + ig['system']['realHeight']) / this['chunkSize'])
              , _0x4ef6c2 = this['preRenderedChunks'][0x0]['length']
              , _0x250d17 = this['preRenderedChunks']['length'];
            this['repeat'] || (_0x1e696c = Math['min'](_0x1e696c, _0x4ef6c2),
            _0x3533ae = Math['min'](_0x3533ae, _0x250d17));
            for (var _0xa337b3 = 0x0; _0x33b64d < _0x3533ae; _0x33b64d++) {
                for (var _0x3b4502 = 0x0, _0x16083f = _0x575d7a; _0x16083f < _0x1e696c; _0x16083f++) {
                    var _0x29c2ff = this['preRenderedChunks'][_0x33b64d % _0x250d17][_0x16083f % _0x4ef6c2]
                      , _0x539e39 = -_0x38beb8 + _0x16083f * this['chunkSize'] - _0x3b4502
                      , _0x43cc43 = -_0x4be3aa + _0x33b64d * this['chunkSize'] - _0xa337b3;
                    ig['system']['context']['drawImage'](_0x29c2ff, _0x539e39, _0x43cc43),
                    ig['Image']['drawCount']++,
                    this['debugChunks'] && (ig['system']['context']['strokeStyle'] = '#f0f',
                    ig['system']['context']['strokeRect'](_0x539e39, _0x43cc43, this['chunkSize'], this['chunkSize'])),
                    this['repeat'] && _0x29c2ff['width'] < this['chunkSize'] && _0x539e39 + _0x29c2ff['width'] < ig['system']['realWidth'] && (_0x3b4502 += this['chunkSize'] - _0x29c2ff['width'],
                    _0x1e696c++);
                }
                this['repeat'] && _0x29c2ff['height'] < this['chunkSize'] && _0x43cc43 + _0x29c2ff['height'] < ig['system']['realHeight'] && (_0xa337b3 += this['chunkSize'] - _0x29c2ff['height'],
                _0x3533ae++);
            }
        },
        'drawTiled': function() {
            for (var _0x555a10 = 0x0, _0x5b7ac2 = null, _0x2af5e3 = (this['scroll']['x'] / this['tilesize'])['toInt'](), _0x47eb6c = (this['scroll']['y'] / this['tilesize'])['toInt'](), _0x275cb4 = this['scroll']['x'] % this['tilesize'], _0x271c39 = this['scroll']['y'] % this['tilesize'], _0x2f13f0 = -_0x275cb4 - this['tilesize'], _0x275cb4 = ig['system']['width'] + this['tilesize'] - _0x275cb4, _0x40a761 = ig['system']['height'] + this['tilesize'] - _0x271c39, _0x58f5b5 = -0x1, _0x271c39 = -_0x271c39 - this['tilesize']; _0x271c39 < _0x40a761; _0x58f5b5++,
            _0x271c39 += this['tilesize']) {
                var _0x3cf699 = _0x58f5b5 + _0x47eb6c;
                if (_0x3cf699 >= this['height'] || 0x0 > _0x3cf699) {
                    if (!this['repeat'])
                        continue;
                    _0x3cf699 = (_0x3cf699 % this['height'] + this['height']) % this['height'];
                }
                for (var _0x8422af = -0x1, _0x3c018b = _0x2f13f0; _0x3c018b < _0x275cb4; _0x8422af++,
                _0x3c018b += this['tilesize']) {
                    _0x555a10 = _0x8422af + _0x2af5e3;
                    if (_0x555a10 >= this['width'] || 0x0 > _0x555a10) {
                        if (!this['repeat'])
                            continue;
                        _0x555a10 = (_0x555a10 % this['width'] + this['width']) % this['width'];
                    }
                    if (_0x555a10 = this['data'][_0x3cf699][_0x555a10])
                        (_0x5b7ac2 = this['anims'][_0x555a10 - 0x1]) ? _0x5b7ac2['draw'](_0x3c018b, _0x271c39) : this['tiles']['drawTile'](_0x3c018b, _0x271c39, _0x555a10 - 0x1, this['tilesize']);
                }
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('impact.game')['requires']('impact.impact', 'impact.entity', 'impact.collision-map', 'impact.background-map')['defines'](function() {
    ig['Game'] = ig['Class']['extend']({
        'clearColor': '#000000',
        'gravity': 0x0,
        'screen': {
            'x': 0x0,
            'y': 0x0
        },
        '_rscreen': {
            'x': 0x0,
            'y': 0x0
        },
        'entities': [],
        'namedEntities': {},
        'collisionMap': ig['CollisionMap']['staticNoCollision'],
        'backgroundMaps': [],
        'backgroundAnims': {},
        'autoSort': !0x1,
        'sortBy': null,
        'cellSize': 0x40,
        '_deferredKill': [],
        '_levelToLoad': null,
        '_doSortEntities': !0x1,
        'staticInstantiate': function() {
            return this['sortBy'] = this['sortBy'] || ig['Game']['SORT']['Z_INDEX'],
            ig['game'] = this,
            null;
        },
        'loadLevel': function(_0x5f49e4) {
            this['screen'] = {
                'x': 0x0,
                'y': 0x0
            },
            this['entities'] = [],
            this['namedEntities'] = {};
            for (var _0x8febe3 = 0x0; _0x8febe3 < _0x5f49e4['entities']['length']; _0x8febe3++) {
                var _0x24558b = _0x5f49e4['entities'][_0x8febe3];
                this['spawnEntity'](_0x24558b['type'], _0x24558b['x'], _0x24558b['y'], _0x24558b['settings']);
            }
            this['sortEntities'](),
            this['collisionMap'] = ig['CollisionMap']['staticNoCollision'],
            this['backgroundMaps'] = [];
            for (_0x8febe3 = 0x0; _0x8febe3 < _0x5f49e4['layer']['length']; _0x8febe3++)
                if (_0x24558b = _0x5f49e4['layer'][_0x8febe3],
                'collision' == _0x24558b['name'])
                    this['collisionMap'] = new ig['CollisionMap'](_0x24558b['tilesize'],_0x24558b['data']);
                else {
                    var _0xf0c3c = new ig['BackgroundMap'](_0x24558b['tilesize'],_0x24558b['data'],_0x24558b['tilesetName']);
                    _0xf0c3c['anims'] = this['backgroundAnims'][_0x24558b['tilesetName']] || {},
                    _0xf0c3c['repeat'] = _0x24558b['repeat'],
                    _0xf0c3c['distance'] = _0x24558b['distance'],
                    _0xf0c3c['foreground'] = !!_0x24558b['foreground'],
                    _0xf0c3c['preRender'] = !!_0x24558b['preRender'],
                    _0xf0c3c['name'] = _0x24558b['name'],
                    this['backgroundMaps']['push'](_0xf0c3c);
                }
            for (_0x8febe3 = 0x0; _0x8febe3 < this['entities']['length']; _0x8febe3++)
                this['entities'][_0x8febe3]['ready']();
        },
        'loadLevelDeferred': function(_0x150c9f) {
            this['_levelToLoad'] = _0x150c9f;
        },
        'getMapByName': function(_0x2f3260) {
            if ('collision' == _0x2f3260)
                return this['collisionMap'];
            for (var _0x4495c3 = 0x0; _0x4495c3 < this['backgroundMaps']['length']; _0x4495c3++)
                if (this['backgroundMaps'][_0x4495c3]['name'] == _0x2f3260)
                    return this['backgroundMaps'][_0x4495c3];
            return null;
        },
        'getEntityByName': function(_0x439d36) {
            return this['namedEntities'][_0x439d36];
        },
        'getEntitiesByType': function(_0x25ce6a) {
            _0x25ce6a = 'string' === typeof _0x25ce6a ? ig['global'][_0x25ce6a] : _0x25ce6a;
            for (var _0x56c85d = [], _0x433ce0 = 0x0; _0x433ce0 < this['entities']['length']; _0x433ce0++) {
                var _0x3da20a = this['entities'][_0x433ce0];
                _0x3da20a instanceof _0x25ce6a && !_0x3da20a['_killed'] && _0x56c85d['push'](_0x3da20a);
            }
            return _0x56c85d;
        },
        'spawnEntity': function(_0x22f55a, _0x16a0c0, _0x2d5f3f, _0x10b39f) {
            var _0x1d925d = 'string' === typeof _0x22f55a ? ig['global'][_0x22f55a] : _0x22f55a;
            if (!_0x1d925d)
                throw 'Can\x27t\x20spawn\x20entity\x20of\x20type\x20' + _0x22f55a;
            return _0x22f55a = new _0x1d925d(_0x16a0c0,_0x2d5f3f,_0x10b39f || {}),
            this['entities']['push'](_0x22f55a),
            _0x22f55a['name'] && (this['namedEntities'][_0x22f55a['name']] = _0x22f55a),
            _0x22f55a;
        },
        'sortEntities': function() {
            this['entities']['sort'](this['sortBy']);
        },
        'sortEntitiesDeferred': function() {
            this['_doSortEntities'] = !0x0;
        },
        'removeEntity': function(_0x317404) {
            _0x317404['name'] && delete this['namedEntities'][_0x317404['name']],
            _0x317404['_killed'] = !0x0,
            _0x317404['type'] = ig['Entity']['TYPE']['NONE'],
            _0x317404['checkAgainst'] = ig['Entity']['TYPE']['NONE'],
            _0x317404['collides'] = ig['Entity']['COLLIDES']['NEVER'],
            this['_deferredKill']['push'](_0x317404);
        },
        'run': function() {
            this['update'](),
            this['draw']();
        },
        'update': function() {
            this['_levelToLoad'] && (this['loadLevel'](this['_levelToLoad']),
            this['_levelToLoad'] = null),
            this['updateEntities'](),
            this['checkEntities']();
            for (var _0x3bd607 = 0x0; _0x3bd607 < this['_deferredKill']['length']; _0x3bd607++)
                this['_deferredKill'][_0x3bd607]['erase'](),
                this['entities']['erase'](this['_deferredKill'][_0x3bd607]);
            this['_deferredKill'] = [];
            if (this['_doSortEntities'] || this['autoSort'])
                this['sortEntities'](),
                this['_doSortEntities'] = !0x1;
            for (var _0x3bbc0f in this['backgroundAnims']) {
                var _0x3bd607 = this['backgroundAnims'][_0x3bbc0f], _0x73c71b;
                for (_0x73c71b in _0x3bd607)
                    _0x3bd607[_0x73c71b]['update']();
            }
        },
        'updateEntities': function() {
            for (var _0x3f2bd9 = 0x0; _0x3f2bd9 < this['entities']['length']; _0x3f2bd9++) {
                var _0x53cfd3 = this['entities'][_0x3f2bd9];
                _0x53cfd3['_killed'] || _0x53cfd3['update']();
            }
        },
        'draw': function() {
            this['clearColor'] && ig['system']['clear'](this['clearColor']),
            this['_rscreen']['x'] = ig['system']['getDrawPos'](this['screen']['x']) / ig['system']['scale'],
            this['_rscreen']['y'] = ig['system']['getDrawPos'](this['screen']['y']) / ig['system']['scale'];
            var _0x49530b;
            for (_0x49530b = 0x0; _0x49530b < this['backgroundMaps']['length']; _0x49530b++) {
                var _0xb38bca = this['backgroundMaps'][_0x49530b];
                if (_0xb38bca['foreground'])
                    break;
                _0xb38bca['setScreenPos'](this['screen']['x'], this['screen']['y']),
                _0xb38bca['draw']();
            }
            this['drawEntities']();
            for (_0x49530b; _0x49530b < this['backgroundMaps']['length']; _0x49530b++)
                _0xb38bca = this['backgroundMaps'][_0x49530b],
                _0xb38bca['setScreenPos'](this['screen']['x'], this['screen']['y']),
                _0xb38bca['draw']();
        },
        'drawEntities': function() {
            for (var _0x3b7acf = 0x0; _0x3b7acf < this['entities']['length']; _0x3b7acf++)
                this['entities'][_0x3b7acf]['draw']();
        },
        'checkEntities': function() {
            for (var _0x4a91d0 = {}, _0xe8c9a6 = 0x0; _0xe8c9a6 < this['entities']['length']; _0xe8c9a6++) {
                var _0x32c2d6 = this['entities'][_0xe8c9a6];
                if (!(_0x32c2d6['type'] == ig['Entity']['TYPE']['NONE'] && _0x32c2d6['checkAgainst'] == ig['Entity']['TYPE']['NONE'] && _0x32c2d6['collides'] == ig['Entity']['COLLIDES']['NEVER']))
                    for (var _0x42b490 = {}, _0xe88118 = Math['floor'](_0x32c2d6['pos']['y'] / this['cellSize']), _0x462d2a = Math['floor']((_0x32c2d6['pos']['x'] + _0x32c2d6['size']['x']) / this['cellSize']) + 0x1, _0x37f6e2 = Math['floor']((_0x32c2d6['pos']['y'] + _0x32c2d6['size']['y']) / this['cellSize']) + 0x1, _0x2226f3 = Math['floor'](_0x32c2d6['pos']['x'] / this['cellSize']); _0x2226f3 < _0x462d2a; _0x2226f3++)
                        for (var _0x17affa = _0xe88118; _0x17affa < _0x37f6e2; _0x17affa++)
                            if (_0x4a91d0[_0x2226f3]) {
                                if (_0x4a91d0[_0x2226f3][_0x17affa]) {
                                    for (var _0x149dfa = _0x4a91d0[_0x2226f3][_0x17affa], _0x14cfad = 0x0; _0x14cfad < _0x149dfa['length']; _0x14cfad++)
                                        _0x32c2d6['touches'](_0x149dfa[_0x14cfad]) && !_0x42b490[_0x149dfa[_0x14cfad]['id']] && (_0x42b490[_0x149dfa[_0x14cfad]['id']] = !0x0,
                                        ig['Entity']['checkPair'](_0x32c2d6, _0x149dfa[_0x14cfad]));
                                    _0x149dfa['push'](_0x32c2d6);
                                } else
                                    _0x4a91d0[_0x2226f3][_0x17affa] = [_0x32c2d6];
                            } else
                                _0x4a91d0[_0x2226f3] = {},
                                _0x4a91d0[_0x2226f3][_0x17affa] = [_0x32c2d6];
            }
        }
    }),
    ig['Game']['SORT'] = {
        'Z_INDEX': function(_0x19a3f2, _0x3b5ecf) {
            return _0x19a3f2['zIndex'] - _0x3b5ecf['zIndex'];
        },
        'POS_X': function(_0x3defc8, _0x43c4f6) {
            return _0x3defc8['pos']['x'] + _0x3defc8['size']['x'] - (_0x43c4f6['pos']['x'] + _0x43c4f6['size']['x']);
        },
        'POS_Y': function(_0x47d916, _0x39a4d2) {
            return _0x47d916['pos']['y'] + _0x47d916['size']['y'] - (_0x39a4d2['pos']['y'] + _0x39a4d2['size']['y']);
        }
    };
}),
ig['baked'] = !0x0,
ig['module']('plugins.patches.user-agent-patch')['defines'](function() {
    ig['ua']['touchDevice'] = 'ontouchstart'in window || window['navigator']['msMaxTouchPoints'] || window['navigator']['maxTouchPoints'],
    ig['ua']['is_mac'] = 'MacIntel' === navigator['platform'],
    ig['ua']['iOS'] = ig['ua']['touchDevice'] && ig['ua']['is_mac'] || ig['ua']['iOS'],
    ig['ua']['mobile'] = ig['ua']['iOS'] || ig['ua']['mobile'];
}),
ig['baked'] = !0x0,
ig['module']('plugins.patches.webkit-image-smoothing-patch')['defines'](function() {
    ig['System'] && (ig['System']['SCALE'] = {
        'CRISP': function(_0x4eee24, _0x5b12a3) {
            _0x5b12a3['imageSmoothingEnabled'] = _0x5b12a3['msImageSmoothingEnabled'] = _0x5b12a3['mozImageSmoothingEnabled'] = _0x5b12a3['oImageSmoothingEnabled'] = !0x1,
            _0x4eee24['style']['imageRendering'] = '-moz-crisp-edges',
            _0x4eee24['style']['imageRendering'] = '-o-crisp-edges',
            _0x4eee24['style']['imageRendering'] = '-webkit-optimize-contrast',
            _0x4eee24['style']['imageRendering'] = 'crisp-edges',
            _0x4eee24['style']['msInterpolationMode'] = 'nearest-neighbor';
        },
        'SMOOTH': function(_0x2a0ed3, _0x36ef65) {
            _0x36ef65['imageSmoothingEnabled'] = _0x36ef65['msImageSmoothingEnabled'] = _0x36ef65['mozImageSmoothingEnabled'] = _0x36ef65['oImageSmoothingEnabled'] = !0x0,
            _0x2a0ed3['style']['imageRendering'] = '',
            _0x2a0ed3['style']['msInterpolationMode'] = '';
        }
    },
    ig['System']['scaleMode'] = ig['System']['SCALE']['SMOOTH']);
}),
ig['baked'] = !0x0,
ig['module']('plugins.patches.windowfocus-onMouseDown-patch')['requires']('impact.input')['defines'](function() {
    var _0x356f60 = !0x1;
    try {
        _0x356f60 = window['self'] !== window['top'],
        !0x1 === _0x356f60 && (_0x356f60 = 0x0 < window['frames']['length']);
    } catch (_0x181e3e) {
        _0x356f60 = !0x0;
    }
    ig['Input']['inject']({
        'keydown': function(_0x20c107) {
            var _0x262421 = _0x20c107['target']['tagName'];
            if (!('INPUT' == _0x262421 || 'TEXTAREA' == _0x262421)) {
                if (_0x262421 = 'keydown' == _0x20c107['type'] ? _0x20c107['keyCode'] : 0x2 == _0x20c107['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1'],
                _0x356f60 && 0x0 > _0x262421 && window['focus'](),
                ('touchstart' == _0x20c107['type'] || 'mousedown' == _0x20c107['type']) && this['mousemove'](_0x20c107),
                _0x262421 = this['bindings'][_0x262421])
                    this['actions'][_0x262421] = !0x0,
                    this['locks'][_0x262421] || (this['presses'][_0x262421] = !0x0,
                    this['locks'][_0x262421] = !0x0),
                    _0x20c107['stopPropagation'](),
                    _0x20c107['preventDefault']();
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.patches.input-patch')['requires']('impact.input')['defines'](function() {
    ig['Input']['inject']({
        'mousemove': function(_0x27b630) {
            var _0x2c645d = ig['system']['scale'] * (ig['system']['realWidth'] / ig['system']['realWidth'])
              , _0x74b377 = {
                'left': 0x0,
                'top': 0x0
            };
            ig['system']['canvas']['getBoundingClientRect'] && (_0x74b377 = ig['system']['canvas']['getBoundingClientRect']()),
            _0x27b630 = _0x27b630['touches'] ? _0x27b630['touches'][0x0] : _0x27b630,
            this['mouse']['x'] = (_0x27b630['clientX'] - _0x74b377['left']) / _0x2c645d,
            this['mouse']['y'] = (_0x27b630['clientY'] - _0x74b377['top']) / _0x2c645d;
            try {
                ig['soundHandler']['unlockWebAudio']();
            } catch (_0x152a2d) {}
        },
        'keyup': function(_0x4bb3a4) {
            var _0xfb3768 = _0x4bb3a4['target']['tagName'];
            if (!('INPUT' == _0xfb3768 || 'TEXTAREA' == _0xfb3768)) {
                if (_0xfb3768 = this['bindings']['keyup' == _0x4bb3a4['type'] ? _0x4bb3a4['keyCode'] : 0x2 == _0x4bb3a4['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1']]) {
                    this['delayedKeyup'][_0xfb3768] = !0x0,
                    _0x4bb3a4['stopPropagation'](),
                    _0x4bb3a4['preventDefault']();
                    if (ig['visibilityHandler'])
                        ig['visibilityHandler']['onChange']('focus');
                    try {
                        ig['soundHandler']['unlockWebAudio']();
                    } catch (_0x3e8adc) {}
                }
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.font.font-info')['requires']('impact.impact')['defines'](function() {
    ig['FontInfo'] = ig['Class']['extend']({
        'fonts': [{
            'name': 'leaguespartan',
            'source': 'media/fonts/leaguespartan-bold'
        }],
        'init': function() {
            this['registerCssFont']();
        },
        'registerCssFont': function() {
            if (0x0 < this['fonts']['length']) {
                var _0x5a7aeb = document['createElement']('style');
                _0x5a7aeb['type'] = 'text/css';
                for (var _0x31b055 = '', _0x13fcc9 = 0x0; _0x13fcc9 < this['fonts']['length']; _0x13fcc9++)
                    var _0x2fc06d = this['fonts'][_0x13fcc9]
                      , _0x31b055 = _0x31b055 + ('@font-face\x20{font-family:\x20\x27' + _0x2fc06d['name'] + '\x27;src:\x20url(\x27' + _0x2fc06d['source'] + '.otf\x27)\x20format(\x27OpenType\x27)}');
                _0x5a7aeb['appendChild'](document['createTextNode'](_0x31b055)),
                document['head']['appendChild'](_0x5a7aeb);
            }
        },
        'isValid': function() {
            for (var _0x580d9c = 0x0; _0x580d9c < this['fonts']['length']; _0x580d9c++)
                if (!this['_isValidName'](this['fonts'][_0x580d9c]['source']))
                    return !0x1;
            return !0x0;
        },
        '_isValidName': function(_0x595545) {
            return -0x1 == _0x595545['search'](/^[a-z0-9-\/]+$/) ? !0x1 : !0x0;
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.font.font-loader')['requires']('impact.impact', 'plugins.font.font-info', 'impact.loader')['defines'](function() {
    ig['FontLoader'] = ig['Class']['extend']({
        'fontInfo': new ig['FontInfo'](),
        'onload': !0x1,
        'onerror': !0x1,
        'init': function(_0x34801e, _0x2714ee) {
            this['onload'] = _0x34801e,
            this['onerror'] = _0x2714ee;
        },
        'load': function() {
            this['fontInfo']['isValid']() ? this['_loadByLib']() : console['error']('Only\x20lowercased\x20alphanumeric\x20and\x20dash\x20are\x20allowed\x20for\x20font\x20file\x20name!.\x20Please\x20check\x20the\x20font\x20path');
        },
        '_loadByLib': function() {
            for (var _0x58e522 = [], _0x546429 = 0x0; _0x546429 < this['fontInfo']['fonts']['length']; _0x546429++) {
                var _0x5a10b8 = new FontFaceObserver(this['fontInfo']['fonts'][_0x546429]['name']);
                _0x58e522['push'](_0x5a10b8['load']());
            }
            Promise['all'](_0x58e522)['then'](this['onload'])['catch'](this['onerror']);
        }
    }),
    ig['Loader']['inject']({
        'parentLoad': !0x1,
        'load': function() {
            this['parentLoad'] = this['parent'],
            new ig['FontLoader'](this['onFontLoad']['bind'](this),this['onFontError']['bind'](this))['load']();
        },
        'onFontLoad': function() {
            this['parentLoad']();
        },
        'onFontError': function() {
            console['error']('Font\x20is\x20not\x20loaded'),
            this['parentLoad']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.handlers.dom-handler')['defines'](function() {
    ig['DomHandler'] = ig['Class']['extend']({
        'JQUERYAVAILABLE': !0x1,
        'init': function() {
            this['JQUERYAVAILABLE'] = this['_jqueryAvailable']();
        },
        '_jqueryAvailable': function() {
            return 'undefined' !== typeof jQuery;
        },
        'addEvent': function(_0x2bb8c3, _0xf6dd08, _0x25010a, _0xcf2365) {
            if (this['JQUERYAVAILABLE'])
                _0x2bb8c3['on'](_0xf6dd08, _0x25010a);
            else
                _0x2bb8c3['addEventListener'](_0xf6dd08, _0x25010a, _0xcf2365);
        },
        'create': function(_0x3d9ee9) {
            return this['JQUERYAVAILABLE'] ? $('<' + _0x3d9ee9 + '>') : ig['$new'](_0x3d9ee9);
        },
        'getElementByClass': function(_0x348a25) {
            return this['JQUERYAVAILABLE'] ? $('.' + _0x348a25) : document['getElementsByClassName'](_0x348a25);
        },
        'getElementById': function(_0x21559e) {
            return this['JQUERYAVAILABLE'] ? 0x0 < $(_0x21559e)['length'] ? $(_0x21559e) : null : ig['$'](_0x21559e);
        },
        'appendChild': function(_0x2a6b15, _0x2bcc41) {
            this['JQUERYAVAILABLE'] ? _0x2a6b15['append'](_0x2bcc41) : _0x2a6b15['appendChild'](_0x2bcc41);
        },
        'appendToBody': function(_0x3df651) {
            this['JQUERYAVAILABLE'] ? $('body')['append'](_0x3df651) : document['body']['appendChild'](_0x3df651);
        },
        'resize': function(_0x163be1, _0x1d57cf, _0x51145a) {
            if (this['JQUERYAVAILABLE'])
                _0x163be1['width'](_0x1d57cf['toFixed'](0x2)),
                _0x163be1['height'](_0x51145a['toFixed'](0x2));
            else {
                var _0x4829b5 = _0x163be1['style']['visibility'];
                _0x1d57cf = 'width:' + _0x1d57cf['toFixed'](0x2) + 'px;\x20height:' + _0x51145a['toFixed'](0x2) + 'px;',
                this['attr'](_0x163be1, 'style', _0x1d57cf),
                _0x163be1['style']['visibility'] = _0x4829b5;
            }
        },
        'resizeOffsetLeft': function(_0x4103f1, _0x193ed9, _0x344f8a, _0x5dc1f9) {
            if (this['JQUERYAVAILABLE'])
                _0x4103f1['width'](_0x193ed9['toFixed'](0x2)),
                _0x4103f1['height'](_0x344f8a['toFixed'](0x2)),
                _0x4103f1['css']('left', _0x5dc1f9);
            else {
                var _0x304822 = _0x4103f1['style']['visibility'];
                _0x193ed9 = 'width:' + _0x193ed9['toFixed'](0x2) + 'px;\x20height:' + _0x344f8a['toFixed'](0x2) + 'px;\x20left:\x20' + _0x5dc1f9['toFixed'](0x2) + 'px;',
                this['attr'](_0x4103f1, 'style', _0x193ed9),
                _0x4103f1['style']['visibility'] = _0x304822;
            }
        },
        'resizeOffset': function(_0x22d3dd, _0x54f2d9, _0x49b981, _0x276416, _0x5df380) {
            if (this['JQUERYAVAILABLE'])
                _0x22d3dd['width'](_0x54f2d9['toFixed'](0x2)),
                _0x22d3dd['height'](_0x49b981['toFixed'](0x2)),
                _0x22d3dd['css']('left', _0x276416),
                _0x22d3dd['css']('top', _0x5df380);
            else {
                var _0x419607 = _0x22d3dd['style']['visibility'];
                _0x54f2d9 = 'width:' + _0x54f2d9['toFixed'](0x2) + 'px;\x20height:' + _0x49b981['toFixed'](0x2) + 'px;\x20left:\x20' + _0x276416['toFixed'](0x2) + 'px;\x20top:\x20' + _0x5df380['toFixed'](0x2) + 'px;',
                this['attr'](_0x22d3dd, 'style', _0x54f2d9),
                _0x22d3dd['style']['visibility'] = _0x419607;
            }
        },
        'css': function(_0x1cb006, _0xf65736) {
            if (this['JQUERYAVAILABLE'])
                _0x1cb006['css'](_0xf65736);
            else {
                var _0xd55550 = '', _0x48f242;
                for (_0x48f242 in _0xf65736)
                    _0xd55550 += _0x48f242 + ':' + _0xf65736[_0x48f242] + ';';
                this['attr'](_0x1cb006, 'style', _0xd55550);
            }
        },
        'getOffsets': function(_0x256fb4) {
            return this['JQUERYAVAILABLE'] ? (_0x256fb4 = _0x256fb4['offset'](),
            {
                'left': _0x256fb4['left'],
                'top': _0x256fb4['top']
            }) : {
                'left': _0x256fb4['offsetLeft'],
                'top': _0x256fb4['offsetTop']
            };
        },
        'attr': function(_0x3333b6, _0x20436f, _0x4642bb) {
            if ('undefined' === typeof _0x4642bb)
                return this['JQUERYAVAILABLE'] ? _0x3333b6['attr'](_0x20436f) : _0x3333b6['getAttribute'](_0x20436f);
            this['JQUERYAVAILABLE'] ? _0x3333b6['attr'](_0x20436f, _0x4642bb) : _0x3333b6['setAttribute'](_0x20436f, _0x4642bb);
        },
        'show': function(_0x2bc528) {
            _0x2bc528 && 'undefined' !== typeof _0x2bc528 && (this['JQUERYAVAILABLE'] ? (_0x2bc528['show'](),
            _0x2bc528['css']('visibility', 'visible')) : _0x2bc528 && (_0x2bc528['style'] ? _0x2bc528['style']['visibility'] = 'visible' : _0x2bc528[0x0] && (_0x2bc528[0x0]['style']['visibility'] = 'visible')));
        },
        'hide': function(_0x3783be) {
            _0x3783be && 'undefined' !== typeof _0x3783be && (this['JQUERYAVAILABLE'] ? (_0x3783be['hide'](),
            _0x3783be['css']('visibility', 'hidden')) : _0x3783be && (_0x3783be['style'] ? _0x3783be['style']['visibility'] = 'hidden' : _0x3783be[0x0] && (_0x3783be[0x0]['style']['visibility'] = 'hidden')));
        },
        'getQueryVariable': function(_0x1d31d0) {
            for (var _0xad4870 = window['location']['search']['substring'](0x1)['split']('&'), _0x4dfb3b = 0x0; _0x4dfb3b < _0xad4870['length']; _0x4dfb3b++) {
                var _0x30dab0 = _0xad4870[_0x4dfb3b]['split']('=');
                if (decodeURIComponent(_0x30dab0[0x0]) == _0x1d31d0)
                    return decodeURIComponent(_0x30dab0[0x1]);
            }
        },
        'forcedDeviceDetection': function() {
            var _0x2b82a1 = this['getQueryVariable']('device');
            if (_0x2b82a1)
                switch (_0x2b82a1) {
                case 'mobile':
                    console['log']('serving\x20mobile\x20version\x20...'),
                    ig['ua']['mobile'] = !0x0;
                    break;
                case 'desktop':
                    console['log']('serving\x20desktop\x20version\x20...'),
                    ig['ua']['mobile'] = !0x1;
                    break;
                default:
                    console['log']('serving\x20universal\x20version\x20...');
                }
            else
                console['log']('serving\x20universal\x20version\x20...');
        },
        'forcedDeviceRotation': function() {
            var _0x62beab = this['getQueryVariable']('force-rotate');
            if (_0x62beab)
                switch (_0x62beab) {
                case 'portrait':
                    console['log']('force\x20rotate\x20to\x20portrait'),
                    window['orientation'] = 0x0;
                    break;
                case 'landscape':
                    console['log']('force\x20rotate\x20to\x20horizontal'),
                    window['orientation'] = 0x5a;
                    break;
                default:
                    alert('wrong\x20command/type\x20in\x20param\x20force-rotate.\x20Defaulting\x20value\x20to\x20portrait'),
                    window['orientation'] = 0x0;
                }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.data.vector')['defines'](function() {
    Vector2 = function(_0x3b283f, _0x111a63) {
        this['x'] = _0x3b283f || 0x0,
        this['y'] = _0x111a63 || 0x0;
    }
    ,
    Vector2['prototype'] = {
        'valType': 'number',
        'neg': function() {
            return this['x'] = -this['x'],
            this['y'] = -this['y'],
            this;
        },
        'row': function(_0x5954c7) {
            return typeof _0x5954c7 === this['valType'] && (this['y'] = _0x5954c7),
            this['y'];
        },
        'col': function(_0x4b45eb) {
            return typeof _0x4b45eb === this['valType'] && (this['x'] = _0x4b45eb),
            this['x'];
        },
        'add': function(_0x1eeaab) {
            return _0x1eeaab instanceof Vector2 ? (this['x'] += _0x1eeaab['x'],
            this['y'] += _0x1eeaab['y']) : (this['x'] += _0x1eeaab,
            this['y'] += _0x1eeaab),
            this;
        },
        'sub': function(_0x431288) {
            return _0x431288 instanceof Vector2 ? (this['x'] -= _0x431288['x'],
            this['y'] -= _0x431288['y']) : (this['x'] -= _0x431288,
            this['y'] -= _0x431288),
            this;
        },
        'mul': function(_0x574a3b) {
            return _0x574a3b instanceof Vector2 ? (this['x'] *= _0x574a3b['x'],
            this['y'] *= _0x574a3b['y']) : (this['x'] *= _0x574a3b,
            this['y'] *= _0x574a3b),
            this;
        },
        'div': function(_0x31b6ce) {
            return _0x31b6ce instanceof Vector2 ? (0x0 != _0x31b6ce['x'] && (this['x'] /= _0x31b6ce['x']),
            0x0 != _0x31b6ce['y'] && (this['y'] /= _0x31b6ce['y'])) : 0x0 != _0x31b6ce && (this['x'] /= _0x31b6ce,
            this['y'] /= _0x31b6ce),
            this;
        },
        'equals': function(_0x2db31c) {
            return this['x'] == _0x2db31c['x'] && this['y'] == _0x2db31c['y'];
        },
        'dot': function(_0x247796) {
            return this['x'] * _0x247796['x'] + this['y'] * _0x247796['y'];
        },
        'cross': function(_0x5af9e9) {
            return this['x'] * _0x5af9e9['y'] - this['y'] * _0x5af9e9['x'];
        },
        'length': function() {
            return Math['sqrt'](this['dot'](this));
        },
        'norm': function() {
            return this['divide'](this['length']());
        },
        'min': function() {
            return Math['min'](this['x'], this['y']);
        },
        'max': function() {
            return Math['max'](this['x'], this['y']);
        },
        'toAngles': function() {
            return -Math['atan2'](-this['y'], this['x']);
        },
        'angleTo': function(_0x1e1ebe) {
            return Math['acos'](this['dot'](_0x1e1ebe) / (this['length']() * _0x1e1ebe['length']()));
        },
        'toArray': function(_0x69c998) {
            return [this['x'], this['y']]['slice'](0x0, _0x69c998 || 0x2);
        },
        'clone': function() {
            return new Vector2(this['x'],this['y']);
        },
        'set': function(_0x39bb2e, _0x3073a8) {
            return this['x'] = _0x39bb2e,
            this['y'] = _0x3073a8,
            this;
        },
        'unit': function() {
            var _0x2a8170 = this['length']();
            if (0x0 < _0x2a8170)
                return new Vector2(this['x'] / _0x2a8170,this['y'] / _0x2a8170);
            throw 'Divide\x20by\x200\x20error\x20in\x20unitVector\x20function\x20of\x20vector:' + this;
        },
        'turnRight': function() {
            var _0x8a1513 = this['x'];
            return this['x'] = -this['y'],
            this['y'] = _0x8a1513,
            this;
        },
        'turnLeft': function() {
            var _0x211ac8 = this['x'];
            return this['x'] = this['y'],
            this['y'] = -_0x211ac8,
            this;
        },
        'rotate': function(_0x47c68a) {
            var _0x118325 = this['clone']();
            return this['x'] = _0x118325['x'] * Math['cos'](_0x47c68a) - _0x118325['y'] * Math['sin'](_0x47c68a),
            this['y'] = _0x118325['x'] * Math['sin'](_0x47c68a) + _0x118325['y'] * Math['cos'](_0x47c68a),
            this;
        }
    },
    Vector2['negative'] = function(_0x2eb74f) {
        return new Vector2(-_0x2eb74f['x'],-_0x2eb74f['y']);
    }
    ,
    Vector2['add'] = function(_0x29744a, _0x45cda9) {
        return _0x45cda9 instanceof Vector2 ? new Vector2(_0x29744a['x'] + _0x45cda9['x'],_0x29744a['y'] + _0x45cda9['y']) : new Vector2(_0x29744a['x'] + v,_0x29744a['y'] + v);
    }
    ,
    Vector2['subtract'] = function(_0x486826, _0x231688) {
        return _0x231688 instanceof Vector2 ? new Vector2(_0x486826['x'] - _0x231688['x'],_0x486826['y'] - _0x231688['y']) : new Vector2(_0x486826['x'] - v,_0x486826['y'] - v);
    }
    ,
    Vector2['multiply'] = function(_0x22a7fa, _0x2fe538) {
        return _0x2fe538 instanceof Vector2 ? new Vector2(_0x22a7fa['x'] * _0x2fe538['x'],_0x22a7fa['y'] * _0x2fe538['y']) : new Vector2(_0x22a7fa['x'] * v,_0x22a7fa['y'] * v);
    }
    ,
    Vector2['divide'] = function(_0x4ec8e4, _0x1cca8e) {
        return _0x1cca8e instanceof Vector2 ? new Vector2(_0x4ec8e4['x'] / _0x1cca8e['x'],_0x4ec8e4['y'] / _0x1cca8e['y']) : new Vector2(_0x4ec8e4['x'] / v,_0x4ec8e4['y'] / v);
    }
    ,
    Vector2['equals'] = function(_0x1d428a, _0x177951) {
        return _0x1d428a['x'] == _0x177951['x'] && _0x1d428a['y'] == _0x177951['y'];
    }
    ,
    Vector2['dot'] = function(_0x17b1c9, _0x1d43f6) {
        return _0x17b1c9['x'] * _0x1d43f6['x'] + _0x17b1c9['y'] * _0x1d43f6['y'];
    }
    ,
    Vector2['cross'] = function(_0x4388e4, _0x51d6dd) {
        return _0x4388e4['x'] * _0x51d6dd['y'] - _0x4388e4['y'] * _0x51d6dd['x'];
    }
    ;
}),
ig['baked'] = !0x0,
ig['module']('plugins.handlers.size-handler')['requires']('plugins.data.vector')['defines'](function() {
    ig['SizeHandler'] = ig['Class']['extend']({
        'portraitMode': !0x0,
        'disableStretchToFitOnMobileFlag': !0x0,
        'enableStretchToFitOnAntiPortraitModeFlag': !0x0,
        'enableScalingLimitsOnMobileFlag': !0x1,
        'minScalingOnMobile': 0x0,
        'maxScalingOnMobile': 0x1,
        'enableStretchToFitOnDesktopFlag': !0x1,
        'enableScalingLimitsOnDesktopFlag': !0x1,
        'minScalingOnDesktop': 0x0,
        'maxScalingOnDesktop': 0x1,
        'desktop': {
            'actualSize': new Vector2(window['innerWidth'],window['innerHeight']),
            'actualResolution': new Vector2(0x21c,0x3c0)
        },
        'mobile': {
            'actualSize': new Vector2(window['innerWidth'],window['innerHeight']),
            'actualResolution': new Vector2(0x21c,0x3c0)
        },
        'windowSize': new Vector2(window['innerWidth'],window['innerHeight']),
        'scaleRatioMultiplier': new Vector2(0x1,0x1),
        'sizeRatio': new Vector2(0x1,0x1),
        'scale': 0x1,
        'domHandler': null,
        'dynamicClickableEntityDivs': {},
        'coreDivsToResize': ['#canvas', '#play', '#orientate'],
        'adsToResize': {
            'MobileAdInGamePreroll': {
                'box-width': _SETTINGS['Ad']['Mobile']['Preroll']['Width'] + 0x2,
                'box-height': _SETTINGS['Ad']['Mobile']['Preroll']['Height'] + 0x14
            },
            'MobileAdInGameEnd': {
                'box-width': _SETTINGS['Ad']['Mobile']['End']['Width'] + 0x2,
                'box-height': _SETTINGS['Ad']['Mobile']['End']['Height'] + 0x14
            },
            'MobileAdInGamePreroll2': {
                'box-width': _SETTINGS['Ad']['Mobile']['Preroll']['Width'] + 0x2,
                'box-height': _SETTINGS['Ad']['Mobile']['Preroll']['Height'] + 0x14
            },
            'MobileAdInGameEnd2': {
                'box-width': _SETTINGS['Ad']['Mobile']['End']['Width'] + 0x2,
                'box-height': _SETTINGS['Ad']['Mobile']['End']['Height'] + 0x14
            },
            'MobileAdInGamePreroll3': {
                'box-width': _SETTINGS['Ad']['Mobile']['Preroll']['Width'] + 0x2,
                'box-height': _SETTINGS['Ad']['Mobile']['Preroll']['Height'] + 0x14
            },
            'MobileAdInGameEnd3': {
                'box-width': _SETTINGS['Ad']['Mobile']['End']['Width'] + 0x2,
                'box-height': _SETTINGS['Ad']['Mobile']['End']['Height'] + 0x14
            }
        },
        'init': function(_0x280f23) {
            this['domHandler'] = _0x280f23;
            if ('undefined' === typeof _0x280f23)
                throw 'undefined\x20Dom\x20Handler\x20for\x20Size\x20Handler';
            this['sizeCalcs'](),
            this['eventListenerSetup'](),
            this['samsungFix']();
        },
        'sizeCalcs': function() {
            this['windowSize'] = new Vector2(window['innerWidth'],window['innerHeight']);
            if (ig['ua']['mobile']) {
                this['mobile']['actualSize'] = new Vector2(window['innerWidth'],window['innerHeight']);
                var _0x195dca = new Vector2(this['mobile']['actualResolution']['x'],this['mobile']['actualResolution']['y']);
                this['scaleRatioMultiplier'] = new Vector2(this['mobile']['actualSize']['x'] / _0x195dca['x'],this['mobile']['actualSize']['y'] / _0x195dca['y']);
                if (this['disableStretchToFitOnMobileFlag']) {
                    var _0x19d202 = Math['min'](this['scaleRatioMultiplier']['x'], this['scaleRatioMultiplier']['y']);
                    this['enableScalingLimitsOnMobileFlag'] && (_0x19d202 = _0x19d202['limit'](this['minScalingOnMobile'], this['maxScalingOnMobile'])),
                    this['mobile']['actualSize']['x'] = _0x195dca['x'] * _0x19d202,
                    this['mobile']['actualSize']['y'] = _0x195dca['y'] * _0x19d202,
                    this['scaleRatioMultiplier']['x'] = _0x19d202,
                    this['scaleRatioMultiplier']['y'] = _0x19d202;
                } else
                    this['sizeRatio']['x'] = this['scaleRatioMultiplier']['x'],
                    this['sizeRatio']['y'] = this['scaleRatioMultiplier']['y'],
                    this['scaleRatioMultiplier']['x'] = 0x1,
                    this['scaleRatioMultiplier']['y'] = 0x1;
            } else
                this['desktop']['actualSize'] = new Vector2(window['innerWidth'],window['innerHeight']),
                _0x195dca = new Vector2(this['desktop']['actualResolution']['x'],this['desktop']['actualResolution']['y']),
                this['scaleRatioMultiplier'] = new Vector2(this['desktop']['actualSize']['x'] / _0x195dca['x'],this['desktop']['actualSize']['y'] / _0x195dca['y']),
                this['enableStretchToFitOnDesktopFlag'] ? (this['sizeRatio']['x'] = this['scaleRatioMultiplier']['x'],
                this['sizeRatio']['y'] = this['scaleRatioMultiplier']['y'],
                this['scaleRatioMultiplier']['x'] = 0x1,
                this['scaleRatioMultiplier']['y'] = 0x1) : (_0x19d202 = Math['min'](this['scaleRatioMultiplier']['x'], this['scaleRatioMultiplier']['y']),
                this['enableScalingLimitsOnDesktopFlag'] && (_0x19d202 = _0x19d202['limit'](this['minScalingOnDesktop'], this['maxScalingOnDesktop'])),
                this['desktop']['actualSize']['x'] = _0x195dca['x'] * _0x19d202,
                this['desktop']['actualSize']['y'] = _0x195dca['y'] * _0x19d202,
                this['scaleRatioMultiplier']['x'] = _0x19d202,
                this['scaleRatioMultiplier']['y'] = _0x19d202);
        },
        'resizeLayers': function() {
            for (var _0x14b97a = 0x0; _0x14b97a < this['coreDivsToResize']['length']; _0x14b97a++) {
                var _0x40492d = ig['domHandler']['getElementById'](this['coreDivsToResize'][_0x14b97a]);
                if (ig['ua']['mobile']) {
                    if (this['disableStretchToFitOnMobileFlag']) {
                        var _0x1f52e9 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - ig['sizeHandler']['mobile']['actualSize']['x'] / 0x2)
                          , _0x1b6211 = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - ig['sizeHandler']['mobile']['actualSize']['y'] / 0x2);
                        0x0 > _0x1f52e9 && (_0x1f52e9 = 0x0),
                        0x0 > _0x1b6211 && (_0x1b6211 = 0x0),
                        ig['domHandler']['resizeOffset'](_0x40492d, Math['floor'](ig['sizeHandler']['mobile']['actualSize']['x']), Math['floor'](ig['sizeHandler']['mobile']['actualSize']['y']), _0x1f52e9, _0x1b6211);
                        var _0x4cbd2d = !0x1;
                        if (this['portraitMode'] ? window['innerHeight'] < window['innerWidth'] : window['innerHeight'] > window['innerWidth']) {
                            if (this['enableStretchToFitOnAntiPortraitModeFlag'])
                                ig['domHandler']['resizeOffset'](_0x40492d, Math['floor'](window['innerWidth']), Math['floor'](window['innerHeight']), 0x0, 0x0);
                            else {
                                var _0x4cbd2d = new Vector2(window['innerWidth'] / this['mobile']['actualResolution']['y'],window['innerHeight'] / this['mobile']['actualResolution']['x'])
                                  , _0x1f52e9 = Math['min'](_0x4cbd2d['x'], _0x4cbd2d['y'])
                                  , _0x4cbd2d = this['mobile']['actualResolution']['y'] * _0x1f52e9
                                  , _0x869785 = this['mobile']['actualResolution']['x'] * _0x1f52e9
                                  , _0x1f52e9 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - _0x4cbd2d / 0x2)
                                  , _0x1b6211 = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - _0x869785 / 0x2);
                                0x0 > _0x1f52e9 && (_0x1f52e9 = 0x0),
                                0x0 > _0x1b6211 && (_0x1b6211 = 0x0),
                                ig['domHandler']['resizeOffset'](_0x40492d, Math['floor'](_0x4cbd2d), Math['floor'](_0x869785), _0x1f52e9, _0x1b6211);
                            }
                        }
                    } else
                        ig['domHandler']['resize'](_0x40492d, Math['floor'](ig['sizeHandler']['mobile']['actualSize']['x']), Math['floor'](ig['sizeHandler']['mobile']['actualSize']['y']));
                } else
                    this['enableStretchToFitOnDesktopFlag'] ? ig['domHandler']['resize'](_0x40492d, Math['floor'](ig['sizeHandler']['desktop']['actualSize']['x']), Math['floor'](ig['sizeHandler']['desktop']['actualSize']['y'])) : (_0x1f52e9 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - ig['sizeHandler']['desktop']['actualSize']['x'] / 0x2),
                    _0x1b6211 = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - ig['sizeHandler']['desktop']['actualSize']['y'] / 0x2),
                    0x0 > _0x1f52e9 && (_0x1f52e9 = 0x0),
                    0x0 > _0x1b6211 && (_0x1b6211 = 0x0),
                    ig['domHandler']['resizeOffset'](_0x40492d, Math['floor'](ig['sizeHandler']['desktop']['actualSize']['x']), Math['floor'](ig['sizeHandler']['desktop']['actualSize']['y']), _0x1f52e9, _0x1b6211));
            }
            for (var _0x3ed71a in this['adsToResize'])
                _0x14b97a = ig['domHandler']['getElementById']('#' + _0x3ed71a),
                _0x40492d = ig['domHandler']['getElementById']('#' + _0x3ed71a + '-Box'),
                _0x4cbd2d = (window['innerWidth'] - this['adsToResize'][_0x3ed71a]['box-width']) / 0x2 + 'px',
                _0x1f52e9 = (window['innerHeight'] - this['adsToResize'][_0x3ed71a]['box-height']) / 0x2 + 'px',
                _0x14b97a && ig['domHandler']['css'](_0x14b97a, {
                    'width': window['innerWidth'],
                    'height': window['innerHeight']
                }),
                _0x40492d && ig['domHandler']['css'](_0x40492d, {
                    'left': _0x4cbd2d,
                    'top': _0x1f52e9
                });
            _0x14b97a = ig['domHandler']['getElementById']('#canvas'),
            _0x40492d = ig['domHandler']['getOffsets'](_0x14b97a),
            _0x14b97a = _0x40492d['left'],
            _0x40492d = _0x40492d['top'],
            _0x4cbd2d = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']);
            for (_0x3ed71a in this['dynamicClickableEntityDivs']) {
                _0x1f52e9 = ig['domHandler']['getElementById']('#' + _0x3ed71a);
                if (ig['ua']['mobile']) {
                    var _0x869785 = this['dynamicClickableEntityDivs'][_0x3ed71a]['entity_pos_x']
                      , _0xc7e3cc = this['dynamicClickableEntityDivs'][_0x3ed71a]['entity_pos_y']
                      , _0x9f69de = this['dynamicClickableEntityDivs'][_0x3ed71a]['width']
                      , _0x1b6211 = this['dynamicClickableEntityDivs'][_0x3ed71a]['height'];
                    this['disableStretchToFitOnMobileFlag'] ? (_0x869785 = Math['floor'](_0x14b97a + _0x869785 * this['scaleRatioMultiplier']['x']) + 'px',
                    _0xc7e3cc = Math['floor'](_0x40492d + _0xc7e3cc * this['scaleRatioMultiplier']['y']) + 'px',
                    _0x9f69de = Math['floor'](_0x9f69de * this['scaleRatioMultiplier']['x']) + 'px',
                    _0x1b6211 = Math['floor'](_0x1b6211 * this['scaleRatioMultiplier']['y']) + 'px') : (_0x869785 = Math['floor'](_0x869785 * this['sizeRatio']['x']) + 'px',
                    _0xc7e3cc = Math['floor'](_0xc7e3cc * this['sizeRatio']['y']) + 'px',
                    _0x9f69de = Math['floor'](_0x9f69de * this['sizeRatio']['x']) + 'px',
                    _0x1b6211 = Math['floor'](_0x1b6211 * this['sizeRatio']['y']) + 'px');
                } else
                    _0x869785 = this['dynamicClickableEntityDivs'][_0x3ed71a]['entity_pos_x'],
                    _0xc7e3cc = this['dynamicClickableEntityDivs'][_0x3ed71a]['entity_pos_y'],
                    _0x9f69de = this['dynamicClickableEntityDivs'][_0x3ed71a]['width'],
                    _0x1b6211 = this['dynamicClickableEntityDivs'][_0x3ed71a]['height'],
                    this['enableStretchToFitOnDesktopFlag'] ? (_0x869785 = Math['floor'](_0x869785 * this['sizeRatio']['x']) + 'px',
                    _0xc7e3cc = Math['floor'](_0xc7e3cc * this['sizeRatio']['y']) + 'px',
                    _0x9f69de = Math['floor'](_0x9f69de * this['sizeRatio']['x']) + 'px',
                    _0x1b6211 = Math['floor'](_0x1b6211 * this['sizeRatio']['y']) + 'px') : (_0x869785 = Math['floor'](_0x14b97a + _0x869785 * this['scaleRatioMultiplier']['x']) + 'px',
                    _0xc7e3cc = Math['floor'](_0x40492d + _0xc7e3cc * this['scaleRatioMultiplier']['y']) + 'px',
                    _0x9f69de = Math['floor'](_0x9f69de * this['scaleRatioMultiplier']['x']) + 'px',
                    _0x1b6211 = Math['floor'](_0x1b6211 * this['scaleRatioMultiplier']['y']) + 'px');
                ig['domHandler']['css'](_0x1f52e9, {
                    'float': 'left',
                    'position': 'absolute',
                    'left': _0x869785,
                    'top': _0xc7e3cc,
                    'width': _0x9f69de,
                    'height': _0x1b6211,
                    'z-index': 0x3
                }),
                this['dynamicClickableEntityDivs'][_0x3ed71a]['font-size'] && ig['domHandler']['css'](_0x1f52e9, {
                    'font-size': this['dynamicClickableEntityDivs'][_0x3ed71a]['font-size'] * _0x4cbd2d + 'px'
                });
            }
            $('#ajaxbar')['width'](this['windowSize']['x']),
            $('#ajaxbar')['height'](this['windowSize']['y']);
        },
        'resize': function() {
            this['sizeCalcs'](),
            this['resizeLayers']();
        },
        'reorient': function() {
            console['log']('changing\x20orientation\x20...');
            if (ig['ua']['mobile']) {
                var _0x3d62f8 = !0x1
                  , _0x3d62f8 = this['portraitMode'] ? window['innerHeight'] < window['innerWidth'] : window['innerHeight'] > window['innerWidth']
                  , _0x373618 = this['domHandler']['getElementById']('#orientate')
                  , _0x568389 = this['domHandler']['getElementById']('#game');
                _0x3d62f8 ? (this['domHandler']['show'](_0x373618),
                this['domHandler']['hide'](_0x568389),
                console['log']('portrait' + window['innerWidth'] + ',' + window['innerHeight'])) : (this['domHandler']['show'](_0x568389),
                this['domHandler']['hide'](_0x373618),
                console['log']('landscape' + window['innerWidth'] + ',' + window['innerHeight']));
            }
            ig['ua']['mobile'] ? (this['resize'](),
            this['resizeAds']()) : this['resize']();
        },
        'resizeAds': function() {
            for (var _0xe50cb7 in this['adsToResize']) {
                var _0x3a1f9b = ig['domHandler']['getElementById']('#' + _0xe50cb7)
                  , _0x2e34c2 = ig['domHandler']['getElementById']('#' + _0xe50cb7 + '-Box')
                  , _0x3aa293 = (window['innerWidth'] - this['adsToResize'][_0xe50cb7]['box-width']) / 0x2 + 'px'
                  , _0x2ccffa = (window['innerHeight'] - this['adsToResize'][_0xe50cb7]['box-height']) / 0x2 + 'px';
                _0x3a1f9b && ig['domHandler']['css'](_0x3a1f9b, {
                    'width': window['innerWidth'],
                    'height': window['innerHeight']
                }),
                _0x2e34c2 && ig['domHandler']['css'](_0x2e34c2, {
                    'left': _0x3aa293,
                    'top': _0x2ccffa
                });
            }
        },
        'samsungFix': function() {
            ig['ua']['android'] && !(4.2 > parseFloat(navigator['userAgent']['slice'](navigator['userAgent']['indexOf']('Android') + 0x8, navigator['userAgent']['indexOf']('Android') + 0xb))) && (!(0x0 > navigator['userAgent']['indexOf']('GT')) && !(0x0 < navigator['userAgent']['indexOf']('Chrome')) && !(0x0 < navigator['userAgent']['indexOf']('Firefox'))) && (document['addEventListener']('touchstart', function(_0x506e05) {
                return _0x506e05['preventDefault'](),
                !0x1;
            }, !0x1),
            document['addEventListener']('touchmove', function(_0x2e302c) {
                return _0x2e302c['preventDefault'](),
                !0x1;
            }, !0x1),
            document['addEventListener']('touchend', function(_0x1c0e22) {
                return _0x1c0e22['preventDefault'](),
                !0x1;
            }, !0x1));
        },
        'orientationInterval': null,
        'orientationTimeout': null,
        'orientationHandler': function() {
            this['reorient'](),
            window['scrollTo'](0x0, 0x1);
        },
        'orientationDelayHandler': function() {
            null == this['orientationInterval'] && (this['orientationInterval'] = window['setInterval'](this['orientationHandler']['bind'](this), 0x64)),
            null == this['orientationTimeout'] && (this['orientationTimeout'] = window['setTimeout'](function() {
                this['clearAllIntervals']();
            }
            ['bind'](this), 0x7d0));
        },
        'clearAllIntervals': function() {
            window['clearInterval'](this['orientationInterval']),
            this['orientationInterval'] = null,
            window['clearTimeout'](this['orientationTimeout']),
            this['orientationTimeout'] = null;
        },
        'eventListenerSetup': function() {
            ig['ua']['iOS'] ? (window['addEventListener']('orientationchange', this['orientationDelayHandler']['bind'](this)),
            window['addEventListener']('resize', this['orientationDelayHandler']['bind'](this))) : (window['addEventListener']('orientationchange', this['orientationHandler']['bind'](this)),
            window['addEventListener']('resize', this['orientationHandler']['bind'](this))),
            document['ontouchmove'] = function(_0x4c4f32) {
                window['scrollTo'](0x0, 0x1),
                _0x4c4f32['preventDefault']();
            }
            ,
            this['chromePullDownRefreshFix']();
        },
        'chromePullDownRefreshFix': function() {
            var _0x3a2e89 = window['chrome'] || navigator['userAgent']['match']('CriOS')
              , _0x2a61a7 = 'ontouchstart'in document['documentElement'];
            if (_0x3a2e89 && _0x2a61a7) {
                var _0x1f9300 = _0x3a2e89 = !0x1
                  , _0xc7136f = 0x0
                  , _0x341930 = !0x1;
                try {
                    CSS['supports']('overscroll-behavior-y', 'contain') && (_0x3a2e89 = !0x0);
                } catch (_0xccec82) {}
                try {
                    if (_0x3a2e89)
                        return document['body']['style']['overscrollBehaviorY'] = 'contain';
                } catch (_0x5bd259) {}
                _0x3a2e89 = document['head'] || document['body'],
                _0x2a61a7 = document['createElement']('style'),
                _0x2a61a7['type'] = 'text/css',
                _0x2a61a7['styleSheet'] ? _0x2a61a7['styleSheet']['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20500x;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20500px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.2);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20auto!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20' : _0x2a61a7['appendChild'](document['createTextNode']('\x0a\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20500px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20500px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.2);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20auto!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20')),
                _0x3a2e89['appendChild'](_0x2a61a7);
                try {
                    addEventListener('test', null, {
                        get 'passive'() {
                            _0x1f9300 = !0x0;
                        }
                    });
                } catch (_0x5c4daf) {}
                document['addEventListener']('touchstart', function(_0x5df6e9) {
                    0x1 === _0x5df6e9['touches']['length'] && (_0xc7136f = _0x5df6e9['touches'][0x0]['clientY'],
                    _0x341930 = 0x0 === window['pageYOffset']);
                }, !!_0x1f9300 && {
                    'passive': !0x0
                }),
                document['addEventListener']('touchmove', function(_0x594d6f) {
                    var _0x35d41c;
                    if (_0x35d41c = _0x341930) {
                        _0x341930 = !0x1,
                        _0x35d41c = _0x594d6f['touches'][0x0]['clientY'];
                        var _0x1753d3 = _0x35d41c - _0xc7136f;
                        _0x35d41c = (_0xc7136f = _0x35d41c,
                        0x0 < _0x1753d3);
                    }
                    if (_0x35d41c)
                        return _0x594d6f['preventDefault']();
                }, !!_0x1f9300 && {
                    'passive': !0x1
                });
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.handlers.api-handler')['defines'](function() {
    ig['ApiHandler'] = ig['Class']['extend']({
        'apiAvailable': {
            'MJSPreroll': function() {
                ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS && _SETTINGS['Ad']['Mobile']['Preroll']['Enabled'] && MobileAdInGamePreroll['Initialize']();
            },
            'MJSHeader': function() {
                ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS['Ad']['Mobile']['Header']['Enabled'] && MobileAdInGameHeader['Initialize']();
            },
            'MJSFooter': function() {
                ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS['Ad']['Mobile']['Footer']['Enabled'] && MobileAdInGameFooter['Initialize']();
            },
            'MJSEnd': function() {
                ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS['Ad']['Mobile']['End']['Enabled'] && MobileAdInGameEnd['Initialize']();
            }
        },
        'run': function(_0x33eb11, _0x49f450) {
            if (this['apiAvailable'][_0x33eb11])
                this['apiAvailable'][_0x33eb11](_0x49f450);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.audio.sound-player')['defines'](function() {
    SoundPlayer = ig['Class']['extend']({
        'tagName': 'SoundPlayer',
        'stayMuteFlag': !0x1,
        'debug': !0x1,
        'init': function() {
            this['debug'] && console['log'](this['tagName']);
        },
        'play': function(_0x214a4e) {
            this['debug'] && console['log']('play\x20sound\x20', _0x214a4e);
        },
        'stop': function() {
            this['debug'] && console['log']('stop\x20sound\x20');
        },
        'volume': function() {
            this['debug'] && console['log']('set\x20volume');
        },
        'mute': function(_0x1a7965) {
            this['debug'] && console['log']('mute'),
            'undefined' === typeof _0x1a7965 ? this['stayMuteFlag'] = !0x0 : _0x1a7965 && (this['stayMuteFlag'] = !0x0);
        },
        'unmute': function(_0x57bf59) {
            this['debug'] && console['log']('unmute'),
            'undefined' === typeof _0x57bf59 ? this['stayMuteFlag'] = !0x1 : _0x57bf59 && (this['stayMuteFlag'] = !0x1);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.audio.impact-music-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    ImpactMusicPlayer = SoundPlayer['extend']({
        'tagName': 'ImpactMusicPlayer',
        'bgmPlaying': !0x1,
        'soundList': {},
        'init': function(_0x39ef15, _0x1d1250) {
            this['parent'](_0x39ef15, _0x1d1250);
            for (var _0x5eeead in _0x39ef15)
                this['soundList'][_0x5eeead] = _0x5eeead,
                ig['music']['add'](_0x39ef15[_0x5eeead]['path'] + '.*', _0x5eeead);
            _0x1d1250 && _0x1d1250['loop'] && (ig['music']['loop'] = _0x1d1250['loop']);
        },
        'play': function(_0x3b2f04) {
            this['stayMuteFlag'] || (this['bgmPlaying'] = !0x0,
            'undefined' === typeof _0x3b2f04 ? ig['music']['play'](_0x3b2f04) : ig['music']['play']());
        },
        'stop': function() {
            this['bgmPlaying'] = !0x1,
            ig['music']['pause']();
        },
        'volume': function(_0x11e75c) {
            console['log']('impactmusic:', _0x11e75c),
            ig['music']['volume'] = 0x0 > _0x11e75c ? 0x0 : isNaN(_0x11e75c) ? 0x1 : 0x1 < _0x11e75c ? 0x1 : _0x11e75c;
        },
        'getVolume': function() {
            return ig['music']['volume'];
        },
        'mute': function(_0x48a4ee) {
            this['parent'](_0x48a4ee),
            this['bgmPlaying'] && this['stop']();
        },
        'unmute': function(_0xc7b11e) {
            this['parent'](_0xc7b11e),
            this['play']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.audio.impact-sound-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    ImpactSoundPlayer = SoundPlayer['extend']({
        'tagName': 'ImpactSoundPlayer',
        'soundList': {},
        'init': function(_0x101854, _0x3f6982) {
            this['parent'](_0x101854, _0x3f6982);
            for (var _0x49f4a7 in _0x101854) {
                var _0x18686a = new ig['Sound'](_0x101854[_0x49f4a7]['path'] + '.*');
                this['soundList'][_0x49f4a7] = _0x18686a;
            }
        },
        'play': function(_0x451a5c) {
            this['stayMuteFlag'] || ('object' === typeof _0x451a5c ? (console['log'](_0x451a5c + '\x20exists'),
            _0x451a5c['play']()) : 'string' === typeof _0x451a5c && this['soundList'][_0x451a5c]['play']());
        },
        'stop': function(_0x4dad0a) {
            this['parent'](_0x4dad0a),
            _0x4dad0a['stop']();
        },
        'volume': function(_0x18502c) {
            ig['soundManager']['volume'] = 0x0 > _0x18502c ? 0x0 : isNaN(_0x18502c) ? 0x1 : 0x1 < _0x18502c ? 0x1 : _0x18502c;
        },
        'getVolume': function() {
            return ig['soundManager']['volume'];
        },
        'mute': function(_0x5f7181) {
            this['parent'](_0x5f7181),
            ig['Sound']['enabled'] = !0x1;
        },
        'unmute': function(_0x25dcff) {
            this['parent'](_0x25dcff),
            ig['Sound']['enabled'] = !0x0;
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.audio.howler-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    HowlerPlayer = SoundPlayer['extend']({
        'tagName': 'HowlerPlayer',
        'soundList': {},
        'init': function(_0x2e8ba2, _0x3ba502) {
            this['parent'](_0x2e8ba2, _0x3ba502);
            for (var _0x47d998 in _0x2e8ba2) {
                var _0x2713ec = _0x2e8ba2[_0x47d998]['path']
                  , _0x2713ec = new Howl({
                    'src': [_0x2713ec + '.' + ig['Sound']['FORMAT']['OGG']['ext'], _0x2713ec + '.' + ig['Sound']['FORMAT']['MP3']['ext']]
                });
                this['soundList'][_0x47d998] = _0x2713ec;
            }
        },
        'play': function(_0xd1b546) {
            if (Howler['ctx'] && 'running' !== Howler['ctx']['state'])
                return Howler['ctx']['resume']();
            this['stayMuteFlag'] || ('object' === typeof _0xd1b546 ? _0xd1b546['play']() : 'string' === typeof _0xd1b546 && this['soundList'][_0xd1b546]['play']());
        },
        'stop': function(_0xe60a69) {
            this['parent'](_0xe60a69),
            'object' === typeof _0xe60a69 ? _0xe60a69['stop']() : 'string' === typeof _0xe60a69 && this['soundList'][_0xe60a69]['stop']();
        },
        'volume': function(_0x5581b7) {
            for (var _0x29f1dc in this['soundList']) {
                if (0x0 > _0x5581b7) {
                    this['soundList'][_0x29f1dc]['volume'](0x0);
                    break;
                }
                isNaN(_0x5581b7) ? this['soundList'][_0x29f1dc]['volume'](0x1) : 0x1 < _0x5581b7 ? this['soundList'][_0x29f1dc]['volume'](0x1) : this['soundList'][_0x29f1dc]['volume'](_0x5581b7);
            }
        },
        'getVolume': function() {
            for (var _0xb440a7 in this['soundList'])
                return this['soundList'][_0xb440a7]['volume']();
        },
        'mute': function(_0x3c6a75) {
            this['parent'](_0x3c6a75),
            Howler['mute'](!0x0);
        },
        'unmute': function(_0x7440b8) {
            this['parent'](_0x7440b8),
            Howler['mute'](!0x1);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.audio.howler-music-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    HowlerMusicPlayer = SoundPlayer['extend']({
        'tagName': 'HowlerMusicPlayer',
        'bgmPlaying': !0x1,
        'soundList': {},
        'init': function(_0x2ffbe7, _0x3275ac) {
            this['parent'](_0x2ffbe7, _0x3275ac);
            for (var _0x438940 in _0x2ffbe7) {
                var _0xe508be = _0x2ffbe7[_0x438940]['path']
                  , _0xe508be = new Howl({
                    'src': [_0xe508be + '.' + ig['Sound']['FORMAT']['OGG']['ext'], _0xe508be + '.' + ig['Sound']['FORMAT']['MP3']['ext']],
                    'loop': !0x0,
                    'autoplay': !0x1,
                    'onend': function() {}
                    ['bind'](this)
                });
                this['soundList'][_0x438940] = _0xe508be;
            }
        },
        'play': function(_0x41390e) {
            if (!this['stayMuteFlag'] && !this['bgmPlaying']) {
                if ('object' === typeof _0x41390e)
                    this['bgmPlaying'] = !0x0,
                    _0x41390e['play']();
                else {
                    if ('string' === typeof _0x41390e)
                        this['bgmPlaying'] = !0x0,
                        this['soundList'][_0x41390e]['play']();
                    else
                        for (var _0x592c04 in this['soundList']) {
                            this['soundList'][_0x592c04]['play'](),
                            this['bgmPlaying'] = !0x0;
                            break;
                        }
                }
            }
        },
        'stop': function(_0x3d3e57) {
            this['parent'](_0x3d3e57);
            if (this['bgmPlaying']) {
                for (var _0x5b7d75 in this['soundList'])
                    this['soundList'][_0x5b7d75]['stop']();
                this['bgmPlaying'] = !0x1;
            }
        },
        'volume': function(_0x5889d4) {
            console['log']('howler', _0x5889d4);
            for (var _0x12fb6c in this['soundList']) {
                if (0x0 > _0x5889d4) {
                    this['soundList'][_0x12fb6c]['volume'](0x0);
                    break;
                }
                isNaN(_0x5889d4) ? this['soundList'][_0x12fb6c]['volume'](0x1) : 0x1 < _0x5889d4 ? this['soundList'][_0x12fb6c]['volume'](0x1) : this['soundList'][_0x12fb6c]['volume'](_0x5889d4);
            }
        },
        'getVolume': function() {
            for (var _0x19660d in this['soundList'])
                return this['soundList'][_0x19660d]['volume']();
        },
        'mute': function(_0x56d67b) {
            this['parent'](_0x56d67b),
            Howler['mute'](!0x0);
        },
        'unmute': function(_0x2311ef) {
            this['parent'](_0x2311ef),
            Howler['mute'](!0x1);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.audio.jukebox-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    JukeboxPlayer = SoundPlayer['extend']({
        'tagName': 'JukeboxPlayer',
        'bgmPlaying': !0x1,
        'soundList': {},
        'jukeboxPlayer': null,
        'pausePosition': 0x0,
        'premuteVolume': 0x0,
        'minVolume': 0.001,
        'init': function(_0x3f38d1, _0x47a59a) {
            this['parent'](_0x3f38d1, _0x47a59a);
            for (var _0x497f8c in _0x3f38d1) {
                this['soundList'][_0x497f8c] = _0x497f8c;
                var _0x7099c7 = _0x3f38d1[_0x497f8c]['path'];
                this['jukeboxPlayer'] = new jukebox['Player']({
                    'resources': [_0x7099c7 + '.' + ig['Sound']['FORMAT']['OGG']['ext'], _0x7099c7 + '.' + ig['Sound']['FORMAT']['MP3']['ext']],
                    'autoplay': !0x1,
                    'spritemap': {
                        'music': {
                            'start': _0x3f38d1[_0x497f8c]['startMp3'],
                            'end': _0x3f38d1[_0x497f8c]['endMp3'],
                            'loop': !0x0
                        }
                    }
                });
            }
        },
        'play': function() {
            this['stayMuteFlag'] || (this['bgmPlaying'] = !0x0,
            this['pausePosition'] ? (console['log']('resume'),
            this['jukeboxPlayer']['resume'](this['pausePosition'])) : (console['log']('play'),
            this['jukeboxPlayer']['play'](this['jukeboxPlayer']['settings']['spritemap']['music']['start'], !0x0)),
            this['premuteVolume'] = this['getVolume']());
        },
        'stop': function() {
            this['bgmPlaying'] = !0x1,
            this['pausePosition'] = this['jukeboxPlayer']['pause']();
        },
        'volume': function(_0xdafce8) {
            console['log']('jukebox:', _0xdafce8),
            0x0 >= _0xdafce8 ? this['jukeboxPlayer']['setVolume'](this['minVolume']) : isNaN(_0xdafce8) ? this['jukeboxPlayer']['setVolume'](0x1) : 0x1 < _0xdafce8 ? this['jukeboxPlayer']['setVolume'](0x1) : this['jukeboxPlayer']['setVolume'](_0xdafce8);
        },
        'getVolume': function() {
            return this['jukeboxPlayer']['getVolume']();
        },
        'mute': function(_0x14090c) {
            this['parent'](_0x14090c),
            this['bgmPlaying'] && (console['log']('jukebox', this['premuteVolume']),
            this['stayMuteFlag'] || (this['premuteVolume'] = this['getVolume']()),
            this['jukeboxPlayer']['pause'](),
            this['jukeboxPlayer']['setVolume'](this['minVolume']));
        },
        'unmute': function(_0x5290fb) {
            this['parent'](_0x5290fb),
            this['stayMuteFlag'] || (console['log']('jukebox', this['premuteVolume']),
            this['jukeboxPlayer']['setVolume'](this['premuteVolume']),
            this['jukeboxPlayer']['resume']());
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.audio.webaudio-music-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    WebaudioMusicPlayer = SoundPlayer['extend']({
        'tagName': 'WebaudioMusicPlayer',
        'bgmPlaying': !0x1,
        'isSupported': !0x1,
        'muteFlag': !0x1,
        'pausedTime': 0x0,
        'webaudio': null,
        'useHTML5Audio': !0x1,
        'audio': null,
        'inactiveAudio': null,
        'codecs': null,
        'reinitOnPlay': !0x1,
        'inputList': null,
        '_volume': 0x1,
        'soundList': {},
        'init': function(_0x49edeb) {
            this['webaudio'] = {
                'compatibility': {},
                'gainNode': null,
                'buffer': null,
                'source_loop': {},
                'source_once': {}
            };
            try {
                Howler && Howler['ctx'] ? this['webaudio']['context'] = Howler['ctx'] : ig && ig['webaudio_ctx'] ? this['webaudio']['context'] = ig['webaudio_ctx'] : (this['AudioContext'] = window['AudioContext'] || window['webkitAudioContext'],
                this['webaudio']['context'] = new this['AudioContext'](),
                ig['webaudio_ctx'] = this['webaudio']['context']),
                this['isSupported'] = !0x0;
            } catch (_0x37fd3d) {
                console['log']('Web\x20Audio\x20API\x20not\x20supported\x20in\x20this\x20browser.'),
                this['webaudio'] = null,
                this['useHTML5Audio'] = !0x0;
            }
            if (this['useHTML5Audio']) {
                if ('undefined' !== typeof Audio)
                    try {
                        new Audio();
                    } catch (_0x5728a8) {
                        this['useHTML5Audio'] = !0x1;
                    }
                else
                    this['useHTML5Audio'] = !0x1;
            }
            this['useHTML5Audio'] && (this['audio'] = new Audio(),
            this['isSupported'] = !0x0,
            this['initHTML5Audio'](_0x49edeb));
            if (!this['isSupported'])
                return null;
            this['webaudio'] && (this['inputList'] = _0x49edeb,
            this['initWebAudio'](_0x49edeb));
        },
        'initWebAudio': function(_0x453109) {
            ig['ua']['iOS'] && this['initIOSWebAudioUnlock'](),
            this['webaudio']['gainNode'] = 'undefined' === typeof this['webaudio']['context']['createGain'] ? this['webaudio']['context']['createGainNode']() : this['webaudio']['context']['createGain'](),
            this['webaudio']['gainNode']['connect'](this['webaudio']['context']['destination']),
            this['webaudio']['gainNode']['gain']['value'] = this['_volume'],
            this['webaudio']['buffer'] = null;
            var _0x43b276 = 'start'
              , _0x1614eb = 'stop'
              , _0x2451de = this['webaudio']['context']['createBufferSource']();
            'function' !== typeof _0x2451de['start'] && (_0x43b276 = 'noteOn'),
            this['webaudio']['compatibility']['start'] = _0x43b276,
            'function' !== typeof _0x2451de['stop'] && (_0x1614eb = 'noteOff'),
            this['webaudio']['compatibility']['stop'] = _0x1614eb;
            for (var _0x144617 in _0x453109) {
                this['soundList'][_0x144617] = _0x144617;
                var _0x1614eb = _0x453109[_0x144617]['path']
                  , _0x43b276 = _0x1614eb + '.' + ig['Sound']['FORMAT']['MP3']['ext']
                  , _0x3c0c6d = _0x1614eb + '.' + ig['Sound']['FORMAT']['OGG']['ext'];
                ig['ua']['mobile'] ? ig['ua']['iOS'] && (_0x3c0c6d = _0x43b276) : (_0x1614eb = navigator['userAgent']['toLowerCase'](),
                -0x1 != _0x1614eb['indexOf']('safari') && -0x1 >= _0x1614eb['indexOf']('chrome') && (_0x3c0c6d = _0x43b276),
                _0x1614eb['indexOf']('win64') && (_0x3c0c6d = _0x43b276));
                var _0x1a83b0 = new XMLHttpRequest();
                _0x1a83b0['open']('GET', _0x3c0c6d, !0x0),
                _0x1a83b0['responseType'] = 'arraybuffer',
                _0x1a83b0['onload'] = function() {
                    this['webaudio']['context']['decodeAudioData'](_0x1a83b0['response'], function(_0x205cd3) {
                        this['webaudio']['buffer'] = _0x205cd3,
                        this['webaudio']['source_loop'] = {},
                        this['bgmPlaying'] ? this['play'](null, !0x0) : this['stop']();
                    }
                    ['bind'](this), function() {
                        console['log']('Error\x20decoding\x20audio\x20\x22' + _0x3c0c6d + '\x22.');
                    });
                }
                ['bind'](this),
                _0x1a83b0['send']();
                if (0x4 == _0x1a83b0['readyState'] && 'undefined' !== typeof Audio) {
                    this['useHTML5Audio'] = !0x0;
                    try {
                        new Audio();
                    } catch (_0x340138) {
                        this['useHTML5Audio'] = !0x1;
                    }
                    this['useHTML5Audio'] && (console['log']('Using\x20HTML5\x20Audio'),
                    this['webaudio'] = null,
                    this['audio'] = new Audio(),
                    this['isSupported'] = !0x0,
                    this['initHTML5Audio'](_0x453109));
                }
                break;
            }
        },
        'initIOSWebAudioUnlock': function() {
            if (this['webaudio']) {
                webaudio = this['webaudio'];
                var _0x5ea31d = function() {
                    var _0x4466d1 = webaudio['context']
                      , _0x246b93 = _0x4466d1['createBuffer'](0x1, 0x1, 0x5622)
                      , _0x14d461 = _0x4466d1['createBufferSource']();
                    _0x14d461['buffer'] = _0x246b93,
                    _0x14d461['connect'](_0x4466d1['destination']),
                    'undefined' === typeof _0x14d461['start'] ? _0x14d461['noteOn'](0x0) : _0x14d461['start'](0x0),
                    setTimeout(function() {
                        (_0x14d461['playbackState'] === _0x14d461['PLAYING_STATE'] || _0x14d461['playbackState'] === _0x14d461['FINISHED_STATE']) && window['removeEventListener']('touchend', _0x5ea31d, !0x1);
                    }
                    ['bind'](this), 0x0);
                };
                window['addEventListener']('touchend', _0x5ea31d, !0x1);
            }
        },
        'initHTML5Audio': function(_0x18c893) {
            if (this['useHTML5Audio'] && this['audio']) {
                var _0x3e0440 = this['audio'];
                this['codecs'] = {},
                this['codecs'] = {
                    'mp3': !!_0x3e0440['canPlayType']('audio/mpeg;')['replace'](/^no$/, ''),
                    'opus': !!_0x3e0440['canPlayType']('audio/ogg;\x20codecs=\x22opus\x22')['replace'](/^no$/, ''),
                    'ogg': !!_0x3e0440['canPlayType']('audio/ogg;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                    'wav': !!_0x3e0440['canPlayType']('audio/wav;\x20codecs=\x221\x22')['replace'](/^no$/, ''),
                    'aac': !!_0x3e0440['canPlayType']('audio/aac;')['replace'](/^no$/, ''),
                    'm4a': !!(_0x3e0440['canPlayType']('audio/x-m4a;') || _0x3e0440['canPlayType']('audio/m4a;') || _0x3e0440['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                    'mp4': !!(_0x3e0440['canPlayType']('audio/x-mp4;') || _0x3e0440['canPlayType']('audio/mp4;') || _0x3e0440['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                    'weba': !!_0x3e0440['canPlayType']('audio/webm;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, '')
                },
                this['is'] = {
                    'ff': Boolean(null != window['mozInnerScreenX'] && /firefox/['test'](navigator['userAgent']['toLowerCase']())),
                    'ie': Boolean(document['all'] && !window['opera']),
                    'opera': Boolean(window['opera']),
                    'chrome': Boolean(window['chrome']),
                    'safari': Boolean(!window['chrome'] && /safari/['test'](navigator['userAgent']['toLowerCase']()) && window['getComputedStyle'] && !window['globalStorage'] && !window['opera'])
                },
                this['playDelay'] = -0x3c,
                this['stopDelay'] = 0x1e,
                this['is']['chrome'] && (this['playDelay'] = -0x19),
                this['is']['chrome'] && (this['stopDelay'] = 0x19),
                this['is']['ff'] && (this['playDelay'] = -0x19),
                this['is']['ff'] && (this['stopDelay'] = 0x55),
                this['is']['opera'] && (this['playDelay'] = 0x5),
                this['is']['opera'] && (this['stopDelay'] = 0x0);
                for (var _0x8caf58 in _0x18c893) {
                    this['soundList'][_0x8caf58] = _0x8caf58;
                    var _0x136f50 = _0x18c893[_0x8caf58]['path']
                      , _0x3e0440 = _0x136f50 + '.' + ig['Sound']['FORMAT']['OGG']['ext']
                      , _0x136f50 = _0x136f50 + '.' + ig['Sound']['FORMAT']['MP3']['ext']
                      , _0x347bc9 = null;
                    this['codecs'][ig['Sound']['FORMAT']['OGG']['ext']['toLowerCase']()] ? _0x347bc9 = _0x3e0440 : this['codecs'][ig['Sound']['FORMAT']['MP3']['ext']['toLowerCase']()] && (_0x347bc9 = _0x136f50);
                    if (_0x347bc9) {
                        ig['ua']['mobile'] ? ig['ua']['iOS'] && (_0x347bc9 = _0x136f50) : (_0x18c893 = navigator['userAgent']['toLowerCase'](),
                        -0x1 != _0x18c893['indexOf']('safari') && -0x1 >= _0x18c893['indexOf']('chrome') && (_0x347bc9 = _0x136f50)),
                        this['audio']['addEventListener']('error', function() {
                            this['audio']['error'] && 0x4 === this['audio']['error']['code'] && (this['isSupported'] = !0x1);
                        }, !0x1),
                        this['audio']['src'] = _0x347bc9,
                        this['audio']['_pos'] = 0x0,
                        this['audio']['preload'] = 'auto',
                        this['audio']['volume'] = this['_volume'],
                        this['inactiveAudio'] = new Audio(),
                        this['inactiveAudio']['src'] = _0x347bc9,
                        this['inactiveAudio']['_pos'] = 0x0,
                        this['inactiveAudio']['preload'] = 'auto',
                        this['inactiveAudio']['volume'] = this['_volume'],
                        this['inactiveAudio']['load']();
                        var _0x353c4d = function() {
                            this['_duration'] = this['audio']['duration'],
                            this['_loaded'] || (this['_loaded'] = !0x0),
                            this['bgmPlaying'] ? this['play'](null, !0x0) : this['stop'](),
                            this['audio']['removeEventListener']('canplaythrough', _0x353c4d, !0x1);
                        }
                        ['bind'](this);
                        this['audio']['addEventListener']('canplaythrough', _0x353c4d, !0x1),
                        this['audio']['load']();
                        break;
                    }
                }
            }
        },
        'play': function(_0x5ab877, _0x372b1f) {
            if (this['isSupported']) {
                if (this['bgmPlaying'] = !0x0,
                this['webaudio']) {
                    if (!_0x372b1f && this['reinitOnPlay'] && this['webaudio']['source_loop']['buffer'] == this['webaudio']['buffer']) {
                        if (this['webaudio']['source_loop']['_playing'] && (this['webaudio']['source_loop'][this['webaudio']['compatibility']['stop']](0x0),
                        this['webaudio']['source_loop']['_playing'] = !0x1,
                        this['pausedTime'] += this['webaudio']['context']['currentTime'] - this['webaudio']['source_loop']['_startTime'],
                        this['pausedTime'] %= this['webaudio']['source_loop']['buffer']['duration'],
                        this['webaudio']['source_loop']['_startTime'] = 0x0,
                        'noteOn' === this['webaudio']['compatibility']['start']))
                            this['webaudio']['source_once'][this['webaudio']['compatibility']['stop']](0x0);
                        try {
                            this['webaudio']['context']['close'](),
                            this['webaudio']['context'] = new this['AudioContext'](),
                            this['webaudio']['gainNode'] = this['webaudio']['context']['createGain'](),
                            this['webaudio']['gainNode']['connect'](this['webaudio']['context']['destination']),
                            this['webaudio']['gainNode']['gain']['value'] = this['_volume'];
                            var _0x34f7f4 = 'start'
                              , _0x524f34 = 'stop'
                              , _0x36a368 = this['webaudio']['context']['createBufferSource']();
                            'function' !== typeof _0x36a368['start'] && (_0x34f7f4 = 'noteOn'),
                            this['webaudio']['compatibility']['start'] = _0x34f7f4,
                            'function' !== typeof _0x36a368['stop'] && (_0x524f34 = 'noteOff'),
                            this['webaudio']['compatibility']['stop'] = _0x524f34,
                            this['webaudio']['source_loop'] = {},
                            this['play'](null, !0x0);
                        } catch (_0x5eaedc) {}
                    }
                    if (this['webaudio']['buffer']) {
                        if (!this['muteFlag'] && (this['bgmPlaying'] = !0x0,
                        !this['webaudio']['source_loop']['_playing'])) {
                            this['webaudio']['source_loop'] = this['webaudio']['context']['createBufferSource'](),
                            this['webaudio']['source_loop']['buffer'] = this['webaudio']['buffer'],
                            this['webaudio']['source_loop']['loop'] = !0x0,
                            this['webaudio']['source_loop']['connect'](this['webaudio']['gainNode']);
                            if (null == _0x5ab877 || isNaN(_0x5ab877))
                                _0x5ab877 = 0x0,
                                this['pausedTime'] && (_0x5ab877 = this['pausedTime']);
                            this['webaudio']['source_loop']['_startTime'] = this['webaudio']['context']['currentTime'];
                            if ('noteOn' === this['webaudio']['compatibility']['start'])
                                this['webaudio']['source_once'] = this['webaudio']['context']['createBufferSource'](),
                                this['webaudio']['source_once']['buffer'] = this['webaudio']['buffer'],
                                this['webaudio']['source_once']['connect'](this['webaudio']['gainNode']),
                                this['webaudio']['source_once']['noteGrainOn'](0x0, _0x5ab877, this['webaudio']['buffer']['duration'] - _0x5ab877),
                                this['webaudio']['source_loop'][this['webaudio']['compatibility']['start']](this['webaudio']['context']['currentTime'] + (this['webaudio']['buffer']['duration'] - _0x5ab877));
                            else
                                this['webaudio']['source_loop'][this['webaudio']['compatibility']['start']](0x0, _0x5ab877);
                            this['webaudio']['source_loop']['_playing'] = !0x0;
                        }
                    } else
                        this['bgmPlaying'] = !0x0;
                } else {
                    if (this['audio']) {
                        var _0x5243b7 = this['audio'];
                        if (!this['muteFlag']) {
                            if (this['bgmPlaying'] = !0x0,
                            isNaN(_0x5ab877) && (_0x5ab877 = 0x0,
                            this['pausedTime'] && (_0x5ab877 = this['pausedTime'])),
                            _0x34f7f4 = this['_duration'] - _0x5ab877,
                            this['_onEndTimer'] && (clearTimeout(this['_onEndTimer']),
                            this['_onEndTimer'] = null),
                            this['_onEndTimer'] = setTimeout(function() {
                                this['audio']['currentTime'] = 0x0,
                                this['audio']['pause'](),
                                this['pausedTime'] = 0x0;
                                if (this['inactiveAudio']) {
                                    var _0x295aa6 = this['audio'];
                                    this['audio'] = this['inactiveAudio'],
                                    this['inactiveAudio'] = _0x295aa6;
                                }
                                this['play']();
                            }
                            ['bind'](this), 0x3e8 * _0x34f7f4 + this['playDelay']),
                            0x4 === _0x5243b7['readyState'] || !_0x5243b7['readyState'] && navigator['isCocoonJS'])
                                _0x5243b7['readyState'] = 0x4,
                                _0x5243b7['currentTime'] = _0x5ab877,
                                _0x5243b7['muted'] = this['muteFlag'] || _0x5243b7['muted'],
                                _0x5243b7['volume'] = this['_volume'],
                                setTimeout(function() {
                                    _0x5243b7['play']();
                                }, 0x0);
                            else {
                                clearTimeout(this['_onEndTimer']),
                                this['_onEndTimer'] = null;
                                var _0x4e3c41 = function() {
                                    typeof ('function' == this['play']) && (this['play'](),
                                    _0x5243b7['removeEventListener']('canplaythrough', _0x4e3c41, !0x1));
                                }
                                ['bind'](this);
                                _0x5243b7['addEventListener']('canplaythrough', _0x4e3c41, !0x1);
                            }
                        }
                    }
                }
            }
        },
        'stop': function() {
            this['bgmPlaying'] = !0x1;
            if (this['isSupported']) {
                if (this['webaudio']) {
                    if (this['webaudio']['source_loop']['_playing'] && (this['webaudio']['source_loop'][this['webaudio']['compatibility']['stop']](0x0),
                    this['webaudio']['source_loop']['_playing'] = !0x1,
                    this['pausedTime'] += this['webaudio']['context']['currentTime'] - this['webaudio']['source_loop']['_startTime'],
                    this['pausedTime'] %= this['webaudio']['source_loop']['buffer']['duration'],
                    this['webaudio']['source_loop']['_startTime'] = 0x0,
                    'noteOn' === this['webaudio']['compatibility']['start']))
                        this['webaudio']['source_once'][this['webaudio']['compatibility']['stop']](0x0);
                } else {
                    if (this['audio']) {
                        var _0x574c15 = this['audio'];
                        0x4 == _0x574c15['readyState'] && (this['pausedTime'] = _0x574c15['currentTime'],
                        _0x574c15['currentTime'] = 0x0,
                        _0x574c15['pause'](),
                        clearTimeout(this['_onEndTimer']),
                        this['_onEndTimer'] = null);
                    }
                }
            }
        },
        'volume': function(_0x5034d5) {
            if (isNaN(_0x5034d5) || null == _0x5034d5)
                return this['getVolume']();
            this['isSupported'] && (this['_volume'] = _0x5034d5,
            0x0 > this['_volume'] ? this['_volume'] = 0x0 : 0x1 < this['_volume'] && (this['_volume'] = 0x1),
            this['webaudio'] ? this['webaudio']['gainNode'] && (this['webaudio']['gainNode']['gain']['value'] = this['_volume']) : this['audio'] && (this['audio']['volume'] = this['_volume'],
            this['inactiveAudio'] && (this['inactiveAudio']['volume'] = this['_volume'])));
        },
        'getVolume': function() {
            return !this['isSupported'] ? 0x0 : this['_volume'];
        },
        'mute': function(_0x59d3ea) {
            this['parent'](_0x59d3ea),
            !0x1 == this['muteFlag'] && (this['muteFlag'] = !0x0,
            this['bgmPlaying'] && (this['stop'](),
            this['bgmPlaying'] = !0x0));
        },
        'unmute': function(_0x4fdac4) {
            this['parent'](_0x4fdac4),
            !this['stayMuteFlag'] && !0x0 == this['muteFlag'] && (this['muteFlag'] = !0x1,
            this['bgmPlaying'] && this['play']());
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.audio.sound-info')['defines'](function() {
    SoundInfo = ig['Class']['extend']({
        'FORMATS': {
            'OGG': '.ogg',
            'MP3': '.mp3'
        },
        'sfx': {
            'kittyopeningSound': {
                'path': 'media/audio/opening/kittyopening'
            },
            'staticSound': {
                'path': 'media/audio/play/static'
            },
            'openingSound': {
                'path': 'media/audio/opening/opening'
            },
            'touchPaddle': {
                'path': 'media/audio/touchpaddle'
            },
            'touchTable': {
                'path': 'media/audio/touchtable'
            },
            'clickButton': {
                'path': 'media/audio/soundbutton'
            }
        },
        'bgm': {
            'background': {
                'path': 'media/audio/bgm',
                'startOgg': 0x0,
                'endOgg': 21.463,
                'startMp3': 0x0,
                'endMp3': 21.463
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.audio.sound-handler')['requires']('plugins.audio.impact-music-player', 'plugins.audio.impact-sound-player', 'plugins.audio.howler-player', 'plugins.audio.howler-music-player', 'plugins.audio.jukebox-player', 'plugins.audio.webaudio-music-player', 'plugins.audio.sound-info')['defines'](function() {
    ig['SoundHandler'] = ig['Class']['extend']({
        'bgmPlayer': null,
        'sfxPlayer': null,
        'focusBlurMute': !0x1,
        'soundInfo': new SoundInfo(),
        'init': function() {
            console['log']('Initiating\x20sound\x20handler'),
            ig['ua']['mobile'] ? (this['sfxPlayer'] = new HowlerPlayer(this['soundInfo']['sfx']),
            this['bgmPlayer'] = new WebaudioMusicPlayer(this['soundInfo']['bgm'],{
                'loop': !0x0
            }),
            this['bgmPlayer']['isSupported'] || (this['bgmPlayer'] = new JukeboxPlayer(this['soundInfo']['bgm'],{
                'loop': !0x0
            }))) : (this['sfxPlayer'] = new HowlerPlayer(this['soundInfo']['sfx']),
            this['bgmPlayer'] = new WebaudioMusicPlayer(this['soundInfo']['bgm'],{
                'loop': !0x0
            }),
            this['bgmPlayer']['isSupported'] || (this['bgmPlayer'] = new ImpactMusicPlayer(this['soundInfo']['bgm'],{
                'loop': !0x0
            })));
        },
        'unlockWebAudio': function() {
            Howler && (Howler['ctx'] && 'running' !== Howler['ctx']['state'] && Howler['ctx']['resume'](),
            Howler['_audioUnlocked'] || 'function' === typeof Howler['_unlockAudio'] && Howler['_unlockAudio']()),
            ig && ig['webaudio_ctx'] && ig['webaudio_ctx']['state'] && 'running' !== ig['webaudio_ctx']['state'] && ig['webaudio_ctx']['resume'](),
            this['bgmPlayer']['webaudio'] && this['bgmPlayer']['webaudio']['context'] && this['bgmPlayer']['webaudio']['context']['state'] && 'running' !== this['bgmPlayer']['webaudio']['context']['state'] && this['bgmPlayer']['webaudio']['context']['resume']();
        },
        'checkBGM': function() {
            return this['bgmPlayer']['stayMuteFlag'];
        },
        'checkSFX': function() {
            return this['sfxPlayer']['stayMuteFlag'];
        },
        'muteSFX': function(_0x3eb394) {
            this['sfxPlayer'] && this['sfxPlayer']['mute'](_0x3eb394);
        },
        'muteBGM': function(_0x509d33) {
            this['bgmPlayer'] && this['bgmPlayer']['mute'](_0x509d33);
        },
        'unmuteSFX': function(_0x3601a0) {
            this['sfxPlayer'] && this['sfxPlayer']['unmute'](_0x3601a0);
        },
        'unmuteBGM': function(_0x4ba1d8) {
            this['bgmPlayer'] && this['bgmPlayer']['unmute'](_0x4ba1d8);
        },
        'muteAll': function(_0x35c631) {
            this['muteSFX'](_0x35c631),
            this['muteBGM'](_0x35c631);
        },
        'unmuteAll': function(_0x195e16) {
            this['unlockWebAudio'](),
            this['unmuteSFX'](_0x195e16),
            this['unmuteBGM'](_0x195e16);
        },
        'forceMuteAll': function() {
            this['focusBlurMute'] || this['muteAll'](!0x1),
            this['focusBlurMute'] = !0x0;
        },
        'forceUnMuteAll': function() {
            this['focusBlurMute'] && (this['unmuteAll'](!0x1),
            this['focusBlurMute'] = !0x1);
        },
        'saveVolume': function() {
            this['sfxPlayer'] && ig['game']['io']['storageSet']('soundVolume', this['sfxPlayer']['getVolume']()),
            this['bgmPlayer'] && ig['game']['io']['storageSet']('musicVolume', this['bgmPlayer']['getVolume']());
        },
        'forceLoopBGM': function() {
            var _0x17dcb6;
            if (!this['focusBlurMute'] && this['bgmPlayer']['bgmPlaying'] && this['bgmPlayer']) {
                var _0x3868f9 = this['bgmPlayer']['jukeboxPlayer'];
                if (_0x3868f9) {
                    null != window['mozInnerScreenX'] && /firefox/['test'](navigator['userAgent']['toLowerCase']()),
                    _0x17dcb6 = Boolean(window['chrome']),
                    !window['chrome'] && /safari/['test'](navigator['userAgent']['toLowerCase']());
                    var _0x57c8e2 = 0.1;
                    ig['ua']['mobile'] && (_0x57c8e2 = 0.115,
                    ig['ua']['android'] && (_0x57c8e2 = 0.45,
                    _0x17dcb6 && (_0x57c8e2 = 0.3))),
                    _0x3868f9['settings']['spritemap']['music'] && (_0x17dcb6 = _0x3868f9['settings']['spritemap']['music']['end'] - _0x57c8e2,
                    _0x3868f9['getCurrentTime']() >= _0x17dcb6 && (_0x17dcb6 = _0x3868f9['settings']['spritemap']['music']['start'],
                    ig['ua']['android'] ? this['forcelooped'] || (_0x3868f9['play'](_0x17dcb6, !0x0),
                    this['forcelooped'] = !0x0,
                    setTimeout(function() {
                        ig['soundHandler']['forcelooped'] = !0x1;
                    }, _0x57c8e2)) : _0x3868f9['setCurrentTime'](_0x17dcb6)));
                } else
                    'ImpactMusicPlayer' == this['bgmPlayer']['tagName'] && (null != window['mozInnerScreenX'] && /firefox/['test'](navigator['userAgent']['toLowerCase']()),
                    _0x17dcb6 = Boolean(window['chrome']),
                    !window['chrome'] && /safari/['test'](navigator['userAgent']['toLowerCase']()),
                    _0x57c8e2 = 0.1,
                    ig['ua']['mobile'] && (_0x57c8e2 = 0.115,
                    ig['ua']['android'] && (_0x57c8e2 = 0.45,
                    _0x17dcb6 && (_0x57c8e2 = 0.3))),
                    _0x3868f9 = 0x0,
                    'mp3' == ig['soundManager']['format']['ext'] && (_0x3868f9 = 0.05),
                    ig['music']['currentTrack'] && (_0x17dcb6 = ig['music']['currentTrack']['duration'] - _0x57c8e2,
                    ig['music']['currentTrack']['currentTime'] >= _0x17dcb6 && (ig['ua']['android'] ? this['forcelooped'] || (ig['music']['currentTrack']['pause'](),
                    ig['music']['currentTrack']['currentTime'] = _0x3868f9,
                    ig['music']['currentTrack']['play'](),
                    this['forcelooped'] = !0x0,
                    setTimeout(function() {
                        ig['soundHandler']['forcelooped'] = !0x1;
                    }, _0x57c8e2)) : ig['music']['currentTrack']['currentTime'] = _0x3868f9)));
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.handlers.visibility-handler')['requires']('plugins.audio.sound-handler')['defines'](function() {
    ig['VisibilityHandler'] = ig['Class']['extend']({
        'version': '1.0.2',
        'config': {
            'allowResumeWithoutFocus': {
                'desktop': !0x0,
                'mobile': {
                    'kaios': !0x1,
                    'default': !0x0
                }
            },
            'handlerDelay': {
                'desktop': 0x0,
                'mobile': {
                    'kaios': 0x0,
                    'default': 0x0
                }
            },
            'autoFocusOnResume': {
                'desktop': !0x0,
                'mobile': {
                    'kaios': !0x1,
                    'default': !0x0
                }
            },
            'autoFocusAfterResume': {
                'desktop': !0x0,
                'mobile': {
                    'kaios': !0x1,
                    'default': !0x0
                }
            }
        },
        'browserPrefixes': ['o', 'ms', 'moz', 'webkit'],
        'browserPrefix': null,
        'hiddenPropertyName': null,
        'visibilityEventName': null,
        'visibilityStateName': null,
        'isShowingOverlay': !0x1,
        'isFocused': !0x1,
        'isPaused': !0x1,
        'init': function() {
            this['initVisibilityHandler'](),
            this['initFocusHandler'](),
            this['initPageTransitionHandler'](),
            ig['visibilityHandler'] = this;
        },
        'pauseHandler': function() {
            ig['game'] && ig['game']['pauseGame'](),
            ig['soundHandler'] && ig['soundHandler']['forceMuteAll']();
        },
        'resumeHandler': function() {
            ig['game'] && ig['game']['resumeGame'](),
            ig['soundHandler'] && ig['soundHandler']['forceUnMuteAll']();
        },
        'initVisibilityHandler': function() {
            this['browserPrefix'] = this['getBrowserPrefix'](),
            this['hiddenPropertyName'] = this['getHiddenPropertyName'](this['browserPrefix']),
            this['visibilityEventName'] = this['getVisibilityEventName'](this['browserPrefix']),
            this['visibilityStateName'] = this['getVisibilityStateName'](this['browserPrefix']),
            this['visibilityEventName'] && document['addEventListener'](this['visibilityEventName'], this['onChange']['bind'](this), !0x0);
        },
        'initFocusHandler': function() {
            window['addEventListener']('blur', this['onChange']['bind'](this), !0x0),
            document['addEventListener']('blur', this['onChange']['bind'](this), !0x0),
            document['addEventListener']('focusout', this['onChange']['bind'](this), !0x0),
            window['addEventListener']('focus', this['onChange']['bind'](this), !0x0),
            document['addEventListener']('focus', this['onChange']['bind'](this), !0x0),
            document['addEventListener']('focusin', this['onChange']['bind'](this), !0x0);
        },
        'initPageTransitionHandler': function() {
            window['addEventListener']('pagehide', this['onChange']['bind'](this), !0x0),
            window['addEventListener']('pageshow', this['onChange']['bind'](this), !0x0);
        },
        'getBrowserPrefix': function() {
            var _0x51354d = null;
            return this['browserPrefixes']['forEach'](function(_0x42c891) {
                if (this['getHiddenPropertyName'](_0x42c891)in document)
                    return _0x51354d = _0x42c891;
            }
            ['bind'](this)),
            _0x51354d;
        },
        'getHiddenPropertyName': function(_0xde3478) {
            return _0xde3478 ? _0xde3478 + 'Hidden' : 'hidden';
        },
        'getVisibilityEventName': function(_0x3b3769) {
            return (_0x3b3769 ? _0x3b3769 : '') + 'visibilitychange';
        },
        'getVisibilityStateName': function(_0x5db157) {
            return _0x5db157 ? _0x5db157 + 'VisibilityState' : 'visibilityState';
        },
        'hasView': function() {
            return !(document[this['hiddenPropertyName']] || 'visible' !== document[this['visibilityStateName']]);
        },
        'hasFocus': function() {
            return document['hasFocus']() || this['isFocused'];
        },
        'onOverlayShow': function() {
            this['systemPaused'](),
            this['isShowingOverlay'] = !0x0;
        },
        'onOverlayHide': function() {
            this['isShowingOverlay'] = !0x1,
            this['systemResumed']();
        },
        'systemPaused': function() {
            if (this['isPaused'])
                return !0x1;
            return this['pauseHandler'](),
            this['isPaused'] = !0x0;
        },
        'systemResumed': function() {
            if (!this['isPaused'] || !this['hasView']() || this['isShowingOverlay'])
                return !0x1;
            if (!this['hasFocus']()) {
                if (ig['ua']['mobile']) {
                    if (this['isKaiOS']()) {
                        if (!this['config']['allowResumeWithoutFocus']['mobile']['kaios'])
                            return !0x1;
                    } else {
                        if (!this['config']['allowResumeWithoutFocus']['mobile']['default'])
                            return !0x1;
                    }
                } else {
                    if (!this['config']['allowResumeWithoutFocus']['desktop'])
                        return !0x1;
                }
            }
            return this['focusOnResume'](),
            this['resumeHandler'](),
            this['focusAfterResume'](),
            this['isPaused'] = !0x1,
            !0x0;
        },
        'isKaiOS': function() {
            return /KAIOS/['test'](navigator['userAgent']) || !0x1;
        },
        'focusOnResume': function() {
            return ig['ua']['mobile'] ? this['isKaiOS']() ? this['config']['autoFocusOnResume']['mobile']['kaios'] : this['config']['autoFocusOnResume']['mobile']['default'] : this['config']['autoFocusOnResume']['desktop'];
        },
        'focusAfterResume': function() {
            return ig['ua']['mobile'] ? this['isKaiOS']() ? this['config']['autoFocusAfterResume']['mobile']['kaios'] : this['config']['autoFocusAfterResume']['mobile']['default'] : this['config']['autoFocusAfterResume']['desktop'];
        },
        'focus': function(_0x100251) {
            window['focus'] && _0x100251 && window['focus']();
        },
        'handleDelayedEvent': function(_0x391910) {
            if (!this['hasView']() || 'pause' === _0x391910['type'] || 'pageHide' === _0x391910['type'] || 'blur' === _0x391910['type'] || 'focusout' === _0x391910['type']) {
                if ('blur' === _0x391910['type'] || 'focusout' === _0x391910['type'])
                    this['isFocused'] = !0x1;
                return this['systemPaused'](_0x391910);
            }
            if ('focus' === _0x391910['type'] || 'focusin' === _0x391910['type'])
                this['isFocused'] = !0x0;
            return this['systemResumed'](_0x391910);
        },
        'startDelayedEventHandler': function(_0x4bb1aa) {
            ig['ua']['mobile'] ? this['isKaiOS']() ? 0x0 < this['config']['handlerDelay']['mobile']['kaios'] ? window['setTimeout'](function(_0x3c2009) {
                this['handleDelayedEvent'](_0x3c2009);
            }
            ['bind'](this, _0x4bb1aa), this['config']['handlerDelay']['mobile']) : this['handleDelayedEvent'](_0x4bb1aa) : 0x0 < this['config']['handlerDelay']['mobile']['default'] ? window['setTimeout'](function(_0x29ded5) {
                this['handleDelayedEvent'](_0x29ded5);
            }
            ['bind'](this, _0x4bb1aa), this['config']['handlerDelay']['mobile']) : this['handleDelayedEvent'](_0x4bb1aa) : 0x0 < this['config']['handlerDelay']['desktop'] ? window['setTimeout'](function(_0x496e4a) {
                this['handleDelayedEvent'](_0x496e4a);
            }
            ['bind'](this, _0x4bb1aa), this['config']['handlerDelay']['desktop']) : this['handleDelayedEvent'](_0x4bb1aa);
        },
        'onChange': function(_0x384170) {
            this['startDelayedEventHandler'](_0x384170);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.io.storage')['defines'](function() {
    ig['Storage'] = ig['Class']['extend']({
        'staticInstantiate': function() {
            return !ig['Storage']['instance'] ? null : ig['Storage']['instance'];
        },
        'init': function() {
            ig['Storage']['instance'] = this;
        },
        'isCapable': function() {
            return 'undefined' !== typeof window['localStorage'];
        },
        'isSet': function(_0x525cff) {
            return null !== this['get'](_0x525cff);
        },
        'initUnset': function(_0x362bbb, _0x509e10) {
            null === this['get'](_0x362bbb) && this['set'](_0x362bbb, _0x509e10);
        },
        'get': function(_0x2dad4c) {
            if (!this['isCapable']())
                return null;
            try {
                return JSON['parse'](localStorage['getItem'](_0x2dad4c));
            } catch (_0xe56684) {
                return window['localStorage']['getItem'](_0x2dad4c);
            }
        },
        'getInt': function(_0x322505) {
            return ~~this['get'](_0x322505);
        },
        'getFloat': function(_0x109eb3) {
            return parseFloat(this['get'](_0x109eb3));
        },
        'getBool': function(_0x1506c7) {
            return !!this['get'](_0x1506c7);
        },
        'key': function(_0x4d52c6) {
            return this['isCapable']() ? window['localStorage']['key'](_0x4d52c6) : null;
        },
        'set': function(_0x15045c, _0x3e792c) {
            if (!this['isCapable']())
                return null;
            try {
                window['localStorage']['setItem'](_0x15045c, JSON['stringify'](_0x3e792c));
            } catch (_0x3f2e0d) {
                console['log'](_0x3f2e0d);
            }
        },
        'setHighest': function(_0x864f08, _0x2a5538) {
            _0x2a5538 > this['getFloat'](_0x864f08) && this['set'](_0x864f08, _0x2a5538);
        },
        'remove': function(_0xe999cb) {
            if (!this['isCapable']())
                return null;
            window['localStorage']['removeItem'](_0xe999cb);
        },
        'clear': function() {
            if (!this['isCapable']())
                return null;
            window['localStorage']['clear']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.io.mouse')['defines'](function() {
    Mouse = ig['Class']['extend']({
        'pos': new Vector2(0x0,0x0),
        'bindings': {
            'click': [ig['KEY']['MOUSE1']]
        },
        'init': function() {
            ig['input']['initMouse']();
            for (var _0x45c6a6 in this['bindings']) {
                this[_0x45c6a6] = _0x45c6a6;
                for (var _0x3c3b93 = 0x0; _0x3c3b93 < this['bindings'][_0x45c6a6]['length']; _0x3c3b93++)
                    ig['input']['bind'](this['bindings'][_0x45c6a6][_0x3c3b93], _0x45c6a6);
            }
        },
        'getPos': function() {
            return this['pos']['set'](ig['input']['mouse']['x'] / ig['sizeHandler']['sizeRatio']['x'] / ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['input']['mouse']['y'] / ig['sizeHandler']['sizeRatio']['y'] / ig['sizeHandler']['scaleRatioMultiplier']['y']),
            this['pos'];
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.io.keyboard')['defines'](function() {
    Keyboard = ig['Class']['extend']({
        'bindings': {
            'jump': [ig['KEY']['W'], ig['KEY']['UP_ARROW']],
            'moveright': [ig['KEY']['D'], ig['KEY']['RIGHT_ARROW']],
            'moveleft': [ig['KEY']['A'], ig['KEY']['LEFT_ARROW']],
            'shoot': [ig['KEY']['S'], ig['KEY']['DOWN_ARROW'], ig['KEY']['SPACE']]
        },
        'init': function() {
            for (var _0x4bbac8 in this['bindings']) {
                this[_0x4bbac8] = _0x4bbac8;
                for (var _0x5d4340 = 0x0; _0x5d4340 < this['bindings'][_0x4bbac8]['length']; _0x5d4340++)
                    ig['input']['bind'](this['bindings'][_0x4bbac8][_0x5d4340], _0x4bbac8);
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.io.gamepad-input')['defines'](function() {
    ig['PADKEY'] = {
        'BUTTON_0': 0x0,
        'PADBUTTON_1': 0x1,
        'BUTTON_2': 0x2,
        'BUTTON_3': 0x3,
        'BUTTON_LEFT_BUMPER': 0x4,
        'BUTTON_RIGHT_BUMPER': 0x5,
        'BUTTON_LEFT_TRIGGER': 0x6,
        'BUTTON_RIGHT_TRIGGER': 0x7,
        'BUTTON_LEFT_JOYSTICK': 0xa,
        'BUTTON_RIGHT_JOYSTICK': 0xb,
        'BUTTON_DPAD_UP': 0xc,
        'BUTTON_DPAD_DOWN': 0xd,
        'BUTTON_DPAD_LEFT': 0xe,
        'BUTTON_DPAD_RIGHT': 0xf,
        'BUTTON_MENU': 0x10,
        'AXIS_LEFT_JOYSTICK_X': 0x0,
        'AXIS_LEFT_JOYSTICK_Y': 0x1,
        'AXIS_RIGHT_JOYSTICK_X': 0x2,
        'AXIS_RIGHT_JOYSTICK_Y': 0x3
    },
    ig['GamepadInput'] = ig['Class']['extend']({
        'isInit': !0x1,
        'isSupported': !0x1,
        'list': [],
        'bindings': {},
        'states': {},
        'presses': {},
        'releases': {},
        'downLocks': {},
        'upLocks': {},
        'leftStick': {
            'x': 0x0,
            'y': 0x0
        },
        'rightStick': {
            'x': 0x0,
            'y': 0x0
        },
        'start': function() {
            if (!this['isInit']) {
                this['isInit'] = !0x0;
                var _0x10ae16 = navigator['getGamepads'] || navigator['webkitGetGamepads'];
                _0x10ae16 && (!navigator['getGamepads'] && navigator['webkitGetGamepads'] && (navigator['getGamepads'] = navigator['webkitGetGamepads']),
                this['list'] = navigator['getGamepads']()),
                this['isSupported'] = _0x10ae16;
            }
        },
        'isAvailable': function() {
            return this['isInit'] && this['isSupported'];
        },
        'buttonPressed': function(_0x5ad1c0) {
            return 'object' == typeof _0x5ad1c0 ? _0x5ad1c0['pressed'] : 0x1 == _0x5ad1c0;
        },
        'buttonDown': function(_0x134834) {
            if (_0x134834 = this['bindings'][_0x134834])
                this['states'][_0x134834] = !0x0,
                this['downLocks'][_0x134834] || (this['presses'][_0x134834] = !0x0,
                this['downLocks'][_0x134834] = !0x0);
        },
        'buttonUp': function(_0x16d808) {
            if ((_0x16d808 = this['bindings'][_0x16d808]) && this['downLocks'][_0x16d808] && !this['upLocks'][_0x16d808])
                this['states'][_0x16d808] = !0x1,
                this['releases'][_0x16d808] = !0x0,
                this['upLocks'][_0x16d808] = !0x0;
        },
        'clearPressed': function() {
            for (var _0x5d5526 in this['releases'])
                this['states'][_0x5d5526] = !0x1,
                this['downLocks'][_0x5d5526] = !0x1;
            this['releases'] = {},
            this['presses'] = {},
            this['upLocks'] = {};
        },
        'bind': function(_0x5d0b49, _0x102587) {
            this['bindings'][_0x5d0b49] = _0x102587;
        },
        'unbind': function(_0x3f69f6) {
            this['releases'][this['bindings'][_0x3f69f6]] = !0x0,
            this['bindings'][_0x3f69f6] = null;
        },
        'unbindAll': function() {
            this['bindings'] = {},
            this['states'] = {},
            this['presses'] = {},
            this['releases'] = {},
            this['downLocks'] = {},
            this['upLocks'] = {};
        },
        'state': function(_0x230aed) {
            return this['states'][_0x230aed];
        },
        'pressed': function(_0x958029) {
            return this['presses'][_0x958029];
        },
        'released': function(_0x526f85) {
            return this['releases'][_0x526f85];
        },
        'clamp': function(_0x522366, _0x538057, _0xa2e53a) {
            return _0x522366 < _0x538057 ? _0x538057 : _0x522366 > _0xa2e53a ? _0xa2e53a : _0x522366;
        },
        'pollGamepads': function() {
            if (this['isSupported']) {
                this['leftStick']['x'] = 0x0,
                this['leftStick']['y'] = 0x0,
                this['rightStick']['x'] = 0x0,
                this['rightStick']['y'] = 0x0,
                this['list'] = navigator['getGamepads']();
                for (var _0x1af7e5 in this['bindings']) {
                    for (var _0x3199c8 = !0x1, _0xc600d1 = 0x0; _0xc600d1 < this['list']['length']; _0xc600d1++) {
                        var _0x56cbf9 = this['list'][_0xc600d1];
                        if (_0x56cbf9 && _0x56cbf9['buttons'] && this['buttonPressed'](_0x56cbf9['buttons'][_0x1af7e5])) {
                            _0x3199c8 = !0x0;
                            break;
                        }
                    }
                    _0x3199c8 ? this['buttonDown'](_0x1af7e5) : this['buttonUp'](_0x1af7e5);
                }
                for (_0xc600d1 = 0x0; _0xc600d1 < this['list']['length']; _0xc600d1++)
                    if ((_0x56cbf9 = this['list'][_0xc600d1]) && _0x56cbf9['axes']) {
                        _0x1af7e5 = _0x56cbf9['axes'][ig['GAMEPADINPUT']['AXIS_LEFT_JOYSTICK_X']];
                        var _0x3199c8 = _0x56cbf9['axes'][ig['GAMEPADINPUT']['AXIS_LEFT_JOYSTICK_Y']]
                          , _0x32acc5 = _0x56cbf9['axes'][ig['GAMEPADINPUT']['AXIS_RIGHT_JOYSTICK_X']]
                          , _0x56cbf9 = _0x56cbf9['axes'][ig['GAMEPADINPUT']['AXIS_RIGHT_JOYSTICK_Y']];
                        this['leftStick']['x'] += isNaN(_0x1af7e5) ? 0x0 : _0x1af7e5,
                        this['leftStick']['y'] += isNaN(_0x3199c8) ? 0x0 : _0x3199c8,
                        this['rightStick']['x'] += isNaN(_0x32acc5) ? 0x0 : _0x32acc5,
                        this['rightStick']['y'] += isNaN(_0x56cbf9) ? 0x0 : _0x56cbf9;
                    }
                0x0 < this['list']['length'] && (this['leftStick']['x'] = this['clamp'](this['leftStick']['x'], -0x1, 0x1),
                this['leftStick']['y'] = this['clamp'](this['leftStick']['y'], -0x1, 0x1),
                this['rightStick']['x'] = this['clamp'](this['rightStick']['x'], -0x1, 0x1),
                this['rightStick']['y'] = this['clamp'](this['rightStick']['y'], -0x1, 0x1));
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.io.gamepad')['requires']('plugins.io.gamepad-input')['defines'](function() {
    Gamepad = ig['Class']['extend']({
        'bindings': {
            'padJump': [ig['PADKEY']['BUTTON_0']]
        },
        'init': function() {
            ig['gamepadInput']['start']();
            for (var _0x5c22eb in this['bindings'])
                for (var _0x278a36 = 0x0; _0x278a36 < this['bindings'][_0x5c22eb]['length']; _0x278a36++)
                    ig['gamepadInput']['bind'](this['bindings'][_0x5c22eb][_0x278a36], _0x5c22eb);
        },
        'press': function() {},
        'held': function() {},
        'release': function() {}
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.io.multitouch')['defines'](function() {
    Multitouch = ig['Class']['extend']({
        'init': function() {
            ig['multitouchInput']['start']();
        },
        'getTouchesPos': function() {
            if (ig['ua']['mobile']) {
                if (0x0 < ig['multitouchInput']['touches']['length']) {
                    for (var _0x201a18 = [], _0x5727c4 = 0x0; _0x5727c4 < ig['multitouchInput']['touches']['length']; _0x5727c4++) {
                        var _0x4bb6e5 = ig['multitouchInput']['touches'][_0x5727c4];
                        _0x201a18['push']({
                            'x': _0x4bb6e5['x'],
                            'y': _0x4bb6e5['y']
                        });
                    }
                    return _0x201a18;
                }
                return null;
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.io.multitouch-input')['defines'](function() {
    ig['MultitouchInput'] = ig['Class']['extend']({
        'isStart': !0x1,
        'touches': [],
        'multitouchCapable': !0x1,
        'lastEventUp': null,
        'start': function() {
            this['isStart'] || (this['isStart'] = !0x0,
            navigator['maxTouchPoints'] && 0x1 < navigator['maxTouchPoints'] && (this['multitouchCapable'] = !0x0),
            ig['ua']['touchDevice'] && (window['navigator']['msPointerEnabled'] && (ig['system']['canvas']['addEventListener']('MSPointerDown', this['touchdown']['bind'](this), !0x1),
            ig['system']['canvas']['addEventListener']('MSPointerUp', this['touchup']['bind'](this), !0x1),
            ig['system']['canvas']['addEventListener']('MSPointerMove', this['touchmove']['bind'](this), !0x1),
            ig['system']['canvas']['style']['msContentZooming'] = 'none',
            ig['system']['canvas']['style']['msTouchAction'] = 'none'),
            ig['system']['canvas']['addEventListener']('touchstart', this['touchdown']['bind'](this), !0x1),
            ig['system']['canvas']['addEventListener']('touchend', this['touchup']['bind'](this), !0x1),
            ig['system']['canvas']['addEventListener']('touchmove', this['touchmove']['bind'](this), !0x1)));
        },
        'touchmove': function(_0x784ddd) {
            if (ig['ua']['touchDevice']) {
                var _0xe4f382 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth']
                  , _0x4a98fb = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight']
                  , _0xe4f382 = ig['system']['scale'] * (_0xe4f382 / ig['system']['realWidth'])
                  , _0x4a98fb = ig['system']['scale'] * (_0x4a98fb / ig['system']['realHeight']);
                if (_0x784ddd['touches']) {
                    for (; 0x0 < this['touches']['length']; )
                        this['touches']['pop']();
                    !this['multitouchCapable'] && 0x1 < _0x784ddd['touches']['length'] && (this['multitouchCapable'] = !0x0);
                    var _0xb8095d = {
                        'left': 0x0,
                        'top': 0x0
                    };
                    ig['system']['canvas']['getBoundingClientRect'] && (_0xb8095d = ig['system']['canvas']['getBoundingClientRect']());
                    for (var _0x3983df = 0x0; _0x3983df < _0x784ddd['touches']['length']; _0x3983df++) {
                        var _0x4b3e75 = _0x784ddd['touches'][_0x3983df];
                        _0x4b3e75 && this['touches']['push']({
                            'x': (_0x4b3e75['clientX'] - _0xb8095d['left']) / _0xe4f382,
                            'y': (_0x4b3e75['clientY'] - _0xb8095d['top']) / _0x4a98fb
                        });
                    }
                } else
                    this['windowMove'](_0x784ddd);
            }
            try {
                ig['soundHandler']['unlockWebAudio']();
            } catch (_0x26e3d3) {}
        },
        'touchdown': function(_0x25af19) {
            var _0x1fa631 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth']
              , _0x243bcd = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight']
              , _0x1fa631 = ig['system']['scale'] * (_0x1fa631 / ig['system']['realWidth'])
              , _0x243bcd = ig['system']['scale'] * (_0x243bcd / ig['system']['realHeight']);
            if (window['navigator']['msPointerEnabled'])
                this['windowKeyDown'](_0x25af19);
            else {
                if (ig['ua']['touchDevice'] && _0x25af19['touches']) {
                    for (; 0x0 < this['touches']['length']; )
                        this['touches']['pop']();
                    !this['multitouchCapable'] && 0x1 < _0x25af19['touches']['length'] && (this['multitouchCapable'] = !0x0);
                    var _0x2d0b68 = {
                        'left': 0x0,
                        'top': 0x0
                    };
                    ig['system']['canvas']['getBoundingClientRect'] && (_0x2d0b68 = ig['system']['canvas']['getBoundingClientRect']());
                    for (var _0x17deb8 = 0x0; _0x17deb8 < _0x25af19['touches']['length']; _0x17deb8++) {
                        var _0x700150 = _0x25af19['touches'][_0x17deb8];
                        _0x700150 && this['touches']['push']({
                            'x': (_0x700150['clientX'] - _0x2d0b68['left']) / _0x1fa631,
                            'y': (_0x700150['clientY'] - _0x2d0b68['top']) / _0x243bcd
                        });
                    }
                }
            }
        },
        'touchup': function(_0x569d11) {
            var _0x192422 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'];
            parseInt(ig['system']['canvas']['offsetHeight']),
            _0x192422 = ig['system']['scale'] * (_0x192422 / ig['system']['realWidth']);
            if (window['navigator']['msPointerEnabled'])
                this['windowKeyUp'](_0x569d11);
            else {
                this['lastEventUp'] = _0x569d11;
                var _0xf64a07 = {
                    'left': 0x0,
                    'top': 0x0
                };
                ig['system']['canvas']['getBoundingClientRect'] && (_0xf64a07 = ig['system']['canvas']['getBoundingClientRect']());
                if (ig['ua']['touchDevice']) {
                    _0x569d11 = (_0x569d11['changedTouches'][0x0]['clientX'] - _0xf64a07['left']) / _0x192422;
                    for (_0x192422 = 0x0; _0x192422 < this['touches']['length']; _0x192422++)
                        this['touches'][_0x192422]['x'] >= _0x569d11 - 0x28 && this['touches'][_0x192422]['x'] <= _0x569d11 + 0x28 && this['touches']['splice'](_0x192422, 0x1);
                }
            }
            ig['visibilityHandler']['onChange']('focus');
            try {
                ig['soundHandler']['unlockWebAudio']();
            } catch (_0x1d432e) {}
        },
        'windowKeyDown': function(_0x165e94) {
            var _0x575e17 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth']
              , _0x59bb6c = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight']
              , _0x575e17 = ig['system']['scale'] * (_0x575e17 / ig['system']['realWidth'])
              , _0x59bb6c = ig['system']['scale'] * (_0x59bb6c / ig['system']['realHeight']);
            if (window['navigator']['msPointerEnabled']) {
                var _0x223f1c = {
                    'left': 0x0,
                    'top': 0x0
                };
                ig['system']['canvas']['getBoundingClientRect'] && (_0x223f1c = ig['system']['canvas']['getBoundingClientRect']()),
                _0x165e94 = _0x165e94['changedTouches'] ? _0x165e94['changedTouches'] : [_0x165e94];
                for (var _0xf799a1 = 0x0; _0xf799a1 < _0x165e94['length']; ++_0xf799a1) {
                    for (var _0x2763fa = _0x165e94[_0xf799a1], _0x291cb9 = 'undefined' != typeof _0x2763fa['identifier'] ? _0x2763fa['identifier'] : 'undefined' != typeof _0x2763fa['pointerId'] ? _0x2763fa['pointerId'] : 0x1, _0x276326 = (_0x2763fa['clientX'] - _0x223f1c['left']) / _0x575e17, _0x2763fa = (_0x2763fa['clientY'] - _0x223f1c['top']) / _0x59bb6c, _0x446496 = 0x0; _0x446496 < this['touches']['length']; ++_0x446496)
                        this['touches'][_0x446496]['identifier'] == _0x291cb9 && this['touches']['splice'](_0x446496, 0x1);
                    this['touches']['push']({
                        'x': _0x276326,
                        'y': _0x2763fa,
                        'identifier': _0x291cb9
                    });
                }
                for (_0x575e17 = 0x0; _0x575e17 < this['touches']['length']; _0x575e17++)
                    ;
            }
        },
        'windowKeyUp': function(_0x50b22b) {
            _0x50b22b = 'undefined' != typeof _0x50b22b['identifier'] ? _0x50b22b['identifier'] : 'undefined' != typeof _0x50b22b['pointerId'] ? _0x50b22b['pointerId'] : 0x1;
            for (var _0x2ff41f = 0x0; _0x2ff41f < this['touches']['length']; ++_0x2ff41f)
                this['touches'][_0x2ff41f]['identifier'] == _0x50b22b && this['touches']['splice'](_0x2ff41f, 0x1);
            for (; 0x0 < this['touches']['length']; )
                this['touches']['pop']();
            ig['visibilityHandler']['onChange']('focus');
            try {
                ig['soundHandler']['unlockWebAudio']();
            } catch (_0x7cf443) {}
        },
        'windowMove': function(_0x261961) {
            var _0x1ea9f2 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth']
              , _0x2a2fb5 = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight']
              , _0x1ea9f2 = ig['system']['scale'] * (_0x1ea9f2 / ig['system']['realWidth'])
              , _0x2a2fb5 = ig['system']['scale'] * (_0x2a2fb5 / ig['system']['realHeight'])
              , _0x37f587 = {
                'left': 0x0,
                'top': 0x0
            };
            ig['system']['canvas']['getBoundingClientRect'] && (_0x37f587 = ig['system']['canvas']['getBoundingClientRect']());
            if (window['navigator']['msPointerEnabled'])
                for (var _0x32978a = 'undefined' != typeof _0x261961['identifier'] ? _0x261961['identifier'] : 'undefined' != typeof _0x261961['pointerId'] ? _0x261961['pointerId'] : 0x1, _0x1928c7 = 0x0; _0x1928c7 < this['touches']['length']; ++_0x1928c7)
                    if (this['touches'][_0x1928c7]['identifier'] == _0x32978a) {
                        var _0x5625fc = (_0x261961['clientY'] - _0x37f587['top']) / _0x2a2fb5;
                        this['touches'][_0x1928c7]['x'] = (_0x261961['clientX'] - _0x37f587['left']) / _0x1ea9f2,
                        this['touches'][_0x1928c7]['y'] = _0x5625fc;
                    }
            try {
                ig['soundHandler']['unlockWebAudio']();
            } catch (_0x4de6bc) {}
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.io.fake-storage')['requires']('impact.game')['defines'](function() {
    ig['FakeStorage'] = ig['Class']['extend']({
        'tempData': {},
        'init': function() {
            ig['FakeStorage']['instance'] = this;
        },
        'initUnset': function(_0x3ae4aa, _0x521716) {
            null === this['get'](_0x3ae4aa) && this['set'](_0x3ae4aa, _0x521716);
        },
        'set': function(_0x56b69b, _0x29650b) {
            this['tempData'][_0x56b69b] = JSON['stringify'](_0x29650b);
        },
        'setHighest': function(_0x2a87e1, _0x5f53c9) {
            _0x5f53c9 > this['getFloat'](_0x2a87e1) && this['set'](_0x2a87e1, _0x5f53c9);
        },
        'get': function(_0x462d7f) {
            return 'undefined' == typeof this['tempData'][_0x462d7f] ? null : JSON['parse'](this['tempData'][_0x462d7f]);
        },
        'getInt': function(_0x2454af) {
            return ~~this['get'](_0x2454af);
        },
        'getFloat': function(_0x181397) {
            return parseFloat(this['get'](_0x181397));
        },
        'getBool': function(_0x7214f1) {
            return !!this['get'](_0x7214f1);
        },
        'isSet': function(_0x5ef301) {
            return null !== this['get'](_0x5ef301);
        },
        'remove': function(_0x3d930e) {
            delete this['tempData'][_0x3d930e];
        },
        'clear': function() {
            this['tempData'] = {};
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.io.io-manager')['requires']('plugins.io.storage', 'plugins.io.mouse', 'plugins.io.keyboard', 'plugins.io.gamepad', 'plugins.io.multitouch', 'plugins.io.multitouch-input', 'plugins.io.gamepad-input', 'plugins.io.fake-storage')['defines'](function() {
    IoManager = ig['Class']['extend']({
        'storage': null,
        'localStorageSupport': !0x1,
        'mouse': null,
        'keyboard': null,
        'multitouch': null,
        'gamepad': null,
        'init': function() {
            ig['multitouchInput'] = new ig['MultitouchInput'](),
            ig['gamepadInput'] = new ig['GamepadInput'](),
            this['unbindAll'](),
            this['initStorage'](),
            this['initMouse'](),
            this['initKeyboard']();
        },
        'unbindAll': function() {
            ig['input']['unbindAll'](),
            ig['gamepadInput']['unbindAll']();
        },
        'initStorage': function() {
            try {
                window['localStorage']['setItem']('test', 'test'),
                this['storage'] = new ig['Storage'](),
                window['localStorage']['removeItem']('test');
            } catch (_0x47d23a) {
                console['log']('using\x20fake\x20storage'),
                this['storage'] = new ig['FakeStorage']();
            }
        },
        'initMouse': function() {
            this['mouse'] = new Mouse();
        },
        'initKeyboard': function() {
            this['keyboard'] = new Keyboard();
        },
        'initMultitouch': function() {
            this['multitouch'] = new Multitouch();
        },
        'initGamepad': function() {
            this['gamepad'] = new Gamepad();
        },
        'press': function(_0x1e1ecb) {
            return ig['input']['pressed'](_0x1e1ecb) || this['gamepad'] && this['gamepad']['press'](_0x1e1ecb) ? !0x0 : !0x1;
        },
        'held': function(_0x2eb179) {
            return ig['input']['state'](_0x2eb179) || this['gamepad'] && this['gamepad']['state'](_0x2eb179) ? !0x0 : !0x1;
        },
        'release': function(_0x26d5c8) {
            return ig['input']['released'](_0x26d5c8) || this['gamepad'] && this['gamepad']['released'](_0x26d5c8) ? !0x0 : !0x1;
        },
        'getClickPos': function() {
            return this['mouse']['getPos']();
        },
        'getTouchesPos': function() {
            return this['multitouch']['getTouchesPos']();
        },
        'checkOverlap': function(_0x291d80, _0x2614ed, _0x1dcde4, _0x3fb4d8, _0x2fa588) {
            return _0x291d80['x'] > _0x2614ed + _0x3fb4d8 || _0x291d80['x'] < _0x2614ed || _0x291d80['y'] > _0x1dcde4 + _0x2fa588 || _0x291d80['y'] < _0x1dcde4 ? !0x1 : !0x0;
        },
        '_supportsLocalStorage': function() {
            try {
                return localStorage['setItem']('test', 'test'),
                localStorage['removeItem']('test'),
                this['localStorageSupport'] = 'localStorage'in window && null !== window['localStorage'];
            } catch (_0x2251d1) {
                return this['localStorageSupport'];
            }
        },
        'storageIsSet': function(_0x155238) {
            return !this['localStorageSupport'] ? null : this['storage']['isSet'](_0x155238);
        },
        'storageGet': function(_0x1dc7fa) {
            return !this['localStorageSupport'] ? null : this['storage']['get'](_0x1dc7fa);
        },
        'storageSet': function(_0x5193ef, _0x4f2a26) {
            if (!this['localStorageSupport'])
                return null;
            this['storage']['set'](_0x5193ef, _0x4f2a26);
        },
        'assert': function(_0xfd8d27, _0x4d7dc4, _0xdba248) {
            if (_0x4d7dc4 !== _0xdba248)
                throw 'actualValue:' + _0x4d7dc4 + '\x20not\x20equal\x20to\x20testValue:' + _0xdba248 + '\x20at\x20' + _0xfd8d27;
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.io.storage-manager')['requires']('impact.game', 'plugins.io.io-manager')['defines'](function() {
    ig['Game']['prototype']['name'] = 'MJS-Game',
    ig['Game']['prototype']['version'] = '1.0.0',
    ig['Game']['prototype']['sessionData'] = {},
    ig['Game']['prototype']['initData'] = function() {
        return this['sessionData'] = {
            'sound': 0.5,
            'music': 0.5,
            'level': 0x1,
            'score': 0x0,
            'tutorial': !0x0
        };
    }
    ,
    ig['Game']['prototype']['setupStorageManager'] = function() {
        'undefined' === typeof this['name'] ? console['error']('Cannot\x20found\x20Game\x20Name,\x20Storage\x20Manager\x20Cancelled.') : 'undefined' === typeof this['version'] ? console['error']('Cannot\x20found\x20Game\x20Version,\x20Storage\x20Manager\x20Cancelled.') : (this['io'] || (this['io'] = new IoManager(),
        console['log']('IO\x20Manager\x20doesn\x27t\x20existed.\x20Initialize...')),
        console['log']('Plug\x20in\x20Storage\x20Manager'),
        this['storage'] = this['io']['storage'],
        this['storageName'] = this['name'] + '-v' + this['version'],
        this['loadAll']());
    }
    ,
    ig['Game']['prototype']['loadAll'] = function() {
        var _0x23f91d = this['storage']['get'](this['storageName']);
        if (null === _0x23f91d || 'undefined' === typeof _0x23f91d)
            _0x23f91d = this['initData']();
        for (var _0x75c301 in _0x23f91d)
            this['sessionData'][_0x75c301] = _0x23f91d[_0x75c301];
        this['storage']['set'](this['storageName'], _0x23f91d);
    }
    ,
    ig['Game']['prototype']['saveAll'] = function() {
        var _0x23a168 = this['storage']['get'](this['storageName']), _0x516aa6;
        for (_0x516aa6 in _0x23a168)
            _0x23a168[_0x516aa6] = this['sessionData'][_0x516aa6];
        this['storage']['set'](this['storageName'], _0x23a168);
    }
    ,
    ig['Game']['prototype']['load'] = function(_0x1fa5e4) {
        return this['storage']['get'](this['storageName'])[_0x1fa5e4];
    }
    ,
    ig['Game']['prototype']['save'] = function(_0x59593f, _0x467bdf) {
        var _0x2d65d1 = this['storage']['get'](this['storageName']);
        _0x2d65d1[_0x59593f] = _0x467bdf,
        this['storage']['set'](this['storageName'], _0x2d65d1);
    }
    ;
}),
ig['baked'] = !0x0,
ig['module']('game.entities.text.loading')['requires']('impact.entity')['defines'](function() {
    EntityTextLoading = ig['Entity']['extend']({
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/text/loading.png',0xca,0x2b),
        'size': {
            'x': 0xca,
            'y': 0x2b
        },
        'init': function(_0x371fc0, _0x3cd50f, _0x4297e4) {
            this['parent'](_0x371fc0, _0x3cd50f, _0x4297e4),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'update': function() {
            this['parent']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.splash-loader')['requires']('impact.loader', 'impact.animation', 'impact.entity', 'game.entities.text.loading')['defines'](function() {
    ig['SplashLoader'] = ig['Loader']['extend']({
        'tapToStartDivId': 'tap-to-start',
        'bg': new ig['Image']('media/graphics/sprites/background/background.png'),
        'splashDesktop': new ig['Image']('media/graphics/splash/desktop/title.png'),
        'splashMobile': new ig['Image']('media/graphics/splash/mobile/title.png'),
        'loadingFrameImage': new ig['Image']('media/graphics/sprites/loading/loading-frame.png'),
        'loadingBarImage': new ig['Image']('media/graphics/sprites/loading/loading-bar.png'),
        'loadingImage': new ig['Image']('media/graphics/sprites/loading/loading.png'),
        'loadingBarSize': {
            'x': 0x12f,
            'y': 0x2c
        },
        'loadingImageSize': {
            'x': 0xca,
            'y': 0x2b
        },
        'init': function(_0x1746ca, _0x19aaae) {
            this['parent'](_0x1746ca, _0x19aaae),
            ig['apiHandler']['run']('MJSPreroll');
            try {
                ig['poki']['startLoading']();
            } catch (_0x33f07e) {}
        },
        'end': function() {
            this['parent'](),
            this['_drawStatus'] = 0x1;
            try {
                ig['poki']['finishedLoading']();
            } catch (_0x555c28) {}
            this['draw'](),
            _SETTINGS['TapToStartAudioUnlock']['Enabled'] ? this['tapToStartDiv'](function() {
                ig['system']['setGame'](MyGame);
            }) : ig['system']['setGame'](MyGame);
        },
        'tapToStartDiv': function(_0x46de7c) {
            this['desktopCoverDIV'] = document['getElementById'](this['tapToStartDivId']);
            if (!this['desktopCoverDIV']) {
                this['desktopCoverDIV'] = document['createElement']('div'),
                this['desktopCoverDIV']['id'] = this['tapToStartDivId'],
                this['desktopCoverDIV']['setAttribute']('class', 'play'),
                this['desktopCoverDIV']['setAttribute']('style', 'position:\x20absolute;\x20display:\x20block;\x20z-index:\x20999999;\x20background-color:\x20rgba(23,\x2032,\x2053,\x200.7);\x20visibility:\x20visible;\x20font-size:\x2010vmin;\x20text-align:\x20center;\x20vertical-align:\x20middle;\x20-webkit-touch-callout:\x20none;\x20-webkit-user-select:\x20none;\x20-khtml-user-select:\x20none;\x20-moz-user-select:\x20none;\x20-ms-user-select:\x20none;\x20user-select:\x20none;'),
                this['desktopCoverDIV']['innerHTML'] = '<div\x20style=\x27color:white;background-color:\x20rgba(255,\x20255,\x20255,\x200.3);\x20border:\x202px\x20solid\x20#fff;\x20font-size:20px;\x20border-radius:\x205px;\x20position:\x20relative;\x20float:\x20left;\x20top:\x2050%;\x20left:\x2050%;\x20transform:\x20translate(-50%,\x20-50%);\x27><div\x20style=\x27padding:20px\x2050px;\x20font-family:\x20montserrat;\x27>' + _STRINGS['Splash']['TapToStart'] + '</div></div>',
                (document['getElementById']('play')['parentNode'] || document['getElementById']('ajaxbar'))['appendChild'](this['desktopCoverDIV']);
                try {
                    'undefined' !== typeof ig['sizeHandler'] ? 'undefined' !== typeof ig['sizeHandler']['coreDivsToResize'] && (ig['sizeHandler']['coreDivsToResize']['push']('#' + this['tapToStartDivId']),
                    'function' === typeof ig['sizeHandler']['reorient'] && ig['sizeHandler']['reorient']()) : 'undefined' !== typeof coreDivsToResize && (coreDivsToResize['push'](this['tapToStartDivId']),
                    'function' === typeof sizeHandler && sizeHandler());
                } catch (_0x2edee4) {
                    console['log'](_0x2edee4);
                }
                this['desktopCoverDIV']['addEventListener']('click', function() {
                    ig['soundHandler']['unlockWebAudio'](),
                    this['setAttribute']('style', 'visibility:\x20hidden;'),
                    'function' === typeof _0x46de7c && _0x46de7c();
                });
            }
        },
        'setupCustomAnimation': function() {
            this['animHeight'] = this['customAnim']['height'],
            this['animWidth'] = this['customAnim']['width'],
            this['customAnim'] = new ig['Animation'](this['customAnim'],0.025,[0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]);
        },
        'animate': function() {
            ig['Timer']['step'](),
            this['customAnim']['update']();
        },
        'drawCheck': 0x0,
        'draw': function() {
            this['_drawStatus'] += (this['status'] - this['_drawStatus']) / 0x5,
            0x1 <= this['_drawStatus'] && 1.5 >= this['_drawStatus'] && (this['_drawStatus'] += 0.1);
            try {
                ig['poki']['progressLoading'](this['status']);
            } catch (_0x3f9e1c) {}
            0x1 === this['drawCheck'] && console['log']('Font\x20should\x20be\x20loaded\x20before\x20loader\x20draw\x20loop'),
            0x2 > this['drawCheck'] && this['drawCheck']++,
            ig['system']['context']['fillStyle'] = '#000',
            ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']);
            var _0x8cb411, _0x4154ba;
            _0x4154ba = ig['responsive']['toAnchor'](0x0, 0x0, 'center-middle');
            var _0x3a0ab6 = ig['responsive']['fillScale'];
            _0x8cb411 = 0.5 * ig['responsive']['width'] - this['loadingBarSize']['x'] / 0x2,
            ig['responsive']['drawScaledImage'](this['bg'], _0x4154ba['x'], _0x4154ba['y'], _0x3a0ab6, 0x2 * _0x3a0ab6, 0.5, 0.5),
            ig['ua']['mobile'] ? (this['splashMobile']['draw'](_0x4154ba['x'] - 0.5 * this['splashMobile']['width'], _0x4154ba['y'] - this['splashMobile']['height']),
            _0x4154ba = _0x4154ba['y'] - 0.5 * this['splashMobile']['height'] + this['splashMobile']['height']) : (ig['system']['width'] > ig['system']['height'] ? ig['responsive']['drawScaledImage'](this['splashDesktop'], _0x4154ba['x'], _0x4154ba['y'] - 0x64, 0.5 * _0x3a0ab6, 0.5 * _0x3a0ab6, 0.5, 0.5) : ig['responsive']['drawScaledImage'](this['splashDesktop'], _0x4154ba['x'], _0x4154ba['y'] - 0x64, 0x1 * _0x3a0ab6, 0x1 * _0x3a0ab6, 0.5, 0.5),
            _0x4154ba = _0x4154ba['y'] + this['splashDesktop']['height'] - this['splashDesktop']['height'] / 0x5),
            this['loadingFrameImage']['draw'](_0x8cb411, _0x4154ba, 0x0, 0x0, this['loadingBarSize']['x'], this['loadingBarSize']['y']),
            this['loadingBarImage']['draw'](_0x8cb411 + 0xa, _0x4154ba + 0x9, 0x0, 0x0, this['loadingBarSize']['x'] * this['_drawStatus'], this['loadingBarSize']['y']),
            this['loadingImage']['draw'](0.5 * ig['responsive']['width'] - this['loadingImageSize']['x'] / 0x2, _0x4154ba + 0x64, 0x0, 0x0, this['loadingImageSize']['x'], this['loadingImageSize']['y']);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.tween')['requires']('impact.entity')['defines'](function() {
    Array['prototype']['indexOf'] || (Array['prototype']['indexOf'] = function(_0x279670) {
        for (var _0x27d4f7 = 0x0; _0x27d4f7 < this['length']; ++_0x27d4f7)
            if (this[_0x27d4f7] === _0x279670)
                return _0x27d4f7;
        return -0x1;
    }
    ),
    ig['Entity']['prototype']['tweens'] = [],
    ig['Entity']['prototype']['_preTweenUpdate'] = ig['Entity']['prototype']['update'],
    ig['Entity']['prototype']['update'] = function() {
        this['_preTweenUpdate']();
        if (0x0 < this['tweens']['length']) {
            for (var _0x5274c0 = [], _0x5a8472 = 0x0; _0x5a8472 < this['tweens']['length']; _0x5a8472++)
                this['tweens'][_0x5a8472]['update'](),
                this['tweens'][_0x5a8472]['complete'] || _0x5274c0['push'](this['tweens'][_0x5a8472]);
            this['tweens'] = _0x5274c0;
        }
    }
    ,
    ig['Entity']['prototype']['tween'] = function(_0x37bf6d, _0x43326d, _0x2eedfd) {
        return _0x37bf6d = new ig['Tween'](this,_0x37bf6d,_0x43326d,_0x2eedfd),
        this['tweens']['push'](_0x37bf6d),
        _0x37bf6d;
    }
    ,
    ig['Entity']['prototype']['pauseTweens'] = function() {
        for (var _0x1ff250 = 0x0; _0x1ff250 < this['tweens']['length']; _0x1ff250++)
            this['tweens'][_0x1ff250]['pause']();
    }
    ,
    ig['Entity']['prototype']['resumeTweens'] = function() {
        for (var _0x1fa8c4 = 0x0; _0x1fa8c4 < this['tweens']['length']; _0x1fa8c4++)
            this['tweens'][_0x1fa8c4]['resume']();
    }
    ,
    ig['Entity']['prototype']['stopTweens'] = function(_0x13f9ce) {
        for (var _0xe4f035 = 0x0; _0xe4f035 < this['tweens']['length']; _0xe4f035++)
            this['tweens'][_0xe4f035]['stop'](_0x13f9ce);
    }
    ,
    ig['Tween'] = function(_0x7b5cdb, _0x5343b5, _0xa6f70, _0x23edc0) {
        var _0x2b70fd = {}
          , _0x3339a8 = {}
          , _0xd75d79 = {}
          , _0x22c24e = 0x0
          , _0x49f596 = !0x1
          , _0xb12d30 = !0x1
          , _0x3233ca = !0x1;
        this['duration'] = _0xa6f70,
        this['paused'] = this['complete'] = !0x1,
        this['easing'] = ig['Tween']['Easing']['Linear']['EaseNone'],
        this['onComplete'] = !0x1,
        this['loop'] = this['delay'] = 0x0,
        this['loopCount'] = -0x1,
        ig['merge'](this, _0x23edc0),
        this['loopNum'] = this['loopCount'],
        this['chain'] = function(_0x161c28) {
            _0x3233ca = _0x161c28;
        }
        ,
        this['initEnd'] = function(_0x55b2b8, _0x486f97, _0x365391) {
            if ('object' !== typeof _0x486f97[_0x55b2b8])
                _0x365391[_0x55b2b8] = _0x486f97[_0x55b2b8];
            else
                for (subprop in _0x486f97[_0x55b2b8])
                    _0x365391[_0x55b2b8] || (_0x365391[_0x55b2b8] = {}),
                    this['initEnd'](subprop, _0x486f97[_0x55b2b8], _0x365391[_0x55b2b8]);
        }
        ,
        this['initStart'] = function(_0x3ecc15, _0x43ec2f, _0x2a7999, _0x5ed968) {
            if ('object' !== typeof _0x2a7999[_0x3ecc15])
                'undefined' !== typeof _0x43ec2f[_0x3ecc15] && (_0x5ed968[_0x3ecc15] = _0x2a7999[_0x3ecc15]);
            else
                for (subprop in _0x2a7999[_0x3ecc15])
                    _0x5ed968[_0x3ecc15] || (_0x5ed968[_0x3ecc15] = {}),
                    'undefined' !== typeof _0x43ec2f[_0x3ecc15] && this['initStart'](subprop, _0x43ec2f[_0x3ecc15], _0x2a7999[_0x3ecc15], _0x5ed968[_0x3ecc15]);
        }
        ,
        this['start'] = function() {
            this['paused'] = this['complete'] = !0x1,
            this['loopNum'] = this['loopCount'],
            _0x22c24e = 0x0,
            -0x1 == _0x7b5cdb['tweens']['indexOf'](this) && _0x7b5cdb['tweens']['push'](this),
            _0xb12d30 = !0x0,
            _0x49f596 = new ig['Timer']();
            for (var _0x1be606 in _0x5343b5)
                this['initEnd'](_0x1be606, _0x5343b5, _0x3339a8);
            for (_0x1be606 in _0x3339a8)
                this['initStart'](_0x1be606, _0x3339a8, _0x7b5cdb, _0x2b70fd),
                this['initDelta'](_0x1be606, _0xd75d79, _0x7b5cdb, _0x3339a8);
        }
        ,
        this['initDelta'] = function(_0x1724ea, _0x2b73d0, _0x192d97, _0x2728d5) {
            if ('object' !== typeof _0x2728d5[_0x1724ea])
                _0x2b73d0[_0x1724ea] = _0x2728d5[_0x1724ea] - _0x192d97[_0x1724ea];
            else
                for (subprop in _0x2728d5[_0x1724ea])
                    _0x2b73d0[_0x1724ea] || (_0x2b73d0[_0x1724ea] = {}),
                    this['initDelta'](subprop, _0x2b73d0[_0x1724ea], _0x192d97[_0x1724ea], _0x2728d5[_0x1724ea]);
        }
        ,
        this['propUpdate'] = function(_0x40a929, _0x4700ab, _0x4bc9f9, _0x1b8a51, _0xa75492) {
            if ('object' !== typeof _0x4bc9f9[_0x40a929])
                _0x4700ab[_0x40a929] = 'undefined' != typeof _0x4bc9f9[_0x40a929] ? _0x4bc9f9[_0x40a929] + _0x1b8a51[_0x40a929] * _0xa75492 : _0x4700ab[_0x40a929];
            else
                for (subprop in _0x4bc9f9[_0x40a929])
                    this['propUpdate'](subprop, _0x4700ab[_0x40a929], _0x4bc9f9[_0x40a929], _0x1b8a51[_0x40a929], _0xa75492);
        }
        ,
        this['propSet'] = function(_0x80c759, _0x27184b, _0x2772e7) {
            if ('object' !== typeof _0x27184b[_0x80c759])
                _0x2772e7[_0x80c759] = _0x27184b[_0x80c759];
            else
                for (subprop in _0x27184b[_0x80c759])
                    _0x2772e7[_0x80c759] || (_0x2772e7[_0x80c759] = {}),
                    this['propSet'](subprop, _0x27184b[_0x80c759], _0x2772e7[_0x80c759]);
        }
        ,
        this['update'] = function() {
            if (!_0xb12d30)
                return !0x1;
            if (this['delay']) {
                if (_0x49f596['delta']() < this['delay'])
                    return;
                this['delay'] = 0x0,
                _0x49f596['reset']();
            }
            if (this['paused'] || this['complete'])
                return !0x1;
            var _0x39833e = (_0x49f596['delta']() + _0x22c24e) / this['duration']
              , _0x39833e = 0x1 < _0x39833e ? 0x1 : _0x39833e
              , _0x301746 = this['easing'](_0x39833e);
            for (property in _0xd75d79)
                this['propUpdate'](property, _0x7b5cdb, _0x2b70fd, _0xd75d79, _0x301746);
            if (0x1 <= _0x39833e) {
                if (0x0 == this['loopNum'] || !this['loop']) {
                    this['complete'] = !0x0;
                    if (this['onComplete'])
                        this['onComplete']();
                    return _0x3233ca && _0x3233ca['start'](),
                    !0x1;
                }
                if (this['loop'] == ig['Tween']['Loop']['Revert']) {
                    for (property in _0x2b70fd)
                        this['propSet'](property, _0x2b70fd, _0x7b5cdb);
                    _0x22c24e = 0x0,
                    _0x49f596['reset'](),
                    -0x1 != this['loopNum'] && this['loopNum']--;
                } else {
                    if (this['loop'] == ig['Tween']['Loop']['Reverse']) {
                        _0x39833e = {},
                        _0x301746 = {},
                        ig['merge'](_0x39833e, _0x3339a8),
                        ig['merge'](_0x301746, _0x2b70fd),
                        ig['merge'](_0x2b70fd, _0x39833e),
                        ig['merge'](_0x3339a8, _0x301746);
                        for (property in _0x3339a8)
                            this['initDelta'](property, _0xd75d79, _0x7b5cdb, _0x3339a8);
                        _0x22c24e = 0x0,
                        _0x49f596['reset'](),
                        -0x1 != this['loopNum'] && this['loopNum']--;
                    }
                }
            }
        }
        ,
        this['pause'] = function() {
            this['paused'] = !0x0,
            _0x49f596 && _0x49f596['delta'] && (_0x22c24e += _0x49f596['delta']());
        }
        ,
        this['resume'] = function() {
            this['paused'] = !0x1,
            _0x49f596 && _0x49f596['reset'] && _0x49f596['reset']();
        }
        ,
        this['stop'] = function(_0x1a6b0e) {
            _0x1a6b0e && (this['loop'] = this['complete'] = this['paused'] = !0x1,
            _0x22c24e += _0xa6f70,
            this['update']()),
            this['complete'] = !0x0;
        }
        ;
    }
    ,
    ig['Tween']['Loop'] = {
        'Revert': 0x1,
        'Reverse': 0x2
    },
    ig['Tween']['Easing'] = {
        'Linear': {},
        'Quadratic': {},
        'Cubic': {},
        'Quartic': {},
        'Quintic': {},
        'Sinusoidal': {},
        'Exponential': {},
        'Circular': {},
        'Elastic': {},
        'Back': {},
        'Bounce': {}
    },
    ig['Tween']['Easing']['Linear']['EaseNone'] = function(_0x3786fd) {
        return _0x3786fd;
    }
    ,
    ig['Tween']['Easing']['Quadratic']['EaseIn'] = function(_0x34d8b5) {
        return _0x34d8b5 * _0x34d8b5;
    }
    ,
    ig['Tween']['Easing']['Quadratic']['EaseOut'] = function(_0x483733) {
        return -_0x483733 * (_0x483733 - 0x2);
    }
    ,
    ig['Tween']['Easing']['Quadratic']['EaseInOut'] = function(_0x322c97) {
        return 0x1 > (_0x322c97 *= 0x2) ? 0.5 * _0x322c97 * _0x322c97 : -0.5 * (--_0x322c97 * (_0x322c97 - 0x2) - 0x1);
    }
    ,
    ig['Tween']['Easing']['Cubic']['EaseIn'] = function(_0x7a0122) {
        return _0x7a0122 * _0x7a0122 * _0x7a0122;
    }
    ,
    ig['Tween']['Easing']['Cubic']['EaseOut'] = function(_0x2611bd) {
        return --_0x2611bd * _0x2611bd * _0x2611bd + 0x1;
    }
    ,
    ig['Tween']['Easing']['Cubic']['EaseInOut'] = function(_0x34749f) {
        return 0x1 > (_0x34749f *= 0x2) ? 0.5 * _0x34749f * _0x34749f * _0x34749f : 0.5 * ((_0x34749f -= 0x2) * _0x34749f * _0x34749f + 0x2);
    }
    ,
    ig['Tween']['Easing']['Quartic']['EaseIn'] = function(_0x3d1edc) {
        return _0x3d1edc * _0x3d1edc * _0x3d1edc * _0x3d1edc;
    }
    ,
    ig['Tween']['Easing']['Quartic']['EaseOut'] = function(_0x3c5a83) {
        return -(--_0x3c5a83 * _0x3c5a83 * _0x3c5a83 * _0x3c5a83 - 0x1);
    }
    ,
    ig['Tween']['Easing']['Quartic']['EaseInOut'] = function(_0x144a3f) {
        return 0x1 > (_0x144a3f *= 0x2) ? 0.5 * _0x144a3f * _0x144a3f * _0x144a3f * _0x144a3f : -0.5 * ((_0x144a3f -= 0x2) * _0x144a3f * _0x144a3f * _0x144a3f - 0x2);
    }
    ,
    ig['Tween']['Easing']['Quintic']['EaseIn'] = function(_0x3a4ed5) {
        return _0x3a4ed5 * _0x3a4ed5 * _0x3a4ed5 * _0x3a4ed5 * _0x3a4ed5;
    }
    ,
    ig['Tween']['Easing']['Quintic']['EaseOut'] = function(_0xe2c095) {
        return (_0xe2c095 -= 0x1) * _0xe2c095 * _0xe2c095 * _0xe2c095 * _0xe2c095 + 0x1;
    }
    ,
    ig['Tween']['Easing']['Quintic']['EaseInOut'] = function(_0x15f3e8) {
        return 0x1 > (_0x15f3e8 *= 0x2) ? 0.5 * _0x15f3e8 * _0x15f3e8 * _0x15f3e8 * _0x15f3e8 * _0x15f3e8 : 0.5 * ((_0x15f3e8 -= 0x2) * _0x15f3e8 * _0x15f3e8 * _0x15f3e8 * _0x15f3e8 + 0x2);
    }
    ,
    ig['Tween']['Easing']['Sinusoidal']['EaseIn'] = function(_0x56713e) {
        return -Math['cos'](_0x56713e * Math['PI'] / 0x2) + 0x1;
    }
    ,
    ig['Tween']['Easing']['Sinusoidal']['EaseOut'] = function(_0x4da24e) {
        return Math['sin'](_0x4da24e * Math['PI'] / 0x2);
    }
    ,
    ig['Tween']['Easing']['Sinusoidal']['EaseInOut'] = function(_0x320a9f) {
        return -0.5 * (Math['cos'](Math['PI'] * _0x320a9f) - 0x1);
    }
    ,
    ig['Tween']['Easing']['Exponential']['EaseIn'] = function(_0xb341d3) {
        return 0x0 == _0xb341d3 ? 0x0 : Math['pow'](0x2, 0xa * (_0xb341d3 - 0x1));
    }
    ,
    ig['Tween']['Easing']['Exponential']['EaseOut'] = function(_0x5d2941) {
        return 0x1 == _0x5d2941 ? 0x1 : -Math['pow'](0x2, -0xa * _0x5d2941) + 0x1;
    }
    ,
    ig['Tween']['Easing']['Exponential']['EaseInOut'] = function(_0x596c3e) {
        return 0x0 == _0x596c3e ? 0x0 : 0x1 == _0x596c3e ? 0x1 : 0x1 > (_0x596c3e *= 0x2) ? 0.5 * Math['pow'](0x2, 0xa * (_0x596c3e - 0x1)) : 0.5 * (-Math['pow'](0x2, -0xa * (_0x596c3e - 0x1)) + 0x2);
    }
    ,
    ig['Tween']['Easing']['Circular']['EaseIn'] = function(_0x2fa01b) {
        return -(Math['sqrt'](0x1 - _0x2fa01b * _0x2fa01b) - 0x1);
    }
    ,
    ig['Tween']['Easing']['Circular']['EaseOut'] = function(_0x275c90) {
        return Math['sqrt'](0x1 - --_0x275c90 * _0x275c90);
    }
    ,
    ig['Tween']['Easing']['Circular']['EaseInOut'] = function(_0x51f551) {
        return 0x1 > (_0x51f551 /= 0.5) ? -0.5 * (Math['sqrt'](0x1 - _0x51f551 * _0x51f551) - 0x1) : 0.5 * (Math['sqrt'](0x1 - (_0x51f551 -= 0x2) * _0x51f551) + 0x1);
    }
    ,
    ig['Tween']['Easing']['Elastic']['EaseIn'] = function(_0x45a9db) {
        var _0x417e61, _0x139983 = 0.1, _0x15d924 = 0.4;
        if (0x0 == _0x45a9db)
            return 0x0;
        if (0x1 == _0x45a9db)
            return 0x1;
        return _0x15d924 || (_0x15d924 = 0.3),
        !_0x139983 || 0x1 > _0x139983 ? (_0x139983 = 0x1,
        _0x417e61 = _0x15d924 / 0x4) : _0x417e61 = _0x15d924 / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x139983),
        -(_0x139983 * Math['pow'](0x2, 0xa * (_0x45a9db -= 0x1)) * Math['sin'](0x2 * (_0x45a9db - _0x417e61) * Math['PI'] / _0x15d924));
    }
    ,
    ig['Tween']['Easing']['Elastic']['EaseOut'] = function(_0x5e52d2) {
        var _0x152005, _0x5080ba = 0.1, _0x2c35fd = 0.4;
        if (0x0 == _0x5e52d2)
            return 0x0;
        if (0x1 == _0x5e52d2)
            return 0x1;
        return _0x2c35fd || (_0x2c35fd = 0.3),
        !_0x5080ba || 0x1 > _0x5080ba ? (_0x5080ba = 0x1,
        _0x152005 = _0x2c35fd / 0x4) : _0x152005 = _0x2c35fd / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x5080ba),
        _0x5080ba * Math['pow'](0x2, -0xa * _0x5e52d2) * Math['sin'](0x2 * (_0x5e52d2 - _0x152005) * Math['PI'] / _0x2c35fd) + 0x1;
    }
    ,
    ig['Tween']['Easing']['Elastic']['EaseInOut'] = function(_0x28ad07) {
        var _0x1a1e19, _0x8b5011 = 0.1, _0x2e61fb = 0.4;
        if (0x0 == _0x28ad07)
            return 0x0;
        if (0x1 == _0x28ad07)
            return 0x1;
        return _0x2e61fb || (_0x2e61fb = 0.3),
        !_0x8b5011 || 0x1 > _0x8b5011 ? (_0x8b5011 = 0x1,
        _0x1a1e19 = _0x2e61fb / 0x4) : _0x1a1e19 = _0x2e61fb / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x8b5011),
        0x1 > (_0x28ad07 *= 0x2) ? -0.5 * _0x8b5011 * Math['pow'](0x2, 0xa * (_0x28ad07 -= 0x1)) * Math['sin'](0x2 * (_0x28ad07 - _0x1a1e19) * Math['PI'] / _0x2e61fb) : 0.5 * _0x8b5011 * Math['pow'](0x2, -0xa * (_0x28ad07 -= 0x1)) * Math['sin'](0x2 * (_0x28ad07 - _0x1a1e19) * Math['PI'] / _0x2e61fb) + 0x1;
    }
    ,
    ig['Tween']['Easing']['Back']['EaseIn'] = function(_0x1168be) {
        return _0x1168be * _0x1168be * (2.70158 * _0x1168be - 1.70158);
    }
    ,
    ig['Tween']['Easing']['Back']['EaseOut'] = function(_0x124528) {
        return (_0x124528 -= 0x1) * _0x124528 * (2.70158 * _0x124528 + 1.70158) + 0x1;
    }
    ,
    ig['Tween']['Easing']['Back']['EaseInOut'] = function(_0x56d472) {
        return 0x1 > (_0x56d472 *= 0x2) ? 0.5 * _0x56d472 * _0x56d472 * (3.5949095 * _0x56d472 - 2.5949095) : 0.5 * ((_0x56d472 -= 0x2) * _0x56d472 * (3.5949095 * _0x56d472 + 2.5949095) + 0x2);
    }
    ,
    ig['Tween']['Easing']['Bounce']['EaseIn'] = function(_0x3eb4f5) {
        return 0x1 - ig['Tween']['Easing']['Bounce']['EaseOut'](0x1 - _0x3eb4f5);
    }
    ,
    ig['Tween']['Easing']['Bounce']['EaseOut'] = function(_0x5d0478) {
        return (_0x5d0478 /= 0x1) < 0x1 / 2.75 ? 7.5625 * _0x5d0478 * _0x5d0478 : _0x5d0478 < 0x2 / 2.75 ? 7.5625 * (_0x5d0478 -= 1.5 / 2.75) * _0x5d0478 + 0.75 : _0x5d0478 < 2.5 / 2.75 ? 7.5625 * (_0x5d0478 -= 2.25 / 2.75) * _0x5d0478 + 0.9375 : 7.5625 * (_0x5d0478 -= 2.625 / 2.75) * _0x5d0478 + 0.984375;
    }
    ,
    ig['Tween']['Easing']['Bounce']['EaseInOut'] = function(_0x160ff4) {
        return 0.5 > _0x160ff4 ? 0.5 * ig['Tween']['Easing']['Bounce']['EaseIn'](0x2 * _0x160ff4) : 0.5 * ig['Tween']['Easing']['Bounce']['EaseOut'](0x2 * _0x160ff4 - 0x1) + 0.5;
    }
    ,
    ig['Tween']['Interpolation'] = {
        'Linear': function(_0x5b9504, _0x112132) {
            var _0x58c3c6 = _0x5b9504['length'] - 0x1
              , _0x59e905 = _0x58c3c6 * _0x112132
              , _0x2bbba6 = Math['floor'](_0x59e905)
              , _0x4c7ec7 = TWEEN['Interpolation']['Utils']['Linear'];
            return 0x0 > _0x112132 ? _0x4c7ec7(_0x5b9504[0x0], _0x5b9504[0x1], _0x59e905) : 0x1 < _0x112132 ? _0x4c7ec7(_0x5b9504[_0x58c3c6], _0x5b9504[_0x58c3c6 - 0x1], _0x58c3c6 - _0x59e905) : _0x4c7ec7(_0x5b9504[_0x2bbba6], _0x5b9504[_0x2bbba6 + 0x1 > _0x58c3c6 ? _0x58c3c6 : _0x2bbba6 + 0x1], _0x59e905 - _0x2bbba6);
        }
    };
}),
ig['baked'] = !0x0,
ig['module']('plugins.patches.entity-patch')['requires']('impact.entity')['defines'](function() {
    ig['Entity']['inject']({
        'handleMovementTrace': function(_0x82ae10) {
            this['standing'] = !0x1,
            _0x82ae10['collision']['y'] && (0x0 < this['bounciness'] && Math['abs'](this['vel']['y']) > this['minBounceVelocity'] ? this['vel']['y'] *= -this['bounciness'] : (0x0 < this['vel']['y'] && (this['standing'] = !0x0),
            this['vel']['y'] = 0x0)),
            _0x82ae10['collision']['x'] && (this['vel']['x'] = 0x0 < this['bounciness'] && Math['abs'](this['vel']['x']) > this['minBounceVelocity'] ? this['vel']['x'] * -this['bounciness'] : 0x0);
            if (_0x82ae10['collision']['slope']) {
                var _0x27329f = _0x82ae10['collision']['slope'];
                if (0x0 < this['bounciness']) {
                    var _0x1ae2ee = this['vel']['x'] * _0x27329f['nx'] + this['vel']['y'] * _0x27329f['ny'];
                    this['vel']['x'] = (this['vel']['x'] - 0x2 * _0x27329f['nx'] * _0x1ae2ee) * this['bounciness'],
                    this['vel']['y'] = (this['vel']['y'] - 0x2 * _0x27329f['ny'] * _0x1ae2ee) * this['bounciness'];
                } else
                    _0x1ae2ee = (this['vel']['x'] * _0x27329f['x'] + this['vel']['y'] * _0x27329f['y']) / (_0x27329f['x'] * _0x27329f['x'] + _0x27329f['y'] * _0x27329f['y']),
                    this['vel']['x'] = _0x27329f['x'] * _0x1ae2ee,
                    this['vel']['y'] = _0x27329f['y'] * _0x1ae2ee,
                    _0x27329f = Math['atan2'](_0x27329f['x'], _0x27329f['y']),
                    _0x27329f > this['slopeStanding']['min'] && _0x27329f < this['slopeStanding']['max'] && (this['standing'] = !0x0);
            }
            this['pos']['x'] = _0x82ae10['pos']['x'],
            this['pos']['y'] = _0x82ae10['pos']['y'];
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.tweens-handler')['requires']('impact.entity', 'plugins.tween', 'plugins.patches.entity-patch')['defines'](function() {
    Array['prototype']['indexOf'] || (Array['prototype']['indexOf'] = function(_0x5b0ae6) {
        for (var _0x243aca = 0x0; _0x243aca < this['length']; ++_0x243aca)
            if (this[_0x243aca] === _0x5b0ae6)
                return _0x243aca;
        return -0x1;
    }
    ),
    ig['TweensHandler'] = ig['Class']['extend']({
        '_tweens': [],
        '_systemPausedTweens': [],
        'init': function() {},
        'getAll': function() {
            return this['_tweens'];
        },
        'removeAll': function() {
            this['_tweens'] = [];
        },
        'add': function(_0x3a18db) {
            this['_tweens']['push'](_0x3a18db);
        },
        'remove': function(_0x223339) {
            _0x223339 = this['_tweens']['indexOf'](_0x223339),
            -0x1 !== _0x223339 && this['_tweens']['splice'](_0x223339, 0x1);
        },
        'onSystemPause': function() {
            if (0x0 === this['_tweens']['length'])
                return !0x1;
            for (var _0x4b1df7 = 0x0, _0x56cbb0 = null; _0x4b1df7 < this['_tweens']['length']; )
                _0x56cbb0 = this['_tweens'][_0x4b1df7],
                _0x56cbb0['_isPlaying'] && (this['_systemPausedTweens']['push'](_0x56cbb0),
                _0x56cbb0['pause']()),
                _0x4b1df7++;
            return !0x0;
        },
        'onSystemResume': function() {
            if (0x0 === this['_systemPausedTweens']['length'])
                return !0x1;
            for (var _0x21dbac = 0x0; _0x21dbac < this['_systemPausedTweens']['length']; )
                this['_systemPausedTweens'][_0x21dbac]['resume'](),
                _0x21dbac++;
            return this['_systemPausedTweens'] = [],
            !0x0;
        },
        'update': function(_0x1d2259, _0x145a7c) {
            if (0x0 === this['_tweens']['length'])
                return !0x1;
            var _0x5c58e3 = 0x0;
            for (_0x1d2259 = void 0x0 !== _0x1d2259 ? _0x1d2259 : ig['game']['tweens']['now'](); _0x5c58e3 < this['_tweens']['length']; )
                this['_tweens'][_0x5c58e3]['update'](_0x1d2259) || _0x145a7c ? _0x5c58e3++ : this['_tweens']['splice'](_0x5c58e3, 0x1);
            return !0x0;
        },
        'now': function() {
            return Date['now']();
        }
    }),
    ig['TweenDef'] = ig['Class']['extend']({
        '_ent': null,
        '_valuesStart': {},
        '_valuesEnd': {},
        '_valuesStartRepeat': {},
        '_duration': 0x3e8,
        '_repeat': 0x0,
        '_yoyo': !0x1,
        '_isPlaying': !0x1,
        '_reversed': !0x1,
        '_delayTime': 0x0,
        '_startTime': null,
        '_pauseTime': null,
        '_easingFunction': ig['Tween']['Easing']['Linear']['EaseNone'],
        '_interpolationFunction': ig['Tween']['Interpolation']['Linear'],
        '_chainedTweens': [],
        '_onStartCallback': null,
        '_onStartCallbackFired': !0x1,
        '_onUpdateCallback': null,
        '_onCompleteCallback': null,
        '_onStopCallback': null,
        '_onPauseCallback': null,
        '_onResumeCallback': null,
        '_currentElapsed': 0x0,
        'init': function(_0x159017) {
            this['_object'] = _0x159017;
        },
        'to': function(_0x180027, _0x42c22c) {
            return this['_valuesEnd'] = _0x180027,
            void 0x0 !== _0x42c22c && (this['_duration'] = _0x42c22c),
            this;
        },
        'start': function(_0x3e1399) {
            if (this['_isPlaying'])
                return this;
            ig['game']['tweens']['add'](this),
            this['_isPlaying'] = !0x0,
            this['_onStartCallbackFired'] = !0x1,
            this['_startTime'] = void 0x0 !== _0x3e1399 ? _0x3e1399 : ig['game']['tweens']['now'](),
            this['_startTime'] += this['_delayTime'];
            for (var _0x4d0930 in this['_valuesEnd']) {
                if (this['_valuesEnd'][_0x4d0930]instanceof Array) {
                    if (0x0 === this['_valuesEnd'][_0x4d0930]['length'])
                        continue;
                    this['_valuesEnd'][_0x4d0930] = [this['_object'][_0x4d0930]]['concat'](this['_valuesEnd'][_0x4d0930]);
                }
                void 0x0 !== this['_object'][_0x4d0930] && (this['_valuesStart'][_0x4d0930] = this['_object'][_0x4d0930],
                !0x1 === this['_valuesStart'][_0x4d0930]instanceof Array && (this['_valuesStart'][_0x4d0930] *= 0x1),
                this['_valuesStartRepeat'][_0x4d0930] = this['_valuesStart'][_0x4d0930] || 0x0);
            }
            return this;
        },
        'stop': function() {
            if (!this['_isPlaying'])
                return this;
            return ig['game']['tweens']['remove'](this),
            this['_isPlaying'] = !0x1,
            null !== this['_onStopCallback'] && this['_onStopCallback']['call'](this['_object'], this['_object']),
            this['stopChainedTweens'](),
            this;
        },
        'pause': function() {
            if (!this['_isPlaying'])
                return this;
            return ig['game']['tweens']['remove'](this),
            this['_isPlaying'] = !0x1,
            this['_pauseTime'] = ig['game']['tweens']['now'](),
            null !== this['_onPauseCallback'] && this['_onPauseCallback']['call'](this['_object'], this['_object']),
            this;
        },
        'resume': function() {
            if (this['_isPlaying'] || !this['_pauseTime'])
                return this;
            var _0x3cfeea = ig['game']['tweens']['now']() - this['_pauseTime'];
            return this['_startTime'] += _0x3cfeea,
            ig['game']['tweens']['add'](this),
            this['_isPlaying'] = !0x0,
            null !== this['_onResumeCallback'] && this['_onResumeCallback']['call'](this['_object'], this['_object']),
            this['_pauseTime'] = null,
            this;
        },
        'end': function() {
            return this['update'](this['_startTime'] + this['_duration']),
            this;
        },
        'stopChainedTweens': function() {
            for (var _0x4b23a5 = 0x0, _0x76fa51 = this['_chainedTweens']['length']; _0x4b23a5 < _0x76fa51; _0x4b23a5++)
                this['_chainedTweens'][_0x4b23a5]['stop']();
        },
        'delay': function(_0x369c8e) {
            return this['_delayTime'] = _0x369c8e,
            this;
        },
        'repeat': function(_0x1dd395) {
            return this['_repeat'] = _0x1dd395,
            this;
        },
        'repeatDelay': function(_0x266941) {
            return this['_repeatDelayTime'] = _0x266941,
            this;
        },
        'yoyo': function(_0xaa891b) {
            return this['_yoyo'] = _0xaa891b,
            this;
        },
        'easing': function(_0x887894) {
            return this['_easingFunction'] = _0x887894,
            this;
        },
        'interpolation': function(_0x103e04) {
            return this['_interpolationFunction'] = _0x103e04,
            this;
        },
        'chain': function() {
            return this['_chainedTweens'] = arguments,
            this;
        },
        'onStart': function(_0x5086a5) {
            return this['_onStartCallback'] = _0x5086a5,
            this;
        },
        'onUpdate': function(_0x22f7d8) {
            return this['_onUpdateCallback'] = _0x22f7d8,
            this;
        },
        'onComplete': function(_0x11e10a) {
            return this['_onCompleteCallback'] = _0x11e10a,
            this;
        },
        'onStop': function(_0x19a3e8) {
            return this['_onStopCallback'] = _0x19a3e8,
            this;
        },
        'onPause': function(_0xbfb3dd) {
            return this['_onPauseCallback'] = _0xbfb3dd,
            this;
        },
        'onResume': function(_0x522140) {
            return this['_onResumeCallback'] = _0x522140,
            this;
        },
        'update': function(_0x4e2a6d) {
            var _0x5102d2, _0x142fed, _0x5e8efd;
            if (_0x4e2a6d < this['_startTime'])
                return !0x0;
            !0x1 === this['_onStartCallbackFired'] && (null !== this['_onStartCallback'] && this['_onStartCallback']['call'](this['_object'], this['_object']),
            this['_onStartCallbackFired'] = !0x0),
            _0x142fed = (_0x4e2a6d - this['_startTime']) / this['_duration'],
            this['_currentElapsed'] = _0x142fed = 0x1 < _0x142fed ? 0x1 : _0x142fed,
            _0x5e8efd = this['_easingFunction'](_0x142fed);
            for (_0x5102d2 in this['_valuesEnd'])
                if (void 0x0 !== this['_valuesStart'][_0x5102d2]) {
                    var _0x472c9e = this['_valuesStart'][_0x5102d2] || 0x0
                      , _0x3a3fb8 = this['_valuesEnd'][_0x5102d2];
                    _0x3a3fb8 instanceof Array ? this['_object'][_0x5102d2] = this['_interpolationFunction'](_0x3a3fb8, _0x5e8efd) : ('string' === typeof _0x3a3fb8 && (_0x3a3fb8 = '+' === _0x3a3fb8['charAt'](0x0) || '-' === _0x3a3fb8['charAt'](0x0) ? _0x472c9e + parseFloat(_0x3a3fb8) : parseFloat(_0x3a3fb8)),
                    'number' === typeof _0x3a3fb8 && (this['_object'][_0x5102d2] = _0x472c9e + (_0x3a3fb8 - _0x472c9e) * _0x5e8efd));
                }
            null !== this['_onUpdateCallback'] && this['_onUpdateCallback']['call'](this['_object'], this['_object'], _0x5e8efd);
            if (0x1 === _0x142fed) {
                if (0x0 < this['_repeat']) {
                    isFinite(this['_repeat']) && this['_repeat']--;
                    for (_0x5102d2 in this['_valuesStartRepeat'])
                        'string' === typeof this['_valuesEnd'][_0x5102d2] && (this['_valuesStartRepeat'][_0x5102d2] = _valuesStartRepeat[_0x5102d2] + parseFloat(_valuesEnd[_0x5102d2])),
                        this['_yoyo'] && (_0x142fed = this['_valuesStartRepeat'][_0x5102d2],
                        this['_valuesStartRepeat'][_0x5102d2] = this['_valuesEnd'][_0x5102d2],
                        this['_valuesEnd'][_0x5102d2] = _0x142fed),
                        this['_valuesStart'][_0x5102d2] = this['_valuesStartRepeat'][_0x5102d2];
                    this['_yoyo'] && (this['_reversed'] = !this['_reversed']),
                    this['_startTime'] = void 0x0 !== this['_repeatDelayTime'] ? _0x4e2a6d + this['_repeatDelayTime'] : _0x4e2a6d + this['_delayTime'];
                } else {
                    null !== this['_onCompleteCallback'] && this['_onCompleteCallback']['call'](this['_object'], this['_object']),
                    _0x4e2a6d = 0x0;
                    for (_0x5102d2 = this['_chainedTweens']['length']; _0x4e2a6d < _0x5102d2; _0x4e2a6d++)
                        this['_chainedTweens'][_0x4e2a6d]['start'](this['_startTime'] + this['_duration']);
                    return !0x1;
                }
            }
            return !0x0;
        }
    });
    var _0x3e49e5 = [0x1];
    ig['Tween']['Interpolation'] = {
        'Linear': function(_0x13a8a2, _0x30ee85) {
            var _0x3aed26 = _0x13a8a2['length'] - 0x1
              , _0x20600b = _0x3aed26 * _0x30ee85
              , _0x3027e8 = Math['floor'](_0x20600b)
              , _0x5b9adf = ig['Tween']['Interpolation']['Utils']['Linear'];
            return 0x0 > _0x30ee85 ? _0x5b9adf(_0x13a8a2[0x0], _0x13a8a2[0x1], _0x20600b) : 0x1 < _0x30ee85 ? _0x5b9adf(_0x13a8a2[_0x3aed26], _0x13a8a2[_0x3aed26 - 0x1], _0x3aed26 - _0x20600b) : _0x5b9adf(_0x13a8a2[_0x3027e8], _0x13a8a2[_0x3027e8 + 0x1 > _0x3aed26 ? _0x3aed26 : _0x3027e8 + 0x1], _0x20600b - _0x3027e8);
        },
        'Bezier': function(_0x55caa3, _0xe34e5e) {
            for (var _0x5a9be3 = 0x0, _0x20a383 = _0x55caa3['length'] - 0x1, _0x310e6d = Math['pow'], _0x4431ad = ig['Tween']['Interpolation']['Utils']['Bernstein'], _0x3f9c7c = 0x0; _0x3f9c7c <= _0x20a383; _0x3f9c7c++)
                _0x5a9be3 += _0x310e6d(0x1 - _0xe34e5e, _0x20a383 - _0x3f9c7c) * _0x310e6d(_0xe34e5e, _0x3f9c7c) * _0x55caa3[_0x3f9c7c] * _0x4431ad(_0x20a383, _0x3f9c7c);
            return _0x5a9be3;
        },
        'CatmullRom': function(_0x5ae047, _0xfbe71a) {
            var _0x1b0bc4 = _0x5ae047['length'] - 0x1
              , _0xd0e023 = _0x1b0bc4 * _0xfbe71a
              , _0x319420 = Math['floor'](_0xd0e023)
              , _0x2c4c98 = ig['Tween']['Interpolation']['Utils']['CatmullRom'];
            return _0x5ae047[0x0] === _0x5ae047[_0x1b0bc4] ? (0x0 > _0xfbe71a && (_0x319420 = Math['floor'](_0xd0e023 = _0x1b0bc4 * (0x1 + _0xfbe71a))),
            _0x2c4c98(_0x5ae047[(_0x319420 - 0x1 + _0x1b0bc4) % _0x1b0bc4], _0x5ae047[_0x319420], _0x5ae047[(_0x319420 + 0x1) % _0x1b0bc4], _0x5ae047[(_0x319420 + 0x2) % _0x1b0bc4], _0xd0e023 - _0x319420)) : 0x0 > _0xfbe71a ? _0x5ae047[0x0] - (_0x2c4c98(_0x5ae047[0x0], _0x5ae047[0x0], _0x5ae047[0x1], _0x5ae047[0x1], -_0xd0e023) - _0x5ae047[0x0]) : 0x1 < _0xfbe71a ? _0x5ae047[_0x1b0bc4] - (_0x2c4c98(_0x5ae047[_0x1b0bc4], _0x5ae047[_0x1b0bc4], _0x5ae047[_0x1b0bc4 - 0x1], _0x5ae047[_0x1b0bc4 - 0x1], _0xd0e023 - _0x1b0bc4) - _0x5ae047[_0x1b0bc4]) : _0x2c4c98(_0x5ae047[_0x319420 ? _0x319420 - 0x1 : 0x0], _0x5ae047[_0x319420], _0x5ae047[_0x1b0bc4 < _0x319420 + 0x1 ? _0x1b0bc4 : _0x319420 + 0x1], _0x5ae047[_0x1b0bc4 < _0x319420 + 0x2 ? _0x1b0bc4 : _0x319420 + 0x2], _0xd0e023 - _0x319420);
        },
        'Utils': {
            'Linear': function(_0x59d4b8, _0x3242ac, _0x533866) {
                return (_0x3242ac - _0x59d4b8) * _0x533866 + _0x59d4b8;
            },
            'Bernstein': function(_0x45873e, _0x2ec0da) {
                var _0x4b0c91 = ig['Tween']['Interpolation']['Utils']['Factorial'];
                return _0x4b0c91(_0x45873e) / _0x4b0c91(_0x2ec0da) / _0x4b0c91(_0x45873e - _0x2ec0da);
            },
            'Factorial': function(_0x4bedf5) {
                var _0x1fbef7 = 0x1;
                if (_0x3e49e5[_0x4bedf5])
                    return _0x3e49e5[_0x4bedf5];
                for (var _0x31d377 = _0x4bedf5; 0x1 < _0x31d377; _0x31d377--)
                    _0x1fbef7 *= _0x31d377;
                return _0x3e49e5[_0x4bedf5] = _0x1fbef7;
            },
            'CatmullRom': function(_0x10bbb0, _0x6af2be, _0x5b5a3b, _0x5ca46e, _0x4f2ad0) {
                _0x10bbb0 = 0.5 * (_0x5b5a3b - _0x10bbb0),
                _0x5ca46e = 0.5 * (_0x5ca46e - _0x6af2be);
                var _0x425590 = _0x4f2ad0 * _0x4f2ad0;
                return (0x2 * _0x6af2be - 0x2 * _0x5b5a3b + _0x10bbb0 + _0x5ca46e) * _0x4f2ad0 * _0x425590 + (-0x3 * _0x6af2be + 0x3 * _0x5b5a3b - 0x2 * _0x10bbb0 - _0x5ca46e) * _0x425590 + _0x10bbb0 * _0x4f2ad0 + _0x6af2be;
            }
        }
    };
}),
ig['baked'] = !0x0,
ig['module']('plugins.url-parameters')['defines'](function() {
    ig['UrlParameters'] = ig['Class']['extend']({
        'init': function() {
            switch (getQueryVariable('iphone')) {
            case 'true':
                ig['ua']['iPhone'] = !0x0,
                console['log']('iPhone\x20mode');
            }
            var _0x2c6f6e = getQueryVariable('webview');
            if (_0x2c6f6e)
                switch (_0x2c6f6e) {
                case 'true':
                    ig['ua']['is_uiwebview'] = !0x0,
                    console['log']('webview\x20mode');
                }
            if (_0x2c6f6e = getQueryVariable('debug'))
                switch (_0x2c6f6e) {
                case 'true':
                    ig['game']['showDebugMenu'](),
                    console['log']('debug\x20mode');
                }
            switch (getQueryVariable('view')) {
            case 'stats':
                ig['game']['resetPlayerStats'](),
                ig['game']['endGame']();
            }
            getQueryVariable('ad');
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.director')['requires']('impact.impact')['defines'](function() {
    ig['Director'] = ig['Class']['extend']({
        'init': function(_0x10f299, _0x1d8f5d) {
            this['game'] = _0x10f299,
            this['levels'] = [],
            this['currentLevel'] = 0x0,
            this['append'](_0x1d8f5d);
        },
        'loadLevel': function(_0x4e0315) {
            for (var _0x1856b4 in ig['sizeHandler']['dynamicClickableEntityDivs']) {
                var _0x550858 = ig['domHandler']['getElementById']('#' + _0x1856b4);
                ig['domHandler']['hide'](_0x550858);
            }
            return this['currentLevel'] = _0x4e0315,
            this['game']['loadLevel'](this['levels'][_0x4e0315]),
            !0x0;
        },
        'loadLevelWithoutEntities': function(_0x54659c) {
            return this['currentLevel'] = _0x54659c,
            this['game']['loadLevelWithoutEntities'](this['levels'][_0x54659c]),
            !0x0;
        },
        'append': function(_0x3d97de) {
            return newLevels = [],
            'object' === typeof _0x3d97de ? (_0x3d97de['constructor'] === []['constructor'] ? newLevels = _0x3d97de : newLevels[0x0] = _0x3d97de,
            this['levels'] = this['levels']['concat'](newLevels),
            !0x0) : !0x1;
        },
        'nextLevel': function() {
            return this['currentLevel'] + 0x1 < this['levels']['length'] ? this['loadLevel'](this['currentLevel'] + 0x1) : !0x1;
        },
        'previousLevel': function() {
            return 0x0 <= this['currentLevel'] - 0x1 ? this['loadLevel'](this['currentLevel'] - 0x1) : !0x1;
        },
        'jumpTo': function(_0x1c080c) {
            var _0x4b9096 = null;
            for (i = 0x0; i < this['levels']['length']; i++)
                this['levels'][i] == _0x1c080c && (_0x4b9096 = i);
            return 0x0 <= _0x4b9096 ? this['loadLevel'](_0x4b9096) : !0x1;
        },
        'firstLevel': function() {
            return this['loadLevel'](0x0);
        },
        'lastLevel': function() {
            return this['loadLevel'](this['levels']['length'] - 0x1);
        },
        'reloadLevel': function() {
            return this['loadLevel'](this['currentLevel']);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.impact-storage')['requires']('impact.game')['defines'](function() {
    ig['Storage'] = ig['Class']['extend']({
        'staticInstantiate': function() {
            return !ig['Storage']['instance'] ? null : ig['Storage']['instance'];
        },
        'init': function() {
            ig['Storage']['instance'] = this;
        },
        'isCapable': function() {
            return 'undefined' !== typeof window['localStorage'];
        },
        'isSet': function(_0x504a56) {
            return null !== this['get'](_0x504a56);
        },
        'initUnset': function(_0x3bbfd2, _0x437847) {
            null === this['get'](_0x3bbfd2) && this['set'](_0x3bbfd2, _0x437847);
        },
        'get': function(_0x3842f7) {
            if (!this['isCapable']())
                return null;
            try {
                return JSON['parse'](localStorage['getItem'](_0x3842f7));
            } catch (_0x5aeb62) {
                return window['localStorage']['getItem'](_0x3842f7);
            }
        },
        'getInt': function(_0x341403) {
            return ~~this['get'](_0x341403);
        },
        'getFloat': function(_0x377779) {
            return parseFloat(this['get'](_0x377779));
        },
        'getBool': function(_0x5aff9a) {
            return !!this['get'](_0x5aff9a);
        },
        'key': function(_0x49f3d2) {
            return this['isCapable']() ? window['localStorage']['key'](_0x49f3d2) : null;
        },
        'set': function(_0x280313, _0x54a973) {
            if (!this['isCapable']())
                return null;
            try {
                window['localStorage']['setItem'](_0x280313, JSON['stringify'](_0x54a973));
            } catch (_0xeae7b3) {
                console['log'](_0xeae7b3);
            }
        },
        'setHighest': function(_0x2c2204, _0x18ba3f) {
            _0x18ba3f > this['getFloat'](_0x2c2204) && this['set'](_0x2c2204, _0x18ba3f);
        },
        'remove': function(_0x22c966) {
            if (!this['isCapable']())
                return null;
            window['localStorage']['removeItem'](_0x22c966);
        },
        'clear': function() {
            if (!this['isCapable']())
                return null;
            window['localStorage']['clear']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.fullscreen')['requires']('impact.entity', 'plugins.handlers.size-handler', 'plugins.director')['defines'](function() {
    ig['Fullscreen'] = {
        'enableFullscreenButton': !0x1,
        '_isEnabled': 'notChecked',
        'isEnabled': function() {
            return 'notChecked' == this['_isEnabled'] && (this['_isEnabled'] = document['fullscreenEnabled'] || document['mozFullScreenEnabled'] || document['webkitFullscreenEnabled'] || document['msFullscreenEnabled'] ? !0x0 : !0x1),
            this['_isEnabled'];
        },
        'isFullscreen': function() {
            return ig['Fullscreen']['isEnabled']() && (document['fullscreenElement'] || document['mozFullScreenElement'] || document['webkitFullscreenElement'] || document['msFullscreenElement']) ? !0x0 : !0x1;
        },
        'toggleFullscreen': function() {
            ig['Fullscreen']['isFullscreen']() ? ig['Fullscreen']['exitFullscreen']() : ig['Fullscreen']['requestFullscreen'](),
            ig['sizeHandler']['orientationDelayHandler']();
            if (ig && ig['visibilityHandler'])
                ig['visibilityHandler']['onChange']('focus');
            try {
                ig['soundHandler']['unlockWebAudio']();
            } catch (_0x374b9b) {}
        },
        'requestFullscreen': function() {
            var _0x287e12 = document['documentElement'];
            _0x287e12['requestFullscreen'] ? _0x287e12['requestFullscreen']() : _0x287e12['webkitRequestFullscreen'] ? _0x287e12['webkitRequestFullscreen']() : _0x287e12['mozRequestFullScreen'] ? _0x287e12['mozRequestFullScreen']() : _0x287e12['msRequestFullscreen'] ? _0x287e12['msRequestFullscreen']() : console['log']('no\x20request\x20fullscreen\x20method\x20available');
        },
        'exitFullscreen': function() {
            document['exitFullscreen'] ? document['exitFullscreen']() : document['webkitExitFullscreen'] ? document['webkitExitFullscreen']() : document['mozCancelFullScreen'] ? document['mozCancelFullScreen']() : document['msExitFullscreen'] ? document['msExitFullscreen']() : console['log']('no\x20exit\x20fullscreen\x20method\x20available');
        },
        'divs': {}
    },
    ig['Director']['inject']({
        'loadLevel': function(_0x492805) {
            var _0x4b21e5 = ig['Fullscreen']['divs'], _0x569dbf;
            for (_0x569dbf in _0x4b21e5)
                _0x4b21e5 = ig['domHandler']['getElementById']('#' + _0x569dbf),
                ig['domHandler']['hide'](_0x4b21e5);
            return this['parent'](_0x492805);
        }
    }),
    ig['SizeHandler']['inject']({
        'resize': function() {
            this['parent']();
            var _0x80fd5c = ig['Fullscreen']['divs'], _0x1ed980;
            for (_0x1ed980 in _0x80fd5c) {
                var _0x213107 = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y'])
                  , _0x548841 = ig['domHandler']['getElementById']('#' + _0x1ed980)
                  , _0x1a7f92 = _0x80fd5c[_0x1ed980]['entity_pos_x']
                  , _0x953dc5 = _0x80fd5c[_0x1ed980]['entity_pos_y']
                  , _0x531e00 = _0x80fd5c[_0x1ed980]['width']
                  , _0x130210 = _0x80fd5c[_0x1ed980]['height']
                  , _0x1f6faa = ig['domHandler']['getElementById']('#canvas')
                  , _0x5f0cfd = ig['domHandler']['getOffsets'](_0x1f6faa);
                ig['ua']['mobile'] ? (_0x1f6faa = _0x5f0cfd['left'],
                _0x5f0cfd = _0x5f0cfd['top'],
                ig['sizeHandler']['disableStretchToFitOnMobileFlag'] ? (_0x1a7f92 = Math['floor'](_0x1f6faa + _0x1a7f92 * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px',
                _0x953dc5 = Math['floor'](_0x5f0cfd + _0x953dc5 * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px',
                _0x531e00 = Math['floor'](_0x531e00 * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px',
                _0x130210 = Math['floor'](_0x130210 * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px') : (_0x1a7f92 = Math['floor'](_0x1a7f92 * ig['sizeHandler']['sizeRatio']['x']) + 'px',
                _0x953dc5 = Math['floor'](_0x953dc5 * ig['sizeHandler']['sizeRatio']['y']) + 'px',
                _0x531e00 = Math['floor'](_0x531e00 * ig['sizeHandler']['sizeRatio']['x']) + 'px',
                _0x130210 = Math['floor'](_0x130210 * ig['sizeHandler']['sizeRatio']['y']) + 'px')) : (_0x1f6faa = _0x5f0cfd['left'],
                _0x5f0cfd = _0x5f0cfd['top'],
                _0x1a7f92 = Math['floor'](_0x1f6faa + _0x1a7f92 * _0x213107) + 'px',
                _0x953dc5 = Math['floor'](_0x5f0cfd + _0x953dc5 * _0x213107) + 'px',
                _0x531e00 = Math['floor'](_0x531e00 * _0x213107) + 'px',
                _0x130210 = Math['floor'](_0x130210 * _0x213107) + 'px'),
                ig['domHandler']['css'](_0x548841, {
                    'float': 'left',
                    'position': 'absolute',
                    'left': _0x1a7f92,
                    'top': _0x953dc5,
                    'width': _0x531e00,
                    'height': _0x130210,
                    'z-index': 0x3
                }),
                _0x80fd5c[_0x1ed980]['font-size'] && ig['domHandler']['css'](_0x548841, {
                    'font-size': _0x80fd5c[_0x1ed980]['font-size'] * _0x213107 + 'px'
                });
            }
        }
    }),
    ig['FullscreenButton'] = ig['Entity']['extend']({
        'enterImage': null,
        'exitImage': null,
        'isReady': !0x1,
        'zIndex': 0xf423f,
        'identifier': null,
        'prevPos': {
            'x': 0x0,
            'y': 0x0
        },
        'invisImagePath': 'media/graphics/misc/invisible.png',
        'init': function(_0x58fe2f, _0x19684a, _0x1304f8) {
            this['parent'](_0x58fe2f, _0x19684a, _0x1304f8),
            ig['Fullscreen']['isEnabled']() && ig['Fullscreen']['enableFullscreenButton'] ? this['enterImage']['loaded'] ? this['initSize']() : this['enterImage']['loadCallback'] = function() {
                this['initSize']();
            }
            ['bind'](this) : this['kill']();
        },
        'show': function() {
            var _0x14572f = ig['domHandler']['getElementById']('#fullscreen-button-layer');
            _0x14572f && ig['domHandler']['show'](_0x14572f);
        },
        'hide': function() {
            var _0x517eb4 = ig['domHandler']['getElementById']('#fullscreen-button-layer');
            _0x517eb4 && ig['domHandler']['hide'](_0x517eb4);
        },
        'kill': function() {
            this['parent']();
        },
        'destroy': function() {
            this['parent'](),
            console['log']('destroy');
        },
        'initSize': function() {
            this['size']['x'] = this['enterImage']['width'],
            this['size']['y'] = this['enterImage']['height'],
            this['createClickableLayer'](),
            this['isReady'] = !0x0;
        },
        'createClickableLayer': function() {
            this['identifier'] = 'fullscreen-button-layer';
            var _0x4bf06c = ig['domHandler']['getElementById']('#' + this['identifier']);
            _0x4bf06c ? (ig['domHandler']['show'](_0x4bf06c),
            ig['domHandler']['attr'](_0x4bf06c, 'onclick', 'ig.Fullscreen.toggleFullscreen()')) : this['createClickableOutboundLayer']();
        },
        'update': function(_0x543e13, _0x2adcd8) {
            _0x543e13 = this['pos']['x'],
            _0x2adcd8 = this['pos']['y'],
            this['isReady'] && !(this['prevPos']['x'] === _0x543e13 && this['prevPos']['y'] === _0x2adcd8) && (ig['Fullscreen']['divs'][this['identifier']] = {},
            ig['Fullscreen']['divs'][this['identifier']]['width'] = this['size']['x'],
            ig['Fullscreen']['divs'][this['identifier']]['height'] = this['size']['y'],
            ig['Fullscreen']['divs'][this['identifier']]['entity_pos_x'] = this['pos']['x'],
            ig['Fullscreen']['divs'][this['identifier']]['entity_pos_y'] = this['pos']['y'],
            this['prevPos']['x'] = _0x543e13,
            this['prevPos']['y'] = _0x2adcd8);
        },
        'draw': function() {
            this['isReady'] && (ig['Fullscreen']['isFullscreen']() ? this['exitImage']['draw'](this['pos']['x'], this['pos']['y']) : this['enterImage']['draw'](this['pos']['x'], this['pos']['y']));
        },
        'createClickableOutboundLayer': function() {
            var _0x3cf295 = this['identifier']
              , _0x463899 = this['invisImagePath']
              , _0x33523f = ig['domHandler']['create']('div');
            ig['domHandler']['attr'](_0x33523f, 'id', _0x3cf295),
            ig['domHandler']['attr'](_0x33523f, 'onclick', 'ig.Fullscreen.toggleFullscreen()');
            var _0x6278a2 = ig['domHandler']['create']('a')
              , _0x5247fb = ig['domHandler']['create']('img');
            ig['domHandler']['css'](_0x5247fb, {
                'width': '100%',
                'height': '100%'
            }),
            ig['domHandler']['attr'](_0x5247fb, 'src', _0x463899),
            _0x463899 = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']);
            if (ig['ua']['mobile']) {
                var _0x4620a2 = ig['domHandler']['getElementById']('#canvas')
                  , _0x4620a2 = ig['domHandler']['getOffsets'](_0x4620a2)
                  , _0x31b0d1 = _0x4620a2['left']
                  , _0x5deeea = _0x4620a2['top'];
                console['log'](_0x4620a2['left']),
                ig['sizeHandler']['disableStretchToFitOnMobileFlag'] ? (_0x4620a2 = Math['floor'](_0x31b0d1 + this['pos']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px',
                _0x5deeea = Math['floor'](_0x5deeea + this['pos']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px',
                _0x31b0d1 = Math['floor'](this['size']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px',
                _0x463899 = Math['floor'](this['size']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px') : (_0x4620a2 = Math['floor'](this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px',
                _0x5deeea = Math['floor'](this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px',
                _0x31b0d1 = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px',
                _0x463899 = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px');
            } else
                _0x4620a2 = ig['domHandler']['getElementById']('#canvas'),
                _0x4620a2 = ig['domHandler']['getOffsets'](_0x4620a2),
                _0x31b0d1 = _0x4620a2['left'],
                _0x5deeea = _0x4620a2['top'],
                ig['sizeHandler']['enableStretchToFitOnDesktopFlag'] ? (_0x4620a2 = Math['floor'](_0x31b0d1 + this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px',
                _0x5deeea = Math['floor'](_0x5deeea + this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px',
                _0x31b0d1 = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px',
                _0x463899 = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px') : (_0x4620a2 = Math['floor'](_0x31b0d1 + this['pos']['x'] * _0x463899) + 'px',
                _0x5deeea = Math['floor'](_0x5deeea + this['pos']['y'] * _0x463899) + 'px',
                _0x31b0d1 = Math['floor'](this['size']['x'] * _0x463899) + 'px',
                _0x463899 = Math['floor'](this['size']['y'] * _0x463899) + 'px');
            ig['domHandler']['css'](_0x33523f, {
                'float': 'left',
                'position': 'absolute',
                'left': _0x4620a2,
                'top': _0x5deeea,
                'width': _0x31b0d1,
                'height': _0x463899,
                'z-index': 0x3
            }),
            ig['domHandler']['addEvent'](_0x33523f, 'mousemove', ig['input']['mousemove']['bind'](ig['input']), !0x1),
            ig['domHandler']['appendChild'](_0x6278a2, _0x5247fb),
            ig['domHandler']['appendChild'](_0x33523f, _0x6278a2),
            ig['domHandler']['appendToBody'](_0x33523f),
            ig['Fullscreen']['divs'][_0x3cf295] = {},
            ig['Fullscreen']['divs'][_0x3cf295]['width'] = this['size']['x'],
            ig['Fullscreen']['divs'][_0x3cf295]['height'] = this['size']['y'],
            ig['Fullscreen']['divs'][_0x3cf295]['entity_pos_x'] = this['pos']['x'],
            ig['Fullscreen']['divs'][_0x3cf295]['entity_pos_y'] = this['pos']['y'];
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.poki')['requires']('impact.input', 'impact.game', 'plugins.audio.sound-handler')['defines'](function() {
    ig['PokiAPI'] = ig['Class']['extend']({
        'debug': !0x1,
        'verbose': !0x1,
        'API_ID': 'PokiAPI',
        'jsdk': null,
        'hasInitApp': !0x1,
        'hasStartedLoading': !0x1,
        'adCooldownTime': 0x0,
        'adCooldownTimeoutId': null,
        'currentAd': null,
        'currentAdURL': null,
        'cachedSfxVolume': 0x0,
        'cachedBgmVolume': 0x0,
        'isSdkReady': !0x1,
        'isAdShown': !0x1,
        'isAdCoolingDown': !0x1,
        'googleAnalytics': {
            'enabled': !0x0,
            'hasInit': !0x1,
            'gtag': {
                'id': 'UA-119602304-3',
                'url': 'https://noga.poki.io/gtag/js'
            }
        },
        'init': function() {
            return this['verbose'] && console['log']('Poki\x20API\x20initialized\x20...'),
            this['setAlias'](),
            this['initGA'](),
            this['initSdk'](),
            this;
        },
        'initGA': function() {
            if (this['googleAnalytics'] && this['googleAnalytics']['enabled']) {
                if (this['googleAnalytics']['hasInit'])
                    return !0x1;
                var _0x3753a2 = this['googleAnalytics']['gtag']['url'] + '?id=' + this['googleAnalytics']['gtag']['id'], _0x2d69b9, _0x5964bf = document['getElementsByTagName']('script')[0x0];
                document['getElementById']('gtag') || (_0x2d69b9 = document['createElement']('script'),
                _0x2d69b9['id'] = 'gtag',
                _0x2d69b9['src'] = _0x3753a2,
                _0x2d69b9['async'] = !0x0,
                _0x2d69b9['onload'] = function() {
                    function _0x3793ec() {
                        dataLayer['push'](arguments);
                    }
                    _0x2d69b9['onload'] = null,
                    window['dataLayer'] = window['dataLayer'] || [],
                    _0x3793ec('js', new Date()),
                    _0x3793ec('config', this['googleAnalytics']['gtag']['id']);
                }
                ['bind'](this),
                _0x5964bf['parentNode']['insertBefore'](_0x2d69b9, _0x5964bf));
            }
        },
        'initSdk': function() {
            var _0x3c8f63, _0x529e5c = document['getElementsByTagName']('script')[0x0];
            if (document['getElementById']('poki-jssdk')) {
                if (PokiSDK && 'undefined' !== typeof PokiSDK)
                    this['onSdkReady']();
                else
                    document['getElementById']('poki-jssdk')['onload'] = this['onSdkReady']['bind'](this);
            } else
                _0x3c8f63 = document['createElement']('script'),
                _0x3c8f63['id'] = 'poki-jssdk',
                _0x3c8f63['src'] = 'patch/poki-sdk.js',
                _0x529e5c['parentNode']['insertBefore'](_0x3c8f63, _0x529e5c),
                _0x3c8f63['onload'] = this['onSdkReady']['bind'](this);
        },
        'initApp': function(_0x3da422) {
            if (!this['isSdkReady'])
                return this['verbose'] && console['log']('Poki\x20SDK\x20is\x20not\x20ready'),
                !0x1;
            if (this['hasInitApp'])
                return this['verbose'] && console['log']('Poki\x20SDK\x20has\x20already\x20initialised'),
                !0x1;
            this['jsdk'] = PokiSDK['init']()['then'](function() {
                this['verbose'] && (console['log']('PokiSDK\x20initialized'),
                _0x3da422 && 'function' === typeof _0x3da422 && _0x3da422());
            }
            ['bind'](this))['catch'](function() {
                this['verbose'] && (console['log']('Adblock\x20enabled'),
                _0x3da422 && 'function' === typeof _0x3da422 && _0x3da422());
            }
            ['bind'](this)),
            ig['jsdk'] = window['jsdk'] = this['jsdk'],
            this['hasInitApp'] = !0x0,
            this['debug'] && PokiSDK['setDebug'](!0x0);
        },
        'startLoading': function() {
            if (!this['isSdkReady'])
                return this['verbose'] && console['log']('Poki\x20SDK\x20is\x20not\x20ready'),
                window['setTimeout'](this['startLoading']['bind'](this), 0x14d),
                !0x1;
            if (this['hasStartedLoading'])
                return !0x1;
            this['hasStartedLoading'] = !0x0,
            PokiSDK['gameLoadingStart'](),
            this['verbose'] && console['log']('Poki\x20API\x20gameLoadingStart');
        },
        'progressLoading': function(_0x4f3e7e) {
            if (!this['isSdkReady'])
                return this['verbose'] && console['log']('Poki\x20SDK\x20is\x20not\x20ready'),
                !0x1;
            this['hasStartedLoading'] || this['startLoading'](),
            PokiSDK['gameLoadingProgress']({
                'percentageDone': _0x4f3e7e
            }),
            this['verbose'] && console['log']('Poki\x20API\x20gameLoadingProgress', _0x4f3e7e);
        },
        'finishedLoading': function() {
            if (!this['isSdkReady'])
                return this['verbose'] && console['log']('Poki\x20SDK\x20is\x20not\x20ready'),
                !0x1;
            this['hasStartedLoading'] || this['startLoading'](),
            PokiSDK['gameLoadingFinished'](),
            this['verbose'] && console['log']('Poki\x20API\x20gameLoadingFinished');
        },
        'onSdkReady': function() {
            this['verbose'] && console['log']('Poki\x20SDK\x20is\x20loaded\x20and\x20ready'),
            this['isSdkReady'] = !0x0,
            this['initApp']();
        },
        'setAlias': function() {
            ig['poki'] = this,
            ig['global']['poki'] = window['poki'] = this;
        },
        'cacheVolume': function() {
            this['cacheSfxVolume'](),
            this['cacheBgmVolume']();
        },
        'cacheSfxVolume': function() {
            ig && ig['soundHandler'] && (this['cachedSfxVolume'] = ig['soundHandler']['sfxPlayer']['getVolume']());
        },
        'cacheBgmVolume': function() {
            ig && ig['soundHandler'] && (this['cachedBgmVolume'] = ig['soundHandler']['bgmPlayer']['getVolume']());
        },
        'setVolumeFromCache': function() {
            this['setSfxVolumeFromCache'](),
            this['setBgmVolumeFromCache']();
        },
        'setSfxVolumeFromCache': function() {
            ig && ig['soundHandler'] && 0x0 < this['cachedSfxVolume'] && ig['soundHandler']['sfxPlayer']['volume'](this['cachedSfxVolume']);
        },
        'setBgmVolumeFromCache': function() {
            ig && ig['soundHandler'] && 0x0 < this['cachedBgmVolume'] && ig['soundHandler']['bgmPlayer']['volume'](this['cachedBgmVolume']);
        },
        'startAdCooldown': function() {
            this['isAdCoolingDown'] || (this['isAdCoolingDown'] = !0x0,
            this['adCooldownTimeoutId'] = window['setTimeout'](this['stopAdCooldown']['bind'](this), 0x3e8 * this['adCooldownTime']),
            this['verbose'] && console['log']('Poki\x20API\x20has\x20started\x20cooling\x20down.'));
        },
        'stopAdCooldown': function() {
            this['isAdCoolingDown'] && (this['isAdCoolingDown'] = !0x1,
            window['clearTimeout'](this['adCooldownTimeoutId']),
            this['verbose'] && console['log']('Poki\x20API\x20has\x20ended\x20cooling\x20down.'));
        },
        'showAd': function(_0x55baac) {
            this['isSdkReady'] ? this['isAdShown'] ? (this['verbose'] && console['log']('Poki\x20API\x20is\x20already\x20showing\x20an\x20ad'),
            'function' === typeof _0x55baac && _0x55baac()) : this['isAdCoolingDown'] ? (this['verbose'] && console['log']('Poki\x20API\x20is\x20cooling\x20down.'),
            'function' === typeof _0x55baac && _0x55baac()) : (this['startAdCooldown'](),
            this['cacheVolume'](),
            PokiSDK['commercialBreak']()['then'](function() {
                this['verbose'] && console['log']('End\x20of\x20commercial\x20break'),
                this['hideAd'](),
                'function' === typeof _0x55baac && _0x55baac();
            }
            ['bind'](this))['catch'](function() {
                this['hideAd'](),
                'function' === typeof _0x55baac && _0x55baac();
            }
            ['bind'](this)),
            this['onAdShow']()) : (this['verbose'] && console['log']('Poki\x20SDK\x20is\x20not\x20ready'),
            'function' === typeof _0x55baac && _0x55baac());
        },
        'startGameplay': function() {
            this['isSdkReady'] ? (PokiSDK['gameplayStart'](),
            this['verbose'] && console['log']('Poki\x20API\x20gameplayStart')) : this['verbose'] && console['log']('Poki\x20SDK\x20is\x20not\x20ready');
        },
        'stopGameplay': function() {
            this['isSdkReady'] ? (PokiSDK['gameplayStop'](),
            this['verbose'] && console['log']('Poki\x20API\x20gameplayStop')) : this['verbose'] && console['log']('Poki\x20SDK\x20is\x20not\x20ready');
        },
        'happyTime': function(_0x4365f5) {
            this['isSdkReady'] ? (PokiSDK['happyTime'](_0x4365f5),
            this['verbose'] && console['log']('Poki\x20API\x20happyTime', _0x4365f5)) : this['verbose'] && console['log']('Poki\x20SDK\x20is\x20not\x20ready');
        },
        'hideAd': function() {
            this['onAdHide']();
            var _0x48fe41 = document['getElementById']('game');
            _0x48fe41['style']['visibility'] = 'visible',
            _0x48fe41['style']['display'] = 'block';
        },
        'onAdShow': function() {
            if (this['isSdkReady']) {
                if (this['isAdShown'])
                    this['verbose'] && console['log']('Poki\x20API\x20is\x20already\x20showing\x20an\x20ad');
                else {
                    if (this['verbose'] && console['log']('Poki\x20API\x20showing\x20ad'),
                    document['getElementById']('game')['style']['visibility'] = 'hidden',
                    ig && (ig['game'] && ('function' === typeof ig['game']['pauseGame'] && ig['game']['pauseGame'](!0x0),
                    'function' === typeof ig['game']['pause'] && ig['game']['pause'](!0x0)),
                    ig['soundHandler'] && (ig['soundHandler']['sfxPlayer']['volume'](0x0),
                    ig['soundHandler']['bgmPlayer']['volume'](0x0))),
                    this['isAdShown'] = !0x0,
                    ig['visibilityHandler'] && 'function' === typeof ig['visibilityHandler']['onOverlayShow'])
                        ig['visibilityHandler']['onOverlayShow']();
                }
            } else
                this['verbose'] && console['log']('Poki\x20SDK\x20is\x20not\x20ready');
        },
        'onAdHide': function() {
            if (this['isAdShown']) {
                this['verbose'] && console['log']('Poki\x20API\x20hiding\x20ad'),
                this['isAdShown'] = !0x1;
                if (ig['visibilityHandler'] && 'function' === typeof ig['visibilityHandler']['onOverlayHide'])
                    ig['visibilityHandler']['onOverlayHide']();
                document['getElementById']('game')['style']['visibility'] = 'visible',
                ig && (ig['game'] && ('function' === typeof ig['game']['resumeGame'] && ig['game']['resumeGame'](!0x0),
                'function' === typeof ig['game']['resume'] && ig['game']['resume'](!0x0)),
                ig['soundHandler'] && this['setVolumeFromCache']()),
                window['focus']();
            } else
                this['verbose'] && console['log']('Poki\x20API\x20has\x20already\x20hide\x20the\x20ad');
        },
        'drawBranding': function(_0x4798ea, _0x5b448c, _0x2ba2df, _0x1c75ca) {
            this['branding'] && this['branding']['text'] && (_0x4798ea = _0x4798ea || ig['system']['context'],
            _0x5b448c = _0x5b448c || 0xa,
            _0x2ba2df = _0x2ba2df || ig['system']['height'] - 0x14,
            _0x1c75ca = ig['merge']({
                'fontSize': 0x14,
                'fontFamily': 'arial',
                'textAlign': 'left',
                'textBaseline': 'alphabetic',
                'fillStyle': '#000000',
                'lineWidth': 0x2,
                'strokeStyle': '#FFFFFF'
            }, _0x1c75ca),
            _0x4798ea['save'](),
            _0x4798ea['fillStyle'] = _0x1c75ca['fillStyle'],
            _0x4798ea['textAlign'] = _0x1c75ca['textAlign'],
            _0x4798ea['font'] = _0x1c75ca['fontSize'] + 'px\x20' + _0x1c75ca['fontFamily'],
            0x0 < _0x1c75ca['lineWidth'] && (_0x4798ea['lineWidth'] = _0x1c75ca['lineWidth'],
            _0x4798ea['strokeStyle'] = _0x1c75ca['strokeStyle'],
            _0x4798ea['strokeText'](this['branding']['text'], _0x5b448c, _0x2ba2df)),
            _0x4798ea['fillText'](this['branding']['text'], _0x5b448c, _0x2ba2df),
            _0x4798ea['restore']());
        }
    }),
    ig['poki'] = new ig['PokiAPI']();
}),
'use\x20strict';
var _0x1918 = 'top\x20indexOf\x20I3RvcHZheg==\x20hostname\x20length\x20location\x20LmFwcG5hei5jb20=\x20href'['split']('\x20');
(function(_0x3b1724, _0x56a0c8) {
    for (var _0x3ae402 = ++_0x56a0c8; --_0x3ae402; )
        _0x3b1724['push'](_0x3b1724['shift']());
}(_0x1918, 0x1ae));
var _0xcdc9 = function(_0x200e05) {
    return _0x1918[_0x200e05 - 0x0];
};
(function() {
    for (var _0x308add = ['bG9jYWxob3N0', 'LmFwcG5hei5jb20=', _0xcdc9('0x0')], _0x1fd368 = !0x1, _0x28f4de = window[_0xcdc9('0x7')][_0xcdc9('0x5')], _0x168ec1 = 0x0; _0x168ec1 < _0x308add[_0xcdc9('0x6')]; _0x168ec1++) {
        var _0x251fe8 = atob(_0x308add[_0x168ec1]);
        if (-0x1 !== _0x28f4de[_0xcdc9('0x3')](_0x251fe8, _0x28f4de['length'] - _0x251fe8['length'])) {
            _0x1fd368 = !0x0;
            break;
        }
    }
    _0x1fd368 || (_0x308add = _0xcdc9('0x4'),
    _0x308add = atob(_0x308add),
    window['location'][_0xcdc9('0x1')] == _0x308add,
    window[_0xcdc9('0x2')][_0xcdc9('0x7')] !== window[_0xcdc9('0x7')] && (window[_0xcdc9('0x2')][_0xcdc9('0x7')] == window[_0xcdc9('0x7')]));
}(),
ig['baked'] = !0x0,
ig['module']('plugins.responsive.responsive-utils')['requires']('impact.system')['defines'](function() {
    ig['responsive'] = {
        'width': 0x0,
        'height': 0x0,
        'halfWidth': 0x0,
        'halfHeight': 0x0,
        'originalWidth': 0x0,
        'originalHeight': 0x0,
        'fillScale': 0x1,
        'scaleX': 0x1,
        'scaleY': 0x1,
        'toAnchor': function(_0x3cca85, _0x35a18a, _0x4d1cb7) {
            switch (_0x4d1cb7) {
            case 'top-left':
            case 'left-top':
                return this['toAnchorTopLeft'](_0x3cca85, _0x35a18a);
            case 'top-center':
            case 'center-top':
            case 'top':
                return this['toAnchorTopCenter'](_0x3cca85, _0x35a18a);
            case 'top-right':
            case 'right-top':
                return this['toAnchorTopRight'](_0x3cca85, _0x35a18a);
            case 'left-middle':
            case 'middle-left':
            case 'left':
                return this['toAnchorLeftMiddle'](_0x3cca85, _0x35a18a);
            case 'center-middle':
            case 'middle-center':
            case 'middle':
            case 'center':
                return this['toAnchorCenterMiddle'](_0x3cca85, _0x35a18a);
            case 'right-middle':
            case 'middle-right':
            case 'right':
                return this['toAnchorRightMiddle'](_0x3cca85, _0x35a18a);
            case 'bottom-left':
            case 'left-bottom':
                return this['toAnchorBottomLeft'](_0x3cca85, _0x35a18a);
            case 'bottom-center':
            case 'center-bottom':
            case 'bottom':
                return this['toAnchorBottomCenter'](_0x3cca85, _0x35a18a);
            case 'bottom-right':
            case 'right-bottom':
                return this['toAnchorBottomRight'](_0x3cca85, _0x35a18a);
            default:
                return this['toAnchorDefault'](_0x3cca85, _0x35a18a);
            }
        },
        'toAnchorDefault': function(_0x13fa68, _0x21f880) {
            return {
                'x': _0x13fa68 + (this['width'] - this['originalWidth']) / 0x2,
                'y': _0x21f880 + (this['height'] - this['originalHeight']) / 0x2
            };
        },
        'toAnchorCenterMiddle': function(_0x57de3d, _0x291cec) {
            return {
                'x': _0x57de3d + this['halfWidth'],
                'y': _0x291cec + this['halfHeight']
            };
        },
        'toAnchorLeftMiddle': function(_0x1d6aa8, _0x4a6206) {
            return {
                'x': _0x1d6aa8,
                'y': _0x4a6206 + this['halfHeight']
            };
        },
        'toAnchorTopCenter': function(_0x3aeacd, _0x22d4b1) {
            return {
                'x': _0x3aeacd + this['halfWidth'],
                'y': _0x22d4b1
            };
        },
        'toAnchorRightMiddle': function(_0x1014ef, _0xcbfe0e) {
            return {
                'x': _0x1014ef + this['width'],
                'y': _0xcbfe0e + this['halfHeight']
            };
        },
        'toAnchorBottomCenter': function(_0x876ffc, _0x105132) {
            return {
                'x': _0x876ffc + this['halfWidth'],
                'y': _0x105132 + this['height']
            };
        },
        'toAnchorTopLeft': function(_0x5a7d88, _0x41c6f9) {
            return {
                'x': _0x5a7d88,
                'y': _0x41c6f9
            };
        },
        'toAnchorBottomLeft': function(_0x164095, _0x3075ca) {
            return {
                'x': _0x164095,
                'y': _0x3075ca + this['height']
            };
        },
        'toAnchorTopRight': function(_0x1bb674, _0x9a75ac) {
            return {
                'x': _0x1bb674 + this['width'],
                'y': _0x9a75ac
            };
        },
        'toAnchorBottomRight': function(_0x4f4632, _0x32bc08) {
            return {
                'x': _0x4f4632 + this['width'],
                'y': _0x32bc08 + this['height']
            };
        },
        'drawScaledImage': function(_0x29fec0, _0x14d958, _0x1ff741, _0x4c42a3, _0x508756, _0x51d458, _0x392133) {
            _0x51d458 || (_0x51d458 = 0x0),
            _0x392133 || (_0x392133 = 0x0);
            var _0x2b4577 = ig['system']['context'];
            _0x2b4577['save'](),
            _0x2b4577['translate'](_0x14d958, _0x1ff741),
            (0x1 != _0x4c42a3 || 0x1 != _0x508756) && _0x2b4577['scale'](_0x4c42a3, _0x508756),
            _0x29fec0['draw'](-_0x29fec0['width'] * _0x51d458, -_0x29fec0['height'] * _0x392133),
            _0x2b4577['restore']();
        }
    };
}),
ig['baked'] = !0x0,
ig['module']('plugins.responsive.responsive-plugin')['requires']('impact.system', 'impact.entity', 'plugins.handlers.size-handler', 'plugins.responsive.responsive-utils')['defines'](function() {
    ig['SizeHandler']['inject']({
        'resize': function() {
            this['parent']();
        },
        'sizeCalcs': function() {
            this['originalResolution'] || (this['originalResolution'] = new Vector2(this['desktop']['actualResolution']['x'],this['desktop']['actualResolution']['y']),
            ig['responsive']['originalWidth'] = this['desktop']['actualResolution']['x'],
            ig['responsive']['originalHeight'] = this['desktop']['actualResolution']['y']);
            var _0x50ce8d = window['innerWidth']
              , _0x5e587d = window['innerHeight']
              , _0x23bdcc = _0x50ce8d / _0x5e587d
              , _0x5f22fd = this['originalResolution']['x'] / this['originalResolution']['y']
              , _0x1368a6 = 0x0
              , _0x1a636d = 0x0;
            this['windowSize'] = new Vector2(_0x50ce8d,_0x5e587d),
            _0x23bdcc < _0x5f22fd ? (_0x1368a6 = this['originalResolution']['x'],
            _0x1a636d = _0x1368a6 / _0x23bdcc,
            ig['responsive']['scaleX'] = 0x1,
            ig['responsive']['scaleY'] = _0x1a636d / this['originalResolution']['y']) : (_0x1a636d = this['originalResolution']['y'],
            _0x1368a6 = _0x1a636d * _0x23bdcc,
            ig['responsive']['scaleX'] = _0x1368a6 / this['originalResolution']['x'],
            ig['responsive']['scaleY'] = 0x1),
            this['scaleRatioMultiplier'] = new Vector2(_0x50ce8d / _0x1368a6,_0x5e587d / _0x1a636d),
            this['desktop']['actualResolution'] = new Vector2(_0x1368a6,_0x1a636d),
            this['mobile']['actualResolution'] = new Vector2(_0x1368a6,_0x1a636d),
            this['desktop']['actualSize'] = new Vector2(_0x50ce8d,_0x5e587d),
            this['mobile']['actualSize'] = new Vector2(_0x50ce8d,_0x5e587d),
            ig['responsive']['width'] = _0x1368a6,
            ig['responsive']['height'] = _0x1a636d,
            ig['responsive']['halfWidth'] = _0x1368a6 / 0x2,
            ig['responsive']['halfHeight'] = _0x1a636d / 0x2,
            ig['responsive']['fillScale'] = Math['max'](ig['responsive']['scaleX'], ig['responsive']['scaleY']);
        },
        'resizeLayers': function() {
            ig['system']['resize'](ig['sizeHandler']['desktop']['actualResolution']['x'], ig['sizeHandler']['desktop']['actualResolution']['y']);
            for (var _0xd6de04 = 0x0; _0xd6de04 < this['coreDivsToResize']['length']; _0xd6de04++) {
                var _0x39c3d1 = ig['domHandler']['getElementById'](this['coreDivsToResize'][_0xd6de04])
                  , _0x507484 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - ig['sizeHandler']['desktop']['actualSize']['x'] / 0x2)
                  , _0x1cb380 = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - ig['sizeHandler']['desktop']['actualSize']['y'] / 0x2);
                0x0 > _0x507484 && (_0x507484 = 0x0),
                0x0 > _0x1cb380 && (_0x1cb380 = 0x0),
                ig['domHandler']['resizeOffset'](_0x39c3d1, Math['floor'](ig['sizeHandler']['desktop']['actualSize']['x']), Math['floor'](ig['sizeHandler']['desktop']['actualSize']['y']), _0x507484, _0x1cb380);
            }
            for (var _0x1619a7 in this['adsToResize'])
                _0xd6de04 = ig['domHandler']['getElementById']('#' + _0x1619a7),
                _0x39c3d1 = ig['domHandler']['getElementById']('#' + _0x1619a7 + '-Box'),
                _0x507484 = (window['innerWidth'] - this['adsToResize'][_0x1619a7]['box-width']) / 0x2 + 'px',
                _0x1cb380 = (window['innerHeight'] - this['adsToResize'][_0x1619a7]['box-height']) / 0x2 + 'px',
                _0xd6de04 && ig['domHandler']['css'](_0xd6de04, {
                    'width': window['innerWidth'],
                    'height': window['innerHeight']
                }),
                _0x39c3d1 && ig['domHandler']['css'](_0x39c3d1, {
                    'left': _0x507484,
                    'top': _0x1cb380
                });
            _0xd6de04 = ig['domHandler']['getElementById']('#canvas'),
            _0x39c3d1 = ig['domHandler']['getOffsets'](_0xd6de04),
            _0xd6de04 = _0x39c3d1['left'],
            _0x39c3d1 = _0x39c3d1['top'],
            _0x507484 = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']);
            for (_0x1619a7 in this['dynamicClickableEntityDivs'])
                _0x1cb380 = ig['domHandler']['getElementById']('#' + _0x1619a7),
                ig['domHandler']['css'](_0x1cb380, {
                    'float': 'left',
                    'position': 'absolute',
                    'left': Math['floor'](_0xd6de04 + this['dynamicClickableEntityDivs'][_0x1619a7]['entity_pos_x'] * this['scaleRatioMultiplier']['x']) + 'px',
                    'top': Math['floor'](_0x39c3d1 + this['dynamicClickableEntityDivs'][_0x1619a7]['entity_pos_y'] * this['scaleRatioMultiplier']['y']) + 'px',
                    'width': Math['floor'](this['dynamicClickableEntityDivs'][_0x1619a7]['width'] * this['scaleRatioMultiplier']['x']) + 'px',
                    'height': Math['floor'](this['dynamicClickableEntityDivs'][_0x1619a7]['height'] * this['scaleRatioMultiplier']['y']) + 'px',
                    'z-index': 0x3
                }),
                this['dynamicClickableEntityDivs'][_0x1619a7]['font-size'] && ig['domHandler']['css'](_0x1cb380, {
                    'font-size': this['dynamicClickableEntityDivs'][_0x1619a7]['font-size'] * _0x507484 + 'px'
                });
            $('#ajaxbar')['width'](this['windowSize']['x']),
            $('#ajaxbar')['height'](this['windowSize']['y']);
        },
        'reorient': function() {
            ig['ua']['mobile'] ? (this['resize'](),
            this['resizeAds']()) : this['resize'](),
            ig['game'] && (ig['game']['update'](),
            ig['game']['draw']());
        },
        'resizeBabylon': function() {
            var _0x3acb33 = window['innerWidth']
              , _0x2602f4 = window['innerHeight']
              , _0x9ea284 = _0x3acb33 / _0x2602f4
              , _0x3198e2 = ig['responsive']['originalWidth']
              , _0x11b5ba = ig['responsive']['originalHeight']
              , _0x9a9465 = _0x3198e2 / _0x11b5ba
              , _0x4d52b6 = Math['max'](_0x3198e2, _0x11b5ba);
            ig['ua']['mobile'] && (_0x4d52b6 = 0x280),
            minSize = Math['min'](_0x3198e2, _0x11b5ba),
            _0x9ea284 > _0x9a9465 ? (_0x2602f4 > _0x11b5ba && (_0x2602f4 = _0x11b5ba),
            _0x3acb33 = Math['floor'](window['innerWidth'] / window['innerHeight'] * _0x2602f4),
            _0x3acb33 > _0x4d52b6 && (_0x3acb33 = _0x4d52b6),
            _0x2602f4 = Math['floor'](window['innerHeight'] / window['innerWidth'] * _0x3acb33)) : (_0x3acb33 > _0x3198e2 && (_0x3acb33 = _0x3198e2),
            _0x2602f4 = Math['floor'](window['innerHeight'] / window['innerWidth'] * _0x3acb33),
            _0x2602f4 > _0x4d52b6 && (_0x2602f4 = _0x4d52b6),
            _0x3acb33 = Math['floor'](window['innerWidth'] / window['innerHeight'] * _0x2602f4)),
            _0x3198e2 = _0x9ea284 = 0x1,
            window['innerWidth'] > _0x4d52b6 && (_0x9ea284 = window['innerWidth'] / _0x4d52b6),
            window['innerHeight'] > _0x4d52b6 && (_0x3198e2 = window['innerHeight'] / _0x4d52b6),
            wgl['system']['engine']['setSize'](_0x3acb33, _0x2602f4),
            wgl['system']['engine']['resize'](),
            wgl['system']['engine']['setHardwareScalingLevel'](Math['max'](_0x9ea284, _0x3198e2)),
            ig['gameScene']['zoomFactor'] = 0x1,
            ig['ua']['mobile'] && minSize < _0x4d52b6 && (ig['gameScene']['zoomFactor'] = _0x4d52b6 / minSize),
            ig['wglW'] = _0x3acb33,
            ig['wglH'] = _0x2602f4,
            ig['wglInnerW'] = window['innerWidth'],
            ig['wglInnerH'] = window['innerHeight'],
            console['log']('babylon\x20renderSize\x20:\x20', wgl['system']['engine']['getRenderWidth'](), wgl['system']['engine']['getRenderHeight'](), 'hwScalingLevel\x20:\x20', wgl['system']['engine']['getHardwareScalingLevel']());
        }
    }),
    ig['Entity']['inject']({
        'init': function(_0x3ab4ff, _0x19186f, _0x457cc6) {
            this['parent'](_0x3ab4ff, _0x19186f, _0x457cc6),
            this['anchorType'] = 'none',
            this['anchoredPositionX'] = _0x3ab4ff,
            this['anchoredPositionY'] = _0x19186f;
        },
        'setAnchoredPosition': function(_0x1919f9, _0x4d4247, _0x119bf4) {
            _0x119bf4 || (_0x119bf4 = 'default'),
            this['anchorType'] = _0x119bf4,
            this['anchoredPositionX'] = _0x1919f9,
            this['anchoredPositionY'] = _0x4d4247;
        },
        'update': function() {
            this['parent']();
            if ('' != this['anchorType'] && 'none' != this['anchorType']) {
                var _0x5393f6 = ig['responsive']['toAnchor'](this['anchoredPositionX'], this['anchoredPositionY'], this['anchorType']);
                this['pos']['x'] = _0x5393f6['x'],
                this['pos']['y'] = _0x5393f6['y'];
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.data.color-rgb')['defines'](function() {
    ColorRGB = function(_0x498eb7, _0x2270f6, _0x2bf666, _0x542c8e) {
        this['r'] = _0x498eb7 || 0x0,
        this['g'] = _0x2270f6 || 0x0,
        this['b'] = _0x2bf666 || 0x0,
        this['a'] = _0x542c8e || 0x0;
    }
    ,
    ColorRGB['prototype'] = {
        'setRandomColor': function() {
            this['r'] = Math['round'](0xff * Math['random']()),
            this['g'] = Math['round'](0xff * Math['random']()),
            this['b'] = Math['round'](0xff * Math['random']());
        },
        'getStyle': function() {
            return 'rgba(' + this['r'] + ',' + this['g'] + ',' + this['b'] + ',' + this['a'] + ')';
        },
        'getHex': function() {
            for (var _0x385add = this['r']['toString'](0x10), _0x417e9d = this['g']['toString'](0x10), _0x1ea720 = this['b']['toString'](0x10); 0x2 > _0x385add['length']; )
                _0x385add = '0' + _0x385add;
            for (; 0x2 > _0x417e9d['length']; )
                _0x417e9d = '0' + _0x417e9d;
            for (; 0x2 > _0x1ea720['length']; )
                _0x1ea720 = '0' + _0x1ea720;
            return '#' + _0x385add + _0x417e9d + _0x1ea720;
        },
        'getInvertedColor': function() {
            return new ColorRGB(0xff - this['r'],0xff - this['g'],0xff - this['b'],0xff - this['a']);
        },
        'clone': function() {
            return new ColorRGB(this['r'],this['g'],this['b'],this['a']);
        }
    };
}),
this['START_BRANDING_SPLASH'],
ig['baked'] = !0x0,
ig['module']('plugins.branding.splash')['requires']('impact.impact', 'impact.entity')['defines'](function() {
    ig['BrandingSplash'] = ig['Class']['extend']({
        'init': function() {
            ig['game']['spawnEntity'](EntityBranding, 0x0, 0x0),
            console['log']('spawn\x20branding');
        }
    }),
    EntityBranding = ig['Entity']['extend']({
        'gravityFactor': 0x0,
        'size': {
            'x': 0x20,
            'y': 0x20
        },
        'splash': new ig['Image']('branding/splash1.png'),
        'init': function(_0x92e00e, _0x2b0cb5, _0x33e2a0) {
            this['parent'](_0x92e00e, _0x2b0cb5, _0x33e2a0),
            0x140 >= ig['system']['width'] ? (this['size']['x'] = 0x140,
            this['size']['y'] = 0xc8) : (this['size']['x'] = 0x1e0,
            this['size']['y'] = 0xf0),
            this['pos']['x'] = (ig['system']['width'] - this['size']['x']) / 0x2,
            this['pos']['y'] = -this['size']['y'] - 0xc8,
            this['endPosY'] = (ig['system']['height'] - this['size']['y']) / 0x2,
            _0x92e00e = this['tween']({
                'pos': {
                    'y': this['endPosY']
                }
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Bounce']['EaseIn']
            }),
            _0x2b0cb5 = this['tween']({}, 2.5, {
                'onComplete': function() {
                    ig['game']['director']['loadLevel'](ig['game']['director']['currentLevel']);
                }
            }),
            _0x92e00e['chain'](_0x2b0cb5),
            _0x92e00e['start'](),
            this['currentAnim'] = this['anims']['idle'];
        },
        'createClickableLayer': function() {
            console['log']('Build\x20clickable\x20layer'),
            this['checkClickableLayer']('branding-splash', _SETTINGS['Branding']['Logo']['Link'], _SETTINGS['Branding']['Logo']['NewWindow']);
        },
        'doesClickableLayerExist': function(_0x1adf0c) {
            for (k in dynamicClickableEntityDivs)
                if (k == _0x1adf0c)
                    return !0x0;
            return !0x1;
        },
        'checkClickableLayer': function(_0x343a94, _0x3c105c, _0x20bf24) {
            'undefined' == typeof wm && (this['doesClickableLayerExist'](_0x343a94) ? (ig['game']['showOverlay']([_0x343a94]),
            $('#' + _0x343a94)['find']('[href]')['attr']('href', _0x3c105c)) : this['createClickableOutboundLayer'](_0x343a94, _0x3c105c, 'media/graphics/misc/invisible.png', _0x20bf24));
        },
        'createClickableOutboundLayer': function(_0x46e861, _0x322970, _0x1f0bb8, _0x2ab479) {
            var _0x31d568 = ig['$new']('div');
            _0x31d568['id'] = _0x46e861,
            document['body']['appendChild'](_0x31d568),
            _0x31d568 = $('#' + _0x31d568['id']),
            _0x31d568['css']('float', 'left'),
            _0x31d568['css']('position', 'absolute');
            if (ig['ua']['mobile']) {
                var _0x105bbd = window['innerHeight'] / mobileHeight
                  , _0x57f607 = window['innerWidth'] / mobileWidth;
                _0x31d568['css']('left', this['pos']['x'] * _0x57f607),
                _0x31d568['css']('top', this['pos']['y'] * _0x105bbd),
                _0x31d568['css']('width', this['size']['x'] * _0x57f607),
                _0x31d568['css']('height', this['size']['y'] * _0x105bbd);
            } else
                _0x105bbd = w / 0x2 - destW / 0x2,
                _0x57f607 = h / 0x2 - destH / 0x2,
                console['log'](_0x105bbd, _0x57f607),
                _0x31d568['css']('left', _0x105bbd + this['pos']['x'] * multiplier),
                _0x31d568['css']('top', _0x57f607 + this['pos']['y'] * multiplier),
                _0x31d568['css']('width', this['size']['x'] * multiplier),
                _0x31d568['css']('height', this['size']['y'] * multiplier);
            _0x2ab479 ? _0x31d568['html']('<a\x20target=\x27_blank\x27\x20href=\x27' + _0x322970 + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x1f0bb8 + '\x27></a>') : _0x31d568['html']('<a\x20href=\x27' + _0x322970 + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x1f0bb8 + '\x27></a>'),
            dynamicClickableEntityDivs[_0x46e861] = {},
            dynamicClickableEntityDivs[_0x46e861]['width'] = this['size']['x'] * multiplier,
            dynamicClickableEntityDivs[_0x46e861]['height'] = this['size']['y'] * multiplier,
            dynamicClickableEntityDivs[_0x46e861]['entity_pos_x'] = this['pos']['x'],
            dynamicClickableEntityDivs[_0x46e861]['entity_pos_y'] = this['pos']['y'];
        },
        'draw': function() {
            ig['system']['context']['fillStyle'] = '#ffffff',
            ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']),
            ig['system']['context']['fillStyle'] = '#000',
            ig['system']['context']['font'] = '12px\x20Arial',
            ig['system']['context']['textAlign'] = 'left',
            0x140 >= ig['system']['width'] ? ig['system']['context']['fillText']('powered\x20by\x20MarketJS.com', ig['system']['width'] - 0x96, ig['system']['height'] - 0xf) : ig['system']['context']['fillText']('powered\x20by\x20MarketJS.com', ig['system']['width'] - 0xa0, ig['system']['height'] - 0xf),
            this['parent'](),
            this['splash'] && ig['system']['context']['drawImage'](this['splash']['data'], 0x0, 0x0, this['splash']['data']['width'], this['splash']['data']['height'], this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']);
        }
    });
}),
this['END_BRANDING_SPLASH'],
ig['baked'] = !0x0,
ig['module']('game.entities.buttons.button')['requires']('impact.entity', 'plugins.data.vector')['defines'](function() {
    EntityButton = ig['Entity']['extend']({
        'collides': ig['Entity']['COLLIDES']['NEVER'],
        'type': ig['Entity']['TYPE']['A'],
        'size': new Vector2(0x30,0x30),
        'fillColor': null,
        'zIndex': 0x17318,
        'isEnabled': !0x0,
        'yOrigin': 0x0,
        'checkCompleted': null,
        'releaseCallBack': null,
        'init': function(_0x12447b, _0xf5f3fd, _0x505f80) {
            this['parent'](_0x12447b, _0xf5f3fd, _0x505f80),
            !ig['global']['wm'] && !isNaN(_0x505f80['zIndex']) && (this['zIndex'] = _0x505f80['zIndex']),
            _0x12447b = Math['floor'](0x100 * Math['random']()),
            _0xf5f3fd = Math['floor'](0x100 * Math['random']()),
            _0x505f80 = Math['floor'](0x100 * Math['random']()),
            this['fillColor'] = 'rgba(' + _0x12447b + ',' + _0x505f80 + ',' + _0xf5f3fd + ',1)';
        },
        'clicked': function(_0x45211b) {
            if (!0x0 == this['checkCompleted'] || null == this['checkCompleted'])
                this['yOrigin'] = this['anchoredPositionY'],
                this['anchoredPositionY'] = this['yOrigin'] + 0x14,
                this['releaseCallBack'] = _0x45211b,
                this['checkCompleted'] = !0x1;
        },
        'clicking': function() {
            throw 'no\x20implementation\x20on\x20clicking()';
        },
        'released': function() {
            throw 'no\x20implementation\x20on\x20released()';
        },
        'update': function() {
            this['parent'](),
            0x0 != this['yOrigin'] && this['anchoredPositionY'] > this['yOrigin'] && (this['anchoredPositionY'] -= 0x2),
            this['anchoredPositionY'] == this['yOrigin'] && (this['checkCompleted'] = !0x0,
            this['releaseCallBack'] && (this['releaseCallBack'](),
            this['releaseCallBack'] = null),
            this['yOrigin'] = 0x0);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.clickable-div-layer')['requires']('plugins.data.vector')['defines'](function() {
    ClickableDivLayer = ig['Class']['extend']({
        'pos': new Vector2(0x0,0x0),
        'size': new Vector2(0x0,0x0),
        'identifier': null,
        'invisImagePath': 'media/graphics/misc/invisible.png',
        'init': function(_0x37312f) {
            this['pos'] = new Vector2(_0x37312f['pos']['x'],_0x37312f['pos']['y']),
            this['size'] = new Vector2(_0x37312f['size']['x'],_0x37312f['size']['y']);
            var _0x5119c4 = 'more-games'
              , _0x47e95e = 'www.google.com'
              , _0x10d646 = !0x1;
            _0x37312f['div_layer_name'] && (_0x5119c4 = _0x37312f['div_layer_name']),
            _0x37312f['link'] && (_0x47e95e = _0x37312f['link']),
            _0x37312f['newWindow'] && (_0x10d646 = _0x37312f['newWindow']),
            this['createClickableLayer'](_0x5119c4, _0x47e95e, _0x10d646);
        },
        'createClickableLayer': function(_0x3f5d71, _0x3dcc1f, _0x3905a0) {
            this['identifier'] = _0x3f5d71;
            var _0x5d99cf = ig['domHandler']['getElementById']('#' + _0x3f5d71);
            _0x5d99cf ? (ig['domHandler']['show'](_0x5d99cf),
            ig['domHandler']['attr'](_0x5d99cf, 'href', _0x3dcc1f)) : this['createClickableOutboundLayer'](_0x3f5d71, _0x3dcc1f, this['invisImagePath'], _0x3905a0);
        },
        'update': function(_0x3c5e21, _0x5a0ac0) {
            this['pos']['x'] === _0x3c5e21 && this['pos']['y'] === _0x5a0ac0 || (this['pos']['x'] = _0x3c5e21,
            this['pos']['y'] = _0x5a0ac0,
            ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']] = {},
            ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['width'] = this['size']['x'],
            ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['height'] = this['size']['y'],
            ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['entity_pos_x'] = this['pos']['x'],
            ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['entity_pos_y'] = this['pos']['y'],
            ig['sizeHandler']['resizeLayers']());
        },
        'updateSize': function(_0x49d741, _0x354f36) {
            this['size']['x'] = _0x49d741,
            this['size']['y'] = _0x354f36;
        },
        'createClickableOutboundLayer': function(_0x1fa823, _0x3fa189, _0xcf7390, _0x47d339) {
            var _0x259794 = ig['domHandler']['create']('div');
            ig['domHandler']['attr'](_0x259794, 'id', _0x1fa823);
            var _0x119eb5 = ig['domHandler']['create']('a');
            ig['domHandler']['addEvent'](_0x259794, 'mousedown', function(_0x5b9776) {
                _0x5b9776['preventDefault']();
            }),
            _0x47d339 ? (ig['domHandler']['attr'](_0x119eb5, 'href', _0x3fa189),
            ig['domHandler']['attr'](_0x119eb5, 'target', '_blank')) : ig['domHandler']['attr'](_0x119eb5, 'href', _0x3fa189),
            _0x3fa189 = ig['domHandler']['create']('img'),
            ig['domHandler']['css'](_0x3fa189, {
                'width': '100%',
                'height': '100%'
            }),
            ig['domHandler']['attr'](_0x3fa189, 'src', _0xcf7390),
            _0xcf7390 = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']);
            if (ig['ua']['mobile']) {
                _0x47d339 = ig['domHandler']['getElementById']('#canvas'),
                _0x47d339 = ig['domHandler']['getOffsets'](_0x47d339);
                var _0x5ec6d0 = _0x47d339['left']
                  , _0x56d1ce = _0x47d339['top'];
                console['log'](_0x47d339['left']),
                ig['sizeHandler']['disableStretchToFitOnMobileFlag'] ? (_0x47d339 = Math['floor'](_0x5ec6d0 + this['pos']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px',
                _0x56d1ce = Math['floor'](_0x56d1ce + this['pos']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px',
                _0x5ec6d0 = Math['floor'](this['size']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px',
                _0xcf7390 = Math['floor'](this['size']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px') : (_0x47d339 = Math['floor'](this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px',
                _0x56d1ce = Math['floor'](this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px',
                _0x5ec6d0 = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px',
                _0xcf7390 = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px');
            } else
                _0x47d339 = ig['domHandler']['getElementById']('#canvas'),
                _0x47d339 = ig['domHandler']['getOffsets'](_0x47d339),
                _0x5ec6d0 = _0x47d339['left'],
                _0x56d1ce = _0x47d339['top'],
                ig['sizeHandler']['enableStretchToFitOnDesktopFlag'] ? (_0x47d339 = Math['floor'](_0x5ec6d0 + this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px',
                _0x56d1ce = Math['floor'](_0x56d1ce + this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px',
                _0x5ec6d0 = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px',
                _0xcf7390 = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px') : (_0x47d339 = Math['floor'](_0x5ec6d0 + this['pos']['x'] * _0xcf7390) + 'px',
                _0x56d1ce = Math['floor'](_0x56d1ce + this['pos']['y'] * _0xcf7390) + 'px',
                _0x5ec6d0 = Math['floor'](this['size']['x'] * _0xcf7390) + 'px',
                _0xcf7390 = Math['floor'](this['size']['y'] * _0xcf7390) + 'px');
            ig['domHandler']['css'](_0x259794, {
                'float': 'left',
                'position': 'absolute',
                'left': _0x47d339,
                'top': _0x56d1ce,
                'width': _0x5ec6d0,
                'height': _0xcf7390,
                'z-index': 0x3
            }),
            ig['domHandler']['addEvent'](_0x259794, 'mousemove', ig['input']['mousemove']['bind'](ig['input']), !0x1),
            ig['domHandler']['appendChild'](_0x119eb5, _0x3fa189),
            ig['domHandler']['appendChild'](_0x259794, _0x119eb5),
            ig['domHandler']['appendToBody'](_0x259794),
            ig['sizeHandler']['dynamicClickableEntityDivs'][_0x1fa823] = {},
            ig['sizeHandler']['dynamicClickableEntityDivs'][_0x1fa823]['width'] = this['size']['x'],
            ig['sizeHandler']['dynamicClickableEntityDivs'][_0x1fa823]['height'] = this['size']['y'],
            ig['sizeHandler']['dynamicClickableEntityDivs'][_0x1fa823]['entity_pos_x'] = this['pos']['x'],
            ig['sizeHandler']['dynamicClickableEntityDivs'][_0x1fa823]['entity_pos_y'] = this['pos']['y'];
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.buttons.button-branding-logo')['requires']('game.entities.buttons.button', 'plugins.clickable-div-layer')['defines'](function() {
    EntityButtonBrandingLogo = EntityButton['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'gravityFactor': 0x0,
        'logo': new ig['AnimationSheet']('branding/logo.png',_SETTINGS['Branding']['Logo']['Width'],_SETTINGS['Branding']['Logo']['Height']),
        'zIndex': 0x2711,
        'size': {
            'x': 0x40,
            'y': 0x42
        },
        'clickableLayer': null,
        'link': null,
        'newWindow': !0x1,
        'div_layer_name': 'branding-logo',
        'name': 'brandinglogo',
        'init': function(_0x4d9d71, _0x321f03, _0x265f1a) {
            this['parent'](_0x4d9d71, _0x321f03, _0x265f1a);
            if (!ig['global']['wm']) {
                if ('undefined' == typeof wm) {
                    if (_SETTINGS['Branding']['Logo']['Enabled'])
                        this['size']['x'] = _SETTINGS['Branding']['Logo']['Width'],
                        this['size']['y'] = _SETTINGS['Branding']['Logo']['Height'],
                        this['anims']['idle'] = new ig['Animation'](this['logo'],0x0,[0x0],!0x0),
                        this['currentAnim'] = this['anims']['idle'],
                        _0x265f1a && _0x265f1a['centralize'] && (this['pos']['x'] = ig['system']['width'] / 0x2 - this['size']['x'] / 0x2,
                        console['log']('centralize\x20true\x20...\x20centering\x20branded\x20logo\x20...')),
                        _SETTINGS['Branding']['Logo']['LinkEnabled'] && (this['link'] = _SETTINGS['Branding']['Logo']['Link'],
                        this['newWindow'] = _SETTINGS['Branding']['Logo']['NewWindow'],
                        this['clickableLayer'] = new ClickableDivLayer(this));
                    else {
                        this['kill']();
                        return;
                    }
                }
                this['div_layer_name'] = _0x265f1a['div_layer_name'] ? _0x265f1a['div_layer_name'] : 'branding-logo';
            }
        },
        'show': function() {
            var _0x27c90a = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
            ig['domHandler']['show'](_0x27c90a);
        },
        'hide': function() {
            var _0x2ef1df = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
            ig['domHandler']['hide'](_0x2ef1df);
        },
        'clicked': function() {},
        'clicking': function() {},
        'released': function() {}
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.branding-logo-placeholder')['requires']('impact.entity', 'game.entities.buttons.button-branding-logo')['defines'](function() {
    EntityBrandingLogoPlaceholder = ig['Entity']['extend']({
        'gravityFactor': 0x0,
        'size': {
            'x': 0x20,
            'y': 0x20
        },
        '_wmDrawBox': !0x0,
        '_wmBoxColor': 'rgba(0,\x200,\x20255,\x200.7)',
        'init': function(_0x25284f, _0x39517c, _0x1ba8ba) {
            this['parent'](_0x25284f, _0x39517c, _0x1ba8ba);
            if (_0x1ba8ba)
                switch (console['log']('settings\x20found\x20...\x20using\x20that\x20div\x20layer\x20name'),
                _0x25284f = _0x1ba8ba['div_layer_name'],
                console['log']('settings.centralize:', _0x1ba8ba['centralize']),
                _0x1ba8ba['centralize']) {
                case 'true':
                    console['log']('centralize\x20true'),
                    centralize = !0x0;
                    break;
                case 'false':
                    console['log']('centralize\x20false'),
                    centralize = !0x1;
                    break;
                default:
                    console['log']('default\x20...\x20centralize\x20false'),
                    centralize = !0x1;
                }
            else
                _0x25284f = 'branding-logo',
                centralize = !0x1;
            if ('undefined' == typeof wm) {
                if (_SETTINGS['Branding']['Logo']['Enabled'])
                    try {
                        ig['game']['spawnEntity'](EntityButtonBrandingLogo, this['pos']['x'], this['pos']['y'], {
                            'div_layer_name': _0x25284f,
                            'centralize': centralize
                        });
                    } catch (_0x214e12) {
                        console['log'](_0x214e12);
                    }
                this['kill']();
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.buttons.button-more-games')['requires']('game.entities.buttons.button', 'plugins.clickable-div-layer')['defines'](function() {
    EntityButtonMoreGames = EntityButton['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'gravityFactor': 0x0,
        'logo': new ig['AnimationSheet']('media/graphics/sprites/buttons/moregames-button.png',0x3c,0x3c),
        'size': {
            'x': 0x3c,
            'y': 0x3c
        },
        'clickableLayer': null,
        'link': null,
        'newWindow': !0x1,
        'div_layer_name': 'more-games',
        'name': 'moregames',
        'init': function(_0x2f3172, _0x30a01e, _0x3f5d3d) {
            this['parent'](_0x2f3172, _0x30a01e, _0x3f5d3d),
            ig['global']['wm'] || (this['div_layer_name'] = _0x3f5d3d['div_layer_name'] ? _0x3f5d3d['div_layer_name'] : 'more-games',
            _SETTINGS['MoreGames']['Enabled'] ? (this['anims']['idle'] = new ig['Animation'](this['logo'],0x0,[0x0],!0x0),
            this['currentAnim'] = this['anims']['idle'],
            _SETTINGS['MoreGames']['Link'] && (this['link'] = _SETTINGS['MoreGames']['Link']),
            _SETTINGS['MoreGames']['NewWindow'] && (this['newWindow'] = _SETTINGS['MoreGames']['NewWindow']),
            this['clickableLayer'] = new ClickableDivLayer(this)) : this['kill']());
        },
        'update': function() {
            this['parent'](),
            this['clickableLayer']['updateSize'](this['size']['x'], this['size']['y']),
            this['clickableLayer']['update'](this['pos']['x'], this['pos']['y']);
        },
        'show': function() {
            var _0x49a8be = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
            _0x49a8be && ig['domHandler']['show'](_0x49a8be);
        },
        'hide': function() {
            var _0x4b998f = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
            _0x4b998f && ig['domHandler']['hide'](_0x4b998f);
        },
        'clicked': function() {},
        'clicking': function() {},
        'released': function() {
            this['isEnabled'] && console['log']('more\x20game');
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.opening-shield')['requires']('impact.entity')['defines'](function() {
    EntityOpeningShield = ig['Entity']['extend']({
        'size': {
            'x': 0x30,
            'y': 0x30
        },
        'move': 0x0,
        'mIconAnim': 0x0,
        'shieldAnim': 0x0,
        'titleAnim': 0x0,
        'shieldImage': new ig['Image']('media/graphics/opening/shield.png'),
        'mIconImage': new ig['Image']('media/graphics/opening/m_icon.png'),
        'titleImage': new ig['Image']('media/graphics/opening/title.png'),
        'init': function(_0x2b0da2, _0x10c2c1, _0x1850de) {
            this['parent'](_0x2b0da2, _0x10c2c1, _0x1850de);
        },
        'ready': function() {
            if (!ig['wm']) {
                if (_SETTINGS['DeveloperBranding']['Splash']['Enabled']) {
                    this['initTimer'] = new ig['Timer'](0.1);
                    try {
                        ig['soundHandler']['playSound'](ig['soundHandler']['SOUNDID']['openingSound']);
                    } catch (_0x3fcfb2) {
                        console['log'](_0x3fcfb2);
                    }
                } else
                    ig['game']['director']['nextLevel'](),
                    ig['system']['context']['globalAlpha'] = 0x1,
                    this['kill']();
            }
        },
        'update': function() {
            this['parent'](),
            this['updateOriginalShieldOpening']();
        },
        'draw': function() {
            this['parent'](),
            ig['global']['wm'] || (this['nextLevelTimer'] && 0x0 > this['nextLevelTimer']['delta']() && (ig['system']['context']['globalAlpha'] = -this['nextLevelTimer']['delta']()),
            this['drawOriginalShieldOpening']());
        },
        'updateOriginalShieldOpening': function() {
            this['initTimer'] && 0x0 < this['initTimer']['delta']() && (this['initTimer'] = null,
            this['sheildTimer'] = new ig['Timer'](0.05)),
            this['sheildTimer'] && 0x0 < this['sheildTimer']['delta']() && (0x3 > this['shieldAnim'] ? (this['shieldAnim']++,
            this['sheildTimer']['reset']()) : (this['sheildTimer'] = null,
            this['moveTimer'] = new ig['Timer'](0.001),
            this['mIconTimer'] = new ig['Timer'](0.05),
            this['titleTimer'] = new ig['Timer'](0.15))),
            this['moveTimer'] && 0x0 < this['moveTimer']['delta']() && (this['move'] += 0.3,
            this['moveTimer']['reset']()),
            this['mIconTimer'] && 0x0 < this['mIconTimer']['delta']() && (0xc > this['mIconAnim'] ? (this['mIconAnim']++,
            this['moveTimer']['reset']()) : this['mIconTimer'] = null),
            this['titleTimer'] && 0x0 < this['titleTimer']['delta']() && (0xb > this['titleAnim'] ? (this['titleAnim']++,
            this['titleTimer']['reset']()) : (this['titleTimer'] = null,
            this['nextLevelTimer'] = new ig['Timer'](0x1))),
            this['nextLevelTimer'] && 0x0 < this['nextLevelTimer']['delta']() && (this['nextLevelTimer'] = null,
            ig['game']['director']['nextLevel'](),
            ig['system']['context']['globalAlpha'] = 0x1);
        },
        'drawOriginalShieldOpening': function() {
            if (this['moveTimer']) {
                var _0x440a6a = ig['system']['context'];
                _0x440a6a['save']();
                var _0x12b75c = ig['system']['width'] / 0x2
                  , _0x488e62 = ig['system']['height'] / 0x2;
                _0x440a6a['translate'](_0x12b75c, _0x488e62),
                _0x440a6a['rotate'](this['move'] * Math['PI'] / 0xb4),
                _0x440a6a['beginPath'](),
                _0x440a6a['moveTo'](0x0, 0x0);
                for (var _0x3a020c = 0x0, _0x17156c = 0x1; 0x30 >= _0x17156c; _0x17156c += 0x1)
                    _0x440a6a['lineTo'](0x0 + 0x320 * Math['cos'](0x2 * _0x17156c * Math['PI'] / 0x30), 0x0 + 0x320 * Math['sin'](0x2 * _0x17156c * Math['PI'] / 0x30)),
                    _0x3a020c++,
                    0x2 == _0x3a020c && (_0x3a020c = 0x0,
                    _0x440a6a['lineTo'](0x0, 0x0));
                _0x440a6a['translate'](-_0x12b75c, -_0x488e62),
                _0x12b75c = _0x440a6a['createRadialGradient'](_0x12b75c, _0x488e62, 0x64, _0x12b75c, _0x488e62, 0xfa),
                _0x12b75c['addColorStop'](0x0, 'rgba(255,255,255,0.1)'),
                _0x12b75c['addColorStop'](0x1, 'rgba(0,0,0,0)'),
                _0x440a6a['fillStyle'] = _0x12b75c,
                _0x440a6a['fill'](),
                _0x440a6a['restore']();
            }
            this['shieldImage']['drawTile'](ig['system']['width'] / 0x2 - 0x5b, 0x0 - (0x300 - ig['system']['height']) / 0x2, this['shieldAnim'], 0xb6, 0x300),
            this['moveTimer'] && (this['mIconImage']['drawTile'](ig['system']['width'] / 0x2 - 0x60, ig['system']['height'] / 0x2 - 0x46, this['mIconAnim'], 0xa6, 0xa0),
            this['titleImage']['drawTile'](ig['system']['width'] / 0x2 - 0xcc, ig['system']['height'] / 0x2 + 0x64, this['titleAnim'], 0x199, 0x4c)),
            ig['system']['context']['globalAlpha'] = 0x1;
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.opening-kitty')['requires']('impact.entity')['defines'](function() {
    EntityOpeningKitty = ig['Entity']['extend']({
        'size': {
            'x': 0x30,
            'y': 0x30
        },
        'kittyAnim': -0x1,
        'kittyImage': new ig['Image']('media/graphics/opening/kitty.png'),
        'kittyTitleImage': new ig['Image']('media/graphics/opening/kittytitle.png'),
        'soundKey': 'kittyopeningSound',
        'init': function(_0x4fe367, _0x6e05d9, _0x4cad78) {
            this['parent'](_0x4fe367, _0x6e05d9, _0x4cad78);
        },
        'ready': function() {
            !ig['wm'] && _SETTINGS['DeveloperBranding']['Splash']['Enabled'] && (this['initTimer'] = new ig['Timer'](0.1));
        },
        'update': function() {
            this['parent'](),
            this['updateKittyOpening'](),
            this['unlockWebAudio']();
        },
        'unlockWebAudio': function() {
            if (ig['input']['released']('click'))
                try {
                    ig['soundHandler']['unlockWebAudio']();
                } catch (_0x2f3a8a) {}
        },
        'draw': function() {
            this['parent'](),
            ig['global']['wm'] || (this['nextLevelTimer'] && 0x0 > this['nextLevelTimer']['delta']() && (ig['system']['context']['globalAlpha'] = -this['nextLevelTimer']['delta']()),
            this['drawKittyOpening']());
        },
        'updateKittyOpening': function() {
            if (!ig['wm']) {
                if (_SETTINGS['DeveloperBranding']['Splash']['Enabled']) {
                    if (this['initTimer'] && 0x0 < this['initTimer']['delta']()) {
                        this['initTimer'] = null;
                        try {
                            ig['soundHandler']['sfxPlayer']['play'](this['soundKey']);
                        } catch (_0x1f69dc) {
                            console['log'](_0x1f69dc);
                        }
                        this['kittyTimer'] = new ig['Timer'](0.15);
                    }
                    this['kittyTimer'] && 0x0 < this['kittyTimer']['delta']() && (0x7 > this['kittyAnim'] ? (this['kittyAnim']++,
                    this['kittyTimer']['reset']()) : (this['kittyTimer'] = null,
                    this['nextLevelTimer'] = new ig['Timer'](0x2))),
                    this['nextLevelTimer'] && 0x0 < this['nextLevelTimer']['delta']() && (this['nextLevelTimer'] = null,
                    ig['game']['director']['nextLevel'](),
                    ig['system']['context']['globalAlpha'] = 0x1);
                } else
                    ig['game']['director']['nextLevel'](),
                    ig['system']['context']['globalAlpha'] = 0x1,
                    this['kill']();
            }
        },
        'drawKittyOpening': function() {
            var _0x1c6559 = ig['system']['context']['createLinearGradient'](0x0, 0x0, 0x0, ig['system']['height']);
            _0x1c6559['addColorStop'](0x0, '#ffed94'),
            _0x1c6559['addColorStop'](0x1, '#ffcd85'),
            ig['system']['context']['fillStyle'] = _0x1c6559,
            ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']),
            0x0 <= this['kittyAnim'] && (this['kittyImage']['drawTile'](ig['system']['width'] / 0x2 - this['kittyImage']['width'] / 0x8, ig['system']['height'] / 0x2 - this['kittyImage']['height'] / 0x4, this['kittyAnim'], 0xda, 0x145),
            this['kittyTitleImage']['drawTile'](ig['system']['width'] / 0x2 - this['kittyTitleImage']['width'] / 0x2, ig['system']['height'] / 0x2 + this['kittyImage']['height'] / 0x4 + 0xa, this['kittyAnim'], 0x17c, 0x25)),
            ig['system']['context']['globalAlpha'] = 0x1;
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.pointer')['requires']('impact.entity')['defines'](function() {
    EntityPointer = ig['Entity']['extend']({
        'checkAgainst': ig['Entity']['TYPE']['BOTH'],
        'size': new Vector2(0x1,0x1),
        'isFirstPressed': !0x1,
        'isPressed': !0x1,
        'isReleased': !0x1,
        'isHovering': !0x1,
        'hoveringItem': null,
        'objectArray': [],
        'clickedObjectList': [],
        'ignorePause': !0x0,
        'zIndex': 0x157c,
        'check': function(_0x30a02a) {
            this['objectArray']['push'](_0x30a02a);
        },
        'clickObject': function(_0x4d6d57) {
            this['isFirstPressed'] && 'function' == typeof _0x4d6d57['clicked'] && (_0x4d6d57['clicked'](),
            this['addToClickedObjectList'](_0x4d6d57)),
            this['isPressed'] && !this['isReleased'] && 'function' == typeof _0x4d6d57['clicking'] && _0x4d6d57['clicking'](),
            this['isReleased'] && 'function' == typeof _0x4d6d57['released'] && (_0x4d6d57['released'](),
            this['removeFromClickedObjectList'](_0x4d6d57));
        },
        'refreshPos': function() {
            this['pos'] = ig['game']['io']['getClickPos']();
        },
        'update': function() {
            this['parent'](),
            this['refreshPos']();
            var _0x3974ec = null
              , _0x4f561f = -0x1;
            for (a = this['objectArray']['length'] - 0x1; -0x1 < a; a--)
                this['objectArray'][a]['zIndex'] > _0x4f561f && (_0x4f561f = this['objectArray'][a]['zIndex'],
                _0x3974ec = this['objectArray'][a]);
            if (null != _0x3974ec)
                null != this['hoveringItem'] ? this['hoveringItem'] != _0x3974ec && ('function' == typeof this['hoveringItem']['leave'] && this['hoveringItem']['leave'](),
                'function' == typeof _0x3974ec['over'] && _0x3974ec['over']()) : 'function' == typeof _0x3974ec['over'] && _0x3974ec['over'](),
                this['hoveringItem'] = _0x3974ec,
                this['clickObject'](_0x3974ec),
                this['objectArray'] = [];
            else {
                if (null != this['hoveringItem'] && 'function' == typeof this['hoveringItem']['leave'] && (this['hoveringItem']['leave'](),
                this['hoveringItem'] = null),
                this['isReleased']) {
                    for (_0x3974ec = 0x0; _0x3974ec < this['clickedObjectList']['length']; _0x3974ec++)
                        _0x4f561f = this['clickedObjectList'][_0x3974ec],
                        'function' == typeof _0x4f561f['releasedOutside'] && _0x4f561f['releasedOutside']();
                    this['clickedObjectList'] = [];
                }
            }
            this['isFirstPressed'] = ig['input']['pressed']('click'),
            this['isReleased'] = ig['input']['released']('click'),
            this['isPressed'] = ig['input']['state']('click');
        },
        'addToClickedObjectList': function(_0x5b83d9) {
            this['clickedObjectList']['push'](_0x5b83d9);
        },
        'removeFromClickedObjectList': function(_0x54bd53) {
            for (var _0x5678fa = [], _0x13847b = 0x0; _0x13847b < this['clickedObjectList']['length']; _0x13847b++) {
                var _0x802722 = this['clickedObjectList'][_0x13847b];
                _0x802722 != _0x54bd53 && _0x5678fa['push'](_0x802722);
            }
            this['clickedObjectList'] = _0x5678fa;
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.pointer-selector')['requires']('game.entities.pointer')['defines'](function() {
    EntityPointerSelector = EntityPointer['extend']({
        'zIndex': 0x3e8,
        '_wmDrawBox': !0x0,
        '_wmBoxColor': 'rgba(0,\x200,\x20255,\x200.7)',
        'size': {
            'x': 0x14,
            'y': 0x14
        },
        'init': function(_0x439841, _0x54932d, _0x5f4c1a) {
            this['parent'](_0x439841, _0x54932d, _0x5f4c1a);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.select')['requires']('impact.entity')['defines'](function() {
    EntitySelect = ig['Entity']['extend']({
        'type': ig['Entity']['TYPE']['B'],
        'checkAgainst': ig['Entity']['TYPE']['A'],
        'collides': ig['Entity']['COLLIDES']['NEVER'],
        'canSelect': !0x1,
        'canSelectTimerDuration': 0.35,
        'zIndex': 0x1869f,
        'isHovering': !0x1,
        'isSelected': !0x1,
        'init': function(_0x36448b, _0x56734e, _0x333878) {
            this['parent'](_0x36448b, _0x56734e, _0x333878),
            this['canSelectTimer'] = new ig['Timer'](this['canSelectTimerDuration']);
        },
        'doesClickableLayerExist': function(_0x181925) {
            for (k in dynamicClickableEntityDivs)
                if (k == _0x181925)
                    return !0x0;
            return !0x1;
        },
        'checkClickableLayer': function(_0x23ccfc, _0x109599, _0x61998f) {
            'undefined' == typeof wm && (this['doesClickableLayerExist'](_0x23ccfc) ? (ig['game']['showOverlay']([_0x23ccfc]),
            $('#' + _0x23ccfc)['find']('[href]')['attr']('href', _0x109599)) : this['createClickableOutboundLayer'](_0x23ccfc, _0x109599, 'media/graphics/misc/invisible.png', _0x61998f));
        },
        'createClickableOutboundLayer': function(_0x32830f, _0x8fbeea, _0x149908, _0x15c24d) {
            var _0xb391a2 = ig['$new']('div');
            _0xb391a2['id'] = _0x32830f,
            document['body']['appendChild'](_0xb391a2),
            $('#' + _0xb391a2['id'])['css']('float', 'left'),
            $('#' + _0xb391a2['id'])['css']('width', this['size']['x'] * multiplier),
            $('#' + _0xb391a2['id'])['css']('height', this['size']['y'] * multiplier),
            $('#' + _0xb391a2['id'])['css']('position', 'absolute');
            var _0x5148d9 = w / 0x2 - destW / 0x2
              , _0x7c64e3 = h / 0x2 - destH / 0x2;
            w == mobileWidth ? ($('#' + _0xb391a2['id'])['css']('left', this['pos']['x']),
            $('#' + _0xb391a2['id'])['css']('top', this['pos']['y'])) : ($('#' + _0xb391a2['id'])['css']('left', _0x5148d9 + this['pos']['x'] * multiplier),
            $('#' + _0xb391a2['id'])['css']('top', _0x7c64e3 + this['pos']['y'] * multiplier)),
            _0x15c24d ? $('#' + _0xb391a2['id'])['html']('<a\x20target=\x27_blank\x27\x20href=\x27' + _0x8fbeea + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x149908 + '\x27></a>') : $('#' + _0xb391a2['id'])['html']('<a\x20href=\x27' + _0x8fbeea + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x149908 + '\x27></a>'),
            dynamicClickableEntityDivs[_0x32830f] = {},
            dynamicClickableEntityDivs[_0x32830f]['width'] = $('#' + _0xb391a2['id'])['width'](),
            dynamicClickableEntityDivs[_0x32830f]['height'] = $('#' + _0xb391a2['id'])['height'](),
            dynamicClickableEntityDivs[_0x32830f]['entity_pos_x'] = this['pos']['x'],
            dynamicClickableEntityDivs[_0x32830f]['entity_pos_y'] = this['pos']['y'];
        },
        'hovered': function() {
            this['isHovering'] = !0x0,
            this['dehoverOthers']();
        },
        'dehoverOthers': function() {
            var _0x1005f8 = ig['game']['getEntitiesByType'](EntitySelect);
            for (i = 0x0; i < _0x1005f8['length']; i++)
                _0x1005f8[i] != this && (_0x1005f8[i]['isHovering'] = !0x1);
        },
        'deselectOthers': function() {
            var _0x1c4d92 = ig['game']['getEntitiesByType'](EntitySelect);
            for (i = 0x0; i < _0x1c4d92['length']; i++)
                _0x1c4d92[i] != this && (_0x1c4d92[i]['isSelected'] = !0x1);
        },
        'update': function() {
            this['parent'](),
            this['canSelectTimer'] && 0x0 < this['canSelectTimer']['delta']() && (this['canSelect'] = !0x0,
            this['canSelectTimer'] = null);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.levels.opening')['requires']('impact.image', 'game.entities.opening-kitty')['defines'](function() {
    LevelOpening = {
        'entities': [{
            'type': 'EntityOpeningKitty',
            'x': 0x208,
            'y': 0xd4
        }],
        'layer': []
    };
}),
ig['baked'] = !0x0,
ig['module']('game.entities.buttons.button-sound')['requires']('game.entities.buttons.button')['defines'](function() {
    EntityButtonSound = EntityButton['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'gravityFactor': 0x0,
        'logo': new ig['AnimationSheet']('branding/logo.png',_SETTINGS['Branding']['Logo']['Width'],_SETTINGS['Branding']['Logo']['Height']),
        'zIndex': 0x2711,
        'size': {
            'x': 0x32,
            'y': 0x32
        },
        'mutetest': !0x1,
        'name': 'soundtest',
        'init': function(_0x3cc607, _0x10c166, _0x1c96c9) {
            this['parent'](_0x3cc607, _0x10c166, _0x1c96c9);
        },
        'draw': function() {
            this['parent'](),
            ig['system']['context']['fillRect'](this['pos']['x'], this['pos']['y'], 0x32, 0x32);
        },
        'clicked': function() {
            console['log']('pressed'),
            this['mutetest'] ? (console['log']('unmute'),
            ig['soundHandler']['unmuteAll'](!0x0),
            this['mutetest'] = !0x1) : (console['log']('mute'),
            ig['soundHandler']['muteAll'](!0x0),
            this['mutetest'] = !0x0);
        },
        'clicking': function() {},
        'released': function() {}
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.test')['requires']('impact.entity')['defines'](function() {
    EntityTest = ig['Entity']['extend']({
        'zIndex': 0x1869f,
        'pos': new Vector2(0x0,0x0),
        'size': new Vector2(0x14,0x14),
        'color': new ColorRGB(0x7d,0xff,0x7d,0x1),
        'init': function(_0x438476, _0x124d39, _0x5a7ee5) {
            this['parent'](_0x438476, _0x124d39, _0x5a7ee5);
        },
        'update': function() {
            this['parent']();
        },
        'draw': function() {
            this['parent']();
            var _0x168508 = ig['system']['context'];
            _0x168508['fillStyle'] = this['color']['getHex'](),
            _0x168508['fillRect'](this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.test-control')['requires']('impact.entity', 'game.entities.test')['defines'](function() {
    EntityTestControl = ig['Entity']['extend']({
        'zIndex': 0x1869f,
        'size': new Vector2(0x14,0x14),
        'testEnt': null,
        'tween': null,
        'init': function(_0x248b9e, _0x527861, _0x3e84b7) {
            this['parent'](_0x248b9e, _0x527861, _0x3e84b7),
            ig['global']['wm'] || (ig['game']['testControl'] = this,
            this['initTestCase3'](),
            ig['game']['spawnEntity'](ig['FullscreenButton'], 0x5, 0x5, {
                'enterImage': new ig['Image']('media/graphics/misc/enter-fullscreen-transparent.png'),
                'exitImage': new ig['Image']('media/graphics/misc/exit-fullscreen-transparent.png')
            }));
        },
        'ready': function() {
            this['parent'](),
            console['log']('ready');
        },
        'initTestCase1': function() {
            this['initTestCase1Initialized'] = !0x0,
            this['testEnt'] = ig['game']['spawnEntity'](EntityTest, 0xc8, 0xc8),
            this['tweenSlow'] = new ig['TweenDef'](this['testEnt']['pos'])['to']({
                'x': 0x64,
                'y': 0x64
            }, 0x7d0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['interpolation'](ig['Tween']['Interpolation']['Bezier'])['repeat'](0x2)['yoyo'](!0x0),
            this['tweenFast'] = new ig['TweenDef'](this['testEnt']['pos'])['to']({
                'x': 0x12c,
                'y': 0x12c
            }, 0x1f4)['repeat'](0x4)['yoyo'](!0x0),
            this['tweenSlow']['chain'](this['tweenFast']),
            this['tweenFast']['chain'](this['tweenSlow']),
            this['tweenFast']['start']();
        },
        'initTestCase2': function() {
            this['initTestCase2Initialized'] = !0x0,
            this['coordsTween'] = new ig['TweenDef']({
                'x': 0x0,
                'y': 0x0
            })['to']({
                'x': 0x64,
                'y': 0x64
            }, 0x3e8)['easing'](ig['Tween']['Easing']['Bounce']['EaseInOut'])['onStart'](function(_0xf24ac3) {
                console['log']('Start', _0xf24ac3),
                this['coordsTween']['pause']();
            }
            ['bind'](this))['onUpdate'](function() {
                0.5 <= this['coordsTween']['_currentElapsed'] && this['coordsTween']['stop']();
            }
            ['bind'](this))['onStop'](function(_0x19abc9) {
                console['log']('Stop', _0x19abc9);
            }
            ['bind'](this))['onComplete'](function(_0x1161ed) {
                console['log']('Complete', _0x1161ed);
            }
            ['bind'](this))['onPause'](function(_0x23c4ef) {
                console['log']('Pause', _0x23c4ef),
                this['coordsTween']['resume']();
            }
            ['bind'](this))['onResume'](function(_0x2947a2) {
                console['log']('Resume', _0x2947a2);
            }
            ['bind'](this))['start']();
        },
        'initTestCase3': function() {
            this['initTestCase3Initialized'] = !0x0,
            this['spawnTweenEntity'](),
            this['spawnTweenControlButtons']();
        },
        'initTestCase4': function() {
            this['initTestCase4Initialized'] = !0x0,
            this['testEntityA'] = ig['game']['spawnEntity'](EntityTest, 0x1c2, 0xc8, {
                'control': this,
                'size': new Vector2(0x14,0x28)
            }),
            this['testEntityB'] = ig['game']['spawnEntity'](EntityTest, 0x1db, 0xc8, {
                'control': this,
                'size': new Vector2(0x28,0x14)
            }),
            this['testEntityB']['color']['r'] = 0xff,
            this['testEntityB']['color']['g'] = 0x0,
            this['testEntityB']['color']['b'] = 0x0;
        },
        'spawnTweenEntity': function() {
            this['tweenEntity'] = ig['game']['spawnEntity'](EntityTest, 0x37f, 0x31, {
                'control': this,
                'color': new ColorRGB(0xff,0x7d,0x7d,0x1)
            }),
            this['tweenControl'] = new ig['TweenDef'](this['tweenEntity']['pos'])['to']({
                'y': 0x14a
            }, 0x1388);
        },
        'spawnTweenControlButtons': function() {
            this['tweenControlButtons'] = {
                'start': ig['game']['spawnEntity'](EntityButton, 0x320, 0x32, {
                    'control': this,
                    'size': new Vector2(0x44,0x30),
                    'color': new ColorRGB(0xff,0x7d,0x7d,0x1)
                }),
                'stop': ig['game']['spawnEntity'](EntityButton, 0x320, 0x64, {
                    'control': this,
                    'size': new Vector2(0x44,0x30),
                    'color': new ColorRGB(0xff,0x7d,0x7d,0x1)
                }),
                'pause': ig['game']['spawnEntity'](EntityButton, 0x320, 0x96, {
                    'control': this,
                    'size': new Vector2(0x44,0x30),
                    'color': new ColorRGB(0xff,0x7d,0x7d,0x1)
                }),
                'resume': ig['game']['spawnEntity'](EntityButton, 0x320, 0xc8, {
                    'control': this,
                    'size': new Vector2(0x44,0x30),
                    'color': new ColorRGB(0xff,0x7d,0x7d,0x1)
                }),
                'end': ig['game']['spawnEntity'](EntityButton, 0x320, 0xfa, {
                    'control': this,
                    'size': new Vector2(0x44,0x30),
                    'color': new ColorRGB(0xff,0x7d,0x7d,0x1)
                }),
                'pGame': ig['game']['spawnEntity'](EntityButton, 0x320, 0x12c, {
                    'control': this,
                    'size': new Vector2(0x44,0x30),
                    'color': new ColorRGB(0xff,0x7d,0x7d,0x1)
                })
            },
            this['setupTweenControlButtons']();
        },
        'setupTweenControlButtons': function() {
            var _0x2dd74d = null;
            for (buttonKey in this['tweenControlButtons'])
                _0x2dd74d = this['tweenControlButtons'][buttonKey],
                _0x2dd74d['name'] = buttonKey,
                _0x2dd74d['backgroundColor'] = _0x2dd74d['color']['getStyle'](),
                _0x2dd74d['foregroundColor'] = _0x2dd74d['color']['getInvertedColor']()['getStyle'](),
                _0x2dd74d['draw'] = function() {
                    ig['system']['context']['fillStyle'] = this['backgroundColor'],
                    ig['system']['context']['fillRect'](this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']),
                    ig['system']['context']['fillStyle'] = this['foregroundColor'],
                    ig['system']['context']['font'] = '18px\x20Arial',
                    ig['system']['context']['textBaseline'] = 'middle',
                    ig['system']['context']['textAlign'] = 'center',
                    ig['system']['context']['fillText'](this['name'], this['pos']['x'] + 0.5 * this['size']['x'], this['pos']['y'] + 0.5 * this['size']['y']);
                }
                ;
            this['tweenControlButtons']['start']['clicked'] = function() {
                console['log']('start'),
                this['control']['tweenControl']['start']();
            }
            ,
            this['tweenControlButtons']['start']['clicking'] = function() {}
            ,
            this['tweenControlButtons']['start']['released'] = function() {}
            ,
            this['tweenControlButtons']['stop']['clicked'] = function() {
                console['log']('stop'),
                this['control']['tweenControl']['stop']();
            }
            ,
            this['tweenControlButtons']['stop']['clicking'] = function() {}
            ,
            this['tweenControlButtons']['stop']['released'] = function() {}
            ,
            this['tweenControlButtons']['pause']['clicked'] = function() {
                console['log']('pause'),
                this['control']['tweenControl']['pause']();
            }
            ,
            this['tweenControlButtons']['pause']['clicking'] = function() {}
            ,
            this['tweenControlButtons']['pause']['released'] = function() {}
            ,
            this['tweenControlButtons']['resume']['clicked'] = function() {
                console['log']('resume'),
                this['control']['tweenControl']['resume']();
            }
            ,
            this['tweenControlButtons']['resume']['clicking'] = function() {}
            ,
            this['tweenControlButtons']['resume']['released'] = function() {}
            ,
            this['tweenControlButtons']['end']['clicked'] = function() {
                console['log']('end'),
                this['control']['tweenControl']['end']();
            }
            ,
            this['tweenControlButtons']['end']['clicking'] = function() {}
            ,
            this['tweenControlButtons']['end']['released'] = function() {}
            ,
            this['tweenControlButtons']['pGame']['clicked'] = function() {
                ig['game']['pauseGame']();
            }
            ,
            this['tweenControlButtons']['pGame']['clicking'] = function() {}
            ,
            this['tweenControlButtons']['pGame']['released'] = function() {}
            ;
        },
        'update': function() {
            this['parent']();
        },
        'draw': function() {
            this['parent'](),
            !0x0 === this['testCase3Initialized'] && this['drawTestCase3Info']();
        },
        'drawTestCase3Info': function() {}
    });
}),
ig['baked'] = !0x0,
ig['module']('game.levels.test-desktop')['requires']('impact.image', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.pointer', 'game.entities.buttons.button-sound', 'game.entities.test-control')['defines'](function() {
    LevelTestDesktop = {
        'entities': [{
            'type': 'EntityBrandingLogoPlaceholder',
            'x': 0x128,
            'y': 0x18c,
            'settings': {
                'div_layer_name': 'layer_mainmenu',
                'centralize': 'true'
            }
        }, {
            'type': 'EntityButtonMoreGames',
            'x': 0x244,
            'y': 0x11c,
            'settings': {
                'div_layer_name': 'layer_moregames_mainmenu'
            }
        }, {
            'type': 'EntityPointer',
            'x': 0x260,
            'y': 0x78
        }, {
            'type': 'EntityButtonSound',
            'x': 0x14c,
            'y': 0x11c
        }, {
            'type': 'EntityTestControl',
            'x': 0x0,
            'y': 0x0
        }],
        'layer': [{
            'name': 'background',
            'width': 0x10,
            'height': 0x9,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'media/graphics/backgrounds/desktop/background.jpg',
            'repeat': !0x1,
            'preRender': !0x0,
            'distance': '1',
            'tilesize': 0x3c,
            'foreground': !0x1,
            'data': [[0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10], [0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20], [0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30], [0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d, 0x3e, 0x3f, 0x40], [0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50], [0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60], [0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70], [0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80], [0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90]]
        }]
    },
    LevelTestDesktopResources = [new ig['Image']('media/graphics/backgrounds/desktop/background.jpg')];
}),
ig['baked'] = !0x0,
ig['module']('game.levels.test-mobile')['requires']('impact.image', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.pointer', 'game.entities.buttons.button-sound', 'game.entities.test-control')['defines'](function() {
    LevelTestMobile = {
        'entities': [{
            'type': 'EntityBrandingLogoPlaceholder',
            'x': 0xd8,
            'y': 0x224,
            'settings': {
                'div_layer_name': 'layer_mainmenu',
                'centralize': 'true'
            }
        }, {
            'type': 'EntityButtonMoreGames',
            'x': 0xee,
            'y': 0x271,
            'settings': {
                'div_layer_name': 'layer_moregames_mainmenu'
            }
        }, {
            'type': 'EntityPointer',
            'x': 0x1bc,
            'y': 0xc0
        }, {
            'type': 'EntityButtonSound',
            'x': 0xf5,
            'y': 0x1ea
        }, {
            'type': 'EntityTestControl',
            'x': 0x0,
            'y': 0x0
        }],
        'layer': [{
            'name': 'background',
            'width': 0x9,
            'height': 0x10,
            'linkWithCollision': !0x1,
            'visible': 0x1,
            'tilesetName': 'media/graphics/backgrounds/mobile/background.jpg',
            'repeat': !0x1,
            'preRender': !0x0,
            'distance': '1',
            'tilesize': 0x3c,
            'foreground': !0x1,
            'data': [[0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9], [0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12], [0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b], [0x1c, 0x1d, 0x1e, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x24], [0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d], [0x2e, 0x2f, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36], [0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d, 0x3e, 0x3f], [0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48], [0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51], [0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a], [0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63], [0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c], [0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 0x74, 0x75], [0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e], [0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87], [0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90]]
        }]
    },
    LevelTestMobileResources = [new ig['Image']('media/graphics/backgrounds/mobile/background.jpg')];
}),
ig['baked'] = !0x0,
ig['module']('game.entities.buttons.button-play')['requires']('game.entities.buttons.button')['defines'](function() {
    EntityButtonPlay = EntityButton['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/buttons/play-button.png',0x3c,0x3c),
        'size': {
            'x': 0x3c,
            'y': 0x3c
        },
        'init': function(_0x2b8279, _0x4dea72, _0x1f23a3) {
            this['parent'](_0x2b8279, _0x4dea72, _0x1f23a3),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'draw': function() {
            this['parent']();
        },
        'clicked': function() {
            this['parent'](this['release']['bind'](this));
        },
        'clicking': function() {},
        'released': function() {},
        'release': function() {
            if (this['isEnabled']) {
                if (!ig['game']['firstTimePlay']) {
                    ig['game']['firstTimePlay'] = !0x0;
                    try {
                        console['log']('Show\x20AD'),
                        ig['poki']['showAd']();
                    } catch (_0x3d6de8) {}
                }
                try {
                    console['log']('START'),
                    ig['poki']['startGameplay']();
                } catch (_0x34af60) {}
                ig['input']['actions'] = {},
                ig['soundHandler']['sfxPlayer']['play']('clickButton'),
                ig['game']['titleController']['startTransitionOut']();
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.buttons.button-setting')['requires']('game.entities.buttons.button')['defines'](function() {
    EntityButtonSetting = EntityButton['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'gravityFactor': 0x0,
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/buttons/setting-button.png',0x3c,0x3c),
        'size': {
            'x': 0x3c,
            'y': 0x3c
        },
        'gAlpha': 0x0,
        'targetAlpha': 0x1,
        'init': function(_0x240506, _0x47eb68, _0x1dda3c) {
            this['parent'](_0x240506, _0x47eb68, _0x1dda3c),
            this['addAnim']('iddle', 0x1, [0x0]);
        },
        'clicked': function() {
            this['parent'](this['release']['bind'](this));
        },
        'clicking': function() {},
        'released': function() {},
        'release': function() {
            this['isEnabled'] && (ig['soundHandler']['sfxPlayer']['play']('clickButton'),
            ig['game']['titleController']['showSettingPanel']());
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.ui.title')['requires']('impact.entity')['defines'](function() {
    EntityTitle = ig['Entity']['extend']({
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/menu/title.png',0x11a,0xef),
        'size': {
            'x': 0x11a,
            'y': 0xef
        },
        'init': function(_0x269e8d, _0x2108bf, _0x213be9) {
            this['parent'](_0x269e8d, _0x2108bf, _0x213be9),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'update': function() {
            this['parent']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.bg.background')['requires']('impact.entity')['defines'](function() {
    EntityBackground = ig['Entity']['extend']({
        'checkAgainst': ig['Entity']['TYPE']['NONE'],
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/background/background.png',0x3c0,0x21c),
        'image': new ig['Image']('media/graphics/sprites/background/background.png'),
        'center': null,
        'fillScale': null,
        'init': function(_0x275ff6, _0x236be9, _0x444d1e) {
            this['parent'](_0x275ff6, _0x236be9, _0x444d1e);
        },
        'draw': function() {
            this['parent']();
            var _0x2c1ea0 = ig['system']['context'];
            _0x2c1ea0['beginPath'](),
            _0x2c1ea0['rect'](0x0, 0x0, ig['system']['width'], ig['system']['height']),
            _0x2c1ea0['fillStyle'] = '#f5ce4c',
            _0x2c1ea0['fill'](),
            _0x2c1ea0['closePath'](),
            _0x2c1ea0['fillStyle'] = '#000000';
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.controllers.popup-controller')['requires']('impact.entity')['defines'](function() {
    EntityPopupController = ig['Entity']['extend']({
        'childArr': [],
        'spawnEntity': function(_0x17773d, _0x3b85d4, _0x391acf, _0x34402e) {
            return _0x17773d = ig['game']['spawnEntity'](_0x17773d, this['pos']['x'] + _0x3b85d4, this['pos']['y'] + _0x391acf, _0x34402e),
            _0x17773d['childX'] = _0x3b85d4,
            _0x17773d['childY'] = _0x391acf,
            this['childArr']['push'](_0x17773d),
            _0x17773d;
        },
        'kill': function() {
            for (var _0x556169 = this['childArr']['length'] - 0x1; 0x0 <= _0x556169; _0x556169--)
                this['childArr']['pop']()['kill']();
            this['childArr'] = null,
            this['parent']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.bg.panel')['requires']('impact.entity')['defines'](function() {
    EntityPanel = ig['Entity']['extend']({
        'checkAgainst': ig['Entity']['TYPE']['NONE'],
        'size': new Vector2(0x13c,0x13b),
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/background/panel.png',0x13c,0x13b),
        'init': function(_0x479b9f, _0x33f5c0, _0x3199b1) {
            this['parent'](_0x479b9f, _0x33f5c0, _0x3199b1),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'update': function() {
            this['parent']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.buttons.button-home')['requires']('game.entities.buttons.button')['defines'](function() {
    EntityButtonHome = EntityButton['extend']({
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/buttons/home-button.png',0x3c,0x3c),
        'size': {
            'x': 0x3c,
            'y': 0x3c
        },
        'init': function(_0x39af6c, _0x2173d9, _0x33d1ea) {
            this['parent'](_0x39af6c, _0x2173d9, _0x33d1ea),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'clicked': function() {
            this['parent'](this['release']['bind'](this));
        },
        'clicking': function() {},
        'released': function() {},
        'release': function() {
            this['isEnabled'] && (ig['soundHandler']['sfxPlayer']['play']('clickButton'),
            ig['game']['titleController'] ? ig['game']['titleController']['hideSettingPanel']() : ig['game']['gameController'] && ig['game']['gameController']['returnToTitle']());
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.ui.icon-sound')['requires']('impact.entity')['defines'](function() {
    EntityIconSound = ig['Entity']['extend']({
        'checkAgainst': ig['Entity']['TYPE']['NONE'],
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/buttons/icon-sound.png',0x2c,0x32),
        'size': new Vector2(0x2c,0x32),
        'init': function(_0x3eb580, _0x1c3edd, _0x24e4db) {
            this['parent'](_0x3eb580, _0x1c3edd, _0x24e4db),
            this['addAnim']('idle', 0x1, [0x0]);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.text')['requires']('impact.entity')['defines'](function() {
    EntityText = ig['Entity']['extend']({
        'text': '',
        'size': {
            'x': 0x20,
            'y': 0x20
        },
        '_wmDrawBox': !0x0,
        '_wmBoxColor': 'rgba(255,\x20255,\x20255,\x200.5)',
        'zIndex': 0x2710,
        'gAlpha': 0x0,
        'targetAlpha': 0x1,
        'init': function(_0x191cc8, _0x41a31c, _0x34c8dd) {
            this['parent'](_0x191cc8, _0x41a31c, _0x34c8dd),
            'undefined' == typeof wm && _0x34c8dd && (this['name'] = _0x34c8dd['name'],
            this['useLanguageFile'] = _0x34c8dd['useLanguageFile'],
            this['languageFileSectionName'] = _0x34c8dd['languageFileSectionName'],
            this['text'] = eval(this['useLanguageFile']) ? ig['game']['language']['selected'][this['languageFileSectionName']][_0x34c8dd['text']] : _0x34c8dd['text'],
            this['fontSize'] = _0x34c8dd['fontSize'],
            this['fontSize'] || (this['fontSize'] = '24'),
            this['fontStyle'] = _0x34c8dd['fontStyle'],
            this['fontStyle'] || (this['fontStyle'] = 'Arial'),
            this['fontWeight'] = _0x34c8dd['fontWeight'],
            this['fontWeight'] || (this['fontWeight'] = 'bold'),
            this['fontColor'] = _0x34c8dd['fontColor'],
            this['fontColor'] || (this['fontColor'] = '#fff'),
            this['backgroundBorderColor'] = _0x34c8dd['backgroundBorderColor'],
            this['backgroundColor'] = _0x34c8dd['backgroundColor'],
            this['backgroundHeight'] = _0x34c8dd['backgroundHeight']);
        },
        'update': function() {
            this['parent'](),
            0x0 == this['gAlpha'] && this['gAlpha'] == this['targetAlpha'] && this['kill']();
        },
        'draw': function() {
            this['parent'](),
            this['backgroundBorderColor'] && (ig['system']['context']['fillStyle'] = this['backgroundBorderColor'],
            ig['system']['context']['fillRect'](0x0, this['pos']['y'] - this['size']['y'] + 0xa - 0x5, ig['system']['width'], this['backgroundHeight'] + 0xa)),
            this['backgroundColor'] && (ig['system']['context']['fillStyle'] = this['backgroundColor'],
            ig['system']['context']['fillRect'](0x0, this['pos']['y'] - this['size']['y'] + 0xa, ig['system']['width'], this['backgroundHeight'])),
            'undefined' == typeof wm && (ig['system']['context']['fillStyle'] = this['fontColor'],
            ig['system']['context']['font'] = this['fontWeight'] + '\x20' + this['fontSize'] + 'px\x20' + this['fontStyle'],
            ig['system']['context']['fillText'](this['text'], this['pos']['x'] - ig['system']['context']['measureText'](this['text'])['width'] / 0x2, this['pos']['y'] + this['size']['y']));
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.ui.slider-knot')['requires']('impact.entity', 'game.entities.pointer')['defines'](function() {
    EntitySliderKnot = ig['Entity']['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/buttons/knot.png',0x13,0x13),
        'size': {
            'x': 0x13,
            'y': 0x13
        },
        'pointer': null,
        'isHolding': !0x1,
        'minX': 0x0,
        'maxX': 0x0,
        'changeCallback': null,
        'sliderBar': null,
        'zIndex': 0x17700,
        'scaleKnot': 0x1,
        'init': function(_0x4a8c7b, _0xae2a1e, _0x4b92db) {
            this['parent'](_0x4a8c7b, _0xae2a1e, _0x4b92db),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'clicked': function() {
            this['isHolding'] = !0x0,
            this['pointer'] = this['clickedFinger'] ? this['clickedFinger'] : ig['game']['getEntitiesByType'](EntityPointer)[0x0];
        },
        'released': function() {
            this['isHolding'] = !0x1,
            this['pointer'] = null,
            this['changeCallback'] && this['changeCallback']((this['anchoredPositionX'] - this['minX']) / (this['maxX'] - this['minX']));
        },
        'update': function() {
            this['parent'](),
            this['isHolding'] && null != this['pointer'] && (this['anchoredPositionX'] = (null != this['pointer']['pos'] ? this['pointer']['pos']['x'] : this['pointer']['x']) - 0.5 * ig['responsive']['width'] - 0xa,
            this['checkLimit'](),
            (this['pointer']['isReleased'] || 'up' == this['pointer']['state']) && this['released']());
        },
        'checkLimit': function() {
            this['anchoredPositionX'] < this['minX'] ? this['anchoredPositionX'] = this['minX'] : this['anchoredPositionX'] > this['maxX'] && (this['anchoredPositionX'] = this['maxX']);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.ui.slider-frame')['requires']('impact.entity')['defines'](function() {
    EntitySliderFrame = ig['Entity']['extend']({
        'checkAgainst': ig['Entity']['TYPE']['NONE'],
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/buttons/slider-frame.png',0x8c,0x4),
        'size': new Vector2(0x8c,0x4),
        'percentage': 0x1,
        'init': function(_0x53d99a, _0xd07f6c, _0x3349a9) {
            this['parent'](_0x53d99a, _0xd07f6c, _0x3349a9),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'draw': function() {
            this['parent']();
        },
        'updatePercentage': function(_0x29dffd) {
            this['percentage'] = _0x29dffd,
            0.01 >= this['percentage'] && (this['percentage'] = 0.01);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.bg.shadow-bg')['requires']('impact.entity')['defines'](function() {
    EntityShadowBg = ig['Entity']['extend']({
        'checkAgainst': ig['Entity']['TYPE']['NONE'],
        'init': function(_0x28fd7e, _0x4c9962, _0x5853e1) {
            this['parent'](_0x28fd7e, _0x4c9962, _0x5853e1);
        },
        'draw': function() {
            this['parent']();
            var _0x508c4f = ig['system']['context'];
            _0x508c4f['fillStyle'] = '#000000',
            _0x508c4f['globalAlpha'] = 0.7,
            _0x508c4f['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']),
            _0x508c4f['globalAlpha'] = 0x1;
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('plugins.scale')['requires']('impact.entity')['defines'](function() {
    ig['Entity']['inject']({
        'scale': {
            'x': 0x1,
            'y': 0x1
        },
        '_offset': {
            'x': 0x0,
            'y': 0x0
        },
        '_scale': {
            'x': 0x1,
            'y': 0x1
        },
        '_size': {
            'x': 0x0,
            'y': 0x0
        },
        'init': function(_0x399bc9, _0x533263, _0x38251b) {
            this['parent'](_0x399bc9, _0x533263, _0x38251b),
            this['_offset']['x'] = this['offset']['x'],
            this['_offset']['y'] = this['offset']['y'],
            this['_size']['x'] = this['size']['x'],
            this['_size']['y'] = this['size']['y'],
            this['setScale'](this['scale']['x'], this['scale']['y']);
        },
        'draw': function() {
            var _0x324e74 = ig['system']['context'];
            _0x324e74['save'](),
            _0x324e74['translate'](ig['system']['getDrawPos'](this['pos']['x']['round']() - this['offset']['x'] - ig['game']['screen']['x']), ig['system']['getDrawPos'](this['pos']['y']['round']() - this['offset']['y'] - ig['game']['screen']['y'])),
            _0x324e74['scale'](this['_scale']['x'], this['_scale']['y']),
            null != this['currentAnim'] && this['currentAnim']['draw'](0x0, 0x0),
            _0x324e74['restore']();
        },
        'setScale': function(_0x26591e, _0x8a7bf5) {
            var _0x376ee7 = this['size']['x']
              , _0xdc7526 = this['size']['y'];
            this['scale']['x'] = _0x26591e || this['scale']['x'],
            this['scale']['y'] = _0x8a7bf5 || this['scale']['y'],
            this['_scale']['x'] = this['scale']['x'] / ig['system']['scale'],
            this['_scale']['y'] = this['scale']['y'] / ig['system']['scale'],
            this['offset']['x'] = this['_offset']['x'] * this['_scale']['x'],
            this['offset']['y'] = this['_offset']['y'] * this['_scale']['y'],
            this['size']['x'] = this['_size']['x'] * this['_scale']['x'],
            this['size']['y'] = this['_size']['y'] * this['_scale']['y'],
            this['pos']['x'] += (_0x376ee7 - this['size']['x']) / 0x2,
            this['pos']['y'] += (_0xdc7526 - this['size']['y']) / 0x2;
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.text.settings')['requires']('impact.entity')['defines'](function() {
    EntityTextSettings = ig['Entity']['extend']({
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/text/settings.png',0xd8,0x33),
        'size': {
            'x': 0xd8,
            'y': 0x33
        },
        'init': function(_0x117395, _0x846c3a, _0x5894bd) {
            this['parent'](_0x117395, _0x846c3a, _0x5894bd),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'update': function() {
            this['parent']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.move.moveTo')['requires']('impact.entity')['defines'](function() {
    EntityMoveTo = ig['Entity']['extend']({
        'ent': [],
        'targetX': 0x1f4,
        'targetY': 0x1f4,
        'time': 0x1,
        'checkCompleteCallBack': null,
        'index': 0x4,
        'mode': 'horizoltal',
        'init': function(_0xc47b4c, _0x398f5b, _0x392a1a) {
            this['parent'](_0xc47b4c, _0x398f5b, _0x392a1a);
            for (_0xc47b4c = 0x0; _0xc47b4c < this['ent']['length']; _0xc47b4c++)
                this['ent'][_0xc47b4c]['maxVel']['x'] = 0x2710,
                this['ent'][_0xc47b4c]['maxVel']['y'] = 0x2710;
            this['startMove']();
        },
        'startMove': function() {
            if ('vertical' == this['mode'])
                for (var _0x180e66 = 0x0; _0x180e66 < this['ent']['length']; _0x180e66++)
                    this['ent'][_0x180e66]['anchoredPositionY'] += this['index'] * (0x1 / this['time']);
            else
                for (_0x180e66 = 0x0; _0x180e66 < this['ent']['length']; _0x180e66++)
                    this['ent'][_0x180e66]['anchoredPositionX'] += this['index'] * (0x1 / this['time']);
        },
        'checkMove': function() {
            var _0x2b127f = !0x1
              , _0x3f0d90 = 0x0;
            if ('vertical' == this['mode']) {
                if (this['ent'][0x1]['pos']['y'] + this['ent'][0x1]['size']['y'] / 0x2 + this['index'] * (0x1 / this['time']) >= this['targetY'] && (_0x2b127f = !0x0,
                _0x3f0d90 = this['targetY'] - (this['ent'][0x1]['pos']['y'] + this['ent'][0x1]['size']['y'] / 0x2)),
                !0x0 == _0x2b127f) {
                    for (_0x2b127f = 0x0; _0x2b127f < this['ent']['length']; _0x2b127f++)
                        this['ent'][_0x2b127f]['anchoredPositionY'] -= _0x3f0d90;
                    this['index'] = 0x0;
                }
            } else {
                if (this['ent'][0x1]['pos']['x'] + this['ent'][0x1]['size']['x'] / 0x2 + this['index'] * (0x1 / this['time']) >= this['targetX'] && (_0x2b127f = !0x0,
                _0x3f0d90 = this['targetX'] - (this['ent'][0x1]['pos']['x'] + this['ent'][0x1]['size']['x'] / 0x2)),
                !0x0 == _0x2b127f) {
                    for (_0x2b127f = 0x0; _0x2b127f < this['ent']['length']; _0x2b127f++)
                        this['ent'][_0x2b127f]['anchoredPositionX'] -= _0x3f0d90;
                    this['index'] = 0x0;
                }
            }
        },
        'checkComplete': function() {
            return 0x0 == this['index'] ? !0x0 : !0x1;
        },
        'update': function() {
            this['parent'](),
            this['startMove'](),
            this['checkMove'](),
            !0x0 == this['checkComplete']() && (this['checkCompleteCallBack'] && this['checkCompleteCallBack'](),
            this['kill']());
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.controllers.setting-controller')['requires']('impact.entity', 'game.entities.controllers.popup-controller', 'game.entities.bg.panel', 'game.entities.buttons.button-home', 'game.entities.ui.icon-sound', 'game.entities.text', 'game.entities.ui.slider-knot', 'game.entities.ui.slider-frame', 'game.entities.bg.shadow-bg', 'plugins.scale', 'game.entities.text.settings', 'game.entities.move.moveTo')['defines'](function() {
    EntitySettingController = EntityPopupController['extend']({
        'currentMode': null,
        'currentOnPortraitMode': null,
        'init': function(_0x15b942, _0x5e2de8, _0x331e55) {
            this['parent'](_0x15b942, _0x5e2de8, _0x331e55),
            this['spawnEntity'](EntityShadowBg, 0x0, 0x0, {}),
            this['panel'] = this['spawnEntity'](EntityPanel, -0x1f4, ig['system']['height'] / 0x2, {}),
            this['soundIcon'] = this['spawnEntity'](EntityIconSound, -0x1f4, ig['system']['height'] / 0x2, {}),
            this['homeBtn'] = this['spawnEntity'](EntityButtonHome, -0x1f4, ig['system']['height'] / 0x2, {}),
            this['title'] = this['spawnEntity'](EntityTextSettings, -0x1f4, ig['system']['height'] / 0x2, {}),
            this['soundFrame'] = this['spawnEntity'](EntitySliderFrame, -0x1f4, ig['system']['height'] / 0x2, {}),
            this['soundKnot'] = this['spawnEntity'](EntitySliderKnot, -0x1f4, ig['system']['height'] / 0x2, {
                'minX': -0x28,
                'maxX': 0x64,
                'changeCallback': this['changeSound']['bind'](this),
                'sliderBar': null
            }),
            _0x15b942 = ig['game']['getSoundVolume'](),
            ig['soundHandler']['sfxPlayer']['volume'](_0x15b942),
            this['soundKnot']['anchoredPositionX'] = this['soundKnot']['minX'] + (this['soundKnot']['maxX'] - this['soundKnot']['minX']) * _0x15b942,
            ig['system']['width'] > ig['system']['height'] ? (this['panel']['setScale'](0x2, 0x2),
            this['soundIcon']['setScale'](0x2, 0x2),
            this['homeBtn']['setScale'](0x2, 0x2),
            this['soundFrame']['setScale'](0x2, 0x2),
            this['title']['setScale'](1.3, 1.3),
            this['soundKnot']['setScale'](0x2, 0x2),
            this['panel']['setAnchoredPosition'](0.5 * -this['panel']['size']['x'] - 0x1f4, 0.5 * -this['panel']['size']['y'], 'center-middle'),
            this['title']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - this['title']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + 0.8 * this['title']['size']['y'], 'center-middle'),
            this['homeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['homeBtn']['size']['x'], this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
            this['soundIcon']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + 0x5a, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['homeBtn']['anchoredPositionY']) / 0x2 - this['soundIcon']['size']['y'] / 0x2, 'center-middle'),
            this['soundFrame']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + this['soundIcon']['size']['x'] + 0x96, this['soundIcon']['anchoredPositionY'] + this['soundIcon']['size']['y'] / 0x2 - 0x5, 'center-middle')) : (this['panel']['setScale'](1.5, 1.5),
            this['soundIcon']['setScale'](1.5, 1.5),
            this['homeBtn']['setScale'](1.5, 1.5),
            this['soundFrame']['setScale'](1.5, 1.5),
            this['title']['setScale'](1.3, 1.3),
            this['soundKnot']['setScale'](0x2, 0x2),
            this['panel']['setAnchoredPosition'](0.5 * -this['panel']['size']['x'] - 0x1f4, 0.5 * -this['panel']['size']['y'], 'center-middle'),
            this['title']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - this['title']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + 0.8 * this['title']['size']['y'], 'center-middle'),
            this['homeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['homeBtn']['size']['x'], this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
            this['soundIcon']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + 0x46, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['homeBtn']['anchoredPositionY']) / 0x2 - this['soundIcon']['size']['y'] / 0x2, 'center-middle'),
            this['soundFrame']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + this['soundIcon']['size']['x'] + 0x78, this['soundIcon']['anchoredPositionY'] + this['soundIcon']['size']['y'] / 0x2 - 0x5, 'center-middle')),
            this['soundKnot']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 + this['soundKnot']['anchoredPositionX'], this['soundFrame']['anchoredPositionY'] - this['soundKnot']['size']['y'] / 0x2 + this['soundFrame']['size']['y'] / 0x2, 'center-middle'),
            this['soundKnot']['minX'] = this['soundFrame']['anchoredPositionX'],
            this['soundKnot']['maxX'] = this['soundKnot']['minX'] + this['soundFrame']['size']['x'] - this['soundKnot']['size']['x'] / 0x2,
            _0x15b942 = ig['game']['getSoundVolume'](),
            this['soundKnot']['anchoredPositionX'] = this['soundKnot']['minX'] + (this['soundKnot']['maxX'] - this['soundKnot']['minX']) * _0x15b942,
            this['soundKnot']['minX'] = this['soundFrame']['anchoredPositionX'],
            this['soundKnot']['maxX'] = this['soundKnot']['minX'] + this['soundFrame']['size']['x'] - this['soundKnot']['size']['x'] / 0x2,
            this['currentOnPortraitMode'] = this['currentMode'] = 'a';
        },
        'changeMusic': function(_0x158be3) {
            ig['soundHandler']['bgmPlayer']['volume'](_0x158be3),
            ig['game']['setMusicVolume'](_0x158be3);
        },
        'changeSound': function(_0x5943ef) {
            ig['soundHandler']['sfxPlayer']['volume'](_0x5943ef),
            ig['game']['setSoundVolume'](_0x5943ef);
        },
        'update': function() {
            this['parent']();
            if (ig['ua']['mobile']) {
                if (ig['system']['width'] > ig['system']['height'] && (null == this['currentMode'] || 'vertical' == this['currentMode'])) {
                    this['panel']['setScale'](0x2, 0x2),
                    this['soundIcon']['setScale'](0x2, 0x2),
                    this['homeBtn']['setScale'](0x2, 0x2),
                    this['soundFrame']['setScale'](0x2, 0x2),
                    this['title']['setScale'](1.3, 1.3),
                    this['soundKnot']['setScale'](0x2, 0x2),
                    this['panel']['setAnchoredPosition'](0.5 * -this['panel']['size']['x'], 0.5 * -this['panel']['size']['y'], 'center-middle'),
                    this['title']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - this['title']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + 0.8 * this['title']['size']['y'], 'center-middle'),
                    this['homeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['homeBtn']['size']['x'], this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
                    this['soundIcon']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + 0x5a, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['homeBtn']['anchoredPositionY']) / 0x2 - this['soundIcon']['size']['y'] / 0x2, 'center-middle'),
                    this['soundFrame']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + this['soundIcon']['size']['x'] + 0x96, this['soundIcon']['anchoredPositionY'] + this['soundIcon']['size']['y'] / 0x2 - 0x5, 'center-middle'),
                    this['soundKnot']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 + this['soundKnot']['anchoredPositionX'], this['soundFrame']['anchoredPositionY'] - this['soundKnot']['size']['y'] / 0x2 + this['soundFrame']['size']['y'] / 0x2, 'center-middle'),
                    this['soundKnot']['minX'] = this['soundFrame']['anchoredPositionX'],
                    this['soundKnot']['maxX'] = this['soundKnot']['minX'] + this['soundFrame']['size']['x'] - this['soundKnot']['size']['x'] / 0x2;
                    var _0x3460f5 = ig['game']['getSoundVolume']();
                    this['soundKnot']['anchoredPositionX'] = this['soundKnot']['minX'] + (this['soundKnot']['maxX'] - this['soundKnot']['minX']) * _0x3460f5,
                    this['currentMode'] = 'horizontal';
                } else {
                    if (ig['system']['width'] < ig['system']['height'] && (null == this['currentMode'] || 'horizontal' == this['currentMode']))
                        this['panel']['setScale'](1.5, 1.5),
                        this['soundIcon']['setScale'](1.5, 1.5),
                        this['homeBtn']['setScale'](1.5, 1.5),
                        this['soundFrame']['setScale'](1.5, 1.5),
                        this['title']['setScale'](1.3, 1.3),
                        this['soundKnot']['setScale'](0x2, 0x2),
                        this['panel']['setAnchoredPosition'](0.5 * -this['panel']['size']['x'], 0.5 * -this['panel']['size']['y'], 'center-middle'),
                        this['title']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - this['title']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + 0.8 * this['title']['size']['y'], 'center-middle'),
                        this['homeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['homeBtn']['size']['x'], this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
                        this['soundIcon']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + 0x46, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['homeBtn']['anchoredPositionY']) / 0x2 - this['soundIcon']['size']['y'] / 0x2, 'center-middle'),
                        this['soundFrame']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + this['soundIcon']['size']['x'] + 0x78, this['soundIcon']['anchoredPositionY'] + this['soundIcon']['size']['y'] / 0x2 - 0x5, 'center-middle'),
                        this['soundKnot']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 + this['soundKnot']['anchoredPositionX'], this['soundFrame']['anchoredPositionY'] - this['soundKnot']['size']['y'] / 0x2 + this['soundFrame']['size']['y'] / 0x2, 'center-middle'),
                        this['soundKnot']['minX'] = this['soundFrame']['anchoredPositionX'],
                        this['soundKnot']['maxX'] = this['soundKnot']['minX'] + this['soundFrame']['size']['x'] - this['soundKnot']['size']['x'] / 0x2,
                        _0x3460f5 = ig['game']['getSoundVolume'](),
                        this['soundKnot']['anchoredPositionX'] = this['soundKnot']['minX'] + (this['soundKnot']['maxX'] - this['soundKnot']['minX']) * _0x3460f5,
                        this['currentMode'] = 'vertical';
                }
            } else {
                if (ig['system']['width'] > ig['system']['height'] && (null == this['currentOnPortraitMode'] || 'vertical' == this['currentOnPortraitMode']))
                    this['panel']['setScale'](0x2, 0x2),
                    this['soundIcon']['setScale'](0x2, 0x2),
                    this['homeBtn']['setScale'](0x2, 0x2),
                    this['soundFrame']['setScale'](0x2, 0x2),
                    this['title']['setScale'](1.3, 1.3),
                    this['soundKnot']['setScale'](0x2, 0x2),
                    this['panel']['setAnchoredPosition'](0.5 * -this['panel']['size']['x'], 0.5 * -this['panel']['size']['y'], 'center-middle'),
                    this['title']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - this['title']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + 0.8 * this['title']['size']['y'], 'center-middle'),
                    this['homeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['homeBtn']['size']['x'], this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
                    this['soundIcon']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + 0x5a, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['homeBtn']['anchoredPositionY']) / 0x2 - this['soundIcon']['size']['y'] / 0x2, 'center-middle'),
                    this['soundFrame']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + this['soundIcon']['size']['x'] + 0x96, this['soundIcon']['anchoredPositionY'] + this['soundIcon']['size']['y'] / 0x2 - 0x5, 'center-middle'),
                    this['soundKnot']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 + this['soundKnot']['anchoredPositionX'], this['soundFrame']['anchoredPositionY'] - this['soundKnot']['size']['y'] / 0x2 + this['soundFrame']['size']['y'] / 0x2, 'center-middle'),
                    this['soundKnot']['minX'] = this['soundFrame']['anchoredPositionX'],
                    this['soundKnot']['maxX'] = this['soundKnot']['minX'] + this['soundFrame']['size']['x'] - this['soundKnot']['size']['x'] / 0x2,
                    _0x3460f5 = ig['game']['getSoundVolume'](),
                    this['soundKnot']['anchoredPositionX'] = this['soundKnot']['minX'] + (this['soundKnot']['maxX'] - this['soundKnot']['minX']) * _0x3460f5,
                    this['currentOnPortraitMode'] = 'horizontal';
                else {
                    if (ig['system']['width'] < ig['system']['height'] && (null == this['currentOnPortraitMode'] || 'horizontal' == this['currentOnPortraitMode']))
                        this['panel']['setScale'](1.5, 1.5),
                        this['soundIcon']['setScale'](1.5, 1.5),
                        this['homeBtn']['setScale'](1.5, 1.5),
                        this['soundFrame']['setScale'](1.5, 1.5),
                        this['title']['setScale'](1.3, 1.3),
                        this['soundKnot']['setScale'](0x2, 0x2),
                        this['panel']['setAnchoredPosition'](0.5 * -this['panel']['size']['x'], 0.5 * -this['panel']['size']['y'], 'center-middle'),
                        this['title']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - this['title']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + 0.8 * this['title']['size']['y'], 'center-middle'),
                        this['homeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['homeBtn']['size']['x'], this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
                        this['soundIcon']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + 0x46, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['homeBtn']['anchoredPositionY']) / 0x2 - this['soundIcon']['size']['y'] / 0x2, 'center-middle'),
                        this['soundFrame']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + this['soundIcon']['size']['x'] + 0x78, this['soundIcon']['anchoredPositionY'] + this['soundIcon']['size']['y'] / 0x2 - 0x5, 'center-middle'),
                        this['soundKnot']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 + this['soundKnot']['anchoredPositionX'], this['soundFrame']['anchoredPositionY'] - this['soundKnot']['size']['y'] / 0x2 + this['soundFrame']['size']['y'] / 0x2, 'center-middle'),
                        this['soundKnot']['minX'] = this['soundFrame']['anchoredPositionX'],
                        this['soundKnot']['maxX'] = this['soundKnot']['minX'] + this['soundFrame']['size']['x'] - this['soundKnot']['size']['x'] / 0x2,
                        _0x3460f5 = ig['game']['getSoundVolume'](),
                        this['soundKnot']['anchoredPositionX'] = this['soundKnot']['minX'] + (this['soundKnot']['maxX'] - this['soundKnot']['minX']) * _0x3460f5,
                        this['currentOnPortraitMode'] = 'vertical';
                }
            }
            this['soundKnot']['minX'] = this['soundFrame']['anchoredPositionX'],
            this['soundKnot']['maxX'] = this['soundKnot']['minX'] + this['soundFrame']['size']['x'] - this['soundKnot']['size']['x'] / 0x2;
        },
        'show': function() {
            ig['game']['spawnEntity'](EntityMoveTo, 0x0, 0x0, {
                'ent': [this['title'], this['panel'], this['homeBtn'], this['soundIcon'], this['soundFrame'], this['soundKnot']],
                'targetX': ig['system']['width'] / 0x2,
                'targetY': ig['system']['height'] / 0x2,
                'time': 0.1,
                'checkCompleteCallBack': this['checkMoveComplete']['bind'](this),
                'mode': 'horizoltal'
            });
        },
        'hide': function(_0x34cd42) {
            this['funcCallBack'] = _0x34cd42,
            this['isMoveComplete'] = !0x1,
            ig['game']['spawnEntity'](EntityMoveTo, 0x0, 0x0, {
                'ent': [this['title'], this['panel'], this['homeBtn'], this['soundIcon'], this['soundFrame'], this['soundKnot']],
                'targetX': 1.5 * ig['system']['width'],
                'targetY': 0.5 * ig['system']['height'],
                'time': 0.1,
                'checkCompleteCallBack': this['checkMoveComplete']['bind'](this),
                'mode': 'horizoltal'
            });
        },
        'checkMoveComplete': function() {
            this['currentOnPortraitMode'] = this['currentMode'] = null,
            this['funcCallBack'] && this['funcCallBack']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.controllers.title-controller')['requires']('impact.entity', 'plugins.handlers.size-handler', 'game.entities.buttons.button-play', 'game.entities.buttons.button-setting', 'game.entities.ui.title', 'game.entities.buttons.button-more-games', 'game.entities.bg.background', 'game.entities.controllers.setting-controller')['defines'](function() {
    EntityTitleController = ig['Entity']['extend']({
        'playBtn': null,
        'moreBtn': null,
        'settingBtn': null,
        'fullscreenBtn': null,
        'settingPanel': null,
        'bgImg': new ig['Image']('media/graphics/sprites/background/background.png'),
        'currentMode': null,
        'mode': 'landscape',
        'init': function(_0x357af9, _0x31f25a, _0x5ebbfa) {
            this['parent'](_0x357af9, _0x31f25a, _0x5ebbfa),
            ig['game']['gameController'] = null,
            ig['game']['titleController'] = this,
            this['fullscreenBtn'] = ig['game']['spawnEntity'](ig['FullscreenButton'], 0x5, 0x5, {
                'enterImage': new ig['Image']('media/graphics/misc/enter-fullscreen.png'),
                'exitImage': new ig['Image']('media/graphics/misc/exit-fullscreen.png')
            }),
            ig['game']['spawnEntity'](EntityBackground, 0x0, 0x0, {}),
            this['titleLogo'] = ig['game']['spawnEntity'](EntityTitle, 0.5 * ig['system']['width'], 0.1 * ig['system']['height'], {}),
            this['playBtn'] = ig['game']['spawnEntity'](EntityButtonPlay, 0.5 * ig['system']['width'] - 0x49, 0.625 * ig['system']['height'], {}),
            this['moreBtn'] = ig['game']['spawnEntity'](EntityButtonMoreGames, 0.5 * ig['system']['width'] - 0xc8, 0.5 * ig['system']['height'] + 0x64, {}),
            this['settingBtn'] = ig['game']['spawnEntity'](EntityButtonSetting, 0x64, 0x64, {});
        },
        'ready': function() {
            this['parent']();
        },
        'update': function() {
            this['parent'](),
            0x2 <= ig['game']['getEntitiesByType'](EntityPointer)['length'] && ig['game']['getEntitiesByType'](EntityPointer)[0x1]['kill'](),
            this['mode'] = ig['ua']['mobile'] ? ig['system']['width'] > ig['system']['height'] ? 'mobileLandscape' : 'mobilePortrait' : ig['system']['width'] > ig['system']['height'] ? 'desktopLandscape' : 'desktopPortrait',
            this['mode'] != this['currentMode'] && (ig['system']['width'] > ig['system']['height'] ? (this['titleLogo']['setScale'](0x2, 0x2),
            this['playBtn']['setScale'](2.2, 2.2),
            this['settingBtn']['setScale'](2.2, 2.2),
            this['moreBtn']['setScale'](2.2, 2.2)) : (this['titleLogo']['setScale'](1.2, 1.2),
            this['playBtn']['setScale'](1.2, 1.2),
            this['settingBtn']['setScale'](1.2, 1.2),
            this['moreBtn']['setScale'](1.2, 1.2)),
            this['currentMode'] = this['mode'],
            this['titleLogo']['setAnchoredPosition'](-this['titleLogo']['size']['x'] / 0x2, -(this['titleLogo']['size']['y'] + 1.5 * this['playBtn']['size']['y'] + this['playBtn']['size']['y']) / 0x2, 'center-middle'),
            _SETTINGS['MoreGames']['Enabled'] ? (this['playBtn']['setAnchoredPosition'](-this['playBtn']['size']['x'] / 0x2, 1.5 * this['playBtn']['size']['y'], 'center-middle'),
            this['moreBtn']['setAnchoredPosition'](this['titleLogo']['anchoredPositionX'], 1.5 * this['playBtn']['size']['y'], 'center-middle'),
            this['settingBtn']['setAnchoredPosition'](this['titleLogo']['anchoredPositionX'] + this['titleLogo']['size']['x'] - this['settingBtn']['size']['x'], 1.5 * this['playBtn']['size']['y'], 'center-middle')) : (this['playBtn']['setAnchoredPosition'](this['titleLogo']['anchoredPositionX'] + this['playBtn']['size']['x'] / 0x2, 1.5 * this['playBtn']['size']['y'], 'center-middle'),
            this['settingBtn']['setAnchoredPosition'](this['titleLogo']['anchoredPositionX'] + this['titleLogo']['size']['x'] - this['settingBtn']['size']['x'] - this['settingBtn']['size']['x'] / 0x2, 1.5 * this['playBtn']['size']['y'], 'center-middle')));
        },
        'startTransitionOut': function() {
            ig['game']['director']['nextLevel']();
        },
        'showSettingPanel': function() {
            this['fullscreenBtn']['isEnabled'] = !0x1,
            this['fullscreenBtn']['enableFullscreenButton'] = !0x1,
            this['fullscreenBtn']['hide'](),
            this['playBtn']['isEnabled'] = !0x1,
            this['settingBtn']['isEnabled'] = !0x1,
            this['moreBtn']['isEnabled'] = !0x1,
            this['moreBtn']['hide'](),
            this['settingPanel'] = ig['game']['spawnEntity'](EntitySettingController, 0x0, 0x0, {}),
            this['settingPanel']['show']();
        },
        'hideSettingPanel': function() {
            this['fullscreenBtn']['isEnabled'] = !0x0,
            this['fullscreenBtn']['enableFullscreenButton'] = !0x0,
            this['fullscreenBtn']['show'](),
            this['playBtn']['isEnabled'] = !0x0,
            this['settingBtn']['isEnabled'] = !0x0,
            this['moreBtn']['isEnabled'] = !0x0,
            this['moreBtn']['show'](),
            this['settingPanel']['hide'](this['killSettingPanel']['bind'](this));
        },
        'killSettingPanel': function() {
            this['settingPanel'] && (this['settingPanel']['kill'](),
            this['settingPanel'] = null);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.levels.title')['requires']('impact.image', 'game.entities.controllers.title-controller')['defines'](function() {
    LevelTitle = {
        'entities': [{
            'type': 'EntityTitleController',
            'x': 0x0,
            'y': 0x0
        }, {
            'type': 'EntityPointer',
            'x': 0x0,
            'y': 0x0
        }],
        'layer': []
    };
}),
ig['baked'] = !0x0,
ig['module']('game.entities.buttons.button-pause')['requires']('game.entities.buttons.button')['defines'](function() {
    EntityButtonPause = EntityButton['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/buttons/pause-button.png',0x3c,0x3c),
        'size': {
            'x': 0x3c,
            'y': 0x3c
        },
        'paddlePlayer': null,
        'isClicked': !0x1,
        'init': function(_0xaf917b, _0x12e321, _0x5c3940) {
            this['parent'](_0xaf917b, _0x12e321, _0x5c3940),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'clicked': function() {
            ig['game']['tutorialController'] || (this['isClicked'] = !0x0,
            this['parent'](this['release']['bind'](this)));
        },
        'clicking': function() {},
        'released': function() {},
        'release': function() {
            if (this['isEnabled'] && this['isClicked']) {
                try {
                    console['log']('STOP'),
                    ig['poki']['stopGameplay']();
                } catch (_0x25396e) {}
                ig['soundHandler']['sfxPlayer']['play']('clickButton'),
                ig['game']['gameController'] && (this['isClicked'] = !0x1,
                ig['game']['gameController']['showPausePanel']());
            }
        },
        'update': function() {
            this['parent']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.as.table')['requires']('impact.entity')['defines'](function() {
    EntityTable = ig['Entity']['extend']({
        'size': new Vector2(0x14,0x14),
        'color': new ColorRGB(0x7d,0xff,0x7d,0x1),
        'widthTable': 0x0,
        'heightTable': 0x0,
        'lineWidthRetangle': 0x14,
        'lineWidthStraightVer': 0xa,
        'lineWidthStraightHor': 0x6,
        'sizeStraightHor': 0xd,
        'currentWidth': null,
        'currentHeight': null,
        'init': function(_0x32a423, _0x2052bd, _0x3baf58) {
            this['parent'](_0x32a423, _0x2052bd, _0x3baf58),
            ig['ua']['mobile'] ? ig['system']['width'] > ig['system']['height'] ? (this['heightTable'] = ig['system']['height'],
            this['heightTable'] -= this['heightTable'] / 0x4,
            this['widthTable'] = this['heightTable'] / 0x2) : (this['heightTable'] = ig['system']['height'],
            this['heightTable'] -= this['heightTable'] / 0x4,
            this['widthTable'] = this['heightTable'] / 0x2,
            this['widthTable'] >= ig['system']['width'] - 0x64 && (this['widthTable'] = ig['system']['width'] / 0x2,
            this['heightTable'] = 0x2 * this['widthTable'])) : ig['system']['width'] > ig['system']['height'] ? (this['heightTable'] = ig['system']['height'],
            this['heightTable'] -= this['heightTable'] / 0x4,
            this['widthTable'] = this['heightTable'] / 0x2) : (this['heightTable'] = ig['system']['height'],
            this['heightTable'] -= this['heightTable'] / 0x4,
            this['widthTable'] = this['heightTable'] / 0x2,
            this['widthTable'] >= ig['system']['width'] - 0x64 && (this['widthTable'] = ig['system']['width'] / 1.5,
            this['heightTable'] = 0x2 * this['widthTable'])),
            this['lineWidthRetangle'] = 0x1e,
            this['lineWidthStraightVer'] = 0x14,
            this['lineWidthStraightHor'] = 0x9,
            this['sizeStraightHor'] = 0xd * 1.7,
            this['setAnchoredPosition'](-this['widthTable'] / 0x2, -this['heightTable'] / 0x2, 'center-middle');
        },
        'update': function() {
            this['parent'](),
            this['widthTable'] == this['currentWidth'] && this['heightTable'] == this['currentHeight'] && null != this['currentHeight'] && null != this['currentWidth'] || (ig['ua']['mobile'] ? ig['system']['width'] > ig['system']['height'] ? (this['heightTable'] = ig['system']['height'],
            this['heightTable'] -= this['heightTable'] / 0x4,
            this['widthTable'] = this['heightTable'] / 0x2) : (this['heightTable'] = ig['system']['height'],
            this['heightTable'] -= this['heightTable'] / 0x4,
            this['widthTable'] = this['heightTable'] / 0x2,
            this['widthTable'] >= ig['system']['width'] - 0x64 && (this['widthTable'] = ig['system']['width'] / 0x2,
            this['heightTable'] = 0x2 * this['widthTable'])) : ig['system']['width'] > ig['system']['height'] ? (this['heightTable'] = ig['system']['height'],
            this['heightTable'] -= this['heightTable'] / 0x4,
            this['widthTable'] = this['heightTable'] / 0x2) : (this['heightTable'] = ig['system']['height'],
            this['heightTable'] -= this['heightTable'] / 0x4,
            this['widthTable'] = this['heightTable'] / 0x2,
            this['widthTable'] >= ig['system']['width'] - 0x64 && (this['widthTable'] = ig['system']['width'] / 1.5,
            this['heightTable'] = 0x2 * this['widthTable'])),
            this['currentHeight'] = this['heightTable'],
            this['currentWidth'] = this['widthTable'],
            this['lineWidthRetangle'] = 0x1e,
            this['lineWidthStraightVer'] = 0x14,
            this['lineWidthStraightHor'] = 0x9,
            this['sizeStraightHor'] = 0xd * 1.7,
            this['setAnchoredPosition'](-this['widthTable'] / 0x2, -this['heightTable'] / 0x2, 'center-middle'));
        },
        'draw': function() {
            this['parent']();
            var _0x3b0118 = ig['system']['context'];
            _0x3b0118['beginPath'](),
            _0x3b0118['lineWidth'] = '' + this['lineWidthRetangle'],
            _0x3b0118['strokeStyle'] = '#000000',
            _0x3b0118['rect'](this['pos']['x'], this['pos']['y'], this['widthTable'], this['heightTable']),
            _0x3b0118['stroke'](),
            _0x3b0118['beginPath'](),
            _0x3b0118['fillStyle'] = '#ff7e5a',
            _0x3b0118['fillRect'](this['pos']['x'], this['pos']['y'], this['widthTable'], this['heightTable']),
            _0x3b0118['stroke'](),
            _0x3b0118['beginPath'](),
            _0x3b0118['lineWidth'] = '' + this['lineWidthStraightVer'],
            _0x3b0118['strokeStyle'] = '#ffa187',
            _0x3b0118['moveTo'](this['pos']['x'] + this['widthTable'] / 0x2, this['pos']['y']),
            _0x3b0118['lineTo'](this['pos']['x'] + this['widthTable'] / 0x2, this['pos']['y'] + this['heightTable']),
            _0x3b0118['stroke'](),
            _0x3b0118['beginPath'](),
            _0x3b0118['lineWidth'] = '' + this['lineWidthStraightHor'],
            _0x3b0118['strokeStyle'] = '#000000',
            _0x3b0118['rect'](this['pos']['x'] - this['lineWidthRetangle'] / 0x4, this['pos']['y'] + this['heightTable'] / 0x2 - this['sizeStraightHor'] / 0x2, this['widthTable'] + this['lineWidthRetangle'] / 0x2, this['sizeStraightHor']),
            _0x3b0118['fillStyle'] = '#ffffff',
            _0x3b0118['fill'](),
            _0x3b0118['stroke']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.as.meteor-effect')['requires']('impact.entity')['defines'](function() {
    EntityMeteorEffect = ig['Entity']['extend']({
        'length': 0x0,
        'headPos': {
            'x': 0x0,
            'y': 0x0
        },
        'tailPos': {
            'x': 0x0,
            'y': 0x0
        },
        'posBall': {
            'x': 0x0,
            'y': 0x0
        },
        'prePosball': {
            'x': 0x0,
            'y': 0x0
        },
        'init': function(_0x4ddfd7, _0x39fc82, _0x26ae59) {
            this['parent'](_0x4ddfd7, _0x39fc82, _0x26ae59);
        },
        'update': function() {
            this['parent']();
        },
        'draw': function() {
            this['parent']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.as.effect-ball')['requires']('impact.entity')['defines'](function() {
    EntityEffectBall = ig['Entity']['extend']({
        'radius': 0x0,
        'timeStartDrawEffect': 0x0,
        'timeDrawEffect': 0x0,
        'subGlobalAlpha': 0x0,
        'scaleEffect': 0x1,
        'type': 0x0,
        'init': function(_0x47698e, _0x23dfb7, _0x4df472) {
            this['parent'](_0x47698e, _0x23dfb7, _0x4df472),
            this['timeDrawEffect'] = 0.3,
            this['radius'] = _0x4df472['radius'],
            this['timeStartDrawEffect'] = _0x4df472['timeStart'],
            this['scaleEffect'] = _0x4df472['scaleEffect'],
            this['type'] = Math['floor'](0x4 * Math['random']() + 0x1);
        },
        'update': function() {
            this['parent'](),
            (Date['now']() - this['timeStartDrawEffect']) / 0x3e8 > this['timeDrawEffect'] && this['kill'](),
            this['radius'] += 0.5;
        },
        'draw': function() {
            this['parent']();
            var _0x4b0f18 = ig['system']['context'];
            _0x4b0f18['globalAlpha'] -= this['subGlobalAlpha'],
            this['subGlobalAlpha'] += (0x1 - this['subGlobalAlpha']) / (this['timeDrawEffect'] / ig['system']['tick']),
            _0x4b0f18['beginPath'](),
            _0x4b0f18['lineWidth'] = '1';
            switch (this['type']) {
            case 0x1:
                _0x4b0f18['moveTo'](this['pos']['x'] + this['radius'], this['pos']['y'] + this['radius']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0x19 * this['scaleEffect'], this['pos']['y'] + this['radius'] + 0xf * this['scaleEffect']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0xf * this['scaleEffect'], this['pos']['y'] + this['radius'] + 0x19 * this['scaleEffect']),
                _0x4b0f18['moveTo'](this['pos']['x'] - this['radius'], this['pos']['y'] - this['radius']),
                _0x4b0f18['lineTo'](this['pos']['x'] - this['radius'] - 0x14 * this['scaleEffect'], this['pos']['y'] - this['radius'] - 0x5 * this['scaleEffect']),
                _0x4b0f18['lineTo'](this['pos']['x'] - this['radius'] - 0xf * this['scaleEffect'], this['pos']['y'] - this['radius'] - 0xf * this['scaleEffect']),
                _0x4b0f18['moveTo'](this['pos']['x'] - this['radius'], this['pos']['y'] + this['radius']),
                _0x4b0f18['lineTo'](this['pos']['x'] - this['radius'] - 0x19 * this['scaleEffect'], this['pos']['y'] + this['radius'] + 0xa * this['scaleEffect']),
                _0x4b0f18['lineTo'](this['pos']['x'] - this['radius'] - 0x14 * this['scaleEffect'], this['pos']['y'] + this['radius'] + 0x14 * this['scaleEffect']),
                _0x4b0f18['moveTo'](this['pos']['x'] + this['radius'], this['pos']['y'] - this['radius']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0x1e * this['scaleEffect'], this['pos']['y'] - this['radius'] - 0xf * this['scaleEffect']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0x19 * this['scaleEffect'], this['pos']['y'] - this['radius'] - 0x19 * this['scaleEffect']),
                _0x4b0f18['moveTo'](this['pos']['x'] + this['radius'], this['pos']['y']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0xf * this['scaleEffect'], this['pos']['y'] + 0x5 * this['scaleEffect']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0xf * this['scaleEffect'], this['pos']['y'] - 0x5 * this['scaleEffect']);
                break;
            case 0x2:
                _0x4b0f18['moveTo'](this['pos']['x'] + this['radius'], this['pos']['y'] + this['radius']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0x19 * this['scaleEffect'], this['pos']['y'] + this['radius'] + 0xf * this['scaleEffect']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0xf * this['scaleEffect'], this['pos']['y'] + this['radius'] + 0x19 * this['scaleEffect']),
                _0x4b0f18['moveTo'](this['pos']['x'] - this['radius'], this['pos']['y'] + this['radius']),
                _0x4b0f18['lineTo'](this['pos']['x'] - this['radius'] - 0x19 * this['scaleEffect'], this['pos']['y'] + this['radius'] + 0xa * this['scaleEffect']),
                _0x4b0f18['lineTo'](this['pos']['x'] - this['radius'] - 0x14 * this['scaleEffect'], this['pos']['y'] + this['radius'] + 0x14 * this['scaleEffect']),
                _0x4b0f18['moveTo'](this['pos']['x'] + this['radius'], this['pos']['y']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0xf * this['scaleEffect'], this['pos']['y'] + 0x5 * this['scaleEffect']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0xf * this['scaleEffect'], this['pos']['y'] - 0x5 * this['scaleEffect']);
                break;
            case 0x3:
                _0x4b0f18['moveTo'](this['pos']['x'] - this['radius'], this['pos']['y'] - this['radius']),
                _0x4b0f18['lineTo'](this['pos']['x'] - this['radius'] - 0x14 * this['scaleEffect'], this['pos']['y'] - this['radius'] - 0x5 * this['scaleEffect']),
                _0x4b0f18['lineTo'](this['pos']['x'] - this['radius'] - 0xf * this['scaleEffect'], this['pos']['y'] - this['radius'] - 0xf * this['scaleEffect']),
                _0x4b0f18['moveTo'](this['pos']['x'] - this['radius'], this['pos']['y'] + this['radius']),
                _0x4b0f18['lineTo'](this['pos']['x'] - this['radius'] - 0x19 * this['scaleEffect'], this['pos']['y'] + this['radius'] + 0xa * this['scaleEffect']),
                _0x4b0f18['lineTo'](this['pos']['x'] - this['radius'] - 0x14 * this['scaleEffect'], this['pos']['y'] + this['radius'] + 0x14 * this['scaleEffect']);
                break;
            case 0x4:
                _0x4b0f18['moveTo'](this['pos']['x'] + this['radius'], this['pos']['y'] + this['radius']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0x19 * this['scaleEffect'], this['pos']['y'] + this['radius'] + 0xf * this['scaleEffect']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0xf * this['scaleEffect'], this['pos']['y'] + this['radius'] + 0x19 * this['scaleEffect']),
                _0x4b0f18['moveTo'](this['pos']['x'] + this['radius'], this['pos']['y'] - this['radius']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0x1e * this['scaleEffect'], this['pos']['y'] - this['radius'] - 0xf * this['scaleEffect']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0x19 * this['scaleEffect'], this['pos']['y'] - this['radius'] - 0x19 * this['scaleEffect']),
                _0x4b0f18['moveTo'](this['pos']['x'] + this['radius'], this['pos']['y']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0xf * this['scaleEffect'], this['pos']['y'] + 0x5 * this['scaleEffect']),
                _0x4b0f18['lineTo'](this['pos']['x'] + this['radius'] + 0xf * this['scaleEffect'], this['pos']['y'] - 0x5 * this['scaleEffect']);
            }
            _0x4b0f18['closePath'](),
            _0x4b0f18['fillStyle'] = '#000000',
            _0x4b0f18['fill'](),
            _0x4b0f18['stroke'](),
            _0x4b0f18['globalAlpha'] = 0x1,
            _0x4b0f18['fillStyle'] = '#ffffff';
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.as.ball')['requires']('impact.entity', 'game.entities.as.meteor-effect', 'game.entities.as.table', 'game.entities.as.effect-ball')['defines'](function() {
    EntityBall = ig['Entity']['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'zIndex': 0x834,
        'radius': 0xa,
        'vector': {
            'x': 0x0,
            'y': 0x0
        },
        'size': {
            'x': 0x0,
            'y': 0x0
        },
        'center': {
            'x': 0x0,
            'y': 0x0
        },
        'turn': !0x0,
        'touchPaddle': !0x1,
        'maxRadius': 0xd,
        'minRadius': 0xa,
        'isToMin': !0x1,
        'isToMax': !0x0,
        'high': 0x3,
        'timeFly': 0x0,
        'allowEffect': !0x1,
        'isTouch': !0x1,
        'isTouchToHit': !0x1,
        'isInTable': !0x0,
        'table': null,
        'isInPlayer': !0x1,
        'isInCpu': !0x1,
        'numberTouch': 0x0,
        'deltaRadius': 0x0,
        'xOrigin': 0x0,
        'yOrigin': 0x0,
        'nextOne': !0x0,
        'isMove': !0x1,
        'isPause': !0x1,
        'currentPosition': 'player',
        'indexHight': 0x1e,
        'scaleEffect': 0.7,
        'lineWidthBall': 0x5,
        'checkMobileHorizontalMode': !0x1,
        'checkMobileVerticalMode': !0x1,
        'currentMode': null,
        'currentOnPortraitMode': null,
        'anchoredX': 0x0,
        'anchoredY': 0x0,
        'curentResolution': 0x0,
        'init': function(_0x206a83, _0x9bec6c, _0x3529b8) {
            this['parent'](_0x206a83, _0x9bec6c, _0x3529b8),
            this['size']['x'] = 0x2 * this['radius'],
            this['size']['y'] = 0x2 * this['radius'],
            this['maxVel']['x'] = 0x7d0,
            this['maxVel']['y'] = 0x7d0,
            this['table'] = ig['game']['getEntitiesByType'](EntityTable)[0x0],
            this['xOrigin'] = this['pos']['x'],
            this['yOrigin'] = this['pos']['y'],
            ig['ua']['mobile'] && (this['radius'] = 0x19,
            this['size']['x'] = 0x2 * this['radius'],
            this['size']['y'] = 0x2 * this['radius'],
            this['minRadius'] = this['radius'],
            this['maxRadius'] = this['minRadius'] + 0xc,
            this['scaleEffect'] = 0x2,
            this['indexHight'] = 0x1e,
            this['lineWidthBall'] *= 0x2),
            this['anchoredX'] = ig['responsive']['halfWidth'],
            this['anchoredY'] = ig['responsive']['halfHeight'] + this['table']['heightTable'] / 0x2,
            this['curentResolution'] = ig['responsive']['halfWidth'] / ig['responsive']['halfHeight'];
        },
        'update': function() {
            if (!this['isPause']) {
                this['parent'](),
                null == this['table'] && (this['table'] = ig['game']['getEntitiesByType'](EntityTable)[0x0]);
                if (ig['ua']['mobile']) {
                    if (ig['system']['width'] > ig['system']['height'] && ('horizontal' != this['currentMode'] || null == this['currentMode']))
                        this['checkMobileHorizontalMode'] = !0x0,
                        this['currentMode'] = 'horizontal';
                    else {
                        if (ig['system']['width'] < ig['system']['height'] && ('vertical' != this['currentMode'] || null == this['currentMode']))
                            this['checkMobileVerticalMode'] = !0x0,
                            this['currentMode'] = 'vertical';
                    }
                    !0x0 == this['checkMobileHorizontalMode'] ? (this['radius'] = this['table']['widthTable'] / 0x19,
                    this['size']['x'] = 0x2 * this['radius'],
                    this['size']['y'] = 0x2 * this['radius'],
                    this['minRadius'] = this['radius'],
                    this['maxRadius'] = this['minRadius'] + 0x8,
                    this['scaleEffect'] = 0x1,
                    this['indexHight'] = 0x1e,
                    this['lineWidthBall'] = 0x5,
                    this['checkMobileHorizontalMode'] = !0x1) : !0x0 == this['checkMobileVerticalMode'] && (this['radius'] = this['table']['widthTable'] / 0x19,
                    this['size']['x'] = 0x2 * this['radius'],
                    this['size']['y'] = 0x2 * this['radius'],
                    this['minRadius'] = this['radius'],
                    this['maxRadius'] = this['minRadius'] + 0x8,
                    this['scaleEffect'] = 0x1,
                    this['indexHight'] = 0x1e,
                    this['lineWidthBall'] = 0x5,
                    this['checkMobileVerticalMode'] = !0x1);
                } else {
                    if (ig['system']['width'] < ig['system']['height'] && (null == this['currentOnPortraitMode'] || 'vertical' == this['currentOnPortraitMode']))
                        this['radius'] = this['table']['widthTable'] / 0x19,
                        this['size']['x'] = 0x2 * this['radius'],
                        this['size']['y'] = 0x2 * this['radius'],
                        this['minRadius'] = this['radius'],
                        this['maxRadius'] = this['minRadius'] + 0xa,
                        this['scaleEffect'] = 0x1,
                        this['indexHight'] = 0x1e,
                        this['lineWidthBall'] = 0x5,
                        this['currentOnPortraitMode'] = 'horizontal';
                    else {
                        if (ig['system']['width'] > ig['system']['height'] && (null == this['currentOnPortraitMode'] || 'horizontal' == this['currentOnPortraitMode']))
                            this['radius'] = this['table']['widthTable'] / 0x19,
                            this['size']['x'] = 0x2 * this['radius'],
                            this['size']['y'] = 0x2 * this['radius'],
                            this['minRadius'] = this['radius'],
                            this['maxRadius'] = this['minRadius'] + 0xa,
                            this['scaleEffect'] = 0x1,
                            this['indexHight'] = 0x1e,
                            this['lineWidthBall'] = 0x5,
                            this['checkMobileHorizontalMode'] = !0x1,
                            this['currentOnPortraitMode'] = 'vertical';
                    }
                }
                this['center']['x'] = this['pos']['x'],
                this['center']['y'] = this['pos']['y'];
                if (0x0 != this['vel']['x'] || 0x0 != this['vel']['y'])
                    this['scaleBall'](),
                    this['isMove'] = !0x0;
                !0x1 == this['isMove'] && (this['pos']['x'] = ig['system']['width'] / 0x2,
                this['pos']['y'] = !0x0 == this['turn'] ? this['table']['pos']['y'] + this['table']['heightTable'] - 0x2 * this['size']['y'] : this['table']['pos']['y'] + 0x2 * this['size']['y']),
                this['checkBallInTable']();
            }
            ig['responsive']['halfWidth'] / ig['responsive']['halfHeight'] != this['curentResolution'] && (this['pos']['x'] = this['anchoredX'] + ig['responsive']['halfWidth'],
            this['pos']['y'] = this['anchoredY'] + ig['responsive']['halfHeight'],
            this['curentResolution'] = ig['responsive']['halfWidth'] / ig['responsive']['halfHeight']),
            this['anchoredX'] = this['pos']['x'] - ig['responsive']['halfWidth'],
            this['anchoredY'] = this['pos']['y'] - ig['responsive']['halfHeight'];
        },
        'draw': function() {
            this['parent']();
            var _0x18e9b8 = ig['system']['context'];
            _0x18e9b8['beginPath'](),
            _0x18e9b8['lineWidth'] = this['lineWidthBall'],
            _0x18e9b8['strokeStyle'] = '#000000',
            _0x18e9b8['arc'](this['pos']['x'], this['pos']['y'], this['radius'], 0x0, 0x2 * Math['PI'], !0x1),
            _0x18e9b8['fillStyle'] = '#ffffff',
            _0x18e9b8['fill'](),
            _0x18e9b8['stroke'](),
            this['allowEffect'] && (this['allowEffect'] = !0x1);
        },
        'scaleBall': function() {
            this['touchPaddle'] && (this['isToMax'] = !0x0,
            this['touchPaddle'] = this['isToMin'] = !0x1),
            this['isToMax'] && (this['radius'] += this['deltaRadius'],
            this['isToMax'] = !0x0,
            this['isToMin'] = !0x1),
            this['isToMin'] && (this['radius'] -= this['deltaRadius'],
            this['isToMin'] = !0x0,
            this['isToMax'] = !0x1),
            this['radius'] >= this['maxRadius'] ? (this['isToMin'] = !0x0,
            this['isToMax'] = !0x1) : this['radius'] <= this['minRadius'] && (this['isToMin'] = !0x1,
            this['allowEffect'] = this['isToMax'] = !0x0);
        },
        'checkBallInTable': function() {
            if (null != this['table']) {
                this['isInTable'] = this['pos']['x'] >= this['table']['pos']['x'] - 0x14 && this['pos']['x'] <= this['table']['pos']['x'] + this['table']['widthTable'] + 0x14 && this['pos']['y'] >= this['table']['pos']['y'] - 0x14 && this['pos']['y'] <= this['table']['pos']['y'] + this['table']['heightTable'] + 0x14 ? !0x0 : !0x1,
                this['pos']['y'] < this['table']['pos']['y'] + this['table']['heightTable'] / 0x2 ? (this['isInCpu'] = !0x0,
                this['isInPlayer'] = !0x1) : this['pos']['y'] > this['table']['pos']['y'] + this['table']['heightTable'] / 0x2 + 0x14 && (this['isInCpu'] = !0x1,
                this['isInPlayer'] = !0x0);
                var _0x4ef5b5 = !0x1;
                'cpu' === this['currentPosition'] && !0x1 == this['isInCpu'] ? (this['currentPosition'] = 'player',
                _0x4ef5b5 = !0x0) : 'player' === this['currentPosition'] && !0x1 == this['isInPlayer'] && (this['currentPosition'] = 'cpu',
                _0x4ef5b5 = !0x0),
                !0x0 == _0x4ef5b5 && (this['numberTouch'] = 0x0);
            }
        },
        'resetPosition': function() {
            (this['nextOne'] = !this['nextOne']) ? (this['pos']['x'] = ig['responsive']['width'] / 0x2,
            this['pos']['y'] = this['table']['pos']['y'] + this['table']['heightTable'] - 0x3 * this['size']['y'],
            this['turn'] = !0x0) : (this['pos']['x'] = ig['responsive']['width'] / 0x2,
            this['pos']['y'] = this['table']['pos']['y'] + 0x3 * this['size']['y'],
            this['turn'] = !0x1),
            this['vel']['x'] = 0x0,
            this['vel']['y'] = 0x0,
            this['radius'] = this['minRadius'],
            this['high'] = 0x3,
            this['isMove'] = !0x1;
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.as.paddle')['requires']('impact.entity', 'game.entities.as.ball', 'game.entities.as.table', 'plugins.scale')['defines'](function() {
    EntityPaddle = ig['Entity']['extend']({
        'type': ig['Entity']['TYPE']['B'],
        'checkAgainst': ig['Entity']['TYPE']['A'],
        'collides': ig['Entity']['COLLIDES']['PASSIVE'],
        'zIndex': 0x898,
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/paddle.png',0x33,0x39),
        'size': {
            'x': 0x33,
            'y': 0x39
        },
        'isClicking': !0x0,
        'center': {
            'x': 0x0,
            'y': 0x0
        },
        'ball': null,
        'table': null,
        'shadow': null,
        'score': 0x0,
        'coefficientScale': 0x3,
        'currentMode': null,
        'checkMobileHorizontalMode': !0x1,
        'checkMobileVerticalMode': !0x1,
        'currentScale': null,
        'sizeX': 0x0,
        'init': function(_0x2c3379, _0xaec969, _0x4092e7) {
            this['parent'](_0x2c3379, _0xaec969, _0x4092e7),
            this['addAnim']('idle', 0x1, [0x0]),
            this['ball'] = ig['game']['getEntitiesByType'](EntityBall)[0x0],
            this['table'] = ig['game']['getEntitiesByType'](EntityTable)[0x0],
            this['sizeX'] = this['size']['x'];
        },
        'update': function() {
            this['parent'](),
            this['coefficientScale'] = this['table']['widthTable'] / 0x4 / this['sizeX'];
        },
        'updateCenter': function() {
            this['center']['x'] = this['pos']['x'] + this['size']['x'] / 0x2,
            this['center']['y'] = this['pos']['y'] + this['size']['y'] / 0x2;
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.as.paddle-cpu')['requires']('impact.entity', 'game.entities.as.paddle', 'game.entities.as.ball')['defines'](function() {
    EntityPaddleCpu = EntityPaddle['extend']({
        'type': ig['Entity']['TYPE']['B'],
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/paddle-cpu.png',0x33,0x39),
        'size': {
            'x': 0x33,
            'y': 0x39
        },
        'center': {
            'x': 0x0,
            'y': 0x0
        },
        'yLimit': 0x0,
        'allowEffect': !0x1,
        'score': 0x0,
        'table': null,
        'checkToHit': !0x1,
        'isPause': !0x1,
        'scaleEffect': 0.5,
        'startDrawEffect': 0x0,
        'subGlobalAlpha': 0x0,
        'posXEffect': 0x0,
        'posYEffect': 0x0,
        'radiusEffect': 0xa,
        'anchoredX': 0x0,
        'anchoredY': 0x0,
        'curentResolution': 0x0,
        'init': function(_0x21dd16, _0x2354c5, _0x1dc5c8) {
            this['parent'](_0x21dd16, _0x2354c5, _0x1dc5c8),
            this['addAnim']('idle', 0x1, [0x0]),
            this['maxVel']['x'] = 0x3e8,
            this['maxVel']['y'] = 0x3e8,
            this['yLimit'] = this['table']['anchoredPositionY'],
            this['table'] = ig['game']['getEntitiesByType'](EntityTable)[0x0],
            this['anchoredX'] = ig['responsive']['halfWidth'],
            this['anchoredY'] = ig['responsive']['halfHeight'] + this['table']['heightTable'] / 0x2,
            this['curentResolution'] = ig['responsive']['halfWidth'] / ig['responsive']['halfHeight'];
        },
        'update': function() {
            this['isPause'] || (this['parent'](),
            this['setScale'](this['coefficientScale'], this['coefficientScale']),
            this['scaleEffect'] = 0x1,
            this['updateCenter'](),
            this['vel']['x'] = !0x0 == this['ball']['turn'] && (this['ball']['pos']['x'] < this['table']['pos']['x'] - 0x96 || this['ball']['pos']['x'] > this['table']['pos']['x'] + this['table']['widthTable'] + 0x96) || 0x0 > this['ball']['pos']['x'] || this['ball']['pos']['x'] > ig['responsive']['width'] ? 0x0 : 0xa * (this['ball']['pos']['x'] - this['center']['x']),
            this['yLimit'] = this['table']['pos']['y'] - this['size']['y'],
            ig['ua']['mobile'] && (this['yLimit'] = this['table']['pos']['y'] - 1.5 * this['size']['y']),
            this['hitTheBall']()),
            ig['responsive']['halfWidth'] / ig['responsive']['halfHeight'] != this['curentResolution'] && (this['pos']['x'] = this['anchoredX'] + ig['responsive']['halfWidth'],
            this['pos']['y'] = this['anchoredY'] + ig['responsive']['halfHeight'],
            this['curentResolution'] = ig['responsive']['halfWidth'] / ig['responsive']['halfHeight']),
            this['anchoredX'] = this['pos']['x'] - ig['responsive']['halfWidth'],
            this['anchoredY'] = this['pos']['y'] - ig['responsive']['halfHeight'];
        },
        'check': function() {
            !0x0 != this['ball']['turn'] && !(Math['sqrt']((this['center']['x'] - this['ball']['pos']['x']) * (this['center']['x'] - this['ball']['pos']['x']) + (this['center']['y'] - this['ball']['pos']['y']) * (this['center']['y'] - this['ball']['pos']['y'])) > this['size']['x'] / 0x2 + this['ball']['size']['x'] / 0x2) && (ig['soundHandler']['sfxPlayer']['play']('touchPaddle'),
            this['forceOfCpuToBall'](),
            this['ball']['turn'] = !0x0,
            this['allowEffect'] = this['ball']['touchPaddle'] = !0x0,
            this['ball']['isTouch'] = !0x1,
            this['ball']['isTouchToHit'] = !0x1,
            this['ball']['numberTouch'] = 0x0,
            this['checkToHit'] = !0x1,
            this['startDrawEffect'] = Date['now'](),
            this['subGlobalAlpha'] = 0x0,
            this['posXEffect'] = this['ball']['pos']['x'],
            this['posYEffect'] = this['center']['y'],
            this['radiusEffect'] = 0xa);
        },
        'forceOfCpuToBall': function() {
            var _0xbc165c = this['ball']['pos']['x']
              , _0x525897 = this['ball']['pos']['y']
              , _0x26ff95 = this['table']['pos']['y']
              , _0x337a44 = this['table']['pos']['x'] - 0xa
              , _0x3be7bd = _0x337a44 + this['table']['widthTable'] + 0xa
              , _0x120d8b = Math['floor'](_0x26ff95 + this['table']['heightTable'] / 0x2 + 0x46)
              , _0x26ff95 = Math['floor'](_0x26ff95 + this['table']['heightTable'] - 0x64)
              , _0x337a44 = Math['floor'](Math['random']() * (_0x3be7bd - _0x337a44 + 0x1)) + _0x337a44
              , _0x3be7bd = Math['floor'](Math['random']() * (_0x26ff95 - _0x120d8b + 0x1)) + _0x120d8b;
            _0x3be7bd < _0x120d8b && (_0x3be7bd = _0x120d8b),
            _0x3be7bd > _0x26ff95 && (_0x3be7bd = _0x26ff95),
            _0x120d8b = Math['floor'](0x9 * Math['random']() + 0x0),
            _0x120d8b = 0x1 + 0.1 * _0x120d8b,
            this['ball']['vel']['x'] = (_0x337a44 - _0xbc165c) * _0x120d8b,
            this['ball']['vel']['y'] = (_0x3be7bd - _0x525897) * _0x120d8b,
            this['ball']['deltaRadius'] = (this['ball']['maxRadius'] - this['ball']['minRadius'] + (this['ball']['maxRadius'] - this['ball']['radius'])) / (0x1 / _0x120d8b / ig['system']['tick']),
            this['ball']['timeFly'] = 0x1 / _0x120d8b,
            _0xbc165c > _0x337a44 ? 0x0 < this['ball']['vel']['x'] && (this['ball']['vel']['x'] = -this['ball']['vel']['x']) : 0x0 > this['ball']['vel']['x'] && (this['ball']['vel']['x'] = -this['ball']['vel']['x']);
        },
        'updateCenter': function() {
            this['center']['x'] = this['pos']['x'] + this['size']['x'] / 0x2,
            this['center']['y'] = this['pos']['y'] + this['size']['y'] / 0x2;
        },
        'hitTheBall': function() {
            this['ball']['isTouchToHit'] && this['ball']['isInCpu'] && this['ball']['isInTable'] && (this['checkToHit'] = !0x0),
            this['checkToHit'] && !this['ball']['turn'] || !this['ball']['nextOne'] && !this['ball']['isMove'] && this['ball']['isInTable'] ? this['pos']['y'] += 0x4 : this['pos']['y'] > this['yLimit'] ? this['pos']['y'] -= 0x3 : this['pos']['y'] < this['yLimit'] && (this['pos']['y'] = this['yLimit']);
        },
        'distance': function(_0x334e06, _0x4fae36) {
            return Math['sqrt']((this['ball']['center']['x'] - _0x4fae36['x']) * (this['ball']['center']['x'] - _0x4fae36['x']) + (this['ball']['center']['y'] - _0x4fae36['y']) * (this['ball']['center']['y'] - _0x4fae36['y']));
        },
        'draw': function() {
            this['parent'](),
            this['drawEffect']();
        },
        'drawEffect': function() {
            if (!(0x64 < Date['now']() - this['startDrawEffect'])) {
                var _0x5bc3a9 = ig['system']['context'];
                _0x5bc3a9['globalAlpha'] -= this['subGlobalAlpha'],
                this['subGlobalAlpha'] += (0x1 - this['subGlobalAlpha']) / (0.1 / ig['system']['tick']),
                this['radiusEffect'] += 0x3,
                _0x5bc3a9['beginPath'](),
                _0x5bc3a9['lineWidth'] = '1',
                _0x5bc3a9['moveTo'](this['posXEffect'], this['posYEffect'] + this['radiusEffect'] + this['size']['y'] / 0x2),
                _0x5bc3a9['lineTo'](this['posXEffect'] - 0x5 * this['scaleEffect'], this['posYEffect'] + this['radiusEffect'] + this['size']['y'] / 0x2 + 0xf * this['scaleEffect']),
                _0x5bc3a9['lineTo'](this['posXEffect'] + 0x5 * this['scaleEffect'], this['posYEffect'] + this['radiusEffect'] + this['size']['y'] / 0x2 + 0xf * this['scaleEffect']),
                _0x5bc3a9['moveTo'](this['posXEffect'] - this['radiusEffect'] - 0x5 * this['scaleEffect'], this['posYEffect'] + this['radiusEffect'] + this['size']['y'] / 0x2 - 0x5 * this['scaleEffect']),
                _0x5bc3a9['lineTo'](this['posXEffect'] - this['radiusEffect'] - 0x14 * this['scaleEffect'], this['posYEffect'] + this['radiusEffect'] + this['size']['y'] / 0x2 + 0x14 * this['scaleEffect']),
                _0x5bc3a9['lineTo'](this['posXEffect'] - this['radiusEffect'] - 0x1e * this['scaleEffect'], this['posYEffect'] + this['radiusEffect'] + this['size']['y'] / 0x2 + 0xf * this['scaleEffect']),
                _0x5bc3a9['moveTo'](this['posXEffect'] + this['radiusEffect'] + 0x5 * this['scaleEffect'], this['posYEffect'] + this['radiusEffect'] + this['size']['y'] / 0x2 - 0x5 * this['scaleEffect']),
                _0x5bc3a9['lineTo'](this['posXEffect'] + this['radiusEffect'] + 0xa * this['scaleEffect'], this['posYEffect'] + this['radiusEffect'] + this['size']['y'] / 0x2 + 0x14 * this['scaleEffect']),
                _0x5bc3a9['lineTo'](this['posXEffect'] + this['radiusEffect'] + 0x14 * this['scaleEffect'], this['posYEffect'] + this['radiusEffect'] + this['size']['y'] / 0x2 + 0xf * this['scaleEffect']),
                _0x5bc3a9['fillStyle'] = '#000000',
                _0x5bc3a9['fill'](),
                _0x5bc3a9['stroke'](),
                _0x5bc3a9['globalAlpha'] = 0x1,
                this['allowEffect'] = !0x1,
                _0x5bc3a9['fillStyle'] = '#ffffff';
            }
        },
        'resetPosition': function() {
            this['pos']['y'] = this['yLimit'],
            this['pos']['x'] = this['table']['pos']['x'] + this['table']['widthTable'] / 0x2;
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.as.paddle-player')['requires']('impact.entity', 'game.entities.as.paddle', 'game.entities.as.ball', 'game.entities.buttons.button-pause')['defines'](function() {
    EntityPaddlePlayer = EntityPaddle['extend']({
        'pointer': null,
        'isHolding': !0x1,
        'minX': -0xc8,
        'maxX': 0xa0,
        'minY': 0x14,
        'currentPos': {
            'x': 0x0,
            'y': 0x0
        },
        'collision': !0x1,
        'checkColision': !0x1,
        'allowEffect': !0x1,
        'score': 0x0,
        'isPause': !0x1,
        'spinBall': null,
        'isHit': !0x1,
        'isSpin': !0x1,
        'scaleEffect': 0.5,
        'startDrawEffect': 0x0,
        'subGlobalAlpha': 0x0,
        'posXEffect': 0x0,
        'posYEffect': 0x0,
        'radiusEffect': 0xa,
        'isClick': !0x1,
        'checkk': !0x0,
        'anchoredX': 0x0,
        'anchoredY': 0x0,
        'curentResolution': 0x0,
        'init': function(_0x5d955a, _0x16548b, _0x9d8727) {
            this['parent'](_0x5d955a, _0x16548b, _0x9d8727),
            this['anchoredX'] = this['anchoredPositionX'],
            this['anchoredY'] = this['anchoredPositionY'],
            this['curentResolution'] = ig['responsive']['halfWidth'] / ig['responsive']['halfHeight'];
        },
        'clicked': function() {
            this['isHolding'] = !0x0;
        },
        'released': function() {
            this['isHolding'] = !0x1,
            this['pointer'] = null,
            this['checkk'] = !0x0;
        },
        'update': function() {
            if (!this['isPause']) {
                this['parent'](),
                null == this['pointer'] && (this['pointer'] = ig['game']['getEntitiesByType'](EntityPointer)[0x0]),
                this['setScale'](this['coefficientScale'], this['coefficientScale']),
                this['scaleEffect'] = 0x1,
                this['updateCenter']();
                if (ig['input']['state']('click')) {
                    this['isClick'] = !0x0;
                    var _0x1302dd = ig['game']['getEntitiesByType'](EntityButtonPause)[0x0];
                    if (null != this['pointer']) {
                        if (this['pointer']['pos']['x'] > _0x1302dd['pos']['x'] && this['pointer']['pos']['y'] < _0x1302dd['pos']['y'] + _0x1302dd['size']['y'])
                            return;
                        if (this['checkk']) {
                            this['checkk'] = !0x1;
                            return;
                        }
                        this['anchoredPositionX'] = this['pointer']['pos']['x'] - 0.5 * ig['responsive']['width'] - this['size']['x'] / 0x2,
                        this['anchoredPositionY'] = this['pointer']['pos']['y'] - 0.5 * ig['responsive']['height'] - this['size']['y'] / 0x2,
                        this['anchoredX'] = this['anchoredPositionX'],
                        this['anchoredY'] = this['anchoredPositionY'];
                    }
                }
                this['spinToBall'](),
                this['checkLimit']();
            }
        },
        'checkLimit': function() {
            this['anchoredPositionY'] < this['minY'] && (this['anchoredPositionY'] = this['minY']);
        },
        'check': function() {
            !0x1 != this['ball']['turn'] && this['collisionArea']() && (ig['soundHandler']['sfxPlayer']['play']('touchPaddle'),
            this['forceOfPlayerToBall'](),
            this['ball']['turn'] = !0x1,
            this['allowEffect'] = this['ball']['touchPaddle'] = !0x0,
            this['ball']['isTouch'] = !0x1,
            this['ball']['isTouchToHit'] = !0x1,
            this['ball']['numberTouch'] = 0x0,
            this['startDrawEffect'] = Date['now'](),
            this['subGlobalAlpha'] = 0x0,
            this['posXEffect'] = this['ball']['pos']['x'],
            this['posYEffect'] = this['center']['y'],
            this['radiusEffect'] = 0xa);
        },
        'collisionArea': function() {
            return Math['sqrt']((this['ball']['center']['x'] - this['center']['x']) * (this['ball']['center']['x'] - this['center']['x']) + (this['ball']['center']['y'] - this['center']['y']) * (this['ball']['center']['y'] - this['center']['y'])) < this['size']['y'] / 0x2 ? (this['checkColision'] = !0x1,
            !0x0) : !0x1;
        },
        'draw': function() {
            this['parent'](),
            this['drawEffect']();
        },
        'forceOfPlayerToBall': function() {
            var _0x513142 = this['ball']['vel']['x']
              , _0x1659e8 = this['ball']['vel']['y']
              , _0x2a478b = 0x0
              , _0x1a636c = 0x0;
            null != this['pointer'] && (_0x2a478b = 0x3 * (this['pointer']['pos']['x'] - this['center']['x']),
            _0x1a636c = 0x5 * (this['pointer']['pos']['y'] - this['center']['y'])),
            this['ball']['vel']['x'] = _0x513142 + _0x2a478b,
            this['ball']['vel']['y'] = -_0x1659e8 + _0x1a636c;
            var _0x513142 = this['table']['pos']['x'] + this['table']['widthTable']
              , _0x1659e8 = this['table']['pos']['x']
              , _0x2a478b = this['table']['pos']['y'] + this['table']['heightTable'] / 0x2 - 0x64
              , _0x1a636c = 0.5
              , _0x56a8e2 = this['ball']['pos']['y'] + this['ball']['vel']['y'] * _0x1a636c
              , _0x8ba2a1 = Math['floor'](Math['random']() * (_0x2a478b - (this['table']['pos']['y'] + 0x64) + 0x1)) + (this['table']['pos']['y'] + 0x64);
            _0x8ba2a1 > _0x2a478b && (_0x8ba2a1 = _0x2a478b),
            _0x56a8e2 > _0x2a478b && (this['ball']['vel']['y'] -= (_0x56a8e2 - _0x8ba2a1) / _0x1a636c),
            this['ball']['pos']['x'] + this['ball']['vel']['x'] > _0x513142 ? this['ball']['vel']['x'] = _0x513142 - this['ball']['pos']['x'] : this['ball']['pos']['x'] + this['ball']['vel']['x'] < _0x1659e8 && (this['ball']['vel']['x'] = _0x1659e8 - this['ball']['pos']['x']),
            this['isHit'] = !0x1,
            this['ball']['pos']['y'] + this['ball']['vel']['y'] * _0x1a636c < this['table']['pos']['y'] + 0x28 && (_0x1a636c = 0x1 / 0x3,
            this['ball']['vel']['y'] = (this['table']['pos']['y'] + 0x28 - this['ball']['pos']['y']) / _0x1a636c,
            this['isHit'] = !0x0),
            this['ball']['deltaRadius'] = (this['ball']['maxRadius'] - this['ball']['minRadius'] + (this['ball']['maxRadius'] - this['ball']['radius'])) / (_0x1a636c / ig['system']['tick']),
            this['ball']['timeFly'] = _0x1a636c;
        },
        'spinToBall': function() {
            null != this['pointer'] && (0x0 > this['ball']['vel']['y'] ? (null == this['spinBall'] && 0xf < Math['abs'](this['pointer']['pos']['x'] - this['center']['x']) && (this['spinBall'] = 0x0 > this['pointer']['pos']['x'] - this['center']['x'] ? 'left' : 'right'),
            null != this['spinBall'] && (this['ball']['vel']['x'] = 'left' == this['spinBall'] ? this['ball']['vel']['x'] - 0xa : this['ball']['vel']['x'] + 0xa,
            this['isSpin'] = !0x0)) : (this['spinBall'] = null,
            this['isSpin'] = !0x1));
        },
        'drawEffect': function() {
            if (!(0x64 < Date['now']() - this['startDrawEffect'])) {
                var _0x4536ae = ig['system']['context'];
                _0x4536ae['globalAlpha'] -= this['subGlobalAlpha'],
                this['subGlobalAlpha'] += (0x1 - this['subGlobalAlpha']) / (0.1 / ig['system']['tick']),
                this['radiusEffect'] += 0x3,
                _0x4536ae['beginPath'](),
                _0x4536ae['lineWidth'] = '1',
                _0x4536ae['moveTo'](this['posXEffect'], this['posYEffect'] - this['radiusEffect'] - this['size']['y'] / 0x2),
                _0x4536ae['lineTo'](this['posXEffect'] - 0x5 * this['scaleEffect'], this['posYEffect'] - this['radiusEffect'] - this['size']['y'] / 0x2 - 0xf * this['scaleEffect']),
                _0x4536ae['lineTo'](this['posXEffect'] + 0x5 * this['scaleEffect'], this['posYEffect'] - this['radiusEffect'] - this['size']['y'] / 0x2 - 0xf * this['scaleEffect']),
                _0x4536ae['moveTo'](this['posXEffect'] - this['radiusEffect'] - 0x5 * this['scaleEffect'], this['posYEffect'] - this['radiusEffect'] - this['size']['y'] / 0x2 + 0x5 * this['scaleEffect']),
                _0x4536ae['lineTo'](this['posXEffect'] - this['radiusEffect'] - 0x14 * this['scaleEffect'], this['posYEffect'] - this['radiusEffect'] - this['size']['y'] / 0x2 - 0x14 * this['scaleEffect']),
                _0x4536ae['lineTo'](this['posXEffect'] - this['radiusEffect'] - 0x1e * this['scaleEffect'], this['posYEffect'] - this['radiusEffect'] - this['size']['y'] / 0x2 - 0xf * this['scaleEffect']),
                _0x4536ae['moveTo'](this['posXEffect'] + this['radiusEffect'] + 0x5 * this['scaleEffect'], this['posYEffect'] - this['radiusEffect'] - this['size']['y'] / 0x2 + 0x5 * this['scaleEffect']),
                _0x4536ae['lineTo'](this['posXEffect'] + this['radiusEffect'] + 0xa * this['scaleEffect'], this['posYEffect'] - this['radiusEffect'] - this['size']['y'] / 0x2 - 0x14 * this['scaleEffect']),
                _0x4536ae['lineTo'](this['posXEffect'] + this['radiusEffect'] + 0x14 * this['scaleEffect'], this['posYEffect'] - this['radiusEffect'] - this['size']['y'] / 0x2 - 0xf * this['scaleEffect']),
                _0x4536ae['fillStyle'] = '#000000',
                _0x4536ae['fill'](),
                _0x4536ae['stroke'](),
                _0x4536ae['globalAlpha'] = 0x1,
                this['allowEffect'] = !0x1,
                _0x4536ae['fillStyle'] = '#ffffff';
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.as.shadow')['requires']('impact.entity', 'game.entities.as.ball', 'game.entities.as.table', 'game.entities.as.effect-ball')['defines'](function() {
    EntityShadow = ig['Entity']['extend']({
        'radius': 0xa,
        'minRadius': 0x0,
        'ball': null,
        'coefficientParabol': 0x0,
        'sub': 0x0,
        'add': 0x0,
        'highX': 0x5,
        'coefficientScale': 0x1f4,
        'table': null,
        'init': function(_0x5a9d82, _0x4b1c07, _0x3e33e8) {
            this['parent'](_0x5a9d82, _0x4b1c07, _0x3e33e8),
            this['coefficientScale'] = 0x4b0;
        },
        'update': function() {
            this['parent'](),
            null == this['ball'] && (this['ball'] = ig['game']['getEntitiesByType'](EntityBall)[0x0]),
            null == this['table'] && (this['table'] = ig['game']['getEntitiesByType'](EntityTable)[0x0]);
            if (null != this['ball']) {
                !0x1 == this['ball']['isMove'] && !0x1 == this['ball']['isInTable'] && (this['highX'] = 0x5);
                if (!0x0 == this['ball']['touchPaddle'] || !0x1 == this['ball']['isMove'])
                    this['coefficientParabol'] = 0x0;
                !0x1 == this['ball']['isMove'] && (this['sub'] = this['ball']['pos']['y']);
            }
        },
        'draw': function() {
            this['parent']();
            var _0x5cfd1a = ig['system']['context'];
            if (null != this['table']) {
                null != this['ball'] && (this['radius'] = 0x1 / Math['abs'](this['highX']) * this['coefficientScale'],
                this['radius'] > this['ball']['minRadius'] && (this['radius'] = this['ball']['minRadius']));
                if (null != this['ball']) {
                    if (0x0 == this['coefficientParabol']) {
                        this['coefficientParabol'] = this['ball']['timeFly'] * this['ball']['vel']['y'],
                        this['coefficientParabol'] = Math['abs'](this['coefficientParabol']);
                        var _0x2ffb89 = this['highX'] * this['coefficientParabol'] / (this['highX'] - this['coefficientParabol']);
                        !0x0 == this['ball']['turn'] ? this['add'] = -Math['abs'](_0x2ffb89) : !0x1 == this['ball']['turn'] && (this['add'] = Math['abs'](_0x2ffb89)),
                        this['sub'] = this['ball']['pos']['y'] + this['add'],
                        this['coefficientParabol'] += Math['abs'](this['add']);
                    }
                    _0x5cfd1a['beginPath'](),
                    _0x2ffb89 = this['ball']['pos']['y'],
                    _0x2ffb89 -= this['sub'],
                    _0x2ffb89 = Math['abs'](_0x2ffb89),
                    0x0 != this['coefficientParabol'] && (this['highX'] = -(0x1 / this['coefficientParabol']) * _0x2ffb89 * _0x2ffb89 + _0x2ffb89,
                    0x0 >= this['highX'] && (this['sub'] = this['ball']['pos']['y'],
                    !0x0 == this['ball']['isMove'] && (this['ball']['isInTable'] && !this['ball']['touchPaddle'] && ig['game']['spawnEntity'](EntityEffectBall, this['ball']['pos']['x'], this['ball']['pos']['y'], {
                        'radius': this['ball']['radius'],
                        'timeStart': Date['now'](),
                        'scaleEffect': this['ball']['scaleEffect']
                    }),
                    this['ball']['isTouch'] = !0x0,
                    this['ball']['isTouchToHit'] = !0x0,
                    this['ball']['numberTouch'] += 0x1,
                    ig['soundHandler']['sfxPlayer']['play']('touchTable')))),
                    _0x5cfd1a['lineWidth'] = 0.1,
                    _0x5cfd1a['globalAlpha'] = 0.3,
                    _0x5cfd1a['strokeStyle'] = '#000000',
                    _0x5cfd1a['arc'](this['ball']['pos']['x'] + this['highX'] + this['ball']['size']['x'] / 0x2, this['ball']['pos']['y'] + 0x5, this['radius'], 0x0, 0x2 * Math['PI'], !0x1),
                    _0x5cfd1a['fillStyle'] = '#000000',
                    _0x5cfd1a['fill'](),
                    _0x5cfd1a['stroke'](),
                    _0x5cfd1a['globalAlpha'] = 0x1;
                }
                var _0x2ffb89 = this['table']['pos']['x']
                  , _0x4fd09c = this['table']['pos']['y']
                  , _0x1a6b06 = this['table']['widthTable']
                  , _0x1e47a3 = this['table']['heightTable']
                  , _0x421049 = this['table']['lineWidthRetangle'];
                _0x5cfd1a['beginPath'](),
                _0x5cfd1a['rect'](_0x2ffb89 + _0x1a6b06 + _0x421049 / 0x2, 0x0, ig['system']['width'], ig['system']['height']),
                _0x5cfd1a['rect'](0x0, 0x0, _0x2ffb89 - _0x421049 / 0x2, ig['system']['height']),
                _0x5cfd1a['rect'](0x0, 0x0, ig['system']['width'], _0x4fd09c - _0x421049 / 0x2),
                _0x5cfd1a['rect'](0x0, _0x4fd09c + _0x1e47a3 + _0x421049 / 0x2, ig['system']['width'], ig['system']['height']),
                _0x5cfd1a['fillStyle'] = '#f5ce4c',
                _0x5cfd1a['fill'](),
                _0x5cfd1a['closePath']();
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.ball-trail')['requires']('impact.entity', 'game.entities.as.ball')['defines'](function() {
    GameTrailNode = ig['Class']['extend']({
        'x': 0x0,
        'y': 0x0,
        'time': 0x0,
        'remainder': 0x0,
        'prev': null,
        'next': null,
        'l': 0x0,
        'w': 0x1,
        'dx': 0x0,
        'dy': 0x0,
        'adx': 0x0,
        'ady': 0x0,
        'ndx': 0x0,
        'ndy': 0x0,
        'init': function(_0x5323cd, _0x559f9c, _0x4b1072, _0x4fabab) {
            this['x'] = _0x5323cd,
            this['y'] = _0x559f9c,
            this['time'] = _0x4b1072,
            this['remainder'] = _0x4fabab;
        },
        'setNext': function(_0x9c5c2a) {
            this['next'] = _0x9c5c2a,
            _0x9c5c2a = this['next']['x'] - this['x'];
            var _0x2d840d = this['next']['y'] - this['y']
              , _0x4c40dc = Math['sqrt'](_0x9c5c2a * _0x9c5c2a + _0x2d840d * _0x2d840d);
            this['l'] = _0x4c40dc,
            this['next']['l'] = _0x4c40dc,
            this['next']['dx'] = _0x9c5c2a / _0x4c40dc,
            this['next']['dy'] = _0x2d840d / _0x4c40dc,
            this['next']['ndx'] = -this['next']['dy'],
            this['next']['ndy'] = this['next']['dx'],
            this['prev'] ? (this['adx'] = (this['dx'] + this['next']['dx']) / 0x2,
            this['ady'] = (this['dy'] + this['next']['dy']) / 0x2,
            this['ndx'] = -this['ady'],
            this['ndy'] = this['adx']) : (this['adx'] = this['next']['dx'],
            this['ady'] = this['next']['dy'],
            this['ndx'] = -this['ady'],
            this['ndy'] = this['adx'],
            this['dx'] = this['next']['dx'],
            this['dy'] = this['next']['dy']);
        },
        'setPrev': function(_0x2e0ad5) {
            this['prev'] = _0x2e0ad5;
        }
    }),
    EntityBallTrail = ig['Entity']['extend']({
        'zIndex': 0x7d0,
        'nodeList': [],
        'lineList': [],
        'pollInterval': 0.01,
        'pollMaxDuration': 0.15,
        'maxPollInterval': 0.1,
        'nodeMinDistance': 0x10,
        'chains': [],
        'enabled': !0x1,
        'ball': null,
        'anchoredX': 0x0,
        'anchoredY': 0x0,
        'curentResolution': 0x0,
        'justedResolution': !0x1,
        'init': function(_0x101981, _0x2af576, _0x5ec06a) {
            this['parent'](_0x101981, _0x2af576, _0x5ec06a),
            this['ball'] = ig['game']['getEntitiesByType'](EntityBall)[0x0],
            this['curentResolution'] = ig['responsive']['halfWidth'] / ig['responsive']['halfHeight'];
        },
        'draw': function() {
            var _0x6be84d = ig['system']['context'];
            _0x6be84d['save']();
            for (var _0x4cbc70 = 0x0; _0x4cbc70 < this['lineList']['length']; _0x4cbc70++)
                this['drawLineFromNodeList'](this['lineList'][_0x4cbc70]);
            this['justedResolution'] = !0x1;
            if (ig['responsive']['halfWidth'] / ig['responsive']['halfHeight'] != this['curentResolution']) {
                if (null != this['ball']) {
                    this['anchoredX'] = this['ball']['pos']['x'] - this['nodeList'][this['nodeList']['length'] - 0x1]['x'],
                    this['anchoredY'] = this['ball']['pos']['y'] - this['nodeList'][this['nodeList']['length'] - 0x1]['y'];
                    for (_0x4cbc70 = 0x0; _0x4cbc70 < this['nodeList']['length']; _0x4cbc70++)
                        this['nodeList'][_0x4cbc70]['x'] = this['anchoredX'] + this['nodeList'][_0x4cbc70]['x'],
                        this['nodeList'][_0x4cbc70]['y'] = this['anchoredY'] + this['nodeList'][_0x4cbc70]['y'];
                }
                this['justedResolution'] = !0x0,
                this['curentResolution'] = ig['responsive']['halfWidth'] / ig['responsive']['halfHeight'];
            }
            this['drawLineFromNodeList'](this['nodeList']),
            _0x6be84d['restore']();
        },
        'update': function() {
            for (var _0x2f21eb = ig['system']['clock']['delta'](), _0x3c1ebe = _0x2f21eb % this['pollInterval']; 0x0 < this['nodeList']['length']; ) {
                var _0x110619 = this['nodeList'][0x0];
                if (_0x2f21eb - _0x3c1ebe - (_0x110619['time'] - _0x110619['remainder']) >= this['pollMaxDuration'])
                    this['nodeList']['splice'](0x0, 0x1),
                    0x0 < this['nodeList']['length'] && this['nodeList'][0x0]['setPrev'](null);
                else
                    break;
            }
            for (var _0x50228c = 0x0; _0x50228c < this['lineList']['length']; ) {
                for (var _0x28923c = this['lineList'][_0x50228c]; 0x0 < _0x28923c['length']; )
                    if (_0x110619 = _0x28923c[0x0],
                    _0x2f21eb - _0x3c1ebe - (_0x110619['time'] - _0x110619['remainder']) >= this['pollMaxDuration'])
                        _0x28923c['splice'](0x0, 0x1),
                        0x0 < _0x28923c['length'] && _0x28923c[0x0]['setPrev'](null);
                    else
                        break;
                0x0 == _0x28923c['length'] ? this['lineList']['splice'](0x0, 0x1) : _0x50228c++;
            }
            if (!(0x0 < this['nodeList']['length'] && (_0x50228c = this['nodeList'][this['nodeList']['length'] - 0x1],
            _0x2f21eb - (_0x50228c['time'] - _0x50228c['remainder']) < this['pollInterval']))) {
                if (null != this['ball'] && (_0x50228c = this['ball']['center'],
                _0x110619 = _0x50228c['x'],
                _0x28923c = _0x50228c['y'],
                !this['justedResolution'])) {
                    if (0x0 < this['nodeList']['length']) {
                        var _0x50228c = this['nodeList'][this['nodeList']['length'] - 0x1]
                          , _0x40b083 = _0x110619 - _0x50228c['x']
                          , _0x50228c = _0x28923c - _0x50228c['y'];
                        if (_0x40b083 * _0x40b083 + _0x50228c * _0x50228c < this['nodeMinDistance'])
                            return;
                    }
                    _0x2f21eb = new GameTrailNode(_0x110619,_0x28923c,_0x2f21eb,_0x3c1ebe),
                    0x0 < this['nodeList']['length'] && (_0x50228c = this['nodeList'][this['nodeList']['length'] - 0x1],
                    _0x50228c['setNext'](_0x2f21eb),
                    _0x2f21eb['setPrev'](_0x50228c)),
                    this['nodeList']['push'](_0x2f21eb);
                }
            }
        },
        'drawLineFromNodeList': function(_0x51bc10) {
            if (_0x51bc10 && !(0x1 >= _0x51bc10['length'])) {
                var _0x588599 = ig['system']['context'];
                _0x588599['save'](),
                _0x588599['lineWidth'] = 0x2,
                _0x588599['strokeStyle'] = 'rgba(255,255,255,0.5)';
                if (null != this['ball']) {
                    for (var _0x6d3b1f = this['ball']['radius'], _0x5d82c0 = 0x0; _0x5d82c0 < _0x51bc10['length']; _0x5d82c0++) {
                        var _0x5f4b0a = _0x51bc10[_0x5d82c0]
                          , _0x21163f = ig['system']['clock']['delta']() - _0x5f4b0a['time']
                          , _0x21163f = _0x21163f / this['pollMaxDuration'];
                        0x1 < _0x21163f && (_0x21163f = 0x1),
                        _0x21163f = 0x1 - _0x21163f,
                        _0x5f4b0a['t'] = _0x21163f,
                        _0x5f4b0a['w'] = _0x6d3b1f * _0x21163f;
                    }
                    _0x588599['beginPath'](),
                    _0x5f4b0a = _0x51bc10[0x0],
                    _0x21163f = _0x5f4b0a['x'] - _0x5f4b0a['dx'] * _0x5f4b0a['w'],
                    _0x5f4b0a = _0x5f4b0a['y'] - _0x5f4b0a['dy'] * _0x5f4b0a['w'],
                    _0x588599['moveTo'](_0x21163f, _0x5f4b0a);
                    for (_0x5d82c0 = 0x0; _0x5d82c0 < _0x51bc10['length'] - 0x1; _0x5d82c0++)
                        _0x5f4b0a = _0x51bc10[_0x5d82c0],
                        _0x21163f = _0x5f4b0a['x'] + _0x5f4b0a['ndx'] * _0x5f4b0a['w'],
                        _0x5f4b0a = _0x5f4b0a['y'] + _0x5f4b0a['ndy'] * _0x5f4b0a['w'],
                        _0x588599['lineTo'](_0x21163f, _0x5f4b0a);
                    _0x5f4b0a = _0x51bc10[_0x51bc10['length'] - 0x1],
                    _0x6d3b1f > _0x5f4b0a['l'] && (_0x6d3b1f = _0x5f4b0a['l']),
                    _0x21163f = _0x5f4b0a['x'] + _0x5f4b0a['ndx'] * _0x5f4b0a['w'] + _0x5f4b0a['dx'] * _0x6d3b1f,
                    _0x5f4b0a = _0x5f4b0a['y'] + _0x5f4b0a['ndy'] * _0x5f4b0a['w'] + _0x5f4b0a['dy'] * _0x6d3b1f,
                    _0x588599['lineTo'](_0x21163f, _0x5f4b0a),
                    _0x5f4b0a = _0x51bc10[_0x51bc10['length'] - 0x1],
                    _0x21163f = _0x5f4b0a['x'] + _0x5f4b0a['dx'] * _0x5f4b0a['w'],
                    _0x5f4b0a = _0x5f4b0a['y'] + _0x5f4b0a['dy'] * _0x5f4b0a['w'],
                    _0x588599['lineTo'](_0x21163f, _0x5f4b0a),
                    _0x5f4b0a = _0x51bc10[_0x51bc10['length'] - 0x1],
                    _0x21163f = _0x5f4b0a['x'] - _0x5f4b0a['ndx'] * _0x5f4b0a['w'] + _0x5f4b0a['dx'] * _0x6d3b1f,
                    _0x5f4b0a = _0x5f4b0a['y'] - _0x5f4b0a['ndy'] * _0x5f4b0a['w'] + _0x5f4b0a['dy'] * _0x6d3b1f,
                    _0x588599['lineTo'](_0x21163f, _0x5f4b0a);
                    for (_0x5d82c0 = _0x51bc10['length'] - 0x2; 0x0 <= _0x5d82c0; _0x5d82c0--)
                        _0x5f4b0a = _0x51bc10[_0x5d82c0],
                        _0x21163f = _0x5f4b0a['x'] - _0x5f4b0a['ndx'] * _0x5f4b0a['w'],
                        _0x5f4b0a = _0x5f4b0a['y'] - _0x5f4b0a['ndy'] * _0x5f4b0a['w'],
                        _0x588599['lineTo'](_0x21163f, _0x5f4b0a);
                    _0x588599['closePath'](),
                    _0x588599['fillStyle'] = 'rgba(255,255,255,0.75)',
                    _0x588599['fill']();
                    if (null != this['ball']) {
                        _0x6d3b1f = this['ball']['radius'] - 0x5;
                        for (_0x5d82c0 = 0x0; _0x5d82c0 < _0x51bc10['length']; _0x5d82c0++)
                            _0x5f4b0a = _0x51bc10[_0x5d82c0],
                            _0x21163f = ig['system']['clock']['delta']() - _0x5f4b0a['time'],
                            _0x21163f /= this['pollMaxDuration'],
                            0x1 < _0x21163f && (_0x21163f = 0x1),
                            _0x21163f -= 0x1,
                            _0x5f4b0a['t'] = _0x21163f,
                            _0x5f4b0a['w'] = _0x6d3b1f * _0x21163f * _0x21163f;
                        _0x588599['beginPath'](),
                        _0x5f4b0a = _0x51bc10[0x0],
                        _0x21163f = _0x5f4b0a['x'] - _0x5f4b0a['dx'] * _0x5f4b0a['w'],
                        _0x5f4b0a = _0x5f4b0a['y'] - _0x5f4b0a['dy'] * _0x5f4b0a['w'],
                        _0x588599['moveTo'](_0x21163f, _0x5f4b0a);
                        for (_0x5d82c0 = 0x0; _0x5d82c0 < _0x51bc10['length'] - 0x1; _0x5d82c0++)
                            _0x5f4b0a = _0x51bc10[_0x5d82c0],
                            _0x21163f = _0x5f4b0a['x'] + _0x5f4b0a['ndx'] * _0x5f4b0a['w'],
                            _0x5f4b0a = _0x5f4b0a['y'] + _0x5f4b0a['ndy'] * _0x5f4b0a['w'],
                            _0x588599['lineTo'](_0x21163f, _0x5f4b0a);
                        _0x5f4b0a = _0x51bc10[_0x51bc10['length'] - 0x1],
                        _0x6d3b1f > _0x5f4b0a['l'] && (_0x6d3b1f = _0x5f4b0a['l']),
                        _0x21163f = _0x5f4b0a['x'] + _0x5f4b0a['ndx'] * _0x5f4b0a['w'] + _0x5f4b0a['dx'] * _0x6d3b1f,
                        _0x5f4b0a = _0x5f4b0a['y'] + _0x5f4b0a['ndy'] * _0x5f4b0a['w'] + _0x5f4b0a['dy'] * _0x6d3b1f,
                        _0x588599['lineTo'](_0x21163f, _0x5f4b0a),
                        _0x5f4b0a = _0x51bc10[_0x51bc10['length'] - 0x1],
                        _0x21163f = _0x5f4b0a['x'] + 0x0 * _0x5f4b0a['dx'],
                        _0x5f4b0a = _0x5f4b0a['y'] + 0x0 * _0x5f4b0a['dy'],
                        _0x588599['lineTo'](_0x21163f, _0x5f4b0a),
                        _0x5f4b0a = _0x51bc10[_0x51bc10['length'] - 0x1],
                        _0x21163f = _0x5f4b0a['x'] - _0x5f4b0a['ndx'] * _0x5f4b0a['w'] + _0x5f4b0a['dx'] * _0x6d3b1f,
                        _0x5f4b0a = _0x5f4b0a['y'] - _0x5f4b0a['ndy'] * _0x5f4b0a['w'] + _0x5f4b0a['dy'] * _0x6d3b1f,
                        _0x588599['lineTo'](_0x21163f, _0x5f4b0a);
                        for (_0x5d82c0 = _0x51bc10['length'] - 0x2; 0x0 <= _0x5d82c0; _0x5d82c0--)
                            _0x5f4b0a = _0x51bc10[_0x5d82c0],
                            _0x21163f = _0x5f4b0a['x'] - _0x5f4b0a['ndx'] * _0x5f4b0a['w'],
                            _0x5f4b0a = _0x5f4b0a['y'] - _0x5f4b0a['ndy'] * _0x5f4b0a['w'],
                            _0x588599['lineTo'](_0x21163f, _0x5f4b0a);
                        _0x588599['closePath'](),
                        _0x588599['fillStyle'] = 'rgb(255,255,255)',
                        _0x588599['fill'](),
                        _0x588599['restore']();
                    }
                }
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.buttons.button-resume')['requires']('game.entities.buttons.button')['defines'](function() {
    EntityButtonResume = EntityButton['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/buttons/resume-button.png',0x3c,0x3c),
        'size': {
            'x': 0x3c,
            'y': 0x3c
        },
        'init': function(_0x2f4b38, _0x23614c, _0x1b876a) {
            this['parent'](_0x2f4b38, _0x23614c, _0x1b876a),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'draw': function() {
            this['parent']();
        },
        'clicked': function() {
            this['parent'](this['release']['bind'](this));
        },
        'clicking': function() {},
        'released': function() {},
        'release': function() {
            if (this['isEnabled']) {
                try {
                    console['log']('Start'),
                    ig['poki']['startGameplay']();
                } catch (_0x3ecf5e) {}
                ig['input']['actions'] = {},
                ig['soundHandler']['sfxPlayer']['play']('clickButton'),
                ig['game']['gameController'] && ig['game']['gameController']['hidePausePanel']();
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.text.paused')['requires']('impact.entity')['defines'](function() {
    EntityTextPaused = ig['Entity']['extend']({
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/text/paused.png',0xc8,0x3d),
        'size': {
            'x': 0xc8,
            'y': 0x3d
        },
        'init': function(_0x9b2ec3, _0x1b5dc1, _0x3e2593) {
            this['parent'](_0x9b2ec3, _0x1b5dc1, _0x3e2593),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'update': function() {
            this['parent']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.controllers.pause-controller')['requires']('impact.entity', 'game.entities.controllers.popup-controller', 'game.entities.buttons.button-resume', 'game.entities.buttons.button-home', 'game.entities.bg.panel', 'game.entities.ui.icon-sound', 'game.entities.text', 'game.entities.ui.slider-knot', 'game.entities.ui.slider-frame', 'game.entities.bg.shadow-bg', 'game.entities.text.paused')['defines'](function() {
    EntityPauseController = EntityPopupController['extend']({
        'checkAgainst': ig['Entity']['TYPE']['NONE'],
        'currentMode': null,
        'currentOnPortraitMode': null,
        'init': function(_0x52c9f9, _0x2f5efb, _0x2ba4f8) {
            this['parent'](_0x52c9f9, _0x2f5efb, _0x2ba4f8),
            this['spawnEntity'](EntityShadowBg, 0x0, 0x0, {}),
            this['panel'] = this['spawnEntity'](EntityPanel, -0x1f4, ig['system']['height'] / 0x2, {}),
            this['soundIcon'] = this['spawnEntity'](EntityIconSound, -0x1f4, ig['system']['height'] / 0x2, {}),
            this['homeBtn'] = this['spawnEntity'](EntityButtonHome, -0x1f4, ig['system']['height'] / 0x2, {}),
            this['resumeBtn'] = this['spawnEntity'](EntityButtonResume, -0x1f4, ig['system']['height'] / 0x2, {}),
            this['title'] = this['spawnEntity'](EntityTextPaused, -0x1f4, ig['system']['height'] / 0x2, {}),
            this['soundFrame'] = this['spawnEntity'](EntitySliderFrame, -0x1f4, ig['system']['height'] / 0x2, {}),
            this['soundKnot'] = this['spawnEntity'](EntitySliderKnot, -0x1f4, ig['system']['height'] / 0x14, {
                'minX': -0x28,
                'maxX': 0x64,
                'changeCallback': this['changeSound']['bind'](this),
                'sliderBar': null
            }),
            _0x52c9f9 = ig['game']['getSoundVolume'](),
            ig['soundHandler']['sfxPlayer']['volume'](_0x52c9f9),
            this['soundKnot']['anchoredPositionX'] = this['soundKnot']['minX'] + (this['soundKnot']['maxX'] - this['soundKnot']['minX']) * _0x52c9f9,
            ig['system']['width'] > ig['system']['height'] ? (this['panel']['setScale'](0x2, 0x2),
            this['soundIcon']['setScale'](0x2, 0x2),
            this['homeBtn']['setScale'](0x2, 0x2),
            this['resumeBtn']['setScale'](0x2, 0x2),
            this['soundFrame']['setScale'](0x2, 0x2),
            this['title']['setScale'](1.1, 1.1),
            this['soundKnot']['setScale'](0x2, 0x2),
            this['panel']['setAnchoredPosition'](0.5 * -this['panel']['size']['x'] - 0x1f4, 0.5 * -this['panel']['size']['y'], 'center-middle'),
            this['title']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - this['title']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + 0.8 * this['title']['size']['y'], 'center-middle'),
            this['homeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.3 * this['panel']['size']['x'] - this['homeBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
            this['resumeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.7 * this['panel']['size']['x'] - this['resumeBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
            this['soundIcon']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + 0x5a, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['homeBtn']['anchoredPositionY']) / 0x2 - this['soundIcon']['size']['y'] / 0x2, 'center-middle'),
            this['soundFrame']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + this['soundIcon']['size']['x'] + 0x96, this['soundIcon']['anchoredPositionY'] + this['soundIcon']['size']['y'] / 0x2 - 0x5, 'center-middle'),
            this['soundKnot']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 + this['soundKnot']['anchoredPositionX'], this['soundFrame']['anchoredPositionY'] - this['soundKnot']['size']['y'] / 0x2 + this['soundFrame']['size']['y'] / 0x2, 'center-middle')) : (this['panel']['setScale'](1.5, 1.5),
            this['soundIcon']['setScale'](1.5, 1.5),
            this['homeBtn']['setScale'](1.5, 1.5),
            this['resumeBtn']['setScale'](1.5, 1.5),
            this['soundFrame']['setScale'](1.5, 1.5),
            this['title']['setScale'](1.1, 1.1),
            this['soundKnot']['setScale'](0x2, 0x2),
            this['panel']['setAnchoredPosition'](0.5 * -this['panel']['size']['x'] - 0x1f4, 0.5 * -this['panel']['size']['y'], 'center-middle'),
            this['title']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - this['title']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + 0.8 * this['title']['size']['y'], 'center-middle'),
            this['homeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.3 * this['panel']['size']['x'] - this['homeBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
            this['resumeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.7 * this['panel']['size']['x'] - this['resumeBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
            this['soundIcon']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + 0x46, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['homeBtn']['anchoredPositionY']) / 0x2 - this['soundIcon']['size']['y'] / 0x2, 'center-middle'),
            this['soundFrame']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + this['soundIcon']['size']['x'] + 0x78, this['soundIcon']['anchoredPositionY'] + this['soundIcon']['size']['y'] / 0x2 - 0x5, 'center-middle'),
            this['soundKnot']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 + 0x64, this['soundFrame']['anchoredPositionY'] - this['soundKnot']['size']['y'] / 0x2 + this['soundFrame']['size']['y'] / 0x2, 'center-middle')),
            this['soundKnot']['minX'] = this['soundFrame']['anchoredPositionX'],
            this['soundKnot']['maxX'] = this['soundKnot']['minX'] + this['soundFrame']['size']['x'] - this['soundKnot']['size']['x'] / 0x2,
            _0x52c9f9 = ig['game']['getSoundVolume'](),
            this['soundKnot']['anchoredPositionX'] = this['soundKnot']['minX'] + (this['soundKnot']['maxX'] - this['soundKnot']['minX']) * _0x52c9f9,
            this['soundKnot']['minX'] = this['soundFrame']['anchoredPositionX'],
            this['soundKnot']['maxX'] = this['soundKnot']['minX'] + this['soundFrame']['size']['x'] - this['soundKnot']['size']['x'] / 0x2,
            this['currentOnPortraitMode'] = this['currentMode'] = 'a';
        },
        'changeMusic': function(_0x472780) {
            ig['soundHandler']['bgmPlayer']['volume'](_0x472780),
            ig['game']['setMusicVolume'](_0x472780);
        },
        'changeSound': function(_0x210d7e) {
            ig['soundHandler']['sfxPlayer']['volume'](_0x210d7e),
            ig['game']['setSoundVolume'](_0x210d7e);
        },
        'update': function() {
            this['parent']();
            if (ig['ua']['mobile']) {
                if (ig['system']['width'] > ig['system']['height'] && (null == this['currentMode'] || 'vertical' == this['currentMode'])) {
                    this['panel']['setScale'](0x2, 0x2),
                    this['soundIcon']['setScale'](0x2, 0x2),
                    this['homeBtn']['setScale'](0x2, 0x2),
                    this['resumeBtn']['setScale'](0x2, 0x2),
                    this['soundFrame']['setScale'](0x2, 0x2),
                    this['title']['setScale'](1.1, 1.1),
                    this['soundKnot']['setScale'](0x2, 0x2),
                    this['panel']['setAnchoredPosition'](0.5 * -this['panel']['size']['x'], 0.5 * -this['panel']['size']['y'], 'center-middle'),
                    this['title']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - this['title']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + 0.8 * this['title']['size']['y'], 'center-middle'),
                    this['homeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.3 * this['panel']['size']['x'] - this['homeBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
                    this['resumeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.7 * this['panel']['size']['x'] - this['resumeBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
                    this['soundIcon']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + 0x5a, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['homeBtn']['anchoredPositionY']) / 0x2 - this['soundIcon']['size']['y'] / 0x2, 'center-middle'),
                    this['soundFrame']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + this['soundIcon']['size']['x'] + 0x96, this['soundIcon']['anchoredPositionY'] + this['soundIcon']['size']['y'] / 0x2 - 0x5, 'center-middle'),
                    this['soundKnot']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 + this['soundKnot']['anchoredPositionX'], this['soundFrame']['anchoredPositionY'] - this['soundKnot']['size']['y'] / 0x2 + this['soundFrame']['size']['y'] / 0x2, 'center-middle'),
                    this['soundKnot']['minX'] = this['soundFrame']['anchoredPositionX'],
                    this['soundKnot']['maxX'] = this['soundKnot']['minX'] + this['soundFrame']['size']['x'] - this['soundKnot']['size']['x'] / 0x2;
                    var _0x21f955 = ig['game']['getSoundVolume']();
                    this['soundKnot']['anchoredPositionX'] = this['soundKnot']['minX'] + (this['soundKnot']['maxX'] - this['soundKnot']['minX']) * _0x21f955,
                    this['currentMode'] = 'horizontal';
                } else {
                    if (ig['system']['width'] < ig['system']['height'] && (null == this['currentMode'] || 'horizontal' == this['currentMode']))
                        this['panel']['setScale'](1.5, 1.5),
                        this['soundIcon']['setScale'](1.5, 1.5),
                        this['homeBtn']['setScale'](1.5, 1.5),
                        this['resumeBtn']['setScale'](1.5, 1.5),
                        this['soundFrame']['setScale'](1.5, 1.5),
                        this['title']['setScale'](1.1, 1.1),
                        this['soundKnot']['setScale'](0x2, 0x2),
                        this['panel']['setAnchoredPosition'](0.5 * -this['panel']['size']['x'], 0.5 * -this['panel']['size']['y'], 'center-middle'),
                        this['title']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - this['title']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + 0.8 * this['title']['size']['y'], 'center-middle'),
                        this['homeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.3 * this['panel']['size']['x'] - this['homeBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
                        this['resumeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.7 * this['panel']['size']['x'] - this['resumeBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
                        this['soundIcon']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + 0x46, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['homeBtn']['anchoredPositionY']) / 0x2 - this['soundIcon']['size']['y'] / 0x2, 'center-middle'),
                        this['soundFrame']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + this['soundIcon']['size']['x'] + 0x78, this['soundIcon']['anchoredPositionY'] + this['soundIcon']['size']['y'] / 0x2 - 0x5, 'center-middle'),
                        this['soundKnot']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 + 0x64, this['soundFrame']['anchoredPositionY'] - this['soundKnot']['size']['y'] / 0x2 + this['soundFrame']['size']['y'] / 0x2, 'center-middle'),
                        this['soundKnot']['minX'] = this['soundFrame']['anchoredPositionX'],
                        this['soundKnot']['maxX'] = this['soundKnot']['minX'] + this['soundFrame']['size']['x'] - this['soundKnot']['size']['x'] / 0x2,
                        _0x21f955 = ig['game']['getSoundVolume'](),
                        this['soundKnot']['anchoredPositionX'] = this['soundKnot']['minX'] + (this['soundKnot']['maxX'] - this['soundKnot']['minX']) * _0x21f955,
                        this['currentMode'] = 'vertical';
                }
            } else {
                if (ig['system']['width'] > ig['system']['height'] && (null == this['currentOnPortraitMode'] || 'vertical' == this['currentOnPortraitMode']))
                    this['panel']['setScale'](0x2, 0x2),
                    this['soundIcon']['setScale'](0x2, 0x2),
                    this['homeBtn']['setScale'](0x2, 0x2),
                    this['resumeBtn']['setScale'](0x2, 0x2),
                    this['soundFrame']['setScale'](0x2, 0x2),
                    this['title']['setScale'](1.1, 1.1),
                    this['soundKnot']['setScale'](0x2, 0x2),
                    this['panel']['setAnchoredPosition'](0.5 * -this['panel']['size']['x'], 0.5 * -this['panel']['size']['y'], 'center-middle'),
                    this['title']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - this['title']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + 0.8 * this['title']['size']['y'], 'center-middle'),
                    this['homeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.3 * this['panel']['size']['x'] - this['homeBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
                    this['resumeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.7 * this['panel']['size']['x'] - this['resumeBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
                    this['soundIcon']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + 0x5a, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['homeBtn']['anchoredPositionY']) / 0x2 - this['soundIcon']['size']['y'] / 0x2, 'center-middle'),
                    this['soundFrame']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + this['soundIcon']['size']['x'] + 0x96, this['soundIcon']['anchoredPositionY'] + this['soundIcon']['size']['y'] / 0x2 - 0x5, 'center-middle'),
                    this['soundKnot']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 + this['soundKnot']['anchoredPositionX'], this['soundFrame']['anchoredPositionY'] - this['soundKnot']['size']['y'] / 0x2 + this['soundFrame']['size']['y'] / 0x2, 'center-middle'),
                    this['soundKnot']['minX'] = this['soundFrame']['anchoredPositionX'],
                    this['soundKnot']['maxX'] = this['soundKnot']['minX'] + this['soundFrame']['size']['x'] - this['soundKnot']['size']['x'] / 0x2,
                    _0x21f955 = ig['game']['getSoundVolume'](),
                    this['soundKnot']['anchoredPositionX'] = this['soundKnot']['minX'] + (this['soundKnot']['maxX'] - this['soundKnot']['minX']) * _0x21f955,
                    this['currentOnPortraitMode'] = 'horizontal';
                else {
                    if (ig['system']['width'] < ig['system']['height'] && (null == this['currentOnPortraitMode'] || 'horizontal' == this['currentOnPortraitMode']))
                        this['panel']['setScale'](1.5, 1.5),
                        this['soundIcon']['setScale'](1.5, 1.5),
                        this['homeBtn']['setScale'](1.5, 1.5),
                        this['resumeBtn']['setScale'](1.5, 1.5),
                        this['soundFrame']['setScale'](1.5, 1.5),
                        this['title']['setScale'](1.1, 1.1),
                        this['soundKnot']['setScale'](0x2, 0x2),
                        this['panel']['setAnchoredPosition'](0.5 * -this['panel']['size']['x'], 0.5 * -this['panel']['size']['y'], 'center-middle'),
                        this['title']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - this['title']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + 0.8 * this['title']['size']['y'], 'center-middle'),
                        this['homeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.3 * this['panel']['size']['x'] - this['homeBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
                        this['resumeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.7 * this['panel']['size']['x'] - this['resumeBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
                        this['soundIcon']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + 0x46, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['homeBtn']['anchoredPositionY']) / 0x2 - this['soundIcon']['size']['y'] / 0x2, 'center-middle'),
                        this['soundFrame']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 - 0.5 * this['panel']['size']['x'] + this['soundIcon']['size']['x'] + 0x78, this['soundIcon']['anchoredPositionY'] + this['soundIcon']['size']['y'] / 0x2 - 0x5, 'center-middle'),
                        this['soundKnot']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + this['panel']['size']['x'] / 0x2 + 0x64, this['soundFrame']['anchoredPositionY'] - this['soundKnot']['size']['y'] / 0x2 + this['soundFrame']['size']['y'] / 0x2, 'center-middle'),
                        this['soundKnot']['minX'] = this['soundFrame']['anchoredPositionX'],
                        this['soundKnot']['maxX'] = this['soundKnot']['minX'] + this['soundFrame']['size']['x'] - this['soundKnot']['size']['x'] / 0x2,
                        _0x21f955 = ig['game']['getSoundVolume'](),
                        this['soundKnot']['anchoredPositionX'] = this['soundKnot']['minX'] + (this['soundKnot']['maxX'] - this['soundKnot']['minX']) * _0x21f955,
                        this['currentOnPortraitMode'] = 'vertical';
                }
            }
            this['soundKnot']['minX'] = this['soundFrame']['anchoredPositionX'],
            this['soundKnot']['maxX'] = this['soundKnot']['minX'] + this['soundFrame']['size']['x'] - this['soundKnot']['size']['x'] / 0x2;
        },
        'show': function() {
            ig['game']['spawnEntity'](EntityMoveTo, 0x0, 0x0, {
                'ent': [this['title'], this['panel'], this['homeBtn'], this['resumeBtn'], this['soundIcon'], this['soundFrame'], this['soundKnot']],
                'targetX': ig['system']['width'] / 0x2,
                'targetY': ig['system']['height'] / 0x2,
                'time': 0.1,
                'checkCompleteCallBack': this['checkMoveComplete']['bind'](this),
                'mode': 'horizoltal'
            });
        },
        'hide': function(_0x10b230) {
            this['funcCallBack'] = _0x10b230,
            this['isMoveComplete'] = !0x1,
            ig['game']['spawnEntity'](EntityMoveTo, 0x0, 0x0, {
                'ent': [this['title'], this['panel'], this['homeBtn'], this['resumeBtn'], this['soundIcon'], this['soundFrame'], this['soundKnot']],
                'targetX': 1.5 * ig['system']['width'],
                'targetY': 0.5 * ig['system']['height'],
                'time': 0.1,
                'checkCompleteCallBack': this['checkMoveComplete']['bind'](this),
                'mode': 'horizoltal'
            });
        },
        'checkMoveComplete': function() {
            this['currentOnPortraitMode'] = this['currentMode'] = null,
            this['funcCallBack'] && this['funcCallBack']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.buttons.button-replay')['requires']('game.entities.buttons.button')['defines'](function() {
    EntityButtonReplay = EntityButton['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/buttons/replay-button.png',0x3c,0x3c),
        'size': {
            'x': 0x3c,
            'y': 0x3c
        },
        'init': function(_0xf3f2d6, _0x235a66, _0x3427e8) {
            this['parent'](_0xf3f2d6, _0x235a66, _0x3427e8),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'draw': function() {
            this['parent']();
        },
        'clicked': function() {
            this['parent'](this['release']['bind'](this));
        },
        'clicking': function() {},
        'released': function() {},
        'release': function() {
            ig['input']['actions'] = {};
            if (this['isEnabled']) {
                try {
                    console['log']('Start'),
                    ig['poki']['startGameplay']();
                } catch (_0x5d2cb5) {}
                ig['soundHandler']['sfxPlayer']['play']('clickButton'),
                ig['game']['gameController'] && ig['game']['gameController']['replayGame']();
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.text.you-lost')['requires']('impact.entity')['defines'](function() {
    EntityYouLost = ig['Entity']['extend']({
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/text/you-lose.png',0xc9,0x2d),
        'size': {
            'x': 0xc9,
            'y': 0x2d
        },
        'init': function(_0x1151fa, _0x4987ac, _0x3c4ce2) {
            this['parent'](_0x1151fa, _0x4987ac, _0x3c4ce2),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'update': function() {
            this['parent']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.text.you-win')['requires']('impact.entity')['defines'](function() {
    EntityYouWin = ig['Entity']['extend']({
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/text/you-win.png',0xc8,0x31),
        'size': {
            'x': 0xc8,
            'y': 0x31
        },
        'init': function(_0x55218b, _0x572e0e, _0x368d03) {
            this['parent'](_0x55218b, _0x572e0e, _0x368d03),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'update': function() {
            this['parent']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.ui.icon-cpu')['requires']('impact.entity')['defines'](function() {
    EntityIconCpu = ig['Entity']['extend']({
        'checkAgainst': ig['Entity']['TYPE']['NONE'],
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/paddle-cpu.png',0x33,0x39),
        'size': new Vector2(0x33,0x39),
        'init': function(_0x9926f9, _0x3efa35, _0x348935) {
            this['parent'](_0x9926f9, _0x3efa35, _0x348935),
            this['addAnim']('idle', 0x1, [0x0]);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.ui.icon-player')['requires']('impact.entity')['defines'](function() {
    EntityIconPlayer = ig['Entity']['extend']({
        'checkAgainst': ig['Entity']['TYPE']['NONE'],
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/paddle.png',0x33,0x39),
        'size': new Vector2(0x33,0x39),
        'init': function(_0x33f5bc, _0x2b633b, _0x2578da) {
            this['parent'](_0x33f5bc, _0x2b633b, _0x2578da),
            this['addAnim']('idle', 0x1, [0x0]);
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.controllers.result-controller')['requires']('impact.entity', 'game.entities.controllers.popup-controller', 'game.entities.buttons.button-home', 'game.entities.text', 'game.entities.buttons.button-replay', 'game.entities.bg.shadow-bg', 'game.entities.text.you-lost', 'game.entities.text.you-win', 'game.entities.move.moveTo', 'game.entities.ui.icon-cpu', 'game.entities.ui.icon-player')['defines'](function() {
    EntityResultController = EntityPopupController['extend']({
        'win': !0x1,
        'title': null,
        'scCpu': 0x0,
        'scPlayer': 0x0,
        'zIndex': 0xc350,
        'currentMode': null,
        'mode': 'landscape',
        'init': function(_0x9138ae, _0x252f07, _0x450b15) {
            this['parent'](_0x9138ae, _0x252f07, _0x450b15);
            try {
                console['log']('STOP'),
                ig['poki']['stopGameplay']();
            } catch (_0x12958f) {}
            try {
                console['log']('Show\x20AD'),
                ig['poki']['showAd']();
            } catch (_0x356f0b) {}
            if (this['win'] && !ig['game']['isFirstTimeWin']) {
                ig['game']['isFirstTimeWin'] = !0x0,
                console['log']('HAPPY');
                try {
                    ig['poki']['happyTime'](0.5);
                } catch (_0x2ed74f) {}
            }
            ig['game']['resultController'] = this,
            colorChange = '#e8823d',
            this['spawnEntity'](EntityShadowBg, 0x0, 0x0, {}),
            this['panel'] = this['spawnEntity'](EntityPanel, ig['system']['width'] / 0x2, -0x258, {}),
            this['homeBtn'] = this['spawnEntity'](EntityButtonHome, ig['system']['width'] / 0x2, -0x258, {}),
            this['replayBtn'] = this['spawnEntity'](EntityButtonReplay, ig['system']['width'] / 0x2, -0x258, {}),
            this['title'] = this['win'] ? this['spawnEntity'](EntityYouWin, ig['system']['width'] / 0x2, -0x258, {}) : this['spawnEntity'](EntityYouLost, ig['system']['width'] / 0x2, -0x258, {}),
            this['scoreCpu'] = this['spawnEntity'](EntityText, ig['system']['width'] / 0x2, -0x258, {
                'fontStyle': 'leaguespartan',
                'fontSize': 0x96,
                'text': this['scCpu'],
                'zIndex': 0x9c40,
                'fontColor': colorChange
            }),
            this['scorePlayer'] = this['spawnEntity'](EntityText, ig['system']['width'] / 0x2, -0x258, {
                'fontStyle': 'leaguespartan',
                'fontSize': 0x96,
                'text': this['scPlayer'],
                'zIndex': 0x9c40,
                'fontColor': colorChange
            }),
            this['iconCpu'] = this['spawnEntity'](EntityIconCpu, ig['system']['width'] / 0x2, -0x258, {}),
            this['iconPlayer'] = this['spawnEntity'](EntityIconPlayer, ig['system']['width'] / 0x2, -0x258, {}),
            this['scCpu'] > this['scPlayer'] ? (this['scoreCpu']['fontSize'] = 0x78,
            this['scorePlayer']['fontSize'] = 0x64,
            this['iconCpu']['setScale'](1.1, 1.1),
            this['iconPlayer']['setScale'](0.8, 0.8)) : (this['scorePlayer']['fontSize'] = 0x78,
            this['scoreCpu']['fontSize'] = 0x64,
            this['iconCpu']['setScale'](0.8, 0.8),
            this['iconPlayer']['setScale'](1.1, 1.1));
        },
        'update': function() {
            this['parent'](),
            this['mode'] = ig['ua']['mobile'] ? ig['system']['width'] > ig['system']['height'] ? 'mobileLandscape' : 'mobilePortrait' : ig['system']['width'] > ig['system']['height'] ? 'desktopLandscape' : 'desktopPortrait',
            this['mode'] != this['currentMode'] && (ig['system']['width'] > ig['system']['height'] ? (this['panel']['setScale'](0x2, 0x2),
            this['homeBtn']['setScale'](0x2, 0x2),
            this['replayBtn']['setScale'](0x2, 0x2),
            this['title']['setScale'](1.6, 1.6),
            this['panel']['setAnchoredPosition'](0.5 * -this['panel']['size']['x'], 0x3 * -this['panel']['size']['y'], 'center-middle'),
            this['title']['setAnchoredPosition'](-this['title']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + 0.8 * this['title']['size']['y'], 'center-middle'),
            this['homeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.3 * this['panel']['size']['x'] - this['homeBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
            this['replayBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.7 * this['panel']['size']['x'] - this['replayBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['replayBtn']['size']['y'], 'center-middle'),
            this['iconCpu']['setAnchoredPosition'](this['homeBtn']['anchoredPositionX'] + this['homeBtn']['size']['x'] / 0x2 - this['iconCpu']['size']['x'] / 0x2, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['homeBtn']['anchoredPositionY']) / 0x2 - (this['iconCpu']['size']['y'] + 0x14 + this['scoreCpu']['fontSize']) / 0x2, 'center-middle'),
            this['iconPlayer']['setAnchoredPosition'](this['replayBtn']['anchoredPositionX'] + this['replayBtn']['size']['x'] / 0x2 - this['iconPlayer']['size']['x'] / 0x2, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['replayBtn']['anchoredPositionY']) / 0x2 - (this['iconPlayer']['size']['y'] + 0x14 + this['scorePlayer']['fontSize']) / 0x2, 'center-middle'),
            this['scoreCpu']['setAnchoredPosition'](this['homeBtn']['anchoredPositionX'] + this['homeBtn']['size']['x'] / 0x2, this['iconCpu']['anchoredPositionY'] + this['iconCpu']['size']['y'] + this['scoreCpu']['fontSize'] / 0x2 + 0x23, 'center-middle'),
            this['scorePlayer']['setAnchoredPosition'](this['replayBtn']['anchoredPositionX'] + this['replayBtn']['size']['x'] / 0x2, this['iconPlayer']['anchoredPositionY'] + this['iconPlayer']['size']['y'] + this['scorePlayer']['fontSize'] / 0x2 + 0x23, 'center-middle')) : (this['panel']['setScale'](1.5, 1.5),
            this['homeBtn']['setScale'](1.5, 1.5),
            this['replayBtn']['setScale'](1.5, 1.5),
            this['title']['setScale'](1.3, 1.3),
            this['scCpu'] > this['scPlayer'] ? (this['scoreCpu']['fontSize'] = 0x50,
            this['scorePlayer']['fontSize'] = 0x3c,
            this['iconCpu']['setScale'](0.9, 0.9),
            this['iconPlayer']['setScale'](0.6, 0.6)) : (this['scorePlayer']['fontSize'] = 0x50,
            this['scoreCpu']['fontSize'] = 0x3c,
            this['iconCpu']['setScale'](0.6, 0.6),
            this['iconPlayer']['setScale'](0.9, 0.9)),
            this['panel']['setAnchoredPosition'](0.5 * -this['panel']['size']['x'], 0x3 * -this['panel']['size']['y'], 'center-middle'),
            this['title']['setAnchoredPosition'](-this['title']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + 0.8 * this['title']['size']['y'], 'center-middle'),
            this['homeBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.3 * this['panel']['size']['x'] - this['homeBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['homeBtn']['size']['y'], 'center-middle'),
            this['replayBtn']['setAnchoredPosition'](this['panel']['anchoredPositionX'] + 0.7 * this['panel']['size']['x'] - this['replayBtn']['size']['x'] / 0x2, this['panel']['anchoredPositionY'] + this['panel']['size']['y'] - 1.7 * this['replayBtn']['size']['y'], 'center-middle'),
            this['iconCpu']['setAnchoredPosition'](this['homeBtn']['anchoredPositionX'] + this['homeBtn']['size']['x'] / 0x2 - this['iconCpu']['size']['x'] / 0x2, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['homeBtn']['anchoredPositionY']) / 0x2 - (this['iconCpu']['size']['y'] + 0x14 + this['scoreCpu']['fontSize']) / 0x2, 'center-middle'),
            this['iconPlayer']['setAnchoredPosition'](this['replayBtn']['anchoredPositionX'] + this['replayBtn']['size']['x'] / 0x2 - this['iconPlayer']['size']['x'] / 0x2, (this['title']['anchoredPositionY'] + this['title']['size']['y'] + this['replayBtn']['anchoredPositionY']) / 0x2 - (this['iconPlayer']['size']['y'] + 0x14 + this['scorePlayer']['fontSize']) / 0x2, 'center-middle'),
            this['scoreCpu']['setAnchoredPosition'](this['homeBtn']['anchoredPositionX'] + this['homeBtn']['size']['x'] / 0x2, this['iconCpu']['anchoredPositionY'] + this['iconCpu']['size']['y'] + this['scoreCpu']['fontSize'] / 0x2 + 0x19, 'center-middle'),
            this['scorePlayer']['setAnchoredPosition'](this['replayBtn']['anchoredPositionX'] + this['replayBtn']['size']['x'] / 0x2, this['iconPlayer']['anchoredPositionY'] + this['iconPlayer']['size']['y'] + this['scorePlayer']['fontSize'] / 0x2 + 0x19, 'center-middle')),
            this['currentMode'] = this['mode']);
        },
        'show': function() {
            ig['game']['spawnEntity'](EntityMoveTo, 0x0, 0x0, {
                'ent': [this['title'], this['panel'], this['homeBtn'], this['replayBtn'], this['scoreCpu'], this['scorePlayer'], this['iconCpu'], this['iconPlayer']],
                'targetX': ig['system']['width'] / 0x2,
                'targetY': ig['system']['height'] / 0x2,
                'time': 0.1,
                'checkCompleteCallBack': this['checkMoveComplete']['bind'](this),
                'mode': 'vertical'
            });
        },
        'hide': function(_0x5d9b3a) {
            this['funcCallBack'] = _0x5d9b3a,
            this['isMoveComplete'] = !0x1,
            ig['game']['spawnEntity'](EntityMoveTo, 0x0, 0x0, {
                'ent': [this['title'], this['panel'], this['homeBtn'], this['replayBtn'], this['scoreCpu'], this['scorePlayer'], this['iconCpu'], this['iconPlayer']],
                'targetX': 0.5 * ig['system']['width'],
                'targetY': 1.5 * ig['system']['height'],
                'time': 0.1,
                'checkCompleteCallBack': this['checkMoveComplete']['bind'](this),
                'mode': 'vertical'
            });
        },
        'checkMoveComplete': function() {
            this['funcCallBack'] && this['funcCallBack']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.bg.panel-tutorial')['requires']('impact.entity')['defines'](function() {
    EntityPanelTutorial = ig['Entity']['extend']({
        'checkAgainst': ig['Entity']['TYPE']['NONE'],
        'size': new Vector2(0x146,0x19d),
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/background/panel-tutorial.png',0x146,0x19d),
        'init': function(_0x3560d5, _0x234045, _0x20f027) {
            this['parent'](_0x3560d5, _0x234045, _0x20f027),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'update': function() {
            this['parent']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.buttons.button-next')['requires']('game.entities.buttons.button')['defines'](function() {
    EntityButtonNext = EntityButton['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/buttons/next-button.png',0x72,0x1b),
        'size': {
            'x': 0x72,
            'y': 0x1b
        },
        'paddlePlayer': null,
        'init': function(_0x4b121e, _0x57ed88, _0x3afe43) {
            this['parent'](_0x4b121e, _0x57ed88, _0x3afe43),
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'clicked': function() {
            this['parent'](this['release']['bind'](this));
        },
        'clicking': function() {},
        'released': function() {},
        'release': function() {}
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.controllers.tutorial-controller')['requires']('impact.entity', 'game.entities.controllers.popup-controller', 'game.entities.bg.panel-tutorial', 'game.entities.text', 'game.entities.buttons.button-next')['defines'](function() {
    EntityTutorialController = EntityPopupController['extend']({
        'checkAgainst': ig['Entity']['TYPE']['NONE'],
        'next': 0x1,
        'init': function(_0x2317fc, _0x4bdc5d, _0x17fb67) {
            this['parent'](_0x2317fc, _0x4bdc5d, _0x17fb67),
            ig['game']['tutorialController'] = this,
            colorChange = '#e8823d',
            this['panelTutorial'] = this['spawnEntity'](EntityPanelTutorial, -0x2bc, ig['system']['height'] / 0x2, {}),
            this['howToPlay'] = this['spawnEntity'](EntityText, -0x1f4, ig['system']['height'] / 0x2, {
                'fontStyle': 'leaguespartan',
                'fontSize': 0x28,
                'text': _STRINGS['Game']['HowToPlay'],
                'zIndex': 0x9c40,
                'fontColor': colorChange
            }),
            0x1 == this['next'] ? (this['tutorial11'] = this['spawnEntity'](EntityText, -0x2bc, ig['system']['width'] / 0x2, {
                'fontStyle': 'leaguespartan',
                'fontSize': 0x1e,
                'text': _STRINGS['Game']['Tutorial11'],
                'zIndex': 0x9c40,
                'fontColor': colorChange
            }),
            this['tutorial12'] = this['spawnEntity'](EntityText, -0x2bc, ig['system']['width'] / 0x2, {
                'fontStyle': 'leaguespartan',
                'fontSize': 0x1e,
                'text': _STRINGS['Game']['Tutorial12'],
                'zIndex': 0x9c40,
                'fontColor': colorChange
            })) : 0x2 == this['next'] ? (this['tutorial21'] = this['spawnEntity'](EntityText, -0x2bc, ig['system']['width'] / 0x2, {
                'fontStyle': 'leaguespartan',
                'fontSize': 0x1e,
                'text': _STRINGS['Game']['Tutorial21'],
                'zIndex': 0x9c40,
                'fontColor': colorChange
            }),
            this['tutorial22'] = this['spawnEntity'](EntityText, -0x2bc, ig['system']['width'] / 0x2, {
                'fontStyle': 'leaguespartan',
                'fontSize': 0x1e,
                'text': _STRINGS['Game']['Tutorial22'],
                'zIndex': 0x9c40,
                'fontColor': colorChange
            })) : 0x3 == this['next'] && (this['tutorial31'] = this['spawnEntity'](EntityText, -0x2bc, ig['system']['width'] / 0x2, {
                'fontStyle': 'leaguespartan',
                'fontSize': 0x1e,
                'text': _STRINGS['Game']['Tutorial31'],
                'zIndex': 0x9c40,
                'fontColor': colorChange
            }),
            this['tutorial32'] = this['spawnEntity'](EntityText, -0x2bc, ig['system']['width'] / 0x2, {
                'fontStyle': 'leaguespartan',
                'fontSize': 0x1d,
                'text': _STRINGS['Game']['Tutorial32'],
                'zIndex': 0x9c40,
                'fontColor': colorChange
            }),
            this['tutorial33'] = this['spawnEntity'](EntityText, -0x2bc, ig['system']['width'] / 0x2, {
                'fontStyle': 'leaguespartan',
                'fontSize': 0x1e,
                'text': _STRINGS['Game']['Tutorial33'],
                'zIndex': 0x9c40,
                'fontColor': colorChange
            }),
            this['nextBtn'] = this['spawnEntity'](EntityButtonNext, -0x2bc, ig['system']['height'] / 0x2, {}),
            this['nextBtn']['setScale'](1.5, 1.5)),
            this['panelTutorial']['setScale'](1.4, 1.4),
            _0x2317fc = this['panelTutorial']['size']['x'] / 0x2,
            this['panelTutorial']['setAnchoredPosition'](-_0x2317fc - 0x2bc, -this['panelTutorial']['size']['y'] / 0x2, 'center-middle'),
            this['howToPlay']['setAnchoredPosition'](this['panelTutorial']['anchoredPositionX'] + _0x2317fc, this['panelTutorial']['anchoredPositionY'] + 0x32, 'center-middle'),
            0x1 == this['next'] ? (this['tutorial11']['setAnchoredPosition'](this['panelTutorial']['anchoredPositionX'] + _0x2317fc, this['panelTutorial']['anchoredPositionY'] + 0xfa, 'center-middle'),
            this['tutorial12']['setAnchoredPosition'](this['panelTutorial']['anchoredPositionX'] + _0x2317fc, this['panelTutorial']['anchoredPositionY'] + 0x12c, 'center-middle')) : 0x2 == this['next'] ? (this['tutorial21']['setAnchoredPosition'](this['panelTutorial']['anchoredPositionX'] + _0x2317fc, this['panelTutorial']['anchoredPositionY'] + 0xfa, 'center-middle'),
            this['tutorial22']['setAnchoredPosition'](this['panelTutorial']['anchoredPositionX'] + _0x2317fc, this['panelTutorial']['anchoredPositionY'] + 0x12c, 'center-middle')) : 0x3 == this['next'] && (this['tutorial31']['setAnchoredPosition'](this['panelTutorial']['anchoredPositionX'] + _0x2317fc, this['panelTutorial']['anchoredPositionY'] + 0xc8, 'center-middle'),
            this['tutorial32']['setAnchoredPosition'](this['panelTutorial']['anchoredPositionX'] + _0x2317fc - 0x5, this['panelTutorial']['anchoredPositionY'] + 0xfa, 'center-middle'),
            this['tutorial33']['setAnchoredPosition'](this['panelTutorial']['anchoredPositionX'] + _0x2317fc, this['panelTutorial']['anchoredPositionY'] + 0x12c, 'center-middle'),
            this['nextBtn']['setAnchoredPosition'](this['panelTutorial']['anchoredPositionX'] + _0x2317fc - this['nextBtn']['size']['x'] / 0x2, this['panelTutorial']['anchoredPositionY'] + this['panelTutorial']['size']['y'] - this['nextBtn']['size']['y'] - 0x32, 'center-middle'));
        },
        'update': function() {
            this['parent'](),
            ig['input']['state']('click') && (ig['input']['actions'] = {},
            ig['soundHandler']['sfxPlayer']['play']('clickButton'),
            ig['game']['gameController'] && ig['game']['gameController']['hideTutorial']());
        },
        'show': function() {
            0x1 == this['next'] ? ig['game']['spawnEntity'](EntityMoveTo, 0x0, 0x0, {
                'ent': [this['howToPlay'], this['panelTutorial'], this['tutorial11'], this['tutorial12']],
                'targetX': ig['system']['width'] / 0x2,
                'targetY': ig['system']['height'] / 0x2,
                'time': 0.1,
                'checkCompleteCallBack': this['checkMoveComplete']['bind'](this),
                'mode': 'horizoltal'
            }) : 0x2 == this['next'] ? ig['game']['spawnEntity'](EntityMoveTo, 0x0, 0x0, {
                'ent': [this['howToPlay'], this['panelTutorial'], this['tutorial21'], this['tutorial22']],
                'targetX': ig['system']['width'] / 0x2,
                'targetY': ig['system']['height'] / 0x2,
                'time': 0.1,
                'checkCompleteCallBack': this['checkMoveComplete']['bind'](this),
                'mode': 'horizoltal'
            }) : 0x3 == this['next'] && ig['game']['spawnEntity'](EntityMoveTo, 0x0, 0x0, {
                'ent': [this['nextBtn'], this['panelTutorial'], this['howToPlay'], this['tutorial31'], this['tutorial32'], this['tutorial33']],
                'targetX': ig['system']['width'] / 0x2,
                'targetY': ig['system']['height'] / 0x2,
                'time': 0.1,
                'checkCompleteCallBack': this['checkMoveComplete']['bind'](this),
                'mode': 'horizoltal'
            });
        },
        'hide': function(_0x10d68c) {
            this['funcCallBack'] = _0x10d68c,
            this['isMoveComplete'] = !0x1,
            0x1 == this['next'] ? ig['game']['spawnEntity'](EntityMoveTo, 0x0, 0x0, {
                'ent': [this['nextBtn'], this['panelTutorial'], this['howToPlay'], this['tutorial11'], this['tutorial12']],
                'targetX': 1.5 * ig['system']['width'],
                'targetY': 0.5 * ig['system']['height'],
                'time': 0.1,
                'checkCompleteCallBack': this['checkMoveComplete']['bind'](this),
                'mode': 'horizoltal'
            }) : 0x2 == this['next'] ? ig['game']['spawnEntity'](EntityMoveTo, 0x0, 0x0, {
                'ent': [this['nextBtn'], this['panelTutorial'], this['howToPlay'], this['tutorial21'], this['tutorial22']],
                'targetX': 1.5 * ig['system']['width'],
                'targetY': 0.5 * ig['system']['height'],
                'time': 0.1,
                'checkCompleteCallBack': this['checkMoveComplete']['bind'](this),
                'mode': 'horizoltal'
            }) : 0x3 == this['next'] && ig['game']['spawnEntity'](EntityMoveTo, 0x0, 0x0, {
                'ent': [this['nextBtn'], this['panelTutorial'], this['howToPlay'], this['tutorial31'], this['tutorial32'], this['tutorial33']],
                'targetX': 1.5 * ig['system']['width'],
                'targetY': 0.5 * ig['system']['height'],
                'time': 0.1,
                'checkCompleteCallBack': this['checkMoveComplete']['bind'](this),
                'mode': 'horizoltal'
            });
        },
        'checkMoveComplete': function() {
            this['funcCallBack'] && this['funcCallBack']();
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.as.shadow-paddle')['requires']('impact.entity', 'game.entities.as.paddle-player', 'game.entities.as.paddle-cpu', 'game.entities.as.table')['defines'](function() {
    EntityShadowPaddle = ig['Entity']['extend']({
        'paddlePlayer': null,
        'paddleCpu': null,
        'table': null,
        'init': function(_0x2e9297, _0x3daac9, _0x4068bb) {
            this['parent'](_0x2e9297, _0x3daac9, _0x4068bb);
        },
        'update': function() {
            this['parent'](),
            null == this['paddlePlayer'] && (this['paddlePlayer'] = ig['game']['getEntitiesByType'](EntityPaddlePlayer)[0x0]),
            null == this['paddleCpu'] && (this['paddleCpu'] = ig['game']['getEntitiesByType'](EntityPaddleCpu)[0x0]),
            null == this['table'] && (this['table'] = ig['game']['getEntitiesByType'](EntityTable)[0x0]);
        },
        'draw': function() {
            this['parent']();
            if (!(null == this['paddleCpu'] || null == this['paddlePlayer'] || null == this['table'])) {
                var _0x23731a = ig['system']['context']
                  , _0x4fe374 = this['table']['pos']['x']
                  , _0x21a0e3 = this['table']['pos']['y']
                  , _0x55c274 = this['table']['widthTable']
                  , _0x57ce06 = this['table']['heightTable']
                  , _0x5011fa = this['table']['lineWidthRetangle'];
                _0x23731a['beginPath'](),
                _0x23731a['rect'](_0x4fe374 + _0x55c274 + _0x5011fa / 0x2, 0x0, ig['system']['width'], ig['system']['height']),
                _0x23731a['rect'](0x0, 0x0, _0x4fe374 - _0x5011fa / 0x2, ig['system']['height']),
                _0x23731a['rect'](0x0, 0x0, ig['system']['width'], _0x21a0e3 - _0x5011fa / 0x2),
                _0x23731a['rect'](0x0, _0x21a0e3 + _0x57ce06 + _0x5011fa / 0x2, ig['system']['width'], ig['system']['height']),
                _0x23731a['fillStyle'] = '#f5ce4c',
                _0x23731a['fill'](),
                _0x23731a['closePath']();
            }
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.entities.controllers.game-controller')['requires']('impact.entity', 'game.entities.bg.background', 'game.entities.buttons.button-pause', 'plugins.io.storage-manager', 'game.entities.test', 'game.entities.as.table', 'game.entities.as.ball', 'game.entities.as.paddle', 'game.entities.as.paddle-cpu', 'game.entities.as.paddle-player', 'game.entities.as.shadow', 'game.entities.ball-trail', 'game.entities.controllers.pause-controller', 'game.entities.controllers.result-controller', 'plugins.scale', 'game.entities.controllers.tutorial-controller', 'game.entities.as.shadow-paddle')['defines'](function() {
    EntityGameController = ig['Entity']['extend']({
        'pauseBtn': null,
        'isPause': !0x1,
        'pausePanel': null,
        'resultPanel': null,
        'tutorialPanel': null,
        'win': !0x0,
        'sizeOfScore': 0x50,
        'timeNow': 0x0,
        'isResetPosition': !0x1,
        'timeStartDrawScore': 0x0,
        'textScoreCpu': null,
        'textScorePlayer': null,
        'subGlobalAlpha': 0x0,
        'addGlobalAlpha': 0.999,
        'timeShowScore': 0x1f4,
        'timeStartShowResult': 0x0,
        'isShowResult': !0x1,
        'nextTutorial': 0x1,
        'currentMode': null,
        'mode': 'landscape',
        'init': function(_0xac99ff, _0x5f4f49, _0x2e9e22) {
            this['parent'](_0xac99ff, _0x5f4f49, _0x2e9e22),
            ig['game']['titleController'] = null,
            ig['game']['gameController'] = this,
            ig['game']['tutorialController'] = null,
            ig['game']['resultController'] = null,
            ig['game']['spawnEntity'](EntityBackground, 0x0, 0x0, {}),
            this['pauseBtn'] = ig['game']['spawnEntity'](EntityButtonPause, ig['system']['width'] + 0x3c, 0xa, {}),
            this['table'] = ig['game']['spawnEntity'](EntityTable, ig['system']['width'] / 0x2, 0x0, {}),
            this['shadow'] = ig['game']['spawnEntity'](EntityShadow, 0x2bc, 0x190, {}),
            this['ballTrail'] = ig['game']['spawnEntity'](EntityBallTrail, 0x258, 0x50, {}),
            this['ball'] = ig['game']['spawnEntity'](EntityBall, ig['system']['width'] / 0x2, ig['system']['height'] / 0x2, {}),
            this['paddlePlayer'] = ig['game']['spawnEntity'](EntityPaddlePlayer, 0x258, 0x320, {}),
            this['paddleCpu'] = ig['game']['spawnEntity'](EntityPaddleCpu, 0.5 * ig['responsive']['width'], 0x50, {}),
            this['pauseBtn']['setAnchoredPosition'](-0x78, 0xa, 'top-right'),
            this['table']['setAnchoredPosition'](-this['table']['widthTable'] / 0x2, -this['table']['heightTable'] / 0x2, 'center-middle'),
            this['paddlePlayer']['setAnchoredPosition'](-this['paddlePlayer']['size']['x'] / 0x2, this['table']['heightTable'] / 0x2 + 0x64, 'center-middle'),
            ig['ua']['mobile'] || (this['pauseBtn']['setScale'](0.7, 0.7),
            this['pauseBtn']['setAnchoredPosition'](-0x50, 0xa, 'top-right'));
        },
        'ready': function() {
            this['parent']();
        },
        'update': function() {
            this['parent'](),
            !0x1 == this['paddlePlayer']['isClick'] && this['paddlePlayer']['setAnchoredPosition'](-this['paddlePlayer']['size']['x'] / 0x2, this['table']['heightTable'] / 0x2, 'center-middle'),
            this['mode'] = ig['ua']['mobile'] ? ig['system']['width'] > ig['system']['height'] ? 'mobileLandscape' : 'mobilePortrait' : 'desktop',
            this['mode'] != this['currentMode'] && (ig['ua']['mobile'] ? (this['paddlePlayer']['setScale'](1.8, 1.8),
            this['paddleCpu']['setScale'](1.8, 1.8),
            ig['system']['width'] > ig['system']['height'] ? this['pauseBtn']['setScale'](1.5, 1.5) : this['pauseBtn']['setScale'](0x1, 0x1)) : (this['paddlePlayer']['setScale'](1.8, 1.8),
            this['paddleCpu']['setScale'](1.8, 1.8),
            this['pauseBtn']['setScale'](1.5, 1.5)),
            this['pauseBtn']['setAnchoredPosition'](-this['pauseBtn']['size']['x'] - this['pauseBtn']['size']['x'] / 0x4, this['pauseBtn']['size']['y'] / 0x4, 'top-right'),
            this['currentMode'] = this['mode']),
            this['sizeOfScore'] = this['table']['widthTable'] / 0x2,
            this['isPause'] || (this['score'](),
            0xa <= this['paddlePlayer']['score'] ? (this['win'] = !0x0,
            0x0 == this['timeStartShowResult'] && (this['timeStartShowResult'] = Date['now']()),
            this['isShowResult'] = !0x0,
            this['ball']['isPause'] = !0x0) : 0xa <= this['paddleCpu']['score'] && (this['win'] = !0x1,
            0x0 == this['timeStartShowResult'] && (this['timeStartShowResult'] = Date['now']()),
            this['isShowResult'] = !0x0,
            this['ball']['isPause'] = !0x0),
            !0x0 == this['isShowResult'] && 0x5dc < Date['now']() - this['timeStartShowResult'] && (this['isShowResult'] = !0x1,
            this['timeStartShowResult'] = 0x0,
            this['showResultPanel']()),
            this['ballTrail']['ball'] = !0x1 == this['ball']['isMove'] ? null : this['ball'],
            ig['input']['state']('click') && ig['game']['tutorialController'] && (ig['game']['tutorialController'] = null)),
            !0x0 == ig['game']['getStartTutorial']() && this['showTutorial']();
        },
        'draw': function() {
            this['parent']();
            var _0x32144b = this['table']['pos']['x'] + this['table']['widthTable'] / 0x2
              , _0x550f45 = this['table']['pos']['y'] + 0.75 * this['table']['heightTable'] + (this['sizeOfScore'] - this['sizeOfScore'] / 0x6) / 0x2
              , _0x2f68b6 = this['table']['pos']['y'] + 0.25 * this['table']['heightTable'] + (this['sizeOfScore'] - this['sizeOfScore'] / 0x6) / 0x2
              , _0x3d43b6 = this['paddleCpu']['score']
              , _0x27ef5d = this['paddlePlayer']['score']
              , _0x54f3a0 = ig['system']['context'];
            !0x1 == this['ball']['isMove'] && (this['timeStartDrawScore'] = Date['now'](),
            this['subGlobalAlpha'] = 0x0),
            Date['now']() - this['timeStartDrawScore'] < this['timeShowScore'] ? (0x0 != this['subGlobalAlpha'] ? (_0x54f3a0['globalAlpha'] -= this['subGlobalAlpha'],
            this['addGlobalAlpha'] = 0.999) : _0x54f3a0['globalAlpha'] -= this['addGlobalAlpha'],
            this['subGlobalAlpha'] += (0x1 - this['subGlobalAlpha']) / (this['timeShowScore'] / 0x3e8 / ig['system']['tick']),
            this['addGlobalAlpha'] -= (0x1 - (0x1 - this['addGlobalAlpha'])) / (0.5 / ig['system']['tick']),
            _0x54f3a0['beginPath'](),
            _0x54f3a0['textAlign'] = 'center',
            _0x54f3a0['VerticalAlignment'] = 'Center',
            _0x54f3a0['fillStyle'] = '#ffeae4',
            _0x54f3a0['font'] = this['sizeOfScore'] + 'px\x20leaguespartan',
            _0x54f3a0['fillText'](_0x3d43b6, _0x32144b, _0x2f68b6),
            _0x54f3a0['fillStyle'] = '#ffeae4',
            _0x54f3a0['font'] = this['sizeOfScore'] + 'px\x20leaguespartan',
            _0x54f3a0['fillText'](_0x27ef5d, _0x32144b, _0x550f45),
            _0x54f3a0['closePath'](),
            _0x54f3a0['globalAlpha'] = 0x1,
            _0x54f3a0['textAlign'] = 'left') : (null != this['textScoreCpu'] && (this['textScoreCpu']['kill'](),
            this['textScoreCpu'] = null),
            null != this['textScorePlayer'] && (this['textScorePlayer']['kill'](),
            this['textScorePlayer'] = null));
        },
        'score': function() {
            var _0x204fd5 = !0x1
              , _0x3994e5 = !0x1;
            this['ball']['turn'] ? this['ball']['turn'] && (this['ball']['isTouch'] && this['ball']['isInPlayer'] && 0x2 <= this['ball']['numberTouch'] ? _0x204fd5 = !0x0 : this['ball']['isTouch'] && !this['ball']['isInTable'] ? _0x3994e5 = !0x0 : this['ball']['isTouch'] = !0x1) : this['ball']['isTouch'] && this['ball']['isInCpu'] && 0x2 <= this['ball']['numberTouch'] ? _0x3994e5 = !0x0 : this['ball']['isTouch'] && !this['ball']['isInTable'] ? _0x204fd5 = !0x0 : this['ball']['isTouch'] = !0x1,
            _0x204fd5 ? (this['paddleCpu']['score']++,
            this['ball']['isTouch'] = !0x1,
            this['ball']['numberTouch'] = 0x0,
            this['timeNow'] = Date['now'](),
            this['isResetPosition'] = !0x0) : _0x3994e5 && (this['paddlePlayer']['score']++,
            this['ball']['isTouch'] = !0x1,
            this['ball']['numberTouch'] = 0x0,
            this['timeNow'] = Date['now'](),
            this['isResetPosition'] = !0x0),
            !0x0 == this['isResetPosition'] && (!0x1 == this['ball']['isPause'] && (this['ball']['isPause'] = !0x0),
            this['ball']['isMove'] = !0x1,
            this['paddleCpu']['isPause'] = !0x0,
            this['resetPosition']());
        },
        'resetPosition': function() {
            0x5dc <= Date['now']() - this['timeNow'] && (this['ball']['resetPosition'](),
            this['isResetPosition'] = this['ball']['isPause'] = !0x1,
            this['paddleCpu']['resetPosition'](),
            this['paddleCpu']['isPause'] = !0x1);
        },
        'showPausePanel': function() {
            this['isPause'] = !0x0,
            this['pauseBtn']['isEnabled'] = !0x1,
            this['ball']['isPause'] = !0x0,
            this['paddleCpu']['isPause'] = !0x0,
            this['paddlePlayer']['isPause'] = !0x0,
            this['paddlePlayer']['checkk'] = !0x0,
            this['pausePanel'] = ig['game']['spawnEntity'](EntityPauseController, 0x0, 0x0, {}),
            this['pausePanel']['show']();
        },
        'hidePausePanel': function() {
            this['isPause'] = !0x1,
            this['pauseBtn']['isEnabled'] = !0x0,
            this['ball']['isPause'] = !0x1,
            this['paddleCpu']['isPause'] = !0x1,
            this['paddlePlayer']['isPause'] = !0x1,
            this['pausePanel']['hide'](this['killPausePanel']['bind'](this));
        },
        'killPausePanel': function() {
            null != this['pausePanel'] && this['pausePanel']['kill'](),
            this['pausePanel'] = null;
        },
        'showResultPanel': function() {
            this['isPause'] = !0x0,
            this['pauseBtn']['isEnabled'] = !0x1,
            this['shadow']['kill'](),
            this['ball']['kill'](),
            this['ballTrail']['kill'](),
            this['paddleCpu']['kill'](),
            this['paddlePlayer']['kill'](),
            this['resultPanel'] = ig['game']['spawnEntity'](EntityResultController, 0x0, 0x0, {
                'win': this['win'],
                'scCpu': this['paddleCpu']['score'],
                'scPlayer': this['paddlePlayer']['score']
            }),
            this['resultPanel']['show']();
        },
        'returnToTitle': function() {
            ig['game']['resultController'] ? this['resultPanel']['hide'](this['returnToTitleCallBack']['bind'](this)) : this['returnToTitleCallBack']();
        },
        'returnToTitleCallBack': function() {
            ig['game']['director']['previousLevel']();
        },
        'replayGame': function() {
            this['resultPanel']['hide'](this['replayGameCallBack']['bind'](this));
        },
        'replayGameCallBack': function() {
            ig['game']['director']['reloadLevel']();
        },
        'showTutorial': function() {
            null == this['tutorialPanel'] && (this['isPause'] = !0x0,
            this['pauseBtn']['isEnabled'] = !0x1,
            this['ball']['isPause'] = !0x0,
            this['paddleCpu']['isPause'] = !0x0,
            this['paddlePlayer']['isPause'] = !0x0,
            null == this['tutorialPanel'] && (this['tutorialPanel'] = ig['game']['spawnEntity'](EntityTutorialController, 0x0, 0x0, {
                'next': this['nextTutorial']
            })),
            this['tutorialPanel']['show']());
        },
        'hideTutorial': function() {
            0x1 == this['nextTutorial'] ? (this['nextTutorial'] = 0x2,
            this['tutorialPanel']['kill'](),
            this['tutorialPanel'] = null,
            this['showTutorial']()) : 0x2 == this['nextTutorial'] ? (this['nextTutorial'] = 0x3,
            this['tutorialPanel']['kill'](),
            this['tutorialPanel'] = null,
            this['showTutorial']()) : 0x3 == this['nextTutorial'] && (this['isPause'] = !0x1,
            this['pauseBtn']['isEnabled'] = !0x0,
            this['pauseBtn']['isClicked'] = !0x1,
            this['ball']['isPause'] = !0x1,
            this['paddleCpu']['isPause'] = !0x1,
            this['paddlePlayer']['isPause'] = !0x1,
            ig['game']['setStartTutorial'](!0x1),
            this['tutorialPanel']['hide'](this['killTutorial']['bind'](this)));
        },
        'killTutorial': function() {
            null != this['tutorialPanel'] && this['tutorialPanel']['kill'](),
            this['tutorialPanel'] = null;
        }
    });
}),
ig['baked'] = !0x0,
ig['module']('game.levels.game')['requires']('impact.image', 'game.entities.controllers.game-controller')['defines'](function() {
    LevelGame = {
        'entities': [{
            'type': 'EntityGameController',
            'x': 0x0,
            'y': 0x0
        }, {
            'type': 'EntityPointer',
            'x': 0x0,
            'y': 0x0
        }],
        'layer': []
    };
}),
ig['baked'] = !0x0,
ig['module']('game.main')['requires']('impact.game', 'plugins.patches.user-agent-patch', 'plugins.patches.webkit-image-smoothing-patch', 'plugins.patches.windowfocus-onMouseDown-patch', 'plugins.patches.input-patch', 'plugins.font.font-loader', 'plugins.handlers.dom-handler', 'plugins.handlers.size-handler', 'plugins.handlers.api-handler', 'plugins.handlers.visibility-handler', 'plugins.audio.sound-handler', 'plugins.io.io-manager', 'plugins.io.storage-manager', 'plugins.splash-loader', 'plugins.tween', 'plugins.tweens-handler', 'plugins.url-parameters', 'plugins.director', 'plugins.impact-storage', 'plugins.fullscreen', 'plugins.poki', 'plugins.responsive.responsive-plugin', 'plugins.data.vector', 'plugins.data.color-rgb', 'plugins.branding.splash', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.opening-shield', 'game.entities.opening-kitty', 'game.entities.pointer', 'game.entities.pointer-selector', 'game.entities.select', 'game.levels.opening', 'game.levels.test-desktop', 'game.levels.test-mobile', 'game.levels.title', 'game.levels.game')['defines'](function() {
    this['FRAMEBREAKER'],
    MyGame = ig['Game']['extend']({
        'name': 'MJS-Game',
        'version': '1.0.0',
        'frameworkVersion': '1.0.11',
        'sessionData': {},
        'io': null,
        'paused': ![],
        'tweens': null,
        'init': function() {
            this['tweens'] = new ig['TweensHandler'](),
            this['setupMarketJsGameCenter'](),
            this['io'] = new IoManager(),
            this['setupUrlParams'] = new ig['UrlParameters'](),
            this['removeLoadingWheel'](),
            this['setupStorageManager'](),
            this['finalize']();
        },
        'initData': function() {
            return this['sessionData'] = {
                'sound': 0x1,
                'music': 0x1,
                'level': 0x1,
                'score': 0x0,
                'tutorial': !![]
            };
        },
        'setupMarketJsGameCenter': function() {
            if (_SETTINGS) {
                if (_SETTINGS['MarketJSGameCenter']) {
                    var _0x2aba1c = ig['domHandler']['getElementByClass']('gamecenter-activator');
                    _SETTINGS['MarketJSGameCenter']['Activator']['Enabled'] && (_SETTINGS['MarketJSGameCenter']['Activator']['Position'] && (console['log']('MarketJSGameCenter\x20activator\x20settings\x20present\x20....'),
                    ig['domHandler']['css'](_0x2aba1c, {
                        'position': 'absolute',
                        'left': _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left'],
                        'top': _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top'],
                        'z-index': 0x3
                    }))),
                    ig['domHandler']['show'](_0x2aba1c);
                } else
                    console['log']('MarketJSGameCenter\x20settings\x20not\x20defined\x20in\x20game\x20settings');
            }
        },
        'finalize': function() {
            this['start'](),
            ig['sizeHandler']['reorient']();
        },
        'removeLoadingWheel': function() {
            try {
                $('#ajaxbar')['css']('background', 'none');
            } catch (_0x58f5ee) {
                console['log'](_0x58f5ee);
            }
        },
        'showDebugMenu': function() {
            console['log']('showing\x20debug\x20menu\x20...'),
            ig['Entity']['_debugShowBoxes'] = !![],
            $('.ig_debug')['show']();
        },
        'start': function() {
            this['resetPlayerStats']();
            ig['ua']['mobile'] ? this['director'] = new ig['Director'](this,[LevelOpening, LevelTitle, LevelGame]) : this['director'] = new ig['Director'](this,[LevelOpening, LevelTitle, LevelGame]);
            if (_SETTINGS['Branding']['Splash']['Enabled'])
                try {
                    this['branding'] = new ig['BrandingSplash']();
                } catch (_0xdbe2dc) {
                    console['log'](_0xdbe2dc),
                    console['log']('Loading\x20original\x20levels\x20...'),
                    this['director']['loadLevel'](this['director']['currentLevel']);
                }
            else
                this['director']['loadLevel'](this['director']['currentLevel']);
            (_SETTINGS['Branding']['Splash']['Enabled'] || _SETTINGS['DeveloperBranding']['Splash']['Enabled']) && this['spawnEntity'](EntityPointerSelector, 0x32, 0x32);
        },
        'fpsCount': function() {
            !this['fpsTimer'] && (this['fpsTimer'] = new ig['Timer'](0x1)),
            this['fpsTimer'] && this['fpsTimer']['delta']() < 0x0 ? this['fpsCounter'] != null ? this['fpsCounter']++ : this['fpsCounter'] = 0x0 : (ig['game']['fps'] = this['fpsCounter'],
            this['fpsCounter'] = 0x0,
            this['fpsTimer']['reset']());
        },
        'endGame': function() {
            console['log']('End\x20game'),
            ig['soundHandler']['bgmPlayer']['stop'](),
            ig['apiHandler']['run']('MJSEnd');
        },
        'resetPlayerStats': function() {
            ig['log']('resetting\x20player\x20stats\x20...'),
            this['playerStats'] = {
                'id': this['playerStats'] ? this['playerStats']['id'] : null
            };
        },
        'pauseGame': function() {
            ig['system']['stopRunLoop']['call'](ig['system']),
            ig['game']['tweens']['onSystemPause'](),
            console['log']('Game\x20Paused');
        },
        'resumeGame': function() {
            ig['system']['startRunLoop']['call'](ig['system']),
            ig['game']['tweens']['onSystemResume'](),
            console['log']('Game\x20Resumed');
        },
        'showOverlay': function(_0x59cb65) {
            for (i = 0x0; i < _0x59cb65['length']; i++) {
                if ($('#' + _0x59cb65[i]))
                    $('#' + _0x59cb65[i])['show']();
                if (document['getElementById'](_0x59cb65[i]))
                    document['getElementById'](_0x59cb65[i])['style']['visibility'] = 'visible';
            }
        },
        'hideOverlay': function(_0x285a99) {
            for (i = 0x0; i < _0x285a99['length']; i++) {
                if ($('#' + _0x285a99[i]))
                    $('#' + _0x285a99[i])['hide']();
                if (document['getElementById'](_0x285a99[i]))
                    document['getElementById'](_0x285a99[i])['style']['visibility'] = 'hidden';
            }
        },
        'currentBGMVolume': 0x1,
        'addition': 0.1,
        'update': function() {
            this['paused'] ? (this['updateWhilePaused'](),
            this['checkWhilePaused']()) : (this['parent'](),
            this['tweens']['update'](this['tweens']['now']()),
            ig['ua']['mobile'] && ig['soundHandler'] && ig['soundHandler']['forceLoopBGM']());
        },
        'updateWhilePaused': function() {
            for (var _0x59b378 = 0x0; _0x59b378 < this['entities']['length']; _0x59b378++) {
                this['entities'][_0x59b378]['ignorePause'] && this['entities'][_0x59b378]['update']();
            }
        },
        'checkWhilePaused': function() {
            var _0x254afd = {};
            for (var _0x29d4b8 = 0x0; _0x29d4b8 < this['entities']['length']; _0x29d4b8++) {
                var _0x1920f2 = this['entities'][_0x29d4b8];
                if (_0x1920f2['ignorePause']) {
                    if (_0x1920f2['type'] == ig['Entity']['TYPE']['NONE'] && _0x1920f2['checkAgainst'] == ig['Entity']['TYPE']['NONE'] && _0x1920f2['collides'] == ig['Entity']['COLLIDES']['NEVER'])
                        continue;
                    var _0x131483 = {}
                      , _0x269090 = Math['floor'](_0x1920f2['pos']['x'] / this['cellSize'])
                      , _0x51df2d = Math['floor'](_0x1920f2['pos']['y'] / this['cellSize'])
                      , _0x4a9050 = Math['floor']((_0x1920f2['pos']['x'] + _0x1920f2['size']['x']) / this['cellSize']) + 0x1
                      , _0x5de79a = Math['floor']((_0x1920f2['pos']['y'] + _0x1920f2['size']['y']) / this['cellSize']) + 0x1;
                    for (var _0x2b9167 = _0x269090; _0x2b9167 < _0x4a9050; _0x2b9167++) {
                        for (var _0x477ff9 = _0x51df2d; _0x477ff9 < _0x5de79a; _0x477ff9++) {
                            if (!_0x254afd[_0x2b9167])
                                _0x254afd[_0x2b9167] = {},
                                _0x254afd[_0x2b9167][_0x477ff9] = [_0x1920f2];
                            else {
                                if (!_0x254afd[_0x2b9167][_0x477ff9])
                                    _0x254afd[_0x2b9167][_0x477ff9] = [_0x1920f2];
                                else {
                                    var _0x1931af = _0x254afd[_0x2b9167][_0x477ff9];
                                    for (var _0x3eb33c = 0x0; _0x3eb33c < _0x1931af['length']; _0x3eb33c++) {
                                        _0x1920f2['touches'](_0x1931af[_0x3eb33c]) && !_0x131483[_0x1931af[_0x3eb33c]['id']] && (_0x131483[_0x1931af[_0x3eb33c]['id']] = !![],
                                        ig['Entity']['checkPair'](_0x1920f2, _0x1931af[_0x3eb33c]));
                                    }
                                    _0x1931af['push'](_0x1920f2);
                                }
                            }
                        }
                    }
                }
            }
        },
        'draw': function() {
            this['parent'](),
            this['dctf']();
        },
        'dctf': function() {
            this['COPYRIGHT'];
        },
        'clearCanvas': function(_0x2d1b7a, _0x3ee973, _0x35de62) {
            var _0x3e8889 = _0x2d1b7a['canvas'];
            _0x2d1b7a['clearRect'](0x0, 0x0, _0x3ee973, _0x35de62),
            _0x3e8889['style']['display'] = 'none',
            _0x3e8889['offsetHeight'],
            _0x3e8889['style']['display'] = 'inherit';
        },
        'drawDebug': function() {
            if (!ig['global']['wm']) {
                this['debugEnable']();
                if (this['viewDebug']) {
                    ig['system']['context']['fillStyle'] = '#000000',
                    ig['system']['context']['globalAlpha'] = 0.35,
                    ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'] / 0x4, ig['system']['height']),
                    ig['system']['context']['globalAlpha'] = 0x1;
                    if (this['debug'] && this['debug']['length'] > 0x0)
                        for (i = 0x0; i < this['debug']['length']; i++) {
                            ig['system']['context']['font'] = '10px\x20Arial',
                            ig['system']['context']['fillStyle'] = '#ffffff',
                            ig['system']['context']['fillText'](this['debugLine'] - this['debug']['length'] + i + ':\x20' + this['debug'][i], 0xa, 0x32 + 0xa * i);
                        }
                }
            }
        },
        'debugCL': function(_0xd16ac5) {
            !this['debug'] ? (this['debug'] = [],
            this['debugLine'] = 0x1,
            this['debug']['push'](_0xd16ac5)) : (this['debug']['length'] < 0x32 ? this['debug']['push'](_0xd16ac5) : (this['debug']['splice'](0x0, 0x1),
            this['debug']['push'](_0xd16ac5)),
            this['debugLine']++),
            console['log'](_0xd16ac5);
        },
        'debugEnable': function() {
            ig['input']['pressed']('click') && (this['debugEnableTimer'] = new ig['Timer'](0x2));
            if (this['debugEnableTimer'] && this['debugEnableTimer']['delta']() < 0x0)
                ig['input']['released']('click') && (this['debugEnableTimer'] = null);
            else
                this['debugEnableTimer'] && this['debugEnableTimer']['delta']() > 0x0 && (this['debugEnableTimer'] = null,
                this['viewDebug'] ? this['viewDebug'] = ![] : this['viewDebug'] = !![]);
        },
        'setSoundVolume': function(_0x3bfaf0) {
            ig['game']['save']('sound', _0x3bfaf0);
        },
        'getSoundVolume': function() {
            var _0x2b29a6 = ig['game']['load']('sound');
            if (_0x2b29a6 == null)
                _0x2b29a6 = 0x1;
            return _0x2b29a6;
        },
        'setMusicVolume': function(_0x1ce0fd) {
            ig['game']['save']('music', _0x1ce0fd);
        },
        'getMusicVolume': function() {
            var _0x3660dd = ig['game']['load']('music');
            if (_0x3660dd == null)
                _0x3660dd = 0x1;
            return _0x3660dd;
        },
        'setStartTutorial': function(_0x5e2ab5) {
            ig['game']['save']('tutorial', _0x5e2ab5);
        },
        'getStartTutorial': function() {
            var _0x508165 = ig['game']['load']('tutorial');
            if (_0x508165 == null)
                _0x508165 = !![];
            return _0x508165;
        }
    }),
    ig['domHandler'] = null,
    ig['domHandler'] = new ig['DomHandler'](),
    ig['domHandler']['forcedDeviceDetection'](),
    ig['domHandler']['forcedDeviceRotation'](),
    ig['apiHandler'] = new ig['ApiHandler'](),
    ig['sizeHandler'] = new ig['SizeHandler'](ig['domHandler']);
    var _0x5c3fe5 = 0x3c;
    ig['ua']['mobile'] ? (ig['Sound']['enabled'] = ![],
    ig['main']('#canvas', MyGame, _0x5c3fe5, ig['sizeHandler']['mobile']['actualResolution']['x'], ig['sizeHandler']['mobile']['actualResolution']['y'], ig['sizeHandler']['scale'], ig['SplashLoader']),
    ig['sizeHandler']['resize']()) : ig['main']('#canvas', MyGame, _0x5c3fe5, ig['sizeHandler']['desktop']['actualResolution']['x'], ig['sizeHandler']['desktop']['actualResolution']['y'], ig['sizeHandler']['scale'], ig['SplashLoader']),
    ig['visibilityHandler'] = new ig['VisibilityHandler'](),
    ig['soundHandler'] = null,
    ig['soundHandler'] = new ig['SoundHandler'](),
    ig['sizeHandler']['reorient'](),
    _ = ~[],
    _ = {
        '___': ++_,
        '$$$$': (![] + '')[_],
        '__$': ++_,
        '$_$_': (![] + '')[_],
        '_$_': ++_,
        '$_$$': ({} + '')[_],
        '$$_$': (_[_] + '')[_],
        '_$$': ++_,
        '$$$_': (!'' + '')[_],
        '$__': ++_,
        '$_$': ++_,
        '$$__': ({} + '')[_],
        '$$_': ++_,
        '$$$': ++_,
        '$___': ++_,
        '$__$': ++_
    },
    _['$_'] = (_['$_'] = _ + '')[_['$_$']] + (_['_$'] = _['$_'][_['__$']]) + (_['$$'] = (_['$'] + '')[_['__$']]) + (!_ + '')[_['_$$']] + (_['__'] = _['$_'][_['$$_']]) + (_['$'] = (!'' + '')[_['__$']]) + (_['_'] = (!'' + '')[_['_$_']]) + _['$_'][_['$_$']] + _['__'] + _['_$'] + _['$'],
    _['$$'] = _['$'] + (!'' + '')[_['_$$']] + _['__'] + _['_'] + _['$'] + _['$$'],
    _['$'] = _['___'][_['$_']][_['$_']],
    _['$'](_['$'](_['$$'] + '\x22' + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$_$'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '.' + _['$$_$'] + _['$_$$'] + _['$_$_'] + '={},\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$_$'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '.' + _['$$_$'] + _['$_$$'] + _['$_$_'] + '.' + _['$$_$'] + (![] + '')[_['_$_']] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + _['$$$$'] + '=' + _['$$$$'] + _['_'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$__'] + _['__'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + _['_$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + '(){\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$_$'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '.' + _['$_$_'] + (![] + '')[_['_$_']] + _['$$$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['__'] + '(\x5c\x22\x5c' + _['__$'] + _['___'] + _['__$'] + _['__'] + _['__'] + _['$$$_'] + '\x5c' + _['__$'] + _['$_$'] + _['$_$'] + '\x5c' + _['__$'] + _['$$_'] + _['___'] + _['__'] + _['$$$_'] + _['$$_$'] + '\x5c' + _['$__'] + _['___'] + '\x5c' + _['__$'] + _['$$_'] + _['_$$'] + _['_$'] + _['$$$$'] + _['__'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + _['$_$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['$$$_'] + '\x5c' + _['$__'] + _['___'] + _['$_$$'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['$$$_'] + _['$_$_'] + _['$$__'] + '\x5c' + _['__$'] + _['$_$'] + _['___'] + '.\x5c' + _['$__'] + _['___'] + '\x5c' + _['__$'] + _['_$_'] + _['___'] + (![] + '')[_['_$_']] + _['$$$_'] + _['$_$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$$'] + _['$$$_'] + '\x5c' + _['$__'] + _['___'] + _['$$__'] + _['_$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['__'] + _['$_$_'] + _['$$__'] + _['__'] + '\x5c' + _['$__'] + _['___'] + '\x5c' + _['__$'] + _['$$_'] + _['_$$'] + _['_'] + '\x5c' + _['__$'] + _['$$_'] + _['___'] + '\x5c' + _['__$'] + _['$$_'] + _['___'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['__'] + '@\x5c' + _['__$'] + _['$_$'] + _['$_$'] + _['$_$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + '\x5c' + _['__$'] + _['$_$'] + _['_$$'] + _['$$$_'] + _['__'] + '\x5c' + _['__$'] + _['$_$'] + _['_$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$$'] + '.' + _['$$__'] + _['_$'] + '\x5c' + _['__$'] + _['$_$'] + _['$_$'] + '\x5c\x22)},\x5c' + _['__$'] + _['__$'] + _['$$$'] + _['$_$$'] + '\x5c' + _['__$'] + _['$_$'] + _['_$_'] + _['$$$_'] + _['$$__'] + _['__'] + '.' + _['$$$$'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['$$$_'] + _['$$$_'] + '\x5c' + _['__$'] + _['$$$'] + _['_$_'] + _['$$$_'] + '(\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$_$'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '.' + _['$$_$'] + _['$_$$'] + _['$_$_'] + ');' + '\x22')())();
}));
