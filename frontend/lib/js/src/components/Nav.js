// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Link = require("./Link.js");
var Utils = require("../Utils.js");
var React = require("react");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");

var feedRoute = /* :: */[
  "link",
  /* :: */[
    "dim",
    /* :: */[
      "black",
      /* :: */[
        "b",
        /* :: */[
          "f6",
          /* :: */[
            "f5-ns",
            /* :: */[
              "dib",
              /* :: */[
                "mr3",
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var draftsRoute = /* :: */[
  "link",
  /* :: */[
    "dim",
    /* :: */[
      "f6",
      /* :: */[
        "f5-ns",
        /* :: */[
          "dib",
          /* :: */[
            "mr3",
            /* :: */[
              "black",
              /* [] */0
            ]
          ]
        ]
      ]
    ]
  ]
];

var createRoute = /* :: */[
  "f6",
  /* :: */[
    "link",
    /* :: */[
      "dim",
      /* :: */[
        "br1",
        /* :: */[
          "ba",
          /* :: */[
            "ph3",
            /* :: */[
              "pv2",
              /* :: */[
                "fr",
                /* :: */[
                  "mb2",
                  /* :: */[
                    "dib",
                    /* :: */[
                      "black",
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var Styles_000 = /* nav : :: */[
  "pa3",
  /* :: */[
    "pa4-ns",
    /* [] */0
  ]
];

var Styles = /* module */[
  Styles_000,
  /* feedRoute */feedRoute,
  /* draftsRoute */draftsRoute,
  /* createRoute */createRoute
];

var component = ReasonReact.statelessComponent("Nav");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("nav", {
                  className: "pa3 pa4-ns"
                }, ReasonReact.element(/* None */0, /* None */0, Link.make("/", Utils.makeCls(feedRoute), /* array */[Utils.ste("Feed")])), ReasonReact.element(/* None */0, /* None */0, Link.make("drafts", Utils.makeCls(draftsRoute), /* array */[Utils.ste("Drafts")])), ReasonReact.element(/* None */0, /* None */0, Link.make("create", Utils.makeCls(createRoute), /* array */[Utils.ste("+ Create Draft")])));
    });
  return newrecord;
}

exports.Styles = Styles;
exports.component = component;
exports.make = make;
/* component Not a pure module */
