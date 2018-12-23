import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    keyframes,
    group,
    // ...
  } from '@angular/animations';

  export const navbarTransition = 
  trigger('navbarAnimation' , [
    state('top', style ({
      opacity: '0.2' , 'padding-bottom': '50px'
    })),
    state('bottom', style ({
      opacity: '1'
    })),
    transition('top => bottom', animate('500ms ease-in')),
    transition('bottom => top', animate('500ms ease-out'))
  ]);

  export const imageFadeAnimation = 
  trigger('hoverImage' , [
    state('on', style ({
      transform: 'scale(1.08)'
    })),
    state('off', style ({
      transform: 'scale(1)'
    })),
    transition('on => off', animate('700ms ease-in')),
    transition('off => on', animate('700ms ease-out'))
  ]);


export const dropDownAnimation =[
  trigger('menuClick', [
    state('on', style ({
      display: 'block'
    })),
    state('off', style ({
      display: 'none'
    })),
      transition('on => off', [
        animate('10ms ease-out')
      ]),
      transition('off => on', [
        style({transform: 'translateY(5%)'}),
        animate('1000ms ease-out')
      ])
  ])
]

export const featuredTextAnimation =[
  trigger('showFeaturedText', [
    state('on', style ({
      opacity: '1'
    })),
    state('off', style ({
      opacity: '0'
    })),
      transition('on => off', [
        animate('10ms ease-out')
      ]),
      transition('off => on', [
        style({transform: 'translateX(-5%)'}),
        animate('500ms ease-out')
      ])
  ])
]

export const featuredImageAnimation =[
  trigger('showFeaturedImage', [
    state('on', style ({
      opacity: '1'
    })),
    state('off', style ({
      opacity: '0'
    })),
      transition('on => off', [
        animate('10ms ease-out')
      ]),
      transition('off => on', [
        style({transform: 'translateX(5%)'}),
        animate('500ms ease-out')
      ])
  ])
]


export const clientAnimation =[
  trigger('clientAnimation', [
    state('on', style ({
      opacity: '1'
    })),
    state('off', style ({
      opacity: '0'
    })),
      transition('on => off', [
        style({transform: 'translateX(-25%)'}),
        animate('1500ms ease-out')
      ]),
      transition('off => on', [
        animate('1000ms ease-out')
      ])
  ])
]


export const mainPromoTextAnimation =[
  trigger('showText', [
    state('on', style ({
      display: 'block'
    })),
    state('off', style ({
      display: 'none'
    })),
      transition('on => off', [
        animate('10ms ease-out')
      ]),
      transition('off => on', [
        style({transform: 'translateY(3%)', opacity:'0.1'}),
        animate('1000ms ease-out')
      ])
  ])
]

export const imageDialogAnimation =[
  trigger('hoverImage2', [
    state('on', style ({
      display: 'block'
    })),
    state('off', style ({
      display: 'none'
    })),
      transition('on => off', [
        animate('10ms ease-out')
      ]),
      transition('off => on', [
        style({transform: 'translateY(50%)'}),
        animate('500ms ease-out')
      ])
  ])
]

export const imageDialogButtonAnimation =[
  trigger('changeColor', [
    state('true', style ({
      'background-color' : 'white'
    })),
    state('false', style ({
      'background-color' : 'black'
    })),
      transition('true => false', [
        animate('10ms ease-out')
      ]),
      transition('false => true', [
        animate('500ms ease-out')
      ])
  ])
]

