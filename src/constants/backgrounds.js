export const MAIN_MOBILE_LAYOUT_BACKGROUND = {
  backgroundImage:
    'url(img/snow_top_bg.svg), url(img/home_bg.svg), url(img/rays_bg.svg)',
  backgroundPosition: '0 0, 0 100%, 50% 15%',
  backgroundRepeat: 'repeat-x, no-repeat, no-repeat',
  backgroundSize: 'contain, contain, 1658px 1658px',
}

export const HOME_DESKTOP_LAYOUT_BACKGROUND = {
  backgroundImage:
    'url(img/home_foreground.svg), url(img/home_bg_desktop.svg), url(img/snow_bg_desktop.svg), url(img/rays_bg_desktop.svg)',
  backgroundPosition: {
    _: 'bottom 60px right 180px, 0 100%, 42px 0, -5% 60%',
    xl: 'bottom 60px right 330px, 0 100%, 42px 0, -5% 60%',
  },
  backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat',
  backgroundSize: {
    _: '50% auto, contain, contain, 2492px 2492px',
    xl: 'auto, contain, contain, 2492px 2492px',
  },
}

export const CODES_MOBILE_LAYOUT_BACKGROUND = {
  backgroundImage: 'url(img/snow_top_bg.svg), url(img/rays_bg.svg)',
  backgroundPosition: '0 0, 50% 15%',
  backgroundRepeat: 'repeat-x, no-repeat',
  backgroundSize: 'auto, 1658px 1658px',
}

export const CODES_DESKTOP_LAYOUT_BACKGROUND = {
  backgroundImage:
    'url(img/codes_bg_desktop.svg), url(img/snow_bg_desktop.svg), url(img/rays_bg_desktop.svg)',
  backgroundPosition: '0 100%, 42px 0, 50% 68%',
  backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
  backgroundSize: 'contain, contain, 2492px 2492px',
}

export const RULES_LAYOUT_BACKGROUND = {
  backgroundImage:
    'url(img/snow_top_bg.svg), linear-gradient(180deg, #5fa89b 0%, #83c9bc 100%)',
  backgroundRepeat: 'repeat-x, no-repeat',
}

export const MAP_VIEW_LAYOUT_BACKGROUND = {
  backgroundColor: '#52aa9a',
}
