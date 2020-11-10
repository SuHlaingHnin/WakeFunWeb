window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AchData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "60adaibkWpPEZFEHFiqBa1y", "AchData");
    "use strict";
    var Achievement = require("./models/Achievement");
    var PersonInfo = require("./models/PersonInfo");
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        var _this = this;
        this.achList = Achievement.achievementList;
        console.log(this.node.name);
        var index = parseInt(this.node.name);
        this.label = this.node.getChildByName("label").getComponent(cc.Label);
        this.label.string = this.achList[index].name;
        this.btnAch = this.node.getChildByName("btn_ach").getComponent(cc.Button);
        this.achRewardPanel = cc.find(ACHIEVEMENT_PANEL.ACH_REWARD_PANEL);
        this.rewardLabel = this.achRewardPanel.getChildByName("lbl_Z").getComponent(cc.Label);
        this.closeRewardPanel = this.achRewardPanel.getChildByName("overlay");
        this.btnAch.node.on("touchend", function() {
          _this.rewardLabel.string = "";
          _this.rewardLabel.string = _this.achList[index].name;
          _this.share();
        }, this);
        this.closeRewardPanel.on("touchstart", function() {
          _this.showHideAchRewardPanel();
        }, this);
      },
      showHideAchRewardPanel: function showHideAchRewardPanel() {
        this.achRewardPanel.active = !this.achRewardPanel.active;
      },
      share: function share() {
        var share_string = "https://www.youtube.com/watch?v=1KqQQHpQc8w&list=RDO3M8zZFF0WM&index=9";
        cc.sys.openURL("http://www.facebook.com/sharer.php?u=" + share_string);
      }
    });
    cc._RF.pop();
  }, {
    "./models/Achievement": "Achievement",
    "./models/PersonInfo": "PersonInfo"
  } ],
  AchievementManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "35becuhO5NJs4QmOQ6Wzv/u", "AchievementManager");
    "use strict";
    var Achievement = require("./models/Achievement");
    var self;
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        self = this;
        this.achContainer = cc.find(ACHIEVEMENT_PANEL.ACH_CONTAINER);
        this.achList = Achievement.achievementList;
        var _achievement;
        for (var i = 0; i < this.achList.length; i++) cc.loader.loadRes("prefabs/Achievement", cc.Prefab, function(err, prefab) {
          _achievement = cc.instantiate(prefab);
          self.achContainer.addChild(_achievement);
          _achievement.name = (self.achContainer.children.length - 1).toString();
          _achievement.addComponent("AchData");
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    "./models/Achievement": "Achievement"
  } ],
  Achievement: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62ee5W9D9dBi5orMLxDV3lb", "Achievement");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var Achievement = function() {
      var instance;
      function init() {
        var achievement = {
          id: "",
          name: "",
          date: "",
          point: 0
        };
        var achievementList = [ {
          id: "_gjb60lwpi",
          name: "\u6210\u5c31\u540d\u7a31",
          date: "1/8/2020",
          point: 100
        }, {
          id: "_gjb60lwpa",
          name: "\u6210\u5c31\u540d\u7a31",
          date: "20/8/2020",
          point: 200
        }, {
          id: "_gjb60lwpb",
          name: "\u6210\u5c31\u540d\u7a31",
          date: "21/8/2020",
          point: 100
        } ];
        return {
          initAchievementData: function initAchievementData() {
            var _achievement1 = this.getAchievementByDate("18/7/2020");
            _achievement1.name = "\u6210\u5c31\u540d\u7a31";
            _achievement1.point = 100;
            console.log("0 : " + achievementList[0].name);
            var _achievement2 = this.getAchievementByDate("19/7/2020");
            _achievement2.name = "\u6210\u5c31\u540d\u7a31";
            _achievement2.point = 200;
            console.log("1 : " + achievementList[1].name);
            var _achievement3 = this.getAchievementByDate("20/7/2020");
            _achievement3.name = "\u6210\u5c31\u540d\u7a31";
            _achievement3.point = 300;
          },
          consoleArray: function consoleArray() {
            for (var i = 0; i < achievementList.length; i++) {
              console.log("ACH Name : " + achievementList[i].name);
              console.log(i);
            }
          },
          getAchievementByDate: function getAchievementByDate(date) {
            var _achievement;
            for (var i = 0; i < achievementList.length; i++) {
              _achievement = achievementList[i];
              if (date == _achievement.date) return _achievement;
            }
            return null;
          },
          getNewAchievement: function getNewAchievement(date) {
            var _achievement = achievement;
            _achievement.id = this.getRandomID(achievementList);
            _achievement.date = date;
            this.addAchievement(_achievement);
            return _achievement;
          },
          addAchievement: function addAchievement(achievement) {
            achievementList[achievementList.length - 1] = achievement;
          },
          showAchievementData: function showAchievementData(achievement) {
            console.log("ID : " + achievement.id);
            console.log("Name : " + achievement.name);
            console.log("Date : " + achievement.date);
          },
          get achievementList() {
            return achievementList;
          },
          getRandomID: function getRandomID(list) {
            var counter = 0;
            var isDuplicate = false;
            var id = "_" + Math.random().toString(36).substr(2, 9);
            while (0 != list.length && counter < list.length) {
              if (id == list[counter].id) {
                console.log("Duplicate ID : " + id + ", " + list[counter].id);
                isDuplicate = true;
                id = "_" + Math.random().toString(36).substr(2, 9);
              }
              counter++;
            }
            if (!isDuplicate) {
              console.log("Unique ID : " + id);
              return id;
            }
          }
        };
      }
      return {
        getInstance: function getInstance() {
          instance || (instance = init());
          return instance;
        }
      };
    }();
    var instance = Achievement.getInstance();
    var _default = instance;
    exports["default"] = _default;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  Alarm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90497uxlZpFopQCr0BO02zL", "Alarm");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this._UIManager = cc.find("Canvas").getComponent("UIManager");
      },
      start: function start() {
        this.hourValue();
        this.minValue();
      },
      hourValue: function hourValue() {
        this.hourList = cc.find(PLAN_PANEL.HOUR_LIST).children;
        for (var i = 0; i < this.hourList.length; i++) {
          var pageList = this.hourList[i].children;
          for (var j = 0; j < pageList.length; j++) {
            pageList[j].on("mousedown", this.onClickHour, this);
            pageList[j].myParam = pageList[j].name;
          }
        }
      },
      minValue: function minValue() {
        this.minList = cc.find(PLAN_PANEL.MIN_LIST).children;
        for (var i = 0; i < this.minList.length; i++) {
          var pageList = this.minList[i].children;
          for (var j = 0; j < pageList.length; j++) {
            pageList[j].on("mousedown", this.onClickMin, this);
            pageList[j].myParam = pageList[j].name;
          }
        }
      },
      onClickHour: function onClickHour(event) {
        this._UIManager.lblHour.string = event.target.myParam;
        this._UIManager.hourPanel.active = false;
      },
      onClickMin: function onClickMin(event) {
        this._UIManager.lblMin.string = event.target.myParam;
        this._UIManager.minPanel.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  BookInfoManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "922e00BsdRBZ5YS3ivmQr64", "BookInfoManager");
    "use strict";
    var PowerLevel = require("./models/PowerLevel.js");
    var _require = require("console"), timeStamp = _require.timeStamp;
    var self;
    cc.Class({
      extends: cc.Component,
      properties: {},
      init: function init() {
        this.containerList = cc.find(BOOK_INFO.CONTAINER).children;
        this.lblTitle = cc.find(BOOK_INFO.LBL_TITLE).getComponent(cc.Label);
        this.btnArrowLeft = cc.find(BOOK_INFO.BTN_ARROW_L).getComponent(cc.Button);
        this.btnArrowRight = cc.find(BOOK_INFO.BTN_ARROW_R).getComponent(cc.Button);
      },
      instantiatePrefabs: function instantiatePrefabs() {
        for (var i = 0; i < this.containerList.length; i++) {
          var _powerLevel = PowerLevel.powerLevel;
          _powerLevel.id = (i + 1).toString();
          _powerLevel.itemCount = 10;
          PowerLevel.addPowerLevel(_powerLevel);
          this.containerList[i].addComponent("ItemController");
        }
      },
      addListeners: function addListeners() {
        this.btnArrowLeft.node.on("click", this.onClickedLeftArrow, this);
        this.btnArrowRight.node.on("click", this.onClickedRightArrow, this);
      },
      onLoad: function onLoad() {
        self = this;
        this.currentContainer = 0;
        this.powerLables = [ "\u9664\u7f6a\u529b", "\u617e\u671b\u529b", "\u5373\u884c\u529b", "\u81ea\u5f8b\u529b", "\u751f\u5b58\u529b", "\u6368\u96e2\u529b", "\u975c\u7c21\u529b", "\u63a5\u53d7\u529b", "\u81ea\u4e3b\u529b", "\u81ea\u5728\u529b" ];
        this.init();
        this.instantiatePrefabs();
        this.addListeners();
        this.reset();
      },
      start: function start() {},
      hideAllContainers: function hideAllContainers() {
        for (var i = 0; i < this.containerList.length; i++) this.containerList[i].active = false;
      },
      reset: function reset() {
        console.log("BookInfoManager : reset()");
        this.currentContainer = 0;
        this.showContainer(this.currentContainer);
      },
      showContainer: function showContainer(index) {
        console.log("FUCKING PLANLIST " + index);
        this.hideAllContainers();
        this.containerList[index].active = true;
        this.lblTitle.string = this.powerLables[index] + " LV." + (index + 1);
      },
      onClickedLeftArrow: function onClickedLeftArrow() {
        this.currentContainer--;
        this.currentContainer < 0 && (this.currentContainer = this.containerList.length - 1);
        this.showContainer(this.currentContainer);
      },
      onClickedRightArrow: function onClickedRightArrow() {
        this.currentContainer++;
        this.currentContainer > this.containerList.length - 1 && (this.currentContainer = 0);
        this.showContainer(this.currentContainer);
      }
    });
    cc._RF.pop();
  }, {
    "./models/PowerLevel.js": "PowerLevel",
    console: 5
  } ],
  BookOverviewManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24b93PWHP1PTLSDi5sUt+nv", "BookOverviewManager");
    "use strict";
    var self;
    cc.Class({
      extends: cc.Component,
      properties: {},
      init: function init() {
        this.imgBackground = cc.find(IMG_BACKGROUND.IMG);
        this.levelContent = cc.find(BOOK_OVERVIEW.LEVEL_CONTENT);
        this.innerFlowers = cc.find(BOOK_OVERVIEW.INNER_FLOWERS).children;
        this.outerFlowers = cc.find(BOOK_OVERVIEW.OUTER_FLOWERS).children;
        this.lblPowerLevelList = cc.find(BOOK_OVERVIEW.LBL_POWER_LEVEL_LIST).children;
        this.btnPowerLevelList = cc.find(BOOK_OVERVIEW.BTN_POWER_LEVEL_LIST).children;
        this.lblButtonPLList = this.createLabelsFromBtnList(this.btnPowerLevelList);
        this.lblRed = cc.find(BOOK_OVERVIEW.LBL_RED).getComponent(cc.Label);
        this.lblCyan = cc.find(BOOK_OVERVIEW.LBL_CYAN).getComponent(cc.Label);
      },
      addListeners: function addListeners() {
        var _this = this;
        this.imgBackground.on("touchstart", function() {
          _this.levelContent.active = false;
        });
        this.lblRed.node.on("touchstart", function() {
          _this.showLevelContent(_this.lblRed);
        });
        this.lblCyan.node.on("touchstart", function() {
          _this.showLevelContent(_this.lblCyan);
        });
      },
      loadResources: function loadResources() {
        cc.loader.loadResDir(SPRITE.INNER_SPRITES, cc.SpriteFrame, function(err, assets) {
          self.assignInnerSprites(self.innerSprites, assets);
        });
        cc.loader.loadResDir(SPRITE.OUTER_SPRITES, cc.SpriteFrame, function(err, assets) {
          self.assignOuterSprites(self.outerSprites, assets);
        });
      },
      onLoad: function onLoad() {
        console.log("BookOverviewManager");
        self = this;
        this.innerSprites = this.make2DArray(CONST.POWER_LEVEL_COUNT, 6);
        this.outerSprites = this.make2DArray(CONST.POWER_LEVEL_COUNT, 5);
        this.init();
        this.addListeners();
        this.loadResources();
      },
      start: function start() {
        this.node.on("refresh-flowers", this.showFlowers);
        this.showBtnPowerLevelList();
        this.showLblPowerLevelList();
      },
      hideAllPanels: function hideAllPanels() {
        this.levelContent.active = false;
      },
      createLabelsFromBtnList: function createLabelsFromBtnList(btnNodeList) {
        var labels = [];
        for (var i = 0; i < btnNodeList.length; i++) labels[i] = btnNodeList[i].getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        return labels;
      },
      getTargetBtnPowerLevelList: function getTargetBtnPowerLevelList(event) {
        this.showLevelContent(event.currentTarget.myParam);
      },
      getTargetLblPowerLevelList: function getTargetLblPowerLevelList(event) {
        this.showLevelContent(event.currentTarget.myParam);
      },
      showLevelContent: function showLevelContent(button) {
        if (button.node.position.x < 0) {
          -481.835 == button.node.position.x || -476.647 == button.node.position.x ? this.levelContent.position = cc.v2(button.node.position.x + 100, button.node.position.y + 100) : -313.365 == button.node.position.x || -309.093 == button.node.position.x ? this.levelContent.position = cc.v2(button.node.position.x + 100, button.node.position.y + 200) : this.levelContent.position = cc.v2(button.node.position.x + 100, button.node.position.y);
          this.levelContent.active = !this.levelContent.active;
        } else if (button.node.position.x > 0) {
          333.915 == button.node.position.x || 337.02 == button.node.position.x ? this.levelContent.position = cc.v2(button.node.position.x - 100, button.node.position.y + 100) : 165 == button.node.position.x || 170.434 == button.node.position.x ? this.levelContent.position = cc.v2(button.node.position.x - 100, button.node.position.y + 200) : this.levelContent.position = cc.v2(button.node.position.x - 100, button.node.position.y);
          this.levelContent.active = !this.levelContent.active;
        }
      },
      showBtnPowerLevelList: function showBtnPowerLevelList() {
        for (var i = 0; i < this.btnPowerLevelList.length; i++) {
          this.btnPowerLevelList[i].on("touchstart", this.getTargetBtnPowerLevelList, this);
          this.btnPowerLevelList[i].myParam = this.btnPowerLevelList[i].getComponent(cc.Button);
        }
      },
      showLblPowerLevelList: function showLblPowerLevelList() {
        for (var i = 0; i < this.lblPowerLevelList.length; i++) {
          this.lblPowerLevelList[i].on("touchstart", this.getTargetLblPowerLevelList, this);
          this.lblPowerLevelList[i].myParam = this.lblPowerLevelList[i].getComponent(cc.Label);
        }
        this.refreshLblButtonPLList(-1);
      },
      refreshLblButtonPLList: function refreshLblButtonPLList(index) {
        if (-1 != index) {
          console.log("Index Exist!" + index);
          this.lblButtonPLList[index].string = "Lv." + CONST.POWER_LEVEL_ITEMS[index];
          return;
        }
        for (var i = 0; i < this.lblPowerLevelList.length; i++) this.lblButtonPLList[i].string = "Lv." + CONST.POWER_LEVEL_ITEMS[i];
      },
      assignInnerSprites: function assignInnerSprites(parentArray, assets) {
        var counter = 0;
        for (var i = 0; i < parentArray.length; i++) for (var j = 0; j < parentArray[i].length; j++) {
          if (counter > assets.length - 1) return;
          parentArray[i][j] = assets[counter];
          counter++;
        }
        this.resetInnerFlowers();
      },
      assignOuterSprites: function assignOuterSprites(parentArray, assets) {
        console.log("assignOuterSprites------");
        var counter = 0;
        for (var i = 0; i < parentArray.length; i++) for (var j = 0; j < parentArray[i].length; j++) {
          if (counter > assets.length - 1) {
            console.log("Return???");
            return;
          }
          parentArray[i][j] = assets[counter];
          counter++;
        }
      },
      make2DArray: function make2DArray(length1, length2) {
        var array = new Array(length1);
        for (var i = 0; i < array.length; i++) array[i] = new Array(length2);
        return array;
      },
      reset: function reset() {},
      resetInnerFlowers: function resetInnerFlowers() {
        for (var i = 0; i < 10; i++) this.innerFlowers[i].getComponent(cc.Sprite).spriteFrame = this.innerSprites[i][0];
      },
      showFlowers: function showFlowers(index) {
        var secondIndex = CONST.POWER_LEVEL_ITEMS[index];
        if (secondIndex < 0) return;
        if (secondIndex < 6) this.innerFlowers[index].getComponent(cc.Sprite).spriteFrame = this.innerSprites[index][secondIndex]; else {
          var tempIndex = secondIndex - 6;
          this.outerFlowers[index].getComponent(cc.Sprite).spriteFrame = this.outerSprites[index][tempIndex];
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  1: [ function(require, module, exports) {
    var util = require("util/");
    var pSlice = Array.prototype.slice;
    var hasOwn = Object.prototype.hasOwnProperty;
    var assert = module.exports = ok;
    assert.AssertionError = function AssertionError(options) {
      this.name = "AssertionError";
      this.actual = options.actual;
      this.expected = options.expected;
      this.operator = options.operator;
      if (options.message) {
        this.message = options.message;
        this.generatedMessage = false;
      } else {
        this.message = getMessage(this);
        this.generatedMessage = true;
      }
      var stackStartFunction = options.stackStartFunction || fail;
      if (Error.captureStackTrace) Error.captureStackTrace(this, stackStartFunction); else {
        var err = new Error();
        if (err.stack) {
          var out = err.stack;
          var fn_name = stackStartFunction.name;
          var idx = out.indexOf("\n" + fn_name);
          if (idx >= 0) {
            var next_line = out.indexOf("\n", idx + 1);
            out = out.substring(next_line + 1);
          }
          this.stack = out;
        }
      }
    };
    util.inherits(assert.AssertionError, Error);
    function replacer(key, value) {
      if (util.isUndefined(value)) return "" + value;
      if (util.isNumber(value) && !isFinite(value)) return value.toString();
      if (util.isFunction(value) || util.isRegExp(value)) return value.toString();
      return value;
    }
    function truncate(s, n) {
      return util.isString(s) ? s.length < n ? s : s.slice(0, n) : s;
    }
    function getMessage(self) {
      return truncate(JSON.stringify(self.actual, replacer), 128) + " " + self.operator + " " + truncate(JSON.stringify(self.expected, replacer), 128);
    }
    function fail(actual, expected, message, operator, stackStartFunction) {
      throw new assert.AssertionError({
        message: message,
        actual: actual,
        expected: expected,
        operator: operator,
        stackStartFunction: stackStartFunction
      });
    }
    assert.fail = fail;
    function ok(value, message) {
      value || fail(value, true, message, "==", assert.ok);
    }
    assert.ok = ok;
    assert.equal = function equal(actual, expected, message) {
      actual != expected && fail(actual, expected, message, "==", assert.equal);
    };
    assert.notEqual = function notEqual(actual, expected, message) {
      actual == expected && fail(actual, expected, message, "!=", assert.notEqual);
    };
    assert.deepEqual = function deepEqual(actual, expected, message) {
      _deepEqual(actual, expected) || fail(actual, expected, message, "deepEqual", assert.deepEqual);
    };
    function _deepEqual(actual, expected) {
      if (actual === expected) return true;
      if (util.isBuffer(actual) && util.isBuffer(expected)) {
        if (actual.length != expected.length) return false;
        for (var i = 0; i < actual.length; i++) if (actual[i] !== expected[i]) return false;
        return true;
      }
      return util.isDate(actual) && util.isDate(expected) ? actual.getTime() === expected.getTime() : util.isRegExp(actual) && util.isRegExp(expected) ? actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase : util.isObject(actual) || util.isObject(expected) ? objEquiv(actual, expected) : actual == expected;
    }
    function isArguments(object) {
      return "[object Arguments]" == Object.prototype.toString.call(object);
    }
    function objEquiv(a, b) {
      if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b)) return false;
      if (a.prototype !== b.prototype) return false;
      if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
      var aIsArgs = isArguments(a), bIsArgs = isArguments(b);
      if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;
      if (aIsArgs) {
        a = pSlice.call(a);
        b = pSlice.call(b);
        return _deepEqual(a, b);
      }
      var ka = objectKeys(a), kb = objectKeys(b), key, i;
      if (ka.length != kb.length) return false;
      ka.sort();
      kb.sort();
      for (i = ka.length - 1; i >= 0; i--) if (ka[i] != kb[i]) return false;
      for (i = ka.length - 1; i >= 0; i--) {
        key = ka[i];
        if (!_deepEqual(a[key], b[key])) return false;
      }
      return true;
    }
    assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
      _deepEqual(actual, expected) && fail(actual, expected, message, "notDeepEqual", assert.notDeepEqual);
    };
    assert.strictEqual = function strictEqual(actual, expected, message) {
      actual !== expected && fail(actual, expected, message, "===", assert.strictEqual);
    };
    assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
      actual === expected && fail(actual, expected, message, "!==", assert.notStrictEqual);
    };
    function expectedException(actual, expected) {
      if (!actual || !expected) return false;
      if ("[object RegExp]" == Object.prototype.toString.call(expected)) return expected.test(actual);
      if (actual instanceof expected) return true;
      if (true === expected.call({}, actual)) return true;
      return false;
    }
    function _throws(shouldThrow, block, expected, message) {
      var actual;
      if (util.isString(expected)) {
        message = expected;
        expected = null;
      }
      try {
        block();
      } catch (e) {
        actual = e;
      }
      message = (expected && expected.name ? " (" + expected.name + ")." : ".") + (message ? " " + message : ".");
      shouldThrow && !actual && fail(actual, expected, "Missing expected exception" + message);
      !shouldThrow && expectedException(actual, expected) && fail(actual, expected, "Got unwanted exception" + message);
      if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) throw actual;
    }
    assert.throws = function(block, error, message) {
      _throws.apply(this, [ true ].concat(pSlice.call(arguments)));
    };
    assert.doesNotThrow = function(block, message) {
      _throws.apply(this, [ false ].concat(pSlice.call(arguments)));
    };
    assert.ifError = function(err) {
      if (err) throw err;
    };
    var objectKeys = Object.keys || function(obj) {
      var keys = [];
      for (var key in obj) hasOwn.call(obj, key) && keys.push(key);
      return keys;
    };
  }, {
    "util/": 4
  } ],
  2: [ function(require, module, exports) {
    "function" === typeof Object.create ? module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    } : module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }, {} ],
  3: [ function(require, module, exports) {
    module.exports = function isBuffer(arg) {
      return arg && "object" === typeof arg && "function" === typeof arg.copy && "function" === typeof arg.fill && "function" === typeof arg.readUInt8;
    };
  }, {} ],
  4: [ function(require, module, exports) {
    (function(process, global) {
      var formatRegExp = /%[sdj%]/g;
      exports.format = function(f) {
        if (!isString(f)) {
          var objects = [];
          for (var i = 0; i < arguments.length; i++) objects.push(inspect(arguments[i]));
          return objects.join(" ");
        }
        var i = 1;
        var args = arguments;
        var len = args.length;
        var str = String(f).replace(formatRegExp, function(x) {
          if ("%%" === x) return "%";
          if (i >= len) return x;
          switch (x) {
           case "%s":
            return String(args[i++]);

           case "%d":
            return Number(args[i++]);

           case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }

           default:
            return x;
          }
        });
        for (var x = args[i]; i < len; x = args[++i]) isNull(x) || !isObject(x) ? str += " " + x : str += " " + inspect(x);
        return str;
      };
      exports.deprecate = function(fn, msg) {
        if (isUndefined(global.process)) return function() {
          return exports.deprecate(fn, msg).apply(this, arguments);
        };
        if (true === process.noDeprecation) return fn;
        var warned = false;
        function deprecated() {
          if (!warned) {
            if (process.throwDeprecation) throw new Error(msg);
            process.traceDeprecation ? console.trace(msg) : console.error(msg);
            warned = true;
          }
          return fn.apply(this, arguments);
        }
        return deprecated;
      };
      var debugs = {};
      var debugEnviron;
      exports.debuglog = function(set) {
        isUndefined(debugEnviron) && (debugEnviron = process.env.NODE_DEBUG || "");
        set = set.toUpperCase();
        if (!debugs[set]) if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
          var pid = process.pid;
          debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error("%s %d: %s", set, pid, msg);
          };
        } else debugs[set] = function() {};
        return debugs[set];
      };
      function inspect(obj, opts) {
        var ctx = {
          seen: [],
          stylize: stylizeNoColor
        };
        arguments.length >= 3 && (ctx.depth = arguments[2]);
        arguments.length >= 4 && (ctx.colors = arguments[3]);
        isBoolean(opts) ? ctx.showHidden = opts : opts && exports._extend(ctx, opts);
        isUndefined(ctx.showHidden) && (ctx.showHidden = false);
        isUndefined(ctx.depth) && (ctx.depth = 2);
        isUndefined(ctx.colors) && (ctx.colors = false);
        isUndefined(ctx.customInspect) && (ctx.customInspect = true);
        ctx.colors && (ctx.stylize = stylizeWithColor);
        return formatValue(ctx, obj, ctx.depth);
      }
      exports.inspect = inspect;
      inspect.colors = {
        bold: [ 1, 22 ],
        italic: [ 3, 23 ],
        underline: [ 4, 24 ],
        inverse: [ 7, 27 ],
        white: [ 37, 39 ],
        grey: [ 90, 39 ],
        black: [ 30, 39 ],
        blue: [ 34, 39 ],
        cyan: [ 36, 39 ],
        green: [ 32, 39 ],
        magenta: [ 35, 39 ],
        red: [ 31, 39 ],
        yellow: [ 33, 39 ]
      };
      inspect.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red"
      };
      function stylizeWithColor(str, styleType) {
        var style = inspect.styles[styleType];
        return style ? "\x1b[" + inspect.colors[style][0] + "m" + str + "\x1b[" + inspect.colors[style][1] + "m" : str;
      }
      function stylizeNoColor(str, styleType) {
        return str;
      }
      function arrayToHash(array) {
        var hash = {};
        array.forEach(function(val, idx) {
          hash[val] = true;
        });
        return hash;
      }
      function formatValue(ctx, value, recurseTimes) {
        if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
          var ret = value.inspect(recurseTimes, ctx);
          isString(ret) || (ret = formatValue(ctx, ret, recurseTimes));
          return ret;
        }
        var primitive = formatPrimitive(ctx, value);
        if (primitive) return primitive;
        var keys = Object.keys(value);
        var visibleKeys = arrayToHash(keys);
        ctx.showHidden && (keys = Object.getOwnPropertyNames(value));
        if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) return formatError(value);
        if (0 === keys.length) {
          if (isFunction(value)) {
            var name = value.name ? ": " + value.name : "";
            return ctx.stylize("[Function" + name + "]", "special");
          }
          if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), "date");
          if (isError(value)) return formatError(value);
        }
        var base = "", array = false, braces = [ "{", "}" ];
        if (isArray(value)) {
          array = true;
          braces = [ "[", "]" ];
        }
        if (isFunction(value)) {
          var n = value.name ? ": " + value.name : "";
          base = " [Function" + n + "]";
        }
        isRegExp(value) && (base = " " + RegExp.prototype.toString.call(value));
        isDate(value) && (base = " " + Date.prototype.toUTCString.call(value));
        isError(value) && (base = " " + formatError(value));
        if (0 === keys.length && (!array || 0 == value.length)) return braces[0] + base + braces[1];
        if (recurseTimes < 0) return isRegExp(value) ? ctx.stylize(RegExp.prototype.toString.call(value), "regexp") : ctx.stylize("[Object]", "special");
        ctx.seen.push(value);
        var output;
        output = array ? formatArray(ctx, value, recurseTimes, visibleKeys, keys) : keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
        ctx.seen.pop();
        return reduceToSingleString(output, base, braces);
      }
      function formatPrimitive(ctx, value) {
        if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
        if (isString(value)) {
          var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return ctx.stylize(simple, "string");
        }
        if (isNumber(value)) return ctx.stylize("" + value, "number");
        if (isBoolean(value)) return ctx.stylize("" + value, "boolean");
        if (isNull(value)) return ctx.stylize("null", "null");
      }
      function formatError(value) {
        return "[" + Error.prototype.toString.call(value) + "]";
      }
      function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
        var output = [];
        for (var i = 0, l = value.length; i < l; ++i) hasOwnProperty(value, String(i)) ? output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true)) : output.push("");
        keys.forEach(function(key) {
          key.match(/^\d+$/) || output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        });
        return output;
      }
      function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
        var name, str, desc;
        desc = Object.getOwnPropertyDescriptor(value, key) || {
          value: value[key]
        };
        desc.get ? str = desc.set ? ctx.stylize("[Getter/Setter]", "special") : ctx.stylize("[Getter]", "special") : desc.set && (str = ctx.stylize("[Setter]", "special"));
        hasOwnProperty(visibleKeys, key) || (name = "[" + key + "]");
        if (!str) if (ctx.seen.indexOf(desc.value) < 0) {
          str = isNull(recurseTimes) ? formatValue(ctx, desc.value, null) : formatValue(ctx, desc.value, recurseTimes - 1);
          str.indexOf("\n") > -1 && (str = array ? str.split("\n").map(function(line) {
            return "  " + line;
          }).join("\n").substr(2) : "\n" + str.split("\n").map(function(line) {
            return "   " + line;
          }).join("\n"));
        } else str = ctx.stylize("[Circular]", "special");
        if (isUndefined(name)) {
          if (array && key.match(/^\d+$/)) return str;
          name = JSON.stringify("" + key);
          if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, "name");
          } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, "string");
          }
        }
        return name + ": " + str;
      }
      function reduceToSingleString(output, base, braces) {
        var numLinesEst = 0;
        var length = output.reduce(function(prev, cur) {
          numLinesEst++;
          cur.indexOf("\n") >= 0 && numLinesEst++;
          return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        if (length > 60) return braces[0] + ("" === base ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
        return braces[0] + base + " " + output.join(", ") + " " + braces[1];
      }
      function isArray(ar) {
        return Array.isArray(ar);
      }
      exports.isArray = isArray;
      function isBoolean(arg) {
        return "boolean" === typeof arg;
      }
      exports.isBoolean = isBoolean;
      function isNull(arg) {
        return null === arg;
      }
      exports.isNull = isNull;
      function isNullOrUndefined(arg) {
        return null == arg;
      }
      exports.isNullOrUndefined = isNullOrUndefined;
      function isNumber(arg) {
        return "number" === typeof arg;
      }
      exports.isNumber = isNumber;
      function isString(arg) {
        return "string" === typeof arg;
      }
      exports.isString = isString;
      function isSymbol(arg) {
        return "symbol" === typeof arg;
      }
      exports.isSymbol = isSymbol;
      function isUndefined(arg) {
        return void 0 === arg;
      }
      exports.isUndefined = isUndefined;
      function isRegExp(re) {
        return isObject(re) && "[object RegExp]" === objectToString(re);
      }
      exports.isRegExp = isRegExp;
      function isObject(arg) {
        return "object" === typeof arg && null !== arg;
      }
      exports.isObject = isObject;
      function isDate(d) {
        return isObject(d) && "[object Date]" === objectToString(d);
      }
      exports.isDate = isDate;
      function isError(e) {
        return isObject(e) && ("[object Error]" === objectToString(e) || e instanceof Error);
      }
      exports.isError = isError;
      function isFunction(arg) {
        return "function" === typeof arg;
      }
      exports.isFunction = isFunction;
      function isPrimitive(arg) {
        return null === arg || "boolean" === typeof arg || "number" === typeof arg || "string" === typeof arg || "symbol" === typeof arg || "undefined" === typeof arg;
      }
      exports.isPrimitive = isPrimitive;
      exports.isBuffer = require("./support/isBuffer");
      function objectToString(o) {
        return Object.prototype.toString.call(o);
      }
      function pad(n) {
        return n < 10 ? "0" + n.toString(10) : n.toString(10);
      }
      var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
      function timestamp() {
        var d = new Date();
        var time = [ pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds()) ].join(":");
        return [ d.getDate(), months[d.getMonth()], time ].join(" ");
      }
      exports.log = function() {
        console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
      };
      exports.inherits = require("inherits");
      exports._extend = function(origin, add) {
        if (!add || !isObject(add)) return origin;
        var keys = Object.keys(add);
        var i = keys.length;
        while (i--) origin[keys[i]] = add[keys[i]];
        return origin;
      };
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
    }).call(this, require("_process"), "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    "./support/isBuffer": 3,
    _process: 6,
    inherits: 2
  } ],
  5: [ function(require, module, exports) {
    (function(global) {
      var util = require("util");
      var assert = require("assert");
      function now() {
        return new Date().getTime();
      }
      var slice = Array.prototype.slice;
      var console;
      var times = {};
      console = "undefined" !== typeof global && global.console ? global.console : "undefined" !== typeof window && window.console ? window.console : {};
      var functions = [ [ log, "log" ], [ info, "info" ], [ warn, "warn" ], [ error, "error" ], [ time, "time" ], [ timeEnd, "timeEnd" ], [ trace, "trace" ], [ dir, "dir" ], [ consoleAssert, "assert" ] ];
      for (var i = 0; i < functions.length; i++) {
        var tuple = functions[i];
        var f = tuple[0];
        var name = tuple[1];
        console[name] || (console[name] = f);
      }
      module.exports = console;
      function log() {}
      function info() {
        console.log.apply(console, arguments);
      }
      function warn() {
        console.log.apply(console, arguments);
      }
      function error() {
        console.warn.apply(console, arguments);
      }
      function time(label) {
        times[label] = now();
      }
      function timeEnd(label) {
        var time = times[label];
        if (!time) throw new Error("No such label: " + label);
        delete times[label];
        var duration = now() - time;
        console.log(label + ": " + duration + "ms");
      }
      function trace() {
        var err = new Error();
        err.name = "Trace";
        err.message = util.format.apply(null, arguments);
        console.error(err.stack);
      }
      function dir(object) {
        console.log(util.inspect(object) + "\n");
      }
      function consoleAssert(expression) {
        if (!expression) {
          var arr = slice.call(arguments, 1);
          assert.ok(false, util.format.apply(null, arr));
        }
      }
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    assert: 1,
    util: 9
  } ],
  6: [ function(require, module, exports) {
    var process = module.exports = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
      throw new Error("clearTimeout has not been defined");
    }
    (function() {
      try {
        cachedSetTimeout = "function" === typeof setTimeout ? setTimeout : defaultSetTimout;
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        cachedClearTimeout = "function" === typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
    })();
    function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
      }
      try {
        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
          return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
          return cachedSetTimeout.call(this, fun, 0);
        }
      }
    }
    function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
      }
      try {
        return cachedClearTimeout(marker);
      } catch (e) {
        try {
          return cachedClearTimeout.call(null, marker);
        } catch (e) {
          return cachedClearTimeout.call(this, marker);
        }
      }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
      if (!draining || !currentQueue) return;
      draining = false;
      currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1;
      queue.length && drainQueue();
    }
    function drainQueue() {
      if (draining) return;
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;
      while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) currentQueue && currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
    }
    process.nextTick = function(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
      queue.push(new Item(fun, args));
      1 !== queue.length || draining || runTimeout(drainQueue);
    };
    function Item(fun, array) {
      this.fun = fun;
      this.array = array;
    }
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    process.title = "browser";
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = "";
    process.versions = {};
    function noop() {}
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;
    process.listeners = function(name) {
      return [];
    };
    process.binding = function(name) {
      throw new Error("process.binding is not supported");
    };
    process.cwd = function() {
      return "/";
    };
    process.chdir = function(dir) {
      throw new Error("process.chdir is not supported");
    };
    process.umask = function() {
      return 0;
    };
  }, {} ],
  7: [ function(require, module, exports) {
    arguments[4][2][0].apply(exports, arguments);
  }, {
    dup: 2
  } ],
  8: [ function(require, module, exports) {
    arguments[4][3][0].apply(exports, arguments);
  }, {
    dup: 3
  } ],
  9: [ function(require, module, exports) {
    arguments[4][4][0].apply(exports, arguments);
  }, {
    "./support/isBuffer": 8,
    _process: 6,
    dup: 4,
    inherits: 7
  } ],
  10: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tslib = require("tslib");
    var util = require("@firebase/util");
    var component = require("@firebase/component");
    var logger$1 = require("@firebase/logger");
    var _a;
    var ERRORS = (_a = {}, _a["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()", 
    _a["bad-app-name"] = "Illegal App name: '{$appName}", _a["duplicate-app"] = "Firebase App named '{$appName}' already exists", 
    _a["app-deleted"] = "Firebase App named '{$appName}' already deleted", _a["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", 
    _a["invalid-log-argument"] = "First argument to `onLog` must be null or a function.", 
    _a);
    var ERROR_FACTORY = new util.ErrorFactory("app", "Firebase", ERRORS);
    var name$1 = "@firebase/app";
    var version = "0.6.11";
    var name$2 = "@firebase/analytics";
    var name$3 = "@firebase/auth";
    var name$4 = "@firebase/database";
    var name$5 = "@firebase/functions";
    var name$6 = "@firebase/installations";
    var name$7 = "@firebase/messaging";
    var name$8 = "@firebase/performance";
    var name$9 = "@firebase/remote-config";
    var name$a = "@firebase/storage";
    var name$b = "@firebase/firestore";
    var name$c = "firebase-wrapper";
    var _a$1;
    var DEFAULT_ENTRY_NAME = "[DEFAULT]";
    var PLATFORM_LOG_STRING = (_a$1 = {}, _a$1[name$1] = "fire-core", _a$1[name$2] = "fire-analytics", 
    _a$1[name$3] = "fire-auth", _a$1[name$4] = "fire-rtdb", _a$1[name$5] = "fire-fn", 
    _a$1[name$6] = "fire-iid", _a$1[name$7] = "fire-fcm", _a$1[name$8] = "fire-perf", 
    _a$1[name$9] = "fire-rc", _a$1[name$a] = "fire-gcs", _a$1[name$b] = "fire-fst", 
    _a$1["fire-js"] = "fire-js", _a$1[name$c] = "fire-js-all", _a$1);
    var logger = new logger$1.Logger("@firebase/app");
    var FirebaseAppImpl = function() {
      function FirebaseAppImpl(options, config, firebase_) {
        var e_1, _a;
        var _this = this;
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ = config.automaticDataCollectionEnabled || false;
        this.options_ = util.deepCopy(options);
        this.container = new component.ComponentContainer(config.name);
        this._addComponent(new component.Component("app", function() {
          return _this;
        }, "PUBLIC"));
        try {
          for (var _b = tslib.__values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var component$1 = _c.value;
            this._addComponent(component$1);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            _c && !_c.done && (_a = _b.return) && _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function() {
          this.checkDestroyed_();
          return this.automaticDataCollectionEnabled_;
        },
        set: function(val) {
          this.checkDestroyed_();
          this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function() {
          this.checkDestroyed_();
          return this.name_;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function() {
          this.checkDestroyed_();
          return this.options_;
        },
        enumerable: false,
        configurable: true
      });
      FirebaseAppImpl.prototype.delete = function() {
        var _this = this;
        return new Promise(function(resolve) {
          _this.checkDestroyed_();
          resolve();
        }).then(function() {
          _this.firebase_.INTERNAL.removeApp(_this.name_);
          return Promise.all(_this.container.getProviders().map(function(provider) {
            return provider.delete();
          }));
        }).then(function() {
          _this.isDeleted_ = true;
        });
      };
      FirebaseAppImpl.prototype._getService = function(name, instanceIdentifier) {
        void 0 === instanceIdentifier && (instanceIdentifier = DEFAULT_ENTRY_NAME);
        this.checkDestroyed_();
        return this.container.getProvider(name).getImmediate({
          identifier: instanceIdentifier
        });
      };
      FirebaseAppImpl.prototype._removeServiceInstance = function(name, instanceIdentifier) {
        void 0 === instanceIdentifier && (instanceIdentifier = DEFAULT_ENTRY_NAME);
        this.container.getProvider(name).clearInstance(instanceIdentifier);
      };
      FirebaseAppImpl.prototype._addComponent = function(component) {
        try {
          this.container.addComponent(component);
        } catch (e) {
          logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
        }
      };
      FirebaseAppImpl.prototype._addOrOverwriteComponent = function(component) {
        this.container.addOrOverwriteComponent(component);
      };
      FirebaseAppImpl.prototype.checkDestroyed_ = function() {
        if (this.isDeleted_) throw ERROR_FACTORY.create("app-deleted", {
          appName: this.name_
        });
      };
      return FirebaseAppImpl;
    }();
    FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype.delete || console.log("dc");
    var version$1 = "7.20.0";
    function createFirebaseNamespaceCore(firebaseAppImpl) {
      var apps = {};
      var components = new Map();
      var namespace = {
        __esModule: true,
        initializeApp: initializeApp,
        app: app,
        registerVersion: registerVersion,
        setLogLevel: logger$1.setLogLevel,
        onLog: onLog,
        apps: null,
        SDK_VERSION: version$1,
        INTERNAL: {
          registerComponent: registerComponent,
          removeApp: removeApp,
          components: components,
          useAsService: useAsService
        }
      };
      namespace["default"] = namespace;
      Object.defineProperty(namespace, "apps", {
        get: getApps
      });
      function removeApp(name) {
        delete apps[name];
      }
      function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!util.contains(apps, name)) throw ERROR_FACTORY.create("no-app", {
          appName: name
        });
        return apps[name];
      }
      app["App"] = firebaseAppImpl;
      function initializeApp(options, rawConfig) {
        void 0 === rawConfig && (rawConfig = {});
        if ("object" !== typeof rawConfig || null === rawConfig) {
          var name_1 = rawConfig;
          rawConfig = {
            name: name_1
          };
        }
        var config = rawConfig;
        void 0 === config.name && (config.name = DEFAULT_ENTRY_NAME);
        var name = config.name;
        if ("string" !== typeof name || !name) throw ERROR_FACTORY.create("bad-app-name", {
          appName: String(name)
        });
        if (util.contains(apps, name)) throw ERROR_FACTORY.create("duplicate-app", {
          appName: name
        });
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        return app;
      }
      function getApps() {
        return Object.keys(apps).map(function(name) {
          return apps[name];
        });
      }
      function registerComponent(component) {
        var e_1, _a;
        var componentName = component.name;
        if (components.has(componentName)) {
          logger.debug("There were multiple attempts to register component " + componentName + ".");
          return "PUBLIC" === component.type ? namespace[componentName] : null;
        }
        components.set(componentName, component);
        if ("PUBLIC" === component.type) {
          var serviceNamespace = function(appArg) {
            void 0 === appArg && (appArg = app());
            if ("function" !== typeof appArg[componentName]) throw ERROR_FACTORY.create("invalid-app-argument", {
              appName: componentName
            });
            return appArg[componentName]();
          };
          void 0 !== component.serviceProps && util.deepExtend(serviceNamespace, component.serviceProps);
          namespace[componentName] = serviceNamespace;
          firebaseAppImpl.prototype[componentName] = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
            var serviceFxn = this._getService.bind(this, componentName);
            return serviceFxn.apply(this, component.multipleInstances ? args : []);
          };
        }
        try {
          for (var _b = tslib.__values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var appName = _c.value;
            apps[appName]._addComponent(component);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            _c && !_c.done && (_a = _b.return) && _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return "PUBLIC" === component.type ? namespace[componentName] : null;
      }
      function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        var library = null !== (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) && void 0 !== _a ? _a : libraryKeyOrName;
        variant && (library += "-" + variant);
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
          var warning = [ 'Unable to register library "' + library + '" with version "' + version + '":' ];
          libraryMismatch && warning.push('library name "' + library + '" contains illegal characters (whitespace or "/")');
          libraryMismatch && versionMismatch && warning.push("and");
          versionMismatch && warning.push('version name "' + version + '" contains illegal characters (whitespace or "/")');
          logger.warn(warning.join(" "));
          return;
        }
        registerComponent(new component.Component(library + "-version", function() {
          return {
            library: library,
            version: version
          };
        }, "VERSION"));
      }
      function onLog(logCallback, options) {
        if (null !== logCallback && "function" !== typeof logCallback) throw ERROR_FACTORY.create("invalid-log-argument", {
          appName: name
        });
        logger$1.setUserLogHandler(logCallback, options);
      }
      function useAsService(app, name) {
        if ("serverAuth" === name) return null;
        var useService = name;
        return useService;
      }
      return namespace;
    }
    function createFirebaseNamespace() {
      var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
      namespace.INTERNAL = tslib.__assign(tslib.__assign({}, namespace.INTERNAL), {
        createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: util.createSubscribe,
        ErrorFactory: util.ErrorFactory,
        deepExtend: util.deepExtend
      });
      function extendNamespace(props) {
        util.deepExtend(namespace, props);
      }
      return namespace;
    }
    var firebase = createFirebaseNamespace();
    var PlatformLoggerService = function() {
      function PlatformLoggerService(container) {
        this.container = container;
      }
      PlatformLoggerService.prototype.getPlatformInfoString = function() {
        var providers = this.container.getProviders();
        return providers.map(function(provider) {
          if (isVersionServiceProvider(provider)) {
            var service = provider.getImmediate();
            return service.library + "/" + service.version;
          }
          return null;
        }).filter(function(logString) {
          return logString;
        }).join(" ");
      };
      return PlatformLoggerService;
    }();
    function isVersionServiceProvider(provider) {
      var component = provider.getComponent();
      return "VERSION" === (null === component || void 0 === component ? void 0 : component.type);
    }
    function registerCoreComponents(firebase, variant) {
      firebase.INTERNAL.registerComponent(new component.Component("platform-logger", function(container) {
        return new PlatformLoggerService(container);
      }, "PRIVATE"));
      firebase.registerVersion(name$1, version, variant);
      firebase.registerVersion("fire-js", "");
    }
    if (util.isBrowser() && void 0 !== self.firebase) {
      logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
      var sdkVersion = self.firebase.SDK_VERSION;
      sdkVersion && sdkVersion.indexOf("LITE") >= 0 && logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
    var initializeApp = firebase.initializeApp;
    firebase.initializeApp = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
      util.isNode() && logger.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ');
      return initializeApp.apply(void 0, args);
    };
    var firebase$1 = firebase;
    registerCoreComponents(firebase$1);
    exports.default = firebase$1;
    exports.firebase = firebase$1;
  }, {
    "@firebase/component": 11,
    "@firebase/logger": 13,
    "@firebase/util": 14,
    tslib: 24
  } ],
  11: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tslib = require("tslib");
    var util = require("@firebase/util");
    var Component = function() {
      function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        this.serviceProps = {};
        this.instantiationMode = "LAZY";
      }
      Component.prototype.setInstantiationMode = function(mode) {
        this.instantiationMode = mode;
        return this;
      };
      Component.prototype.setMultipleInstances = function(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
      };
      Component.prototype.setServiceProps = function(props) {
        this.serviceProps = props;
        return this;
      };
      return Component;
    }();
    var DEFAULT_ENTRY_NAME = "[DEFAULT]";
    var Provider = function() {
      function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
      }
      Provider.prototype.get = function(identifier) {
        void 0 === identifier && (identifier = DEFAULT_ENTRY_NAME);
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
          var deferred = new util.Deferred();
          this.instancesDeferred.set(normalizedIdentifier, deferred);
          try {
            var instance = this.getOrInitializeService(normalizedIdentifier);
            instance && deferred.resolve(instance);
          } catch (e) {}
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
      };
      Provider.prototype.getImmediate = function(options) {
        var _a = tslib.__assign({
          identifier: DEFAULT_ENTRY_NAME,
          optional: false
        }, options), identifier = _a.identifier, optional = _a.optional;
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        try {
          var instance = this.getOrInitializeService(normalizedIdentifier);
          if (!instance) {
            if (optional) return null;
            throw Error("Service " + this.name + " is not available");
          }
          return instance;
        } catch (e) {
          if (optional) return null;
          throw e;
        }
      };
      Provider.prototype.getComponent = function() {
        return this.component;
      };
      Provider.prototype.setComponent = function(component) {
        var e_1, _a;
        if (component.name !== this.name) throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        if (this.component) throw Error("Component for " + this.name + " has already been provided");
        this.component = component;
        if (isComponentEager(component)) try {
          this.getOrInitializeService(DEFAULT_ENTRY_NAME);
        } catch (e) {}
        try {
          for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = tslib.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
            var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
              var instance = this.getOrInitializeService(normalizedIdentifier);
              instanceDeferred.resolve(instance);
            } catch (e) {}
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            _c && !_c.done && (_a = _b.return) && _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      };
      Provider.prototype.clearInstance = function(identifier) {
        void 0 === identifier && (identifier = DEFAULT_ENTRY_NAME);
        this.instancesDeferred.delete(identifier);
        this.instances.delete(identifier);
      };
      Provider.prototype.delete = function() {
        return tslib.__awaiter(this, void 0, void 0, function() {
          var services;
          return tslib.__generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              services = Array.from(this.instances.values());
              return [ 4, Promise.all(tslib.__spread(services.filter(function(service) {
                return "INTERNAL" in service;
              }).map(function(service) {
                return service.INTERNAL.delete();
              }), services.filter(function(service) {
                return "_delete" in service;
              }).map(function(service) {
                return service._delete();
              }))) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      Provider.prototype.isComponentSet = function() {
        return null != this.component;
      };
      Provider.prototype.getOrInitializeService = function(identifier) {
        var instance = this.instances.get(identifier);
        if (!instance && this.component) {
          instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
          this.instances.set(identifier, instance);
        }
        return instance || null;
      };
      Provider.prototype.normalizeInstanceIdentifier = function(identifier) {
        return this.component ? this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME : identifier;
      };
      return Provider;
    }();
    function normalizeIdentifierForFactory(identifier) {
      return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
    }
    function isComponentEager(component) {
      return "EAGER" === component.instantiationMode;
    }
    var ComponentContainer = function() {
      function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
      }
      ComponentContainer.prototype.addComponent = function(component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) throw new Error("Component " + component.name + " has already been registered with " + this.name);
        provider.setComponent(component);
      };
      ComponentContainer.prototype.addOrOverwriteComponent = function(component) {
        var provider = this.getProvider(component.name);
        provider.isComponentSet() && this.providers.delete(component.name);
        this.addComponent(component);
      };
      ComponentContainer.prototype.getProvider = function(name) {
        if (this.providers.has(name)) return this.providers.get(name);
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
      };
      ComponentContainer.prototype.getProviders = function() {
        return Array.from(this.providers.values());
      };
      return ComponentContainer;
    }();
    exports.Component = Component;
    exports.ComponentContainer = ComponentContainer;
    exports.Provider = Provider;
  }, {
    "@firebase/util": 14,
    tslib: 24
  } ],
  12: [ function(require, module, exports) {
    (function(process) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var firebase = require("@firebase/app");
      var tslib = require("tslib");
      var util = require("@firebase/util");
      var logger$1 = require("@firebase/logger");
      var component = require("@firebase/component");
      function _interopDefaultLegacy(e) {
        return e && "object" === typeof e && "default" in e ? e : {
          default: e
        };
      }
      var firebase__default = _interopDefaultLegacy(firebase);
      var DOMStorageWrapper = function() {
        function DOMStorageWrapper(domStorage_) {
          this.domStorage_ = domStorage_;
          this.prefix_ = "firebase:";
        }
        DOMStorageWrapper.prototype.set = function(key, value) {
          null == value ? this.domStorage_.removeItem(this.prefixedName_(key)) : this.domStorage_.setItem(this.prefixedName_(key), util.stringify(value));
        };
        DOMStorageWrapper.prototype.get = function(key) {
          var storedVal = this.domStorage_.getItem(this.prefixedName_(key));
          return null == storedVal ? null : util.jsonEval(storedVal);
        };
        DOMStorageWrapper.prototype.remove = function(key) {
          this.domStorage_.removeItem(this.prefixedName_(key));
        };
        DOMStorageWrapper.prototype.prefixedName_ = function(name) {
          return this.prefix_ + name;
        };
        DOMStorageWrapper.prototype.toString = function() {
          return this.domStorage_.toString();
        };
        return DOMStorageWrapper;
      }();
      var MemoryStorage = function() {
        function MemoryStorage() {
          this.cache_ = {};
          this.isInMemoryStorage = true;
        }
        MemoryStorage.prototype.set = function(key, value) {
          null == value ? delete this.cache_[key] : this.cache_[key] = value;
        };
        MemoryStorage.prototype.get = function(key) {
          if (util.contains(this.cache_, key)) return this.cache_[key];
          return null;
        };
        MemoryStorage.prototype.remove = function(key) {
          delete this.cache_[key];
        };
        return MemoryStorage;
      }();
      var createStoragefor = function(domStorageName) {
        try {
          if ("undefined" !== typeof window && "undefined" !== typeof window[domStorageName]) {
            var domStorage = window[domStorageName];
            domStorage.setItem("firebase:sentinel", "cache");
            domStorage.removeItem("firebase:sentinel");
            return new DOMStorageWrapper(domStorage);
          }
        } catch (e) {}
        return new MemoryStorage();
      };
      var PersistentStorage = createStoragefor("localStorage");
      var SessionStorage = createStoragefor("sessionStorage");
      var logClient = new logger$1.Logger("@firebase/database");
      var LUIDGenerator = function() {
        var id = 1;
        return function() {
          return id++;
        };
      }();
      var sha1 = function(str) {
        var utf8Bytes = util.stringToByteArray(str);
        var sha1 = new util.Sha1();
        sha1.update(utf8Bytes);
        var sha1Bytes = sha1.digest();
        return util.base64.encodeByteArray(sha1Bytes);
      };
      var buildLogMessage_ = function() {
        var varArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) varArgs[_i] = arguments[_i];
        var message = "";
        for (var i = 0; i < varArgs.length; i++) {
          var arg = varArgs[i];
          Array.isArray(arg) || arg && "object" === typeof arg && "number" === typeof arg.length ? message += buildLogMessage_.apply(null, arg) : message += "object" === typeof arg ? util.stringify(arg) : arg;
          message += " ";
        }
        return message;
      };
      var logger = null;
      var firstLog_ = true;
      var enableLogging = function(logger_, persistent) {
        util.assert(!persistent || true === logger_ || false === logger_, "Can't turn on custom loggers persistently.");
        if (true === logger_) {
          logClient.logLevel = logger$1.LogLevel.VERBOSE;
          logger = logClient.log.bind(logClient);
          persistent && SessionStorage.set("logging_enabled", true);
        } else if ("function" === typeof logger_) logger = logger_; else {
          logger = null;
          SessionStorage.remove("logging_enabled");
        }
      };
      var log = function() {
        var varArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) varArgs[_i] = arguments[_i];
        if (true === firstLog_) {
          firstLog_ = false;
          null === logger && true === SessionStorage.get("logging_enabled") && enableLogging(true);
        }
        if (logger) {
          var message = buildLogMessage_.apply(null, varArgs);
          logger(message);
        }
      };
      var logWrapper = function(prefix) {
        return function() {
          var varArgs = [];
          for (var _i = 0; _i < arguments.length; _i++) varArgs[_i] = arguments[_i];
          log.apply(void 0, tslib.__spread([ prefix ], varArgs));
        };
      };
      var error = function() {
        var varArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) varArgs[_i] = arguments[_i];
        var message = "FIREBASE INTERNAL ERROR: " + buildLogMessage_.apply(void 0, tslib.__spread(varArgs));
        logClient.error(message);
      };
      var fatal = function() {
        var varArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) varArgs[_i] = arguments[_i];
        var message = "FIREBASE FATAL ERROR: " + buildLogMessage_.apply(void 0, tslib.__spread(varArgs));
        logClient.error(message);
        throw new Error(message);
      };
      var warn = function() {
        var varArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) varArgs[_i] = arguments[_i];
        var message = "FIREBASE WARNING: " + buildLogMessage_.apply(void 0, tslib.__spread(varArgs));
        logClient.warn(message);
      };
      var warnIfPageIsSecure = function() {
        "undefined" !== typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
      };
      var isInvalidJSONNumber = function(data) {
        return "number" === typeof data && (data !== data || data === Number.POSITIVE_INFINITY || data === Number.NEGATIVE_INFINITY);
      };
      var executeWhenDOMReady = function(fn) {
        if (util.isNodeSdk() || "complete" === document.readyState) fn(); else {
          var called_1 = false;
          var wrappedFn_1 = function() {
            if (!document.body) {
              setTimeout(wrappedFn_1, Math.floor(10));
              return;
            }
            if (!called_1) {
              called_1 = true;
              fn();
            }
          };
          if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", wrappedFn_1, false);
            window.addEventListener("load", wrappedFn_1, false);
          } else if (document.attachEvent) {
            document.attachEvent("onreadystatechange", function() {
              "complete" === document.readyState && wrappedFn_1();
            });
            window.attachEvent("onload", wrappedFn_1);
          }
        }
      };
      var MIN_NAME = "[MIN_NAME]";
      var MAX_NAME = "[MAX_NAME]";
      var nameCompare = function(a, b) {
        if (a === b) return 0;
        if (a === MIN_NAME || b === MAX_NAME) return -1;
        if (b === MIN_NAME || a === MAX_NAME) return 1;
        var aAsInt = tryParseInt(a), bAsInt = tryParseInt(b);
        return null !== aAsInt ? null !== bAsInt ? aAsInt - bAsInt === 0 ? a.length - b.length : aAsInt - bAsInt : -1 : null !== bAsInt ? 1 : a < b ? -1 : 1;
      };
      var stringCompare = function(a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
      };
      var requireKey = function(key, obj) {
        if (obj && key in obj) return obj[key];
        throw new Error("Missing required key (" + key + ") in object: " + util.stringify(obj));
      };
      var ObjectToUniqueKey = function(obj) {
        if ("object" !== typeof obj || null === obj) return util.stringify(obj);
        var keys = [];
        for (var k in obj) keys.push(k);
        keys.sort();
        var key = "{";
        for (var i = 0; i < keys.length; i++) {
          0 !== i && (key += ",");
          key += util.stringify(keys[i]);
          key += ":";
          key += ObjectToUniqueKey(obj[keys[i]]);
        }
        key += "}";
        return key;
      };
      var splitStringBySize = function(str, segsize) {
        var len = str.length;
        if (len <= segsize) return [ str ];
        var dataSegs = [];
        for (var c = 0; c < len; c += segsize) c + segsize > len ? dataSegs.push(str.substring(c, len)) : dataSegs.push(str.substring(c, c + segsize));
        return dataSegs;
      };
      function each(obj, fn) {
        for (var key in obj) obj.hasOwnProperty(key) && fn(key, obj[key]);
      }
      var doubleToIEEE754String = function(v) {
        util.assert(!isInvalidJSONNumber(v), "Invalid JSON number");
        var ebits = 11, fbits = 52;
        var bias = (1 << ebits - 1) - 1;
        var s, e, f, ln, i;
        if (0 === v) {
          e = 0;
          f = 0;
          s = 1 / v === -Infinity ? 1 : 0;
        } else {
          s = v < 0;
          v = Math.abs(v);
          if (v >= Math.pow(2, 1 - bias)) {
            ln = Math.min(Math.floor(Math.log(v) / Math.LN2), bias);
            e = ln + bias;
            f = Math.round(v * Math.pow(2, fbits - ln) - Math.pow(2, fbits));
          } else {
            e = 0;
            f = Math.round(v / Math.pow(2, 1 - bias - fbits));
          }
        }
        var bits = [];
        for (i = fbits; i; i -= 1) {
          bits.push(f % 2 ? 1 : 0);
          f = Math.floor(f / 2);
        }
        for (i = ebits; i; i -= 1) {
          bits.push(e % 2 ? 1 : 0);
          e = Math.floor(e / 2);
        }
        bits.push(s ? 1 : 0);
        bits.reverse();
        var str = bits.join("");
        var hexByteString = "";
        for (i = 0; i < 64; i += 8) {
          var hexByte = parseInt(str.substr(i, 8), 2).toString(16);
          1 === hexByte.length && (hexByte = "0" + hexByte);
          hexByteString += hexByte;
        }
        return hexByteString.toLowerCase();
      };
      var isChromeExtensionContentScript = function() {
        return !!("object" === typeof window && window["chrome"] && window["chrome"]["extension"] && !/^chrome/.test(window.location.href));
      };
      var isWindowsStoreApp = function() {
        return "object" === typeof Windows && "object" === typeof Windows.UI;
      };
      var errorForServerCode = function(code, query) {
        var reason = "Unknown Error";
        "too_big" === code ? reason = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" === code ? reason = "Client doesn't have permission to access the desired data." : "unavailable" === code && (reason = "The service is unavailable");
        var error = new Error(code + " at " + query.path.toString() + ": " + reason);
        error.code = code.toUpperCase();
        return error;
      };
      var INTEGER_REGEXP_ = new RegExp("^-?(0*)\\d{1,10}$");
      var tryParseInt = function(str) {
        if (INTEGER_REGEXP_.test(str)) {
          var intVal = Number(str);
          if (intVal >= -2147483648 && intVal <= 2147483647) return intVal;
        }
        return null;
      };
      var exceptionGuard = function(fn) {
        try {
          fn();
        } catch (e) {
          setTimeout(function() {
            var stack = e.stack || "";
            warn("Exception was thrown by user callback.", stack);
            throw e;
          }, Math.floor(0));
        }
      };
      var beingCrawled = function() {
        var userAgent = "object" === typeof window && window["navigator"] && window["navigator"]["userAgent"] || "";
        return userAgent.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
      };
      var setTimeoutNonBlocking = function(fn, time) {
        var timeout = setTimeout(fn, time);
        "object" === typeof timeout && timeout["unref"] && timeout["unref"]();
        return timeout;
      };
      var Path = function() {
        function Path(pathOrString, pieceNum) {
          if (void 0 === pieceNum) {
            this.pieces_ = pathOrString.split("/");
            var copyTo = 0;
            for (var i = 0; i < this.pieces_.length; i++) if (this.pieces_[i].length > 0) {
              this.pieces_[copyTo] = this.pieces_[i];
              copyTo++;
            }
            this.pieces_.length = copyTo;
            this.pieceNum_ = 0;
          } else {
            this.pieces_ = pathOrString;
            this.pieceNum_ = pieceNum;
          }
        }
        Object.defineProperty(Path, "Empty", {
          get: function() {
            return new Path("");
          },
          enumerable: false,
          configurable: true
        });
        Path.prototype.getFront = function() {
          if (this.pieceNum_ >= this.pieces_.length) return null;
          return this.pieces_[this.pieceNum_];
        };
        Path.prototype.getLength = function() {
          return this.pieces_.length - this.pieceNum_;
        };
        Path.prototype.popFront = function() {
          var pieceNum = this.pieceNum_;
          pieceNum < this.pieces_.length && pieceNum++;
          return new Path(this.pieces_, pieceNum);
        };
        Path.prototype.getBack = function() {
          if (this.pieceNum_ < this.pieces_.length) return this.pieces_[this.pieces_.length - 1];
          return null;
        };
        Path.prototype.toString = function() {
          var pathString = "";
          for (var i = this.pieceNum_; i < this.pieces_.length; i++) "" !== this.pieces_[i] && (pathString += "/" + this.pieces_[i]);
          return pathString || "/";
        };
        Path.prototype.toUrlEncodedString = function() {
          var pathString = "";
          for (var i = this.pieceNum_; i < this.pieces_.length; i++) "" !== this.pieces_[i] && (pathString += "/" + encodeURIComponent(String(this.pieces_[i])));
          return pathString || "/";
        };
        Path.prototype.slice = function(begin) {
          void 0 === begin && (begin = 0);
          return this.pieces_.slice(this.pieceNum_ + begin);
        };
        Path.prototype.parent = function() {
          if (this.pieceNum_ >= this.pieces_.length) return null;
          var pieces = [];
          for (var i = this.pieceNum_; i < this.pieces_.length - 1; i++) pieces.push(this.pieces_[i]);
          return new Path(pieces, 0);
        };
        Path.prototype.child = function(childPathObj) {
          var pieces = [];
          for (var i = this.pieceNum_; i < this.pieces_.length; i++) pieces.push(this.pieces_[i]);
          if (childPathObj instanceof Path) for (var i = childPathObj.pieceNum_; i < childPathObj.pieces_.length; i++) pieces.push(childPathObj.pieces_[i]); else {
            var childPieces = childPathObj.split("/");
            for (var i = 0; i < childPieces.length; i++) childPieces[i].length > 0 && pieces.push(childPieces[i]);
          }
          return new Path(pieces, 0);
        };
        Path.prototype.isEmpty = function() {
          return this.pieceNum_ >= this.pieces_.length;
        };
        Path.relativePath = function(outerPath, innerPath) {
          var outer = outerPath.getFront(), inner = innerPath.getFront();
          if (null === outer) return innerPath;
          if (outer === inner) return Path.relativePath(outerPath.popFront(), innerPath.popFront());
          throw new Error("INTERNAL ERROR: innerPath (" + innerPath + ") is not within outerPath (" + outerPath + ")");
        };
        Path.comparePaths = function(left, right) {
          var leftKeys = left.slice();
          var rightKeys = right.slice();
          for (var i = 0; i < leftKeys.length && i < rightKeys.length; i++) {
            var cmp = nameCompare(leftKeys[i], rightKeys[i]);
            if (0 !== cmp) return cmp;
          }
          if (leftKeys.length === rightKeys.length) return 0;
          return leftKeys.length < rightKeys.length ? -1 : 1;
        };
        Path.prototype.equals = function(other) {
          if (this.getLength() !== other.getLength()) return false;
          for (var i = this.pieceNum_, j = other.pieceNum_; i <= this.pieces_.length; i++, 
          j++) if (this.pieces_[i] !== other.pieces_[j]) return false;
          return true;
        };
        Path.prototype.contains = function(other) {
          var i = this.pieceNum_;
          var j = other.pieceNum_;
          if (this.getLength() > other.getLength()) return false;
          while (i < this.pieces_.length) {
            if (this.pieces_[i] !== other.pieces_[j]) return false;
            ++i;
            ++j;
          }
          return true;
        };
        return Path;
      }();
      var ValidationPath = function() {
        function ValidationPath(path, errorPrefix_) {
          this.errorPrefix_ = errorPrefix_;
          this.parts_ = path.slice();
          this.byteLength_ = Math.max(1, this.parts_.length);
          for (var i = 0; i < this.parts_.length; i++) this.byteLength_ += util.stringLength(this.parts_[i]);
          this.checkValid_();
        }
        Object.defineProperty(ValidationPath, "MAX_PATH_DEPTH", {
          get: function() {
            return 32;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ValidationPath, "MAX_PATH_LENGTH_BYTES", {
          get: function() {
            return 768;
          },
          enumerable: false,
          configurable: true
        });
        ValidationPath.prototype.push = function(child) {
          this.parts_.length > 0 && (this.byteLength_ += 1);
          this.parts_.push(child);
          this.byteLength_ += util.stringLength(child);
          this.checkValid_();
        };
        ValidationPath.prototype.pop = function() {
          var last = this.parts_.pop();
          this.byteLength_ -= util.stringLength(last);
          this.parts_.length > 0 && (this.byteLength_ -= 1);
        };
        ValidationPath.prototype.checkValid_ = function() {
          if (this.byteLength_ > ValidationPath.MAX_PATH_LENGTH_BYTES) throw new Error(this.errorPrefix_ + "has a key path longer than " + ValidationPath.MAX_PATH_LENGTH_BYTES + " bytes (" + this.byteLength_ + ").");
          if (this.parts_.length > ValidationPath.MAX_PATH_DEPTH) throw new Error(this.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + ValidationPath.MAX_PATH_DEPTH + ") or object contains a cycle " + this.toErrorString());
        };
        ValidationPath.prototype.toErrorString = function() {
          if (0 === this.parts_.length) return "";
          return "in property '" + this.parts_.join(".") + "'";
        };
        return ValidationPath;
      }();
      var PROTOCOL_VERSION = "5";
      var VERSION_PARAM = "v";
      var TRANSPORT_SESSION_PARAM = "s";
      var REFERER_PARAM = "r";
      var FORGE_REF = "f";
      var FORGE_DOMAIN = "firebaseio.com";
      var LAST_SESSION_PARAM = "ls";
      var APPLICATION_ID_PARAM = "p";
      var WEBSOCKET = "websocket";
      var LONG_POLLING = "long_polling";
      var RepoInfo = function() {
        function RepoInfo(host, secure, namespace, webSocketOnly, nodeAdmin, persistenceKey, includeNamespaceInQueryParams) {
          void 0 === nodeAdmin && (nodeAdmin = false);
          void 0 === persistenceKey && (persistenceKey = "");
          void 0 === includeNamespaceInQueryParams && (includeNamespaceInQueryParams = false);
          this.secure = secure;
          this.namespace = namespace;
          this.webSocketOnly = webSocketOnly;
          this.nodeAdmin = nodeAdmin;
          this.persistenceKey = persistenceKey;
          this.includeNamespaceInQueryParams = includeNamespaceInQueryParams;
          this.host = host.toLowerCase();
          this.domain = this.host.substr(this.host.indexOf(".") + 1);
          this.internalHost = PersistentStorage.get("host:" + host) || this.host;
        }
        RepoInfo.prototype.needsQueryParam = function() {
          return this.host !== this.internalHost || this.isCustomHost() || this.includeNamespaceInQueryParams;
        };
        RepoInfo.prototype.isCacheableHost = function() {
          return "s-" === this.internalHost.substr(0, 2);
        };
        RepoInfo.prototype.isDemoHost = function() {
          return "firebaseio-demo.com" === this.domain;
        };
        RepoInfo.prototype.isCustomHost = function() {
          return "firebaseio.com" !== this.domain && "firebaseio-demo.com" !== this.domain;
        };
        RepoInfo.prototype.updateHost = function(newHost) {
          if (newHost !== this.internalHost) {
            this.internalHost = newHost;
            this.isCacheableHost() && PersistentStorage.set("host:" + this.host, this.internalHost);
          }
        };
        RepoInfo.prototype.connectionURL = function(type, params) {
          util.assert("string" === typeof type, "typeof type must == string");
          util.assert("object" === typeof params, "typeof params must == object");
          var connURL;
          if (type === WEBSOCKET) connURL = (this.secure ? "wss://" : "ws://") + this.internalHost + "/.ws?"; else {
            if (type !== LONG_POLLING) throw new Error("Unknown connection type: " + type);
            connURL = (this.secure ? "https://" : "http://") + this.internalHost + "/.lp?";
          }
          this.needsQueryParam() && (params["ns"] = this.namespace);
          var pairs = [];
          each(params, function(key, value) {
            pairs.push(key + "=" + value);
          });
          return connURL + pairs.join("&");
        };
        RepoInfo.prototype.toString = function() {
          var str = this.toURLString();
          this.persistenceKey && (str += "<" + this.persistenceKey + ">");
          return str;
        };
        RepoInfo.prototype.toURLString = function() {
          return (this.secure ? "https://" : "http://") + this.host;
        };
        return RepoInfo;
      }();
      function decodePath(pathString) {
        var pathStringDecoded = "";
        var pieces = pathString.split("/");
        for (var i = 0; i < pieces.length; i++) if (pieces[i].length > 0) {
          var piece = pieces[i];
          try {
            piece = decodeURIComponent(piece.replace(/\+/g, " "));
          } catch (e) {}
          pathStringDecoded += "/" + piece;
        }
        return pathStringDecoded;
      }
      function decodeQuery(queryString) {
        var e_1, _a;
        var results = {};
        "?" === queryString.charAt(0) && (queryString = queryString.substring(1));
        try {
          for (var _b = tslib.__values(queryString.split("&")), _c = _b.next(); !_c.done; _c = _b.next()) {
            var segment = _c.value;
            if (0 === segment.length) continue;
            var kv = segment.split("=");
            2 === kv.length ? results[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]) : warn("Invalid query segment '" + segment + "' in query '" + queryString + "'");
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            _c && !_c.done && (_a = _b.return) && _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return results;
      }
      var parseRepoInfo = function(dataURL, nodeAdmin) {
        var parsedUrl = parseDatabaseURL(dataURL), namespace = parsedUrl.namespace;
        "firebase.com" === parsedUrl.domain && fatal(parsedUrl.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
        namespace && "undefined" !== namespace || "localhost" === parsedUrl.domain || fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");
        parsedUrl.secure || warnIfPageIsSecure();
        var webSocketOnly = "ws" === parsedUrl.scheme || "wss" === parsedUrl.scheme;
        return {
          repoInfo: new RepoInfo(parsedUrl.host, parsedUrl.secure, namespace, nodeAdmin, webSocketOnly, "", namespace !== parsedUrl.subdomain),
          path: new Path(parsedUrl.pathString)
        };
      };
      var parseDatabaseURL = function(dataURL) {
        var host = "", domain = "", subdomain = "", pathString = "", namespace = "";
        var secure = true, scheme = "https", port = 443;
        if ("string" === typeof dataURL) {
          var colonInd = dataURL.indexOf("//");
          if (colonInd >= 0) {
            scheme = dataURL.substring(0, colonInd - 1);
            dataURL = dataURL.substring(colonInd + 2);
          }
          var slashInd = dataURL.indexOf("/");
          -1 === slashInd && (slashInd = dataURL.length);
          var questionMarkInd = dataURL.indexOf("?");
          -1 === questionMarkInd && (questionMarkInd = dataURL.length);
          host = dataURL.substring(0, Math.min(slashInd, questionMarkInd));
          slashInd < questionMarkInd && (pathString = decodePath(dataURL.substring(slashInd, questionMarkInd)));
          var queryParams = decodeQuery(dataURL.substring(Math.min(dataURL.length, questionMarkInd)));
          colonInd = host.indexOf(":");
          if (colonInd >= 0) {
            secure = "https" === scheme || "wss" === scheme;
            port = parseInt(host.substring(colonInd + 1), 10);
          } else colonInd = host.length;
          var hostWithoutPort = host.slice(0, colonInd);
          if ("localhost" === hostWithoutPort.toLowerCase()) domain = "localhost"; else if (hostWithoutPort.split(".").length <= 2) domain = hostWithoutPort; else {
            var dotInd = host.indexOf(".");
            subdomain = host.substring(0, dotInd).toLowerCase();
            domain = host.substring(dotInd + 1);
            namespace = subdomain;
          }
          "ns" in queryParams && (namespace = queryParams["ns"]);
        }
        return {
          host: host,
          port: port,
          domain: domain,
          subdomain: subdomain,
          secure: secure,
          scheme: scheme,
          pathString: pathString,
          namespace: namespace
        };
      };
      var INVALID_KEY_REGEX_ = /[\[\].#$\/\u0000-\u001F\u007F]/;
      var INVALID_PATH_REGEX_ = /[\[\].#$\u0000-\u001F\u007F]/;
      var MAX_LEAF_SIZE_ = 10485760;
      var isValidKey = function(key) {
        return "string" === typeof key && 0 !== key.length && !INVALID_KEY_REGEX_.test(key);
      };
      var isValidPathString = function(pathString) {
        return "string" === typeof pathString && 0 !== pathString.length && !INVALID_PATH_REGEX_.test(pathString);
      };
      var isValidRootPathString = function(pathString) {
        pathString && (pathString = pathString.replace(/^\/*\.info(\/|$)/, "/"));
        return isValidPathString(pathString);
      };
      var isValidPriority = function(priority) {
        return null === priority || "string" === typeof priority || "number" === typeof priority && !isInvalidJSONNumber(priority) || priority && "object" === typeof priority && util.contains(priority, ".sv");
      };
      var validateFirebaseDataArg = function(fnName, argumentNumber, data, path, optional) {
        if (optional && void 0 === data) return;
        validateFirebaseData(util.errorPrefix(fnName, argumentNumber, optional), data, path);
      };
      var validateFirebaseData = function(errorPrefix, data, path_) {
        var path = path_ instanceof Path ? new ValidationPath(path_, errorPrefix) : path_;
        if (void 0 === data) throw new Error(errorPrefix + "contains undefined " + path.toErrorString());
        if ("function" === typeof data) throw new Error(errorPrefix + "contains a function " + path.toErrorString() + " with contents = " + data.toString());
        if (isInvalidJSONNumber(data)) throw new Error(errorPrefix + "contains " + data.toString() + " " + path.toErrorString());
        if ("string" === typeof data && data.length > MAX_LEAF_SIZE_ / 3 && util.stringLength(data) > MAX_LEAF_SIZE_) throw new Error(errorPrefix + "contains a string greater than " + MAX_LEAF_SIZE_ + " utf8 bytes " + path.toErrorString() + " ('" + data.substring(0, 50) + "...')");
        if (data && "object" === typeof data) {
          var hasDotValue_1 = false;
          var hasActualChild_1 = false;
          each(data, function(key, value) {
            if (".value" === key) hasDotValue_1 = true; else if (".priority" !== key && ".sv" !== key) {
              hasActualChild_1 = true;
              if (!isValidKey(key)) throw new Error(errorPrefix + " contains an invalid key (" + key + ") " + path.toErrorString() + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
            }
            path.push(key);
            validateFirebaseData(errorPrefix, value, path);
            path.pop();
          });
          if (hasDotValue_1 && hasActualChild_1) throw new Error(errorPrefix + ' contains ".value" child ' + path.toErrorString() + " in addition to actual children.");
        }
      };
      var validateFirebaseMergePaths = function(errorPrefix, mergePaths) {
        var i, curPath;
        for (i = 0; i < mergePaths.length; i++) {
          curPath = mergePaths[i];
          var keys = curPath.slice();
          for (var j = 0; j < keys.length; j++) if (".priority" === keys[j] && j === keys.length - 1) ; else if (!isValidKey(keys[j])) throw new Error(errorPrefix + "contains an invalid key (" + keys[j] + ") in path " + curPath.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
        }
        mergePaths.sort(Path.comparePaths);
        var prevPath = null;
        for (i = 0; i < mergePaths.length; i++) {
          curPath = mergePaths[i];
          if (null !== prevPath && prevPath.contains(curPath)) throw new Error(errorPrefix + "contains a path " + prevPath.toString() + " that is ancestor of another path " + curPath.toString());
          prevPath = curPath;
        }
      };
      var validateFirebaseMergeDataArg = function(fnName, argumentNumber, data, path, optional) {
        if (optional && void 0 === data) return;
        var errorPrefix = util.errorPrefix(fnName, argumentNumber, optional);
        if (!(data && "object" === typeof data) || Array.isArray(data)) throw new Error(errorPrefix + " must be an object containing the children to replace.");
        var mergePaths = [];
        each(data, function(key, value) {
          var curPath = new Path(key);
          validateFirebaseData(errorPrefix, value, path.child(curPath));
          if (".priority" === curPath.getBack() && !isValidPriority(value)) throw new Error(errorPrefix + "contains an invalid value for '" + curPath.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
          mergePaths.push(curPath);
        });
        validateFirebaseMergePaths(errorPrefix, mergePaths);
      };
      var validatePriority = function(fnName, argumentNumber, priority, optional) {
        if (optional && void 0 === priority) return;
        if (isInvalidJSONNumber(priority)) throw new Error(util.errorPrefix(fnName, argumentNumber, optional) + "is " + priority.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
        if (!isValidPriority(priority)) throw new Error(util.errorPrefix(fnName, argumentNumber, optional) + "must be a valid Firebase priority (a string, finite number, server value, or null).");
      };
      var validateEventType = function(fnName, argumentNumber, eventType, optional) {
        if (optional && void 0 === eventType) return;
        switch (eventType) {
         case "value":
         case "child_added":
         case "child_removed":
         case "child_changed":
         case "child_moved":
          break;

         default:
          throw new Error(util.errorPrefix(fnName, argumentNumber, optional) + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".');
        }
      };
      var validateKey = function(fnName, argumentNumber, key, optional) {
        if (optional && void 0 === key) return;
        if (!isValidKey(key)) throw new Error(util.errorPrefix(fnName, argumentNumber, optional) + 'was an invalid key = "' + key + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');
      };
      var validatePathString = function(fnName, argumentNumber, pathString, optional) {
        if (optional && void 0 === pathString) return;
        if (!isValidPathString(pathString)) throw new Error(util.errorPrefix(fnName, argumentNumber, optional) + 'was an invalid path = "' + pathString + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');
      };
      var validateRootPathString = function(fnName, argumentNumber, pathString, optional) {
        pathString && (pathString = pathString.replace(/^\/*\.info(\/|$)/, "/"));
        validatePathString(fnName, argumentNumber, pathString, optional);
      };
      var validateWritablePath = function(fnName, path) {
        if (".info" === path.getFront()) throw new Error(fnName + " failed = Can't modify data under /.info/");
      };
      var validateUrl = function(fnName, argumentNumber, parsedUrl) {
        var pathString = parsedUrl.path.toString();
        if (!("string" === typeof parsedUrl.repoInfo.host) || 0 === parsedUrl.repoInfo.host.length || !isValidKey(parsedUrl.repoInfo.namespace) && "localhost" !== parsedUrl.repoInfo.host.split(":")[0] || 0 !== pathString.length && !isValidRootPathString(pathString)) throw new Error(util.errorPrefix(fnName, argumentNumber, false) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');
      };
      var validateBoolean = function(fnName, argumentNumber, bool, optional) {
        if (optional && void 0 === bool) return;
        if ("boolean" !== typeof bool) throw new Error(util.errorPrefix(fnName, argumentNumber, optional) + "must be a boolean.");
      };
      var OnDisconnect = function() {
        function OnDisconnect(repo_, path_) {
          this.repo_ = repo_;
          this.path_ = path_;
        }
        OnDisconnect.prototype.cancel = function(onComplete) {
          util.validateArgCount("OnDisconnect.cancel", 0, 1, arguments.length);
          util.validateCallback("OnDisconnect.cancel", 1, onComplete, true);
          var deferred = new util.Deferred();
          this.repo_.onDisconnectCancel(this.path_, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        OnDisconnect.prototype.remove = function(onComplete) {
          util.validateArgCount("OnDisconnect.remove", 0, 1, arguments.length);
          validateWritablePath("OnDisconnect.remove", this.path_);
          util.validateCallback("OnDisconnect.remove", 1, onComplete, true);
          var deferred = new util.Deferred();
          this.repo_.onDisconnectSet(this.path_, null, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        OnDisconnect.prototype.set = function(value, onComplete) {
          util.validateArgCount("OnDisconnect.set", 1, 2, arguments.length);
          validateWritablePath("OnDisconnect.set", this.path_);
          validateFirebaseDataArg("OnDisconnect.set", 1, value, this.path_, false);
          util.validateCallback("OnDisconnect.set", 2, onComplete, true);
          var deferred = new util.Deferred();
          this.repo_.onDisconnectSet(this.path_, value, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        OnDisconnect.prototype.setWithPriority = function(value, priority, onComplete) {
          util.validateArgCount("OnDisconnect.setWithPriority", 2, 3, arguments.length);
          validateWritablePath("OnDisconnect.setWithPriority", this.path_);
          validateFirebaseDataArg("OnDisconnect.setWithPriority", 1, value, this.path_, false);
          validatePriority("OnDisconnect.setWithPriority", 2, priority, false);
          util.validateCallback("OnDisconnect.setWithPriority", 3, onComplete, true);
          var deferred = new util.Deferred();
          this.repo_.onDisconnectSetWithPriority(this.path_, value, priority, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        OnDisconnect.prototype.update = function(objectToMerge, onComplete) {
          util.validateArgCount("OnDisconnect.update", 1, 2, arguments.length);
          validateWritablePath("OnDisconnect.update", this.path_);
          if (Array.isArray(objectToMerge)) {
            var newObjectToMerge = {};
            for (var i = 0; i < objectToMerge.length; ++i) newObjectToMerge["" + i] = objectToMerge[i];
            objectToMerge = newObjectToMerge;
            warn("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");
          }
          validateFirebaseMergeDataArg("OnDisconnect.update", 1, objectToMerge, this.path_, false);
          util.validateCallback("OnDisconnect.update", 2, onComplete, true);
          var deferred = new util.Deferred();
          this.repo_.onDisconnectUpdate(this.path_, objectToMerge, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        return OnDisconnect;
      }();
      var TransactionResult = function() {
        function TransactionResult(committed, snapshot) {
          this.committed = committed;
          this.snapshot = snapshot;
        }
        TransactionResult.prototype.toJSON = function() {
          util.validateArgCount("TransactionResult.toJSON", 0, 1, arguments.length);
          return {
            committed: this.committed,
            snapshot: this.snapshot.toJSON()
          };
        };
        return TransactionResult;
      }();
      var nextPushId = function() {
        var PUSH_CHARS = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
        var lastPushTime = 0;
        var lastRandChars = [];
        return function(now) {
          var duplicateTime = now === lastPushTime;
          lastPushTime = now;
          var i;
          var timeStampChars = new Array(8);
          for (i = 7; i >= 0; i--) {
            timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
            now = Math.floor(now / 64);
          }
          util.assert(0 === now, "Cannot push at time == 0");
          var id = timeStampChars.join("");
          if (duplicateTime) {
            for (i = 11; i >= 0 && 63 === lastRandChars[i]; i--) lastRandChars[i] = 0;
            lastRandChars[i]++;
          } else for (i = 0; i < 12; i++) lastRandChars[i] = Math.floor(64 * Math.random());
          for (i = 0; i < 12; i++) id += PUSH_CHARS.charAt(lastRandChars[i]);
          util.assert(20 === id.length, "nextPushId: Length should be 20.");
          return id;
        };
      }();
      var NamedNode = function() {
        function NamedNode(name, node) {
          this.name = name;
          this.node = node;
        }
        NamedNode.Wrap = function(name, node) {
          return new NamedNode(name, node);
        };
        return NamedNode;
      }();
      var Index = function() {
        function Index() {}
        Index.prototype.getCompare = function() {
          return this.compare.bind(this);
        };
        Index.prototype.indexedValueChanged = function(oldNode, newNode) {
          var oldWrapped = new NamedNode(MIN_NAME, oldNode);
          var newWrapped = new NamedNode(MIN_NAME, newNode);
          return 0 !== this.compare(oldWrapped, newWrapped);
        };
        Index.prototype.minPost = function() {
          return NamedNode.MIN;
        };
        return Index;
      }();
      var __EMPTY_NODE;
      var KeyIndex = function(_super) {
        tslib.__extends(KeyIndex, _super);
        function KeyIndex() {
          return null !== _super && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(KeyIndex, "__EMPTY_NODE", {
          get: function() {
            return __EMPTY_NODE;
          },
          set: function(val) {
            __EMPTY_NODE = val;
          },
          enumerable: false,
          configurable: true
        });
        KeyIndex.prototype.compare = function(a, b) {
          return nameCompare(a.name, b.name);
        };
        KeyIndex.prototype.isDefinedOn = function(node) {
          throw util.assertionError("KeyIndex.isDefinedOn not expected to be called.");
        };
        KeyIndex.prototype.indexedValueChanged = function(oldNode, newNode) {
          return false;
        };
        KeyIndex.prototype.minPost = function() {
          return NamedNode.MIN;
        };
        KeyIndex.prototype.maxPost = function() {
          return new NamedNode(MAX_NAME, __EMPTY_NODE);
        };
        KeyIndex.prototype.makePost = function(indexValue, name) {
          util.assert("string" === typeof indexValue, "KeyIndex indexValue must always be a string.");
          return new NamedNode(indexValue, __EMPTY_NODE);
        };
        KeyIndex.prototype.toString = function() {
          return ".key";
        };
        return KeyIndex;
      }(Index);
      var KEY_INDEX = new KeyIndex();
      var MAX_NODE;
      function setMaxNode(val) {
        MAX_NODE = val;
      }
      var priorityHashText = function(priority) {
        return "number" === typeof priority ? "number:" + doubleToIEEE754String(priority) : "string:" + priority;
      };
      var validatePriorityNode = function(priorityNode) {
        if (priorityNode.isLeafNode()) {
          var val = priorityNode.val();
          util.assert("string" === typeof val || "number" === typeof val || "object" === typeof val && util.contains(val, ".sv"), "Priority must be a string or number.");
        } else util.assert(priorityNode === MAX_NODE || priorityNode.isEmpty(), "priority of unexpected type.");
        util.assert(priorityNode === MAX_NODE || priorityNode.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
      };
      var __childrenNodeConstructor;
      var LeafNode = function() {
        function LeafNode(value_, priorityNode_) {
          void 0 === priorityNode_ && (priorityNode_ = LeafNode.__childrenNodeConstructor.EMPTY_NODE);
          this.value_ = value_;
          this.priorityNode_ = priorityNode_;
          this.lazyHash_ = null;
          util.assert(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value.");
          validatePriorityNode(this.priorityNode_);
        }
        Object.defineProperty(LeafNode, "__childrenNodeConstructor", {
          get: function() {
            return __childrenNodeConstructor;
          },
          set: function(val) {
            __childrenNodeConstructor = val;
          },
          enumerable: false,
          configurable: true
        });
        LeafNode.prototype.isLeafNode = function() {
          return true;
        };
        LeafNode.prototype.getPriority = function() {
          return this.priorityNode_;
        };
        LeafNode.prototype.updatePriority = function(newPriorityNode) {
          return new LeafNode(this.value_, newPriorityNode);
        };
        LeafNode.prototype.getImmediateChild = function(childName) {
          return ".priority" === childName ? this.priorityNode_ : LeafNode.__childrenNodeConstructor.EMPTY_NODE;
        };
        LeafNode.prototype.getChild = function(path) {
          return path.isEmpty() ? this : ".priority" === path.getFront() ? this.priorityNode_ : LeafNode.__childrenNodeConstructor.EMPTY_NODE;
        };
        LeafNode.prototype.hasChild = function() {
          return false;
        };
        LeafNode.prototype.getPredecessorChildName = function(childName, childNode) {
          return null;
        };
        LeafNode.prototype.updateImmediateChild = function(childName, newChildNode) {
          return ".priority" === childName ? this.updatePriority(newChildNode) : newChildNode.isEmpty() && ".priority" !== childName ? this : LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(childName, newChildNode).updatePriority(this.priorityNode_);
        };
        LeafNode.prototype.updateChild = function(path, newChildNode) {
          var front = path.getFront();
          if (null === front) return newChildNode;
          if (newChildNode.isEmpty() && ".priority" !== front) return this;
          util.assert(".priority" !== front || 1 === path.getLength(), ".priority must be the last token in a path");
          return this.updateImmediateChild(front, LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(path.popFront(), newChildNode));
        };
        LeafNode.prototype.isEmpty = function() {
          return false;
        };
        LeafNode.prototype.numChildren = function() {
          return 0;
        };
        LeafNode.prototype.forEachChild = function(index, action) {
          return false;
        };
        LeafNode.prototype.val = function(exportFormat) {
          return exportFormat && !this.getPriority().isEmpty() ? {
            ".value": this.getValue(),
            ".priority": this.getPriority().val()
          } : this.getValue();
        };
        LeafNode.prototype.hash = function() {
          if (null === this.lazyHash_) {
            var toHash = "";
            this.priorityNode_.isEmpty() || (toHash += "priority:" + priorityHashText(this.priorityNode_.val()) + ":");
            var type = typeof this.value_;
            toHash += type + ":";
            toHash += "number" === type ? doubleToIEEE754String(this.value_) : this.value_;
            this.lazyHash_ = sha1(toHash);
          }
          return this.lazyHash_;
        };
        LeafNode.prototype.getValue = function() {
          return this.value_;
        };
        LeafNode.prototype.compareTo = function(other) {
          if (other === LeafNode.__childrenNodeConstructor.EMPTY_NODE) return 1;
          if (other instanceof LeafNode.__childrenNodeConstructor) return -1;
          util.assert(other.isLeafNode(), "Unknown node type");
          return this.compareToLeafNode_(other);
        };
        LeafNode.prototype.compareToLeafNode_ = function(otherLeaf) {
          var otherLeafType = typeof otherLeaf.value_;
          var thisLeafType = typeof this.value_;
          var otherIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(otherLeafType);
          var thisIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(thisLeafType);
          util.assert(otherIndex >= 0, "Unknown leaf type: " + otherLeafType);
          util.assert(thisIndex >= 0, "Unknown leaf type: " + thisLeafType);
          return otherIndex === thisIndex ? "object" === thisLeafType ? 0 : this.value_ < otherLeaf.value_ ? -1 : this.value_ === otherLeaf.value_ ? 0 : 1 : thisIndex - otherIndex;
        };
        LeafNode.prototype.withIndex = function() {
          return this;
        };
        LeafNode.prototype.isIndexed = function() {
          return true;
        };
        LeafNode.prototype.equals = function(other) {
          if (other === this) return true;
          if (other.isLeafNode()) {
            var otherLeaf = other;
            return this.value_ === otherLeaf.value_ && this.priorityNode_.equals(otherLeaf.priorityNode_);
          }
          return false;
        };
        LeafNode.VALUE_TYPE_ORDER = [ "object", "boolean", "number", "string" ];
        return LeafNode;
      }();
      var nodeFromJSON;
      var MAX_NODE$1;
      function setNodeFromJSON(val) {
        nodeFromJSON = val;
      }
      function setMaxNode$1(val) {
        MAX_NODE$1 = val;
      }
      var PriorityIndex = function(_super) {
        tslib.__extends(PriorityIndex, _super);
        function PriorityIndex() {
          return null !== _super && _super.apply(this, arguments) || this;
        }
        PriorityIndex.prototype.compare = function(a, b) {
          var aPriority = a.node.getPriority();
          var bPriority = b.node.getPriority();
          var indexCmp = aPriority.compareTo(bPriority);
          return 0 === indexCmp ? nameCompare(a.name, b.name) : indexCmp;
        };
        PriorityIndex.prototype.isDefinedOn = function(node) {
          return !node.getPriority().isEmpty();
        };
        PriorityIndex.prototype.indexedValueChanged = function(oldNode, newNode) {
          return !oldNode.getPriority().equals(newNode.getPriority());
        };
        PriorityIndex.prototype.minPost = function() {
          return NamedNode.MIN;
        };
        PriorityIndex.prototype.maxPost = function() {
          return new NamedNode(MAX_NAME, new LeafNode("[PRIORITY-POST]", MAX_NODE$1));
        };
        PriorityIndex.prototype.makePost = function(indexValue, name) {
          var priorityNode = nodeFromJSON(indexValue);
          return new NamedNode(name, new LeafNode("[PRIORITY-POST]", priorityNode));
        };
        PriorityIndex.prototype.toString = function() {
          return ".priority";
        };
        return PriorityIndex;
      }(Index);
      var PRIORITY_INDEX = new PriorityIndex();
      var SortedMapIterator = function() {
        function SortedMapIterator(node, startKey, comparator, isReverse_, resultGenerator_) {
          void 0 === resultGenerator_ && (resultGenerator_ = null);
          this.isReverse_ = isReverse_;
          this.resultGenerator_ = resultGenerator_;
          this.nodeStack_ = [];
          var cmp = 1;
          while (!node.isEmpty()) {
            node = node;
            cmp = startKey ? comparator(node.key, startKey) : 1;
            isReverse_ && (cmp *= -1);
            if (cmp < 0) node = this.isReverse_ ? node.left : node.right; else {
              if (0 === cmp) {
                this.nodeStack_.push(node);
                break;
              }
              this.nodeStack_.push(node);
              node = this.isReverse_ ? node.right : node.left;
            }
          }
        }
        SortedMapIterator.prototype.getNext = function() {
          if (0 === this.nodeStack_.length) return null;
          var node = this.nodeStack_.pop();
          var result;
          result = this.resultGenerator_ ? this.resultGenerator_(node.key, node.value) : {
            key: node.key,
            value: node.value
          };
          if (this.isReverse_) {
            node = node.left;
            while (!node.isEmpty()) {
              this.nodeStack_.push(node);
              node = node.right;
            }
          } else {
            node = node.right;
            while (!node.isEmpty()) {
              this.nodeStack_.push(node);
              node = node.left;
            }
          }
          return result;
        };
        SortedMapIterator.prototype.hasNext = function() {
          return this.nodeStack_.length > 0;
        };
        SortedMapIterator.prototype.peek = function() {
          if (0 === this.nodeStack_.length) return null;
          var node = this.nodeStack_[this.nodeStack_.length - 1];
          return this.resultGenerator_ ? this.resultGenerator_(node.key, node.value) : {
            key: node.key,
            value: node.value
          };
        };
        return SortedMapIterator;
      }();
      var LLRBNode = function() {
        function LLRBNode(key, value, color, left, right) {
          this.key = key;
          this.value = value;
          this.color = null != color ? color : LLRBNode.RED;
          this.left = null != left ? left : SortedMap.EMPTY_NODE;
          this.right = null != right ? right : SortedMap.EMPTY_NODE;
        }
        LLRBNode.prototype.copy = function(key, value, color, left, right) {
          return new LLRBNode(null != key ? key : this.key, null != value ? value : this.value, null != color ? color : this.color, null != left ? left : this.left, null != right ? right : this.right);
        };
        LLRBNode.prototype.count = function() {
          return this.left.count() + 1 + this.right.count();
        };
        LLRBNode.prototype.isEmpty = function() {
          return false;
        };
        LLRBNode.prototype.inorderTraversal = function(action) {
          return this.left.inorderTraversal(action) || !!action(this.key, this.value) || this.right.inorderTraversal(action);
        };
        LLRBNode.prototype.reverseTraversal = function(action) {
          return this.right.reverseTraversal(action) || action(this.key, this.value) || this.left.reverseTraversal(action);
        };
        LLRBNode.prototype.min_ = function() {
          return this.left.isEmpty() ? this : this.left.min_();
        };
        LLRBNode.prototype.minKey = function() {
          return this.min_().key;
        };
        LLRBNode.prototype.maxKey = function() {
          return this.right.isEmpty() ? this.key : this.right.maxKey();
        };
        LLRBNode.prototype.insert = function(key, value, comparator) {
          var n = this;
          var cmp = comparator(key, n.key);
          n = cmp < 0 ? n.copy(null, null, null, n.left.insert(key, value, comparator), null) : 0 === cmp ? n.copy(null, value, null, null, null) : n.copy(null, null, null, null, n.right.insert(key, value, comparator));
          return n.fixUp_();
        };
        LLRBNode.prototype.removeMin_ = function() {
          if (this.left.isEmpty()) return SortedMap.EMPTY_NODE;
          var n = this;
          n.left.isRed_() || n.left.left.isRed_() || (n = n.moveRedLeft_());
          n = n.copy(null, null, null, n.left.removeMin_(), null);
          return n.fixUp_();
        };
        LLRBNode.prototype.remove = function(key, comparator) {
          var n, smallest;
          n = this;
          if (comparator(key, n.key) < 0) {
            n.left.isEmpty() || n.left.isRed_() || n.left.left.isRed_() || (n = n.moveRedLeft_());
            n = n.copy(null, null, null, n.left.remove(key, comparator), null);
          } else {
            n.left.isRed_() && (n = n.rotateRight_());
            n.right.isEmpty() || n.right.isRed_() || n.right.left.isRed_() || (n = n.moveRedRight_());
            if (0 === comparator(key, n.key)) {
              if (n.right.isEmpty()) return SortedMap.EMPTY_NODE;
              smallest = n.right.min_();
              n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin_());
            }
            n = n.copy(null, null, null, null, n.right.remove(key, comparator));
          }
          return n.fixUp_();
        };
        LLRBNode.prototype.isRed_ = function() {
          return this.color;
        };
        LLRBNode.prototype.fixUp_ = function() {
          var n = this;
          n.right.isRed_() && !n.left.isRed_() && (n = n.rotateLeft_());
          n.left.isRed_() && n.left.left.isRed_() && (n = n.rotateRight_());
          n.left.isRed_() && n.right.isRed_() && (n = n.colorFlip_());
          return n;
        };
        LLRBNode.prototype.moveRedLeft_ = function() {
          var n = this.colorFlip_();
          if (n.right.left.isRed_()) {
            n = n.copy(null, null, null, null, n.right.rotateRight_());
            n = n.rotateLeft_();
            n = n.colorFlip_();
          }
          return n;
        };
        LLRBNode.prototype.moveRedRight_ = function() {
          var n = this.colorFlip_();
          if (n.left.left.isRed_()) {
            n = n.rotateRight_();
            n = n.colorFlip_();
          }
          return n;
        };
        LLRBNode.prototype.rotateLeft_ = function() {
          var nl = this.copy(null, null, LLRBNode.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, nl, null);
        };
        LLRBNode.prototype.rotateRight_ = function() {
          var nr = this.copy(null, null, LLRBNode.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, nr);
        };
        LLRBNode.prototype.colorFlip_ = function() {
          var left = this.left.copy(null, null, !this.left.color, null, null);
          var right = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, left, right);
        };
        LLRBNode.prototype.checkMaxDepth_ = function() {
          var blackDepth = this.check_();
          return Math.pow(2, blackDepth) <= this.count() + 1;
        };
        LLRBNode.prototype.check_ = function() {
          if (this.isRed_() && this.left.isRed_()) throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
          if (this.right.isRed_()) throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
          var blackDepth = this.left.check_();
          if (blackDepth !== this.right.check_()) throw new Error("Black depths differ");
          return blackDepth + (this.isRed_() ? 0 : 1);
        };
        LLRBNode.RED = true;
        LLRBNode.BLACK = false;
        return LLRBNode;
      }();
      var LLRBEmptyNode = function() {
        function LLRBEmptyNode() {}
        LLRBEmptyNode.prototype.copy = function(key, value, color, left, right) {
          return this;
        };
        LLRBEmptyNode.prototype.insert = function(key, value, comparator) {
          return new LLRBNode(key, value, null);
        };
        LLRBEmptyNode.prototype.remove = function(key, comparator) {
          return this;
        };
        LLRBEmptyNode.prototype.count = function() {
          return 0;
        };
        LLRBEmptyNode.prototype.isEmpty = function() {
          return true;
        };
        LLRBEmptyNode.prototype.inorderTraversal = function(action) {
          return false;
        };
        LLRBEmptyNode.prototype.reverseTraversal = function(action) {
          return false;
        };
        LLRBEmptyNode.prototype.minKey = function() {
          return null;
        };
        LLRBEmptyNode.prototype.maxKey = function() {
          return null;
        };
        LLRBEmptyNode.prototype.check_ = function() {
          return 0;
        };
        LLRBEmptyNode.prototype.isRed_ = function() {
          return false;
        };
        return LLRBEmptyNode;
      }();
      var SortedMap = function() {
        function SortedMap(comparator_, root_) {
          void 0 === root_ && (root_ = SortedMap.EMPTY_NODE);
          this.comparator_ = comparator_;
          this.root_ = root_;
        }
        SortedMap.prototype.insert = function(key, value) {
          return new SortedMap(this.comparator_, this.root_.insert(key, value, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
        };
        SortedMap.prototype.remove = function(key) {
          return new SortedMap(this.comparator_, this.root_.remove(key, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
        };
        SortedMap.prototype.get = function(key) {
          var cmp;
          var node = this.root_;
          while (!node.isEmpty()) {
            cmp = this.comparator_(key, node.key);
            if (0 === cmp) return node.value;
            cmp < 0 ? node = node.left : cmp > 0 && (node = node.right);
          }
          return null;
        };
        SortedMap.prototype.getPredecessorKey = function(key) {
          var cmp, node = this.root_, rightParent = null;
          while (!node.isEmpty()) {
            cmp = this.comparator_(key, node.key);
            if (0 === cmp) {
              if (node.left.isEmpty()) return rightParent ? rightParent.key : null;
              node = node.left;
              while (!node.right.isEmpty()) node = node.right;
              return node.key;
            }
            if (cmp < 0) node = node.left; else if (cmp > 0) {
              rightParent = node;
              node = node.right;
            }
          }
          throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
        };
        SortedMap.prototype.isEmpty = function() {
          return this.root_.isEmpty();
        };
        SortedMap.prototype.count = function() {
          return this.root_.count();
        };
        SortedMap.prototype.minKey = function() {
          return this.root_.minKey();
        };
        SortedMap.prototype.maxKey = function() {
          return this.root_.maxKey();
        };
        SortedMap.prototype.inorderTraversal = function(action) {
          return this.root_.inorderTraversal(action);
        };
        SortedMap.prototype.reverseTraversal = function(action) {
          return this.root_.reverseTraversal(action);
        };
        SortedMap.prototype.getIterator = function(resultGenerator) {
          return new SortedMapIterator(this.root_, null, this.comparator_, false, resultGenerator);
        };
        SortedMap.prototype.getIteratorFrom = function(key, resultGenerator) {
          return new SortedMapIterator(this.root_, key, this.comparator_, false, resultGenerator);
        };
        SortedMap.prototype.getReverseIteratorFrom = function(key, resultGenerator) {
          return new SortedMapIterator(this.root_, key, this.comparator_, true, resultGenerator);
        };
        SortedMap.prototype.getReverseIterator = function(resultGenerator) {
          return new SortedMapIterator(this.root_, null, this.comparator_, true, resultGenerator);
        };
        SortedMap.EMPTY_NODE = new LLRBEmptyNode();
        return SortedMap;
      }();
      var LOG_2 = Math.log(2);
      var Base12Num = function() {
        function Base12Num(length) {
          var logBase2 = function(num) {
            return parseInt(Math.log(num) / LOG_2, 10);
          };
          var bitMask = function(bits) {
            return parseInt(Array(bits + 1).join("1"), 2);
          };
          this.count = logBase2(length + 1);
          this.current_ = this.count - 1;
          var mask = bitMask(this.count);
          this.bits_ = length + 1 & mask;
        }
        Base12Num.prototype.nextBitIsOne = function() {
          var result = !(this.bits_ & 1 << this.current_);
          this.current_--;
          return result;
        };
        return Base12Num;
      }();
      var buildChildSet = function(childList, cmp, keyFn, mapSortFn) {
        childList.sort(cmp);
        var buildBalancedTree = function(low, high) {
          var length = high - low;
          var namedNode;
          var key;
          if (0 === length) return null;
          if (1 === length) {
            namedNode = childList[low];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, null, null);
          }
          var middle = parseInt(length / 2, 10) + low;
          var left = buildBalancedTree(low, middle);
          var right = buildBalancedTree(middle + 1, high);
          namedNode = childList[middle];
          key = keyFn ? keyFn(namedNode) : namedNode;
          return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, left, right);
        };
        var buildFrom12Array = function(base12) {
          var node = null;
          var root = null;
          var index = childList.length;
          var buildPennant = function(chunkSize, color) {
            var low = index - chunkSize;
            var high = index;
            index -= chunkSize;
            var childTree = buildBalancedTree(low + 1, high);
            var namedNode = childList[low];
            var key = keyFn ? keyFn(namedNode) : namedNode;
            attachPennant(new LLRBNode(key, namedNode.node, color, null, childTree));
          };
          var attachPennant = function(pennant) {
            if (node) {
              node.left = pennant;
              node = pennant;
            } else {
              root = pennant;
              node = pennant;
            }
          };
          for (var i = 0; i < base12.count; ++i) {
            var isOne = base12.nextBitIsOne();
            var chunkSize = Math.pow(2, base12.count - (i + 1));
            if (isOne) buildPennant(chunkSize, LLRBNode.BLACK); else {
              buildPennant(chunkSize, LLRBNode.BLACK);
              buildPennant(chunkSize, LLRBNode.RED);
            }
          }
          return root;
        };
        var base12 = new Base12Num(childList.length);
        var root = buildFrom12Array(base12);
        return new SortedMap(mapSortFn || cmp, root);
      };
      var _defaultIndexMap;
      var fallbackObject = {};
      var IndexMap = function() {
        function IndexMap(indexes_, indexSet_) {
          this.indexes_ = indexes_;
          this.indexSet_ = indexSet_;
        }
        Object.defineProperty(IndexMap, "Default", {
          get: function() {
            util.assert(fallbackObject && PRIORITY_INDEX, "ChildrenNode.ts has not been loaded");
            _defaultIndexMap = _defaultIndexMap || new IndexMap({
              ".priority": fallbackObject
            }, {
              ".priority": PRIORITY_INDEX
            });
            return _defaultIndexMap;
          },
          enumerable: false,
          configurable: true
        });
        IndexMap.prototype.get = function(indexKey) {
          var sortedMap = util.safeGet(this.indexes_, indexKey);
          if (!sortedMap) throw new Error("No index defined for " + indexKey);
          return sortedMap instanceof SortedMap ? sortedMap : null;
        };
        IndexMap.prototype.hasIndex = function(indexDefinition) {
          return util.contains(this.indexSet_, indexDefinition.toString());
        };
        IndexMap.prototype.addIndex = function(indexDefinition, existingChildren) {
          util.assert(indexDefinition !== KEY_INDEX, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
          var childList = [];
          var sawIndexedValue = false;
          var iter = existingChildren.getIterator(NamedNode.Wrap);
          var next = iter.getNext();
          while (next) {
            sawIndexedValue = sawIndexedValue || indexDefinition.isDefinedOn(next.node);
            childList.push(next);
            next = iter.getNext();
          }
          var newIndex;
          newIndex = sawIndexedValue ? buildChildSet(childList, indexDefinition.getCompare()) : fallbackObject;
          var indexName = indexDefinition.toString();
          var newIndexSet = tslib.__assign({}, this.indexSet_);
          newIndexSet[indexName] = indexDefinition;
          var newIndexes = tslib.__assign({}, this.indexes_);
          newIndexes[indexName] = newIndex;
          return new IndexMap(newIndexes, newIndexSet);
        };
        IndexMap.prototype.addToIndexes = function(namedNode, existingChildren) {
          var _this = this;
          var newIndexes = util.map(this.indexes_, function(indexedChildren, indexName) {
            var index = util.safeGet(_this.indexSet_, indexName);
            util.assert(index, "Missing index implementation for " + indexName);
            if (indexedChildren === fallbackObject) {
              if (index.isDefinedOn(namedNode.node)) {
                var childList = [];
                var iter = existingChildren.getIterator(NamedNode.Wrap);
                var next = iter.getNext();
                while (next) {
                  next.name !== namedNode.name && childList.push(next);
                  next = iter.getNext();
                }
                childList.push(namedNode);
                return buildChildSet(childList, index.getCompare());
              }
              return fallbackObject;
            }
            var existingSnap = existingChildren.get(namedNode.name);
            var newChildren = indexedChildren;
            existingSnap && (newChildren = newChildren.remove(new NamedNode(namedNode.name, existingSnap)));
            return newChildren.insert(namedNode, namedNode.node);
          });
          return new IndexMap(newIndexes, this.indexSet_);
        };
        IndexMap.prototype.removeFromIndexes = function(namedNode, existingChildren) {
          var newIndexes = util.map(this.indexes_, function(indexedChildren) {
            if (indexedChildren === fallbackObject) return indexedChildren;
            var existingSnap = existingChildren.get(namedNode.name);
            return existingSnap ? indexedChildren.remove(new NamedNode(namedNode.name, existingSnap)) : indexedChildren;
          });
          return new IndexMap(newIndexes, this.indexSet_);
        };
        return IndexMap;
      }();
      function NAME_ONLY_COMPARATOR(left, right) {
        return nameCompare(left.name, right.name);
      }
      function NAME_COMPARATOR(left, right) {
        return nameCompare(left, right);
      }
      var EMPTY_NODE;
      var ChildrenNode = function() {
        function ChildrenNode(children_, priorityNode_, indexMap_) {
          this.children_ = children_;
          this.priorityNode_ = priorityNode_;
          this.indexMap_ = indexMap_;
          this.lazyHash_ = null;
          this.priorityNode_ && validatePriorityNode(this.priorityNode_);
          this.children_.isEmpty() && util.assert(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority");
        }
        Object.defineProperty(ChildrenNode, "EMPTY_NODE", {
          get: function() {
            return EMPTY_NODE || (EMPTY_NODE = new ChildrenNode(new SortedMap(NAME_COMPARATOR), null, IndexMap.Default));
          },
          enumerable: false,
          configurable: true
        });
        ChildrenNode.prototype.isLeafNode = function() {
          return false;
        };
        ChildrenNode.prototype.getPriority = function() {
          return this.priorityNode_ || EMPTY_NODE;
        };
        ChildrenNode.prototype.updatePriority = function(newPriorityNode) {
          return this.children_.isEmpty() ? this : new ChildrenNode(this.children_, newPriorityNode, this.indexMap_);
        };
        ChildrenNode.prototype.getImmediateChild = function(childName) {
          if (".priority" === childName) return this.getPriority();
          var child = this.children_.get(childName);
          return null === child ? EMPTY_NODE : child;
        };
        ChildrenNode.prototype.getChild = function(path) {
          var front = path.getFront();
          if (null === front) return this;
          return this.getImmediateChild(front).getChild(path.popFront());
        };
        ChildrenNode.prototype.hasChild = function(childName) {
          return null !== this.children_.get(childName);
        };
        ChildrenNode.prototype.updateImmediateChild = function(childName, newChildNode) {
          util.assert(newChildNode, "We should always be passing snapshot nodes");
          if (".priority" === childName) return this.updatePriority(newChildNode);
          var namedNode = new NamedNode(childName, newChildNode);
          var newChildren = void 0, newIndexMap = void 0;
          if (newChildNode.isEmpty()) {
            newChildren = this.children_.remove(childName);
            newIndexMap = this.indexMap_.removeFromIndexes(namedNode, this.children_);
          } else {
            newChildren = this.children_.insert(childName, newChildNode);
            newIndexMap = this.indexMap_.addToIndexes(namedNode, this.children_);
          }
          var newPriority = newChildren.isEmpty() ? EMPTY_NODE : this.priorityNode_;
          return new ChildrenNode(newChildren, newPriority, newIndexMap);
        };
        ChildrenNode.prototype.updateChild = function(path, newChildNode) {
          var front = path.getFront();
          if (null === front) return newChildNode;
          util.assert(".priority" !== path.getFront() || 1 === path.getLength(), ".priority must be the last token in a path");
          var newImmediateChild = this.getImmediateChild(front).updateChild(path.popFront(), newChildNode);
          return this.updateImmediateChild(front, newImmediateChild);
        };
        ChildrenNode.prototype.isEmpty = function() {
          return this.children_.isEmpty();
        };
        ChildrenNode.prototype.numChildren = function() {
          return this.children_.count();
        };
        ChildrenNode.prototype.val = function(exportFormat) {
          if (this.isEmpty()) return null;
          var obj = {};
          var numKeys = 0, maxKey = 0, allIntegerKeys = true;
          this.forEachChild(PRIORITY_INDEX, function(key, childNode) {
            obj[key] = childNode.val(exportFormat);
            numKeys++;
            allIntegerKeys && ChildrenNode.INTEGER_REGEXP_.test(key) ? maxKey = Math.max(maxKey, Number(key)) : allIntegerKeys = false;
          });
          if (!exportFormat && allIntegerKeys && maxKey < 2 * numKeys) {
            var array = [];
            for (var key in obj) array[key] = obj[key];
            return array;
          }
          exportFormat && !this.getPriority().isEmpty() && (obj[".priority"] = this.getPriority().val());
          return obj;
        };
        ChildrenNode.prototype.hash = function() {
          if (null === this.lazyHash_) {
            var toHash_1 = "";
            this.getPriority().isEmpty() || (toHash_1 += "priority:" + priorityHashText(this.getPriority().val()) + ":");
            this.forEachChild(PRIORITY_INDEX, function(key, childNode) {
              var childHash = childNode.hash();
              "" !== childHash && (toHash_1 += ":" + key + ":" + childHash);
            });
            this.lazyHash_ = "" === toHash_1 ? "" : sha1(toHash_1);
          }
          return this.lazyHash_;
        };
        ChildrenNode.prototype.getPredecessorChildName = function(childName, childNode, index) {
          var idx = this.resolveIndex_(index);
          if (idx) {
            var predecessor = idx.getPredecessorKey(new NamedNode(childName, childNode));
            return predecessor ? predecessor.name : null;
          }
          return this.children_.getPredecessorKey(childName);
        };
        ChildrenNode.prototype.getFirstChildName = function(indexDefinition) {
          var idx = this.resolveIndex_(indexDefinition);
          if (idx) {
            var minKey = idx.minKey();
            return minKey && minKey.name;
          }
          return this.children_.minKey();
        };
        ChildrenNode.prototype.getFirstChild = function(indexDefinition) {
          var minKey = this.getFirstChildName(indexDefinition);
          return minKey ? new NamedNode(minKey, this.children_.get(minKey)) : null;
        };
        ChildrenNode.prototype.getLastChildName = function(indexDefinition) {
          var idx = this.resolveIndex_(indexDefinition);
          if (idx) {
            var maxKey = idx.maxKey();
            return maxKey && maxKey.name;
          }
          return this.children_.maxKey();
        };
        ChildrenNode.prototype.getLastChild = function(indexDefinition) {
          var maxKey = this.getLastChildName(indexDefinition);
          return maxKey ? new NamedNode(maxKey, this.children_.get(maxKey)) : null;
        };
        ChildrenNode.prototype.forEachChild = function(index, action) {
          var idx = this.resolveIndex_(index);
          return idx ? idx.inorderTraversal(function(wrappedNode) {
            return action(wrappedNode.name, wrappedNode.node);
          }) : this.children_.inorderTraversal(action);
        };
        ChildrenNode.prototype.getIterator = function(indexDefinition) {
          return this.getIteratorFrom(indexDefinition.minPost(), indexDefinition);
        };
        ChildrenNode.prototype.getIteratorFrom = function(startPost, indexDefinition) {
          var idx = this.resolveIndex_(indexDefinition);
          if (idx) return idx.getIteratorFrom(startPost, function(key) {
            return key;
          });
          var iterator = this.children_.getIteratorFrom(startPost.name, NamedNode.Wrap);
          var next = iterator.peek();
          while (null != next && indexDefinition.compare(next, startPost) < 0) {
            iterator.getNext();
            next = iterator.peek();
          }
          return iterator;
        };
        ChildrenNode.prototype.getReverseIterator = function(indexDefinition) {
          return this.getReverseIteratorFrom(indexDefinition.maxPost(), indexDefinition);
        };
        ChildrenNode.prototype.getReverseIteratorFrom = function(endPost, indexDefinition) {
          var idx = this.resolveIndex_(indexDefinition);
          if (idx) return idx.getReverseIteratorFrom(endPost, function(key) {
            return key;
          });
          var iterator = this.children_.getReverseIteratorFrom(endPost.name, NamedNode.Wrap);
          var next = iterator.peek();
          while (null != next && indexDefinition.compare(next, endPost) > 0) {
            iterator.getNext();
            next = iterator.peek();
          }
          return iterator;
        };
        ChildrenNode.prototype.compareTo = function(other) {
          return this.isEmpty() ? other.isEmpty() ? 0 : -1 : other.isLeafNode() || other.isEmpty() ? 1 : other === MAX_NODE$2 ? -1 : 0;
        };
        ChildrenNode.prototype.withIndex = function(indexDefinition) {
          if (indexDefinition === KEY_INDEX || this.indexMap_.hasIndex(indexDefinition)) return this;
          var newIndexMap = this.indexMap_.addIndex(indexDefinition, this.children_);
          return new ChildrenNode(this.children_, this.priorityNode_, newIndexMap);
        };
        ChildrenNode.prototype.isIndexed = function(index) {
          return index === KEY_INDEX || this.indexMap_.hasIndex(index);
        };
        ChildrenNode.prototype.equals = function(other) {
          if (other === this) return true;
          if (other.isLeafNode()) return false;
          var otherChildrenNode = other;
          if (this.getPriority().equals(otherChildrenNode.getPriority())) {
            if (this.children_.count() === otherChildrenNode.children_.count()) {
              var thisIter = this.getIterator(PRIORITY_INDEX);
              var otherIter = otherChildrenNode.getIterator(PRIORITY_INDEX);
              var thisCurrent = thisIter.getNext();
              var otherCurrent = otherIter.getNext();
              while (thisCurrent && otherCurrent) {
                if (thisCurrent.name !== otherCurrent.name || !thisCurrent.node.equals(otherCurrent.node)) return false;
                thisCurrent = thisIter.getNext();
                otherCurrent = otherIter.getNext();
              }
              return null === thisCurrent && null === otherCurrent;
            }
            return false;
          }
          return false;
        };
        ChildrenNode.prototype.resolveIndex_ = function(indexDefinition) {
          return indexDefinition === KEY_INDEX ? null : this.indexMap_.get(indexDefinition.toString());
        };
        ChildrenNode.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
        return ChildrenNode;
      }();
      var MaxNode = function(_super) {
        tslib.__extends(MaxNode, _super);
        function MaxNode() {
          return _super.call(this, new SortedMap(NAME_COMPARATOR), ChildrenNode.EMPTY_NODE, IndexMap.Default) || this;
        }
        MaxNode.prototype.compareTo = function(other) {
          return other === this ? 0 : 1;
        };
        MaxNode.prototype.equals = function(other) {
          return other === this;
        };
        MaxNode.prototype.getPriority = function() {
          return this;
        };
        MaxNode.prototype.getImmediateChild = function(childName) {
          return ChildrenNode.EMPTY_NODE;
        };
        MaxNode.prototype.isEmpty = function() {
          return false;
        };
        return MaxNode;
      }(ChildrenNode);
      var MAX_NODE$2 = new MaxNode();
      Object.defineProperties(NamedNode, {
        MIN: {
          value: new NamedNode(MIN_NAME, ChildrenNode.EMPTY_NODE)
        },
        MAX: {
          value: new NamedNode(MAX_NAME, MAX_NODE$2)
        }
      });
      KeyIndex.__EMPTY_NODE = ChildrenNode.EMPTY_NODE;
      LeafNode.__childrenNodeConstructor = ChildrenNode;
      setMaxNode(MAX_NODE$2);
      setMaxNode$1(MAX_NODE$2);
      var USE_HINZE = true;
      function nodeFromJSON$1(json, priority) {
        void 0 === priority && (priority = null);
        if (null === json) return ChildrenNode.EMPTY_NODE;
        "object" === typeof json && ".priority" in json && (priority = json[".priority"]);
        util.assert(null === priority || "string" === typeof priority || "number" === typeof priority || "object" === typeof priority && ".sv" in priority, "Invalid priority type found: " + typeof priority);
        "object" === typeof json && ".value" in json && null !== json[".value"] && (json = json[".value"]);
        if ("object" !== typeof json || ".sv" in json) {
          var jsonLeaf = json;
          return new LeafNode(jsonLeaf, nodeFromJSON$1(priority));
        }
        if (json instanceof Array || !USE_HINZE) {
          var node_1 = ChildrenNode.EMPTY_NODE;
          each(json, function(key, childData) {
            if (util.contains(json, key) && "." !== key.substring(0, 1)) {
              var childNode = nodeFromJSON$1(childData);
              !childNode.isLeafNode() && childNode.isEmpty() || (node_1 = node_1.updateImmediateChild(key, childNode));
            }
          });
          return node_1.updatePriority(nodeFromJSON$1(priority));
        }
        var children_1 = [];
        var childrenHavePriority_1 = false;
        var hinzeJsonObj = json;
        each(hinzeJsonObj, function(key, child) {
          if ("." !== key.substring(0, 1)) {
            var childNode = nodeFromJSON$1(child);
            if (!childNode.isEmpty()) {
              childrenHavePriority_1 = childrenHavePriority_1 || !childNode.getPriority().isEmpty();
              children_1.push(new NamedNode(key, childNode));
            }
          }
        });
        if (0 === children_1.length) return ChildrenNode.EMPTY_NODE;
        var childSet = buildChildSet(children_1, NAME_ONLY_COMPARATOR, function(namedNode) {
          return namedNode.name;
        }, NAME_COMPARATOR);
        if (childrenHavePriority_1) {
          var sortedChildSet = buildChildSet(children_1, PRIORITY_INDEX.getCompare());
          return new ChildrenNode(childSet, nodeFromJSON$1(priority), new IndexMap({
            ".priority": sortedChildSet
          }, {
            ".priority": PRIORITY_INDEX
          }));
        }
        return new ChildrenNode(childSet, nodeFromJSON$1(priority), IndexMap.Default);
      }
      setNodeFromJSON(nodeFromJSON$1);
      var ValueIndex = function(_super) {
        tslib.__extends(ValueIndex, _super);
        function ValueIndex() {
          return null !== _super && _super.apply(this, arguments) || this;
        }
        ValueIndex.prototype.compare = function(a, b) {
          var indexCmp = a.node.compareTo(b.node);
          return 0 === indexCmp ? nameCompare(a.name, b.name) : indexCmp;
        };
        ValueIndex.prototype.isDefinedOn = function(node) {
          return true;
        };
        ValueIndex.prototype.indexedValueChanged = function(oldNode, newNode) {
          return !oldNode.equals(newNode);
        };
        ValueIndex.prototype.minPost = function() {
          return NamedNode.MIN;
        };
        ValueIndex.prototype.maxPost = function() {
          return NamedNode.MAX;
        };
        ValueIndex.prototype.makePost = function(indexValue, name) {
          var valueNode = nodeFromJSON$1(indexValue);
          return new NamedNode(name, valueNode);
        };
        ValueIndex.prototype.toString = function() {
          return ".value";
        };
        return ValueIndex;
      }(Index);
      var VALUE_INDEX = new ValueIndex();
      var PathIndex = function(_super) {
        tslib.__extends(PathIndex, _super);
        function PathIndex(indexPath_) {
          var _this = _super.call(this) || this;
          _this.indexPath_ = indexPath_;
          util.assert(!indexPath_.isEmpty() && ".priority" !== indexPath_.getFront(), "Can't create PathIndex with empty path or .priority key");
          return _this;
        }
        PathIndex.prototype.extractChild = function(snap) {
          return snap.getChild(this.indexPath_);
        };
        PathIndex.prototype.isDefinedOn = function(node) {
          return !node.getChild(this.indexPath_).isEmpty();
        };
        PathIndex.prototype.compare = function(a, b) {
          var aChild = this.extractChild(a.node);
          var bChild = this.extractChild(b.node);
          var indexCmp = aChild.compareTo(bChild);
          return 0 === indexCmp ? nameCompare(a.name, b.name) : indexCmp;
        };
        PathIndex.prototype.makePost = function(indexValue, name) {
          var valueNode = nodeFromJSON$1(indexValue);
          var node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, valueNode);
          return new NamedNode(name, node);
        };
        PathIndex.prototype.maxPost = function() {
          var node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, MAX_NODE$2);
          return new NamedNode(MAX_NAME, node);
        };
        PathIndex.prototype.toString = function() {
          return this.indexPath_.slice().join("/");
        };
        return PathIndex;
      }(Index);
      var DataSnapshot = function() {
        function DataSnapshot(node_, ref_, index_) {
          this.node_ = node_;
          this.ref_ = ref_;
          this.index_ = index_;
        }
        DataSnapshot.prototype.val = function() {
          util.validateArgCount("DataSnapshot.val", 0, 0, arguments.length);
          return this.node_.val();
        };
        DataSnapshot.prototype.exportVal = function() {
          util.validateArgCount("DataSnapshot.exportVal", 0, 0, arguments.length);
          return this.node_.val(true);
        };
        DataSnapshot.prototype.toJSON = function() {
          util.validateArgCount("DataSnapshot.toJSON", 0, 1, arguments.length);
          return this.exportVal();
        };
        DataSnapshot.prototype.exists = function() {
          util.validateArgCount("DataSnapshot.exists", 0, 0, arguments.length);
          return !this.node_.isEmpty();
        };
        DataSnapshot.prototype.child = function(childPathString) {
          util.validateArgCount("DataSnapshot.child", 0, 1, arguments.length);
          childPathString = String(childPathString);
          validatePathString("DataSnapshot.child", 1, childPathString, false);
          var childPath = new Path(childPathString);
          var childRef = this.ref_.child(childPath);
          return new DataSnapshot(this.node_.getChild(childPath), childRef, PRIORITY_INDEX);
        };
        DataSnapshot.prototype.hasChild = function(childPathString) {
          util.validateArgCount("DataSnapshot.hasChild", 1, 1, arguments.length);
          validatePathString("DataSnapshot.hasChild", 1, childPathString, false);
          var childPath = new Path(childPathString);
          return !this.node_.getChild(childPath).isEmpty();
        };
        DataSnapshot.prototype.getPriority = function() {
          util.validateArgCount("DataSnapshot.getPriority", 0, 0, arguments.length);
          return this.node_.getPriority().val();
        };
        DataSnapshot.prototype.forEach = function(action) {
          var _this = this;
          util.validateArgCount("DataSnapshot.forEach", 1, 1, arguments.length);
          util.validateCallback("DataSnapshot.forEach", 1, action, false);
          if (this.node_.isLeafNode()) return false;
          var childrenNode = this.node_;
          return !!childrenNode.forEachChild(this.index_, function(key, node) {
            return action(new DataSnapshot(node, _this.ref_.child(key), PRIORITY_INDEX));
          });
        };
        DataSnapshot.prototype.hasChildren = function() {
          util.validateArgCount("DataSnapshot.hasChildren", 0, 0, arguments.length);
          return !this.node_.isLeafNode() && !this.node_.isEmpty();
        };
        Object.defineProperty(DataSnapshot.prototype, "key", {
          get: function() {
            return this.ref_.getKey();
          },
          enumerable: false,
          configurable: true
        });
        DataSnapshot.prototype.numChildren = function() {
          util.validateArgCount("DataSnapshot.numChildren", 0, 0, arguments.length);
          return this.node_.numChildren();
        };
        DataSnapshot.prototype.getRef = function() {
          util.validateArgCount("DataSnapshot.ref", 0, 0, arguments.length);
          return this.ref_;
        };
        Object.defineProperty(DataSnapshot.prototype, "ref", {
          get: function() {
            return this.getRef();
          },
          enumerable: false,
          configurable: true
        });
        return DataSnapshot;
      }();
      var DataEvent = function() {
        function DataEvent(eventType, eventRegistration, snapshot, prevName) {
          this.eventType = eventType;
          this.eventRegistration = eventRegistration;
          this.snapshot = snapshot;
          this.prevName = prevName;
        }
        DataEvent.prototype.getPath = function() {
          var ref = this.snapshot.getRef();
          return "value" === this.eventType ? ref.path : ref.getParent().path;
        };
        DataEvent.prototype.getEventType = function() {
          return this.eventType;
        };
        DataEvent.prototype.getEventRunner = function() {
          return this.eventRegistration.getEventRunner(this);
        };
        DataEvent.prototype.toString = function() {
          return this.getPath().toString() + ":" + this.eventType + ":" + util.stringify(this.snapshot.exportVal());
        };
        return DataEvent;
      }();
      var CancelEvent = function() {
        function CancelEvent(eventRegistration, error, path) {
          this.eventRegistration = eventRegistration;
          this.error = error;
          this.path = path;
        }
        CancelEvent.prototype.getPath = function() {
          return this.path;
        };
        CancelEvent.prototype.getEventType = function() {
          return "cancel";
        };
        CancelEvent.prototype.getEventRunner = function() {
          return this.eventRegistration.getEventRunner(this);
        };
        CancelEvent.prototype.toString = function() {
          return this.path.toString() + ":cancel";
        };
        return CancelEvent;
      }();
      var ValueEventRegistration = function() {
        function ValueEventRegistration(callback_, cancelCallback_, context_) {
          this.callback_ = callback_;
          this.cancelCallback_ = cancelCallback_;
          this.context_ = context_;
        }
        ValueEventRegistration.prototype.respondsTo = function(eventType) {
          return "value" === eventType;
        };
        ValueEventRegistration.prototype.createEvent = function(change, query) {
          var index = query.getQueryParams().getIndex();
          return new DataEvent("value", this, new DataSnapshot(change.snapshotNode, query.getRef(), index));
        };
        ValueEventRegistration.prototype.getEventRunner = function(eventData) {
          var ctx = this.context_;
          if ("cancel" === eventData.getEventType()) {
            util.assert(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback");
            var cancelCB_1 = this.cancelCallback_;
            return function() {
              cancelCB_1.call(ctx, eventData.error);
            };
          }
          var cb_1 = this.callback_;
          return function() {
            cb_1.call(ctx, eventData.snapshot);
          };
        };
        ValueEventRegistration.prototype.createCancelEvent = function(error, path) {
          return this.cancelCallback_ ? new CancelEvent(this, error, path) : null;
        };
        ValueEventRegistration.prototype.matches = function(other) {
          return other instanceof ValueEventRegistration && (!other.callback_ || !this.callback_ || other.callback_ === this.callback_ && other.context_ === this.context_);
        };
        ValueEventRegistration.prototype.hasAnyCallback = function() {
          return null !== this.callback_;
        };
        return ValueEventRegistration;
      }();
      var ChildEventRegistration = function() {
        function ChildEventRegistration(callbacks_, cancelCallback_, context_) {
          this.callbacks_ = callbacks_;
          this.cancelCallback_ = cancelCallback_;
          this.context_ = context_;
        }
        ChildEventRegistration.prototype.respondsTo = function(eventType) {
          var eventToCheck = "children_added" === eventType ? "child_added" : eventType;
          eventToCheck = "children_removed" === eventToCheck ? "child_removed" : eventToCheck;
          return util.contains(this.callbacks_, eventToCheck);
        };
        ChildEventRegistration.prototype.createCancelEvent = function(error, path) {
          return this.cancelCallback_ ? new CancelEvent(this, error, path) : null;
        };
        ChildEventRegistration.prototype.createEvent = function(change, query) {
          util.assert(null != change.childName, "Child events should have a childName.");
          var ref = query.getRef().child(change.childName);
          var index = query.getQueryParams().getIndex();
          return new DataEvent(change.type, this, new DataSnapshot(change.snapshotNode, ref, index), change.prevName);
        };
        ChildEventRegistration.prototype.getEventRunner = function(eventData) {
          var ctx = this.context_;
          if ("cancel" === eventData.getEventType()) {
            util.assert(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback");
            var cancelCB_2 = this.cancelCallback_;
            return function() {
              cancelCB_2.call(ctx, eventData.error);
            };
          }
          var cb_2 = this.callbacks_[eventData.eventType];
          return function() {
            cb_2.call(ctx, eventData.snapshot, eventData.prevName);
          };
        };
        ChildEventRegistration.prototype.matches = function(other) {
          var _this = this;
          if (other instanceof ChildEventRegistration) {
            if (!this.callbacks_ || !other.callbacks_) return true;
            if (this.context_ === other.context_) {
              var otherKeys = Object.keys(other.callbacks_);
              var thisKeys = Object.keys(this.callbacks_);
              var otherCount = otherKeys.length;
              var thisCount = thisKeys.length;
              if (otherCount === thisCount) {
                if (1 === otherCount) {
                  var otherKey = otherKeys[0];
                  var thisKey = thisKeys[0];
                  return thisKey === otherKey && (!other.callbacks_[otherKey] || !this.callbacks_[thisKey] || other.callbacks_[otherKey] === this.callbacks_[thisKey]);
                }
                return thisKeys.every(function(eventType) {
                  return other.callbacks_[eventType] === _this.callbacks_[eventType];
                });
              }
            }
          }
          return false;
        };
        ChildEventRegistration.prototype.hasAnyCallback = function() {
          return null !== this.callbacks_;
        };
        return ChildEventRegistration;
      }();
      var __referenceConstructor;
      var Query = function() {
        function Query(repo, path, queryParams_, orderByCalled_) {
          this.repo = repo;
          this.path = path;
          this.queryParams_ = queryParams_;
          this.orderByCalled_ = orderByCalled_;
        }
        Object.defineProperty(Query, "__referenceConstructor", {
          get: function() {
            util.assert(__referenceConstructor, "Reference.ts has not been loaded");
            return __referenceConstructor;
          },
          set: function(val) {
            __referenceConstructor = val;
          },
          enumerable: false,
          configurable: true
        });
        Query.validateQueryEndpoints_ = function(params) {
          var startNode = null;
          var endNode = null;
          params.hasStart() && (startNode = params.getIndexStartValue());
          params.hasEnd() && (endNode = params.getIndexEndValue());
          if (params.getIndex() === KEY_INDEX) {
            var tooManyArgsError = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().";
            var wrongArgTypeError = "Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";
            if (params.hasStart()) {
              var startName = params.getIndexStartName();
              if (startName !== MIN_NAME) throw new Error(tooManyArgsError);
              if ("string" !== typeof startNode) throw new Error(wrongArgTypeError);
            }
            if (params.hasEnd()) {
              var endName = params.getIndexEndName();
              if (endName !== MAX_NAME) throw new Error(tooManyArgsError);
              if ("string" !== typeof endNode) throw new Error(wrongArgTypeError);
            }
          } else if (params.getIndex() === PRIORITY_INDEX) {
            if (null != startNode && !isValidPriority(startNode) || null != endNode && !isValidPriority(endNode)) throw new Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");
          } else {
            util.assert(params.getIndex() instanceof PathIndex || params.getIndex() === VALUE_INDEX, "unknown index type.");
            if (null != startNode && "object" === typeof startNode || null != endNode && "object" === typeof endNode) throw new Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
          }
        };
        Query.validateLimit_ = function(params) {
          if (params.hasStart() && params.hasEnd() && params.hasLimit() && !params.hasAnchoredLimit()) throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");
        };
        Query.prototype.validateNoPreviousOrderByCall_ = function(fnName) {
          if (true === this.orderByCalled_) throw new Error(fnName + ": You can't combine multiple orderBy calls.");
        };
        Query.prototype.getQueryParams = function() {
          return this.queryParams_;
        };
        Query.prototype.getRef = function() {
          util.validateArgCount("Query.ref", 0, 0, arguments.length);
          return new Query.__referenceConstructor(this.repo, this.path);
        };
        Query.prototype.on = function(eventType, callback, cancelCallbackOrContext, context) {
          util.validateArgCount("Query.on", 2, 4, arguments.length);
          validateEventType("Query.on", 1, eventType, false);
          util.validateCallback("Query.on", 2, callback, false);
          var ret = Query.getCancelAndContextArgs_("Query.on", cancelCallbackOrContext, context);
          if ("value" === eventType) this.onValueEvent(callback, ret.cancel, ret.context); else {
            var callbacks = {};
            callbacks[eventType] = callback;
            this.onChildEvent(callbacks, ret.cancel, ret.context);
          }
          return callback;
        };
        Query.prototype.onValueEvent = function(callback, cancelCallback, context) {
          var container = new ValueEventRegistration(callback, cancelCallback || null, context || null);
          this.repo.addEventCallbackForQuery(this, container);
        };
        Query.prototype.onChildEvent = function(callbacks, cancelCallback, context) {
          var container = new ChildEventRegistration(callbacks, cancelCallback, context);
          this.repo.addEventCallbackForQuery(this, container);
        };
        Query.prototype.off = function(eventType, callback, context) {
          util.validateArgCount("Query.off", 0, 3, arguments.length);
          validateEventType("Query.off", 1, eventType, true);
          util.validateCallback("Query.off", 2, callback, true);
          util.validateContextObject("Query.off", 3, context, true);
          var container = null;
          var callbacks = null;
          if ("value" === eventType) {
            var valueCallback = callback || null;
            container = new ValueEventRegistration(valueCallback, null, context || null);
          } else if (eventType) {
            if (callback) {
              callbacks = {};
              callbacks[eventType] = callback;
            }
            container = new ChildEventRegistration(callbacks, null, context || null);
          }
          this.repo.removeEventCallbackForQuery(this, container);
        };
        Query.prototype.once = function(eventType, userCallback, failureCallbackOrContext, context) {
          var _this = this;
          util.validateArgCount("Query.once", 1, 4, arguments.length);
          validateEventType("Query.once", 1, eventType, false);
          util.validateCallback("Query.once", 2, userCallback, true);
          var ret = Query.getCancelAndContextArgs_("Query.once", failureCallbackOrContext, context);
          var firstCall = true;
          var deferred = new util.Deferred();
          deferred.promise.catch(function() {});
          var onceCallback = function(snapshot) {
            if (firstCall) {
              firstCall = false;
              _this.off(eventType, onceCallback);
              userCallback && userCallback.bind(ret.context)(snapshot);
              deferred.resolve(snapshot);
            }
          };
          this.on(eventType, onceCallback, function(err) {
            _this.off(eventType, onceCallback);
            ret.cancel && ret.cancel.bind(ret.context)(err);
            deferred.reject(err);
          });
          return deferred.promise;
        };
        Query.prototype.limitToFirst = function(limit) {
          util.validateArgCount("Query.limitToFirst", 1, 1, arguments.length);
          if ("number" !== typeof limit || Math.floor(limit) !== limit || limit <= 0) throw new Error("Query.limitToFirst: First argument must be a positive integer.");
          if (this.queryParams_.hasLimit()) throw new Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
          return new Query(this.repo, this.path, this.queryParams_.limitToFirst(limit), this.orderByCalled_);
        };
        Query.prototype.limitToLast = function(limit) {
          util.validateArgCount("Query.limitToLast", 1, 1, arguments.length);
          if ("number" !== typeof limit || Math.floor(limit) !== limit || limit <= 0) throw new Error("Query.limitToLast: First argument must be a positive integer.");
          if (this.queryParams_.hasLimit()) throw new Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
          return new Query(this.repo, this.path, this.queryParams_.limitToLast(limit), this.orderByCalled_);
        };
        Query.prototype.orderByChild = function(path) {
          util.validateArgCount("Query.orderByChild", 1, 1, arguments.length);
          if ("$key" === path) throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
          if ("$priority" === path) throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
          if ("$value" === path) throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
          validatePathString("Query.orderByChild", 1, path, false);
          this.validateNoPreviousOrderByCall_("Query.orderByChild");
          var parsedPath = new Path(path);
          if (parsedPath.isEmpty()) throw new Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
          var index = new PathIndex(parsedPath);
          var newParams = this.queryParams_.orderBy(index);
          Query.validateQueryEndpoints_(newParams);
          return new Query(this.repo, this.path, newParams, true);
        };
        Query.prototype.orderByKey = function() {
          util.validateArgCount("Query.orderByKey", 0, 0, arguments.length);
          this.validateNoPreviousOrderByCall_("Query.orderByKey");
          var newParams = this.queryParams_.orderBy(KEY_INDEX);
          Query.validateQueryEndpoints_(newParams);
          return new Query(this.repo, this.path, newParams, true);
        };
        Query.prototype.orderByPriority = function() {
          util.validateArgCount("Query.orderByPriority", 0, 0, arguments.length);
          this.validateNoPreviousOrderByCall_("Query.orderByPriority");
          var newParams = this.queryParams_.orderBy(PRIORITY_INDEX);
          Query.validateQueryEndpoints_(newParams);
          return new Query(this.repo, this.path, newParams, true);
        };
        Query.prototype.orderByValue = function() {
          util.validateArgCount("Query.orderByValue", 0, 0, arguments.length);
          this.validateNoPreviousOrderByCall_("Query.orderByValue");
          var newParams = this.queryParams_.orderBy(VALUE_INDEX);
          Query.validateQueryEndpoints_(newParams);
          return new Query(this.repo, this.path, newParams, true);
        };
        Query.prototype.startAt = function(value, name) {
          void 0 === value && (value = null);
          util.validateArgCount("Query.startAt", 0, 2, arguments.length);
          validateFirebaseDataArg("Query.startAt", 1, value, this.path, true);
          validateKey("Query.startAt", 2, name, true);
          var newParams = this.queryParams_.startAt(value, name);
          Query.validateLimit_(newParams);
          Query.validateQueryEndpoints_(newParams);
          if (this.queryParams_.hasStart()) throw new Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
          if (void 0 === value) {
            value = null;
            name = null;
          }
          return new Query(this.repo, this.path, newParams, this.orderByCalled_);
        };
        Query.prototype.endAt = function(value, name) {
          void 0 === value && (value = null);
          util.validateArgCount("Query.endAt", 0, 2, arguments.length);
          validateFirebaseDataArg("Query.endAt", 1, value, this.path, true);
          validateKey("Query.endAt", 2, name, true);
          var newParams = this.queryParams_.endAt(value, name);
          Query.validateLimit_(newParams);
          Query.validateQueryEndpoints_(newParams);
          if (this.queryParams_.hasEnd()) throw new Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
          return new Query(this.repo, this.path, newParams, this.orderByCalled_);
        };
        Query.prototype.equalTo = function(value, name) {
          util.validateArgCount("Query.equalTo", 1, 2, arguments.length);
          validateFirebaseDataArg("Query.equalTo", 1, value, this.path, false);
          validateKey("Query.equalTo", 2, name, true);
          if (this.queryParams_.hasStart()) throw new Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");
          if (this.queryParams_.hasEnd()) throw new Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
          return this.startAt(value, name).endAt(value, name);
        };
        Query.prototype.toString = function() {
          util.validateArgCount("Query.toString", 0, 0, arguments.length);
          return this.repo.toString() + this.path.toUrlEncodedString();
        };
        Query.prototype.toJSON = function() {
          util.validateArgCount("Query.toJSON", 0, 1, arguments.length);
          return this.toString();
        };
        Query.prototype.queryObject = function() {
          return this.queryParams_.getQueryObject();
        };
        Query.prototype.queryIdentifier = function() {
          var obj = this.queryObject();
          var id = ObjectToUniqueKey(obj);
          return "{}" === id ? "default" : id;
        };
        Query.prototype.isEqual = function(other) {
          util.validateArgCount("Query.isEqual", 1, 1, arguments.length);
          if (!(other instanceof Query)) {
            var error = "Query.isEqual failed: First argument must be an instance of firebase.database.Query.";
            throw new Error(error);
          }
          var sameRepo = this.repo === other.repo;
          var samePath = this.path.equals(other.path);
          var sameQueryIdentifier = this.queryIdentifier() === other.queryIdentifier();
          return sameRepo && samePath && sameQueryIdentifier;
        };
        Query.getCancelAndContextArgs_ = function(fnName, cancelOrContext, context) {
          var ret = {
            cancel: null,
            context: null
          };
          if (cancelOrContext && context) {
            ret.cancel = cancelOrContext;
            util.validateCallback(fnName, 3, ret.cancel, true);
            ret.context = context;
            util.validateContextObject(fnName, 4, ret.context, true);
          } else if (cancelOrContext) if ("object" === typeof cancelOrContext && null !== cancelOrContext) ret.context = cancelOrContext; else {
            if ("function" !== typeof cancelOrContext) throw new Error(util.errorPrefix(fnName, 3, true) + " must either be a cancel callback or a context object.");
            ret.cancel = cancelOrContext;
          }
          return ret;
        };
        Object.defineProperty(Query.prototype, "ref", {
          get: function() {
            return this.getRef();
          },
          enumerable: false,
          configurable: true
        });
        return Query;
      }();
      var ExistingValueProvider = function() {
        function ExistingValueProvider(node_) {
          this.node_ = node_;
        }
        ExistingValueProvider.prototype.getImmediateChild = function(childName) {
          var child = this.node_.getImmediateChild(childName);
          return new ExistingValueProvider(child);
        };
        ExistingValueProvider.prototype.node = function() {
          return this.node_;
        };
        return ExistingValueProvider;
      }();
      var DeferredValueProvider = function() {
        function DeferredValueProvider(syncTree, path) {
          this.syncTree_ = syncTree;
          this.path_ = path;
        }
        DeferredValueProvider.prototype.getImmediateChild = function(childName) {
          var childPath = this.path_.child(childName);
          return new DeferredValueProvider(this.syncTree_, childPath);
        };
        DeferredValueProvider.prototype.node = function() {
          return this.syncTree_.calcCompleteEventCache(this.path_);
        };
        return DeferredValueProvider;
      }();
      var generateWithValues = function(values) {
        values = values || {};
        values["timestamp"] = values["timestamp"] || new Date().getTime();
        return values;
      };
      var resolveDeferredLeafValue = function(value, existingVal, serverValues) {
        if (!value || "object" !== typeof value) return value;
        util.assert(".sv" in value, "Unexpected leaf node or priority contents");
        if ("string" === typeof value[".sv"]) return resolveScalarDeferredValue(value[".sv"], existingVal, serverValues);
        if ("object" === typeof value[".sv"]) return resolveComplexDeferredValue(value[".sv"], existingVal);
        util.assert(false, "Unexpected server value: " + JSON.stringify(value, null, 2));
      };
      var resolveScalarDeferredValue = function(op, existing, serverValues) {
        switch (op) {
         case "timestamp":
          return serverValues["timestamp"];

         default:
          util.assert(false, "Unexpected server value: " + op);
        }
      };
      var resolveComplexDeferredValue = function(op, existing, unused) {
        op.hasOwnProperty("increment") || util.assert(false, "Unexpected server value: " + JSON.stringify(op, null, 2));
        var delta = op["increment"];
        "number" !== typeof delta && util.assert(false, "Unexpected increment value: " + delta);
        var existingNode = existing.node();
        util.assert(null !== existingNode && "undefined" !== typeof existingNode, "Expected ChildrenNode.EMPTY_NODE for nulls");
        if (!existingNode.isLeafNode()) return delta;
        var leaf = existingNode;
        var existingVal = leaf.getValue();
        if ("number" !== typeof existingVal) return delta;
        return existingVal + delta;
      };
      var resolveDeferredValueTree = function(path, node, syncTree, serverValues) {
        return resolveDeferredValue(node, new DeferredValueProvider(syncTree, path), serverValues);
      };
      var resolveDeferredValueSnapshot = function(node, existing, serverValues) {
        return resolveDeferredValue(node, new ExistingValueProvider(existing), serverValues);
      };
      function resolveDeferredValue(node, existingVal, serverValues) {
        var rawPri = node.getPriority().val();
        var priority = resolveDeferredLeafValue(rawPri, existingVal.getImmediateChild(".priority"), serverValues);
        var newNode;
        if (node.isLeafNode()) {
          var leafNode = node;
          var value = resolveDeferredLeafValue(leafNode.getValue(), existingVal, serverValues);
          return value !== leafNode.getValue() || priority !== leafNode.getPriority().val() ? new LeafNode(value, nodeFromJSON$1(priority)) : node;
        }
        var childrenNode = node;
        newNode = childrenNode;
        priority !== childrenNode.getPriority().val() && (newNode = newNode.updatePriority(new LeafNode(priority)));
        childrenNode.forEachChild(PRIORITY_INDEX, function(childName, childNode) {
          var newChildNode = resolveDeferredValue(childNode, existingVal.getImmediateChild(childName), serverValues);
          newChildNode !== childNode && (newNode = newNode.updateImmediateChild(childName, newChildNode));
        });
        return newNode;
      }
      var SparseSnapshotTree = function() {
        function SparseSnapshotTree() {
          this.value = null;
          this.children = new Map();
        }
        SparseSnapshotTree.prototype.find = function(path) {
          if (null != this.value) return this.value.getChild(path);
          if (!path.isEmpty() && this.children.size > 0) {
            var childKey = path.getFront();
            path = path.popFront();
            if (this.children.has(childKey)) {
              var childTree = this.children.get(childKey);
              return childTree.find(path);
            }
            return null;
          }
          return null;
        };
        SparseSnapshotTree.prototype.remember = function(path, data) {
          if (path.isEmpty()) {
            this.value = data;
            this.children.clear();
          } else if (null !== this.value) this.value = this.value.updateChild(path, data); else {
            var childKey = path.getFront();
            this.children.has(childKey) || this.children.set(childKey, new SparseSnapshotTree());
            var child = this.children.get(childKey);
            path = path.popFront();
            child.remember(path, data);
          }
        };
        SparseSnapshotTree.prototype.forget = function(path) {
          if (path.isEmpty()) {
            this.value = null;
            this.children.clear();
            return true;
          }
          if (null !== this.value) {
            if (this.value.isLeafNode()) return false;
            var value = this.value;
            this.value = null;
            var self_1 = this;
            value.forEachChild(PRIORITY_INDEX, function(key, tree) {
              self_1.remember(new Path(key), tree);
            });
            return this.forget(path);
          }
          if (this.children.size > 0) {
            var childKey = path.getFront();
            path = path.popFront();
            if (this.children.has(childKey)) {
              var safeToRemove = this.children.get(childKey).forget(path);
              safeToRemove && this.children.delete(childKey);
            }
            return 0 === this.children.size;
          }
          return true;
        };
        SparseSnapshotTree.prototype.forEachTree = function(prefixPath, func) {
          null !== this.value ? func(prefixPath, this.value) : this.forEachChild(function(key, tree) {
            var path = new Path(prefixPath.toString() + "/" + key);
            tree.forEachTree(path, func);
          });
        };
        SparseSnapshotTree.prototype.forEachChild = function(func) {
          this.children.forEach(function(tree, key) {
            func(key, tree);
          });
        };
        return SparseSnapshotTree;
      }();
      var OperationType;
      (function(OperationType) {
        OperationType[OperationType["OVERWRITE"] = 0] = "OVERWRITE";
        OperationType[OperationType["MERGE"] = 1] = "MERGE";
        OperationType[OperationType["ACK_USER_WRITE"] = 2] = "ACK_USER_WRITE";
        OperationType[OperationType["LISTEN_COMPLETE"] = 3] = "LISTEN_COMPLETE";
      })(OperationType || (OperationType = {}));
      var OperationSource = function() {
        function OperationSource(fromUser, fromServer, queryId, tagged) {
          this.fromUser = fromUser;
          this.fromServer = fromServer;
          this.queryId = queryId;
          this.tagged = tagged;
          util.assert(!tagged || fromServer, "Tagged queries must be from server.");
        }
        OperationSource.User = new OperationSource(true, false, null, false);
        OperationSource.Server = new OperationSource(false, true, null, false);
        OperationSource.forServerTaggedQuery = function(queryId) {
          return new OperationSource(false, true, queryId, true);
        };
        return OperationSource;
      }();
      var AckUserWrite = function() {
        function AckUserWrite(path, affectedTree, revert) {
          this.path = path;
          this.affectedTree = affectedTree;
          this.revert = revert;
          this.type = OperationType.ACK_USER_WRITE;
          this.source = OperationSource.User;
        }
        AckUserWrite.prototype.operationForChild = function(childName) {
          if (this.path.isEmpty()) {
            if (null != this.affectedTree.value) {
              util.assert(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths.");
              return this;
            }
            var childTree = this.affectedTree.subtree(new Path(childName));
            return new AckUserWrite(Path.Empty, childTree, this.revert);
          }
          util.assert(this.path.getFront() === childName, "operationForChild called for unrelated child.");
          return new AckUserWrite(this.path.popFront(), this.affectedTree, this.revert);
        };
        return AckUserWrite;
      }();
      var emptyChildrenSingleton;
      var EmptyChildren = function() {
        emptyChildrenSingleton || (emptyChildrenSingleton = new SortedMap(stringCompare));
        return emptyChildrenSingleton;
      };
      var ImmutableTree = function() {
        function ImmutableTree(value, children) {
          void 0 === children && (children = EmptyChildren());
          this.value = value;
          this.children = children;
        }
        ImmutableTree.fromObject = function(obj) {
          var tree = ImmutableTree.Empty;
          each(obj, function(childPath, childSnap) {
            tree = tree.set(new Path(childPath), childSnap);
          });
          return tree;
        };
        ImmutableTree.prototype.isEmpty = function() {
          return null === this.value && this.children.isEmpty();
        };
        ImmutableTree.prototype.findRootMostMatchingPathAndValue = function(relativePath, predicate) {
          if (null != this.value && predicate(this.value)) return {
            path: Path.Empty,
            value: this.value
          };
          if (relativePath.isEmpty()) return null;
          var front = relativePath.getFront();
          var child = this.children.get(front);
          if (null !== child) {
            var childExistingPathAndValue = child.findRootMostMatchingPathAndValue(relativePath.popFront(), predicate);
            if (null != childExistingPathAndValue) {
              var fullPath = new Path(front).child(childExistingPathAndValue.path);
              return {
                path: fullPath,
                value: childExistingPathAndValue.value
              };
            }
            return null;
          }
          return null;
        };
        ImmutableTree.prototype.findRootMostValueAndPath = function(relativePath) {
          return this.findRootMostMatchingPathAndValue(relativePath, function() {
            return true;
          });
        };
        ImmutableTree.prototype.subtree = function(relativePath) {
          if (relativePath.isEmpty()) return this;
          var front = relativePath.getFront();
          var childTree = this.children.get(front);
          return null !== childTree ? childTree.subtree(relativePath.popFront()) : ImmutableTree.Empty;
        };
        ImmutableTree.prototype.set = function(relativePath, toSet) {
          if (relativePath.isEmpty()) return new ImmutableTree(toSet, this.children);
          var front = relativePath.getFront();
          var child = this.children.get(front) || ImmutableTree.Empty;
          var newChild = child.set(relativePath.popFront(), toSet);
          var newChildren = this.children.insert(front, newChild);
          return new ImmutableTree(this.value, newChildren);
        };
        ImmutableTree.prototype.remove = function(relativePath) {
          if (relativePath.isEmpty()) return this.children.isEmpty() ? ImmutableTree.Empty : new ImmutableTree(null, this.children);
          var front = relativePath.getFront();
          var child = this.children.get(front);
          if (child) {
            var newChild = child.remove(relativePath.popFront());
            var newChildren = void 0;
            newChildren = newChild.isEmpty() ? this.children.remove(front) : this.children.insert(front, newChild);
            return null === this.value && newChildren.isEmpty() ? ImmutableTree.Empty : new ImmutableTree(this.value, newChildren);
          }
          return this;
        };
        ImmutableTree.prototype.get = function(relativePath) {
          if (relativePath.isEmpty()) return this.value;
          var front = relativePath.getFront();
          var child = this.children.get(front);
          return child ? child.get(relativePath.popFront()) : null;
        };
        ImmutableTree.prototype.setTree = function(relativePath, newTree) {
          if (relativePath.isEmpty()) return newTree;
          var front = relativePath.getFront();
          var child = this.children.get(front) || ImmutableTree.Empty;
          var newChild = child.setTree(relativePath.popFront(), newTree);
          var newChildren = void 0;
          newChildren = newChild.isEmpty() ? this.children.remove(front) : this.children.insert(front, newChild);
          return new ImmutableTree(this.value, newChildren);
        };
        ImmutableTree.prototype.fold = function(fn) {
          return this.fold_(Path.Empty, fn);
        };
        ImmutableTree.prototype.fold_ = function(pathSoFar, fn) {
          var accum = {};
          this.children.inorderTraversal(function(childKey, childTree) {
            accum[childKey] = childTree.fold_(pathSoFar.child(childKey), fn);
          });
          return fn(pathSoFar, this.value, accum);
        };
        ImmutableTree.prototype.findOnPath = function(path, f) {
          return this.findOnPath_(path, Path.Empty, f);
        };
        ImmutableTree.prototype.findOnPath_ = function(pathToFollow, pathSoFar, f) {
          var result = !!this.value && f(pathSoFar, this.value);
          if (result) return result;
          if (pathToFollow.isEmpty()) return null;
          var front = pathToFollow.getFront();
          var nextChild = this.children.get(front);
          return nextChild ? nextChild.findOnPath_(pathToFollow.popFront(), pathSoFar.child(front), f) : null;
        };
        ImmutableTree.prototype.foreachOnPath = function(path, f) {
          return this.foreachOnPath_(path, Path.Empty, f);
        };
        ImmutableTree.prototype.foreachOnPath_ = function(pathToFollow, currentRelativePath, f) {
          if (pathToFollow.isEmpty()) return this;
          this.value && f(currentRelativePath, this.value);
          var front = pathToFollow.getFront();
          var nextChild = this.children.get(front);
          return nextChild ? nextChild.foreachOnPath_(pathToFollow.popFront(), currentRelativePath.child(front), f) : ImmutableTree.Empty;
        };
        ImmutableTree.prototype.foreach = function(f) {
          this.foreach_(Path.Empty, f);
        };
        ImmutableTree.prototype.foreach_ = function(currentRelativePath, f) {
          this.children.inorderTraversal(function(childName, childTree) {
            childTree.foreach_(currentRelativePath.child(childName), f);
          });
          this.value && f(currentRelativePath, this.value);
        };
        ImmutableTree.prototype.foreachChild = function(f) {
          this.children.inorderTraversal(function(childName, childTree) {
            childTree.value && f(childName, childTree.value);
          });
        };
        ImmutableTree.Empty = new ImmutableTree(null);
        return ImmutableTree;
      }();
      var ListenComplete = function() {
        function ListenComplete(source, path) {
          this.source = source;
          this.path = path;
          this.type = OperationType.LISTEN_COMPLETE;
        }
        ListenComplete.prototype.operationForChild = function(childName) {
          return this.path.isEmpty() ? new ListenComplete(this.source, Path.Empty) : new ListenComplete(this.source, this.path.popFront());
        };
        return ListenComplete;
      }();
      var Overwrite = function() {
        function Overwrite(source, path, snap) {
          this.source = source;
          this.path = path;
          this.snap = snap;
          this.type = OperationType.OVERWRITE;
        }
        Overwrite.prototype.operationForChild = function(childName) {
          return this.path.isEmpty() ? new Overwrite(this.source, Path.Empty, this.snap.getImmediateChild(childName)) : new Overwrite(this.source, this.path.popFront(), this.snap);
        };
        return Overwrite;
      }();
      var Merge = function() {
        function Merge(source, path, children) {
          this.source = source;
          this.path = path;
          this.children = children;
          this.type = OperationType.MERGE;
        }
        Merge.prototype.operationForChild = function(childName) {
          if (this.path.isEmpty()) {
            var childTree = this.children.subtree(new Path(childName));
            return childTree.isEmpty() ? null : childTree.value ? new Overwrite(this.source, Path.Empty, childTree.value) : new Merge(this.source, Path.Empty, childTree);
          }
          util.assert(this.path.getFront() === childName, "Can't get a merge for a child not on the path of the operation");
          return new Merge(this.source, this.path.popFront(), this.children);
        };
        Merge.prototype.toString = function() {
          return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")";
        };
        return Merge;
      }();
      var CacheNode = function() {
        function CacheNode(node_, fullyInitialized_, filtered_) {
          this.node_ = node_;
          this.fullyInitialized_ = fullyInitialized_;
          this.filtered_ = filtered_;
        }
        CacheNode.prototype.isFullyInitialized = function() {
          return this.fullyInitialized_;
        };
        CacheNode.prototype.isFiltered = function() {
          return this.filtered_;
        };
        CacheNode.prototype.isCompleteForPath = function(path) {
          if (path.isEmpty()) return this.isFullyInitialized() && !this.filtered_;
          var childKey = path.getFront();
          return this.isCompleteForChild(childKey);
        };
        CacheNode.prototype.isCompleteForChild = function(key) {
          return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(key);
        };
        CacheNode.prototype.getNode = function() {
          return this.node_;
        };
        return CacheNode;
      }();
      var ViewCache = function() {
        function ViewCache(eventCache_, serverCache_) {
          this.eventCache_ = eventCache_;
          this.serverCache_ = serverCache_;
        }
        ViewCache.prototype.updateEventSnap = function(eventSnap, complete, filtered) {
          return new ViewCache(new CacheNode(eventSnap, complete, filtered), this.serverCache_);
        };
        ViewCache.prototype.updateServerSnap = function(serverSnap, complete, filtered) {
          return new ViewCache(this.eventCache_, new CacheNode(serverSnap, complete, filtered));
        };
        ViewCache.prototype.getEventCache = function() {
          return this.eventCache_;
        };
        ViewCache.prototype.getCompleteEventSnap = function() {
          return this.eventCache_.isFullyInitialized() ? this.eventCache_.getNode() : null;
        };
        ViewCache.prototype.getServerCache = function() {
          return this.serverCache_;
        };
        ViewCache.prototype.getCompleteServerSnap = function() {
          return this.serverCache_.isFullyInitialized() ? this.serverCache_.getNode() : null;
        };
        ViewCache.Empty = new ViewCache(new CacheNode(ChildrenNode.EMPTY_NODE, false, false), new CacheNode(ChildrenNode.EMPTY_NODE, false, false));
        return ViewCache;
      }();
      var Change = function() {
        function Change(type, snapshotNode, childName, oldSnap, prevName) {
          this.type = type;
          this.snapshotNode = snapshotNode;
          this.childName = childName;
          this.oldSnap = oldSnap;
          this.prevName = prevName;
        }
        Change.valueChange = function(snapshot) {
          return new Change(Change.VALUE, snapshot);
        };
        Change.childAddedChange = function(childKey, snapshot) {
          return new Change(Change.CHILD_ADDED, snapshot, childKey);
        };
        Change.childRemovedChange = function(childKey, snapshot) {
          return new Change(Change.CHILD_REMOVED, snapshot, childKey);
        };
        Change.childChangedChange = function(childKey, newSnapshot, oldSnapshot) {
          return new Change(Change.CHILD_CHANGED, newSnapshot, childKey, oldSnapshot);
        };
        Change.childMovedChange = function(childKey, snapshot) {
          return new Change(Change.CHILD_MOVED, snapshot, childKey);
        };
        Change.CHILD_ADDED = "child_added";
        Change.CHILD_REMOVED = "child_removed";
        Change.CHILD_CHANGED = "child_changed";
        Change.CHILD_MOVED = "child_moved";
        Change.VALUE = "value";
        return Change;
      }();
      var IndexedFilter = function() {
        function IndexedFilter(index_) {
          this.index_ = index_;
        }
        IndexedFilter.prototype.updateChild = function(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
          util.assert(snap.isIndexed(this.index_), "A node must be indexed if only a child is updated");
          var oldChild = snap.getImmediateChild(key);
          if (oldChild.getChild(affectedPath).equals(newChild.getChild(affectedPath)) && oldChild.isEmpty() === newChild.isEmpty()) return snap;
          null != optChangeAccumulator && (newChild.isEmpty() ? snap.hasChild(key) ? optChangeAccumulator.trackChildChange(Change.childRemovedChange(key, oldChild)) : util.assert(snap.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : oldChild.isEmpty() ? optChangeAccumulator.trackChildChange(Change.childAddedChange(key, newChild)) : optChangeAccumulator.trackChildChange(Change.childChangedChange(key, newChild, oldChild)));
          return snap.isLeafNode() && newChild.isEmpty() ? snap : snap.updateImmediateChild(key, newChild).withIndex(this.index_);
        };
        IndexedFilter.prototype.updateFullNode = function(oldSnap, newSnap, optChangeAccumulator) {
          if (null != optChangeAccumulator) {
            oldSnap.isLeafNode() || oldSnap.forEachChild(PRIORITY_INDEX, function(key, childNode) {
              newSnap.hasChild(key) || optChangeAccumulator.trackChildChange(Change.childRemovedChange(key, childNode));
            });
            newSnap.isLeafNode() || newSnap.forEachChild(PRIORITY_INDEX, function(key, childNode) {
              if (oldSnap.hasChild(key)) {
                var oldChild = oldSnap.getImmediateChild(key);
                oldChild.equals(childNode) || optChangeAccumulator.trackChildChange(Change.childChangedChange(key, childNode, oldChild));
              } else optChangeAccumulator.trackChildChange(Change.childAddedChange(key, childNode));
            });
          }
          return newSnap.withIndex(this.index_);
        };
        IndexedFilter.prototype.updatePriority = function(oldSnap, newPriority) {
          return oldSnap.isEmpty() ? ChildrenNode.EMPTY_NODE : oldSnap.updatePriority(newPriority);
        };
        IndexedFilter.prototype.filtersNodes = function() {
          return false;
        };
        IndexedFilter.prototype.getIndexedFilter = function() {
          return this;
        };
        IndexedFilter.prototype.getIndex = function() {
          return this.index_;
        };
        return IndexedFilter;
      }();
      var ChildChangeAccumulator = function() {
        function ChildChangeAccumulator() {
          this.changeMap = new Map();
        }
        ChildChangeAccumulator.prototype.trackChildChange = function(change) {
          var type = change.type;
          var childKey = change.childName;
          util.assert(type === Change.CHILD_ADDED || type === Change.CHILD_CHANGED || type === Change.CHILD_REMOVED, "Only child changes supported for tracking");
          util.assert(".priority" !== childKey, "Only non-priority child changes can be tracked.");
          var oldChange = this.changeMap.get(childKey);
          if (oldChange) {
            var oldType = oldChange.type;
            if (type === Change.CHILD_ADDED && oldType === Change.CHILD_REMOVED) this.changeMap.set(childKey, Change.childChangedChange(childKey, change.snapshotNode, oldChange.snapshotNode)); else if (type === Change.CHILD_REMOVED && oldType === Change.CHILD_ADDED) this.changeMap.delete(childKey); else if (type === Change.CHILD_REMOVED && oldType === Change.CHILD_CHANGED) this.changeMap.set(childKey, Change.childRemovedChange(childKey, oldChange.oldSnap)); else if (type === Change.CHILD_CHANGED && oldType === Change.CHILD_ADDED) this.changeMap.set(childKey, Change.childAddedChange(childKey, change.snapshotNode)); else {
              if (type !== Change.CHILD_CHANGED || oldType !== Change.CHILD_CHANGED) throw util.assertionError("Illegal combination of changes: " + change + " occurred after " + oldChange);
              this.changeMap.set(childKey, Change.childChangedChange(childKey, change.snapshotNode, oldChange.oldSnap));
            }
          } else this.changeMap.set(childKey, change);
        };
        ChildChangeAccumulator.prototype.getChanges = function() {
          return Array.from(this.changeMap.values());
        };
        return ChildChangeAccumulator;
      }();
      var NoCompleteChildSource_ = function() {
        function NoCompleteChildSource_() {}
        NoCompleteChildSource_.prototype.getCompleteChild = function(childKey) {
          return null;
        };
        NoCompleteChildSource_.prototype.getChildAfterChild = function(index, child, reverse) {
          return null;
        };
        return NoCompleteChildSource_;
      }();
      var NO_COMPLETE_CHILD_SOURCE = new NoCompleteChildSource_();
      var WriteTreeCompleteChildSource = function() {
        function WriteTreeCompleteChildSource(writes_, viewCache_, optCompleteServerCache_) {
          void 0 === optCompleteServerCache_ && (optCompleteServerCache_ = null);
          this.writes_ = writes_;
          this.viewCache_ = viewCache_;
          this.optCompleteServerCache_ = optCompleteServerCache_;
        }
        WriteTreeCompleteChildSource.prototype.getCompleteChild = function(childKey) {
          var node = this.viewCache_.getEventCache();
          if (node.isCompleteForChild(childKey)) return node.getNode().getImmediateChild(childKey);
          var serverNode = null != this.optCompleteServerCache_ ? new CacheNode(this.optCompleteServerCache_, true, false) : this.viewCache_.getServerCache();
          return this.writes_.calcCompleteChild(childKey, serverNode);
        };
        WriteTreeCompleteChildSource.prototype.getChildAfterChild = function(index, child, reverse) {
          var completeServerData = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : this.viewCache_.getCompleteServerSnap();
          var nodes = this.writes_.calcIndexedSlice(completeServerData, child, 1, reverse, index);
          return 0 === nodes.length ? null : nodes[0];
        };
        return WriteTreeCompleteChildSource;
      }();
      var ProcessorResult = function() {
        function ProcessorResult(viewCache, changes) {
          this.viewCache = viewCache;
          this.changes = changes;
        }
        return ProcessorResult;
      }();
      var ViewProcessor = function() {
        function ViewProcessor(filter_) {
          this.filter_ = filter_;
        }
        ViewProcessor.prototype.assertIndexed = function(viewCache) {
          util.assert(viewCache.getEventCache().getNode().isIndexed(this.filter_.getIndex()), "Event snap not indexed");
          util.assert(viewCache.getServerCache().getNode().isIndexed(this.filter_.getIndex()), "Server snap not indexed");
        };
        ViewProcessor.prototype.applyOperation = function(oldViewCache, operation, writesCache, completeCache) {
          var accumulator = new ChildChangeAccumulator();
          var newViewCache, filterServerNode;
          if (operation.type === OperationType.OVERWRITE) {
            var overwrite = operation;
            if (overwrite.source.fromUser) newViewCache = this.applyUserOverwrite_(oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, accumulator); else {
              util.assert(overwrite.source.fromServer, "Unknown source.");
              filterServerNode = overwrite.source.tagged || oldViewCache.getServerCache().isFiltered() && !overwrite.path.isEmpty();
              newViewCache = this.applyServerOverwrite_(oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, filterServerNode, accumulator);
            }
          } else if (operation.type === OperationType.MERGE) {
            var merge = operation;
            if (merge.source.fromUser) newViewCache = this.applyUserMerge_(oldViewCache, merge.path, merge.children, writesCache, completeCache, accumulator); else {
              util.assert(merge.source.fromServer, "Unknown source.");
              filterServerNode = merge.source.tagged || oldViewCache.getServerCache().isFiltered();
              newViewCache = this.applyServerMerge_(oldViewCache, merge.path, merge.children, writesCache, completeCache, filterServerNode, accumulator);
            }
          } else if (operation.type === OperationType.ACK_USER_WRITE) {
            var ackUserWrite = operation;
            newViewCache = ackUserWrite.revert ? this.revertUserWrite_(oldViewCache, ackUserWrite.path, writesCache, completeCache, accumulator) : this.ackUserWrite_(oldViewCache, ackUserWrite.path, ackUserWrite.affectedTree, writesCache, completeCache, accumulator);
          } else {
            if (operation.type !== OperationType.LISTEN_COMPLETE) throw util.assertionError("Unknown operation type: " + operation.type);
            newViewCache = this.listenComplete_(oldViewCache, operation.path, writesCache, accumulator);
          }
          var changes = accumulator.getChanges();
          ViewProcessor.maybeAddValueEvent_(oldViewCache, newViewCache, changes);
          return new ProcessorResult(newViewCache, changes);
        };
        ViewProcessor.maybeAddValueEvent_ = function(oldViewCache, newViewCache, accumulator) {
          var eventSnap = newViewCache.getEventCache();
          if (eventSnap.isFullyInitialized()) {
            var isLeafOrEmpty = eventSnap.getNode().isLeafNode() || eventSnap.getNode().isEmpty();
            var oldCompleteSnap = oldViewCache.getCompleteEventSnap();
            (accumulator.length > 0 || !oldViewCache.getEventCache().isFullyInitialized() || isLeafOrEmpty && !eventSnap.getNode().equals(oldCompleteSnap) || !eventSnap.getNode().getPriority().equals(oldCompleteSnap.getPriority())) && accumulator.push(Change.valueChange(newViewCache.getCompleteEventSnap()));
          }
        };
        ViewProcessor.prototype.generateEventCacheAfterServerEvent_ = function(viewCache, changePath, writesCache, source, accumulator) {
          var oldEventSnap = viewCache.getEventCache();
          if (null != writesCache.shadowingWrite(changePath)) return viewCache;
          var newEventCache = void 0, serverNode = void 0;
          if (changePath.isEmpty()) {
            util.assert(viewCache.getServerCache().isFullyInitialized(), "If change path is empty, we must have complete server data");
            if (viewCache.getServerCache().isFiltered()) {
              var serverCache = viewCache.getCompleteServerSnap();
              var completeChildren = serverCache instanceof ChildrenNode ? serverCache : ChildrenNode.EMPTY_NODE;
              var completeEventChildren = writesCache.calcCompleteEventChildren(completeChildren);
              newEventCache = this.filter_.updateFullNode(viewCache.getEventCache().getNode(), completeEventChildren, accumulator);
            } else {
              var completeNode = writesCache.calcCompleteEventCache(viewCache.getCompleteServerSnap());
              newEventCache = this.filter_.updateFullNode(viewCache.getEventCache().getNode(), completeNode, accumulator);
            }
          } else {
            var childKey = changePath.getFront();
            if (".priority" === childKey) {
              util.assert(1 === changePath.getLength(), "Can't have a priority with additional path components");
              var oldEventNode = oldEventSnap.getNode();
              serverNode = viewCache.getServerCache().getNode();
              var updatedPriority = writesCache.calcEventCacheAfterServerOverwrite(changePath, oldEventNode, serverNode);
              newEventCache = null != updatedPriority ? this.filter_.updatePriority(oldEventNode, updatedPriority) : oldEventSnap.getNode();
            } else {
              var childChangePath = changePath.popFront();
              var newEventChild = void 0;
              if (oldEventSnap.isCompleteForChild(childKey)) {
                serverNode = viewCache.getServerCache().getNode();
                var eventChildUpdate = writesCache.calcEventCacheAfterServerOverwrite(changePath, oldEventSnap.getNode(), serverNode);
                newEventChild = null != eventChildUpdate ? oldEventSnap.getNode().getImmediateChild(childKey).updateChild(childChangePath, eventChildUpdate) : oldEventSnap.getNode().getImmediateChild(childKey);
              } else newEventChild = writesCache.calcCompleteChild(childKey, viewCache.getServerCache());
              newEventCache = null != newEventChild ? this.filter_.updateChild(oldEventSnap.getNode(), childKey, newEventChild, childChangePath, source, accumulator) : oldEventSnap.getNode();
            }
          }
          return viewCache.updateEventSnap(newEventCache, oldEventSnap.isFullyInitialized() || changePath.isEmpty(), this.filter_.filtersNodes());
        };
        ViewProcessor.prototype.applyServerOverwrite_ = function(oldViewCache, changePath, changedSnap, writesCache, completeCache, filterServerNode, accumulator) {
          var oldServerSnap = oldViewCache.getServerCache();
          var newServerCache;
          var serverFilter = filterServerNode ? this.filter_ : this.filter_.getIndexedFilter();
          if (changePath.isEmpty()) newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), changedSnap, null); else if (serverFilter.filtersNodes() && !oldServerSnap.isFiltered()) {
            var newServerNode = oldServerSnap.getNode().updateChild(changePath, changedSnap);
            newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), newServerNode, null);
          } else {
            var childKey = changePath.getFront();
            if (!oldServerSnap.isCompleteForPath(changePath) && changePath.getLength() > 1) return oldViewCache;
            var childChangePath = changePath.popFront();
            var childNode = oldServerSnap.getNode().getImmediateChild(childKey);
            var newChildNode = childNode.updateChild(childChangePath, changedSnap);
            newServerCache = ".priority" === childKey ? serverFilter.updatePriority(oldServerSnap.getNode(), newChildNode) : serverFilter.updateChild(oldServerSnap.getNode(), childKey, newChildNode, childChangePath, NO_COMPLETE_CHILD_SOURCE, null);
          }
          var newViewCache = oldViewCache.updateServerSnap(newServerCache, oldServerSnap.isFullyInitialized() || changePath.isEmpty(), serverFilter.filtersNodes());
          var source = new WriteTreeCompleteChildSource(writesCache, newViewCache, completeCache);
          return this.generateEventCacheAfterServerEvent_(newViewCache, changePath, writesCache, source, accumulator);
        };
        ViewProcessor.prototype.applyUserOverwrite_ = function(oldViewCache, changePath, changedSnap, writesCache, completeCache, accumulator) {
          var oldEventSnap = oldViewCache.getEventCache();
          var newViewCache, newEventCache;
          var source = new WriteTreeCompleteChildSource(writesCache, oldViewCache, completeCache);
          if (changePath.isEmpty()) {
            newEventCache = this.filter_.updateFullNode(oldViewCache.getEventCache().getNode(), changedSnap, accumulator);
            newViewCache = oldViewCache.updateEventSnap(newEventCache, true, this.filter_.filtersNodes());
          } else {
            var childKey = changePath.getFront();
            if (".priority" === childKey) {
              newEventCache = this.filter_.updatePriority(oldViewCache.getEventCache().getNode(), changedSnap);
              newViewCache = oldViewCache.updateEventSnap(newEventCache, oldEventSnap.isFullyInitialized(), oldEventSnap.isFiltered());
            } else {
              var childChangePath = changePath.popFront();
              var oldChild = oldEventSnap.getNode().getImmediateChild(childKey);
              var newChild = void 0;
              if (childChangePath.isEmpty()) newChild = changedSnap; else {
                var childNode = source.getCompleteChild(childKey);
                newChild = null != childNode ? ".priority" === childChangePath.getBack() && childNode.getChild(childChangePath.parent()).isEmpty() ? childNode : childNode.updateChild(childChangePath, changedSnap) : ChildrenNode.EMPTY_NODE;
              }
              if (oldChild.equals(newChild)) newViewCache = oldViewCache; else {
                var newEventSnap = this.filter_.updateChild(oldEventSnap.getNode(), childKey, newChild, childChangePath, source, accumulator);
                newViewCache = oldViewCache.updateEventSnap(newEventSnap, oldEventSnap.isFullyInitialized(), this.filter_.filtersNodes());
              }
            }
          }
          return newViewCache;
        };
        ViewProcessor.cacheHasChild_ = function(viewCache, childKey) {
          return viewCache.getEventCache().isCompleteForChild(childKey);
        };
        ViewProcessor.prototype.applyUserMerge_ = function(viewCache, path, changedChildren, writesCache, serverCache, accumulator) {
          var _this = this;
          var curViewCache = viewCache;
          changedChildren.foreach(function(relativePath, childNode) {
            var writePath = path.child(relativePath);
            ViewProcessor.cacheHasChild_(viewCache, writePath.getFront()) && (curViewCache = _this.applyUserOverwrite_(curViewCache, writePath, childNode, writesCache, serverCache, accumulator));
          });
          changedChildren.foreach(function(relativePath, childNode) {
            var writePath = path.child(relativePath);
            ViewProcessor.cacheHasChild_(viewCache, writePath.getFront()) || (curViewCache = _this.applyUserOverwrite_(curViewCache, writePath, childNode, writesCache, serverCache, accumulator));
          });
          return curViewCache;
        };
        ViewProcessor.prototype.applyMerge_ = function(node, merge) {
          merge.foreach(function(relativePath, childNode) {
            node = node.updateChild(relativePath, childNode);
          });
          return node;
        };
        ViewProcessor.prototype.applyServerMerge_ = function(viewCache, path, changedChildren, writesCache, serverCache, filterServerNode, accumulator) {
          var _this = this;
          if (viewCache.getServerCache().getNode().isEmpty() && !viewCache.getServerCache().isFullyInitialized()) return viewCache;
          var curViewCache = viewCache;
          var viewMergeTree;
          viewMergeTree = path.isEmpty() ? changedChildren : ImmutableTree.Empty.setTree(path, changedChildren);
          var serverNode = viewCache.getServerCache().getNode();
          viewMergeTree.children.inorderTraversal(function(childKey, childTree) {
            if (serverNode.hasChild(childKey)) {
              var serverChild = viewCache.getServerCache().getNode().getImmediateChild(childKey);
              var newChild = _this.applyMerge_(serverChild, childTree);
              curViewCache = _this.applyServerOverwrite_(curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
            }
          });
          viewMergeTree.children.inorderTraversal(function(childKey, childMergeTree) {
            var isUnknownDeepMerge = !viewCache.getServerCache().isCompleteForChild(childKey) && null == childMergeTree.value;
            if (!serverNode.hasChild(childKey) && !isUnknownDeepMerge) {
              var serverChild = viewCache.getServerCache().getNode().getImmediateChild(childKey);
              var newChild = _this.applyMerge_(serverChild, childMergeTree);
              curViewCache = _this.applyServerOverwrite_(curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
            }
          });
          return curViewCache;
        };
        ViewProcessor.prototype.ackUserWrite_ = function(viewCache, ackPath, affectedTree, writesCache, completeCache, accumulator) {
          if (null != writesCache.shadowingWrite(ackPath)) return viewCache;
          var filterServerNode = viewCache.getServerCache().isFiltered();
          var serverCache = viewCache.getServerCache();
          if (null != affectedTree.value) {
            if (ackPath.isEmpty() && serverCache.isFullyInitialized() || serverCache.isCompleteForPath(ackPath)) return this.applyServerOverwrite_(viewCache, ackPath, serverCache.getNode().getChild(ackPath), writesCache, completeCache, filterServerNode, accumulator);
            if (ackPath.isEmpty()) {
              var changedChildren_1 = ImmutableTree.Empty;
              serverCache.getNode().forEachChild(KEY_INDEX, function(name, node) {
                changedChildren_1 = changedChildren_1.set(new Path(name), node);
              });
              return this.applyServerMerge_(viewCache, ackPath, changedChildren_1, writesCache, completeCache, filterServerNode, accumulator);
            }
            return viewCache;
          }
          var changedChildren_2 = ImmutableTree.Empty;
          affectedTree.foreach(function(mergePath, value) {
            var serverCachePath = ackPath.child(mergePath);
            serverCache.isCompleteForPath(serverCachePath) && (changedChildren_2 = changedChildren_2.set(mergePath, serverCache.getNode().getChild(serverCachePath)));
          });
          return this.applyServerMerge_(viewCache, ackPath, changedChildren_2, writesCache, completeCache, filterServerNode, accumulator);
        };
        ViewProcessor.prototype.listenComplete_ = function(viewCache, path, writesCache, accumulator) {
          var oldServerNode = viewCache.getServerCache();
          var newViewCache = viewCache.updateServerSnap(oldServerNode.getNode(), oldServerNode.isFullyInitialized() || path.isEmpty(), oldServerNode.isFiltered());
          return this.generateEventCacheAfterServerEvent_(newViewCache, path, writesCache, NO_COMPLETE_CHILD_SOURCE, accumulator);
        };
        ViewProcessor.prototype.revertUserWrite_ = function(viewCache, path, writesCache, completeServerCache, accumulator) {
          var complete;
          if (null != writesCache.shadowingWrite(path)) return viewCache;
          var source = new WriteTreeCompleteChildSource(writesCache, viewCache, completeServerCache);
          var oldEventCache = viewCache.getEventCache().getNode();
          var newEventCache = void 0;
          if (path.isEmpty() || ".priority" === path.getFront()) {
            var newNode = void 0;
            if (viewCache.getServerCache().isFullyInitialized()) newNode = writesCache.calcCompleteEventCache(viewCache.getCompleteServerSnap()); else {
              var serverChildren = viewCache.getServerCache().getNode();
              util.assert(serverChildren instanceof ChildrenNode, "serverChildren would be complete if leaf node");
              newNode = writesCache.calcCompleteEventChildren(serverChildren);
            }
            newNode = newNode;
            newEventCache = this.filter_.updateFullNode(oldEventCache, newNode, accumulator);
          } else {
            var childKey = path.getFront();
            var newChild = writesCache.calcCompleteChild(childKey, viewCache.getServerCache());
            null == newChild && viewCache.getServerCache().isCompleteForChild(childKey) && (newChild = oldEventCache.getImmediateChild(childKey));
            newEventCache = null != newChild ? this.filter_.updateChild(oldEventCache, childKey, newChild, path.popFront(), source, accumulator) : viewCache.getEventCache().getNode().hasChild(childKey) ? this.filter_.updateChild(oldEventCache, childKey, ChildrenNode.EMPTY_NODE, path.popFront(), source, accumulator) : oldEventCache;
            if (newEventCache.isEmpty() && viewCache.getServerCache().isFullyInitialized()) {
              complete = writesCache.calcCompleteEventCache(viewCache.getCompleteServerSnap());
              complete.isLeafNode() && (newEventCache = this.filter_.updateFullNode(newEventCache, complete, accumulator));
            }
          }
          complete = viewCache.getServerCache().isFullyInitialized() || null != writesCache.shadowingWrite(Path.Empty);
          return viewCache.updateEventSnap(newEventCache, complete, this.filter_.filtersNodes());
        };
        return ViewProcessor;
      }();
      var EventGenerator = function() {
        function EventGenerator(query_) {
          this.query_ = query_;
          this.index_ = this.query_.getQueryParams().getIndex();
        }
        EventGenerator.prototype.generateEventsForChanges = function(changes, eventCache, eventRegistrations) {
          var _this = this;
          var events = [];
          var moves = [];
          changes.forEach(function(change) {
            change.type === Change.CHILD_CHANGED && _this.index_.indexedValueChanged(change.oldSnap, change.snapshotNode) && moves.push(Change.childMovedChange(change.childName, change.snapshotNode));
          });
          this.generateEventsForType_(events, Change.CHILD_REMOVED, changes, eventRegistrations, eventCache);
          this.generateEventsForType_(events, Change.CHILD_ADDED, changes, eventRegistrations, eventCache);
          this.generateEventsForType_(events, Change.CHILD_MOVED, moves, eventRegistrations, eventCache);
          this.generateEventsForType_(events, Change.CHILD_CHANGED, changes, eventRegistrations, eventCache);
          this.generateEventsForType_(events, Change.VALUE, changes, eventRegistrations, eventCache);
          return events;
        };
        EventGenerator.prototype.generateEventsForType_ = function(events, eventType, changes, registrations, eventCache) {
          var _this = this;
          var filteredChanges = changes.filter(function(change) {
            return change.type === eventType;
          });
          filteredChanges.sort(this.compareChanges_.bind(this));
          filteredChanges.forEach(function(change) {
            var materializedChange = _this.materializeSingleChange_(change, eventCache);
            registrations.forEach(function(registration) {
              registration.respondsTo(change.type) && events.push(registration.createEvent(materializedChange, _this.query_));
            });
          });
        };
        EventGenerator.prototype.materializeSingleChange_ = function(change, eventCache) {
          if ("value" === change.type || "child_removed" === change.type) return change;
          change.prevName = eventCache.getPredecessorChildName(change.childName, change.snapshotNode, this.index_);
          return change;
        };
        EventGenerator.prototype.compareChanges_ = function(a, b) {
          if (null == a.childName || null == b.childName) throw util.assertionError("Should only compare child_ events.");
          var aWrapped = new NamedNode(a.childName, a.snapshotNode);
          var bWrapped = new NamedNode(b.childName, b.snapshotNode);
          return this.index_.compare(aWrapped, bWrapped);
        };
        return EventGenerator;
      }();
      var View = function() {
        function View(query_, initialViewCache) {
          this.query_ = query_;
          this.eventRegistrations_ = [];
          var params = this.query_.getQueryParams();
          var indexFilter = new IndexedFilter(params.getIndex());
          var filter = params.getNodeFilter();
          this.processor_ = new ViewProcessor(filter);
          var initialServerCache = initialViewCache.getServerCache();
          var initialEventCache = initialViewCache.getEventCache();
          var serverSnap = indexFilter.updateFullNode(ChildrenNode.EMPTY_NODE, initialServerCache.getNode(), null);
          var eventSnap = filter.updateFullNode(ChildrenNode.EMPTY_NODE, initialEventCache.getNode(), null);
          var newServerCache = new CacheNode(serverSnap, initialServerCache.isFullyInitialized(), indexFilter.filtersNodes());
          var newEventCache = new CacheNode(eventSnap, initialEventCache.isFullyInitialized(), filter.filtersNodes());
          this.viewCache_ = new ViewCache(newEventCache, newServerCache);
          this.eventGenerator_ = new EventGenerator(this.query_);
        }
        View.prototype.getQuery = function() {
          return this.query_;
        };
        View.prototype.getServerCache = function() {
          return this.viewCache_.getServerCache().getNode();
        };
        View.prototype.getCompleteServerCache = function(path) {
          var cache = this.viewCache_.getCompleteServerSnap();
          if (cache && (this.query_.getQueryParams().loadsAllData() || !path.isEmpty() && !cache.getImmediateChild(path.getFront()).isEmpty())) return cache.getChild(path);
          return null;
        };
        View.prototype.isEmpty = function() {
          return 0 === this.eventRegistrations_.length;
        };
        View.prototype.addEventRegistration = function(eventRegistration) {
          this.eventRegistrations_.push(eventRegistration);
        };
        View.prototype.removeEventRegistration = function(eventRegistration, cancelError) {
          var cancelEvents = [];
          if (cancelError) {
            util.assert(null == eventRegistration, "A cancel should cancel all event registrations.");
            var path_1 = this.query_.path;
            this.eventRegistrations_.forEach(function(registration) {
              cancelError = cancelError;
              var maybeEvent = registration.createCancelEvent(cancelError, path_1);
              maybeEvent && cancelEvents.push(maybeEvent);
            });
          }
          if (eventRegistration) {
            var remaining = [];
            for (var i = 0; i < this.eventRegistrations_.length; ++i) {
              var existing = this.eventRegistrations_[i];
              if (existing.matches(eventRegistration)) {
                if (eventRegistration.hasAnyCallback()) {
                  remaining = remaining.concat(this.eventRegistrations_.slice(i + 1));
                  break;
                }
              } else remaining.push(existing);
            }
            this.eventRegistrations_ = remaining;
          } else this.eventRegistrations_ = [];
          return cancelEvents;
        };
        View.prototype.applyOperation = function(operation, writesCache, completeServerCache) {
          if (operation.type === OperationType.MERGE && null !== operation.source.queryId) {
            util.assert(this.viewCache_.getCompleteServerSnap(), "We should always have a full cache before handling merges");
            util.assert(this.viewCache_.getCompleteEventSnap(), "Missing event cache, even though we have a server cache");
          }
          var oldViewCache = this.viewCache_;
          var result = this.processor_.applyOperation(oldViewCache, operation, writesCache, completeServerCache);
          this.processor_.assertIndexed(result.viewCache);
          util.assert(result.viewCache.getServerCache().isFullyInitialized() || !oldViewCache.getServerCache().isFullyInitialized(), "Once a server snap is complete, it should never go back");
          this.viewCache_ = result.viewCache;
          return this.generateEventsForChanges_(result.changes, result.viewCache.getEventCache().getNode(), null);
        };
        View.prototype.getInitialEvents = function(registration) {
          var eventSnap = this.viewCache_.getEventCache();
          var initialChanges = [];
          if (!eventSnap.getNode().isLeafNode()) {
            var eventNode = eventSnap.getNode();
            eventNode.forEachChild(PRIORITY_INDEX, function(key, childNode) {
              initialChanges.push(Change.childAddedChange(key, childNode));
            });
          }
          eventSnap.isFullyInitialized() && initialChanges.push(Change.valueChange(eventSnap.getNode()));
          return this.generateEventsForChanges_(initialChanges, eventSnap.getNode(), registration);
        };
        View.prototype.generateEventsForChanges_ = function(changes, eventCache, eventRegistration) {
          var registrations = eventRegistration ? [ eventRegistration ] : this.eventRegistrations_;
          return this.eventGenerator_.generateEventsForChanges(changes, eventCache, registrations);
        };
        return View;
      }();
      var __referenceConstructor$1;
      var SyncPoint = function() {
        function SyncPoint() {
          this.views = new Map();
        }
        Object.defineProperty(SyncPoint, "__referenceConstructor", {
          get: function() {
            util.assert(__referenceConstructor$1, "Reference.ts has not been loaded");
            return __referenceConstructor$1;
          },
          set: function(val) {
            util.assert(!__referenceConstructor$1, "__referenceConstructor has already been defined");
            __referenceConstructor$1 = val;
          },
          enumerable: false,
          configurable: true
        });
        SyncPoint.prototype.isEmpty = function() {
          return 0 === this.views.size;
        };
        SyncPoint.prototype.applyOperation = function(operation, writesCache, optCompleteServerCache) {
          var e_1, _a;
          var queryId = operation.source.queryId;
          if (null !== queryId) {
            var view = this.views.get(queryId);
            util.assert(null != view, "SyncTree gave us an op for an invalid query.");
            return view.applyOperation(operation, writesCache, optCompleteServerCache);
          }
          var events = [];
          try {
            for (var _b = tslib.__values(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var view = _c.value;
              events = events.concat(view.applyOperation(operation, writesCache, optCompleteServerCache));
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              _c && !_c.done && (_a = _b.return) && _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          return events;
        };
        SyncPoint.prototype.addEventRegistration = function(query, eventRegistration, writesCache, serverCache, serverCacheComplete) {
          var queryId = query.queryIdentifier();
          var view = this.views.get(queryId);
          if (!view) {
            var eventCache = writesCache.calcCompleteEventCache(serverCacheComplete ? serverCache : null);
            var eventCacheComplete = false;
            if (eventCache) eventCacheComplete = true; else if (serverCache instanceof ChildrenNode) {
              eventCache = writesCache.calcCompleteEventChildren(serverCache);
              eventCacheComplete = false;
            } else {
              eventCache = ChildrenNode.EMPTY_NODE;
              eventCacheComplete = false;
            }
            var viewCache = new ViewCache(new CacheNode(eventCache, eventCacheComplete, false), new CacheNode(serverCache, serverCacheComplete, false));
            view = new View(query, viewCache);
            this.views.set(queryId, view);
          }
          view.addEventRegistration(eventRegistration);
          return view.getInitialEvents(eventRegistration);
        };
        SyncPoint.prototype.removeEventRegistration = function(query, eventRegistration, cancelError) {
          var e_2, _a;
          var queryId = query.queryIdentifier();
          var removed = [];
          var cancelEvents = [];
          var hadCompleteView = this.hasCompleteView();
          if ("default" === queryId) try {
            for (var _b = tslib.__values(this.views.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var _d = tslib.__read(_c.value, 2), viewQueryId = _d[0], view = _d[1];
              cancelEvents = cancelEvents.concat(view.removeEventRegistration(eventRegistration, cancelError));
              if (view.isEmpty()) {
                this.views.delete(viewQueryId);
                view.getQuery().getQueryParams().loadsAllData() || removed.push(view.getQuery());
              }
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              _c && !_c.done && (_a = _b.return) && _a.call(_b);
            } finally {
              if (e_2) throw e_2.error;
            }
          } else {
            var view = this.views.get(queryId);
            if (view) {
              cancelEvents = cancelEvents.concat(view.removeEventRegistration(eventRegistration, cancelError));
              if (view.isEmpty()) {
                this.views.delete(queryId);
                view.getQuery().getQueryParams().loadsAllData() || removed.push(view.getQuery());
              }
            }
          }
          hadCompleteView && !this.hasCompleteView() && removed.push(new SyncPoint.__referenceConstructor(query.repo, query.path));
          return {
            removed: removed,
            events: cancelEvents
          };
        };
        SyncPoint.prototype.getQueryViews = function() {
          var e_3, _a;
          var result = [];
          try {
            for (var _b = tslib.__values(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var view = _c.value;
              view.getQuery().getQueryParams().loadsAllData() || result.push(view);
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              _c && !_c.done && (_a = _b.return) && _a.call(_b);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
          return result;
        };
        SyncPoint.prototype.getCompleteServerCache = function(path) {
          var e_4, _a;
          var serverCache = null;
          try {
            for (var _b = tslib.__values(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var view = _c.value;
              serverCache = serverCache || view.getCompleteServerCache(path);
            }
          } catch (e_4_1) {
            e_4 = {
              error: e_4_1
            };
          } finally {
            try {
              _c && !_c.done && (_a = _b.return) && _a.call(_b);
            } finally {
              if (e_4) throw e_4.error;
            }
          }
          return serverCache;
        };
        SyncPoint.prototype.viewForQuery = function(query) {
          var params = query.getQueryParams();
          if (params.loadsAllData()) return this.getCompleteView();
          var queryId = query.queryIdentifier();
          return this.views.get(queryId);
        };
        SyncPoint.prototype.viewExistsForQuery = function(query) {
          return null != this.viewForQuery(query);
        };
        SyncPoint.prototype.hasCompleteView = function() {
          return null != this.getCompleteView();
        };
        SyncPoint.prototype.getCompleteView = function() {
          var e_5, _a;
          try {
            for (var _b = tslib.__values(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var view = _c.value;
              if (view.getQuery().getQueryParams().loadsAllData()) return view;
            }
          } catch (e_5_1) {
            e_5 = {
              error: e_5_1
            };
          } finally {
            try {
              _c && !_c.done && (_a = _b.return) && _a.call(_b);
            } finally {
              if (e_5) throw e_5.error;
            }
          }
          return null;
        };
        return SyncPoint;
      }();
      var CompoundWrite = function() {
        function CompoundWrite(writeTree_) {
          this.writeTree_ = writeTree_;
        }
        CompoundWrite.prototype.addWrite = function(path, node) {
          if (path.isEmpty()) return new CompoundWrite(new ImmutableTree(node));
          var rootmost = this.writeTree_.findRootMostValueAndPath(path);
          if (null != rootmost) {
            var rootMostPath = rootmost.path;
            var value = rootmost.value;
            var relativePath = Path.relativePath(rootMostPath, path);
            value = value.updateChild(relativePath, node);
            return new CompoundWrite(this.writeTree_.set(rootMostPath, value));
          }
          var subtree = new ImmutableTree(node);
          var newWriteTree = this.writeTree_.setTree(path, subtree);
          return new CompoundWrite(newWriteTree);
        };
        CompoundWrite.prototype.addWrites = function(path, updates) {
          var newWrite = this;
          each(updates, function(childKey, node) {
            newWrite = newWrite.addWrite(path.child(childKey), node);
          });
          return newWrite;
        };
        CompoundWrite.prototype.removeWrite = function(path) {
          if (path.isEmpty()) return CompoundWrite.Empty;
          var newWriteTree = this.writeTree_.setTree(path, ImmutableTree.Empty);
          return new CompoundWrite(newWriteTree);
        };
        CompoundWrite.prototype.hasCompleteWrite = function(path) {
          return null != this.getCompleteNode(path);
        };
        CompoundWrite.prototype.getCompleteNode = function(path) {
          var rootmost = this.writeTree_.findRootMostValueAndPath(path);
          return null != rootmost ? this.writeTree_.get(rootmost.path).getChild(Path.relativePath(rootmost.path, path)) : null;
        };
        CompoundWrite.prototype.getCompleteChildren = function() {
          var children = [];
          var node = this.writeTree_.value;
          null != node ? node.isLeafNode() || node.forEachChild(PRIORITY_INDEX, function(childName, childNode) {
            children.push(new NamedNode(childName, childNode));
          }) : this.writeTree_.children.inorderTraversal(function(childName, childTree) {
            null != childTree.value && children.push(new NamedNode(childName, childTree.value));
          });
          return children;
        };
        CompoundWrite.prototype.childCompoundWrite = function(path) {
          if (path.isEmpty()) return this;
          var shadowingNode = this.getCompleteNode(path);
          return new CompoundWrite(null != shadowingNode ? new ImmutableTree(shadowingNode) : this.writeTree_.subtree(path));
        };
        CompoundWrite.prototype.isEmpty = function() {
          return this.writeTree_.isEmpty();
        };
        CompoundWrite.prototype.apply = function(node) {
          return applySubtreeWrite(Path.Empty, this.writeTree_, node);
        };
        CompoundWrite.Empty = new CompoundWrite(new ImmutableTree(null));
        return CompoundWrite;
      }();
      function applySubtreeWrite(relativePath, writeTree, node) {
        if (null != writeTree.value) return node.updateChild(relativePath, writeTree.value);
        var priorityWrite_1 = null;
        writeTree.children.inorderTraversal(function(childKey, childTree) {
          if (".priority" === childKey) {
            util.assert(null !== childTree.value, "Priority writes must always be leaf nodes");
            priorityWrite_1 = childTree.value;
          } else node = applySubtreeWrite(relativePath.child(childKey), childTree, node);
        });
        node.getChild(relativePath).isEmpty() || null === priorityWrite_1 || (node = node.updateChild(relativePath.child(".priority"), priorityWrite_1));
        return node;
      }
      var WriteTree = function() {
        function WriteTree() {
          this.visibleWrites_ = CompoundWrite.Empty;
          this.allWrites_ = [];
          this.lastWriteId_ = -1;
        }
        WriteTree.prototype.childWrites = function(path) {
          return new WriteTreeRef(path, this);
        };
        WriteTree.prototype.addOverwrite = function(path, snap, writeId, visible) {
          util.assert(writeId > this.lastWriteId_, "Stacking an older write on top of newer ones");
          void 0 === visible && (visible = true);
          this.allWrites_.push({
            path: path,
            snap: snap,
            writeId: writeId,
            visible: visible
          });
          visible && (this.visibleWrites_ = this.visibleWrites_.addWrite(path, snap));
          this.lastWriteId_ = writeId;
        };
        WriteTree.prototype.addMerge = function(path, changedChildren, writeId) {
          util.assert(writeId > this.lastWriteId_, "Stacking an older merge on top of newer ones");
          this.allWrites_.push({
            path: path,
            children: changedChildren,
            writeId: writeId,
            visible: true
          });
          this.visibleWrites_ = this.visibleWrites_.addWrites(path, changedChildren);
          this.lastWriteId_ = writeId;
        };
        WriteTree.prototype.getWrite = function(writeId) {
          for (var i = 0; i < this.allWrites_.length; i++) {
            var record = this.allWrites_[i];
            if (record.writeId === writeId) return record;
          }
          return null;
        };
        WriteTree.prototype.removeWrite = function(writeId) {
          var _this = this;
          var idx = this.allWrites_.findIndex(function(s) {
            return s.writeId === writeId;
          });
          util.assert(idx >= 0, "removeWrite called with nonexistent writeId.");
          var writeToRemove = this.allWrites_[idx];
          this.allWrites_.splice(idx, 1);
          var removedWriteWasVisible = writeToRemove.visible;
          var removedWriteOverlapsWithOtherWrites = false;
          var i = this.allWrites_.length - 1;
          while (removedWriteWasVisible && i >= 0) {
            var currentWrite = this.allWrites_[i];
            currentWrite.visible && (i >= idx && this.recordContainsPath_(currentWrite, writeToRemove.path) ? removedWriteWasVisible = false : writeToRemove.path.contains(currentWrite.path) && (removedWriteOverlapsWithOtherWrites = true));
            i--;
          }
          if (removedWriteWasVisible) {
            if (removedWriteOverlapsWithOtherWrites) {
              this.resetTree_();
              return true;
            }
            if (writeToRemove.snap) this.visibleWrites_ = this.visibleWrites_.removeWrite(writeToRemove.path); else {
              var children = writeToRemove.children;
              each(children, function(childName) {
                _this.visibleWrites_ = _this.visibleWrites_.removeWrite(writeToRemove.path.child(childName));
              });
            }
            return true;
          }
          return false;
        };
        WriteTree.prototype.getCompleteWriteData = function(path) {
          return this.visibleWrites_.getCompleteNode(path);
        };
        WriteTree.prototype.calcCompleteEventCache = function(treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
          if (writeIdsToExclude || includeHiddenWrites) {
            var merge = this.visibleWrites_.childCompoundWrite(treePath);
            if (!includeHiddenWrites && merge.isEmpty()) return completeServerCache;
            if (includeHiddenWrites || null != completeServerCache || merge.hasCompleteWrite(Path.Empty)) {
              var filter = function(write) {
                return (write.visible || includeHiddenWrites) && (!writeIdsToExclude || !~writeIdsToExclude.indexOf(write.writeId)) && (write.path.contains(treePath) || treePath.contains(write.path));
              };
              var mergeAtPath = WriteTree.layerTree_(this.allWrites_, filter, treePath);
              var layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
              return mergeAtPath.apply(layeredCache);
            }
            return null;
          }
          var shadowingNode = this.visibleWrites_.getCompleteNode(treePath);
          if (null != shadowingNode) return shadowingNode;
          var subMerge = this.visibleWrites_.childCompoundWrite(treePath);
          if (subMerge.isEmpty()) return completeServerCache;
          if (null != completeServerCache || subMerge.hasCompleteWrite(Path.Empty)) {
            var layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
            return subMerge.apply(layeredCache);
          }
          return null;
        };
        WriteTree.prototype.calcCompleteEventChildren = function(treePath, completeServerChildren) {
          var completeChildren = ChildrenNode.EMPTY_NODE;
          var topLevelSet = this.visibleWrites_.getCompleteNode(treePath);
          if (topLevelSet) {
            topLevelSet.isLeafNode() || topLevelSet.forEachChild(PRIORITY_INDEX, function(childName, childSnap) {
              completeChildren = completeChildren.updateImmediateChild(childName, childSnap);
            });
            return completeChildren;
          }
          if (completeServerChildren) {
            var merge_1 = this.visibleWrites_.childCompoundWrite(treePath);
            completeServerChildren.forEachChild(PRIORITY_INDEX, function(childName, childNode) {
              var node = merge_1.childCompoundWrite(new Path(childName)).apply(childNode);
              completeChildren = completeChildren.updateImmediateChild(childName, node);
            });
            merge_1.getCompleteChildren().forEach(function(namedNode) {
              completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
            });
            return completeChildren;
          }
          var merge = this.visibleWrites_.childCompoundWrite(treePath);
          merge.getCompleteChildren().forEach(function(namedNode) {
            completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
          });
          return completeChildren;
        };
        WriteTree.prototype.calcEventCacheAfterServerOverwrite = function(treePath, childPath, existingEventSnap, existingServerSnap) {
          util.assert(existingEventSnap || existingServerSnap, "Either existingEventSnap or existingServerSnap must exist");
          var path = treePath.child(childPath);
          if (this.visibleWrites_.hasCompleteWrite(path)) return null;
          var childMerge = this.visibleWrites_.childCompoundWrite(path);
          return childMerge.isEmpty() ? existingServerSnap.getChild(childPath) : childMerge.apply(existingServerSnap.getChild(childPath));
        };
        WriteTree.prototype.calcCompleteChild = function(treePath, childKey, existingServerSnap) {
          var path = treePath.child(childKey);
          var shadowingNode = this.visibleWrites_.getCompleteNode(path);
          if (null != shadowingNode) return shadowingNode;
          if (existingServerSnap.isCompleteForChild(childKey)) {
            var childMerge = this.visibleWrites_.childCompoundWrite(path);
            return childMerge.apply(existingServerSnap.getNode().getImmediateChild(childKey));
          }
          return null;
        };
        WriteTree.prototype.shadowingWrite = function(path) {
          return this.visibleWrites_.getCompleteNode(path);
        };
        WriteTree.prototype.calcIndexedSlice = function(treePath, completeServerData, startPost, count, reverse, index) {
          var toIterate;
          var merge = this.visibleWrites_.childCompoundWrite(treePath);
          var shadowingNode = merge.getCompleteNode(Path.Empty);
          if (null != shadowingNode) toIterate = shadowingNode; else {
            if (null == completeServerData) return [];
            toIterate = merge.apply(completeServerData);
          }
          toIterate = toIterate.withIndex(index);
          if (toIterate.isEmpty() || toIterate.isLeafNode()) return [];
          var nodes = [];
          var cmp = index.getCompare();
          var iter = reverse ? toIterate.getReverseIteratorFrom(startPost, index) : toIterate.getIteratorFrom(startPost, index);
          var next = iter.getNext();
          while (next && nodes.length < count) {
            0 !== cmp(next, startPost) && nodes.push(next);
            next = iter.getNext();
          }
          return nodes;
        };
        WriteTree.prototype.recordContainsPath_ = function(writeRecord, path) {
          if (writeRecord.snap) return writeRecord.path.contains(path);
          for (var childName in writeRecord.children) if (writeRecord.children.hasOwnProperty(childName) && writeRecord.path.child(childName).contains(path)) return true;
          return false;
        };
        WriteTree.prototype.resetTree_ = function() {
          this.visibleWrites_ = WriteTree.layerTree_(this.allWrites_, WriteTree.DefaultFilter_, Path.Empty);
          this.allWrites_.length > 0 ? this.lastWriteId_ = this.allWrites_[this.allWrites_.length - 1].writeId : this.lastWriteId_ = -1;
        };
        WriteTree.DefaultFilter_ = function(write) {
          return write.visible;
        };
        WriteTree.layerTree_ = function(writes, filter, treeRoot) {
          var compoundWrite = CompoundWrite.Empty;
          for (var i = 0; i < writes.length; ++i) {
            var write = writes[i];
            if (filter(write)) {
              var writePath = write.path;
              var relativePath = void 0;
              if (write.snap) {
                if (treeRoot.contains(writePath)) {
                  relativePath = Path.relativePath(treeRoot, writePath);
                  compoundWrite = compoundWrite.addWrite(relativePath, write.snap);
                } else if (writePath.contains(treeRoot)) {
                  relativePath = Path.relativePath(writePath, treeRoot);
                  compoundWrite = compoundWrite.addWrite(Path.Empty, write.snap.getChild(relativePath));
                }
              } else {
                if (!write.children) throw util.assertionError("WriteRecord should have .snap or .children");
                if (treeRoot.contains(writePath)) {
                  relativePath = Path.relativePath(treeRoot, writePath);
                  compoundWrite = compoundWrite.addWrites(relativePath, write.children);
                } else if (writePath.contains(treeRoot)) {
                  relativePath = Path.relativePath(writePath, treeRoot);
                  if (relativePath.isEmpty()) compoundWrite = compoundWrite.addWrites(Path.Empty, write.children); else {
                    var child = util.safeGet(write.children, relativePath.getFront());
                    if (child) {
                      var deepNode = child.getChild(relativePath.popFront());
                      compoundWrite = compoundWrite.addWrite(Path.Empty, deepNode);
                    }
                  }
                }
              }
            }
          }
          return compoundWrite;
        };
        return WriteTree;
      }();
      var WriteTreeRef = function() {
        function WriteTreeRef(path, writeTree) {
          this.treePath_ = path;
          this.writeTree_ = writeTree;
        }
        WriteTreeRef.prototype.calcCompleteEventCache = function(completeServerCache, writeIdsToExclude, includeHiddenWrites) {
          return this.writeTree_.calcCompleteEventCache(this.treePath_, completeServerCache, writeIdsToExclude, includeHiddenWrites);
        };
        WriteTreeRef.prototype.calcCompleteEventChildren = function(completeServerChildren) {
          return this.writeTree_.calcCompleteEventChildren(this.treePath_, completeServerChildren);
        };
        WriteTreeRef.prototype.calcEventCacheAfterServerOverwrite = function(path, existingEventSnap, existingServerSnap) {
          return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_, path, existingEventSnap, existingServerSnap);
        };
        WriteTreeRef.prototype.shadowingWrite = function(path) {
          return this.writeTree_.shadowingWrite(this.treePath_.child(path));
        };
        WriteTreeRef.prototype.calcIndexedSlice = function(completeServerData, startPost, count, reverse, index) {
          return this.writeTree_.calcIndexedSlice(this.treePath_, completeServerData, startPost, count, reverse, index);
        };
        WriteTreeRef.prototype.calcCompleteChild = function(childKey, existingServerCache) {
          return this.writeTree_.calcCompleteChild(this.treePath_, childKey, existingServerCache);
        };
        WriteTreeRef.prototype.child = function(childName) {
          return new WriteTreeRef(this.treePath_.child(childName), this.writeTree_);
        };
        return WriteTreeRef;
      }();
      var SyncTree = function() {
        function SyncTree(listenProvider_) {
          this.listenProvider_ = listenProvider_;
          this.syncPointTree_ = ImmutableTree.Empty;
          this.pendingWriteTree_ = new WriteTree();
          this.tagToQueryMap = new Map();
          this.queryToTagMap = new Map();
        }
        SyncTree.prototype.applyUserOverwrite = function(path, newData, writeId, visible) {
          this.pendingWriteTree_.addOverwrite(path, newData, writeId, visible);
          return visible ? this.applyOperationToSyncPoints_(new Overwrite(OperationSource.User, path, newData)) : [];
        };
        SyncTree.prototype.applyUserMerge = function(path, changedChildren, writeId) {
          this.pendingWriteTree_.addMerge(path, changedChildren, writeId);
          var changeTree = ImmutableTree.fromObject(changedChildren);
          return this.applyOperationToSyncPoints_(new Merge(OperationSource.User, path, changeTree));
        };
        SyncTree.prototype.ackUserWrite = function(writeId, revert) {
          void 0 === revert && (revert = false);
          var write = this.pendingWriteTree_.getWrite(writeId);
          var needToReevaluate = this.pendingWriteTree_.removeWrite(writeId);
          if (needToReevaluate) {
            var affectedTree_1 = ImmutableTree.Empty;
            null != write.snap ? affectedTree_1 = affectedTree_1.set(Path.Empty, true) : each(write.children, function(pathString, node) {
              affectedTree_1 = affectedTree_1.set(new Path(pathString), node);
            });
            return this.applyOperationToSyncPoints_(new AckUserWrite(write.path, affectedTree_1, revert));
          }
          return [];
        };
        SyncTree.prototype.applyServerOverwrite = function(path, newData) {
          return this.applyOperationToSyncPoints_(new Overwrite(OperationSource.Server, path, newData));
        };
        SyncTree.prototype.applyServerMerge = function(path, changedChildren) {
          var changeTree = ImmutableTree.fromObject(changedChildren);
          return this.applyOperationToSyncPoints_(new Merge(OperationSource.Server, path, changeTree));
        };
        SyncTree.prototype.applyListenComplete = function(path) {
          return this.applyOperationToSyncPoints_(new ListenComplete(OperationSource.Server, path));
        };
        SyncTree.prototype.applyTaggedQueryOverwrite = function(path, snap, tag) {
          var queryKey = this.queryKeyForTag_(tag);
          if (null != queryKey) {
            var r = SyncTree.parseQueryKey_(queryKey);
            var queryPath = r.path, queryId = r.queryId;
            var relativePath = Path.relativePath(queryPath, path);
            var op = new Overwrite(OperationSource.forServerTaggedQuery(queryId), relativePath, snap);
            return this.applyTaggedOperation_(queryPath, op);
          }
          return [];
        };
        SyncTree.prototype.applyTaggedQueryMerge = function(path, changedChildren, tag) {
          var queryKey = this.queryKeyForTag_(tag);
          if (queryKey) {
            var r = SyncTree.parseQueryKey_(queryKey);
            var queryPath = r.path, queryId = r.queryId;
            var relativePath = Path.relativePath(queryPath, path);
            var changeTree = ImmutableTree.fromObject(changedChildren);
            var op = new Merge(OperationSource.forServerTaggedQuery(queryId), relativePath, changeTree);
            return this.applyTaggedOperation_(queryPath, op);
          }
          return [];
        };
        SyncTree.prototype.applyTaggedListenComplete = function(path, tag) {
          var queryKey = this.queryKeyForTag_(tag);
          if (queryKey) {
            var r = SyncTree.parseQueryKey_(queryKey);
            var queryPath = r.path, queryId = r.queryId;
            var relativePath = Path.relativePath(queryPath, path);
            var op = new ListenComplete(OperationSource.forServerTaggedQuery(queryId), relativePath);
            return this.applyTaggedOperation_(queryPath, op);
          }
          return [];
        };
        SyncTree.prototype.addEventRegistration = function(query, eventRegistration) {
          var path = query.path;
          var serverCache = null;
          var foundAncestorDefaultView = false;
          this.syncPointTree_.foreachOnPath(path, function(pathToSyncPoint, sp) {
            var relativePath = Path.relativePath(pathToSyncPoint, path);
            serverCache = serverCache || sp.getCompleteServerCache(relativePath);
            foundAncestorDefaultView = foundAncestorDefaultView || sp.hasCompleteView();
          });
          var syncPoint = this.syncPointTree_.get(path);
          if (syncPoint) {
            foundAncestorDefaultView = foundAncestorDefaultView || syncPoint.hasCompleteView();
            serverCache = serverCache || syncPoint.getCompleteServerCache(Path.Empty);
          } else {
            syncPoint = new SyncPoint();
            this.syncPointTree_ = this.syncPointTree_.set(path, syncPoint);
          }
          var serverCacheComplete;
          if (null != serverCache) serverCacheComplete = true; else {
            serverCacheComplete = false;
            serverCache = ChildrenNode.EMPTY_NODE;
            var subtree = this.syncPointTree_.subtree(path);
            subtree.foreachChild(function(childName, childSyncPoint) {
              var completeCache = childSyncPoint.getCompleteServerCache(Path.Empty);
              completeCache && (serverCache = serverCache.updateImmediateChild(childName, completeCache));
            });
          }
          var viewAlreadyExists = syncPoint.viewExistsForQuery(query);
          if (!viewAlreadyExists && !query.getQueryParams().loadsAllData()) {
            var queryKey = SyncTree.makeQueryKey_(query);
            util.assert(!this.queryToTagMap.has(queryKey), "View does not exist, but we have a tag");
            var tag = SyncTree.getNextQueryTag_();
            this.queryToTagMap.set(queryKey, tag);
            this.tagToQueryMap.set(tag, queryKey);
          }
          var writesCache = this.pendingWriteTree_.childWrites(path);
          var events = syncPoint.addEventRegistration(query, eventRegistration, writesCache, serverCache, serverCacheComplete);
          if (!viewAlreadyExists && !foundAncestorDefaultView) {
            var view = syncPoint.viewForQuery(query);
            events = events.concat(this.setupListener_(query, view));
          }
          return events;
        };
        SyncTree.prototype.removeEventRegistration = function(query, eventRegistration, cancelError) {
          var _this = this;
          var path = query.path;
          var maybeSyncPoint = this.syncPointTree_.get(path);
          var cancelEvents = [];
          if (maybeSyncPoint && ("default" === query.queryIdentifier() || maybeSyncPoint.viewExistsForQuery(query))) {
            var removedAndEvents = maybeSyncPoint.removeEventRegistration(query, eventRegistration, cancelError);
            maybeSyncPoint.isEmpty() && (this.syncPointTree_ = this.syncPointTree_.remove(path));
            var removed = removedAndEvents.removed;
            cancelEvents = removedAndEvents.events;
            var removingDefault = -1 !== removed.findIndex(function(query) {
              return query.getQueryParams().loadsAllData();
            });
            var covered = this.syncPointTree_.findOnPath(path, function(relativePath, parentSyncPoint) {
              return parentSyncPoint.hasCompleteView();
            });
            if (removingDefault && !covered) {
              var subtree = this.syncPointTree_.subtree(path);
              if (!subtree.isEmpty()) {
                var newViews = this.collectDistinctViewsForSubTree_(subtree);
                for (var i = 0; i < newViews.length; ++i) {
                  var view = newViews[i], newQuery = view.getQuery();
                  var listener = this.createListenerForView_(view);
                  this.listenProvider_.startListening(SyncTree.queryForListening_(newQuery), this.tagForQuery_(newQuery), listener.hashFn, listener.onComplete);
                }
              }
            }
            if (!covered && removed.length > 0 && !cancelError) if (removingDefault) {
              var defaultTag = null;
              this.listenProvider_.stopListening(SyncTree.queryForListening_(query), defaultTag);
            } else removed.forEach(function(queryToRemove) {
              var tagToRemove = _this.queryToTagMap.get(SyncTree.makeQueryKey_(queryToRemove));
              _this.listenProvider_.stopListening(SyncTree.queryForListening_(queryToRemove), tagToRemove);
            });
            this.removeTags_(removed);
          }
          return cancelEvents;
        };
        SyncTree.prototype.calcCompleteEventCache = function(path, writeIdsToExclude) {
          var includeHiddenSets = true;
          var writeTree = this.pendingWriteTree_;
          var serverCache = this.syncPointTree_.findOnPath(path, function(pathSoFar, syncPoint) {
            var relativePath = Path.relativePath(pathSoFar, path);
            var serverCache = syncPoint.getCompleteServerCache(relativePath);
            if (serverCache) return serverCache;
          });
          return writeTree.calcCompleteEventCache(path, serverCache, writeIdsToExclude, includeHiddenSets);
        };
        SyncTree.prototype.collectDistinctViewsForSubTree_ = function(subtree) {
          return subtree.fold(function(relativePath, maybeChildSyncPoint, childMap) {
            if (maybeChildSyncPoint && maybeChildSyncPoint.hasCompleteView()) {
              var completeView = maybeChildSyncPoint.getCompleteView();
              return [ completeView ];
            }
            var views_1 = [];
            maybeChildSyncPoint && (views_1 = maybeChildSyncPoint.getQueryViews());
            each(childMap, function(_key, childViews) {
              views_1 = views_1.concat(childViews);
            });
            return views_1;
          });
        };
        SyncTree.prototype.removeTags_ = function(queries) {
          for (var j = 0; j < queries.length; ++j) {
            var removedQuery = queries[j];
            if (!removedQuery.getQueryParams().loadsAllData()) {
              var removedQueryKey = SyncTree.makeQueryKey_(removedQuery);
              var removedQueryTag = this.queryToTagMap.get(removedQueryKey);
              this.queryToTagMap.delete(removedQueryKey);
              this.tagToQueryMap.delete(removedQueryTag);
            }
          }
        };
        SyncTree.queryForListening_ = function(query) {
          return query.getQueryParams().loadsAllData() && !query.getQueryParams().isDefault() ? query.getRef() : query;
        };
        SyncTree.prototype.setupListener_ = function(query, view) {
          var path = query.path;
          var tag = this.tagForQuery_(query);
          var listener = this.createListenerForView_(view);
          var events = this.listenProvider_.startListening(SyncTree.queryForListening_(query), tag, listener.hashFn, listener.onComplete);
          var subtree = this.syncPointTree_.subtree(path);
          if (tag) util.assert(!subtree.value.hasCompleteView(), "If we're adding a query, it shouldn't be shadowed"); else {
            var queriesToStop = subtree.fold(function(relativePath, maybeChildSyncPoint, childMap) {
              if (!relativePath.isEmpty() && maybeChildSyncPoint && maybeChildSyncPoint.hasCompleteView()) return [ maybeChildSyncPoint.getCompleteView().getQuery() ];
              var queries_1 = [];
              maybeChildSyncPoint && (queries_1 = queries_1.concat(maybeChildSyncPoint.getQueryViews().map(function(view) {
                return view.getQuery();
              })));
              each(childMap, function(_key, childQueries) {
                queries_1 = queries_1.concat(childQueries);
              });
              return queries_1;
            });
            for (var i = 0; i < queriesToStop.length; ++i) {
              var queryToStop = queriesToStop[i];
              this.listenProvider_.stopListening(SyncTree.queryForListening_(queryToStop), this.tagForQuery_(queryToStop));
            }
          }
          return events;
        };
        SyncTree.prototype.createListenerForView_ = function(view) {
          var _this = this;
          var query = view.getQuery();
          var tag = this.tagForQuery_(query);
          return {
            hashFn: function() {
              var cache = view.getServerCache() || ChildrenNode.EMPTY_NODE;
              return cache.hash();
            },
            onComplete: function(status) {
              if ("ok" === status) return tag ? _this.applyTaggedListenComplete(query.path, tag) : _this.applyListenComplete(query.path);
              var error = errorForServerCode(status, query);
              return _this.removeEventRegistration(query, null, error);
            }
          };
        };
        SyncTree.makeQueryKey_ = function(query) {
          return query.path.toString() + "$" + query.queryIdentifier();
        };
        SyncTree.parseQueryKey_ = function(queryKey) {
          var splitIndex = queryKey.indexOf("$");
          util.assert(-1 !== splitIndex && splitIndex < queryKey.length - 1, "Bad queryKey.");
          return {
            queryId: queryKey.substr(splitIndex + 1),
            path: new Path(queryKey.substr(0, splitIndex))
          };
        };
        SyncTree.prototype.queryKeyForTag_ = function(tag) {
          return this.tagToQueryMap.get(tag);
        };
        SyncTree.prototype.tagForQuery_ = function(query) {
          var queryKey = SyncTree.makeQueryKey_(query);
          return this.queryToTagMap.get(queryKey);
        };
        SyncTree.getNextQueryTag_ = function() {
          return SyncTree.nextQueryTag_++;
        };
        SyncTree.prototype.applyTaggedOperation_ = function(queryPath, operation) {
          var syncPoint = this.syncPointTree_.get(queryPath);
          util.assert(syncPoint, "Missing sync point for query tag that we're tracking");
          var writesCache = this.pendingWriteTree_.childWrites(queryPath);
          return syncPoint.applyOperation(operation, writesCache, null);
        };
        SyncTree.prototype.applyOperationToSyncPoints_ = function(operation) {
          return this.applyOperationHelper_(operation, this.syncPointTree_, null, this.pendingWriteTree_.childWrites(Path.Empty));
        };
        SyncTree.prototype.applyOperationHelper_ = function(operation, syncPointTree, serverCache, writesCache) {
          if (operation.path.isEmpty()) return this.applyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache);
          var syncPoint = syncPointTree.get(Path.Empty);
          null == serverCache && null != syncPoint && (serverCache = syncPoint.getCompleteServerCache(Path.Empty));
          var events = [];
          var childName = operation.path.getFront();
          var childOperation = operation.operationForChild(childName);
          var childTree = syncPointTree.children.get(childName);
          if (childTree && childOperation) {
            var childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
            var childWritesCache = writesCache.child(childName);
            events = events.concat(this.applyOperationHelper_(childOperation, childTree, childServerCache, childWritesCache));
          }
          syncPoint && (events = events.concat(syncPoint.applyOperation(operation, writesCache, serverCache)));
          return events;
        };
        SyncTree.prototype.applyOperationDescendantsHelper_ = function(operation, syncPointTree, serverCache, writesCache) {
          var _this = this;
          var syncPoint = syncPointTree.get(Path.Empty);
          null == serverCache && null != syncPoint && (serverCache = syncPoint.getCompleteServerCache(Path.Empty));
          var events = [];
          syncPointTree.children.inorderTraversal(function(childName, childTree) {
            var childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
            var childWritesCache = writesCache.child(childName);
            var childOperation = operation.operationForChild(childName);
            childOperation && (events = events.concat(_this.applyOperationDescendantsHelper_(childOperation, childTree, childServerCache, childWritesCache)));
          });
          syncPoint && (events = events.concat(syncPoint.applyOperation(operation, writesCache, serverCache)));
          return events;
        };
        SyncTree.nextQueryTag_ = 1;
        return SyncTree;
      }();
      var SnapshotHolder = function() {
        function SnapshotHolder() {
          this.rootNode_ = ChildrenNode.EMPTY_NODE;
        }
        SnapshotHolder.prototype.getNode = function(path) {
          return this.rootNode_.getChild(path);
        };
        SnapshotHolder.prototype.updateSnapshot = function(path, newSnapshotNode) {
          this.rootNode_ = this.rootNode_.updateChild(path, newSnapshotNode);
        };
        return SnapshotHolder;
      }();
      var StatsCollection = function() {
        function StatsCollection() {
          this.counters_ = {};
        }
        StatsCollection.prototype.incrementCounter = function(name, amount) {
          void 0 === amount && (amount = 1);
          util.contains(this.counters_, name) || (this.counters_[name] = 0);
          this.counters_[name] += amount;
        };
        StatsCollection.prototype.get = function() {
          return util.deepCopy(this.counters_);
        };
        return StatsCollection;
      }();
      var StatsManager = function() {
        function StatsManager() {}
        StatsManager.getCollection = function(repoInfo) {
          var hashString = repoInfo.toString();
          this.collections_[hashString] || (this.collections_[hashString] = new StatsCollection());
          return this.collections_[hashString];
        };
        StatsManager.getOrCreateReporter = function(repoInfo, creatorFunction) {
          var hashString = repoInfo.toString();
          this.reporters_[hashString] || (this.reporters_[hashString] = creatorFunction());
          return this.reporters_[hashString];
        };
        StatsManager.collections_ = {};
        StatsManager.reporters_ = {};
        return StatsManager;
      }();
      var StatsListener = function() {
        function StatsListener(collection_) {
          this.collection_ = collection_;
          this.last_ = null;
        }
        StatsListener.prototype.get = function() {
          var newStats = this.collection_.get();
          var delta = tslib.__assign({}, newStats);
          this.last_ && each(this.last_, function(stat, value) {
            delta[stat] = delta[stat] - value;
          });
          this.last_ = newStats;
          return delta;
        };
        return StatsListener;
      }();
      var FIRST_STATS_MIN_TIME = 1e4;
      var FIRST_STATS_MAX_TIME = 3e4;
      var REPORT_STATS_INTERVAL = 3e5;
      var StatsReporter = function() {
        function StatsReporter(collection, server_) {
          this.server_ = server_;
          this.statsToReport_ = {};
          this.statsListener_ = new StatsListener(collection);
          var timeout = FIRST_STATS_MIN_TIME + (FIRST_STATS_MAX_TIME - FIRST_STATS_MIN_TIME) * Math.random();
          setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(timeout));
        }
        StatsReporter.prototype.includeStat = function(stat) {
          this.statsToReport_[stat] = true;
        };
        StatsReporter.prototype.reportStats_ = function() {
          var _this = this;
          var stats = this.statsListener_.get();
          var reportedStats = {};
          var haveStatsToReport = false;
          each(stats, function(stat, value) {
            if (value > 0 && util.contains(_this.statsToReport_, stat)) {
              reportedStats[stat] = value;
              haveStatsToReport = true;
            }
          });
          haveStatsToReport && this.server_.reportStats(reportedStats);
          setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(2 * Math.random() * REPORT_STATS_INTERVAL));
        };
        return StatsReporter;
      }();
      var EventQueue = function() {
        function EventQueue() {
          this.eventLists_ = [];
          this.recursionDepth_ = 0;
        }
        EventQueue.prototype.queueEvents = function(eventDataList) {
          var currList = null;
          for (var i = 0; i < eventDataList.length; i++) {
            var eventData = eventDataList[i];
            var eventPath = eventData.getPath();
            if (null !== currList && !eventPath.equals(currList.getPath())) {
              this.eventLists_.push(currList);
              currList = null;
            }
            null === currList && (currList = new EventList(eventPath));
            currList.add(eventData);
          }
          currList && this.eventLists_.push(currList);
        };
        EventQueue.prototype.raiseEventsAtPath = function(path, eventDataList) {
          this.queueEvents(eventDataList);
          this.raiseQueuedEventsMatchingPredicate_(function(eventPath) {
            return eventPath.equals(path);
          });
        };
        EventQueue.prototype.raiseEventsForChangedPath = function(changedPath, eventDataList) {
          this.queueEvents(eventDataList);
          this.raiseQueuedEventsMatchingPredicate_(function(eventPath) {
            return eventPath.contains(changedPath) || changedPath.contains(eventPath);
          });
        };
        EventQueue.prototype.raiseQueuedEventsMatchingPredicate_ = function(predicate) {
          this.recursionDepth_++;
          var sentAll = true;
          for (var i = 0; i < this.eventLists_.length; i++) {
            var eventList = this.eventLists_[i];
            if (eventList) {
              var eventPath = eventList.getPath();
              if (predicate(eventPath)) {
                this.eventLists_[i].raise();
                this.eventLists_[i] = null;
              } else sentAll = false;
            }
          }
          sentAll && (this.eventLists_ = []);
          this.recursionDepth_--;
        };
        return EventQueue;
      }();
      var EventList = function() {
        function EventList(path_) {
          this.path_ = path_;
          this.events_ = [];
        }
        EventList.prototype.add = function(eventData) {
          this.events_.push(eventData);
        };
        EventList.prototype.raise = function() {
          for (var i = 0; i < this.events_.length; i++) {
            var eventData = this.events_[i];
            if (null !== eventData) {
              this.events_[i] = null;
              var eventFn = eventData.getEventRunner();
              logger && log("event: " + eventData.toString());
              exceptionGuard(eventFn);
            }
          }
        };
        EventList.prototype.getPath = function() {
          return this.path_;
        };
        return EventList;
      }();
      var EventEmitter = function() {
        function EventEmitter(allowedEvents_) {
          this.allowedEvents_ = allowedEvents_;
          this.listeners_ = {};
          util.assert(Array.isArray(allowedEvents_) && allowedEvents_.length > 0, "Requires a non-empty array");
        }
        EventEmitter.prototype.trigger = function(eventType) {
          var varArgs = [];
          for (var _i = 1; _i < arguments.length; _i++) varArgs[_i - 1] = arguments[_i];
          if (Array.isArray(this.listeners_[eventType])) {
            var listeners = tslib.__spread(this.listeners_[eventType]);
            for (var i = 0; i < listeners.length; i++) listeners[i].callback.apply(listeners[i].context, varArgs);
          }
        };
        EventEmitter.prototype.on = function(eventType, callback, context) {
          this.validateEventType_(eventType);
          this.listeners_[eventType] = this.listeners_[eventType] || [];
          this.listeners_[eventType].push({
            callback: callback,
            context: context
          });
          var eventData = this.getInitialEvent(eventType);
          eventData && callback.apply(context, eventData);
        };
        EventEmitter.prototype.off = function(eventType, callback, context) {
          this.validateEventType_(eventType);
          var listeners = this.listeners_[eventType] || [];
          for (var i = 0; i < listeners.length; i++) if (listeners[i].callback === callback && (!context || context === listeners[i].context)) {
            listeners.splice(i, 1);
            return;
          }
        };
        EventEmitter.prototype.validateEventType_ = function(eventType) {
          util.assert(this.allowedEvents_.find(function(et) {
            return et === eventType;
          }), "Unknown event: " + eventType);
        };
        return EventEmitter;
      }();
      var VisibilityMonitor = function(_super) {
        tslib.__extends(VisibilityMonitor, _super);
        function VisibilityMonitor() {
          var _this = _super.call(this, [ "visible" ]) || this;
          var hidden;
          var visibilityChange;
          if ("undefined" !== typeof document && "undefined" !== typeof document.addEventListener) if ("undefined" !== typeof document["hidden"]) {
            visibilityChange = "visibilitychange";
            hidden = "hidden";
          } else if ("undefined" !== typeof document["mozHidden"]) {
            visibilityChange = "mozvisibilitychange";
            hidden = "mozHidden";
          } else if ("undefined" !== typeof document["msHidden"]) {
            visibilityChange = "msvisibilitychange";
            hidden = "msHidden";
          } else if ("undefined" !== typeof document["webkitHidden"]) {
            visibilityChange = "webkitvisibilitychange";
            hidden = "webkitHidden";
          }
          _this.visible_ = true;
          visibilityChange && document.addEventListener(visibilityChange, function() {
            var visible = !document[hidden];
            if (visible !== _this.visible_) {
              _this.visible_ = visible;
              _this.trigger("visible", visible);
            }
          }, false);
          return _this;
        }
        VisibilityMonitor.getInstance = function() {
          return new VisibilityMonitor();
        };
        VisibilityMonitor.prototype.getInitialEvent = function(eventType) {
          util.assert("visible" === eventType, "Unknown event type: " + eventType);
          return [ this.visible_ ];
        };
        return VisibilityMonitor;
      }(EventEmitter);
      var OnlineMonitor = function(_super) {
        tslib.__extends(OnlineMonitor, _super);
        function OnlineMonitor() {
          var _this = _super.call(this, [ "online" ]) || this;
          _this.online_ = true;
          if ("undefined" !== typeof window && "undefined" !== typeof window.addEventListener && !util.isMobileCordova()) {
            window.addEventListener("online", function() {
              if (!_this.online_) {
                _this.online_ = true;
                _this.trigger("online", true);
              }
            }, false);
            window.addEventListener("offline", function() {
              if (_this.online_) {
                _this.online_ = false;
                _this.trigger("online", false);
              }
            }, false);
          }
          return _this;
        }
        OnlineMonitor.getInstance = function() {
          return new OnlineMonitor();
        };
        OnlineMonitor.prototype.getInitialEvent = function(eventType) {
          util.assert("online" === eventType, "Unknown event type: " + eventType);
          return [ this.online_ ];
        };
        OnlineMonitor.prototype.currentlyOnline = function() {
          return this.online_;
        };
        return OnlineMonitor;
      }(EventEmitter);
      var PacketReceiver = function() {
        function PacketReceiver(onMessage_) {
          this.onMessage_ = onMessage_;
          this.pendingResponses = [];
          this.currentResponseNum = 0;
          this.closeAfterResponse = -1;
          this.onClose = null;
        }
        PacketReceiver.prototype.closeAfter = function(responseNum, callback) {
          this.closeAfterResponse = responseNum;
          this.onClose = callback;
          if (this.closeAfterResponse < this.currentResponseNum) {
            this.onClose();
            this.onClose = null;
          }
        };
        PacketReceiver.prototype.handleResponse = function(requestNum, data) {
          var _this = this;
          this.pendingResponses[requestNum] = data;
          var _loop_1 = function() {
            var toProcess = this_1.pendingResponses[this_1.currentResponseNum];
            delete this_1.pendingResponses[this_1.currentResponseNum];
            var _loop_2 = function(i) {
              toProcess[i] && exceptionGuard(function() {
                _this.onMessage_(toProcess[i]);
              });
            };
            for (var i = 0; i < toProcess.length; ++i) _loop_2(i);
            if (this_1.currentResponseNum === this_1.closeAfterResponse) {
              if (this_1.onClose) {
                this_1.onClose();
                this_1.onClose = null;
              }
              return "break";
            }
            this_1.currentResponseNum++;
          };
          var this_1 = this;
          while (this.pendingResponses[this.currentResponseNum]) {
            var state_1 = _loop_1();
            if ("break" === state_1) break;
          }
        };
        return PacketReceiver;
      }();
      var FIREBASE_LONGPOLL_START_PARAM = "start";
      var FIREBASE_LONGPOLL_CLOSE_COMMAND = "close";
      var FIREBASE_LONGPOLL_COMMAND_CB_NAME = "pLPCommand";
      var FIREBASE_LONGPOLL_DATA_CB_NAME = "pRTLPCB";
      var FIREBASE_LONGPOLL_ID_PARAM = "id";
      var FIREBASE_LONGPOLL_PW_PARAM = "pw";
      var FIREBASE_LONGPOLL_SERIAL_PARAM = "ser";
      var FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = "cb";
      var FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = "seg";
      var FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = "ts";
      var FIREBASE_LONGPOLL_DATA_PARAM = "d";
      var FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = "dframe";
      var MAX_URL_DATA_SIZE = 1870;
      var SEG_HEADER_SIZE = 30;
      var MAX_PAYLOAD_SIZE = MAX_URL_DATA_SIZE - SEG_HEADER_SIZE;
      var KEEPALIVE_REQUEST_INTERVAL = 25e3;
      var LP_CONNECT_TIMEOUT = 3e4;
      var BrowserPollConnection = function() {
        function BrowserPollConnection(connId, repoInfo, applicationId, transportSessionId, lastSessionId) {
          this.connId = connId;
          this.repoInfo = repoInfo;
          this.applicationId = applicationId;
          this.transportSessionId = transportSessionId;
          this.lastSessionId = lastSessionId;
          this.bytesSent = 0;
          this.bytesReceived = 0;
          this.everConnected_ = false;
          this.log_ = logWrapper(connId);
          this.stats_ = StatsManager.getCollection(repoInfo);
          this.urlFn = function(params) {
            return repoInfo.connectionURL(LONG_POLLING, params);
          };
        }
        BrowserPollConnection.prototype.open = function(onMessage, onDisconnect) {
          var _this = this;
          this.curSegmentNum = 0;
          this.onDisconnect_ = onDisconnect;
          this.myPacketOrderer = new PacketReceiver(onMessage);
          this.isClosed_ = false;
          this.connectTimeoutTimer_ = setTimeout(function() {
            _this.log_("Timed out trying to connect.");
            _this.onClosed_();
            _this.connectTimeoutTimer_ = null;
          }, Math.floor(LP_CONNECT_TIMEOUT));
          executeWhenDOMReady(function() {
            if (_this.isClosed_) return;
            _this.scriptTagHolder = new FirebaseIFrameScriptHolder(function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
              var _a = tslib.__read(args, 5), command = _a[0], arg1 = _a[1], arg2 = _a[2], arg3 = _a[3], arg4 = _a[4];
              _this.incrementIncomingBytes_(args);
              if (!_this.scriptTagHolder) return;
              if (_this.connectTimeoutTimer_) {
                clearTimeout(_this.connectTimeoutTimer_);
                _this.connectTimeoutTimer_ = null;
              }
              _this.everConnected_ = true;
              if (command === FIREBASE_LONGPOLL_START_PARAM) {
                _this.id = arg1;
                _this.password = arg2;
              } else {
                if (command !== FIREBASE_LONGPOLL_CLOSE_COMMAND) throw new Error("Unrecognized command received: " + command);
                if (arg1) {
                  _this.scriptTagHolder.sendNewPolls = false;
                  _this.myPacketOrderer.closeAfter(arg1, function() {
                    _this.onClosed_();
                  });
                } else _this.onClosed_();
              }
            }, function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
              var _a = tslib.__read(args, 2), pN = _a[0], data = _a[1];
              _this.incrementIncomingBytes_(args);
              _this.myPacketOrderer.handleResponse(pN, data);
            }, function() {
              _this.onClosed_();
            }, _this.urlFn);
            var urlParams = {};
            urlParams[FIREBASE_LONGPOLL_START_PARAM] = "t";
            urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(1e8 * Math.random());
            _this.scriptTagHolder.uniqueCallbackIdentifier && (urlParams[FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = _this.scriptTagHolder.uniqueCallbackIdentifier);
            urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
            _this.transportSessionId && (urlParams[TRANSPORT_SESSION_PARAM] = _this.transportSessionId);
            _this.lastSessionId && (urlParams[LAST_SESSION_PARAM] = _this.lastSessionId);
            _this.applicationId && (urlParams[APPLICATION_ID_PARAM] = _this.applicationId);
            "undefined" !== typeof location && location.href && -1 !== location.href.indexOf(FORGE_DOMAIN) && (urlParams[REFERER_PARAM] = FORGE_REF);
            var connectURL = _this.urlFn(urlParams);
            _this.log_("Connecting via long-poll to " + connectURL);
            _this.scriptTagHolder.addTag(connectURL, function() {});
          });
        };
        BrowserPollConnection.prototype.start = function() {
          this.scriptTagHolder.startLongPoll(this.id, this.password);
          this.addDisconnectPingFrame(this.id, this.password);
        };
        BrowserPollConnection.forceAllow = function() {
          BrowserPollConnection.forceAllow_ = true;
        };
        BrowserPollConnection.forceDisallow = function() {
          BrowserPollConnection.forceDisallow_ = true;
        };
        BrowserPollConnection.isAvailable = function() {
          return !util.isNodeSdk() && (!!BrowserPollConnection.forceAllow_ || !BrowserPollConnection.forceDisallow_ && "undefined" !== typeof document && null != document.createElement && !isChromeExtensionContentScript() && !isWindowsStoreApp());
        };
        BrowserPollConnection.prototype.markConnectionHealthy = function() {};
        BrowserPollConnection.prototype.shutdown_ = function() {
          this.isClosed_ = true;
          if (this.scriptTagHolder) {
            this.scriptTagHolder.close();
            this.scriptTagHolder = null;
          }
          if (this.myDisconnFrame) {
            document.body.removeChild(this.myDisconnFrame);
            this.myDisconnFrame = null;
          }
          if (this.connectTimeoutTimer_) {
            clearTimeout(this.connectTimeoutTimer_);
            this.connectTimeoutTimer_ = null;
          }
        };
        BrowserPollConnection.prototype.onClosed_ = function() {
          if (!this.isClosed_) {
            this.log_("Longpoll is closing itself");
            this.shutdown_();
            if (this.onDisconnect_) {
              this.onDisconnect_(this.everConnected_);
              this.onDisconnect_ = null;
            }
          }
        };
        BrowserPollConnection.prototype.close = function() {
          if (!this.isClosed_) {
            this.log_("Longpoll is being closed.");
            this.shutdown_();
          }
        };
        BrowserPollConnection.prototype.send = function(data) {
          var dataStr = util.stringify(data);
          this.bytesSent += dataStr.length;
          this.stats_.incrementCounter("bytes_sent", dataStr.length);
          var base64data = util.base64Encode(dataStr);
          var dataSegs = splitStringBySize(base64data, MAX_PAYLOAD_SIZE);
          for (var i = 0; i < dataSegs.length; i++) {
            this.scriptTagHolder.enqueueSegment(this.curSegmentNum, dataSegs.length, dataSegs[i]);
            this.curSegmentNum++;
          }
        };
        BrowserPollConnection.prototype.addDisconnectPingFrame = function(id, pw) {
          if (util.isNodeSdk()) return;
          this.myDisconnFrame = document.createElement("iframe");
          var urlParams = {};
          urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = "t";
          urlParams[FIREBASE_LONGPOLL_ID_PARAM] = id;
          urlParams[FIREBASE_LONGPOLL_PW_PARAM] = pw;
          this.myDisconnFrame.src = this.urlFn(urlParams);
          this.myDisconnFrame.style.display = "none";
          document.body.appendChild(this.myDisconnFrame);
        };
        BrowserPollConnection.prototype.incrementIncomingBytes_ = function(args) {
          var bytesReceived = util.stringify(args).length;
          this.bytesReceived += bytesReceived;
          this.stats_.incrementCounter("bytes_received", bytesReceived);
        };
        return BrowserPollConnection;
      }();
      var FirebaseIFrameScriptHolder = function() {
        function FirebaseIFrameScriptHolder(commandCB, onMessageCB, onDisconnect, urlFn) {
          this.onDisconnect = onDisconnect;
          this.urlFn = urlFn;
          this.outstandingRequests = new Set();
          this.pendingSegs = [];
          this.currentSerial = Math.floor(1e8 * Math.random());
          this.sendNewPolls = true;
          if (util.isNodeSdk()) {
            this.commandCB = commandCB;
            this.onMessageCB = onMessageCB;
          } else {
            this.uniqueCallbackIdentifier = LUIDGenerator();
            window[FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = commandCB;
            window[FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = onMessageCB;
            this.myIFrame = FirebaseIFrameScriptHolder.createIFrame_();
            var script = "";
            if (this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, "javascript:".length)) {
              var currentDomain = document.domain;
              script = '<script>document.domain="' + currentDomain + '";<\/script>';
            }
            var iframeContents = "<html><body>" + script + "</body></html>";
            try {
              this.myIFrame.doc.open();
              this.myIFrame.doc.write(iframeContents);
              this.myIFrame.doc.close();
            } catch (e) {
              log("frame writing exception");
              e.stack && log(e.stack);
              log(e);
            }
          }
        }
        FirebaseIFrameScriptHolder.createIFrame_ = function() {
          var iframe = document.createElement("iframe");
          iframe.style.display = "none";
          if (!document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
          document.body.appendChild(iframe);
          try {
            var a = iframe.contentWindow.document;
            a || log("No IE domain setting required");
          } catch (e) {
            var domain = document.domain;
            iframe.src = "javascript:void((function(){document.open();document.domain='" + domain + "';document.close();})())";
          }
          iframe.contentDocument ? iframe.doc = iframe.contentDocument : iframe.contentWindow ? iframe.doc = iframe.contentWindow.document : iframe.document && (iframe.doc = iframe.document);
          return iframe;
        };
        FirebaseIFrameScriptHolder.prototype.close = function() {
          var _this = this;
          this.alive = false;
          if (this.myIFrame) {
            this.myIFrame.doc.body.innerHTML = "";
            setTimeout(function() {
              if (null !== _this.myIFrame) {
                document.body.removeChild(_this.myIFrame);
                _this.myIFrame = null;
              }
            }, Math.floor(0));
          }
          var onDisconnect = this.onDisconnect;
          if (onDisconnect) {
            this.onDisconnect = null;
            onDisconnect();
          }
        };
        FirebaseIFrameScriptHolder.prototype.startLongPoll = function(id, pw) {
          this.myID = id;
          this.myPW = pw;
          this.alive = true;
          while (this.newRequest_()) ;
        };
        FirebaseIFrameScriptHolder.prototype.newRequest_ = function() {
          if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
            this.currentSerial++;
            var urlParams = {};
            urlParams[FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
            urlParams[FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
            urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
            var theURL = this.urlFn(urlParams);
            var curDataString = "";
            var i = 0;
            while (this.pendingSegs.length > 0) {
              var nextSeg = this.pendingSegs[0];
              if (!(nextSeg.d.length + SEG_HEADER_SIZE + curDataString.length <= MAX_URL_DATA_SIZE)) break;
              var theSeg = this.pendingSegs.shift();
              curDataString = curDataString + "&" + FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + "=" + theSeg.seg + "&" + FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + "=" + theSeg.ts + "&" + FIREBASE_LONGPOLL_DATA_PARAM + i + "=" + theSeg.d;
              i++;
            }
            theURL += curDataString;
            this.addLongPollTag_(theURL, this.currentSerial);
            return true;
          }
          return false;
        };
        FirebaseIFrameScriptHolder.prototype.enqueueSegment = function(segnum, totalsegs, data) {
          this.pendingSegs.push({
            seg: segnum,
            ts: totalsegs,
            d: data
          });
          this.alive && this.newRequest_();
        };
        FirebaseIFrameScriptHolder.prototype.addLongPollTag_ = function(url, serial) {
          var _this = this;
          this.outstandingRequests.add(serial);
          var doNewRequest = function() {
            _this.outstandingRequests.delete(serial);
            _this.newRequest_();
          };
          var keepaliveTimeout = setTimeout(doNewRequest, Math.floor(KEEPALIVE_REQUEST_INTERVAL));
          var readyStateCB = function() {
            clearTimeout(keepaliveTimeout);
            doNewRequest();
          };
          this.addTag(url, readyStateCB);
        };
        FirebaseIFrameScriptHolder.prototype.addTag = function(url, loadCB) {
          var _this = this;
          util.isNodeSdk() ? this.doNodeLongPoll(url, loadCB) : setTimeout(function() {
            try {
              if (!_this.sendNewPolls) return;
              var newScript_1 = _this.myIFrame.doc.createElement("script");
              newScript_1.type = "text/javascript";
              newScript_1.async = true;
              newScript_1.src = url;
              newScript_1.onload = newScript_1.onreadystatechange = function() {
                var rstate = newScript_1.readyState;
                if (!rstate || "loaded" === rstate || "complete" === rstate) {
                  newScript_1.onload = newScript_1.onreadystatechange = null;
                  newScript_1.parentNode && newScript_1.parentNode.removeChild(newScript_1);
                  loadCB();
                }
              };
              newScript_1.onerror = function() {
                log("Long-poll script failed to load: " + url);
                _this.sendNewPolls = false;
                _this.close();
              };
              _this.myIFrame.doc.body.appendChild(newScript_1);
            } catch (e) {}
          }, Math.floor(1));
        };
        return FirebaseIFrameScriptHolder;
      }();
      var SDK_VERSION = "";
      function setSDKVersion(version) {
        SDK_VERSION = version;
      }
      var WEBSOCKET_MAX_FRAME_SIZE = 16384;
      var WEBSOCKET_KEEPALIVE_INTERVAL = 45e3;
      var WebSocketImpl = null;
      "undefined" !== typeof MozWebSocket ? WebSocketImpl = MozWebSocket : "undefined" !== typeof WebSocket && (WebSocketImpl = WebSocket);
      var WebSocketConnection = function() {
        function WebSocketConnection(connId, repoInfo, applicationId, transportSessionId, lastSessionId) {
          this.connId = connId;
          this.applicationId = applicationId;
          this.keepaliveTimer = null;
          this.frames = null;
          this.totalFrames = 0;
          this.bytesSent = 0;
          this.bytesReceived = 0;
          this.log_ = logWrapper(this.connId);
          this.stats_ = StatsManager.getCollection(repoInfo);
          this.connURL = WebSocketConnection.connectionURL_(repoInfo, transportSessionId, lastSessionId);
          this.nodeAdmin = repoInfo.nodeAdmin;
        }
        WebSocketConnection.connectionURL_ = function(repoInfo, transportSessionId, lastSessionId) {
          var urlParams = {};
          urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
          !util.isNodeSdk() && "undefined" !== typeof location && location.href && -1 !== location.href.indexOf(FORGE_DOMAIN) && (urlParams[REFERER_PARAM] = FORGE_REF);
          transportSessionId && (urlParams[TRANSPORT_SESSION_PARAM] = transportSessionId);
          lastSessionId && (urlParams[LAST_SESSION_PARAM] = lastSessionId);
          return repoInfo.connectionURL(WEBSOCKET, urlParams);
        };
        WebSocketConnection.prototype.open = function(onMessage, onDisconnect) {
          var _this = this;
          this.onDisconnect = onDisconnect;
          this.onMessage = onMessage;
          this.log_("Websocket connecting to " + this.connURL);
          this.everConnected_ = false;
          PersistentStorage.set("previous_websocket_failure", true);
          try {
            if (util.isNodeSdk()) {
              var device = this.nodeAdmin ? "AdminNode" : "Node";
              var options = {
                headers: {
                  "User-Agent": "Firebase/" + PROTOCOL_VERSION + "/" + SDK_VERSION + "/" + process.platform + "/" + device,
                  "X-Firebase-GMPID": this.applicationId || ""
                }
              };
              var env = process["env"];
              var proxy = 0 === this.connURL.indexOf("wss://") ? env["HTTPS_PROXY"] || env["https_proxy"] : env["HTTP_PROXY"] || env["http_proxy"];
              proxy && (options["proxy"] = {
                origin: proxy
              });
              this.mySock = new WebSocketImpl(this.connURL, [], options);
            } else {
              var options = {
                headers: {
                  "X-Firebase-GMPID": this.applicationId || ""
                }
              };
              this.mySock = new WebSocketImpl(this.connURL, [], options);
            }
          } catch (e) {
            this.log_("Error instantiating WebSocket.");
            var error = e.message || e.data;
            error && this.log_(error);
            this.onClosed_();
            return;
          }
          this.mySock.onopen = function() {
            _this.log_("Websocket connected.");
            _this.everConnected_ = true;
          };
          this.mySock.onclose = function() {
            _this.log_("Websocket connection was disconnected.");
            _this.mySock = null;
            _this.onClosed_();
          };
          this.mySock.onmessage = function(m) {
            _this.handleIncomingFrame(m);
          };
          this.mySock.onerror = function(e) {
            _this.log_("WebSocket error.  Closing connection.");
            var error = e.message || e.data;
            error && _this.log_(error);
            _this.onClosed_();
          };
        };
        WebSocketConnection.prototype.start = function() {};
        WebSocketConnection.forceDisallow = function() {
          WebSocketConnection.forceDisallow_ = true;
        };
        WebSocketConnection.isAvailable = function() {
          var isOldAndroid = false;
          if ("undefined" !== typeof navigator && navigator.userAgent) {
            var oldAndroidRegex = /Android ([0-9]{0,}\.[0-9]{0,})/;
            var oldAndroidMatch = navigator.userAgent.match(oldAndroidRegex);
            oldAndroidMatch && oldAndroidMatch.length > 1 && parseFloat(oldAndroidMatch[1]) < 4.4 && (isOldAndroid = true);
          }
          return !isOldAndroid && null !== WebSocketImpl && !WebSocketConnection.forceDisallow_;
        };
        WebSocketConnection.previouslyFailed = function() {
          return PersistentStorage.isInMemoryStorage || true === PersistentStorage.get("previous_websocket_failure");
        };
        WebSocketConnection.prototype.markConnectionHealthy = function() {
          PersistentStorage.remove("previous_websocket_failure");
        };
        WebSocketConnection.prototype.appendFrame_ = function(data) {
          this.frames.push(data);
          if (this.frames.length === this.totalFrames) {
            var fullMess = this.frames.join("");
            this.frames = null;
            var jsonMess = util.jsonEval(fullMess);
            this.onMessage(jsonMess);
          }
        };
        WebSocketConnection.prototype.handleNewFrameCount_ = function(frameCount) {
          this.totalFrames = frameCount;
          this.frames = [];
        };
        WebSocketConnection.prototype.extractFrameCount_ = function(data) {
          util.assert(null === this.frames, "We already have a frame buffer");
          if (data.length <= 6) {
            var frameCount = Number(data);
            if (!isNaN(frameCount)) {
              this.handleNewFrameCount_(frameCount);
              return null;
            }
          }
          this.handleNewFrameCount_(1);
          return data;
        };
        WebSocketConnection.prototype.handleIncomingFrame = function(mess) {
          if (null === this.mySock) return;
          var data = mess["data"];
          this.bytesReceived += data.length;
          this.stats_.incrementCounter("bytes_received", data.length);
          this.resetKeepAlive();
          if (null !== this.frames) this.appendFrame_(data); else {
            var remainingData = this.extractFrameCount_(data);
            null !== remainingData && this.appendFrame_(remainingData);
          }
        };
        WebSocketConnection.prototype.send = function(data) {
          this.resetKeepAlive();
          var dataStr = util.stringify(data);
          this.bytesSent += dataStr.length;
          this.stats_.incrementCounter("bytes_sent", dataStr.length);
          var dataSegs = splitStringBySize(dataStr, WEBSOCKET_MAX_FRAME_SIZE);
          dataSegs.length > 1 && this.sendString_(String(dataSegs.length));
          for (var i = 0; i < dataSegs.length; i++) this.sendString_(dataSegs[i]);
        };
        WebSocketConnection.prototype.shutdown_ = function() {
          this.isClosed_ = true;
          if (this.keepaliveTimer) {
            clearInterval(this.keepaliveTimer);
            this.keepaliveTimer = null;
          }
          if (this.mySock) {
            this.mySock.close();
            this.mySock = null;
          }
        };
        WebSocketConnection.prototype.onClosed_ = function() {
          if (!this.isClosed_) {
            this.log_("WebSocket is closing itself");
            this.shutdown_();
            if (this.onDisconnect) {
              this.onDisconnect(this.everConnected_);
              this.onDisconnect = null;
            }
          }
        };
        WebSocketConnection.prototype.close = function() {
          if (!this.isClosed_) {
            this.log_("WebSocket is being closed");
            this.shutdown_();
          }
        };
        WebSocketConnection.prototype.resetKeepAlive = function() {
          var _this = this;
          clearInterval(this.keepaliveTimer);
          this.keepaliveTimer = setInterval(function() {
            _this.mySock && _this.sendString_("0");
            _this.resetKeepAlive();
          }, Math.floor(WEBSOCKET_KEEPALIVE_INTERVAL));
        };
        WebSocketConnection.prototype.sendString_ = function(str) {
          try {
            this.mySock.send(str);
          } catch (e) {
            this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection.");
            setTimeout(this.onClosed_.bind(this), 0);
          }
        };
        WebSocketConnection.responsesRequiredToBeHealthy = 2;
        WebSocketConnection.healthyTimeout = 3e4;
        return WebSocketConnection;
      }();
      var TransportManager = function() {
        function TransportManager(repoInfo) {
          this.initTransports_(repoInfo);
        }
        Object.defineProperty(TransportManager, "ALL_TRANSPORTS", {
          get: function() {
            return [ BrowserPollConnection, WebSocketConnection ];
          },
          enumerable: false,
          configurable: true
        });
        TransportManager.prototype.initTransports_ = function(repoInfo) {
          var e_1, _a;
          var isWebSocketsAvailable = WebSocketConnection && WebSocketConnection["isAvailable"]();
          var isSkipPollConnection = isWebSocketsAvailable && !WebSocketConnection.previouslyFailed();
          if (repoInfo.webSocketOnly) {
            isWebSocketsAvailable || warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.");
            isSkipPollConnection = true;
          }
          if (isSkipPollConnection) this.transports_ = [ WebSocketConnection ]; else {
            var transports = this.transports_ = [];
            try {
              for (var _b = tslib.__values(TransportManager.ALL_TRANSPORTS), _c = _b.next(); !_c.done; _c = _b.next()) {
                var transport = _c.value;
                transport && transport["isAvailable"]() && transports.push(transport);
              }
            } catch (e_1_1) {
              e_1 = {
                error: e_1_1
              };
            } finally {
              try {
                _c && !_c.done && (_a = _b.return) && _a.call(_b);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
          }
        };
        TransportManager.prototype.initialTransport = function() {
          if (this.transports_.length > 0) return this.transports_[0];
          throw new Error("No transports available");
        };
        TransportManager.prototype.upgradeTransport = function() {
          return this.transports_.length > 1 ? this.transports_[1] : null;
        };
        return TransportManager;
      }();
      var UPGRADE_TIMEOUT = 6e4;
      var DELAY_BEFORE_SENDING_EXTRA_REQUESTS = 5e3;
      var BYTES_SENT_HEALTHY_OVERRIDE = 10240;
      var BYTES_RECEIVED_HEALTHY_OVERRIDE = 102400;
      var MESSAGE_TYPE = "t";
      var MESSAGE_DATA = "d";
      var CONTROL_SHUTDOWN = "s";
      var CONTROL_RESET = "r";
      var CONTROL_ERROR = "e";
      var CONTROL_PONG = "o";
      var SWITCH_ACK = "a";
      var END_TRANSMISSION = "n";
      var PING = "p";
      var SERVER_HELLO = "h";
      var Connection = function() {
        function Connection(id, repoInfo_, applicationId_, onMessage_, onReady_, onDisconnect_, onKill_, lastSessionId) {
          this.id = id;
          this.repoInfo_ = repoInfo_;
          this.applicationId_ = applicationId_;
          this.onMessage_ = onMessage_;
          this.onReady_ = onReady_;
          this.onDisconnect_ = onDisconnect_;
          this.onKill_ = onKill_;
          this.lastSessionId = lastSessionId;
          this.connectionCount = 0;
          this.pendingDataMessages = [];
          this.state_ = 0;
          this.log_ = logWrapper("c:" + this.id + ":");
          this.transportManager_ = new TransportManager(repoInfo_);
          this.log_("Connection created");
          this.start_();
        }
        Connection.prototype.start_ = function() {
          var _this = this;
          var conn = this.transportManager_.initialTransport();
          this.conn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, void 0, this.lastSessionId);
          this.primaryResponsesRequired_ = conn["responsesRequiredToBeHealthy"] || 0;
          var onMessageReceived = this.connReceiver_(this.conn_);
          var onConnectionLost = this.disconnReceiver_(this.conn_);
          this.tx_ = this.conn_;
          this.rx_ = this.conn_;
          this.secondaryConn_ = null;
          this.isHealthy_ = false;
          setTimeout(function() {
            _this.conn_ && _this.conn_.open(onMessageReceived, onConnectionLost);
          }, Math.floor(0));
          var healthyTimeoutMS = conn["healthyTimeout"] || 0;
          healthyTimeoutMS > 0 && (this.healthyTimeout_ = setTimeoutNonBlocking(function() {
            _this.healthyTimeout_ = null;
            if (!_this.isHealthy_) if (_this.conn_ && _this.conn_.bytesReceived > BYTES_RECEIVED_HEALTHY_OVERRIDE) {
              _this.log_("Connection exceeded healthy timeout but has received " + _this.conn_.bytesReceived + " bytes.  Marking connection healthy.");
              _this.isHealthy_ = true;
              _this.conn_.markConnectionHealthy();
            } else if (_this.conn_ && _this.conn_.bytesSent > BYTES_SENT_HEALTHY_OVERRIDE) _this.log_("Connection exceeded healthy timeout but has sent " + _this.conn_.bytesSent + " bytes.  Leaving connection alive."); else {
              _this.log_("Closing unhealthy connection after timeout.");
              _this.close();
            }
          }, Math.floor(healthyTimeoutMS)));
        };
        Connection.prototype.nextTransportId_ = function() {
          return "c:" + this.id + ":" + this.connectionCount++;
        };
        Connection.prototype.disconnReceiver_ = function(conn) {
          var _this = this;
          return function(everConnected) {
            if (conn === _this.conn_) _this.onConnectionLost_(everConnected); else if (conn === _this.secondaryConn_) {
              _this.log_("Secondary connection lost.");
              _this.onSecondaryConnectionLost_();
            } else _this.log_("closing an old connection");
          };
        };
        Connection.prototype.connReceiver_ = function(conn) {
          var _this = this;
          return function(message) {
            2 !== _this.state_ && (conn === _this.rx_ ? _this.onPrimaryMessageReceived_(message) : conn === _this.secondaryConn_ ? _this.onSecondaryMessageReceived_(message) : _this.log_("message on old connection"));
          };
        };
        Connection.prototype.sendRequest = function(dataMsg) {
          var msg = {
            t: "d",
            d: dataMsg
          };
          this.sendData_(msg);
        };
        Connection.prototype.tryCleanupConnection = function() {
          if (this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_) {
            this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId);
            this.conn_ = this.secondaryConn_;
            this.secondaryConn_ = null;
          }
        };
        Connection.prototype.onSecondaryControl_ = function(controlData) {
          if (MESSAGE_TYPE in controlData) {
            var cmd = controlData[MESSAGE_TYPE];
            if (cmd === SWITCH_ACK) this.upgradeIfSecondaryHealthy_(); else if (cmd === CONTROL_RESET) {
              this.log_("Got a reset on secondary, closing it");
              this.secondaryConn_.close();
              this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close();
            } else if (cmd === CONTROL_PONG) {
              this.log_("got pong on secondary.");
              this.secondaryResponsesRequired_--;
              this.upgradeIfSecondaryHealthy_();
            }
          }
        };
        Connection.prototype.onSecondaryMessageReceived_ = function(parsedData) {
          var layer = requireKey("t", parsedData);
          var data = requireKey("d", parsedData);
          if ("c" === layer) this.onSecondaryControl_(data); else {
            if ("d" !== layer) throw new Error("Unknown protocol layer: " + layer);
            this.pendingDataMessages.push(data);
          }
        };
        Connection.prototype.upgradeIfSecondaryHealthy_ = function() {
          if (this.secondaryResponsesRequired_ <= 0) {
            this.log_("Secondary connection is healthy.");
            this.isHealthy_ = true;
            this.secondaryConn_.markConnectionHealthy();
            this.proceedWithUpgrade_();
          } else {
            this.log_("sending ping on secondary.");
            this.secondaryConn_.send({
              t: "c",
              d: {
                t: PING,
                d: {}
              }
            });
          }
        };
        Connection.prototype.proceedWithUpgrade_ = function() {
          this.secondaryConn_.start();
          this.log_("sending client ack on secondary");
          this.secondaryConn_.send({
            t: "c",
            d: {
              t: SWITCH_ACK,
              d: {}
            }
          });
          this.log_("Ending transmission on primary");
          this.conn_.send({
            t: "c",
            d: {
              t: END_TRANSMISSION,
              d: {}
            }
          });
          this.tx_ = this.secondaryConn_;
          this.tryCleanupConnection();
        };
        Connection.prototype.onPrimaryMessageReceived_ = function(parsedData) {
          var layer = requireKey("t", parsedData);
          var data = requireKey("d", parsedData);
          "c" === layer ? this.onControl_(data) : "d" === layer && this.onDataMessage_(data);
        };
        Connection.prototype.onDataMessage_ = function(message) {
          this.onPrimaryResponse_();
          this.onMessage_(message);
        };
        Connection.prototype.onPrimaryResponse_ = function() {
          if (!this.isHealthy_) {
            this.primaryResponsesRequired_--;
            if (this.primaryResponsesRequired_ <= 0) {
              this.log_("Primary connection is healthy.");
              this.isHealthy_ = true;
              this.conn_.markConnectionHealthy();
            }
          }
        };
        Connection.prototype.onControl_ = function(controlData) {
          var cmd = requireKey(MESSAGE_TYPE, controlData);
          if (MESSAGE_DATA in controlData) {
            var payload = controlData[MESSAGE_DATA];
            if (cmd === SERVER_HELLO) this.onHandshake_(payload); else if (cmd === END_TRANSMISSION) {
              this.log_("recvd end transmission on primary");
              this.rx_ = this.secondaryConn_;
              for (var i = 0; i < this.pendingDataMessages.length; ++i) this.onDataMessage_(this.pendingDataMessages[i]);
              this.pendingDataMessages = [];
              this.tryCleanupConnection();
            } else if (cmd === CONTROL_SHUTDOWN) this.onConnectionShutdown_(payload); else if (cmd === CONTROL_RESET) this.onReset_(payload); else if (cmd === CONTROL_ERROR) error("Server Error: " + payload); else if (cmd === CONTROL_PONG) {
              this.log_("got pong on primary.");
              this.onPrimaryResponse_();
              this.sendPingOnPrimaryIfNecessary_();
            } else error("Unknown control packet command: " + cmd);
          }
        };
        Connection.prototype.onHandshake_ = function(handshake) {
          var timestamp = handshake.ts;
          var version = handshake.v;
          var host = handshake.h;
          this.sessionId = handshake.s;
          this.repoInfo_.updateHost(host);
          if (0 === this.state_) {
            this.conn_.start();
            this.onConnectionEstablished_(this.conn_, timestamp);
            PROTOCOL_VERSION !== version && warn("Protocol version mismatch detected");
            this.tryStartUpgrade_();
          }
        };
        Connection.prototype.tryStartUpgrade_ = function() {
          var conn = this.transportManager_.upgradeTransport();
          conn && this.startUpgrade_(conn);
        };
        Connection.prototype.startUpgrade_ = function(conn) {
          var _this = this;
          this.secondaryConn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.sessionId);
          this.secondaryResponsesRequired_ = conn["responsesRequiredToBeHealthy"] || 0;
          var onMessage = this.connReceiver_(this.secondaryConn_);
          var onDisconnect = this.disconnReceiver_(this.secondaryConn_);
          this.secondaryConn_.open(onMessage, onDisconnect);
          setTimeoutNonBlocking(function() {
            if (_this.secondaryConn_) {
              _this.log_("Timed out trying to upgrade.");
              _this.secondaryConn_.close();
            }
          }, Math.floor(UPGRADE_TIMEOUT));
        };
        Connection.prototype.onReset_ = function(host) {
          this.log_("Reset packet received.  New host: " + host);
          this.repoInfo_.updateHost(host);
          if (1 === this.state_) this.close(); else {
            this.closeConnections_();
            this.start_();
          }
        };
        Connection.prototype.onConnectionEstablished_ = function(conn, timestamp) {
          var _this = this;
          this.log_("Realtime connection established.");
          this.conn_ = conn;
          this.state_ = 1;
          if (this.onReady_) {
            this.onReady_(timestamp, this.sessionId);
            this.onReady_ = null;
          }
          if (0 === this.primaryResponsesRequired_) {
            this.log_("Primary connection is healthy.");
            this.isHealthy_ = true;
          } else setTimeoutNonBlocking(function() {
            _this.sendPingOnPrimaryIfNecessary_();
          }, Math.floor(DELAY_BEFORE_SENDING_EXTRA_REQUESTS));
        };
        Connection.prototype.sendPingOnPrimaryIfNecessary_ = function() {
          if (!this.isHealthy_ && 1 === this.state_) {
            this.log_("sending ping on primary.");
            this.sendData_({
              t: "c",
              d: {
                t: PING,
                d: {}
              }
            });
          }
        };
        Connection.prototype.onSecondaryConnectionLost_ = function() {
          var conn = this.secondaryConn_;
          this.secondaryConn_ = null;
          this.tx_ !== conn && this.rx_ !== conn || this.close();
        };
        Connection.prototype.onConnectionLost_ = function(everConnected) {
          this.conn_ = null;
          if (everConnected || 0 !== this.state_) 1 === this.state_ && this.log_("Realtime connection lost."); else {
            this.log_("Realtime connection failed.");
            if (this.repoInfo_.isCacheableHost()) {
              PersistentStorage.remove("host:" + this.repoInfo_.host);
              this.repoInfo_.internalHost = this.repoInfo_.host;
            }
          }
          this.close();
        };
        Connection.prototype.onConnectionShutdown_ = function(reason) {
          this.log_("Connection shutdown command received. Shutting down...");
          if (this.onKill_) {
            this.onKill_(reason);
            this.onKill_ = null;
          }
          this.onDisconnect_ = null;
          this.close();
        };
        Connection.prototype.sendData_ = function(data) {
          if (1 !== this.state_) throw "Connection is not connected";
          this.tx_.send(data);
        };
        Connection.prototype.close = function() {
          if (2 !== this.state_) {
            this.log_("Closing realtime connection.");
            this.state_ = 2;
            this.closeConnections_();
            if (this.onDisconnect_) {
              this.onDisconnect_();
              this.onDisconnect_ = null;
            }
          }
        };
        Connection.prototype.closeConnections_ = function() {
          this.log_("Shutting down all connections");
          if (this.conn_) {
            this.conn_.close();
            this.conn_ = null;
          }
          if (this.secondaryConn_) {
            this.secondaryConn_.close();
            this.secondaryConn_ = null;
          }
          if (this.healthyTimeout_) {
            clearTimeout(this.healthyTimeout_);
            this.healthyTimeout_ = null;
          }
        };
        return Connection;
      }();
      var ServerActions = function() {
        function ServerActions() {}
        ServerActions.prototype.put = function(pathString, data, onComplete, hash) {};
        ServerActions.prototype.merge = function(pathString, data, onComplete, hash) {};
        ServerActions.prototype.refreshAuthToken = function(token) {};
        ServerActions.prototype.onDisconnectPut = function(pathString, data, onComplete) {};
        ServerActions.prototype.onDisconnectMerge = function(pathString, data, onComplete) {};
        ServerActions.prototype.onDisconnectCancel = function(pathString, onComplete) {};
        ServerActions.prototype.reportStats = function(stats) {};
        return ServerActions;
      }();
      var RECONNECT_MIN_DELAY = 1e3;
      var RECONNECT_MAX_DELAY_DEFAULT = 3e5;
      var RECONNECT_MAX_DELAY_FOR_ADMINS = 3e4;
      var RECONNECT_DELAY_MULTIPLIER = 1.3;
      var RECONNECT_DELAY_RESET_TIMEOUT = 3e4;
      var SERVER_KILL_INTERRUPT_REASON = "server_kill";
      var INVALID_AUTH_TOKEN_THRESHOLD = 3;
      var PersistentConnection = function(_super) {
        tslib.__extends(PersistentConnection, _super);
        function PersistentConnection(repoInfo_, applicationId_, onDataUpdate_, onConnectStatus_, onServerInfoUpdate_, authTokenProvider_, authOverride_) {
          var _this = _super.call(this) || this;
          _this.repoInfo_ = repoInfo_;
          _this.applicationId_ = applicationId_;
          _this.onDataUpdate_ = onDataUpdate_;
          _this.onConnectStatus_ = onConnectStatus_;
          _this.onServerInfoUpdate_ = onServerInfoUpdate_;
          _this.authTokenProvider_ = authTokenProvider_;
          _this.authOverride_ = authOverride_;
          _this.id = PersistentConnection.nextPersistentConnectionId_++;
          _this.log_ = logWrapper("p:" + _this.id + ":");
          _this.interruptReasons_ = {};
          _this.listens = new Map();
          _this.outstandingPuts_ = [];
          _this.outstandingPutCount_ = 0;
          _this.onDisconnectRequestQueue_ = [];
          _this.connected_ = false;
          _this.reconnectDelay_ = RECONNECT_MIN_DELAY;
          _this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_DEFAULT;
          _this.securityDebugCallback_ = null;
          _this.lastSessionId = null;
          _this.establishConnectionTimer_ = null;
          _this.visible_ = false;
          _this.requestCBHash_ = {};
          _this.requestNumber_ = 0;
          _this.realtime_ = null;
          _this.authToken_ = null;
          _this.forceTokenRefresh_ = false;
          _this.invalidAuthTokenCount_ = 0;
          _this.firstConnection_ = true;
          _this.lastConnectionAttemptTime_ = null;
          _this.lastConnectionEstablishedTime_ = null;
          if (authOverride_ && !util.isNodeSdk()) throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
          _this.scheduleConnect_(0);
          VisibilityMonitor.getInstance().on("visible", _this.onVisible_, _this);
          -1 === repoInfo_.host.indexOf("fblocal") && OnlineMonitor.getInstance().on("online", _this.onOnline_, _this);
          return _this;
        }
        PersistentConnection.prototype.sendRequest = function(action, body, onResponse) {
          var curReqNum = ++this.requestNumber_;
          var msg = {
            r: curReqNum,
            a: action,
            b: body
          };
          this.log_(util.stringify(msg));
          util.assert(this.connected_, "sendRequest call when we're not connected not allowed.");
          this.realtime_.sendRequest(msg);
          onResponse && (this.requestCBHash_[curReqNum] = onResponse);
        };
        PersistentConnection.prototype.listen = function(query, currentHashFn, tag, onComplete) {
          var queryId = query.queryIdentifier();
          var pathString = query.path.toString();
          this.log_("Listen called for " + pathString + " " + queryId);
          this.listens.has(pathString) || this.listens.set(pathString, new Map());
          util.assert(query.getQueryParams().isDefault() || !query.getQueryParams().loadsAllData(), "listen() called for non-default but complete query");
          util.assert(!this.listens.get(pathString).has(queryId), "listen() called twice for same path/queryId.");
          var listenSpec = {
            onComplete: onComplete,
            hashFn: currentHashFn,
            query: query,
            tag: tag
          };
          this.listens.get(pathString).set(queryId, listenSpec);
          this.connected_ && this.sendListen_(listenSpec);
        };
        PersistentConnection.prototype.sendListen_ = function(listenSpec) {
          var _this = this;
          var query = listenSpec.query;
          var pathString = query.path.toString();
          var queryId = query.queryIdentifier();
          this.log_("Listen on " + pathString + " for " + queryId);
          var req = {
            p: pathString
          };
          var action = "q";
          if (listenSpec.tag) {
            req["q"] = query.queryObject();
            req["t"] = listenSpec.tag;
          }
          req["h"] = listenSpec.hashFn();
          this.sendRequest(action, req, function(message) {
            var payload = message["d"];
            var status = message["s"];
            PersistentConnection.warnOnListenWarnings_(payload, query);
            var currentListenSpec = _this.listens.get(pathString) && _this.listens.get(pathString).get(queryId);
            if (currentListenSpec === listenSpec) {
              _this.log_("listen response", message);
              "ok" !== status && _this.removeListen_(pathString, queryId);
              listenSpec.onComplete && listenSpec.onComplete(status, payload);
            }
          });
        };
        PersistentConnection.warnOnListenWarnings_ = function(payload, query) {
          if (payload && "object" === typeof payload && util.contains(payload, "w")) {
            var warnings = util.safeGet(payload, "w");
            if (Array.isArray(warnings) && ~warnings.indexOf("no_index")) {
              var indexSpec = '".indexOn": "' + query.getQueryParams().getIndex().toString() + '"';
              var indexPath = query.path.toString();
              warn("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " + indexSpec + " at " + indexPath + " to your security rules for better performance.");
            }
          }
        };
        PersistentConnection.prototype.refreshAuthToken = function(token) {
          this.authToken_ = token;
          this.log_("Auth token refreshed");
          this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, function() {});
          this.reduceReconnectDelayIfAdminCredential_(token);
        };
        PersistentConnection.prototype.reduceReconnectDelayIfAdminCredential_ = function(credential) {
          var isFirebaseSecret = credential && 40 === credential.length;
          if (isFirebaseSecret || util.isAdmin(credential)) {
            this.log_("Admin auth credential detected.  Reducing max reconnect time.");
            this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
          }
        };
        PersistentConnection.prototype.tryAuth = function() {
          var _this = this;
          if (this.connected_ && this.authToken_) {
            var token_1 = this.authToken_;
            var authMethod = util.isValidFormat(token_1) ? "auth" : "gauth";
            var requestData = {
              cred: token_1
            };
            null === this.authOverride_ ? requestData["noauth"] = true : "object" === typeof this.authOverride_ && (requestData["authvar"] = this.authOverride_);
            this.sendRequest(authMethod, requestData, function(res) {
              var status = res["s"];
              var data = res["d"] || "error";
              _this.authToken_ === token_1 && ("ok" === status ? _this.invalidAuthTokenCount_ = 0 : _this.onAuthRevoked_(status, data));
            });
          }
        };
        PersistentConnection.prototype.unlisten = function(query, tag) {
          var pathString = query.path.toString();
          var queryId = query.queryIdentifier();
          this.log_("Unlisten called for " + pathString + " " + queryId);
          util.assert(query.getQueryParams().isDefault() || !query.getQueryParams().loadsAllData(), "unlisten() called for non-default but complete query");
          var listen = this.removeListen_(pathString, queryId);
          listen && this.connected_ && this.sendUnlisten_(pathString, queryId, query.queryObject(), tag);
        };
        PersistentConnection.prototype.sendUnlisten_ = function(pathString, queryId, queryObj, tag) {
          this.log_("Unlisten on " + pathString + " for " + queryId);
          var req = {
            p: pathString
          };
          var action = "n";
          if (tag) {
            req["q"] = queryObj;
            req["t"] = tag;
          }
          this.sendRequest(action, req);
        };
        PersistentConnection.prototype.onDisconnectPut = function(pathString, data, onComplete) {
          this.connected_ ? this.sendOnDisconnect_("o", pathString, data, onComplete) : this.onDisconnectRequestQueue_.push({
            pathString: pathString,
            action: "o",
            data: data,
            onComplete: onComplete
          });
        };
        PersistentConnection.prototype.onDisconnectMerge = function(pathString, data, onComplete) {
          this.connected_ ? this.sendOnDisconnect_("om", pathString, data, onComplete) : this.onDisconnectRequestQueue_.push({
            pathString: pathString,
            action: "om",
            data: data,
            onComplete: onComplete
          });
        };
        PersistentConnection.prototype.onDisconnectCancel = function(pathString, onComplete) {
          this.connected_ ? this.sendOnDisconnect_("oc", pathString, null, onComplete) : this.onDisconnectRequestQueue_.push({
            pathString: pathString,
            action: "oc",
            data: null,
            onComplete: onComplete
          });
        };
        PersistentConnection.prototype.sendOnDisconnect_ = function(action, pathString, data, onComplete) {
          var request = {
            p: pathString,
            d: data
          };
          this.log_("onDisconnect " + action, request);
          this.sendRequest(action, request, function(response) {
            onComplete && setTimeout(function() {
              onComplete(response["s"], response["d"]);
            }, Math.floor(0));
          });
        };
        PersistentConnection.prototype.put = function(pathString, data, onComplete, hash) {
          this.putInternal("p", pathString, data, onComplete, hash);
        };
        PersistentConnection.prototype.merge = function(pathString, data, onComplete, hash) {
          this.putInternal("m", pathString, data, onComplete, hash);
        };
        PersistentConnection.prototype.putInternal = function(action, pathString, data, onComplete, hash) {
          var request = {
            p: pathString,
            d: data
          };
          void 0 !== hash && (request["h"] = hash);
          this.outstandingPuts_.push({
            action: action,
            request: request,
            onComplete: onComplete
          });
          this.outstandingPutCount_++;
          var index = this.outstandingPuts_.length - 1;
          this.connected_ ? this.sendPut_(index) : this.log_("Buffering put: " + pathString);
        };
        PersistentConnection.prototype.sendPut_ = function(index) {
          var _this = this;
          var action = this.outstandingPuts_[index].action;
          var request = this.outstandingPuts_[index].request;
          var onComplete = this.outstandingPuts_[index].onComplete;
          this.outstandingPuts_[index].queued = this.connected_;
          this.sendRequest(action, request, function(message) {
            _this.log_(action + " response", message);
            delete _this.outstandingPuts_[index];
            _this.outstandingPutCount_--;
            0 === _this.outstandingPutCount_ && (_this.outstandingPuts_ = []);
            onComplete && onComplete(message["s"], message["d"]);
          });
        };
        PersistentConnection.prototype.reportStats = function(stats) {
          var _this = this;
          if (this.connected_) {
            var request = {
              c: stats
            };
            this.log_("reportStats", request);
            this.sendRequest("s", request, function(result) {
              var status = result["s"];
              if ("ok" !== status) {
                var errorReason = result["d"];
                _this.log_("reportStats", "Error sending stats: " + errorReason);
              }
            });
          }
        };
        PersistentConnection.prototype.onDataMessage_ = function(message) {
          if ("r" in message) {
            this.log_("from server: " + util.stringify(message));
            var reqNum = message["r"];
            var onResponse = this.requestCBHash_[reqNum];
            if (onResponse) {
              delete this.requestCBHash_[reqNum];
              onResponse(message["b"]);
            }
          } else {
            if ("error" in message) throw "A server-side error has occurred: " + message["error"];
            "a" in message && this.onDataPush_(message["a"], message["b"]);
          }
        };
        PersistentConnection.prototype.onDataPush_ = function(action, body) {
          this.log_("handleServerMessage", action, body);
          "d" === action ? this.onDataUpdate_(body["p"], body["d"], false, body["t"]) : "m" === action ? this.onDataUpdate_(body["p"], body["d"], true, body["t"]) : "c" === action ? this.onListenRevoked_(body["p"], body["q"]) : "ac" === action ? this.onAuthRevoked_(body["s"], body["d"]) : "sd" === action ? this.onSecurityDebugPacket_(body) : error("Unrecognized action received from server: " + util.stringify(action) + "\nAre you using the latest client?");
        };
        PersistentConnection.prototype.onReady_ = function(timestamp, sessionId) {
          this.log_("connection ready");
          this.connected_ = true;
          this.lastConnectionEstablishedTime_ = new Date().getTime();
          this.handleTimestamp_(timestamp);
          this.lastSessionId = sessionId;
          this.firstConnection_ && this.sendConnectStats_();
          this.restoreState_();
          this.firstConnection_ = false;
          this.onConnectStatus_(true);
        };
        PersistentConnection.prototype.scheduleConnect_ = function(timeout) {
          var _this = this;
          util.assert(!this.realtime_, "Scheduling a connect when we're already connected/ing?");
          this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_);
          this.establishConnectionTimer_ = setTimeout(function() {
            _this.establishConnectionTimer_ = null;
            _this.establishConnection_();
          }, Math.floor(timeout));
        };
        PersistentConnection.prototype.onVisible_ = function(visible) {
          if (visible && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_) {
            this.log_("Window became visible.  Reducing delay.");
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            this.realtime_ || this.scheduleConnect_(0);
          }
          this.visible_ = visible;
        };
        PersistentConnection.prototype.onOnline_ = function(online) {
          if (online) {
            this.log_("Browser went online.");
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            this.realtime_ || this.scheduleConnect_(0);
          } else {
            this.log_("Browser went offline.  Killing connection.");
            this.realtime_ && this.realtime_.close();
          }
        };
        PersistentConnection.prototype.onRealtimeDisconnect_ = function() {
          this.log_("data client disconnected");
          this.connected_ = false;
          this.realtime_ = null;
          this.cancelSentTransactions_();
          this.requestCBHash_ = {};
          if (this.shouldReconnect_()) {
            if (this.visible_) {
              if (this.lastConnectionEstablishedTime_) {
                var timeSinceLastConnectSucceeded = new Date().getTime() - this.lastConnectionEstablishedTime_;
                timeSinceLastConnectSucceeded > RECONNECT_DELAY_RESET_TIMEOUT && (this.reconnectDelay_ = RECONNECT_MIN_DELAY);
                this.lastConnectionEstablishedTime_ = null;
              }
            } else {
              this.log_("Window isn't visible.  Delaying reconnect.");
              this.reconnectDelay_ = this.maxReconnectDelay_;
              this.lastConnectionAttemptTime_ = new Date().getTime();
            }
            var timeSinceLastConnectAttempt = new Date().getTime() - this.lastConnectionAttemptTime_;
            var reconnectDelay = Math.max(0, this.reconnectDelay_ - timeSinceLastConnectAttempt);
            reconnectDelay = Math.random() * reconnectDelay;
            this.log_("Trying to reconnect in " + reconnectDelay + "ms");
            this.scheduleConnect_(reconnectDelay);
            this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * RECONNECT_DELAY_MULTIPLIER);
          }
          this.onConnectStatus_(false);
        };
        PersistentConnection.prototype.establishConnection_ = function() {
          var _this = this;
          if (this.shouldReconnect_()) {
            this.log_("Making a connection attempt");
            this.lastConnectionAttemptTime_ = new Date().getTime();
            this.lastConnectionEstablishedTime_ = null;
            var onDataMessage_1 = this.onDataMessage_.bind(this);
            var onReady_1 = this.onReady_.bind(this);
            var onDisconnect_1 = this.onRealtimeDisconnect_.bind(this);
            var connId_1 = this.id + ":" + PersistentConnection.nextConnectionId_++;
            var self_1 = this;
            var lastSessionId_1 = this.lastSessionId;
            var canceled_1 = false;
            var connection_1 = null;
            var closeFn_1 = function() {
              if (connection_1) connection_1.close(); else {
                canceled_1 = true;
                onDisconnect_1();
              }
            };
            var sendRequestFn = function(msg) {
              util.assert(connection_1, "sendRequest call when we're not connected not allowed.");
              connection_1.sendRequest(msg);
            };
            this.realtime_ = {
              close: closeFn_1,
              sendRequest: sendRequestFn
            };
            var forceRefresh = this.forceTokenRefresh_;
            this.forceTokenRefresh_ = false;
            this.authTokenProvider_.getToken(forceRefresh).then(function(result) {
              if (canceled_1) log("getToken() completed but was canceled"); else {
                log("getToken() completed. Creating connection.");
                self_1.authToken_ = result && result.accessToken;
                connection_1 = new Connection(connId_1, self_1.repoInfo_, self_1.applicationId_, onDataMessage_1, onReady_1, onDisconnect_1, function(reason) {
                  warn(reason + " (" + self_1.repoInfo_.toString() + ")");
                  self_1.interrupt(SERVER_KILL_INTERRUPT_REASON);
                }, lastSessionId_1);
              }
            }).then(null, function(error) {
              self_1.log_("Failed to get token: " + error);
              if (!canceled_1) {
                _this.repoInfo_.nodeAdmin && warn(error);
                closeFn_1();
              }
            });
          }
        };
        PersistentConnection.prototype.interrupt = function(reason) {
          log("Interrupting connection for reason: " + reason);
          this.interruptReasons_[reason] = true;
          if (this.realtime_) this.realtime_.close(); else {
            if (this.establishConnectionTimer_) {
              clearTimeout(this.establishConnectionTimer_);
              this.establishConnectionTimer_ = null;
            }
            this.connected_ && this.onRealtimeDisconnect_();
          }
        };
        PersistentConnection.prototype.resume = function(reason) {
          log("Resuming connection for reason: " + reason);
          delete this.interruptReasons_[reason];
          if (util.isEmpty(this.interruptReasons_)) {
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            this.realtime_ || this.scheduleConnect_(0);
          }
        };
        PersistentConnection.prototype.handleTimestamp_ = function(timestamp) {
          var delta = timestamp - new Date().getTime();
          this.onServerInfoUpdate_({
            serverTimeOffset: delta
          });
        };
        PersistentConnection.prototype.cancelSentTransactions_ = function() {
          for (var i = 0; i < this.outstandingPuts_.length; i++) {
            var put = this.outstandingPuts_[i];
            if (put && "h" in put.request && put.queued) {
              put.onComplete && put.onComplete("disconnect");
              delete this.outstandingPuts_[i];
              this.outstandingPutCount_--;
            }
          }
          0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []);
        };
        PersistentConnection.prototype.onListenRevoked_ = function(pathString, query) {
          var queryId;
          queryId = query ? query.map(function(q) {
            return ObjectToUniqueKey(q);
          }).join("$") : "default";
          var listen = this.removeListen_(pathString, queryId);
          listen && listen.onComplete && listen.onComplete("permission_denied");
        };
        PersistentConnection.prototype.removeListen_ = function(pathString, queryId) {
          var normalizedPathString = new Path(pathString).toString();
          var listen;
          if (this.listens.has(normalizedPathString)) {
            var map = this.listens.get(normalizedPathString);
            listen = map.get(queryId);
            map.delete(queryId);
            0 === map.size && this.listens.delete(normalizedPathString);
          } else listen = void 0;
          return listen;
        };
        PersistentConnection.prototype.onAuthRevoked_ = function(statusCode, explanation) {
          log("Auth token revoked: " + statusCode + "/" + explanation);
          this.authToken_ = null;
          this.forceTokenRefresh_ = true;
          this.realtime_.close();
          if ("invalid_token" === statusCode || "permission_denied" === statusCode) {
            this.invalidAuthTokenCount_++;
            if (this.invalidAuthTokenCount_ >= INVALID_AUTH_TOKEN_THRESHOLD) {
              this.reconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
              this.authTokenProvider_.notifyForInvalidToken();
            }
          }
        };
        PersistentConnection.prototype.onSecurityDebugPacket_ = function(body) {
          this.securityDebugCallback_ ? this.securityDebugCallback_(body) : "msg" in body && console.log("FIREBASE: " + body["msg"].replace("\n", "\nFIREBASE: "));
        };
        PersistentConnection.prototype.restoreState_ = function() {
          var e_1, _a, e_2, _b;
          this.tryAuth();
          try {
            for (var _c = tslib.__values(this.listens.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
              var queries = _d.value;
              try {
                for (var _e = (e_2 = void 0, tslib.__values(queries.values())), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var listenSpec = _f.value;
                  this.sendListen_(listenSpec);
                }
              } catch (e_2_1) {
                e_2 = {
                  error: e_2_1
                };
              } finally {
                try {
                  _f && !_f.done && (_b = _e.return) && _b.call(_e);
                } finally {
                  if (e_2) throw e_2.error;
                }
              }
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              _d && !_d.done && (_a = _c.return) && _a.call(_c);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          for (var i = 0; i < this.outstandingPuts_.length; i++) this.outstandingPuts_[i] && this.sendPut_(i);
          while (this.onDisconnectRequestQueue_.length) {
            var request = this.onDisconnectRequestQueue_.shift();
            this.sendOnDisconnect_(request.action, request.pathString, request.data, request.onComplete);
          }
        };
        PersistentConnection.prototype.sendConnectStats_ = function() {
          var stats = {};
          var clientName = "js";
          util.isNodeSdk() && (clientName = this.repoInfo_.nodeAdmin ? "admin_node" : "node");
          stats["sdk." + clientName + "." + SDK_VERSION.replace(/\./g, "-")] = 1;
          util.isMobileCordova() ? stats["framework.cordova"] = 1 : util.isReactNative() && (stats["framework.reactnative"] = 1);
          this.reportStats(stats);
        };
        PersistentConnection.prototype.shouldReconnect_ = function() {
          var online = OnlineMonitor.getInstance().currentlyOnline();
          return util.isEmpty(this.interruptReasons_) && online;
        };
        PersistentConnection.nextPersistentConnectionId_ = 0;
        PersistentConnection.nextConnectionId_ = 0;
        return PersistentConnection;
      }(ServerActions);
      var ReadonlyRestClient = function(_super) {
        tslib.__extends(ReadonlyRestClient, _super);
        function ReadonlyRestClient(repoInfo_, onDataUpdate_, authTokenProvider_) {
          var _this = _super.call(this) || this;
          _this.repoInfo_ = repoInfo_;
          _this.onDataUpdate_ = onDataUpdate_;
          _this.authTokenProvider_ = authTokenProvider_;
          _this.log_ = logWrapper("p:rest:");
          _this.listens_ = {};
          return _this;
        }
        ReadonlyRestClient.prototype.reportStats = function(stats) {
          throw new Error("Method not implemented.");
        };
        ReadonlyRestClient.getListenId_ = function(query, tag) {
          if (void 0 !== tag) return "tag$" + tag;
          util.assert(query.getQueryParams().isDefault(), "should have a tag if it's not a default query.");
          return query.path.toString();
        };
        ReadonlyRestClient.prototype.listen = function(query, currentHashFn, tag, onComplete) {
          var _this = this;
          var pathString = query.path.toString();
          this.log_("Listen called for " + pathString + " " + query.queryIdentifier());
          var listenId = ReadonlyRestClient.getListenId_(query, tag);
          var thisListen = {};
          this.listens_[listenId] = thisListen;
          var queryStringParameters = query.getQueryParams().toRestQueryStringParameters();
          this.restRequest_(pathString + ".json", queryStringParameters, function(error, result) {
            var data = result;
            if (404 === error) {
              data = null;
              error = null;
            }
            null === error && _this.onDataUpdate_(pathString, data, false, tag);
            if (util.safeGet(_this.listens_, listenId) === thisListen) {
              var status_1;
              status_1 = error ? 401 === error ? "permission_denied" : "rest_error:" + error : "ok";
              onComplete(status_1, null);
            }
          });
        };
        ReadonlyRestClient.prototype.unlisten = function(query, tag) {
          var listenId = ReadonlyRestClient.getListenId_(query, tag);
          delete this.listens_[listenId];
        };
        ReadonlyRestClient.prototype.refreshAuthToken = function(token) {};
        ReadonlyRestClient.prototype.restRequest_ = function(pathString, queryStringParameters, callback) {
          var _this = this;
          void 0 === queryStringParameters && (queryStringParameters = {});
          queryStringParameters["format"] = "export";
          this.authTokenProvider_.getToken(false).then(function(authTokenData) {
            var authToken = authTokenData && authTokenData.accessToken;
            authToken && (queryStringParameters["auth"] = authToken);
            var url = (_this.repoInfo_.secure ? "https://" : "http://") + _this.repoInfo_.host + pathString + "?ns=" + _this.repoInfo_.namespace + util.querystring(queryStringParameters);
            _this.log_("Sending REST request for " + url);
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
              if (callback && 4 === xhr.readyState) {
                _this.log_("REST Response for " + url + " received. status:", xhr.status, "response:", xhr.responseText);
                var res = null;
                if (xhr.status >= 200 && xhr.status < 300) {
                  try {
                    res = util.jsonEval(xhr.responseText);
                  } catch (e) {
                    warn("Failed to parse JSON response for " + url + ": " + xhr.responseText);
                  }
                  callback(null, res);
                } else {
                  401 !== xhr.status && 404 !== xhr.status && warn("Got unsuccessful REST response for " + url + " Status: " + xhr.status);
                  callback(xhr.status);
                }
                callback = null;
              }
            };
            xhr.open("GET", url, true);
            xhr.send();
          });
        };
        return ReadonlyRestClient;
      }(ServerActions);
      var INTERRUPT_REASON = "repo_interrupt";
      var Repo = function() {
        function Repo(repoInfo_, forceRestClient, app, authTokenProvider) {
          var _this = this;
          this.repoInfo_ = repoInfo_;
          this.app = app;
          this.dataUpdateCount = 0;
          this.statsListener_ = null;
          this.eventQueue_ = new EventQueue();
          this.nextWriteId_ = 1;
          this.interceptServerDataCallback_ = null;
          this.onDisconnect_ = new SparseSnapshotTree();
          this.persistentConnection_ = null;
          this.stats_ = StatsManager.getCollection(repoInfo_);
          if (forceRestClient || beingCrawled()) {
            this.server_ = new ReadonlyRestClient(this.repoInfo_, this.onDataUpdate_.bind(this), authTokenProvider);
            setTimeout(this.onConnectStatus_.bind(this, true), 0);
          } else {
            var authOverride = app.options["databaseAuthVariableOverride"];
            if ("undefined" !== typeof authOverride && null !== authOverride) {
              if ("object" !== typeof authOverride) throw new Error("Only objects are supported for option databaseAuthVariableOverride");
              try {
                util.stringify(authOverride);
              } catch (e) {
                throw new Error("Invalid authOverride provided: " + e);
              }
            }
            this.persistentConnection_ = new PersistentConnection(this.repoInfo_, app.options.appId, this.onDataUpdate_.bind(this), this.onConnectStatus_.bind(this), this.onServerInfoUpdate_.bind(this), authTokenProvider, authOverride);
            this.server_ = this.persistentConnection_;
          }
          authTokenProvider.addTokenChangeListener(function(token) {
            _this.server_.refreshAuthToken(token);
          });
          this.statsReporter_ = StatsManager.getOrCreateReporter(repoInfo_, function() {
            return new StatsReporter(_this.stats_, _this.server_);
          });
          this.transactionsInit_();
          this.infoData_ = new SnapshotHolder();
          this.infoSyncTree_ = new SyncTree({
            startListening: function(query, tag, currentHashFn, onComplete) {
              var infoEvents = [];
              var node = _this.infoData_.getNode(query.path);
              if (!node.isEmpty()) {
                infoEvents = _this.infoSyncTree_.applyServerOverwrite(query.path, node);
                setTimeout(function() {
                  onComplete("ok");
                }, 0);
              }
              return infoEvents;
            },
            stopListening: function() {}
          });
          this.updateInfo_("connected", false);
          this.serverSyncTree_ = new SyncTree({
            startListening: function(query, tag, currentHashFn, onComplete) {
              _this.server_.listen(query, currentHashFn, tag, function(status, data) {
                var events = onComplete(status, data);
                _this.eventQueue_.raiseEventsForChangedPath(query.path, events);
              });
              return [];
            },
            stopListening: function(query, tag) {
              _this.server_.unlisten(query, tag);
            }
          });
        }
        Repo.prototype.toString = function() {
          return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
        };
        Repo.prototype.name = function() {
          return this.repoInfo_.namespace;
        };
        Repo.prototype.serverTime = function() {
          var offsetNode = this.infoData_.getNode(new Path(".info/serverTimeOffset"));
          var offset = offsetNode.val() || 0;
          return new Date().getTime() + offset;
        };
        Repo.prototype.generateServerValues = function() {
          return generateWithValues({
            timestamp: this.serverTime()
          });
        };
        Repo.prototype.onDataUpdate_ = function(pathString, data, isMerge, tag) {
          this.dataUpdateCount++;
          var path = new Path(pathString);
          data = this.interceptServerDataCallback_ ? this.interceptServerDataCallback_(pathString, data) : data;
          var events = [];
          if (tag) if (isMerge) {
            var taggedChildren = util.map(data, function(raw) {
              return nodeFromJSON$1(raw);
            });
            events = this.serverSyncTree_.applyTaggedQueryMerge(path, taggedChildren, tag);
          } else {
            var taggedSnap = nodeFromJSON$1(data);
            events = this.serverSyncTree_.applyTaggedQueryOverwrite(path, taggedSnap, tag);
          } else if (isMerge) {
            var changedChildren = util.map(data, function(raw) {
              return nodeFromJSON$1(raw);
            });
            events = this.serverSyncTree_.applyServerMerge(path, changedChildren);
          } else {
            var snap = nodeFromJSON$1(data);
            events = this.serverSyncTree_.applyServerOverwrite(path, snap);
          }
          var affectedPath = path;
          events.length > 0 && (affectedPath = this.rerunTransactions_(path));
          this.eventQueue_.raiseEventsForChangedPath(affectedPath, events);
        };
        Repo.prototype.interceptServerData_ = function(callback) {
          this.interceptServerDataCallback_ = callback;
        };
        Repo.prototype.onConnectStatus_ = function(connectStatus) {
          this.updateInfo_("connected", connectStatus);
          false === connectStatus && this.runOnDisconnectEvents_();
        };
        Repo.prototype.onServerInfoUpdate_ = function(updates) {
          var _this = this;
          each(updates, function(key, value) {
            _this.updateInfo_(key, value);
          });
        };
        Repo.prototype.updateInfo_ = function(pathString, value) {
          var path = new Path("/.info/" + pathString);
          var newNode = nodeFromJSON$1(value);
          this.infoData_.updateSnapshot(path, newNode);
          var events = this.infoSyncTree_.applyServerOverwrite(path, newNode);
          this.eventQueue_.raiseEventsForChangedPath(path, events);
        };
        Repo.prototype.getNextWriteId_ = function() {
          return this.nextWriteId_++;
        };
        Repo.prototype.setWithPriority = function(path, newVal, newPriority, onComplete) {
          var _this = this;
          this.log_("set", {
            path: path.toString(),
            value: newVal,
            priority: newPriority
          });
          var serverValues = this.generateServerValues();
          var newNodeUnresolved = nodeFromJSON$1(newVal, newPriority);
          var existing = this.serverSyncTree_.calcCompleteEventCache(path);
          var newNode = resolveDeferredValueSnapshot(newNodeUnresolved, existing, serverValues);
          var writeId = this.getNextWriteId_();
          var events = this.serverSyncTree_.applyUserOverwrite(path, newNode, writeId, true);
          this.eventQueue_.queueEvents(events);
          this.server_.put(path.toString(), newNodeUnresolved.val(true), function(status, errorReason) {
            var success = "ok" === status;
            success || warn("set at " + path + " failed: " + status);
            var clearEvents = _this.serverSyncTree_.ackUserWrite(writeId, !success);
            _this.eventQueue_.raiseEventsForChangedPath(path, clearEvents);
            _this.callOnCompleteCallback(onComplete, status, errorReason);
          });
          var affectedPath = this.abortTransactions_(path);
          this.rerunTransactions_(affectedPath);
          this.eventQueue_.raiseEventsForChangedPath(affectedPath, []);
        };
        Repo.prototype.update = function(path, childrenToMerge, onComplete) {
          var _this = this;
          this.log_("update", {
            path: path.toString(),
            value: childrenToMerge
          });
          var empty = true;
          var serverValues = this.generateServerValues();
          var changedChildren = {};
          each(childrenToMerge, function(changedKey, changedValue) {
            empty = false;
            changedChildren[changedKey] = resolveDeferredValueTree(path.child(changedKey), nodeFromJSON$1(changedValue), _this.serverSyncTree_, serverValues);
          });
          if (empty) {
            log("update() called with empty data.  Don't do anything.");
            this.callOnCompleteCallback(onComplete, "ok");
          } else {
            var writeId_1 = this.getNextWriteId_();
            var events = this.serverSyncTree_.applyUserMerge(path, changedChildren, writeId_1);
            this.eventQueue_.queueEvents(events);
            this.server_.merge(path.toString(), childrenToMerge, function(status, errorReason) {
              var success = "ok" === status;
              success || warn("update at " + path + " failed: " + status);
              var clearEvents = _this.serverSyncTree_.ackUserWrite(writeId_1, !success);
              var affectedPath = clearEvents.length > 0 ? _this.rerunTransactions_(path) : path;
              _this.eventQueue_.raiseEventsForChangedPath(affectedPath, clearEvents);
              _this.callOnCompleteCallback(onComplete, status, errorReason);
            });
            each(childrenToMerge, function(changedPath) {
              var affectedPath = _this.abortTransactions_(path.child(changedPath));
              _this.rerunTransactions_(affectedPath);
            });
            this.eventQueue_.raiseEventsForChangedPath(path, []);
          }
        };
        Repo.prototype.runOnDisconnectEvents_ = function() {
          var _this = this;
          this.log_("onDisconnectEvents");
          var serverValues = this.generateServerValues();
          var resolvedOnDisconnectTree = new SparseSnapshotTree();
          this.onDisconnect_.forEachTree(Path.Empty, function(path, node) {
            var resolved = resolveDeferredValueTree(path, node, _this.serverSyncTree_, serverValues);
            resolvedOnDisconnectTree.remember(path, resolved);
          });
          var events = [];
          resolvedOnDisconnectTree.forEachTree(Path.Empty, function(path, snap) {
            events = events.concat(_this.serverSyncTree_.applyServerOverwrite(path, snap));
            var affectedPath = _this.abortTransactions_(path);
            _this.rerunTransactions_(affectedPath);
          });
          this.onDisconnect_ = new SparseSnapshotTree();
          this.eventQueue_.raiseEventsForChangedPath(Path.Empty, events);
        };
        Repo.prototype.onDisconnectCancel = function(path, onComplete) {
          var _this = this;
          this.server_.onDisconnectCancel(path.toString(), function(status, errorReason) {
            "ok" === status && _this.onDisconnect_.forget(path);
            _this.callOnCompleteCallback(onComplete, status, errorReason);
          });
        };
        Repo.prototype.onDisconnectSet = function(path, value, onComplete) {
          var _this = this;
          var newNode = nodeFromJSON$1(value);
          this.server_.onDisconnectPut(path.toString(), newNode.val(true), function(status, errorReason) {
            "ok" === status && _this.onDisconnect_.remember(path, newNode);
            _this.callOnCompleteCallback(onComplete, status, errorReason);
          });
        };
        Repo.prototype.onDisconnectSetWithPriority = function(path, value, priority, onComplete) {
          var _this = this;
          var newNode = nodeFromJSON$1(value, priority);
          this.server_.onDisconnectPut(path.toString(), newNode.val(true), function(status, errorReason) {
            "ok" === status && _this.onDisconnect_.remember(path, newNode);
            _this.callOnCompleteCallback(onComplete, status, errorReason);
          });
        };
        Repo.prototype.onDisconnectUpdate = function(path, childrenToMerge, onComplete) {
          var _this = this;
          if (util.isEmpty(childrenToMerge)) {
            log("onDisconnect().update() called with empty data.  Don't do anything.");
            this.callOnCompleteCallback(onComplete, "ok");
            return;
          }
          this.server_.onDisconnectMerge(path.toString(), childrenToMerge, function(status, errorReason) {
            "ok" === status && each(childrenToMerge, function(childName, childNode) {
              var newChildNode = nodeFromJSON$1(childNode);
              _this.onDisconnect_.remember(path.child(childName), newChildNode);
            });
            _this.callOnCompleteCallback(onComplete, status, errorReason);
          });
        };
        Repo.prototype.addEventCallbackForQuery = function(query, eventRegistration) {
          var events;
          events = ".info" === query.path.getFront() ? this.infoSyncTree_.addEventRegistration(query, eventRegistration) : this.serverSyncTree_.addEventRegistration(query, eventRegistration);
          this.eventQueue_.raiseEventsAtPath(query.path, events);
        };
        Repo.prototype.removeEventCallbackForQuery = function(query, eventRegistration) {
          var events;
          events = ".info" === query.path.getFront() ? this.infoSyncTree_.removeEventRegistration(query, eventRegistration) : this.serverSyncTree_.removeEventRegistration(query, eventRegistration);
          this.eventQueue_.raiseEventsAtPath(query.path, events);
        };
        Repo.prototype.interrupt = function() {
          this.persistentConnection_ && this.persistentConnection_.interrupt(INTERRUPT_REASON);
        };
        Repo.prototype.resume = function() {
          this.persistentConnection_ && this.persistentConnection_.resume(INTERRUPT_REASON);
        };
        Repo.prototype.stats = function(showDelta) {
          void 0 === showDelta && (showDelta = false);
          if ("undefined" === typeof console) return;
          var stats;
          if (showDelta) {
            this.statsListener_ || (this.statsListener_ = new StatsListener(this.stats_));
            stats = this.statsListener_.get();
          } else stats = this.stats_.get();
          var longestName = Object.keys(stats).reduce(function(previousValue, currentValue) {
            return Math.max(currentValue.length, previousValue);
          }, 0);
          each(stats, function(stat, value) {
            var paddedStat = stat;
            for (var i = stat.length; i < longestName + 2; i++) paddedStat += " ";
            console.log(paddedStat + value);
          });
        };
        Repo.prototype.statsIncrementCounter = function(metric) {
          this.stats_.incrementCounter(metric);
          this.statsReporter_.includeStat(metric);
        };
        Repo.prototype.log_ = function() {
          var varArgs = [];
          for (var _i = 0; _i < arguments.length; _i++) varArgs[_i] = arguments[_i];
          var prefix = "";
          this.persistentConnection_ && (prefix = this.persistentConnection_.id + ":");
          log.apply(void 0, tslib.__spread([ prefix ], varArgs));
        };
        Repo.prototype.callOnCompleteCallback = function(callback, status, errorReason) {
          callback && exceptionGuard(function() {
            if ("ok" === status) callback(null); else {
              var code = (status || "error").toUpperCase();
              var message = code;
              errorReason && (message += ": " + errorReason);
              var error = new Error(message);
              error.code = code;
              callback(error);
            }
          });
        };
        Object.defineProperty(Repo.prototype, "database", {
          get: function() {
            return this.__database || (this.__database = new Database(this));
          },
          enumerable: false,
          configurable: true
        });
        return Repo;
      }();
      var RangedFilter = function() {
        function RangedFilter(params) {
          this.indexedFilter_ = new IndexedFilter(params.getIndex());
          this.index_ = params.getIndex();
          this.startPost_ = RangedFilter.getStartPost_(params);
          this.endPost_ = RangedFilter.getEndPost_(params);
        }
        RangedFilter.prototype.getStartPost = function() {
          return this.startPost_;
        };
        RangedFilter.prototype.getEndPost = function() {
          return this.endPost_;
        };
        RangedFilter.prototype.matches = function(node) {
          return this.index_.compare(this.getStartPost(), node) <= 0 && this.index_.compare(node, this.getEndPost()) <= 0;
        };
        RangedFilter.prototype.updateChild = function(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
          this.matches(new NamedNode(key, newChild)) || (newChild = ChildrenNode.EMPTY_NODE);
          return this.indexedFilter_.updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
        };
        RangedFilter.prototype.updateFullNode = function(oldSnap, newSnap, optChangeAccumulator) {
          newSnap.isLeafNode() && (newSnap = ChildrenNode.EMPTY_NODE);
          var filtered = newSnap.withIndex(this.index_);
          filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
          var self = this;
          newSnap.forEachChild(PRIORITY_INDEX, function(key, childNode) {
            self.matches(new NamedNode(key, childNode)) || (filtered = filtered.updateImmediateChild(key, ChildrenNode.EMPTY_NODE));
          });
          return this.indexedFilter_.updateFullNode(oldSnap, filtered, optChangeAccumulator);
        };
        RangedFilter.prototype.updatePriority = function(oldSnap, newPriority) {
          return oldSnap;
        };
        RangedFilter.prototype.filtersNodes = function() {
          return true;
        };
        RangedFilter.prototype.getIndexedFilter = function() {
          return this.indexedFilter_;
        };
        RangedFilter.prototype.getIndex = function() {
          return this.index_;
        };
        RangedFilter.getStartPost_ = function(params) {
          if (params.hasStart()) {
            var startName = params.getIndexStartName();
            return params.getIndex().makePost(params.getIndexStartValue(), startName);
          }
          return params.getIndex().minPost();
        };
        RangedFilter.getEndPost_ = function(params) {
          if (params.hasEnd()) {
            var endName = params.getIndexEndName();
            return params.getIndex().makePost(params.getIndexEndValue(), endName);
          }
          return params.getIndex().maxPost();
        };
        return RangedFilter;
      }();
      var LimitedFilter = function() {
        function LimitedFilter(params) {
          this.rangedFilter_ = new RangedFilter(params);
          this.index_ = params.getIndex();
          this.limit_ = params.getLimit();
          this.reverse_ = !params.isViewFromLeft();
        }
        LimitedFilter.prototype.updateChild = function(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
          this.rangedFilter_.matches(new NamedNode(key, newChild)) || (newChild = ChildrenNode.EMPTY_NODE);
          return snap.getImmediateChild(key).equals(newChild) ? snap : snap.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) : this.fullLimitUpdateChild_(snap, key, newChild, source, optChangeAccumulator);
        };
        LimitedFilter.prototype.updateFullNode = function(oldSnap, newSnap, optChangeAccumulator) {
          var filtered;
          if (newSnap.isLeafNode() || newSnap.isEmpty()) filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_); else if (2 * this.limit_ < newSnap.numChildren() && newSnap.isIndexed(this.index_)) {
            filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_);
            var iterator = void 0;
            iterator = this.reverse_ ? newSnap.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : newSnap.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
            var count = 0;
            while (iterator.hasNext() && count < this.limit_) {
              var next = iterator.getNext();
              var inRange = void 0;
              inRange = this.reverse_ ? this.index_.compare(this.rangedFilter_.getStartPost(), next) <= 0 : this.index_.compare(next, this.rangedFilter_.getEndPost()) <= 0;
              if (!inRange) break;
              filtered = filtered.updateImmediateChild(next.name, next.node);
              count++;
            }
          } else {
            filtered = newSnap.withIndex(this.index_);
            filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
            var startPost = void 0;
            var endPost = void 0;
            var cmp = void 0;
            var iterator = void 0;
            if (this.reverse_) {
              iterator = filtered.getReverseIterator(this.index_);
              startPost = this.rangedFilter_.getEndPost();
              endPost = this.rangedFilter_.getStartPost();
              var indexCompare_1 = this.index_.getCompare();
              cmp = function(a, b) {
                return indexCompare_1(b, a);
              };
            } else {
              iterator = filtered.getIterator(this.index_);
              startPost = this.rangedFilter_.getStartPost();
              endPost = this.rangedFilter_.getEndPost();
              cmp = this.index_.getCompare();
            }
            var count = 0;
            var foundStartPost = false;
            while (iterator.hasNext()) {
              var next = iterator.getNext();
              !foundStartPost && cmp(startPost, next) <= 0 && (foundStartPost = true);
              var inRange = foundStartPost && count < this.limit_ && cmp(next, endPost) <= 0;
              inRange ? count++ : filtered = filtered.updateImmediateChild(next.name, ChildrenNode.EMPTY_NODE);
            }
          }
          return this.rangedFilter_.getIndexedFilter().updateFullNode(oldSnap, filtered, optChangeAccumulator);
        };
        LimitedFilter.prototype.updatePriority = function(oldSnap, newPriority) {
          return oldSnap;
        };
        LimitedFilter.prototype.filtersNodes = function() {
          return true;
        };
        LimitedFilter.prototype.getIndexedFilter = function() {
          return this.rangedFilter_.getIndexedFilter();
        };
        LimitedFilter.prototype.getIndex = function() {
          return this.index_;
        };
        LimitedFilter.prototype.fullLimitUpdateChild_ = function(snap, childKey, childSnap, source, changeAccumulator) {
          var cmp;
          if (this.reverse_) {
            var indexCmp_1 = this.index_.getCompare();
            cmp = function(a, b) {
              return indexCmp_1(b, a);
            };
          } else cmp = this.index_.getCompare();
          var oldEventCache = snap;
          util.assert(oldEventCache.numChildren() === this.limit_, "");
          var newChildNamedNode = new NamedNode(childKey, childSnap);
          var windowBoundary = this.reverse_ ? oldEventCache.getFirstChild(this.index_) : oldEventCache.getLastChild(this.index_);
          var inRange = this.rangedFilter_.matches(newChildNamedNode);
          if (oldEventCache.hasChild(childKey)) {
            var oldChildSnap = oldEventCache.getImmediateChild(childKey);
            var nextChild = source.getChildAfterChild(this.index_, windowBoundary, this.reverse_);
            while (null != nextChild && (nextChild.name === childKey || oldEventCache.hasChild(nextChild.name))) nextChild = source.getChildAfterChild(this.index_, nextChild, this.reverse_);
            var compareNext = null == nextChild ? 1 : cmp(nextChild, newChildNamedNode);
            var remainsInWindow = inRange && !childSnap.isEmpty() && compareNext >= 0;
            if (remainsInWindow) {
              null != changeAccumulator && changeAccumulator.trackChildChange(Change.childChangedChange(childKey, childSnap, oldChildSnap));
              return oldEventCache.updateImmediateChild(childKey, childSnap);
            }
            null != changeAccumulator && changeAccumulator.trackChildChange(Change.childRemovedChange(childKey, oldChildSnap));
            var newEventCache = oldEventCache.updateImmediateChild(childKey, ChildrenNode.EMPTY_NODE);
            var nextChildInRange = null != nextChild && this.rangedFilter_.matches(nextChild);
            if (nextChildInRange) {
              null != changeAccumulator && changeAccumulator.trackChildChange(Change.childAddedChange(nextChild.name, nextChild.node));
              return newEventCache.updateImmediateChild(nextChild.name, nextChild.node);
            }
            return newEventCache;
          }
          if (childSnap.isEmpty()) return snap;
          if (inRange) {
            if (cmp(windowBoundary, newChildNamedNode) >= 0) {
              if (null != changeAccumulator) {
                changeAccumulator.trackChildChange(Change.childRemovedChange(windowBoundary.name, windowBoundary.node));
                changeAccumulator.trackChildChange(Change.childAddedChange(childKey, childSnap));
              }
              return oldEventCache.updateImmediateChild(childKey, childSnap).updateImmediateChild(windowBoundary.name, ChildrenNode.EMPTY_NODE);
            }
            return snap;
          }
          return snap;
        };
        return LimitedFilter;
      }();
      var QueryParams = function() {
        function QueryParams() {
          this.limitSet_ = false;
          this.startSet_ = false;
          this.startNameSet_ = false;
          this.endSet_ = false;
          this.endNameSet_ = false;
          this.limit_ = 0;
          this.viewFrom_ = "";
          this.indexStartValue_ = null;
          this.indexStartName_ = "";
          this.indexEndValue_ = null;
          this.indexEndName_ = "";
          this.index_ = PRIORITY_INDEX;
        }
        QueryParams.prototype.hasStart = function() {
          return this.startSet_;
        };
        QueryParams.prototype.isViewFromLeft = function() {
          return "" === this.viewFrom_ ? this.startSet_ : this.viewFrom_ === QueryParams.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT;
        };
        QueryParams.prototype.getIndexStartValue = function() {
          util.assert(this.startSet_, "Only valid if start has been set");
          return this.indexStartValue_;
        };
        QueryParams.prototype.getIndexStartName = function() {
          util.assert(this.startSet_, "Only valid if start has been set");
          return this.startNameSet_ ? this.indexStartName_ : MIN_NAME;
        };
        QueryParams.prototype.hasEnd = function() {
          return this.endSet_;
        };
        QueryParams.prototype.getIndexEndValue = function() {
          util.assert(this.endSet_, "Only valid if end has been set");
          return this.indexEndValue_;
        };
        QueryParams.prototype.getIndexEndName = function() {
          util.assert(this.endSet_, "Only valid if end has been set");
          return this.endNameSet_ ? this.indexEndName_ : MAX_NAME;
        };
        QueryParams.prototype.hasLimit = function() {
          return this.limitSet_;
        };
        QueryParams.prototype.hasAnchoredLimit = function() {
          return this.limitSet_ && "" !== this.viewFrom_;
        };
        QueryParams.prototype.getLimit = function() {
          util.assert(this.limitSet_, "Only valid if limit has been set");
          return this.limit_;
        };
        QueryParams.prototype.getIndex = function() {
          return this.index_;
        };
        QueryParams.prototype.copy_ = function() {
          var copy = new QueryParams();
          copy.limitSet_ = this.limitSet_;
          copy.limit_ = this.limit_;
          copy.startSet_ = this.startSet_;
          copy.indexStartValue_ = this.indexStartValue_;
          copy.startNameSet_ = this.startNameSet_;
          copy.indexStartName_ = this.indexStartName_;
          copy.endSet_ = this.endSet_;
          copy.indexEndValue_ = this.indexEndValue_;
          copy.endNameSet_ = this.endNameSet_;
          copy.indexEndName_ = this.indexEndName_;
          copy.index_ = this.index_;
          copy.viewFrom_ = this.viewFrom_;
          return copy;
        };
        QueryParams.prototype.limit = function(newLimit) {
          var newParams = this.copy_();
          newParams.limitSet_ = true;
          newParams.limit_ = newLimit;
          newParams.viewFrom_ = "";
          return newParams;
        };
        QueryParams.prototype.limitToFirst = function(newLimit) {
          var newParams = this.copy_();
          newParams.limitSet_ = true;
          newParams.limit_ = newLimit;
          newParams.viewFrom_ = QueryParams.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT;
          return newParams;
        };
        QueryParams.prototype.limitToLast = function(newLimit) {
          var newParams = this.copy_();
          newParams.limitSet_ = true;
          newParams.limit_ = newLimit;
          newParams.viewFrom_ = QueryParams.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT;
          return newParams;
        };
        QueryParams.prototype.startAt = function(indexValue, key) {
          var newParams = this.copy_();
          newParams.startSet_ = true;
          void 0 === indexValue && (indexValue = null);
          newParams.indexStartValue_ = indexValue;
          if (null != key) {
            newParams.startNameSet_ = true;
            newParams.indexStartName_ = key;
          } else {
            newParams.startNameSet_ = false;
            newParams.indexStartName_ = "";
          }
          return newParams;
        };
        QueryParams.prototype.endAt = function(indexValue, key) {
          var newParams = this.copy_();
          newParams.endSet_ = true;
          void 0 === indexValue && (indexValue = null);
          newParams.indexEndValue_ = indexValue;
          if (void 0 !== key) {
            newParams.endNameSet_ = true;
            newParams.indexEndName_ = key;
          } else {
            newParams.endNameSet_ = false;
            newParams.indexEndName_ = "";
          }
          return newParams;
        };
        QueryParams.prototype.orderBy = function(index) {
          var newParams = this.copy_();
          newParams.index_ = index;
          return newParams;
        };
        QueryParams.prototype.getQueryObject = function() {
          var WIRE_PROTOCOL_CONSTANTS = QueryParams.WIRE_PROTOCOL_CONSTANTS_;
          var obj = {};
          if (this.startSet_) {
            obj[WIRE_PROTOCOL_CONSTANTS.INDEX_START_VALUE] = this.indexStartValue_;
            this.startNameSet_ && (obj[WIRE_PROTOCOL_CONSTANTS.INDEX_START_NAME] = this.indexStartName_);
          }
          if (this.endSet_) {
            obj[WIRE_PROTOCOL_CONSTANTS.INDEX_END_VALUE] = this.indexEndValue_;
            this.endNameSet_ && (obj[WIRE_PROTOCOL_CONSTANTS.INDEX_END_NAME] = this.indexEndName_);
          }
          if (this.limitSet_) {
            obj[WIRE_PROTOCOL_CONSTANTS.LIMIT] = this.limit_;
            var viewFrom = this.viewFrom_;
            "" === viewFrom && (viewFrom = this.isViewFromLeft() ? WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_LEFT : WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_RIGHT);
            obj[WIRE_PROTOCOL_CONSTANTS.VIEW_FROM] = viewFrom;
          }
          this.index_ !== PRIORITY_INDEX && (obj[WIRE_PROTOCOL_CONSTANTS.INDEX] = this.index_.toString());
          return obj;
        };
        QueryParams.prototype.loadsAllData = function() {
          return !(this.startSet_ || this.endSet_ || this.limitSet_);
        };
        QueryParams.prototype.isDefault = function() {
          return this.loadsAllData() && this.index_ === PRIORITY_INDEX;
        };
        QueryParams.prototype.getNodeFilter = function() {
          return this.loadsAllData() ? new IndexedFilter(this.getIndex()) : this.hasLimit() ? new LimitedFilter(this) : new RangedFilter(this);
        };
        QueryParams.prototype.toRestQueryStringParameters = function() {
          var REST_CONSTANTS = QueryParams.REST_QUERY_CONSTANTS_;
          var qs = {};
          if (this.isDefault()) return qs;
          var orderBy;
          if (this.index_ === PRIORITY_INDEX) orderBy = REST_CONSTANTS.PRIORITY_INDEX; else if (this.index_ === VALUE_INDEX) orderBy = REST_CONSTANTS.VALUE_INDEX; else if (this.index_ === KEY_INDEX) orderBy = REST_CONSTANTS.KEY_INDEX; else {
            util.assert(this.index_ instanceof PathIndex, "Unrecognized index type!");
            orderBy = this.index_.toString();
          }
          qs[REST_CONSTANTS.ORDER_BY] = util.stringify(orderBy);
          if (this.startSet_) {
            qs[REST_CONSTANTS.START_AT] = util.stringify(this.indexStartValue_);
            this.startNameSet_ && (qs[REST_CONSTANTS.START_AT] += "," + util.stringify(this.indexStartName_));
          }
          if (this.endSet_) {
            qs[REST_CONSTANTS.END_AT] = util.stringify(this.indexEndValue_);
            this.endNameSet_ && (qs[REST_CONSTANTS.END_AT] += "," + util.stringify(this.indexEndName_));
          }
          this.limitSet_ && (this.isViewFromLeft() ? qs[REST_CONSTANTS.LIMIT_TO_FIRST] = this.limit_ : qs[REST_CONSTANTS.LIMIT_TO_LAST] = this.limit_);
          return qs;
        };
        QueryParams.WIRE_PROTOCOL_CONSTANTS_ = {
          INDEX_START_VALUE: "sp",
          INDEX_START_NAME: "sn",
          INDEX_END_VALUE: "ep",
          INDEX_END_NAME: "en",
          LIMIT: "l",
          VIEW_FROM: "vf",
          VIEW_FROM_LEFT: "l",
          VIEW_FROM_RIGHT: "r",
          INDEX: "i"
        };
        QueryParams.REST_QUERY_CONSTANTS_ = {
          ORDER_BY: "orderBy",
          PRIORITY_INDEX: "$priority",
          VALUE_INDEX: "$value",
          KEY_INDEX: "$key",
          START_AT: "startAt",
          END_AT: "endAt",
          LIMIT_TO_FIRST: "limitToFirst",
          LIMIT_TO_LAST: "limitToLast"
        };
        QueryParams.DEFAULT = new QueryParams();
        return QueryParams;
      }();
      var Reference = function(_super) {
        tslib.__extends(Reference, _super);
        function Reference(repo, path) {
          var _this = this;
          if (!(repo instanceof Repo)) throw new Error("new Reference() no longer supported - use app.database().");
          _this = _super.call(this, repo, path, QueryParams.DEFAULT, false) || this;
          return _this;
        }
        Reference.prototype.getKey = function() {
          util.validateArgCount("Reference.key", 0, 0, arguments.length);
          return this.path.isEmpty() ? null : this.path.getBack();
        };
        Reference.prototype.child = function(pathString) {
          util.validateArgCount("Reference.child", 1, 1, arguments.length);
          "number" === typeof pathString ? pathString = String(pathString) : pathString instanceof Path || (null === this.path.getFront() ? validateRootPathString("Reference.child", 1, pathString, false) : validatePathString("Reference.child", 1, pathString, false));
          return new Reference(this.repo, this.path.child(pathString));
        };
        Reference.prototype.getParent = function() {
          util.validateArgCount("Reference.parent", 0, 0, arguments.length);
          var parentPath = this.path.parent();
          return null === parentPath ? null : new Reference(this.repo, parentPath);
        };
        Reference.prototype.getRoot = function() {
          util.validateArgCount("Reference.root", 0, 0, arguments.length);
          var ref = this;
          while (null !== ref.getParent()) ref = ref.getParent();
          return ref;
        };
        Reference.prototype.databaseProp = function() {
          return this.repo.database;
        };
        Reference.prototype.set = function(newVal, onComplete) {
          util.validateArgCount("Reference.set", 1, 2, arguments.length);
          validateWritablePath("Reference.set", this.path);
          validateFirebaseDataArg("Reference.set", 1, newVal, this.path, false);
          util.validateCallback("Reference.set", 2, onComplete, true);
          var deferred = new util.Deferred();
          this.repo.setWithPriority(this.path, newVal, null, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        Reference.prototype.update = function(objectToMerge, onComplete) {
          util.validateArgCount("Reference.update", 1, 2, arguments.length);
          validateWritablePath("Reference.update", this.path);
          if (Array.isArray(objectToMerge)) {
            var newObjectToMerge = {};
            for (var i = 0; i < objectToMerge.length; ++i) newObjectToMerge["" + i] = objectToMerge[i];
            objectToMerge = newObjectToMerge;
            warn("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");
          }
          validateFirebaseMergeDataArg("Reference.update", 1, objectToMerge, this.path, false);
          util.validateCallback("Reference.update", 2, onComplete, true);
          var deferred = new util.Deferred();
          this.repo.update(this.path, objectToMerge, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        Reference.prototype.setWithPriority = function(newVal, newPriority, onComplete) {
          util.validateArgCount("Reference.setWithPriority", 2, 3, arguments.length);
          validateWritablePath("Reference.setWithPriority", this.path);
          validateFirebaseDataArg("Reference.setWithPriority", 1, newVal, this.path, false);
          validatePriority("Reference.setWithPriority", 2, newPriority, false);
          util.validateCallback("Reference.setWithPriority", 3, onComplete, true);
          if (".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.setWithPriority failed: " + this.getKey() + " is a read-only object.";
          var deferred = new util.Deferred();
          this.repo.setWithPriority(this.path, newVal, newPriority, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        Reference.prototype.remove = function(onComplete) {
          util.validateArgCount("Reference.remove", 0, 1, arguments.length);
          validateWritablePath("Reference.remove", this.path);
          util.validateCallback("Reference.remove", 1, onComplete, true);
          return this.set(null, onComplete);
        };
        Reference.prototype.transaction = function(transactionUpdate, onComplete, applyLocally) {
          util.validateArgCount("Reference.transaction", 1, 3, arguments.length);
          validateWritablePath("Reference.transaction", this.path);
          util.validateCallback("Reference.transaction", 1, transactionUpdate, false);
          util.validateCallback("Reference.transaction", 2, onComplete, true);
          validateBoolean("Reference.transaction", 3, applyLocally, true);
          if (".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.transaction failed: " + this.getKey() + " is a read-only object.";
          void 0 === applyLocally && (applyLocally = true);
          var deferred = new util.Deferred();
          "function" === typeof onComplete && deferred.promise.catch(function() {});
          var promiseComplete = function(error, committed, snapshot) {
            error ? deferred.reject(error) : deferred.resolve(new TransactionResult(committed, snapshot));
            "function" === typeof onComplete && onComplete(error, committed, snapshot);
          };
          this.repo.startTransaction(this.path, transactionUpdate, promiseComplete, applyLocally);
          return deferred.promise;
        };
        Reference.prototype.setPriority = function(priority, onComplete) {
          util.validateArgCount("Reference.setPriority", 1, 2, arguments.length);
          validateWritablePath("Reference.setPriority", this.path);
          validatePriority("Reference.setPriority", 1, priority, false);
          util.validateCallback("Reference.setPriority", 2, onComplete, true);
          var deferred = new util.Deferred();
          this.repo.setWithPriority(this.path.child(".priority"), priority, null, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        Reference.prototype.push = function(value, onComplete) {
          util.validateArgCount("Reference.push", 0, 2, arguments.length);
          validateWritablePath("Reference.push", this.path);
          validateFirebaseDataArg("Reference.push", 1, value, this.path, true);
          util.validateCallback("Reference.push", 2, onComplete, true);
          var now = this.repo.serverTime();
          var name = nextPushId(now);
          var thennablePushRef = this.child(name);
          var pushRef = this.child(name);
          var promise;
          promise = null != value ? thennablePushRef.set(value, onComplete).then(function() {
            return pushRef;
          }) : Promise.resolve(pushRef);
          thennablePushRef.then = promise.then.bind(promise);
          thennablePushRef.catch = promise.then.bind(promise, void 0);
          "function" === typeof onComplete && promise.catch(function() {});
          return thennablePushRef;
        };
        Reference.prototype.onDisconnect = function() {
          validateWritablePath("Reference.onDisconnect", this.path);
          return new OnDisconnect(this.repo, this.path);
        };
        Object.defineProperty(Reference.prototype, "database", {
          get: function() {
            return this.databaseProp();
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "key", {
          get: function() {
            return this.getKey();
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "parent", {
          get: function() {
            return this.getParent();
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "root", {
          get: function() {
            return this.getRoot();
          },
          enumerable: false,
          configurable: true
        });
        return Reference;
      }(Query);
      Query.__referenceConstructor = Reference;
      SyncPoint.__referenceConstructor = Reference;
      var TreeNode = function() {
        function TreeNode() {
          this.children = {};
          this.childCount = 0;
          this.value = null;
        }
        return TreeNode;
      }();
      var Tree = function() {
        function Tree(name_, parent_, node_) {
          void 0 === name_ && (name_ = "");
          void 0 === parent_ && (parent_ = null);
          void 0 === node_ && (node_ = new TreeNode());
          this.name_ = name_;
          this.parent_ = parent_;
          this.node_ = node_;
        }
        Tree.prototype.subTree = function(pathObj) {
          var path = pathObj instanceof Path ? pathObj : new Path(pathObj);
          var child = this, next = path.getFront();
          while (null !== next) {
            var childNode = util.safeGet(child.node_.children, next) || new TreeNode();
            child = new Tree(next, child, childNode);
            path = path.popFront();
            next = path.getFront();
          }
          return child;
        };
        Tree.prototype.getValue = function() {
          return this.node_.value;
        };
        Tree.prototype.setValue = function(value) {
          util.assert("undefined" !== typeof value, "Cannot set value to undefined");
          this.node_.value = value;
          this.updateParents_();
        };
        Tree.prototype.clear = function() {
          this.node_.value = null;
          this.node_.children = {};
          this.node_.childCount = 0;
          this.updateParents_();
        };
        Tree.prototype.hasChildren = function() {
          return this.node_.childCount > 0;
        };
        Tree.prototype.isEmpty = function() {
          return null === this.getValue() && !this.hasChildren();
        };
        Tree.prototype.forEachChild = function(action) {
          var _this = this;
          each(this.node_.children, function(child, childTree) {
            action(new Tree(child, _this, childTree));
          });
        };
        Tree.prototype.forEachDescendant = function(action, includeSelf, childrenFirst) {
          includeSelf && !childrenFirst && action(this);
          this.forEachChild(function(child) {
            child.forEachDescendant(action, true, childrenFirst);
          });
          includeSelf && childrenFirst && action(this);
        };
        Tree.prototype.forEachAncestor = function(action, includeSelf) {
          var node = includeSelf ? this : this.parent();
          while (null !== node) {
            if (action(node)) return true;
            node = node.parent();
          }
          return false;
        };
        Tree.prototype.forEachImmediateDescendantWithValue = function(action) {
          this.forEachChild(function(child) {
            null !== child.getValue() ? action(child) : child.forEachImmediateDescendantWithValue(action);
          });
        };
        Tree.prototype.path = function() {
          return new Path(null === this.parent_ ? this.name_ : this.parent_.path() + "/" + this.name_);
        };
        Tree.prototype.name = function() {
          return this.name_;
        };
        Tree.prototype.parent = function() {
          return this.parent_;
        };
        Tree.prototype.updateParents_ = function() {
          null !== this.parent_ && this.parent_.updateChild_(this.name_, this);
        };
        Tree.prototype.updateChild_ = function(childName, child) {
          var childEmpty = child.isEmpty();
          var childExists = util.contains(this.node_.children, childName);
          if (childEmpty && childExists) {
            delete this.node_.children[childName];
            this.node_.childCount--;
            this.updateParents_();
          } else if (!childEmpty && !childExists) {
            this.node_.children[childName] = child.node_;
            this.node_.childCount++;
            this.updateParents_();
          }
        };
        return Tree;
      }();
      var TransactionStatus;
      (function(TransactionStatus) {
        TransactionStatus[TransactionStatus["RUN"] = 0] = "RUN";
        TransactionStatus[TransactionStatus["SENT"] = 1] = "SENT";
        TransactionStatus[TransactionStatus["COMPLETED"] = 2] = "COMPLETED";
        TransactionStatus[TransactionStatus["SENT_NEEDS_ABORT"] = 3] = "SENT_NEEDS_ABORT";
        TransactionStatus[TransactionStatus["NEEDS_ABORT"] = 4] = "NEEDS_ABORT";
      })(TransactionStatus || (TransactionStatus = {}));
      Repo.MAX_TRANSACTION_RETRIES_ = 25;
      Repo.prototype.transactionsInit_ = function() {
        this.transactionQueueTree_ = new Tree();
      };
      Repo.prototype.startTransaction = function(path, transactionUpdate, onComplete, applyLocally) {
        this.log_("transaction on " + path);
        var valueCallback = function() {};
        var watchRef = new Reference(this, path);
        watchRef.on("value", valueCallback);
        var unwatcher = function() {
          watchRef.off("value", valueCallback);
        };
        var transaction = {
          path: path,
          update: transactionUpdate,
          onComplete: onComplete,
          status: null,
          order: LUIDGenerator(),
          applyLocally: applyLocally,
          retryCount: 0,
          unwatcher: unwatcher,
          abortReason: null,
          currentWriteId: null,
          currentInputSnapshot: null,
          currentOutputSnapshotRaw: null,
          currentOutputSnapshotResolved: null
        };
        var currentState = this.getLatestState_(path);
        transaction.currentInputSnapshot = currentState;
        var newVal = transaction.update(currentState.val());
        if (void 0 === newVal) {
          transaction.unwatcher();
          transaction.currentOutputSnapshotRaw = null;
          transaction.currentOutputSnapshotResolved = null;
          if (transaction.onComplete) {
            var snapshot = new DataSnapshot(transaction.currentInputSnapshot, new Reference(this, transaction.path), PRIORITY_INDEX);
            transaction.onComplete(null, false, snapshot);
          }
        } else {
          validateFirebaseData("transaction failed: Data returned ", newVal, transaction.path);
          transaction.status = TransactionStatus.RUN;
          var queueNode = this.transactionQueueTree_.subTree(path);
          var nodeQueue = queueNode.getValue() || [];
          nodeQueue.push(transaction);
          queueNode.setValue(nodeQueue);
          var priorityForNode = void 0;
          if ("object" === typeof newVal && null !== newVal && util.contains(newVal, ".priority")) {
            priorityForNode = util.safeGet(newVal, ".priority");
            util.assert(isValidPriority(priorityForNode), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");
          } else {
            var currentNode = this.serverSyncTree_.calcCompleteEventCache(path) || ChildrenNode.EMPTY_NODE;
            priorityForNode = currentNode.getPriority().val();
          }
          priorityForNode = priorityForNode;
          var serverValues = this.generateServerValues();
          var newNodeUnresolved = nodeFromJSON$1(newVal, priorityForNode);
          var newNode = resolveDeferredValueSnapshot(newNodeUnresolved, currentState, serverValues);
          transaction.currentOutputSnapshotRaw = newNodeUnresolved;
          transaction.currentOutputSnapshotResolved = newNode;
          transaction.currentWriteId = this.getNextWriteId_();
          var events = this.serverSyncTree_.applyUserOverwrite(path, newNode, transaction.currentWriteId, transaction.applyLocally);
          this.eventQueue_.raiseEventsForChangedPath(path, events);
          this.sendReadyTransactions_();
        }
      };
      Repo.prototype.getLatestState_ = function(path, excludeSets) {
        return this.serverSyncTree_.calcCompleteEventCache(path, excludeSets) || ChildrenNode.EMPTY_NODE;
      };
      Repo.prototype.sendReadyTransactions_ = function(node) {
        var _this = this;
        void 0 === node && (node = this.transactionQueueTree_);
        node || this.pruneCompletedTransactionsBelowNode_(node);
        if (null !== node.getValue()) {
          var queue = this.buildTransactionQueue_(node);
          util.assert(queue.length > 0, "Sending zero length transaction queue");
          var allRun = queue.every(function(transaction) {
            return transaction.status === TransactionStatus.RUN;
          });
          allRun && this.sendTransactionQueue_(node.path(), queue);
        } else node.hasChildren() && node.forEachChild(function(childNode) {
          _this.sendReadyTransactions_(childNode);
        });
      };
      Repo.prototype.sendTransactionQueue_ = function(path, queue) {
        var _this = this;
        var setsToIgnore = queue.map(function(txn) {
          return txn.currentWriteId;
        });
        var latestState = this.getLatestState_(path, setsToIgnore);
        var snapToSend = latestState;
        var latestHash = latestState.hash();
        for (var i = 0; i < queue.length; i++) {
          var txn = queue[i];
          util.assert(txn.status === TransactionStatus.RUN, "tryToSendTransactionQueue_: items in queue should all be run.");
          txn.status = TransactionStatus.SENT;
          txn.retryCount++;
          var relativePath = Path.relativePath(path, txn.path);
          snapToSend = snapToSend.updateChild(relativePath, txn.currentOutputSnapshotRaw);
        }
        var dataToSend = snapToSend.val(true);
        var pathToSend = path;
        this.server_.put(pathToSend.toString(), dataToSend, function(status) {
          _this.log_("transaction put response", {
            path: pathToSend.toString(),
            status: status
          });
          var events = [];
          if ("ok" === status) {
            var callbacks = [];
            for (var i = 0; i < queue.length; i++) {
              queue[i].status = TransactionStatus.COMPLETED;
              events = events.concat(_this.serverSyncTree_.ackUserWrite(queue[i].currentWriteId));
              if (queue[i].onComplete) {
                var node = queue[i].currentOutputSnapshotResolved;
                var ref = new Reference(_this, queue[i].path);
                var snapshot = new DataSnapshot(node, ref, PRIORITY_INDEX);
                callbacks.push(queue[i].onComplete.bind(null, null, true, snapshot));
              }
              queue[i].unwatcher();
            }
            _this.pruneCompletedTransactionsBelowNode_(_this.transactionQueueTree_.subTree(path));
            _this.sendReadyTransactions_();
            _this.eventQueue_.raiseEventsForChangedPath(path, events);
            for (var i = 0; i < callbacks.length; i++) exceptionGuard(callbacks[i]);
          } else {
            if ("datastale" === status) for (var i = 0; i < queue.length; i++) queue[i].status === TransactionStatus.SENT_NEEDS_ABORT ? queue[i].status = TransactionStatus.NEEDS_ABORT : queue[i].status = TransactionStatus.RUN; else {
              warn("transaction at " + pathToSend.toString() + " failed: " + status);
              for (var i = 0; i < queue.length; i++) {
                queue[i].status = TransactionStatus.NEEDS_ABORT;
                queue[i].abortReason = status;
              }
            }
            _this.rerunTransactions_(path);
          }
        }, latestHash);
      };
      Repo.prototype.rerunTransactions_ = function(changedPath) {
        var rootMostTransactionNode = this.getAncestorTransactionNode_(changedPath);
        var path = rootMostTransactionNode.path();
        var queue = this.buildTransactionQueue_(rootMostTransactionNode);
        this.rerunTransactionQueue_(queue, path);
        return path;
      };
      Repo.prototype.rerunTransactionQueue_ = function(queue, path) {
        if (0 === queue.length) return;
        var callbacks = [];
        var events = [];
        var txnsToRerun = queue.filter(function(q) {
          return q.status === TransactionStatus.RUN;
        });
        var setsToIgnore = txnsToRerun.map(function(q) {
          return q.currentWriteId;
        });
        for (var i = 0; i < queue.length; i++) {
          var transaction = queue[i];
          var relativePath = Path.relativePath(path, transaction.path);
          var abortTransaction = false, abortReason = void 0;
          util.assert(null !== relativePath, "rerunTransactionsUnderNode_: relativePath should not be null.");
          if (transaction.status === TransactionStatus.NEEDS_ABORT) {
            abortTransaction = true;
            abortReason = transaction.abortReason;
            events = events.concat(this.serverSyncTree_.ackUserWrite(transaction.currentWriteId, true));
          } else if (transaction.status === TransactionStatus.RUN) if (transaction.retryCount >= Repo.MAX_TRANSACTION_RETRIES_) {
            abortTransaction = true;
            abortReason = "maxretry";
            events = events.concat(this.serverSyncTree_.ackUserWrite(transaction.currentWriteId, true));
          } else {
            var currentNode = this.getLatestState_(transaction.path, setsToIgnore);
            transaction.currentInputSnapshot = currentNode;
            var newData = queue[i].update(currentNode.val());
            if (void 0 !== newData) {
              validateFirebaseData("transaction failed: Data returned ", newData, transaction.path);
              var newDataNode = nodeFromJSON$1(newData);
              var hasExplicitPriority = "object" === typeof newData && null != newData && util.contains(newData, ".priority");
              hasExplicitPriority || (newDataNode = newDataNode.updatePriority(currentNode.getPriority()));
              var oldWriteId = transaction.currentWriteId;
              var serverValues = this.generateServerValues();
              var newNodeResolved = resolveDeferredValueSnapshot(newDataNode, currentNode, serverValues);
              transaction.currentOutputSnapshotRaw = newDataNode;
              transaction.currentOutputSnapshotResolved = newNodeResolved;
              transaction.currentWriteId = this.getNextWriteId_();
              setsToIgnore.splice(setsToIgnore.indexOf(oldWriteId), 1);
              events = events.concat(this.serverSyncTree_.applyUserOverwrite(transaction.path, newNodeResolved, transaction.currentWriteId, transaction.applyLocally));
              events = events.concat(this.serverSyncTree_.ackUserWrite(oldWriteId, true));
            } else {
              abortTransaction = true;
              abortReason = "nodata";
              events = events.concat(this.serverSyncTree_.ackUserWrite(transaction.currentWriteId, true));
            }
          }
          this.eventQueue_.raiseEventsForChangedPath(path, events);
          events = [];
          if (abortTransaction) {
            queue[i].status = TransactionStatus.COMPLETED;
            (function(unwatcher) {
              setTimeout(unwatcher, Math.floor(0));
            })(queue[i].unwatcher);
            if (queue[i].onComplete) if ("nodata" === abortReason) {
              var ref = new Reference(this, queue[i].path);
              var lastInput = queue[i].currentInputSnapshot;
              var snapshot = new DataSnapshot(lastInput, ref, PRIORITY_INDEX);
              callbacks.push(queue[i].onComplete.bind(null, null, false, snapshot));
            } else callbacks.push(queue[i].onComplete.bind(null, new Error(abortReason), false, null));
          }
        }
        this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);
        for (var i = 0; i < callbacks.length; i++) exceptionGuard(callbacks[i]);
        this.sendReadyTransactions_();
      };
      Repo.prototype.getAncestorTransactionNode_ = function(path) {
        var front;
        var transactionNode = this.transactionQueueTree_;
        front = path.getFront();
        while (null !== front && null === transactionNode.getValue()) {
          transactionNode = transactionNode.subTree(front);
          path = path.popFront();
          front = path.getFront();
        }
        return transactionNode;
      };
      Repo.prototype.buildTransactionQueue_ = function(transactionNode) {
        var transactionQueue = [];
        this.aggregateTransactionQueuesForNode_(transactionNode, transactionQueue);
        transactionQueue.sort(function(a, b) {
          return a.order - b.order;
        });
        return transactionQueue;
      };
      Repo.prototype.aggregateTransactionQueuesForNode_ = function(node, queue) {
        var _this = this;
        var nodeQueue = node.getValue();
        if (null !== nodeQueue) for (var i = 0; i < nodeQueue.length; i++) queue.push(nodeQueue[i]);
        node.forEachChild(function(child) {
          _this.aggregateTransactionQueuesForNode_(child, queue);
        });
      };
      Repo.prototype.pruneCompletedTransactionsBelowNode_ = function(node) {
        var _this = this;
        var queue = node.getValue();
        if (queue) {
          var to = 0;
          for (var from = 0; from < queue.length; from++) if (queue[from].status !== TransactionStatus.COMPLETED) {
            queue[to] = queue[from];
            to++;
          }
          queue.length = to;
          node.setValue(queue.length > 0 ? queue : null);
        }
        node.forEachChild(function(childNode) {
          _this.pruneCompletedTransactionsBelowNode_(childNode);
        });
      };
      Repo.prototype.abortTransactions_ = function(path) {
        var _this = this;
        var affectedPath = this.getAncestorTransactionNode_(path).path();
        var transactionNode = this.transactionQueueTree_.subTree(path);
        transactionNode.forEachAncestor(function(node) {
          _this.abortTransactionsOnNode_(node);
        });
        this.abortTransactionsOnNode_(transactionNode);
        transactionNode.forEachDescendant(function(node) {
          _this.abortTransactionsOnNode_(node);
        });
        return affectedPath;
      };
      Repo.prototype.abortTransactionsOnNode_ = function(node) {
        var queue = node.getValue();
        if (null !== queue) {
          var callbacks = [];
          var events = [];
          var lastSent = -1;
          for (var i = 0; i < queue.length; i++) if (queue[i].status === TransactionStatus.SENT_NEEDS_ABORT) ; else if (queue[i].status === TransactionStatus.SENT) {
            util.assert(lastSent === i - 1, "All SENT items should be at beginning of queue.");
            lastSent = i;
            queue[i].status = TransactionStatus.SENT_NEEDS_ABORT;
            queue[i].abortReason = "set";
          } else {
            util.assert(queue[i].status === TransactionStatus.RUN, "Unexpected transaction status in abort");
            queue[i].unwatcher();
            events = events.concat(this.serverSyncTree_.ackUserWrite(queue[i].currentWriteId, true));
            if (queue[i].onComplete) {
              var snapshot = null;
              callbacks.push(queue[i].onComplete.bind(null, new Error("set"), false, snapshot));
            }
          }
          -1 === lastSent ? node.setValue(null) : queue.length = lastSent + 1;
          this.eventQueue_.raiseEventsForChangedPath(node.path(), events);
          for (var i = 0; i < callbacks.length; i++) exceptionGuard(callbacks[i]);
        }
      };
      var FirebaseAuthTokenProvider = function() {
        function FirebaseAuthTokenProvider(app_, authProvider_) {
          var _this = this;
          this.app_ = app_;
          this.authProvider_ = authProvider_;
          this.auth_ = null;
          this.auth_ = authProvider_.getImmediate({
            optional: true
          });
          this.auth_ || authProvider_.get().then(function(auth) {
            return _this.auth_ = auth;
          });
        }
        FirebaseAuthTokenProvider.prototype.getToken = function(forceRefresh) {
          if (!this.auth_) return Promise.resolve(null);
          return this.auth_.getToken(forceRefresh).catch(function(error) {
            if (error && "auth/token-not-initialized" === error.code) {
              log("Got auth/token-not-initialized error.  Treating as null token.");
              return null;
            }
            return Promise.reject(error);
          });
        };
        FirebaseAuthTokenProvider.prototype.addTokenChangeListener = function(listener) {
          if (this.auth_) this.auth_.addAuthTokenListener(listener); else {
            setTimeout(function() {
              return listener(null);
            }, 0);
            this.authProvider_.get().then(function(auth) {
              return auth.addAuthTokenListener(listener);
            });
          }
        };
        FirebaseAuthTokenProvider.prototype.removeTokenChangeListener = function(listener) {
          this.authProvider_.get().then(function(auth) {
            return auth.removeAuthTokenListener(listener);
          });
        };
        FirebaseAuthTokenProvider.prototype.notifyForInvalidToken = function() {
          var errorMessage = 'Provided authentication credentials for the app named "' + this.app_.name + '" are invalid. This usually indicates your app was not initialized correctly. ';
          "credential" in this.app_.options ? errorMessage += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.app_.options ? errorMessage += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : errorMessage += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.';
          warn(errorMessage);
        };
        return FirebaseAuthTokenProvider;
      }();
      var EmulatorAdminTokenProvider = function() {
        function EmulatorAdminTokenProvider() {}
        EmulatorAdminTokenProvider.prototype.getToken = function(forceRefresh) {
          return Promise.resolve({
            accessToken: EmulatorAdminTokenProvider.EMULATOR_AUTH_TOKEN
          });
        };
        EmulatorAdminTokenProvider.prototype.addTokenChangeListener = function(listener) {
          listener(EmulatorAdminTokenProvider.EMULATOR_AUTH_TOKEN);
        };
        EmulatorAdminTokenProvider.prototype.removeTokenChangeListener = function(listener) {};
        EmulatorAdminTokenProvider.prototype.notifyForInvalidToken = function() {};
        EmulatorAdminTokenProvider.EMULATOR_AUTH_TOKEN = "owner";
        return EmulatorAdminTokenProvider;
      }();
      var FIREBASE_DATABASE_EMULATOR_HOST_VAR = "FIREBASE_DATABASE_EMULATOR_HOST";
      var _staticInstance;
      var RepoManager = function() {
        function RepoManager() {
          this.repos_ = {};
          this.useRestClient_ = false;
        }
        RepoManager.getInstance = function() {
          _staticInstance || (_staticInstance = new RepoManager());
          return _staticInstance;
        };
        RepoManager.prototype.interrupt = function() {
          var e_1, _a, e_2, _b;
          try {
            for (var _c = tslib.__values(Object.keys(this.repos_)), _d = _c.next(); !_d.done; _d = _c.next()) {
              var appName = _d.value;
              try {
                for (var _e = (e_2 = void 0, tslib.__values(Object.keys(this.repos_[appName]))), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var dbUrl = _f.value;
                  this.repos_[appName][dbUrl].interrupt();
                }
              } catch (e_2_1) {
                e_2 = {
                  error: e_2_1
                };
              } finally {
                try {
                  _f && !_f.done && (_b = _e.return) && _b.call(_e);
                } finally {
                  if (e_2) throw e_2.error;
                }
              }
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              _d && !_d.done && (_a = _c.return) && _a.call(_c);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        };
        RepoManager.prototype.resume = function() {
          var e_3, _a, e_4, _b;
          try {
            for (var _c = tslib.__values(Object.keys(this.repos_)), _d = _c.next(); !_d.done; _d = _c.next()) {
              var appName = _d.value;
              try {
                for (var _e = (e_4 = void 0, tslib.__values(Object.keys(this.repos_[appName]))), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var dbUrl = _f.value;
                  this.repos_[appName][dbUrl].resume();
                }
              } catch (e_4_1) {
                e_4 = {
                  error: e_4_1
                };
              } finally {
                try {
                  _f && !_f.done && (_b = _e.return) && _b.call(_e);
                } finally {
                  if (e_4) throw e_4.error;
                }
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              _d && !_d.done && (_a = _c.return) && _a.call(_c);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        };
        RepoManager.prototype.databaseFromApp = function(app, authProvider, url, nodeAdmin) {
          var dbUrl = url || app.options.databaseURL;
          if (void 0 === dbUrl) {
            app.options.projectId || fatal("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp().");
            log("Using default host for project ", app.options.projectId);
            dbUrl = app.options.projectId + "-default-rtdb.firebaseio.com";
          }
          var parsedUrl = parseRepoInfo(dbUrl, nodeAdmin);
          var repoInfo = parsedUrl.repoInfo;
          var isEmulator;
          var dbEmulatorHost = void 0;
          "undefined" !== typeof process && (dbEmulatorHost = process.env[FIREBASE_DATABASE_EMULATOR_HOST_VAR]);
          if (dbEmulatorHost) {
            isEmulator = true;
            dbUrl = "http://" + dbEmulatorHost + "?ns=" + repoInfo.namespace;
            parsedUrl = parseRepoInfo(dbUrl, nodeAdmin);
            repoInfo = parsedUrl.repoInfo;
          } else isEmulator = !parsedUrl.repoInfo.secure;
          var authTokenProvider = nodeAdmin && isEmulator ? new EmulatorAdminTokenProvider() : new FirebaseAuthTokenProvider(app, authProvider);
          validateUrl("Invalid Firebase Database URL", 1, parsedUrl);
          parsedUrl.path.isEmpty() || fatal("Database URL must point to the root of a Firebase Database (not including a child path).");
          var repo = this.createRepo(repoInfo, app, authTokenProvider);
          return repo.database;
        };
        RepoManager.prototype.deleteRepo = function(repo) {
          var appRepos = util.safeGet(this.repos_, repo.app.name);
          appRepos && util.safeGet(appRepos, repo.repoInfo_.toURLString()) === repo || fatal("Database " + repo.app.name + "(" + repo.repoInfo_ + ") has already been deleted.");
          repo.interrupt();
          delete appRepos[repo.repoInfo_.toURLString()];
        };
        RepoManager.prototype.createRepo = function(repoInfo, app, authTokenProvider) {
          var appRepos = util.safeGet(this.repos_, app.name);
          if (!appRepos) {
            appRepos = {};
            this.repos_[app.name] = appRepos;
          }
          var repo = util.safeGet(appRepos, repoInfo.toURLString());
          repo && fatal("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");
          repo = new Repo(repoInfo, this.useRestClient_, app, authTokenProvider);
          appRepos[repoInfo.toURLString()] = repo;
          return repo;
        };
        RepoManager.prototype.forceRestClient = function(forceRestClient) {
          this.useRestClient_ = forceRestClient;
        };
        return RepoManager;
      }();
      var Database = function() {
        function Database(repo_) {
          this.repo_ = repo_;
          repo_ instanceof Repo || fatal("Don't call new Database() directly - please use firebase.database().");
          this.root_ = new Reference(repo_, Path.Empty);
          this.INTERNAL = new DatabaseInternals(this);
        }
        Object.defineProperty(Database.prototype, "app", {
          get: function() {
            return this.repo_.app;
          },
          enumerable: false,
          configurable: true
        });
        Database.prototype.ref = function(path) {
          this.checkDeleted_("ref");
          util.validateArgCount("database.ref", 0, 1, arguments.length);
          if (path instanceof Reference) return this.refFromURL(path.toString());
          return void 0 !== path ? this.root_.child(path) : this.root_;
        };
        Database.prototype.refFromURL = function(url) {
          var apiName = "database.refFromURL";
          this.checkDeleted_(apiName);
          util.validateArgCount(apiName, 1, 1, arguments.length);
          var parsedURL = parseRepoInfo(url, this.repo_.repoInfo_.nodeAdmin);
          validateUrl(apiName, 1, parsedURL);
          var repoInfo = parsedURL.repoInfo;
          repoInfo.host !== this.repo_.repoInfo_.host && fatal(apiName + ": Host name does not match the current database: (found " + repoInfo.host + " but expected " + this.repo_.repoInfo_.host + ")");
          return this.ref(parsedURL.path.toString());
        };
        Database.prototype.checkDeleted_ = function(apiName) {
          null === this.repo_ && fatal("Cannot call " + apiName + " on a deleted database.");
        };
        Database.prototype.goOffline = function() {
          util.validateArgCount("database.goOffline", 0, 0, arguments.length);
          this.checkDeleted_("goOffline");
          this.repo_.interrupt();
        };
        Database.prototype.goOnline = function() {
          util.validateArgCount("database.goOnline", 0, 0, arguments.length);
          this.checkDeleted_("goOnline");
          this.repo_.resume();
        };
        Database.ServerValue = {
          TIMESTAMP: {
            ".sv": "timestamp"
          },
          increment: function(delta) {
            return {
              ".sv": {
                increment: delta
              }
            };
          }
        };
        return Database;
      }();
      var DatabaseInternals = function() {
        function DatabaseInternals(database) {
          this.database = database;
        }
        DatabaseInternals.prototype.delete = function() {
          return tslib.__awaiter(this, void 0, void 0, function() {
            return tslib.__generator(this, function(_a) {
              this.database.checkDeleted_("delete");
              RepoManager.getInstance().deleteRepo(this.database.repo_);
              this.database.repo_ = null;
              this.database.root_ = null;
              this.database.INTERNAL = null;
              this.database = null;
              return [ 2 ];
            });
          });
        };
        return DatabaseInternals;
      }();
      var forceLongPolling = function() {
        WebSocketConnection.forceDisallow();
        BrowserPollConnection.forceAllow();
      };
      var forceWebSockets = function() {
        BrowserPollConnection.forceDisallow();
      };
      var isWebSocketsAvailable = function() {
        return WebSocketConnection["isAvailable"]();
      };
      var setSecurityDebugCallback = function(ref, callback) {
        ref.repo.persistentConnection_.securityDebugCallback_ = callback;
      };
      var stats = function(ref, showDelta) {
        ref.repo.stats(showDelta);
      };
      var statsIncrementCounter = function(ref, metric) {
        ref.repo.statsIncrementCounter(metric);
      };
      var dataUpdateCount = function(ref) {
        return ref.repo.dataUpdateCount;
      };
      var interceptServerData = function(ref, callback) {
        return ref.repo.interceptServerData_(callback);
      };
      var INTERNAL = Object.freeze({
        __proto__: null,
        forceLongPolling: forceLongPolling,
        forceWebSockets: forceWebSockets,
        isWebSocketsAvailable: isWebSocketsAvailable,
        setSecurityDebugCallback: setSecurityDebugCallback,
        stats: stats,
        statsIncrementCounter: statsIncrementCounter,
        dataUpdateCount: dataUpdateCount,
        interceptServerData: interceptServerData
      });
      var DataConnection = PersistentConnection;
      PersistentConnection.prototype.simpleListen = function(pathString, onComplete) {
        this.sendRequest("q", {
          p: pathString
        }, onComplete);
      };
      PersistentConnection.prototype.echo = function(data, onEcho) {
        this.sendRequest("echo", {
          d: data
        }, onEcho);
      };
      var RealTimeConnection = Connection;
      var hijackHash = function(newHash) {
        var oldPut = PersistentConnection.prototype.put;
        PersistentConnection.prototype.put = function(pathString, data, onComplete, hash) {
          void 0 !== hash && (hash = newHash());
          oldPut.call(this, pathString, data, onComplete, hash);
        };
        return function() {
          PersistentConnection.prototype.put = oldPut;
        };
      };
      var ConnectionTarget = RepoInfo;
      var queryIdentifier = function(query) {
        return query.queryIdentifier();
      };
      var forceRestClient = function(forceRestClient) {
        RepoManager.getInstance().forceRestClient(forceRestClient);
      };
      var TEST_ACCESS = Object.freeze({
        __proto__: null,
        DataConnection: DataConnection,
        RealTimeConnection: RealTimeConnection,
        hijackHash: hijackHash,
        ConnectionTarget: ConnectionTarget,
        queryIdentifier: queryIdentifier,
        forceRestClient: forceRestClient
      });
      var name = "@firebase/database";
      var version = "0.6.13";
      var ServerValue = Database.ServerValue;
      function registerDatabase(instance) {
        setSDKVersion(instance.SDK_VERSION);
        var namespace = instance.INTERNAL.registerComponent(new component.Component("database", function(container, url) {
          var app = container.getProvider("app").getImmediate();
          var authProvider = container.getProvider("auth-internal");
          return RepoManager.getInstance().databaseFromApp(app, authProvider, url);
        }, "PUBLIC").setServiceProps({
          Reference: Reference,
          Query: Query,
          Database: Database,
          DataSnapshot: DataSnapshot,
          enableLogging: enableLogging,
          INTERNAL: INTERNAL,
          ServerValue: ServerValue,
          TEST_ACCESS: TEST_ACCESS
        }).setMultipleInstances(true));
        instance.registerVersion(name, version);
        util.isNodeSdk() && (module.exports = namespace);
      }
      registerDatabase(firebase__default["default"]);
      exports.DataSnapshot = DataSnapshot;
      exports.Database = Database;
      exports.OnDisconnect = OnDisconnect;
      exports.Query = Query;
      exports.Reference = Reference;
      exports.ServerValue = ServerValue;
      exports.enableLogging = enableLogging;
      exports.registerDatabase = registerDatabase;
    }).call(this, require("_process"));
  }, {
    "@firebase/app": 10,
    "@firebase/component": 11,
    "@firebase/logger": 13,
    "@firebase/util": 14,
    _process: 6,
    tslib: 24
  } ],
  13: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    }
    var _a;
    var instances = [];
    (function(LogLevel) {
      LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
      LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
      LogLevel[LogLevel["INFO"] = 2] = "INFO";
      LogLevel[LogLevel["WARN"] = 3] = "WARN";
      LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
      LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
    })(exports.LogLevel || (exports.LogLevel = {}));
    var levelStringToEnum = {
      debug: exports.LogLevel.DEBUG,
      verbose: exports.LogLevel.VERBOSE,
      info: exports.LogLevel.INFO,
      warn: exports.LogLevel.WARN,
      error: exports.LogLevel.ERROR,
      silent: exports.LogLevel.SILENT
    };
    var defaultLogLevel = exports.LogLevel.INFO;
    var ConsoleMethod = (_a = {}, _a[exports.LogLevel.DEBUG] = "log", _a[exports.LogLevel.VERBOSE] = "log", 
    _a[exports.LogLevel.INFO] = "info", _a[exports.LogLevel.WARN] = "warn", _a[exports.LogLevel.ERROR] = "error", 
    _a);
    var defaultLogHandler = function(instance, logType) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
      if (logType < instance.logLevel) return;
      var now = new Date().toISOString();
      var method = ConsoleMethod[logType];
      if (!method) throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
      console[method].apply(console, __spreadArrays([ "[" + now + "]  " + instance.name + ":" ], args));
    };
    var Logger = function() {
      function Logger(name) {
        this.name = name;
        this._logLevel = defaultLogLevel;
        this._logHandler = defaultLogHandler;
        this._userLogHandler = null;
        instances.push(this);
      }
      Object.defineProperty(Logger.prototype, "logLevel", {
        get: function() {
          return this._logLevel;
        },
        set: function(val) {
          if (!(val in exports.LogLevel)) throw new TypeError('Invalid value "' + val + '" assigned to `logLevel`');
          this._logLevel = val;
        },
        enumerable: false,
        configurable: true
      });
      Logger.prototype.setLogLevel = function(val) {
        this._logLevel = "string" === typeof val ? levelStringToEnum[val] : val;
      };
      Object.defineProperty(Logger.prototype, "logHandler", {
        get: function() {
          return this._logHandler;
        },
        set: function(val) {
          if ("function" !== typeof val) throw new TypeError("Value assigned to `logHandler` must be a function");
          this._logHandler = val;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function() {
          return this._userLogHandler;
        },
        set: function(val) {
          this._userLogHandler = val;
        },
        enumerable: false,
        configurable: true
      });
      Logger.prototype.debug = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([ this, exports.LogLevel.DEBUG ], args));
        this._logHandler.apply(this, __spreadArrays([ this, exports.LogLevel.DEBUG ], args));
      };
      Logger.prototype.log = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([ this, exports.LogLevel.VERBOSE ], args));
        this._logHandler.apply(this, __spreadArrays([ this, exports.LogLevel.VERBOSE ], args));
      };
      Logger.prototype.info = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([ this, exports.LogLevel.INFO ], args));
        this._logHandler.apply(this, __spreadArrays([ this, exports.LogLevel.INFO ], args));
      };
      Logger.prototype.warn = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([ this, exports.LogLevel.WARN ], args));
        this._logHandler.apply(this, __spreadArrays([ this, exports.LogLevel.WARN ], args));
      };
      Logger.prototype.error = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([ this, exports.LogLevel.ERROR ], args));
        this._logHandler.apply(this, __spreadArrays([ this, exports.LogLevel.ERROR ], args));
      };
      return Logger;
    }();
    function setLogLevel(level) {
      instances.forEach(function(inst) {
        inst.setLogLevel(level);
      });
    }
    function setUserLogHandler(logCallback, options) {
      var _loop_1 = function(instance) {
        var customLogLevel = null;
        options && options.level && (customLogLevel = levelStringToEnum[options.level]);
        instance.userLogHandler = null === logCallback ? null : function(instance, level) {
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
          var message = args.map(function(arg) {
            if (null == arg) return null;
            if ("string" === typeof arg) return arg;
            if ("number" === typeof arg || "boolean" === typeof arg) return arg.toString();
            if (arg instanceof Error) return arg.message;
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }).filter(function(arg) {
            return arg;
          }).join(" ");
          level >= (null !== customLogLevel && void 0 !== customLogLevel ? customLogLevel : instance.logLevel) && logCallback({
            level: exports.LogLevel[level].toLowerCase(),
            message: message,
            args: args,
            type: instance.name
          });
        };
      };
      for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
        var instance = instances_1[_i];
        _loop_1(instance);
      }
    }
    exports.Logger = Logger;
    exports.setLogLevel = setLogLevel;
    exports.setUserLogHandler = setUserLogHandler;
  }, {} ],
  14: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var tslib = require("tslib");
      var CONSTANTS = {
        NODE_CLIENT: false,
        NODE_ADMIN: false,
        SDK_VERSION: "${JSCORE_VERSION}"
      };
      var assert = function(assertion, message) {
        if (!assertion) throw assertionError(message);
      };
      var assertionError = function(message) {
        return new Error("Firebase Database (" + CONSTANTS.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + message);
      };
      var stringToByteArray = function(str) {
        var out = [];
        var p = 0;
        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);
          if (c < 128) out[p++] = c; else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = 63 & c | 128;
          } else if (55296 === (64512 & c) && i + 1 < str.length && 56320 === (64512 & str.charCodeAt(i + 1))) {
            c = 65536 + ((1023 & c) << 10) + (1023 & str.charCodeAt(++i));
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = 63 & c | 128;
          } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = 63 & c | 128;
          }
        }
        return out;
      };
      var byteArrayToString = function(bytes) {
        var out = [];
        var pos = 0, c = 0;
        while (pos < bytes.length) {
          var c1 = bytes[pos++];
          if (c1 < 128) out[c++] = String.fromCharCode(c1); else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode((31 & c1) << 6 | 63 & c2);
          } else if (c1 > 239 && c1 < 365) {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = ((7 & c1) << 18 | (63 & c2) << 12 | (63 & c3) << 6 | 63 & c4) - 65536;
            out[c++] = String.fromCharCode(55296 + (u >> 10));
            out[c++] = String.fromCharCode(56320 + (1023 & u));
          } else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode((15 & c1) << 12 | (63 & c2) << 6 | 63 & c3);
          }
        }
        return out.join("");
      };
      var base64 = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/=";
        },
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_.";
        },
        HAS_NATIVE_SUPPORT: "function" === typeof atob,
        encodeByteArray: function(input, webSafe) {
          if (!Array.isArray(input)) throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
          var output = [];
          for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = (3 & byte1) << 4 | byte2 >> 4;
            var outByte3 = (15 & byte2) << 2 | byte3 >> 6;
            var outByte4 = 63 & byte3;
            if (!haveByte3) {
              outByte4 = 64;
              haveByte2 || (outByte3 = 64);
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
          }
          return output.join("");
        },
        encodeString: function(input, webSafe) {
          if (this.HAS_NATIVE_SUPPORT && !webSafe) return btoa(input);
          return this.encodeByteArray(stringToByteArray(input), webSafe);
        },
        decodeString: function(input, webSafe) {
          if (this.HAS_NATIVE_SUPPORT && !webSafe) return atob(input);
          return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
        },
        decodeStringToByteArray: function(input, webSafe) {
          this.init_();
          var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
          var output = [];
          for (var i = 0; i < input.length; ) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (null == byte1 || null == byte2 || null == byte3 || null == byte4) throw Error();
            var outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (64 !== byte3) {
              var outByte2 = byte2 << 4 & 240 | byte3 >> 2;
              output.push(outByte2);
              if (64 !== byte4) {
                var outByte3 = byte3 << 6 & 192 | byte4;
                output.push(outByte3);
              }
            }
          }
          return output;
        },
        init_: function() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
              this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
              this.charToByteMap_[this.byteToCharMap_[i]] = i;
              this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
              this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
              if (i >= this.ENCODED_VALS_BASE.length) {
                this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
              }
            }
          }
        }
      };
      var base64Encode = function(str) {
        var utf8Bytes = stringToByteArray(str);
        return base64.encodeByteArray(utf8Bytes, true);
      };
      var base64Decode = function(str) {
        try {
          return base64.decodeString(str, true);
        } catch (e) {
          console.error("base64Decode failed: ", e);
        }
        return null;
      };
      function deepCopy(value) {
        return deepExtend(void 0, value);
      }
      function deepExtend(target, source) {
        if (!(source instanceof Object)) return source;
        switch (source.constructor) {
         case Date:
          var dateValue = source;
          return new Date(dateValue.getTime());

         case Object:
          void 0 === target && (target = {});
          break;

         case Array:
          target = [];
          break;

         default:
          return source;
        }
        for (var prop in source) {
          if (!source.hasOwnProperty(prop)) continue;
          target[prop] = deepExtend(target[prop], source[prop]);
        }
        return target;
      }
      var Deferred = function() {
        function Deferred() {
          var _this = this;
          this.reject = function() {};
          this.resolve = function() {};
          this.promise = new Promise(function(resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
          });
        }
        Deferred.prototype.wrapCallback = function(callback) {
          var _this = this;
          return function(error, value) {
            error ? _this.reject(error) : _this.resolve(value);
            if ("function" === typeof callback) {
              _this.promise.catch(function() {});
              1 === callback.length ? callback(error) : callback(error, value);
            }
          };
        };
        return Deferred;
      }();
      function getUA() {
        return "undefined" !== typeof navigator && "string" === typeof navigator["userAgent"] ? navigator["userAgent"] : "";
      }
      function isMobileCordova() {
        return "undefined" !== typeof window && !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
      }
      function isNode() {
        try {
          return "[object process]" === Object.prototype.toString.call(global.process);
        } catch (e) {
          return false;
        }
      }
      function isBrowser() {
        return "object" === typeof self && self.self === self;
      }
      function isBrowserExtension() {
        var runtime = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
        return "object" === typeof runtime && void 0 !== runtime.id;
      }
      function isReactNative() {
        return "object" === typeof navigator && "ReactNative" === navigator["product"];
      }
      function isElectron() {
        return getUA().indexOf("Electron/") >= 0;
      }
      function isIE() {
        var ua = getUA();
        return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
      }
      function isUWP() {
        return getUA().indexOf("MSAppHost/") >= 0;
      }
      function isNodeSdk() {
        return true === CONSTANTS.NODE_CLIENT || true === CONSTANTS.NODE_ADMIN;
      }
      function isSafari() {
        return !isNode() && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
      }
      function isIndexedDBAvailable() {
        return "indexedDB" in self && null != indexedDB;
      }
      function validateIndexedDBOpenable() {
        return new Promise(function(resolve, reject) {
          try {
            var preExist_1 = true;
            var DB_CHECK_NAME_1 = "validate-browser-context-for-indexeddb-analytics-module";
            var request_1 = window.indexedDB.open(DB_CHECK_NAME_1);
            request_1.onsuccess = function() {
              request_1.result.close();
              preExist_1 || window.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
              resolve(true);
            };
            request_1.onupgradeneeded = function() {
              preExist_1 = false;
            };
            request_1.onerror = function() {
              var _a;
              reject((null === (_a = request_1.error) || void 0 === _a ? void 0 : _a.message) || "");
            };
          } catch (error) {
            reject(error);
          }
        });
      }
      function areCookiesEnabled() {
        if (!navigator || !navigator.cookieEnabled) return false;
        return true;
      }
      var ERROR_NAME = "FirebaseError";
      var FirebaseError = function(_super) {
        tslib.__extends(FirebaseError, _super);
        function FirebaseError(code, message) {
          var _this = _super.call(this, message) || this;
          _this.code = code;
          _this.name = ERROR_NAME;
          Object.setPrototypeOf(_this, FirebaseError.prototype);
          Error.captureStackTrace && Error.captureStackTrace(_this, ErrorFactory.prototype.create);
          return _this;
        }
        return FirebaseError;
      }(Error);
      var ErrorFactory = function() {
        function ErrorFactory(service, serviceName, errors) {
          this.service = service;
          this.serviceName = serviceName;
          this.errors = errors;
        }
        ErrorFactory.prototype.create = function(code) {
          var data = [];
          for (var _i = 1; _i < arguments.length; _i++) data[_i - 1] = arguments[_i];
          var customData = data[0] || {};
          var fullCode = this.service + "/" + code;
          var template = this.errors[code];
          var message = template ? replaceTemplate(template, customData) : "Error";
          var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
          var error = new FirebaseError(fullCode, fullMessage);
          for (var _a = 0, _b = Object.keys(customData); _a < _b.length; _a++) {
            var key = _b[_a];
            if ("_" !== key.slice(-1)) {
              key in error && console.warn('Overwriting FirebaseError base field "' + key + '" can cause unexpected behavior.');
              error[key] = customData[key];
            }
          }
          return error;
        };
        return ErrorFactory;
      }();
      function replaceTemplate(template, data) {
        return template.replace(PATTERN, function(_, key) {
          var value = data[key];
          return null != value ? String(value) : "<" + key + "?>";
        });
      }
      var PATTERN = /\{\$([^}]+)}/g;
      function jsonEval(str) {
        return JSON.parse(str);
      }
      function stringify(data) {
        return JSON.stringify(data);
      }
      var decode = function(token) {
        var header = {}, claims = {}, data = {}, signature = "";
        try {
          var parts = token.split(".");
          header = jsonEval(base64Decode(parts[0]) || "");
          claims = jsonEval(base64Decode(parts[1]) || "");
          signature = parts[2];
          data = claims["d"] || {};
          delete claims["d"];
        } catch (e) {}
        return {
          header: header,
          claims: claims,
          data: data,
          signature: signature
        };
      };
      var isValidTimestamp = function(token) {
        var claims = decode(token).claims;
        var now = Math.floor(new Date().getTime() / 1e3);
        var validSince = 0, validUntil = 0;
        if ("object" === typeof claims) {
          claims.hasOwnProperty("nbf") ? validSince = claims["nbf"] : claims.hasOwnProperty("iat") && (validSince = claims["iat"]);
          validUntil = claims.hasOwnProperty("exp") ? claims["exp"] : validSince + 86400;
        }
        return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
      };
      var issuedAtTime = function(token) {
        var claims = decode(token).claims;
        if ("object" === typeof claims && claims.hasOwnProperty("iat")) return claims["iat"];
        return null;
      };
      var isValidFormat = function(token) {
        var decoded = decode(token), claims = decoded.claims;
        return !!claims && "object" === typeof claims && claims.hasOwnProperty("iat");
      };
      var isAdmin = function(token) {
        var claims = decode(token).claims;
        return "object" === typeof claims && true === claims["admin"];
      };
      function contains(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
      function safeGet(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : void 0;
      }
      function isEmpty(obj) {
        for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
        return true;
      }
      function map(obj, fn, contextObj) {
        var res = {};
        for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (res[key] = fn.call(contextObj, obj[key], key, obj));
        return res;
      }
      function querystring(querystringParams) {
        var params = [];
        var _loop_1 = function(key, value) {
          Array.isArray(value) ? value.forEach(function(arrayVal) {
            params.push(encodeURIComponent(key) + "=" + encodeURIComponent(arrayVal));
          }) : params.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
        };
        for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
          var _b = _a[_i], key = _b[0], value = _b[1];
          _loop_1(key, value);
        }
        return params.length ? "&" + params.join("&") : "";
      }
      function querystringDecode(querystring) {
        var obj = {};
        var tokens = querystring.replace(/^\?/, "").split("&");
        tokens.forEach(function(token) {
          if (token) {
            var key = token.split("=");
            obj[key[0]] = key[1];
          }
        });
        return obj;
      }
      var Sha1 = function() {
        function Sha1() {
          this.chain_ = [];
          this.buf_ = [];
          this.W_ = [];
          this.pad_ = [];
          this.inbuf_ = 0;
          this.total_ = 0;
          this.blockSize = 64;
          this.pad_[0] = 128;
          for (var i = 1; i < this.blockSize; ++i) this.pad_[i] = 0;
          this.reset();
        }
        Sha1.prototype.reset = function() {
          this.chain_[0] = 1732584193;
          this.chain_[1] = 4023233417;
          this.chain_[2] = 2562383102;
          this.chain_[3] = 271733878;
          this.chain_[4] = 3285377520;
          this.inbuf_ = 0;
          this.total_ = 0;
        };
        Sha1.prototype.compress_ = function(buf, offset) {
          offset || (offset = 0);
          var W = this.W_;
          if ("string" === typeof buf) for (var i = 0; i < 16; i++) {
            W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
            offset += 4;
          } else for (var i = 0; i < 16; i++) {
            W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
            offset += 4;
          }
          for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = 4294967295 & (t << 1 | t >>> 31);
          }
          var a = this.chain_[0];
          var b = this.chain_[1];
          var c = this.chain_[2];
          var d = this.chain_[3];
          var e = this.chain_[4];
          var f, k;
          for (var i = 0; i < 80; i++) {
            if (i < 40) if (i < 20) {
              f = d ^ b & (c ^ d);
              k = 1518500249;
            } else {
              f = b ^ c ^ d;
              k = 1859775393;
            } else if (i < 60) {
              f = b & c | d & (b | c);
              k = 2400959708;
            } else {
              f = b ^ c ^ d;
              k = 3395469782;
            }
            var t = (a << 5 | a >>> 27) + f + e + k + W[i] & 4294967295;
            e = d;
            d = c;
            c = 4294967295 & (b << 30 | b >>> 2);
            b = a;
            a = t;
          }
          this.chain_[0] = this.chain_[0] + a & 4294967295;
          this.chain_[1] = this.chain_[1] + b & 4294967295;
          this.chain_[2] = this.chain_[2] + c & 4294967295;
          this.chain_[3] = this.chain_[3] + d & 4294967295;
          this.chain_[4] = this.chain_[4] + e & 4294967295;
        };
        Sha1.prototype.update = function(bytes, length) {
          if (null == bytes) return;
          void 0 === length && (length = bytes.length);
          var lengthMinusBlock = length - this.blockSize;
          var n = 0;
          var buf = this.buf_;
          var inbuf = this.inbuf_;
          while (n < length) {
            if (0 === inbuf) while (n <= lengthMinusBlock) {
              this.compress_(bytes, n);
              n += this.blockSize;
            }
            if ("string" === typeof bytes) while (n < length) {
              buf[inbuf] = bytes.charCodeAt(n);
              ++inbuf;
              ++n;
              if (inbuf === this.blockSize) {
                this.compress_(buf);
                inbuf = 0;
                break;
              }
            } else while (n < length) {
              buf[inbuf] = bytes[n];
              ++inbuf;
              ++n;
              if (inbuf === this.blockSize) {
                this.compress_(buf);
                inbuf = 0;
                break;
              }
            }
          }
          this.inbuf_ = inbuf;
          this.total_ += length;
        };
        Sha1.prototype.digest = function() {
          var digest = [];
          var totalBits = 8 * this.total_;
          this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = 255 & totalBits;
            totalBits /= 256;
          }
          this.compress_(this.buf_);
          var n = 0;
          for (var i = 0; i < 5; i++) for (var j = 24; j >= 0; j -= 8) {
            digest[n] = this.chain_[i] >> j & 255;
            ++n;
          }
          return digest;
        };
        return Sha1;
      }();
      function createSubscribe(executor, onNoObservers) {
        var proxy = new ObserverProxy(executor, onNoObservers);
        return proxy.subscribe.bind(proxy);
      }
      var ObserverProxy = function() {
        function ObserverProxy(executor, onNoObservers) {
          var _this = this;
          this.observers = [];
          this.unsubscribes = [];
          this.observerCount = 0;
          this.task = Promise.resolve();
          this.finalized = false;
          this.onNoObservers = onNoObservers;
          this.task.then(function() {
            executor(_this);
          }).catch(function(e) {
            _this.error(e);
          });
        }
        ObserverProxy.prototype.next = function(value) {
          this.forEachObserver(function(observer) {
            observer.next(value);
          });
        };
        ObserverProxy.prototype.error = function(error) {
          this.forEachObserver(function(observer) {
            observer.error(error);
          });
          this.close(error);
        };
        ObserverProxy.prototype.complete = function() {
          this.forEachObserver(function(observer) {
            observer.complete();
          });
          this.close();
        };
        ObserverProxy.prototype.subscribe = function(nextOrObserver, error, complete) {
          var _this = this;
          var observer;
          if (void 0 === nextOrObserver && void 0 === error && void 0 === complete) throw new Error("Missing Observer.");
          observer = implementsAnyMethods(nextOrObserver, [ "next", "error", "complete" ]) ? nextOrObserver : {
            next: nextOrObserver,
            error: error,
            complete: complete
          };
          void 0 === observer.next && (observer.next = noop);
          void 0 === observer.error && (observer.error = noop);
          void 0 === observer.complete && (observer.complete = noop);
          var unsub = this.unsubscribeOne.bind(this, this.observers.length);
          this.finalized && this.task.then(function() {
            try {
              _this.finalError ? observer.error(_this.finalError) : observer.complete();
            } catch (e) {}
            return;
          });
          this.observers.push(observer);
          return unsub;
        };
        ObserverProxy.prototype.unsubscribeOne = function(i) {
          if (void 0 === this.observers || void 0 === this.observers[i]) return;
          delete this.observers[i];
          this.observerCount -= 1;
          0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this);
        };
        ObserverProxy.prototype.forEachObserver = function(fn) {
          if (this.finalized) return;
          for (var i = 0; i < this.observers.length; i++) this.sendOne(i, fn);
        };
        ObserverProxy.prototype.sendOne = function(i, fn) {
          var _this = this;
          this.task.then(function() {
            if (void 0 !== _this.observers && void 0 !== _this.observers[i]) try {
              fn(_this.observers[i]);
            } catch (e) {
              "undefined" !== typeof console && console.error && console.error(e);
            }
          });
        };
        ObserverProxy.prototype.close = function(err) {
          var _this = this;
          if (this.finalized) return;
          this.finalized = true;
          void 0 !== err && (this.finalError = err);
          this.task.then(function() {
            _this.observers = void 0;
            _this.onNoObservers = void 0;
          });
        };
        return ObserverProxy;
      }();
      function async(fn, onError) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
          Promise.resolve(true).then(function() {
            fn.apply(void 0, args);
          }).catch(function(error) {
            onError && onError(error);
          });
        };
      }
      function implementsAnyMethods(obj, methods) {
        if ("object" !== typeof obj || null === obj) return false;
        for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
          var method = methods_1[_i];
          if (method in obj && "function" === typeof obj[method]) return true;
        }
        return false;
      }
      function noop() {}
      var validateArgCount = function(fnName, minCount, maxCount, argCount) {
        var argError;
        argCount < minCount ? argError = "at least " + minCount : argCount > maxCount && (argError = 0 === maxCount ? "none" : "no more than " + maxCount);
        if (argError) {
          var error = fnName + " failed: Was called with " + argCount + (1 === argCount ? " argument." : " arguments.") + " Expects " + argError + ".";
          throw new Error(error);
        }
      };
      function errorPrefix(fnName, argumentNumber, optional) {
        var argName = "";
        switch (argumentNumber) {
         case 1:
          argName = optional ? "first" : "First";
          break;

         case 2:
          argName = optional ? "second" : "Second";
          break;

         case 3:
          argName = optional ? "third" : "Third";
          break;

         case 4:
          argName = optional ? "fourth" : "Fourth";
          break;

         default:
          throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?");
        }
        var error = fnName + " failed: ";
        error += argName + " argument ";
        return error;
      }
      function validateNamespace(fnName, argumentNumber, namespace, optional) {
        if (optional && !namespace) return;
        if ("string" !== typeof namespace) throw new Error(errorPrefix(fnName, argumentNumber, optional) + "must be a valid firebase namespace.");
      }
      function validateCallback(fnName, argumentNumber, callback, optional) {
        if (optional && !callback) return;
        if ("function" !== typeof callback) throw new Error(errorPrefix(fnName, argumentNumber, optional) + "must be a valid function.");
      }
      function validateContextObject(fnName, argumentNumber, context, optional) {
        if (optional && !context) return;
        if ("object" !== typeof context || null === context) throw new Error(errorPrefix(fnName, argumentNumber, optional) + "must be a valid context object.");
      }
      var stringToByteArray$1 = function(str) {
        var out = [];
        var p = 0;
        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);
          if (c >= 55296 && c <= 56319) {
            var high = c - 55296;
            i++;
            assert(i < str.length, "Surrogate pair missing trail surrogate.");
            var low = str.charCodeAt(i) - 56320;
            c = 65536 + (high << 10) + low;
          }
          if (c < 128) out[p++] = c; else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = 63 & c | 128;
          } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = 63 & c | 128;
          } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = 63 & c | 128;
          }
        }
        return out;
      };
      var stringLength = function(str) {
        var p = 0;
        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);
          if (c < 128) p++; else if (c < 2048) p += 2; else if (c >= 55296 && c <= 56319) {
            p += 4;
            i++;
          } else p += 3;
        }
        return p;
      };
      var DEFAULT_INTERVAL_MILLIS = 1e3;
      var DEFAULT_BACKOFF_FACTOR = 2;
      var MAX_VALUE_MILLIS = 144e5;
      var RANDOM_FACTOR = .5;
      function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
        void 0 === intervalMillis && (intervalMillis = DEFAULT_INTERVAL_MILLIS);
        void 0 === backoffFactor && (backoffFactor = DEFAULT_BACKOFF_FACTOR);
        var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
        var randomWait = Math.round(RANDOM_FACTOR * currBaseValue * (Math.random() - .5) * 2);
        return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
      }
      exports.CONSTANTS = CONSTANTS;
      exports.Deferred = Deferred;
      exports.ErrorFactory = ErrorFactory;
      exports.FirebaseError = FirebaseError;
      exports.MAX_VALUE_MILLIS = MAX_VALUE_MILLIS;
      exports.RANDOM_FACTOR = RANDOM_FACTOR;
      exports.Sha1 = Sha1;
      exports.areCookiesEnabled = areCookiesEnabled;
      exports.assert = assert;
      exports.assertionError = assertionError;
      exports.async = async;
      exports.base64 = base64;
      exports.base64Decode = base64Decode;
      exports.base64Encode = base64Encode;
      exports.calculateBackoffMillis = calculateBackoffMillis;
      exports.contains = contains;
      exports.createSubscribe = createSubscribe;
      exports.decode = decode;
      exports.deepCopy = deepCopy;
      exports.deepExtend = deepExtend;
      exports.errorPrefix = errorPrefix;
      exports.getUA = getUA;
      exports.isAdmin = isAdmin;
      exports.isBrowser = isBrowser;
      exports.isBrowserExtension = isBrowserExtension;
      exports.isElectron = isElectron;
      exports.isEmpty = isEmpty;
      exports.isIE = isIE;
      exports.isIndexedDBAvailable = isIndexedDBAvailable;
      exports.isMobileCordova = isMobileCordova;
      exports.isNode = isNode;
      exports.isNodeSdk = isNodeSdk;
      exports.isReactNative = isReactNative;
      exports.isSafari = isSafari;
      exports.isUWP = isUWP;
      exports.isValidFormat = isValidFormat;
      exports.isValidTimestamp = isValidTimestamp;
      exports.issuedAtTime = issuedAtTime;
      exports.jsonEval = jsonEval;
      exports.map = map;
      exports.querystring = querystring;
      exports.querystringDecode = querystringDecode;
      exports.safeGet = safeGet;
      exports.stringLength = stringLength;
      exports.stringToByteArray = stringToByteArray$1;
      exports.stringify = stringify;
      exports.validateArgCount = validateArgCount;
      exports.validateCallback = validateCallback;
      exports.validateContextObject = validateContextObject;
      exports.validateIndexedDBOpenable = validateIndexedDBOpenable;
      exports.validateNamespace = validateNamespace;
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    tslib: 24
  } ],
  15: [ function(require, module, exports) {
    "use strict";
    var InvalidMonthError = require("./src/errors/InvalidMonthError");
    var InvalidMonthsError = require("./src/errors/InvalidMonthsError");
    var InvalidMonthsAbbrError = require("./src/errors/InvalidMonthsAbbrError");
    var InvalidWeekdayError = require("./src/errors/InvalidWeekdayError");
    var InvalidWeekdaysError = require("./src/errors/InvalidWeekdaysError");
    var InvalidWeekdaysAbbrError = require("./src/errors/InvalidWeekdaysAbbrError");
    var MONTHS = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var WEEKDAYS = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    function generateAbbr(arr, len) {
      return arr.map(function(item) {
        return item.slice(0, len || 3);
      });
    }
    function createArray(length) {
      var a = [];
      for (var i = 0; i < length; i++) a.push(1);
      return a;
    }
    function calendar(config) {
      var abbrLengthWeek = config && !isNaN(config.abbrWeek) && config.abbrWeek > 0 ? config.abbrWeek : 3;
      var abbrLengthMonth = config && !isNaN(config.abbrMonth) && config.abbrMonth > 0 ? config.abbrMonth : 3;
      var _months = MONTHS;
      var _monthsAbbr = generateAbbr(MONTHS, abbrLengthMonth);
      var _weekdays = WEEKDAYS;
      var _weekdaysAbbr = generateAbbr(WEEKDAYS, abbrLengthWeek);
      if (config && config.months) {
        if (!Array.isArray(config.months) || 12 !== config.months.length) throw new InvalidMonthsError("Months array must have 12 values");
        _months = config.months;
        _monthsAbbr = generateAbbr(config.months, abbrLengthMonth);
      }
      if (config && config.monthsAbbr) {
        if (!Array.isArray(config.monthsAbbr) || 12 !== config.monthsAbbr.length) throw new InvalidMonthsAbbrError("Months array must have 12 values");
        _monthsAbbr = config.monthsAbbr;
      }
      if (config && config.weekdays) {
        if (!Array.isArray(config.weekdays) || 7 !== config.weekdays.length) throw new InvalidWeekdaysError("Weekdays array must have 7 values");
        _weekdays = config.weekdays;
        _weekdaysAbbr = generateAbbr(config.weekdays, abbrLengthWeek);
      }
      if (config && config.weekdaysAbbr) {
        if (!Array.isArray(config.weekdaysAbbr) || 7 !== config.weekdaysAbbr.length) throw new InvalidWeekdaysAbbrError("Weekdays array must have 7 values");
        _weekdaysAbbr = config.weekdaysAbbr;
      }
      return {
        months: function() {
          return _months;
        },
        monthsAbbr: function() {
          return _monthsAbbr;
        },
        years: function(from, to) {
          if (from > to) throw new RangeError("The first year argument cannot be greater than the second");
          var years = [ from.toString() ];
          var totalYears = to - from + 1;
          while (years.length < totalYears) {
            var year = parseInt(years[years.length - 1], 10) + 1;
            years.push(year.toString());
          }
          return years;
        },
        yearsAbbr: function(from, to) {
          var years = this.years(from, to).map(function(year) {
            return year.toString().substring(2);
          });
          return years.length > 1 ? years : years[0];
        },
        weekdays: function() {
          return _weekdays;
        },
        weekdaysAbbr: function() {
          return _weekdaysAbbr;
        },
        generateCalendar: function(year, month, numberOfDays, firstWeekday, lastWeekday, dayTransformer, cbData) {
          var calendar = [];
          var totalWeeks = Math.ceil((numberOfDays + firstWeekday) / 7);
          var totalDaysOnWeek = 7;
          var lastWeek = totalWeeks - 1;
          var execCb = "function" === typeof dayTransformer;
          var lastDay = -1 * firstWeekday;
          var weeks = [];
          createArray(totalWeeks).forEach(function(_, week) {
            createArray(totalDaysOnWeek).forEach(function(_, day) {
              lastDay++;
              var date = new Date(year, month, lastDay);
              var data = {
                date: date,
                day: date.getDate(),
                isInPrimaryMonth: date.getMonth() === month,
                isInLastWeekOfPrimaryMonth: week === lastWeek,
                index: {
                  day: day,
                  week: week
                }
              };
              if (execCb) {
                var result = dayTransformer(data, cbData);
                void 0 !== result && (data = result);
              }
              weeks.push(data);
            });
            calendar.push(weeks);
            weeks = [];
          });
          return calendar;
        },
        of: function(year, month, transformer) {
          var data = this.detailed(year, month, function(data) {
            return data.isInPrimaryMonth ? data.day : 0;
          });
          if ("function" === typeof transformer) return transformer(data);
          return data;
        },
        detailed: function(year, month, dayTransformer) {
          if (month < 0 || month > 11) throw new InvalidMonthError("Month should be beetwen 0 and 11");
          if ("number" !== typeof year || "number" !== typeof month) throw new Error("Arguments should be numbers");
          var numberOfDays = new Date(year, month + 1, 0).getDate();
          var firstWeekday = new Date(year, month, 1).getDay();
          var lastWeekday = new Date(year, month, numberOfDays).getDay();
          var data = {
            year: year.toString(),
            yearAbbr: this.yearsAbbr(year),
            month: this.months()[month],
            monthAbbr: this.monthsAbbr()[month],
            weekdays: this.weekdays(),
            weekdaysAbbr: this.weekdaysAbbr(),
            days: numberOfDays,
            firstWeekday: firstWeekday,
            lastWeekday: lastWeekday
          };
          var calendar = this.generateCalendar(year, month, numberOfDays, firstWeekday, lastWeekday, dayTransformer, data);
          data.calendar = calendar;
          return data;
        },
        validate: function(year, month, day) {
          var date = new Date(year, month, day);
          return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
        }
      };
    }
    module.exports = calendar;
  }, {
    "./src/errors/InvalidMonthError": 16,
    "./src/errors/InvalidMonthsAbbrError": 17,
    "./src/errors/InvalidMonthsError": 18,
    "./src/errors/InvalidWeekdayError": 19,
    "./src/errors/InvalidWeekdaysAbbrError": 20,
    "./src/errors/InvalidWeekdaysError": 21
  } ],
  16: [ function(require, module, exports) {
    module.exports = function InvalidMonthError(message) {
      this.message = message;
      this.name = "InvalidMonthError";
    };
  }, {} ],
  17: [ function(require, module, exports) {
    module.exports = function InvalidMonthsAbbrError(message) {
      this.message = message;
      this.name = "InvalidMonthsAbbrError";
    };
  }, {} ],
  18: [ function(require, module, exports) {
    module.exports = function InvalidMonthsError(message) {
      this.message = message;
      this.name = "InvalidMonthsError";
    };
  }, {} ],
  19: [ function(require, module, exports) {
    module.exports = function InvalidMonthError(message) {
      this.message = message;
      this.name = "InvalidWeekdayError";
    };
  }, {} ],
  20: [ function(require, module, exports) {
    module.exports = function InvalidMonthsAbbrError(message) {
      this.message = message;
      this.name = "InvalidWeekdaysAbbrError";
    };
  }, {} ],
  21: [ function(require, module, exports) {
    module.exports = function InvalidMonthsError(message) {
      this.message = message;
      this.name = "InvalidWeekdaysError";
    };
  }, {} ],
  22: [ function(require, module, exports) {
    "use strict";
    var firebase = require("@firebase/app");
    function _interopDefaultLegacy(e) {
      return e && "object" === typeof e && "default" in e ? e : {
        default: e
      };
    }
    var firebase__default = _interopDefaultLegacy(firebase);
    var name = "firebase";
    var version = "7.22.1";
    firebase__default["default"].registerVersion(name, version, "app");
    module.exports = firebase__default["default"];
  }, {
    "@firebase/app": 10
  } ],
  23: [ function(require, module, exports) {
    "use strict";
    require("@firebase/database");
  }, {
    "@firebase/database": 12
  } ],
  24: [ function(require, module, exports) {
    (function(global) {
      var __extends;
      var __assign;
      var __rest;
      var __decorate;
      var __param;
      var __metadata;
      var __awaiter;
      var __generator;
      var __exportStar;
      var __values;
      var __read;
      var __spread;
      var __spreadArrays;
      var __await;
      var __asyncGenerator;
      var __asyncDelegator;
      var __asyncValues;
      var __makeTemplateObject;
      var __importStar;
      var __importDefault;
      var __classPrivateFieldGet;
      var __classPrivateFieldSet;
      var __createBinding;
      (function(factory) {
        var root = "object" === typeof global ? global : "object" === typeof self ? self : "object" === typeof this ? this : {};
        "function" === typeof define && define.amd ? define("tslib", [ "exports" ], function(exports) {
          factory(createExporter(root, createExporter(exports)));
        }) : "object" === typeof module && "object" === typeof module.exports ? factory(createExporter(root, createExporter(module.exports))) : factory(createExporter(root));
        function createExporter(exports, previous) {
          exports !== root && ("function" === typeof Object.create ? Object.defineProperty(exports, "__esModule", {
            value: true
          }) : exports.__esModule = true);
          return function(id, v) {
            return exports[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        __extends = function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
          }
          return t;
        };
        __rest = function(s, e) {
          var t = {};
          for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
          if (null != s && "function" === typeof Object.getOwnPropertySymbols) for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (t[p[i]] = s[p[i]]);
          return t;
        };
        __decorate = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata = function(metadataKey, metadataValue) {
          if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator = function(thisArg, body) {
          var _ = {
            label: 0,
            sent: function() {
              if (1 & t[0]) throw t[1];
              return t[1];
            },
            trys: [],
            ops: []
          }, f, y, t, g;
          return g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
          }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([ n, v ]);
            };
          }
          function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
              if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
              0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              (y = 0, t) && (op = [ 2 & op[0], t.value ]);
              switch (op[0]) {
               case 0:
               case 1:
                t = op;
                break;

               case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

               case 5:
                _.label++;
                y = op[1];
                op = [ 0 ];
                continue;

               case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;

               default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                  _ = 0;
                  continue;
                }
                if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (6 === op[0] && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                t[2] && _.ops.pop();
                _.trys.pop();
                continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [ 6, e ];
              y = 0;
            } finally {
              f = t = 0;
            }
            if (5 & op[0]) throw op[1];
            return {
              value: op[0] ? op[1] : void 0,
              done: true
            };
          }
        };
        __createBinding = function(o, m, k, k2) {
          void 0 === k2 && (k2 = k);
          o[k2] = m[k];
        };
        __exportStar = function(m, exports) {
          for (var p in m) "default" === p || exports.hasOwnProperty(p) || (exports[p] = m[p]);
        };
        __values = function(o) {
          var s = "function" === typeof Symbol && Symbol.iterator, m = s && o[s], i = 0;
          if (m) return m.call(o);
          if (o && "number" === typeof o.length) return {
            next: function() {
              o && i >= o.length && (o = void 0);
              return {
                value: o && o[i++],
                done: !o
              };
            }
          };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read = function(o, n) {
          var m = "function" === typeof Symbol && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((void 0 === n || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
          } catch (error) {
            e = {
              error: error
            };
          } finally {
            try {
              r && !r.done && (m = i["return"]) && m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return ar;
        };
        __spread = function() {
          for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
          return ar;
        };
        __spreadArrays = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
          k++) r[k] = a[j];
          return r;
        };
        __await = function(v) {
          return this instanceof __await ? (this.v = v, this) : new __await(v);
        };
        __asyncGenerator = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            g[n] && (i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([ n, v, a, b ]) > 1 || resume(n, v);
              });
            });
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            (f(v), q.shift(), q.length) && resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? {
                value: __await(o[n](v)),
                done: "return" === n
              } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues = function(o) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = "function" === typeof __values ? __values(o) : o[Symbol.iterator](), 
          i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v) {
              resolve({
                value: v,
                done: d
              });
            }, reject);
          }
        };
        __makeTemplateObject = function(cooked, raw) {
          Object.defineProperty ? Object.defineProperty(cooked, "raw", {
            value: raw
          }) : cooked.raw = raw;
          return cooked;
        };
        __importStar = function(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && (result[k] = mod[k]);
          result["default"] = mod;
          return result;
        };
        __importDefault = function(mod) {
          return mod && mod.__esModule ? mod : {
            default: mod
          };
        };
        __classPrivateFieldGet = function(receiver, privateMap) {
          if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
          return privateMap.get(receiver);
        };
        __classPrivateFieldSet = function(receiver, privateMap, value) {
          if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
          privateMap.set(receiver, value);
          return value;
        };
        exporter("__extends", __extends);
        exporter("__assign", __assign);
        exporter("__rest", __rest);
        exporter("__decorate", __decorate);
        exporter("__param", __param);
        exporter("__metadata", __metadata);
        exporter("__awaiter", __awaiter);
        exporter("__generator", __generator);
        exporter("__exportStar", __exportStar);
        exporter("__createBinding", __createBinding);
        exporter("__values", __values);
        exporter("__read", __read);
        exporter("__spread", __spread);
        exporter("__spreadArrays", __spreadArrays);
        exporter("__await", __await);
        exporter("__asyncGenerator", __asyncGenerator);
        exporter("__asyncDelegator", __asyncDelegator);
        exporter("__asyncValues", __asyncValues);
        exporter("__makeTemplateObject", __makeTemplateObject);
        exporter("__importStar", __importStar);
        exporter("__importDefault", __importDefault);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet);
      });
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {} ],
  Calendar: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99185QF/HNO2oV/99RqZoca", "Calendar");
    "use strict";
    var calendar = require("calendar-js");
    var Diary = require("./models/Diary");
    var Note = require("./models/Note");
    var Plan = require("./models/Plan");
    var Achievement = require("./models/Achievement");
    var MiniGame = require("./models/MiniGame");
    var PowerLevel = require("./models/PowerLevel");
    var _require = require("console"), count = _require.count;
    var self;
    cc.Class({
      extends: cc.Component,
      properties: {},
      init: function init() {
        var _this = this;
        this.currentDay = -1;
        this.monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        self = this;
        this.UIManager = cc.find("Canvas").getComponent("UIManager");
        self.planNode = cc.find(CALENDAR_PANEL.NOTE_PANEL.PLAN_LIST);
        this.noteList = [];
        this.energyMapPanel = cc.find(CALENDAR_PANEL.DIARY_PANEL.ENERGY_MAP_PANEL);
        this.trainingMode = cc.find(CALENDAR_PANEL.TRAINING_MODE.SELF);
        this.planMode = cc.find(CALENDAR_PANEL.PLAN_MODE.SELF);
        this.diaryMode = cc.find(CALENDAR_PANEL.DIARY_MODE.SELF);
        this.content = cc.find(CALENDAR_PANEL.MID_BACKGROUND.CONTENT_PANEL);
        this.moodPanel = cc.find(CALENDAR_PANEL.DIARY_PANEL.MOOD_PANEL);
        this.moodList = cc.find(CALENDAR_PANEL.DIARY_PANEL.MOOD_CONTAINER).children;
        this.whoWhatPanel = cc.find(CALENDAR_PANEL.DIARY_PANEL.WHO_WHAT_PANEL);
        this.whoWhatList = this.whoWhatPanel.children;
        this.notePanel = cc.find(CALENDAR_PANEL.NOTE_PANEL.SELF);
        this.diaryPanel = cc.find(CALENDAR_PANEL.DIARY_PANEL.SELF);
        this.midBackground = cc.find(CALENDAR_PANEL.MID_BACKGROUND.SELF);
        this.typePanel = cc.find(CALENDAR_PANEL.DIARY_PANEL.TYPE_PANEL);
        this.typeList = this.typePanel.children;
        this.background = cc.find(CALENDAR_PANEL.BACKGROUND).getComponent(cc.Sprite);
        this.swipeLeft = cc.find(CALENDAR_PANEL.SWIPE_LEFT).getComponent(cc.Sprite);
        this.swipeRight = cc.find(CALENDAR_PANEL.SWIPE_RIGHT).getComponent(cc.Sprite);
        this.fade = cc.find(CALENDAR_PANEL.FADE_IN).getComponent(cc.Sprite);
        this.edbDiary = cc.find(CALENDAR_PANEL.DIARY_PANEL.EDB_DIARY).getComponent(cc.EditBox);
        this.edbPlanDiscription = cc.find(PLAN_PANEL.EDB_PLAN_DISCRIPTION).getComponent(cc.EditBox);
        this.btnDonePlan = cc.find(PLAN_PANEL.BTN_DONE_PLAN).getComponent(cc.Button);
        this.midDateChildren = cc.find(CALENDAR_PANEL.MID_BACKGROUND.BTN_DAYS).children;
        this.trainingDateChildren = cc.find(CALENDAR_PANEL.TRAINING_MODE.BTN_DAYS).children;
        this.planDateChildren = cc.find(CALENDAR_PANEL.PLAN_MODE.BTN_DAYS).children;
        this.diaryDateChildren = cc.find(CALENDAR_PANEL.DIARY_MODE.BTN_DAYS).children;
        this.dates = cc.find(CALENDAR_PANEL.DATES.BTN_CONTANER).children;
        this.btnSwap = cc.find(CALENDAR_PANEL.BTN_SWAP).getComponent(cc.Button);
        this.btnAchievement = cc.find(CALENDAR_PANEL.NOTE_PANEL.BTN_ACHIEVEMENT).getComponent(cc.Button);
        this.btnDiary = cc.find(CALENDAR_PANEL.NOTE_PANEL.BTN_DIARY).getComponent(cc.Button);
        this.btnLeftNote = cc.find(CALENDAR_PANEL.NOTE_PANEL.BTN_LEFT_NOTE).getComponent(cc.Button);
        this.btnRightNote = cc.find(CALENDAR_PANEL.NOTE_PANEL.BTN_RIGHT_NOTE).getComponent(cc.Button);
        this.btnMood = cc.find(CALENDAR_PANEL.DIARY_PANEL.BTN_MOOD).getComponent(cc.Button);
        this.btnWhoWhat = cc.find(CALENDAR_PANEL.DIARY_PANEL.BTN_WHO_WHAT).getComponent(cc.Button);
        this.btnRightMonth = cc.find(CALENDAR_PANEL.MID_BACKGROUND.BTN_RIGHT_MONTH).getComponent(cc.Button);
        this.btnLeftMonth = cc.find(CALENDAR_PANEL.MID_BACKGROUND.BTN_LEFT_MONTH).getComponent(cc.Button);
        this.btnType = cc.find(CALENDAR_PANEL.DIARY_PANEL.BTN_TYPE).getComponent(cc.Button);
        this.btnDone = cc.find(CALENDAR_PANEL.DIARY_PANEL.BTN_DONE).getComponent(cc.Button);
        this.tglSoundNoti = cc.find(PLAN_PANEL.TGL_SOUND_NOTI).getComponent(cc.Toggle);
        this.lblBreath = cc.find(CALENDAR_PANEL.NOTE_PANEL.LBL_BREATH).getComponent(cc.Label);
        this.lblStability = cc.find(CALENDAR_PANEL.NOTE_PANEL.LBL_STABILITY).getComponent(cc.Label);
        this.lblTitle = cc.find(BOOK_INFO.LBL_TITLE).getComponent(cc.Label);
        this.lblPlan = cc.find(CALENDAR_PANEL.NOTE_PANEL.LBL_PLAN).getComponent(cc.Label);
        this.lblHour = cc.find(PLAN_PANEL.LBL_HOUR).getComponent(cc.Label);
        this.lblMin = cc.find(PLAN_PANEL.LBL_MIN).getComponent(cc.Label);
        this.lblEnergy = cc.find(CALENDAR_PANEL.DIARY_PANEL.LBL_ENERGY).getComponent(cc.Label);
        this.lblType = this.btnType.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        this.lblMood = this.btnMood.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        this.lblWhoWhat = this.btnWhoWhat.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        this.lblDiary = cc.find(CALENDAR_PANEL.NOTE_PANEL.LBL_DIARY).getComponent(cc.Label);
        this.lblDate = cc.find(CALENDAR_PANEL.DIARY_PANEL.LBL_DATE).getComponent(cc.Label);
        this.lblMonthMid = cc.find(CALENDAR_PANEL.MID_BACKGROUND.LBL_MONTH_MID).getComponent(cc.Label);
        this.lblDayMonthNote = cc.find(CALENDAR_PANEL.NOTE_PANEL.LBL_MONTH_NOTE).getComponent(cc.Label);
        this.btnAchNode = cc.find(CALENDAR_PANEL.NOTE_PANEL.BTN_ACHIEVEMENT);
        this.lblAch = this.btnAchNode.children[1].getComponent(cc.Label);
        this.lblEnergy.node.on("touchstart", function() {
          _this.energyMapPanel.active = true;
        });
        this.btnDonePlan.node.on("click", function() {
          _this.UIManager.zoomEffect(_this.btnDonePlan.node);
          _this.UIManager.showChapterContent();
          _this.savePlanData();
        }, this);
        for (var i = 0; i < this.typeList.length; i++) {
          this.typeList[i].on("touchstart", function(event) {
            _this.saveDiaryType(event);
            _this.showChoseType();
            _this.typePanel.active = false;
          }, this);
          this.typeList[i].myParam = i;
        }
        for (var i = 0; i < this.moodList.length; i++) {
          this.moodList[i].on("touchstart", function(event) {
            _this.saveDiaryMood(event);
            _this.showChoseMood();
            _this.moodPanel.active = false;
          }, this);
          this.moodList[i].myParam = i;
        }
        for (var i = 0; i < this.whoWhatList.length; i++) {
          this.whoWhatList[i].on("touchstart", function(event) {
            _this.saveDiaryWhoWhat(event);
            _this.showChoseWhoWhat();
            _this.whoWhatPanel.active = false;
          }, this);
          this.whoWhatList[i].myParam = i;
        }
        this.btnSwap.node.on("click", function() {
          _this.swapCalendar();
        });
        this.btnLeftNote.node.on("click", function() {
          _this.subDay();
        }, this);
        this.btnRightNote.node.on("click", function() {
          _this.addDay();
        }, this);
        this.btnDiary.node.on("click", function() {
          _this.showDiaryPanel();
        }, this);
        this.btnRightMonth.node.on("click", function() {
          _this.UIManager.zoomEffect(_this.btnRightMonth.node);
          _this.addMonth();
        }, this);
        this.btnLeftMonth.node.on("click", function() {
          _this.UIManager.zoomEffect(_this.btnLeftMonth.node);
          _this.subtractMonth();
        }, this);
        this.btnMood.node.on("click", function() {
          _this.showMoodPanel();
        }, this);
        this.btnWhoWhat.node.on("click", function() {
          _this.showWhoWhatPanel();
        }, this);
        this.btnType.node.on("click", function() {
          _this.showTypePanel();
        }, this);
        this.edbDiary.node.on("editing-did-ended", function() {
          _this.saveDiaryEDB();
        }, this);
        this.edbDiary.node.on("editing-did-began", function() {
          _this.typePanel.active = false;
          _this.moodPanel.active = false;
          _this.whoWhatPanel.active = false;
        }, this);
        this.btnDone.node.on("click", function() {
          _this.saveDiaryData();
          _this.reset();
          _this.diaryPanel.active = false;
          _this.saveCalendar();
          _this.energyMapPanel.active = false;
        }, this);
      },
      swipeCalendar: function swipeCalendar() {
        var _this2 = this;
        this.swipeLeft.node.on("touchstart", function(e) {
          _this2._touchStartPos = e.getLocation();
        });
        this.swipeLeft.node.on("touchend", function(e) {
          if (!_this2._touchStartPos) return;
          var start = _this2._touchStartPos;
          var end = e.getLocation();
          _this2._touchStartPos = null;
          e.stopPropagation();
          var dx = end.x - start.x;
          var dy = end.y - start.y;
          var length = Math.sqrt(dx * dx + dy * dy);
          var verticalSwipe = Math.abs(dy) > Math.abs(dx);
          if (length < _this2._swipeMinLength) return;
          verticalSwipe && dy > 0 || verticalSwipe || !verticalSwipe && dx > 0 || !verticalSwipe && dx < 0;
        });
      },
      swipe: function swipe() {
        var _this3 = this;
        this.swipeLeft.node.on("touchcancel", function(e) {
          _this3.fade.node.runAction(cc.sequence(cc.fadeIn(.05), cc.delayTime(.01), cc.fadeOut(.05)));
          _this3.subtractMonth();
        });
        this.swipeRight.node.on("touchcancel", function(e) {
          _this3.fade.node.runAction(cc.sequence(cc.fadeIn(.05), cc.delayTime(.01), cc.fadeOut(.05)));
          _this3.addMonth();
        });
      },
      start: function start() {
        self = this;
        this.init();
        this.swapCounter = 0;
        this.previousCounter = 0;
        this.swap = [ this.trainingMode, this.planMode, this.diaryMode ];
        self.daySprites = [];
        self.emojiSprites = [];
        self.calendarBackground = [];
        self.calendarRightButtons = [];
        self.calendarLeftButtons = [];
        this.addListenerDates();
        var date = new Date();
        this.yearCounter = date.getFullYear();
        this.monthCounter = date.getMonth() + 1;
        this.backgroundCounter = date.getMonth();
        this.loadEmojiSprites();
        this.loadCalendarResources();
        this.loadCalendarBackgrounds();
        this.loadCalendarButtonsBackground();
        this.spawnEmojis();
        this.showCalendarData();
        this.swapCalendar();
        this.node.on("reset-calendar", this.reset);
        this.energyMapPanel.active = false;
        this.plan = [];
        this.swipe();
      },
      saveDiaryData: function saveDiaryData() {
        var date = this.getClickedDate();
        var tempDiary = Diary.getTempDiary(date);
        Diary.saveTempDiary();
        Note.saveDiaryID(date, tempDiary.id);
      },
      clearDiaryUI: function clearDiaryUI() {
        var defaultData = Diary.getDefaultData();
        this.lblType.string = defaultData.type;
        this.lblMood.string = defaultData.mood;
        this.lblWhoWhat.string = defaultData.whowhat;
      },
      initNoteList: function initNoteList() {
        var _max = this.getMaxDay(this.monthCounter, this.yearCounter);
        var calendarDays = calendar().of(this.yearCounter, this.monthCounter - 1).calendar;
        var key = "";
        this.monthCounter < 10 && (key += "0");
        key += this.monthCounter + "/" + this.yearCounter;
        Note.createNoteList(key, _max, calendarDays);
      },
      showChoseType: function showChoseType() {
        var date = this.getClickedDate();
        var temp = Diary.getTempDiary(date);
        this.lblType.string = temp.type;
      },
      showChoseMood: function showChoseMood() {
        var date = this.getClickedDate();
        var temp = Diary.getTempDiary(date);
        this.lblMood.string = temp.mood;
      },
      showChoseWhoWhat: function showChoseWhoWhat() {
        var date = this.getClickedDate();
        var temp = Diary.getTempDiary(date);
        this.lblWhoWhat.string = temp.whoWhat;
      },
      spawnEmojis: function spawnEmojis() {
        for (var i = 0; i < this.midDateChildren.length; i++) {
          console.log("I" + i);
          var dateObject = this.trainingDateChildren[i];
          dateObject.getChildByName("Background").addComponent("SpawnEmojis");
          self.num = i;
          var dateObject2 = this.diaryDateChildren[i];
          dateObject2.getChildByName("Background").addComponent("SpawnSurprise");
        }
        this.hideEmojis(this.trainingDateChildren);
        this.hideEmojis(this.diaryDateChildren);
      },
      hideAllPanels: function hideAllPanels() {
        this.notePanel.active = false;
        this.midBackground.active = false;
        this.diaryPanel.active = false;
      },
      getClickedDate: function getClickedDate() {
        var dd = this.currentDay.toString().padStart(2, "0");
        var mm = this.monthCounter.toString().padStart(2, "0");
        var yyyy = this.yearCounter;
        var today = dd + "/" + mm + "/" + yyyy;
        console.log("getClickedDate : " + today);
        return today;
      },
      assignToUIManager: function assignToUIManager(date) {
        this.UIManager.date = date;
      },
      saveDiaryMood: function saveDiaryMood(event) {
        var moodIndex = parseInt(event.currentTarget.myParam);
        var date = this.getClickedDate();
        var temp = Diary.getTempDiary(date);
        temp.mood = Diary.getMoodByIndex(moodIndex);
      },
      saveDiaryType: function saveDiaryType(event) {
        var typeIndex = parseInt(event.currentTarget.myParam);
        var date = this.getClickedDate();
        var temp = Diary.getTempDiary(date);
        temp.type = Diary.getTypeByIndex(typeIndex);
      },
      saveDiaryWhoWhat: function saveDiaryWhoWhat(event) {
        var whowhatIndex = parseInt(event.currentTarget.myParam);
        var date = this.getClickedDate();
        var temp = Diary.getTempDiary(date);
        temp.whoWhat = Diary.getWhoWhatByIndex(whowhatIndex);
      },
      saveDiaryEDB: function saveDiaryEDB() {
        var date = this.getClickedDate();
        var _diary = Diary.getDiaryByDate(date);
        null == _diary && (_diary = Diary.getNewDiary(date));
        _diary.detail = this.edbDiary.string;
      },
      reset: function reset() {
        self.hideAllPanels();
        self.midBackground.active = true;
        self.btnSwap.interactable = true;
        self.showCalendarData();
      },
      showNotePanel: function showNotePanel() {
        var clickedDate = this.getClickedDate();
        var key = "";
        this.monthCounter < 10 && (key += "0");
        key += this.monthCounter + "/" + this.yearCounter;
        var resultNoteList = Note.getNoteListByKey(key);
        var counter = 0;
        var value = [];
        if (null == resultNoteList) {
          this.initNoteList();
          resultNoteList = Note.getNoteListByKey(key);
        }
        var counter = 0;
        var calendarDays = calendar().of(this.yearCounter, this.monthCounter - 1).calendar;
        for (var i = 0; i < calendarDays.length; i++) for (var j = 0; j < calendarDays[i].length; j++) {
          var value = calendarDays[i][j];
          if (0 != value && clickedDate == resultNoteList[counter].date) {
            var gameId = resultNoteList[counter].gameID;
            var gameType = MiniGame.getGameByID(gameId);
            if (null == gameType) {
              this.lblStability.string = "00:00";
              this.lblBreath.string = "00:00";
            } else {
              if (null != gameType.stability) {
                console.log("GAME TYPE STABLILITY " + gameType.stability);
                var stabilityMinute = Math.floor(gameType.stability / 60);
                var stabilitySecond = gameType.stability - 60 * stabilityMinute;
                this.lblStability.string = stabilityMinute < 10 && stabilitySecond < 10 ? "0" + stabilityMinute + ":0" + stabilitySecond : stabilityMinute + ":" + stabilitySecond;
              } else {
                console.log("Ma shi bu");
                this.lblStability.string = "00:00";
              }
              if (null != gameType.breath) {
                var breathMinute = Math.floor(gameType.breath / 60);
                var breathSecond = gameType.breath - 60 * breathMinute;
                console.log("breathMinute " + breathMinute);
                console.log("breathSecond " + breathSecond);
                this.lblBreath.string = breathMinute < 10 && breathSecond < 10 ? "0" + breathMinute + ":0" + breathSecond : breathMinute + ":" + breathSecond;
              } else this.lblBreath.string = "00:00";
            }
          }
          counter++;
        }
        self.notePanel.active = true;
        this.lblDayMonthNote.string = this.currentDay + "/" + this.monthCounter;
        var date = this.getClickedDate();
        this.assignToUIManager(date);
        var _diary = Diary.getDiaryByDate(date);
        var output = "";
        output = null == _diary ? "Not Written Yet" : _diary.type + " / " + _diary.mood + " / " + _diary.whoWhat;
        this.lblDiary.string = output;
        var _ach = Achievement.getAchievementByDate(date);
        this.achList = Achievement.achievementList;
        "" == _ach;
        "null" == _ach;
        for (var i = 0; i < this.achList.length; i++) this.lblAch.string = null == _ach ? "Nothing" : _ach.name + " + " + _ach.point;
        this.notePanel.active ? this.btnSwap.interactable = false : this.btnSwap.interactable = true;
      },
      clearUI: function clearUI() {
        var counter = 0;
        for (var i = 0; i < this.midDateChildren.length; i++) {
          this.midDateChildren[i].getChildByName("Background").getComponent(cc.Sprite).spriteFrame = null;
          counter++;
        }
      },
      initDateLabels: function initDateLabels() {},
      addListenerDates: function addListenerDates() {
        for (var i = 0; i < this.dates.length; i++) {
          this.dates[i].on("showNote", this.showNotePanel, this);
          this.dates[i].addComponent("Day");
        }
      },
      addDay: function addDay() {
        this.currentDay++;
        this.max = this.getMaxDay(this.monthCounter, this.yearCounter);
        if (this.currentDay > this.max) {
          this.monthCounter++;
          if (this.monthCounter > 12) {
            this.monthCounter = 1;
            this.yearCounter++;
          }
          this.currentDay = 1;
        }
        this.lblDayMonthNote.string = this.currentDay + "/" + this.monthCounter;
      },
      subDay: function subDay() {
        this.currentDay--;
        if (this.currentDay < 1) {
          this.monthCounter--;
          if (this.monthCounter < 1) {
            this.monthCounter = 12;
            this.yearCounter--;
          }
          this.max = this.getMaxDay(this.monthCounter, this.yearCounter);
          this.currentDay = this.max;
        }
        this.lblDayMonthNote.string = this.currentDay + "/" + this.monthCounter;
      },
      addMonth: function addMonth() {
        this.monthCounter++;
        this.backgroundCounter++;
        this.showCalendarData();
      },
      subtractMonth: function subtractMonth() {
        this.monthCounter--;
        this.backgroundCounter--;
        this.showCalendarData();
      },
      showCalendarData: function showCalendarData() {
        this.clearGraphics();
        this.background.spriteFrame = null;
        this.monthCounter > 12 ? this.addYearCounter() : this.monthCounter < 1 && this.subYearCounter();
        if (this.backgroundCounter > 11) this.backgroundCounter = 0; else if (this.backgroundCounter < 0) this.backgroundCounter = 11; else {
          this.btnRightMonth.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = self.calendarRightButtons[this.backgroundCounter];
          this.btnLeftMonth.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = self.calendarLeftButtons[this.backgroundCounter];
          this.background.spriteFrame = self.calendarBackground[this.backgroundCounter];
        }
        this.clearUI();
        this.resetDateButtons();
        var key = "";
        this.monthCounter < 10 && (key += "0");
        key += this.monthCounter + "/" + this.yearCounter;
        var resultNoteList = Note.getNoteListByKey(key);
        if (null == resultNoteList) {
          this.initNoteList();
          resultNoteList = Note.getNoteListByKey(key);
        }
        var counter = 0;
        var calendarDays = calendar().of(this.yearCounter, this.monthCounter - 1).calendar;
        this.max = this.getMaxDay(this.monthCounter, this.yearCounter);
        self.calendarCounter = 0;
        self.calendarBlankCounter = 0;
        for (var i = 0; i < calendarDays.length; i++) for (var j = 0; j < calendarDays[i].length; j++) {
          var value = calendarDays[i][j];
          if (0 != value) {
            this.dates[counter].getComponent(cc.Button).interactable = true;
            this.dates[counter].name = value.toString();
            this.midDateChildren[counter].getChildByName("Background").getComponent(cc.Sprite).spriteFrame = self.daySprites[self.calendarCounter];
            self.calendarCounter++;
            var planID = resultNoteList[counter].planID;
            for (var l = 0; l < planID.length; l++) if (planID[l]) {
              var color = PowerLevel.getColorByIndex(l);
              0 == l ? this.drawPlanFirstLine(counter, color) : 1 == l ? this.drawPlanSecondLine(counter, color) : 2 == l ? this.drawPlanThirdLine(counter, color) : console.log("CANT DRAW");
            }
            var id = resultNoteList[counter].diaryID;
            if ("" != id) {
              var _diary = Diary.getDiaryByID(id);
              if (null != _diary) {
                var moodIndex = Diary.getMoodIndexByName(_diary.mood);
                this.showEmojisSprites(this.diaryDateChildren[counter], moodIndex);
              }
            }
            var id = resultNoteList[counter].gameID;
            if ("" != id) {
              var _game = MiniGame.getGameByID(id);
              var emojis = this.trainingDateChildren[counter].getChildByName("Background").children;
              if (id == _game.id) {
                0 != _game.stability && (emojis[0].active = true);
                _game.phone && (emojis[1].active = true);
                _game.eyeMovement && (emojis[2].active = true);
                0 != _game.breath && (emojis[3].active = true);
                if (0 == _game.stability && false == _game.phone && false == _game.eyeMovement && 0 == _game.breath) for (var l = 0; l < emojis.length; l++) {
                  var child = emojis[l];
                  child.active = false;
                }
              }
            }
          }
          counter++;
        }
        this.addListenerDates();
      },
      loadEmojiSprites: function loadEmojiSprites() {
        cc.loader.loadResDir("images/emojis", cc.SpriteFrame, function(err, assets) {
          self.emojiSprites = assets;
        });
      },
      loadCalendarResources: function loadCalendarResources() {
        cc.loader.loadResDir("images/calendar/num", cc.SpriteFrame, function(err, assets) {
          self.daySprites = assets;
        });
      },
      loadCalendarBackgrounds: function loadCalendarBackgrounds() {
        cc.loader.loadResDir("images/calendar/background", cc.SpriteFrame, function(err, assets) {
          self.calendarBackground = assets;
        });
      },
      loadCalendarButtonsBackground: function loadCalendarButtonsBackground() {
        cc.loader.loadResDir("images/calendar/rightCalendarButtons", cc.SpriteFrame, function(err, assets) {
          self.calendarRightButtons = assets;
        });
        cc.loader.loadResDir("images/calendar/leftCalendarButtons", cc.SpriteFrame, function(err, assets) {
          self.calendarLeftButtons = assets;
        });
      },
      checkEmojis: function checkEmojis(dateObject) {
        var emojis = dateObject.getChildByName("Background").children;
        for (var l = 0; l < emojis.length; l++) {
          var child = emojis[l];
          child.active = true;
        }
      },
      showEmojisSprites: function showEmojisSprites(dateObject, moodIndex) {
        var emojis = dateObject.getChildByName("Background").children;
        for (var l = 0; l < emojis.length; l++) {
          var child = emojis[l];
          child.getComponent(cc.Sprite).spriteFrame = this.emojiSprites[moodIndex];
          child.active = true;
        }
      },
      hideEmojis: function hideEmojis(list) {
        for (var i = 0; i < list.length; i++) {
          var dateObject = list[i].getChildByName("Background").children;
          var emojis = dateObject;
          for (var l = 0; l < emojis.length; l++) {
            var child = emojis[l];
            child.active = false;
          }
        }
      },
      hideEmojisTest: function hideEmojisTest(list) {
        for (var i = 0; i < list.length; i++) {
          var dateObject = list[i].getChildByName("Background").children;
          var emojis = dateObject;
          for (var l = 0; l < emojis.length; l++) {
            var child = emojis[l];
            child.active = false;
          }
        }
      },
      getMaxDay: function getMaxDay(monthIndex, yearIndex) {
        var calendarDays = calendar().of(yearIndex, monthIndex - 1).calendar;
        var _max = 0;
        for (var i = 0; i < calendarDays.length; i++) for (var j = 0; j < calendarDays[i].length; j++) calendarDays[i][j] > _max && (_max = calendarDays[i][j]);
        return _max;
      },
      resetDateButtons: function resetDateButtons() {
        for (var i = 0; i < this.dates.length; i++) this.dates[i].getComponent(cc.Button).interactable = false;
        this.hideEmojis(this.trainingDateChildren);
        this.hideEmojis(this.diaryDateChildren);
      },
      addYearCounter: function addYearCounter() {
        this.yearCounter += 1;
        this.monthCounter = 1;
        this.showCalendarData();
      },
      subYearCounter: function subYearCounter() {
        this.yearCounter--;
        this.monthCounter = 12;
        this.showCalendarData();
      },
      showDiaryPanel: function showDiaryPanel() {
        this.UIManager.zoomEffect(this.btnDiary.node);
        this.hideAllPanels();
        this.diaryPanel.active = true;
        this.hideCalenderModes();
        this.lblDate.string = "";
        var date = this.getClickedDate();
        var diary = Diary.getDiaryByDate(date);
        if (null != diary && diary.date == date) {
          this.lblType.string = diary.type;
          this.lblMood.string = diary.mood;
          this.lblWhoWhat.string = diary.whoWhat;
        }
        this.diaryPanel.active ? this.btnSwap.interactable = false : this.btnSwap.interactable = true;
      },
      showMoodPanel: function showMoodPanel() {
        this.UIManager.zoomEffect(this.btnMood.node);
        this.moodPanel.active = !this.moodPanel.active;
        true == this.typePanel.active ? this.typePanel.active = false : true == this.whoWhatPanel.active && (this.whoWhatPanel.active = false);
      },
      showWhoWhatPanel: function showWhoWhatPanel() {
        this.UIManager.zoomEffect(this.btnWhoWhat.node);
        this.whoWhatPanel.active = !this.whoWhatPanel.active;
        true == this.typePanel.active ? this.typePanel.active = false : true == this.moodPanel.active && (this.moodPanel.active = false);
      },
      showTypePanel: function showTypePanel() {
        this.UIManager.zoomEffect(this.btnType.node);
        this.typePanel.active = !this.typePanel.active;
        true == this.whoWhatPanel.active ? this.whoWhatPanel.active = false : true == this.moodPanel.active && (this.moodPanel.active = false);
      },
      swapCalendar: function swapCalendar() {
        this.hideCalenderModes();
        this.previousCounter = this.swapCounter;
        this.swapCounter > 2 && (this.swapCounter = 0);
        0 == this.swapCounter ? this.btnSwap.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "\u4fee\u7df4" : 1 == this.swapCounter ? this.btnSwap.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "\u4efb\u52d9" : 2 == this.swapCounter && (this.btnSwap.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "\u65e5\u66c6");
        this.swap[this.swapCounter].active = true;
        this.swapCounter++;
      },
      saveCalendar: function saveCalendar() {
        this.hideCalenderModes();
        this.swap[this.previousCounter].active = true;
      },
      hideCalenderModes: function hideCalenderModes() {
        for (var i = 0; i < this.swap.length; i++) this.swap[i].active = false;
      },
      showPlanMode: function showPlanMode() {
        var _planList = Plan.getPlanList();
        var _plan;
        for (var i = 0; i < _planList.length; i++) _plan = _planList[i];
      },
      showDiaryMode: function showDiaryMode() {
        var _diaryList = Diary.getDiaryList();
        var _diary;
        for (var i = 0; i < _diaryList.length; i++) _diary = _diaryList[i];
      },
      getTodayDate: function getTodayDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0");
        var yyyy = today.getFullYear();
        today = dd + "/" + mm + "/" + yyyy;
        return today;
      },
      savePlanData: function savePlanData() {
        var date = this.getTodayDate();
        var alarmTime = this.lblHour.string + ":" + this.lblMin.string;
        var soundNoti = this.tglSoundNoti.isChecked;
        var discription = this.edbPlanDiscription.string;
        var _plan = Plan.getPlanByDate(date);
        if (null == _plan || null != _plan) {
          _plan = Plan.getNewPlan(date);
          console.log("PLAN NEW PLAN " + _plan.id);
          _plan.date = date;
          _plan.alarmTime = alarmTime;
          _plan.discription = discription;
          _plan.soundNoti = soundNoti;
        }
        Note.savePlanID(date, _plan.id);
        var _note = Note.getNoteByDate(date);
        _note.planID = _plan.id;
        self.planItems = [];
        self.items = [];
        var planList = Plan.getAllPlans();
        var plans = Plan.getAllPlans();
        self.plan.push(self.lblTitle.string);
        1 == plans ? self.lblPlan.string = self.plan[0] : 2 == plans ? self.lblPlan.string = self.plan[0] + " / " + self.plan[1] : 3 == plans && (self.lblPlan.string = self.plan[0] + " / " + self.plan[1] + " / " + self.plan[2]);
        cc.loader.loadRes("prefabs/plan", cc.Prefab, function(err, prefab) {
          for (var i = 0; i < planList; i++) {
            (planList = 2) ? planList -= 1 : (planList = 3) && (planList -= 2);
            if (self.planNode.children.length < 3) {
              self.planItems.push(cc.instantiate(prefab));
              self.planNode.addChild(self.planItems[i]);
              self.items.push(_plan.discription);
              self.planItems[i].getChildByName("New Sprite(Splash)").getChildByName("New Label").getComponent(cc.Label).string = self.items[i];
              self.createEmojis(self.planItems[i]);
            }
          }
        });
      },
      createEmojis: function createEmojis(val) {
        cc.loader.loadResDir("images/emojis", cc.SpriteFrame, function(err, assets) {
          for (var j = 0; j < assets.length; j++) {
            console.log("VAL " + val.name);
            val.getChildByName("emojis").children[j].getComponent(cc.Sprite).spriteFrame = assets[j];
          }
        });
      },
      clearGraphics: function clearGraphics() {
        for (var i = 0; i < this.planDateChildren.length; i++) this.planDateChildren[i].getChildByName("Background").getComponent(cc.Graphics).clear();
      },
      drawPlanFirstLine: function drawPlanFirstLine(counter, color) {
        var ctx = this.planDateChildren[counter].getChildByName("Background").getComponent(cc.Graphics);
        ctx.lineWidth = 6;
        ctx.moveTo(-70, 100);
        ctx.lineTo(82, 100);
        ctx.strokeColor = new cc.Color().fromHEX(color);
        ctx.stroke();
      },
      drawPlanSecondLine: function drawPlanSecondLine(counter, color) {
        var ctx = this.planDateChildren[counter].getChildByName("Background").getComponent(cc.Graphics);
        ctx.moveTo(-70, 8);
        ctx.lineTo(82, 8);
        ctx.strokeColor = new cc.Color().fromHEX(color);
        ctx.stroke();
      },
      drawPlanThirdLine: function drawPlanThirdLine(counter, color) {
        var ctx = this.planDateChildren[counter].getChildByName("Background").getComponent(cc.Graphics);
        ctx.moveTo(-70, -72.5);
        ctx.lineTo(82, -72.5);
        ctx.strokeColor = new cc.Color().fromHEX(color);
        ctx.stroke();
      },
      changeButterfly: function changeButterfly(timer) {
        cc.loader.loadRes("images/Peanut", cc.SpriteFrame, function(err, asset) {
          self.peanut = asset;
        });
        this.intervalEmoji = setInterval(function() {
          timer--;
          console.log("SECS " + timer);
          timer <= 0 && clearInterval(self.intervalEmoji);
          590 == timer && console.log("HOLY MOLY");
          if (290 == timer) {
            for (var i = 0; i < self.num; i++) self.trainingDateChildren[i].getChildByName("Background").children[0].getComponent(cc.Sprite).spriteFrame = self.peanut;
            clearInterval(self.intervalEmoji);
          }
        }, 1e3);
      }
    });
    cc._RF.pop();
  }, {
    "./models/Achievement": "Achievement",
    "./models/Diary": "Diary",
    "./models/MiniGame": "MiniGame",
    "./models/Note": "Note",
    "./models/Plan": "Plan",
    "./models/PowerLevel": "PowerLevel",
    "calendar-js": 15,
    console: 5
  } ],
  ChapterController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a73e3L6t4BCV5W8mmP/yEQA", "ChapterController");
    "use strict";
    var clickedButtonID = "";
    var self;
    cc.Class({
      extends: cc.Component,
      properties: {},
      init: function init() {
        var _this = this;
        this.BookOverviewManager = cc.find("Canvas").getComponent("BookOverviewManager");
        this.UIManager = cc.find("Canvas").getComponent("UIManager");
        this.BookInfoManager = cc.find("Canvas").getComponent("BookInfoManager");
        this.lblNumber = this.node.getChildByName("lbl_number").getComponent(cc.Label);
        this.button = this.node.getChildByName("button").getComponent(cc.Button);
        this.lblButton = this.button.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        this.button.node.on("touchend", function() {
          clickedButtonID = _this.node.name;
          console.log("touchend-----------");
          _this.UIManager.zoomEffect(_this.button.node);
          if ("\u95b1\u8b80" == _this.lblButton.string) {
            _this.UIManager.hideBookInfo();
            _this.UIManager.showChapterContent();
          } else _this.UIManager.showPurchasePanel();
        }, this);
      },
      initValues: function initValues() {
        var num = parseInt(this.node.name[this.node.name.length - 1]) + 1;
        this.lblNumber.string = num.toString();
      },
      onLoad: function onLoad() {
        self = this;
        this.init();
        this.initValues();
      },
      start: function start() {
        var _this2 = this;
        cc.game.on("specialEvent", function(eventData) {
          clickedButtonID == _this2.node.name && _this2.onPurchasedChapter(_this2.node.name, _this2.lblButton);
        });
      },
      onPurchasedChapter: function onPurchasedChapter(ID, label) {
        ID == clickedButtonID && (label.string = "\u95b1\u8b80");
        var index = this.BookInfoManager.currentContainer;
        CONST.POWER_LEVEL_ITEMS[index] = CONST.POWER_LEVEL_ITEMS[index] + 1;
        console.log("++ " + CONST.POWER_LEVEL_ITEMS[index] + ", " + index);
        this.BookOverviewManager.showFlowers(index);
        this.BookOverviewManager.refreshLblButtonPLList(index);
      }
    });
    cc._RF.pop();
  }, {} ],
  Chapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e26dd1PFVFGFJVfAKTude4C", "Chapter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var Chapter = function() {
      var instance;
      function init() {
        var chapter = {
          status: ""
        };
        var chapList = [];
        return {};
      }
      return {
        getInstance: function getInstance() {
          instance || (instance = init());
          return instance;
        }
      };
    }();
    var instance = Chapter.getInstance();
    var _default = instance;
    exports["default"] = _default;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  ClassController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5125Gav6tM94gYbJf8sVIb", "ClassController");
    "use strict";
    var Class = require("./models/Class");
    var Tutor = require("./models/Tutor");
    var self;
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        self = this;
        self.UIManager = cc.find("Canvas").getComponent("UIManager");
        self.classList = Class.classList;
        var itemNode = cc.find(CLASS_INFO.BTN_TUTOR_LIST);
        this.lblClassName = cc.find(TUTOR_INFO.LBL_CLASS_NAME).getComponent(cc.Label);
        this.lblTutorName = cc.find(TUTOR_INFO.LBL_TUTOR_NAME).getComponent(cc.Label);
        this.lblClassContent = cc.find(TUTOR_INFO.LBL_CLASS_CONTENT).getComponent(cc.Label);
        this.lblDiscount = cc.find(TUTOR_INFO.LBL_DISCOUNT).getComponent(cc.Label);
        this.lblLink = cc.find(TUTOR_INFO.LBL_LINK).getComponent(cc.Label);
        this.lblTime = cc.find(TUTOR_INFO.LBL_TIME).getComponent(cc.Label);
        this.lblLocation = cc.find(TUTOR_INFO.LBL_LOCATION).getComponent(cc.Label);
        var items = [];
        cc.loader.loadRes("prefabs/tutorItem", cc.Prefab, function(err, prefab) {
          for (var i = 0; i < self.classList.length; i++) {
            items.push(cc.instantiate(prefab));
            itemNode.addChild(items[i]);
            true == self.classList[i].discount ? items[i].getChildByName("discount").active = true : items[i].getChildByName("discount").active = false;
            items[i].getChildByName("btn_tutor").myParam = [ self.classList[i].tutorID, self.classList[i].className, self.classList[i].classContent, self.classList[i].discount, self.classList[i].link, self.classList[i].time, self.classList[i].location ];
            items[i].getChildByName("lbl_number").getComponent(cc.Label).string = i + 1;
            items[i].getChildByName("lbl_class_name").getComponent(cc.Label).string = self.classList[i].className;
          }
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    "./models/Class": "Class",
    "./models/Tutor": "Tutor"
  } ],
  Class: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ebb06iQ+itHuKgz/Mhforn1", "Class");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    var Class = function() {
      var instance;
      function init() {
        var classObject = {
          id: "",
          num: 0,
          className: "",
          classContent: "",
          link: "",
          time: "00:00:00",
          location: "",
          discount: false,
          tutorID: ""
        };
        var classList = [ {
          id: "_ujb60lwpi",
          num: 2,
          className: "Class A",
          classContent: "Class A => What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
          link: "https://www.google.com/",
          time: "14:00:00",
          location: "2203 Marina Dr, Clifton Park, NY, 12065",
          discount: true,
          tutorID: "_vjb60lwpi"
        }, _defineProperty({
          id: "_ujb60lwpj",
          tutorID: "",
          num: 5,
          className: "Class B",
          classContent: "Class B => What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
          link: "https://www.facebook.com/",
          time: "15:00:00",
          location: "2203 Marina Dr, Clifton Park, NY, 12065",
          discount: false
        }, "tutorID", "_vjb60lwpi"), {
          id: "_ujb60lwpk",
          num: 7,
          className: "Class C",
          classContent: "Class C => What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
          link: "https://www.youtube.com/",
          time: "16:00:00",
          location: "2203 Marina Dr, Clifton Park, NY, 12065",
          discount: true,
          tutorID: "_vjb60lwpk"
        }, {
          id: "_ujb60lwpl",
          num: 8,
          className: "Class D",
          classContent: "Class D => What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
          link: "https://www.instagram.com/",
          time: "17:00:00",
          location: "2203 Marina Dr, Clifton Park, NY, 12065",
          discount: true,
          tutorID: "_vjb60lwpk"
        }, {
          id: "_ujb60lwpm",
          num: 9,
          className: "Class E",
          classContent: "Class E => What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
          link: "https://developers.facebook.com/",
          time: "08:00:00",
          location: "2203 Marina Dr, Clifton Park, NY, 12065",
          discount: false,
          tutorID: "_vjb60lwpm"
        }, {
          id: "_ujb60lwpn",
          num: 11,
          className: "Class F",
          classContent: "Class F => What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
          link: "https://www.lipsum.com/",
          time: "09:00:00",
          location: "2203 Marina Dr, Clifton Park, NY, 12065",
          discount: true,
          tutorID: "_vjb60lwpm"
        }, {
          id: "_ujb60lwpo",
          num: 13,
          className: "Class G",
          classContent: "Class G => What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
          link: "https://www.lipsum.com/",
          time: "10:00:00",
          location: "2203 Marina Dr, Clifton Park, NY, 12065",
          discount: false,
          tutorID: "_vjb60lwpo"
        }, {
          id: "_ujb60lwpp",
          num: 16,
          className: "Class H",
          classContent: "Class H => What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
          link: "https://docs.cocos.com/",
          time: "11:00:00",
          location: "2203 Marina Dr, Clifton Park, NY, 12065",
          discount: true,
          tutorID: "_vjb60lwpo"
        } ];
        return {
          get classList() {
            return classList;
          },
          getClassByID: function getClassByID(id) {
            var _class;
            for (var i = 0; i < classList.length; i++) {
              _class = classList[i];
              if (id == _class.id) return _class;
            }
            console.log("Class Not Found!");
            return null;
          }
        };
      }
      return {
        getInstance: function getInstance() {
          instance || (instance = init());
          return instance;
        }
      };
    }();
    var instance = Class.getInstance();
    var _default = instance;
    exports["default"] = _default;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  Day: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b06dbFLO/9DorDoIiL9hh0T", "Day");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        this.UIManager = cc.find("Canvas").getComponent("UIManager");
        this.Calendar = cc.find("Canvas").getComponent("Calendar");
        this.node.on("click", this.onClick, this);
      },
      onClick: function onClick(event) {
        console.log("clicked => " + this.node.name);
        this.UIManager.zoomEffect(this.node);
        this.Calendar.currentDay = this.node.name;
        this.node.dispatchEvent(new cc.Event.EventCustom("showNote", true));
      }
    });
    cc._RF.pop();
  }, {} ],
  Diary: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d0748ogDVMIpayS8wCspLy", "Diary");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var Diary = function() {
      var instance;
      function init() {
        var types = [ "express", "complain", "self reflect" ];
        var moods = [ "happy", "fear", "anger", "sadness", "joy", "surprise" ];
        var whowhats = [ "\u4eba", "\u7269", "\u7269" ];
        var diary = {
          id: "",
          type: "",
          mood: "",
          whoWhat: "",
          date: "",
          detail: ""
        };
        var diaryList = [];
        var tempDiary = null;
        return {
          getLength: function getLength() {
            return diaryList.length;
          },
          getDiaryList: function getDiaryList() {
            return diaryList;
          },
          getDiaryByDate: function getDiaryByDate(date) {
            var _diary;
            for (var i = 0; i < diaryList.length; i++) {
              _diary = diaryList[i];
              if (date == _diary.date) return _diary;
            }
            return null;
          },
          getDiaryByID: function getDiaryByID(id) {
            var _diary;
            for (var i = 0; i < diaryList.length; i++) {
              _diary = diaryList[i];
              if (id == _diary.id) return _diary;
            }
            return null;
          },
          getNewDiary: function getNewDiary(date) {
            var _diary = {
              id: "",
              type: "",
              mood: "",
              whoWhat: "",
              date: "",
              detail: ""
            };
            _diary.id = this.getRandomID(diaryList);
            _diary.date = date;
            return _diary;
          },
          getMoodIndexByName: function getMoodIndexByName(name) {
            for (var i = 0; i < moods.length; i++) if (name == moods[i]) return i;
            return -1;
          },
          getMoodByIndex: function getMoodByIndex(index) {
            return moods[index];
          },
          getTypeByIndex: function getTypeByIndex(index) {
            return types[index];
          },
          getWhoWhatByIndex: function getWhoWhatByIndex(index) {
            return whowhats[index];
          },
          addDiary: function addDiary(diary) {
            diaryList.push(diary);
            this.showDiaryData(diary);
          },
          getTempDiary: function getTempDiary(date) {
            if (null != tempDiary && tempDiary.date == date) return tempDiary;
            tempDiary = this.getNewDiary(date);
            return tempDiary;
          },
          saveTempDiary: function saveTempDiary() {
            this.showDiaryData(tempDiary);
            this.addDiary(tempDiary);
          },
          showDiaryData: function showDiaryData(diary) {},
          getRandomID: function getRandomID(list) {
            var counter = 0;
            var isDuplicate = false;
            var id = "_" + Math.random().toString(36).substr(2, 9);
            while (0 != list.length && counter < list.length) {
              if (id == list[counter].id) {
                isDuplicate = true;
                id = "_" + Math.random().toString(36).substr(2, 9);
              }
              counter++;
            }
            if (!isDuplicate) return id;
          }
        };
      }
      return {
        getInstance: function getInstance() {
          instance || (instance = init());
          return instance;
        }
      };
    }();
    var instance = Diary.getInstance();
    var _default = instance;
    exports["default"] = _default;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  Firebase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2761argucdGeL/m1Q2MMYfc", "Firebase");
    "use strict";
    var firebase = require("firebase/app");
    require("firebase/database");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var firebaseConfig = {
          apiKey: "AIzaSyBptKDL2uOfWqiu91hbmVVnWnR4Cm-9fmw",
          authDomain: "wakefunfirebase.firebaseapp.com",
          databaseURL: "https://wakefunfirebase.firebaseio.com",
          projectId: "wakefunfirebase",
          storageBucket: "wakefunfirebase.appspot.com",
          messagingSenderId: "691382627667",
          appId: "1:691382627667:web:8bdafc329bf4af1ba9c5a6",
          measurementId: "G-73RTGD5S3Z"
        };
        firebase.initializeApp(firebaseConfig);
      },
      start: function start() {},
      writeData: function writeData(path, jsonObject) {
        firebase.database().ref(path).set(jsonObject);
      }
    });
    cc._RF.pop();
  }, {
    "firebase/app": 22,
    "firebase/database": 23
  } ],
  FriendData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "624eeisaQhKAI0vLLBs1iTu", "FriendData");
    "use strict";
    var Friend = require("./models/Friend");
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        this.newFriends = Friend.newFriends;
        var index = parseInt(this.node.name);
        this.label = this.node.getChildByName("label").getComponent(cc.Label);
        this.label.string = this.newFriends[index].name;
        this.lblTitle = this.node.getChildByName("lbl_title").getComponent(cc.Label);
        this.lblTitle.string = this.newFriends[index].title;
        this.lblPoint = this.node.getChildByName("lbl_point").getComponent(cc.Label);
        this.lblPoint.string = this.newFriends[index].percentage + "%";
        this.flower = this.node.getChildByName("Flower");
        this.bud = this.node.getChildByName("Bud");
        if (this.newFriends[index].percentage >= 50) {
          this.flower.active = true;
          this.bud.active = false;
        } else {
          this.bud.active = true;
          this.flower.active = false;
        }
        this.btnFri = this.node.getChildByName("btn_@").getComponent(cc.Button);
      }
    });
    cc._RF.pop();
  }, {
    "./models/Friend": "Friend"
  } ],
  FriendManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b5867z4gcRJ+avbj9tvCWlj", "FriendManager");
    "use strict";
    var Friend = require("./models/Friend");
    var self;
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        self = this;
        this.friendContainer = cc.find(FRIEND_PANEL.FRI_CONTAINER);
        this.newFriends = Friend.newFriends;
        var _friend;
        for (var i = 0; i < this.newFriends.length; i++) cc.loader.loadRes("prefabs/Friend", cc.Prefab, function(err, prefab) {
          _friend = cc.instantiate(prefab);
          self.friendContainer.addChild(_friend);
          _friend.name = (self.friendContainer.children.length - 1).toString();
          _friend.addComponent("FriendData");
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    "./models/Friend": "Friend"
  } ],
  Friend: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec819cirdJIYJFCglkAmkbg", "Friend");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var Friend = function() {
      var instance;
      function init() {
        var friend = {
          id: "",
          name: "",
          title: "",
          badge: "",
          percentage: ""
        };
        var newFriends = [ {
          id: "_gjb60lwpu",
          name: "\u597d\u53cb\u540d\u7a31",
          title: "\u7a31\u865f",
          badge: "\u5fbd\u7ae0",
          percentage: 90
        }, {
          id: "_gjb60lwpi",
          name: "\u597d\u53cb\u540d\u7a31",
          title: "\u7a31\u865f",
          badge: "\u5fbd\u7ae0",
          percentage: 40
        }, {
          id: "_gjb60lwpo",
          name: "\u597d\u53cb\u540d\u7a31",
          title: "\u7a31\u865f",
          badge: "\u5fbd\u7ae0",
          percentage: 10
        }, {
          id: "_gjb60lwpp",
          name: "\u597d\u53cb\u540d\u7a31",
          title: "\u7a31\u865f",
          badge: "\u5fbd\u7ae0",
          percentage: 80
        }, {
          id: "_gjb60lwpq",
          name: "\u597d\u53cb\u540d\u7a31",
          title: "\u7a31\u865f",
          badge: "\u5fbd\u7ae0",
          percentage: 60
        }, {
          id: "_gjb60lwpw",
          name: "\u597d\u53cb\u540d\u7a31",
          title: "\u7a31\u865f",
          badge: "\u5fbd\u7ae0",
          percentage: 50
        }, {
          id: "_gjb60lwpe",
          name: "\u597d\u53cb\u540d\u7a31",
          title: "\u7a31\u865f",
          badge: "\u5fbd\u7ae0",
          percentage: 49
        } ];
        var myFriends = [];
        return {
          get newFriends() {
            return newFriends;
          },
          get myFriends() {
            return myFriends;
          },
          addFriend: function addFriend(value) {
            myFriends.push(value);
            this.showFriendData(value);
            console.log("My Friends : " + myFriends.length);
          },
          getNewFriendByDate: function getNewFriendByDate(date) {
            var _friend;
            for (var i = 0; i < newFriends.length; i++) {
              _friend = newFriends[i];
              if (date == _friend.date) return _friend;
            }
            return this.getNewFriend(date);
          },
          getNewFriend: function getNewFriend(date) {
            var _friend = friend;
            _friend.id = this.getRandomID(newFriends);
            _friend.date = date;
            this.addFriend(_friend);
            return _friend;
          },
          getRandomID: function getRandomID(list) {
            var counter = 0;
            var isDuplicate = false;
            var id = "_" + Math.random().toString(36).substr(2, 9);
            while (0 != list.length && counter < list.length) {
              if (id == list[counter].id) {
                isDuplicate = true;
                id = "_" + Math.random().toString(36).substr(2, 9);
              }
              counter++;
            }
            if (!isDuplicate) return id;
          },
          showFriendData: function showFriendData(friend) {
            console.log("Name : " + friend.name);
          }
        };
      }
      return {
        getInstance: function getInstance() {
          instance || (instance = init());
          return instance;
        }
      };
    }();
    var instance = Friend.getInstance();
    var _default = instance;
    exports["default"] = _default;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  GLOBALS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f708aONAXZPq4m0/tNzKd3T", "GLOBALS");
    "use strict";
    window.IMG_BACKGROUND = {
      IMG: "Canvas/img_background"
    };
    window.TOP_UI = {
      BTN_REWARD: "Canvas/TopUI/btn_reward",
      BTN_DISCOUNT: "Canvas/TopUI/btn_discount",
      BTN_CLASS_INFO: "Canvas/TopUI/btn_class_info",
      BTN_PROFILE_PIC: "Canvas/TopUI/btn_profile",
      LBL_TITLE: "Canvas/TopUI/Title/lbl_title",
      LBL_NAME: "Canvas/TopUI/lbl_name",
      IMG_PROFILE_PIC: "Canvas/TopUI/btn_profile/Background/Profile"
    };
    window.BOTTOM_UI = {
      BTN_RECORD: "Canvas/BottomUI/btnRecord",
      BTN_ACHIEVEMENT: "Canvas/BottomUI/btnAchievement",
      BTN_TRAIN: "Canvas/BottomUI/btnTrain",
      BTN_FRIEND: "Canvas/BottomUI/btnFriend",
      BTN_TICKET: "Canvas/BottomUI/btnTicket",
      BTN_BACK: "Canvas/BottomUI/back"
    };
    window.ACHIEVEMENT_PANEL = {
      SELF: "Canvas/Achievement",
      ACH_TYPE_DATA: "Canvas/Achievement/Head/type_data",
      ACH_BTN_TYPE: "Canvas/Achievement/Head/btn_type",
      ACH_REWARD_PANEL: "Canvas/Achievement/Ach_Reward",
      ACH_CONTAINER: "Canvas/Achievement/Body/scroll_achData/view/content",
      ACH_BODY: "Canvas/Achievement/Body/scroll_achData",
      BTN_TRAIN: "Canvas/Achievement/Head/type_data/btnTrain",
      BTN_READ: "Canvas/Achievement/Head/type_data/btnRead",
      BTN_RECORD: "Canvas/Achievement/Head/type_data/btnRecord",
      BTN_GAIN: "Canvas/Achievement/Head/type_data/btnGain",
      BTN_FRIEND: "Canvas/Achievement/Head/type_data/btnFriend"
    };
    window.FRIEND_PANEL = {
      SELF: "Canvas/Friend",
      FRI_CONTAINER: "Canvas/Friend/Body/scroll_friendData/view/content",
      BTN_ADD: "Canvas/Friend/Head/btn_ADD",
      ADD_FRI_PANEL: "Canvas/Friend/AddFriend",
      BTN_BACK: "Canvas/Friend/AddFriend/Head/btn_back"
    };
    window.TICKET_PANEL = {
      SELF: "Canvas/Ticket",
      SHARDS_PANEL: "Canvas/Ticket/Beans Part/Shards",
      BTN_SHARDS: "Canvas/Ticket/Beans Part/btn_shards",
      BTN_DRAW: "Canvas/Ticket/Beans Part/btn_draw",
      BEANS_PART: "Canvas/Ticket/Beans Part",
      PLANT_PART: "Canvas/Ticket/Plant Part",
      SHARDS: "Canvas/Ticket/Beans Part/Shards/shards",
      TICKET: "Canvas/Ticket/Beans Part/Shards/ticket",
      CUPON: "Canvas/Ticket/Beans Part/Shards/cupon",
      ARROW: "Canvas/Ticket/Beans Part/Shards/arrow",
      BTN_CASHOUT: "Canvas/Ticket/Beans Part/Shards/cupon/btn_cashout",
      CUPON_PANEL: "Canvas/Ticket/Beans Part/Shards/cuponPanel",
      BTN_SAVE: "Canvas/Ticket/Beans Part/Shards/cuponPanel/btn_save",
      BTN_DISCOUNT: "Canvas/Ticket/Beans Part/Shards/cuponPanel/btn_discount",
      DISCOUNT_LIST: "Canvas/Ticket/Beans Part/Shards/cuponPanel/discountList"
    };
    window.PROFILE_PIC = {
      SELF: "Canvas/ProfilePic",
      BTN_CHANGE_PROFILE_PIC: "Canvas/ProfilePic/btnChangePic",
      ABOUT_PROFILE_PIC: "Canvas/ProfilePic/ProfileData/Body/About",
      BTN_CHANGE_ID: "Canvas/ProfilePic/btnChangeID",
      BTN_CHANGE_TITLE: "Canvas/ProfilePic/btnChangeTitle",
      INPUT_FIELD: "Canvas/ProfilePic/Input",
      BTN_OK: "Canvas/ProfilePic/Input/btnOK",
      BTN_CANCEL: "Canvas/ProfilePic/Input/btnCancel",
      ID_EDITBOX: "Canvas/ProfilePic/Input/ID_EditBox",
      BTN_ABOUT: "Canvas/ProfilePic/ProfileData/Head/Panel/btnAbout",
      BTN_GOAL: "Canvas/ProfilePic/ProfileData/Head/Panel/btnGoal",
      ABOUT_PANEL: "Canvas/ProfilePic/ProfileData/Body/About",
      GOAL_PANEL: "Canvas/ProfilePic/ProfileData/Body/Goal",
      BTN_AGE: "Canvas/ProfilePic/ProfileData/Body/About/AboutData/btnAge",
      BTN_SEX: "Canvas/ProfilePic/ProfileData/Body/About/AboutData/btnSex",
      BTN_RELIGION: "Canvas/ProfilePic/ProfileData/Body/About/AboutData/btnReligion",
      AGE_PANEL: "Canvas/ProfilePic/ProfileData/Body/About/Age_Data",
      SEX_PANEL: "Canvas/ProfilePic/ProfileData/Body/About/Sex_Data",
      RELIGION_PANEL: "Canvas/ProfilePic/ProfileData/Body/About/Religion_Data",
      LBL_CHANGE_ID: "Canvas/ProfilePic/btnChangeID/Background/Label",
      EDB_CHANGE_TITLE: "Canvas/ProfilePic/editBoxChangeTitle",
      EDB_ABOUT_ME: "Canvas/ProfilePic/ProfileData/Body/About/edbAboutMe",
      EDB_GOAL: "Canvas/ProfilePic/ProfileData/Body/Goal/edbGoal",
      LBL_ACH_POINT: "Canvas/ProfilePic/btnAchPoint/Background/Label",
      BTN_ACH_POINT: "Canvas/ProfilePic/btnAchPoint",
      LBL_BADGE: "Canvas/ProfilePic/btnBadge/Background/Label",
      BTN_BAGE: "Canvas/ProfilePic/btnBadge",
      SCROLL_BADGE: "Canvas/ProfilePic/scrollBadge",
      BADGE_LIST: "Canvas/ProfilePic/scrollBadge/view/content",
      AGE_DATA_CONTAINER: "Canvas/ProfilePic/ProfileData/Body/About/Age_Data/view/content"
    };
    window.BOOK_OVERVIEW = {
      SELF: "Canvas/BookOverview",
      BTN_EBOOK: "Canvas/BookOverview/Flower/center_Ball",
      BTN_POWER_LEVEL_LIST: "Canvas/BookOverview/Flower/buttons",
      LEVEL_CONTENT: "Canvas/BookOverview/level_content",
      LBL_POWER_LEVEL_LIST: "Canvas/BookOverview/Flower/labels",
      INNER_FLOWERS: "Canvas/BookOverview/Flower/inner",
      OUTER_FLOWERS: "Canvas/BookOverview/Flower/outer",
      LBL_RED: "Canvas/BookOverview/lblRed",
      LBL_CYAN: "Canvas/BookOverview/lblCyan"
    };
    window.BOOK_INFO = {
      SELF: "Canvas/BookInfo",
      PURCHASE_PANEL: "Canvas/BookInfo/purchase_panel",
      BG_OVERLAY: "Canvas/BookInfo/purchase_panel/bg_overlay",
      BTN_COIN: "Canvas/BookInfo/purchase_panel/container/btn_coin",
      BTN_CUPON: "Canvas/BookInfo/purchase_panel/container/btn_cupon",
      BTN_TEST: "Canvas/BookInfo/content_panel/btn_test",
      LBL_TITLE: "Canvas/BookInfo/title_bar/lbl_title",
      CONTAINER: "Canvas/BookInfo/content_panel/container",
      BTN_ARROW_L: "Canvas/BookInfo/title_bar/btn_arrow_left",
      BTN_ARROW_R: "Canvas/BookInfo/title_bar/btn_arrow_right"
    };
    window.CLASS_INFO = {
      SELF: "Canvas/ClassInfo",
      BTN_SIGN_UP: "Canvas/ClassInfo/body/btn_sign_up",
      BTN_LEFT: "Canvas/ClassInfo/title/btn_left",
      BTN_RIGHT: "Canvas/ClassInfo/title/btn_right",
      BTN_TUTOR_LIST: "Canvas/ClassInfo/body/New ScrollView/view/content"
    };
    window.TUTOR_INFO = {
      SELF: "Canvas/TutorPanel",
      ARROW: "Canvas/TutorPanel/arrow",
      LBL_CLASS_NAME: "Canvas/TutorPanel/class_name/New Label",
      LBL_TUTOR_NAME: "Canvas/TutorPanel/tutor_name/New Label",
      LBL_CLASS_CONTENT: "Canvas/TutorPanel/mid_info/ClassContent/view/content/class_description",
      LBL_DISCOUNT: "Canvas/TutorPanel/mid_info/ClassContent/view/content/discount",
      LBL_LINK: "Canvas/TutorPanel/mid_info/Link/New Label",
      LBL_TIME: "Canvas/TutorPanel/mid_info/About_Me/time",
      LBL_LOCATION: "Canvas/TutorPanel/mid_info/About_Me/location"
    };
    window.CALENDAR_PANEL = {
      SELF: "Canvas/Calendar",
      BTN_SWAP: "Canvas/Calendar/btnSwap",
      BACKGROUND: "Canvas/Calendar/background",
      SWIPE_LEFT: "Canvas/Calendar/swipeLeft",
      SWIPE_RIGHT: "Canvas/Calendar/swipeRight",
      FADE_IN: "Canvas/Calendar/fadeIn",
      MID_BACKGROUND: {
        SELF: "Canvas/Calendar/mid_background",
        CONTENT_PANEL: "Canvas/Calendar/mid_background/view/content",
        BTN_RIGHT_MONTH: "Canvas/Calendar/mid_background/btn_right",
        BTN_LEFT_MONTH: "Canvas/Calendar/mid_background/btn_left",
        LBL_MONTH_MID: "Canvas/Calendar/mid_background/lbl_month",
        BTN_DAYS: "Canvas/Calendar/mid_background/button_container"
      },
      PLAN_MODE: {
        SELF: "Canvas/Calendar/planMode",
        BTN_RIGHT_MONTH: "Canvas/Calendar/planMode/btn_right",
        BTN_LEFT_MONTH: "Canvas/Calendar/planMode/btn_left",
        LBL_MONTH_MID: "Canvas/Calendar/planMode/lbl_month",
        BTN_DAYS: "Canvas/Calendar/planMode/button_container"
      },
      DIARY_MODE: {
        SELF: "Canvas/Calendar/diaryMode",
        BTN_RIGHT_MONTH: "Canvas/Calendar/diaryMode/btn_right",
        BTN_LEFT_MONTH: "Canvas/Calendar/diaryMode/btn_left",
        LBL_MONTH_MID: "Canvas/Calendar/diaryMode/lbl_month",
        BTN_DAYS: "Canvas/Calendar/diaryMode/button_container"
      },
      TRAINING_MODE: {
        SELF: "Canvas/Calendar/trainingMode",
        BTN_RIGHT_MONTH: "Canvas/Calendar/trainingMode/btn_right",
        BTN_LEFT_MONTH: "Canvas/Calendar/trainingMode/btn_left",
        LBL_MONTH_MID: "Canvas/Calendar/trainingMode/lbl_month",
        BTN_DAYS: "Canvas/Calendar/trainingMode/button_container"
      },
      DATES: {
        SELF: "Canvas/Calendar/dates",
        BTN_CONTANER: "Canvas/Calendar/dates"
      },
      NOTE_PANEL: {
        SELF: "Canvas/Calendar/note_background",
        BTN_LEFT_NOTE: "Canvas/Calendar/note_background/top_background/btn_left",
        BTN_BACK: "Canvas/Calendar/note_background/top_background/btn_back",
        BTN_RIGHT_NOTE: "Canvas/Calendar/note_background/top_background/btn_right",
        LBL_MONTH_NOTE: "Canvas/Calendar/note_background/top_background/lbl_day_month",
        BTN_CHAPTER_READ: "Canvas/Calendar/note_background/btnChapterRead",
        BTN_TRAIN_TIME: "Canvas/Calendar/note_background/btnTrainTime",
        BTN_ACHIEVEMENT: "Canvas/Calendar/note_background/btnAchievement",
        BTN_DIARY: "Canvas/Calendar/note_background/btnDiary",
        LBL_DIARY: "Canvas/Calendar/note_background/btnDiary/Label",
        BTN_PLAN: "Canvas/Calendar/note_background/btnPlan",
        PLAN_LIST: "Canvas/Calendar/note_background/planList_panel/ScrollView/view/content",
        PLAN_LIST_PANEL: "Canvas/Calendar/note_background/planList_panel",
        BTN_CLOSE: "Canvas/Calendar/note_background/planList_panel/btnClose",
        LBL_PLAN: "Canvas/Calendar/note_background/btnPlan/New Label",
        LBL_STABILITY: "Canvas/Calendar/note_background/btnTrainTime/stable",
        LBL_BREATH: "Canvas/Calendar/note_background/btnTrainTime/breath"
      },
      DIARY_PANEL: {
        SELF: "Canvas/Calendar/DiaryPanel",
        DIARY_UI: "Canvas/Calendar/DiaryPanel/diary_ui",
        BTN_MOOD: "Canvas/Calendar/DiaryPanel/diary_ui/btn_mood",
        MOOD_PANEL: "Canvas/Calendar/DiaryPanel/diary_ui/mood_list",
        MOOD_CONTAINER: "Canvas/Calendar/DiaryPanel/diary_ui/mood_list/view/content",
        BTN_WHO_WHAT: "Canvas/Calendar/DiaryPanel/diary_ui/btn_whowhat",
        WHO_WHAT_PANEL: "Canvas/Calendar/DiaryPanel/diary_ui/whowhat_list",
        BTN_TYPE: "Canvas/Calendar/DiaryPanel/diary_ui/btn_type",
        TYPE_PANEL: "Canvas/Calendar/DiaryPanel/diary_ui/type_list",
        LBL_DATE: "Canvas/Calendar/DiaryPanel/diary_ui/lblDate",
        EDB_DIARY: "Canvas/Calendar/DiaryPanel/diary_ui/Diary_EditBox",
        BTN_DONE: "Canvas/Calendar/DiaryPanel/diary_ui/btn_done",
        LBL_ENERGY: "Canvas/Calendar/DiaryPanel/diary_ui/type_list/energy map",
        ENERGY_MAP_PANEL: "Canvas/Calendar/DiaryPanel/diary_ui/energyMapPanel"
      }
    };
    window.CHAPTER_CONTENT = {
      SELF: "Canvas/ChapterContent",
      BTN_BACK_CHAPTER_CONTENT: "Canvas/ChapterContent/title/btn_arrow_left",
      BTN_START_PLAN: "Canvas/ChapterContent/body/btn_start_plan"
    };
    window.PLAN_PANEL = {
      SELF: "Canvas/PlanPanel",
      BTN_BACK_PLAN: "Canvas/PlanPanel/top/title/btn_arrow_left",
      EDB_PLAN_DISCRIPTION: "Canvas/PlanPanel/top/body/plan_discription",
      BTN_DONE_PLAN: "Canvas/PlanPanel/bottom/btn_done",
      LBL_HOUR: "Canvas/PlanPanel/bottom/rows/time/button/Background/lbl_hour",
      LBL_MIN: "Canvas/PlanPanel/bottom/rows/time/button/Background/lbl_min",
      HOUR_PANEL: "Canvas/PlanPanel/bottom/rows/time/hourPanel",
      MIN_PANEL: "Canvas/PlanPanel/bottom/rows/time/minPanel",
      TGL_SOUND_NOTI: "Canvas/PlanPanel/bottom/rows/sound_noti_row/toggle_sound_noti",
      BTN_ALARM_DAYS: "Canvas/PlanPanel/bottom/rows/row_copy/button",
      ALARM_DAYS_HOUR_PANEL: "Canvas/PlanPanel/bottom/rows/row_copy/alarmDays",
      HOUR_LIST: "Canvas/PlanPanel/bottom/rows/time/hourPanel/view/content",
      MIN_LIST: "Canvas/PlanPanel/bottom/rows/time/minPanel/view/content",
      PAGE_ALARM_DAYS: "Canvas/PlanPanel/bottom/rows/row_copy/alarmDays",
      PAGE_HOUR: "Canvas/PlanPanel/bottom/rows/time/hourPanel",
      PAGE_MIN: "Canvas/PlanPanel/bottom/rows/time/minPanel"
    };
    window.TRAIN_PANEL = {
      SELF: "Canvas/Train",
      PHONE_PANEL: "Canvas/Train/Panel/Phone",
      BTN_EYE: "Canvas/Train/Panel/Eye",
      BTN_SIT: "Canvas/Train/Panel/Sit",
      BREATH_PANEL: "Canvas/Train/Panel/Breath",
      DESC_PANEL: "Canvas/Train/Description",
      CLOSE_DESC_PANEL: "Canvas/Train/Description/Close",
      BTN_INFO: "Canvas/Train/btnInfo",
      PHONE: "Canvas/Train/Phone Panel",
      BTN_BACK: "Canvas/Train/Phone Panel/btn_back"
    };
    window.CLIENT_BANNER_PANEL = {
      SELF: "Canvas/ClientBanner",
      BTN_COUPLE: "Canvas/ClientBanner/btnCouple",
      BTN_FAMILY: "Canvas/ClientBanner/btnFamily",
      BTN_WORKPLACE: "Canvas/ClientBanner/btnWorkPlace",
      BTN_SELF_IMPROVEMENT: "Canvas/ClientBanner/btnSelfImprovement",
      BTN_COMPETIVEMIND: "Canvas/ClientBanner/btnCompetiveMind",
      BTN_PRESSURE: "Canvas/ClientBanner/btnPressure"
    };
    window.CHALLENGE_PANEL = {
      SELF: "Canvas/Challenge",
      BTN_RIGHT_ARROW: "Canvas/Challenge/btnRight",
      BTN_LEFT_ARROW: "Canvas/Challenge/btnLeft",
      BUTTON_CONTAINER: "Canvas/Challenge/Button Container",
      BTN_DIFFICULTY: "Canvas/Challenge/Button Container/btnDifficulty",
      BTN_NORMAL: "Canvas/Challenge/Button Container/btnNormal",
      BTN_HARD: "Canvas/Challenge/Button Container/btnHard",
      CLOSE_CHALLENGE_PANEL: "Canvas/Challenge/ClosePanel",
      LBL_TIMER: "Canvas/Challenge/lblTimer",
      BTN_START: "Canvas/Challenge/btnStart",
      BTN_STOP_HOLDER: "Canvas/Challenge/Stop",
      BTN_STOP: "Canvas/Challenge/Stop/btnStop",
      BTN_TAP_TO_STOP: "Canvas/Challenge/btnTapToStop",
      CLOSE_TAP_TO_STOP: "Canvas/Challenge/btnTapToStop/CloseTapStopPanel"
    };
    window.EYE_TRAINING_PANEL = {
      SELF: "Canvas/EyeTrainingPanel",
      EYE_PANEL_1: "Canvas/EyeTrainingPanel/EyePanel1",
      EYE_PANEL_2: "Canvas/EyeTrainingPanel/EyePanel2",
      BTN_REGULAR_TRAIN: "Canvas/EyeTrainingPanel/EyePanel1/btnRegularTrain",
      BTN_CHALLENGE: "Canvas/EyeTrainingPanel/EyePanel1/btnChallenge"
    };
    window.STABILITY_PANEL = {
      SELF: "Canvas/StabilityPanel",
      STABILITY_MENU: "Canvas/StabilityPanel/StabilityMenu",
      TIMER_PANEL: "Canvas/StabilityPanel/TimerPanel",
      BUTTON1: "Canvas/StabilityPanel/StabilityMenu/btn1",
      BUTTON2: "Canvas/StabilityPanel/StabilityMenu/btn2",
      BUTTON3: "Canvas/StabilityPanel/StabilityMenu/btn3",
      TIMER_LABEL: "Canvas/StabilityPanel/PausePanel/Label",
      BUTTON1_LBL: "Canvas/StabilityPanel/StabilityMenu/btn1/Background/Label",
      BUTTON2_LBL: "Canvas/StabilityPanel/StabilityMenu/btn2/Background/Label",
      BUTTON3_LBL: "Canvas/StabilityPanel/StabilityMenu/btn3/Background/Label",
      PAUSE_PANEL: "Canvas/StabilityPanel/PausePanel",
      PAUSE_PANEL_OVERLAY: "Canvas/StabilityPanel/PausePanel/OverLay",
      TIMER_PANEL_OVERLAY: "Canvas/StabilityPanel/TimerPanel/OverLay",
      BTN_STOP: "Canvas/StabilityPanel/PausePanel/btnStop",
      LBL_PAUSE: "Canvas/StabilityPanel/PausePanel/lblPause"
    };
    window.ZEN_BREATH_PANEL = {
      SELF: "Canvas/ZenBreath",
      BTN_TRAINING: "Canvas/ZenBreath/btnTraining",
      BTN_CHALLENGE: "Canvas/ZenBreath/btnChallenge"
    };
    window.CHAKREN_TRAINING_PANEL = {
      SELF: "Canvas/ChakrenTraining",
      CHA_BUTTON_CONTAINER: "Canvas/ChakrenTraining/Button Container",
      BTN_BASE: "Canvas/ChakrenTraining/Button Container/btnBase",
      BTN_SACRAL: "Canvas/ChakrenTraining/Button Container/btnSacral",
      BTN_SOLAR: "Canvas/ChakrenTraining/Button Container/btnSolarPlexus",
      BTN_HEART: "Canvas/ChakrenTraining/Button Container/btnHeart",
      BTN_THROAT: "Canvas/ChakrenTraining/Button Container/btnThroat",
      BTN_BROW: "Canvas/ChakrenTraining/Button Container/btnBrow",
      BTN_CROWN: "Canvas/ChakrenTraining/Button Container/btnCrown",
      LBL_CHA_TIMER: "Canvas/ChakrenTraining/lblTimer",
      BTN_CHA_RIGHT_ARROW: "Canvas/ChakrenTraining/btnChaRight",
      BTN_CHA_LEFT_ARROW: "Canvas/ChakrenTraining/btnChaLeft",
      BTN_START: "Canvas/ChakrenTraining/btnStart",
      BTN_STOP: "Canvas/ChakrenTraining/btnStop",
      BTN_NEXT: "Canvas/ChakrenTraining/btnNext",
      BTN_FREQ: "Canvas/ChakrenTraining/btnFrequency",
      BTN_FRE_RIGHT_ARROW: "Canvas/ChakrenTraining/btnFreRight",
      BTN_FRE_LEFT_ARROW: "Canvas/ChakrenTraining/btnFreLeft",
      BTN_PULSE: "Canvas/ChakrenTraining/btnPulse",
      BROW_CHKAKREN_PANEL: "Canvas/ChakrenTraining/BrowChakarenPanel",
      LBL_TIMES: "Canvas/ChakrenTraining/BrowChakarenPanel/lblTimes/Label",
      LBL_TIME: "Canvas/ChakrenTraining/BrowChakarenPanel/lblTime/Label",
      BTN_ADD_TIME: "Canvas/ChakrenTraining/BrowChakarenPanel/btnAddTime",
      BTN_ADD_TIMES: "Canvas/ChakrenTraining/BrowChakarenPanel/btnAddTimes",
      BTN_SUBTRACT_TIME: "Canvas/ChakrenTraining/BrowChakarenPanel/btnSubtractTime",
      BTN_SUBTRACT_TIMES: "Canvas/ChakrenTraining/BrowChakarenPanel/btnSubtractTimes",
      BTN_CHANGE_RIGHT: "Canvas/ChakrenTraining/BrowChakarenPanel/btnChangeRight",
      BTN_CHANGE_LEFT: "Canvas/ChakrenTraining/BrowChakarenPanel/btnChangeLeft",
      LBL_CHAKREN: "Canvas/ChakrenTraining/BrowChakarenPanel/lblBrowChakaren"
    };
    window.CONST = {
      POWER_LEVEL_COUNT: 10,
      POWER_LEVEL_ITEMS: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    };
    window.SPRITE = {
      INNER_SPRITES: "images/flowers/inner",
      OUTER_SPRITES: "images/flowers/outer"
    };
    window.LOGIN = {
      SELF: "Canvas/Login",
      BTN_FB: "Canvas/Login/BG/Facebook",
      BTN_GOOGLE: "Canvas/Login/BG/Google",
      BTN_GUEST: "Canvas/Login/BG/Guest"
    };
    cc._RF.pop();
  }, {} ],
  ItemController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f03139MkFRJk6flTZ+1hL9V", "ItemController");
    "use strict";
    var PowerLevel = require("./models/PowerLevel.js");
    var ID;
    cc.Class({
      extends: cc.Component,
      properties: {},
      instantiatePrefabs: function instantiatePrefabs() {
        var containerName = this.node.name;
        var tempParent = this.node.getChildByName("view").getChildByName("content");
        this.powerLevel = PowerLevel.getPowerLevelByID(ID);
        for (var j = 0; j < this.powerLevel.itemCount; j++) cc.loader.loadRes("prefabs/item", cc.Prefab, function(err, prefab) {
          var item = cc.instantiate(prefab);
          item.addComponent("ChapterController");
          tempParent.height += item.height;
          tempParent.addChild(item);
          item.name = "c" + containerName + "_item" + (tempParent.children.length - 1).toString();
        });
      },
      onLoad: function onLoad() {
        ID = this.node.name;
        this.instantiatePrefabs();
      },
      start: function start() {},
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {
    "./models/PowerLevel.js": "PowerLevel"
  } ],
  MiniGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "63913BrRDJBybnDcyay5ten", "MiniGame");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var MiniGame = function() {
      var instance;
      function init() {
        var game = {
          id: "",
          date: "",
          phone: "",
          stability: 0,
          breath: 0,
          eyeMovement: ""
        };
        var gameList = [];
        return {
          getGameByDate: function getGameByDate(date) {
            var _game;
            for (var i = 0; i < gameList.length; i++) {
              _game = gameList[i];
              if (date == _game.date) return _game;
            }
            return null;
          },
          getGameByID: function getGameByID(id) {
            var _game;
            for (var i = 0; i < gameList.length; i++) {
              _game = gameList[i];
              if (id == _game.id) return _game;
            }
            return null;
          },
          getNewGame: function getNewGame(date) {
            var _game = {
              id: "",
              date: "",
              phone: "",
              stability: 0,
              breath: 0,
              eyeMovement: ""
            };
            _game.id = this.getRandomID(gameList);
            _game.date = date;
            this.addGame(_game);
            return _game;
          },
          addGame: function addGame(game) {
            gameList.push(game);
            for (var i = 0; i < gameList.length; i++) console.log("First..............." + gameList[i].id);
          },
          showMiniGameData: function showMiniGameData(game) {
            console.log("ID : " + game.id);
            console.log("Date : " + game.date);
            console.log("Phone : " + game.phone);
            console.log("Stability : " + game.stability);
            console.log("Breath : " + game.breath);
            console.log("EyeMovement : " + game.eyeMovement);
          },
          getRandomID: function getRandomID(list) {
            var counter = 0;
            var isDuplicate = false;
            var id = "_" + Math.random().toString(36).substr(2, 9);
            while (0 != list.length && counter < list.length) {
              if (id == list[counter].id) {
                isDuplicate = true;
                id = "_" + Math.random().toString(36).substr(2, 9);
              }
              counter++;
            }
            if (!isDuplicate) return id;
          }
        };
      }
      return {
        getInstance: function getInstance() {
          instance || (instance = init());
          return instance;
        }
      };
    }();
    var instance = MiniGame.getInstance();
    var _default = instance;
    exports["default"] = _default;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  Note: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "82755T/2JdIzqr6Cj43ARDg", "Note");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var Note = function() {
      var instance;
      function init() {
        var note = {
          id: "",
          date: "",
          diaryID: "",
          planID: [ "", "", "" ],
          gameID: ""
        };
        var noteList = [];
        return {
          getNoteListByKey: function getNoteListByKey(key) {
            for (var i = 0; i < noteList.length; i++) if (noteList[i].key == key) return noteList[i].value;
            return null;
          },
          getDiaryList: function getDiaryList(key) {
            var list = [];
            for (var i = 0; i < noteList.length; i++) "" != noteList[i].diaryID && list.push(noteList[i]);
            return list;
          },
          saveDiaryID: function saveDiaryID(key, id) {
            var array = key.split("/");
            var monthYear = array[1] + "/" + array[2];
            var noteList = this.getNoteListByKey(monthYear);
            var note = this.findNoteArray(key, noteList);
            note.diaryID = id;
          },
          saveGameID: function saveGameID(key, id) {
            console.log("KEY " + key);
            console.log("ID " + id);
            var array = key.split("/");
            var monthYear = array[0] + "/" + array[2];
            var date = array[1] + "/" + array[0] + "/" + array[2];
            var noteList = this.getNoteListByKey(monthYear);
            var note = this.findNoteArray(date, noteList);
            note.gameID = id;
          },
          savePlanID: function savePlanID(key, id) {
            console.log("savePlanID()..............");
            var array = key.split("/");
            var monthYear = array[1] + "/" + array[2];
            var noteList = this.getNoteListByKey(monthYear);
            var tempDate = array[0] + "/" + array[1] + "/" + array[2];
            var note = this.findNoteArray(tempDate, noteList);
            console.log("Plan ID Length : " + note.planID.length);
            var isExistEmptyRoom = false;
            for (var i = 0; i < note.planID.length; i++) if ("" == note.planID[i]) {
              isExistEmptyRoom = true;
              note.planID[i] = id;
              this.showAllPlanIDs(note);
              break;
            }
            isExistEmptyRoom || console.log("Room Full!");
          },
          showAllPlanIDs: function showAllPlanIDs(note) {
            for (var i = 0; i < note.planID.length; i++) console.log(i + " : " + note.planID[i]);
          },
          findNoteArray: function findNoteArray(date, array) {
            for (var i = 0; i < array.length; i++) if (null != array[i] && array[i].date == date) return array[i];
            return null;
          },
          getLength: function getLength() {
            return noteList.length;
          },
          getNoteByDate: function getNoteByDate(date) {
            var _note;
            for (var i = 0; i < noteList.length; i++) {
              _note = noteList[i];
              if (date == _note.date) return _note;
            }
            return this.getNewNote(date);
          },
          getNewNote: function getNewNote(date) {
            var _note = note;
            _note.id = this.getRandomID(noteList);
            _note.date = date;
            this.addNote(_note);
            return _note;
          },
          getNewNote2: function getNewNote2(date, list) {
            var _note = note;
            _note.id = this.getRandomID(list);
            _note.date = date;
            return _note;
          },
          addNote: function addNote(note) {
            noteList.push(note);
          },
          showNoteData: function showNoteData(note) {
            console.log("Date : " + note.date);
          },
          createNoteList: function createNoteList(monthYear, max, calendarDays) {
            var tempArray = [];
            var counter = 0;
            for (var m = 0; m < 42; m++) tempArray[m] = null;
            for (var i = 0; i < calendarDays.length; i++) for (var j = 0; j < calendarDays[i].length; j++) {
              var value = calendarDays[i][j];
              value < 10 && (value = "0" + value);
              if (0 != value) {
                var newDate = value + "/" + monthYear;
                tempArray[counter] = {
                  id: value,
                  date: newDate,
                  diaryID: "",
                  planID: [ "", "", "" ],
                  gameID: ""
                };
              }
              counter++;
            }
            noteList.push({
              key: monthYear,
              value: tempArray
            });
          },
          getRandomID: function getRandomID(list) {
            var counter = 0;
            var isDuplicate = false;
            var id = "_" + Math.random().toString(36).substr(2, 9);
            while (0 != list.length && counter < list.length) {
              if (id == list[counter].id) {
                isDuplicate = true;
                id = "_" + Math.random().toString(36).substr(2, 9);
              }
              counter++;
            }
            if (!isDuplicate) return id;
          }
        };
      }
      return {
        getInstance: function getInstance() {
          instance || (instance = init());
          return instance;
        }
      };
    }();
    var instance = Note.getInstance();
    var _default = instance;
    exports["default"] = _default;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  Notification: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb7c4MrapVOrodDOt7EA5ft", "Notification");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      initPlugin: function initPlugin() {
        this.initPluginOneSignal();
      },
      initPluginOneSignal: function initPluginOneSignal() {
        sdkbox.PluginOneSignal.init();
        sdkbox.PluginOneSignal.enableInAppAlertNotification(true);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  PersonInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7ee3ccsMFOl5287Gm7a8Tr", "PersonInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var PersonInfo = function() {
      var instance;
      function init() {
        var person = {
          id: "_yjb60lwpu",
          name: "\u5f35\u541b\u96c5",
          age: "16",
          gender: "male",
          religion: "Buddhist",
          aboutMe: "\u6211\u53eb\u5b89\xb7\u53f2\u5bc6\u65af\u3002\u6211\u662f\u9ad8\u4e2d\u751f\u3002\u6bcf\u4e2a\u4eba\u90fd\u53ef\u4ee5\u540c\u610f\u6211\u662f\u4e00\u4e2a\u597d\u5b66\u751f\uff0c\u800c\u4e14\u6211\u559c\u6b22\u5b66\u4e60\u3002\u6211\u6700\u559c\u6b22\u7684\u79d1\u76ee\u662f\u5316\u5b66\u548c\u751f\u7269\u5b66\u3002\u6211\u8981\u8fdb\u5165\u5927\u5b66\u662f\u56e0\u4e3a\u6211\u7684\u76ee\u6807\u662f\u5c06\u6765\u5b66\u4e60\u8fd9\u4e9b\u5b66\u79d1\uff0c\u5e76\u6210\u4e3a\u5176\u4e2d\u4e00\u4e2a\u9886\u57df\u4e2d\u53d7\u4eba\u5c0a\u656c\u7684\u4e13\u4e1a\u3002",
          goal: "\u804c\u4e1a\u76ee\u6807\u8bba\u6587\u662f\u6307\u4e00\u7bc7\u6587\u7ae0\uff0c\u89e3\u91ca\u4e86\u60a8\u5e0c\u671b\u8ffd\u6c42\u7684\u804c\u4e1a\u9053\u8def\u548c\u60f3\u8981\u5b9e\u73b0\u7684\u76ee\u6807\u3002\u5728\u672c\u6587\u4e2d\uff0c\u60a8\u5c06\u5199\u4e0b\u81ea\u5df1\u7684\u804c\u4e1a\u7406\u60f3\uff0c\u76f8\u5173\u6210\u5c31\uff0c\u4f7f\u60a8\u5904\u4e8e\u66f4\u6709\u5229\u4e8e\u5b9e\u73b0\u76ee\u6807\u7684\u4f4d\u7f6e\uff0c\u4ee5\u53ca\u5fd7\u5411\u53ef\u4ee5\u5e2e\u52a9\u60a8\u8fdb\u4e00\u6b65\u53d1\u5c55\u7684\u65b9\u5f0f",
          title: "\u6cd5\u865f\u9650\u5b9a\u516d\u5b57",
          achievementPoint: 2e3,
          badge: "Grandmaster",
          picPath: ""
        };
        return {
          get person() {
            return person;
          }
        };
      }
      return {
        getInstance: function getInstance() {
          instance || (instance = init());
          return instance;
        }
      };
    }();
    var instance = PersonInfo.getInstance();
    var _default = instance;
    exports["default"] = _default;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  Plan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8235ATw2lKJp2o9ZMoPJFd", "Plan");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var Plan = function() {
      var instance;
      function init() {
        var plan = {
          id: "",
          date: "",
          alarmDays: 0,
          alarmTime: "00:00",
          discription: "",
          soundNoti: false
        };
        var planList = [];
        return {
          getPlanList: function getPlanList() {
            return planList;
          },
          getPlanByDate: function getPlanByDate(date) {
            var _plan;
            for (var i = 0; i < planList.length; i++) {
              _plan = planList[i];
              if (date == _plan.date) return _plan;
            }
            return null;
          },
          getNewPlan: function getNewPlan(date) {
            var _plan = {
              id: "",
              date: "",
              alarmDays: 0,
              alarmTime: "00:00",
              discription: "",
              soundNoti: false
            };
            _plan.id = this.getRandomID(planList);
            _plan.date = date;
            this.addPlan(date, _plan);
            this.showAllPlans();
            return _plan;
          },
          addPlan: function addPlan(date, plan) {
            console.log("addPlan()..............");
            var isKeyExit = false;
            var isEmptyRoomExist = false;
            for (var i = 0; i < planList.length; i++) {
              if (planList[i].key != date) continue;
              for (var j = 0; j < planList[i].value.length; j++) {
                isKeyExit = true;
                if (null == planList[i].value[j]) {
                  isEmptyRoomExist = true;
                  console.log("Found an empty room to save plan!");
                  planList[i].value[j] = plan;
                  break;
                }
              }
            }
            if (isKeyExit) isEmptyRoomExist || console.log("Room Full!"); else {
              console.log("Planned Date does not exist yet!...Created New One!");
              var newArray = new Array(3);
              newArray[0] = plan;
              planList.push({
                key: date,
                value: newArray
              });
            }
          },
          showAllPlans: function showAllPlans() {
            var list = [];
            for (var i = 0; i < planList.length; i++) {
              for (var j = 0; j < planList[i].value.length; j++) if (null != planList[i].value[j]) {
                console.log(j + " : " + planList[i].value[j].id);
                list.push(planList[i].value[j]);
              } else console.log(j + " : null");
              console.log("LIST FUCK YOU" + list.length);
              return list.length;
            }
          },
          getAllPlans: function getAllPlans() {
            var list = [];
            for (var i = 0; i < planList.length; i++) {
              for (var j = 0; j < planList[i].value.length; j++) if (null != planList[i].value[j]) {
                console.log(j + " : " + planList[i].value[j].id);
                list.push(planList[i].value[j]);
              } else console.log(j + " : null");
              console.log("LIST FUCK YOU" + list.length);
            }
            return list.length;
          },
          showPlanData: function showPlanData(plan) {
            console.log("Alarm Days : " + plan.alarmDays);
            console.log("Alarm Time : " + plan.alarmTime);
            console.log("Discription : " + plan.discription);
            console.log("Sound Noti : " + plan.soundNoti);
          },
          getRandomID: function getRandomID(list) {
            var counter = 0;
            var isDuplicate = false;
            var id = "_" + Math.random().toString(36).substr(2, 9);
            while (0 != list.length && counter < list.length) {
              if (id == list[counter].id) {
                isDuplicate = true;
                id = "_" + Math.random().toString(36).substr(2, 9);
              }
              counter++;
            }
            if (!isDuplicate) return id;
          },
          getIndexByPlanID: function getIndexByPlanID(id) {
            if ("" != id) {
              console.log("PLAN LIST " + planList.length);
              for (var i = 0; i < planList.length; i++) for (var j = 0; j < planList[i].value.length; j++) for (var l = 0; l < id.length; l++) if (id[l] == planList[i].value[j]) return i;
              return null;
            }
          }
        };
      }
      return {
        getInstance: function getInstance() {
          instance || (instance = init());
          return instance;
        }
      };
    }();
    var instance = Plan.getInstance();
    var _default = instance;
    exports["default"] = _default;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  PowerLevel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34e4bfaiGJMOZZXoBEBkp2b", "PowerLevel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var PowerLevel = function() {
      var instance;
      function init() {
        var powerLevel = {
          id: "",
          itemCount: -1
        };
        var colors = [ "#F89F9E", "#FC9E82", "#F0A97A", "#FBC685", "#F4D185", "#CED89B", "#84CEC8", "#A1DFEC", "#BFB5E4", "#FEA8AE" ];
        var powerLevelList = [];
        return {
          get powerLevel() {
            return powerLevel;
          },
          getColorByIndex: function getColorByIndex(id) {
            return colors[id];
          },
          getPowerLevelByID: function getPowerLevelByID(id) {
            for (var i = 0; i < powerLevelList.length; i++) if (id == powerLevelList[i].id) return powerLevelList[i];
            console.log("power level not found!!!");
            return null;
          },
          addPowerLevel: function addPowerLevel(value) {
            powerLevelList.push(value);
          },
          printPowerLevel: function printPowerLevel(value) {
            console.log("ID : " + value.id);
            console.log("Item Count : " + value.itemCount);
          }
        };
      }
      return {
        getInstance: function getInstance() {
          instance || (instance = init());
          return instance;
        }
      };
    }();
    var instance = PowerLevel.getInstance();
    var _default = instance;
    exports["default"] = _default;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  SpawnEmojis: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "348121Td5NF/ri87z/K6OH3", "SpawnEmojis");
    "use strict";
    var self;
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        self = this;
        var _node = self.node;
        self.Calendar = cc.find("Canvas").getComponent("Calendar");
        cc.loader.loadRes("prefabs/Butterfly", cc.Prefab, function(err, prefab) {
          var butterFly = cc.instantiate(prefab);
          _node.addChild(butterFly);
          butterFly.setPosition(-70, 80);
        });
        cc.loader.loadRes("prefabs/Chakara", cc.Prefab, function(err, prefab) {
          var chakara = cc.instantiate(prefab);
          _node.addChild(chakara);
          chakara.setPosition(30, 80);
        });
        cc.loader.loadRes("prefabs/Chair", cc.Prefab, function(err, prefab) {
          var chair = cc.instantiate(prefab);
          _node.addChild(chair);
          chair.setPosition(-70, -66);
        });
        cc.loader.loadRes("prefabs/Phone", cc.Prefab, function(err, prefab) {
          var phone = cc.instantiate(prefab);
          _node.addChild(phone);
          phone.setPosition(30, -66);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  SpawnSurprise: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6d3f4NT0AtJQKASFD+Pzw5Q", "SpawnSurprise");
    "use strict";
    var self;
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        self = this;
        var _node = self.node;
        cc.loader.loadRes("prefabs/emoji", cc.Prefab, function(err, prefab) {
          var surprise = cc.instantiate(prefab);
          _node.addChild(surprise);
          surprise.setPosition(-40, 80);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Tutor: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "092aawrLD5J6qmQPQKKg1VM", "Tutor");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var Tutor = function() {
      var instance;
      function init() {
        var tutor = {
          id: "",
          tutorName: ""
        };
        var tutorList = [ {
          id: "_vjb60lwpi",
          tutorName: "Youko Saqui"
        }, {
          id: "_vjb60lwpk",
          tutorName: "Galilahi Malik"
        }, {
          id: "_vjb60lwpm",
          tutorName: "Balam Nita"
        }, {
          id: "_vjb60lwpo",
          tutorName: "Zitkala Tasunka"
        } ];
        return {
          get tutorList() {
            return tutorList;
          },
          getTutorByID: function getTutorByID(id) {
            var _tutor;
            for (var i = 0; i < tutorList.length; i++) {
              _tutor = tutorList[i];
              if (id == _tutor.id) return _tutor;
            }
            console.log("Tutor Not Found!");
            return null;
          }
        };
      }
      return {
        getInstance: function getInstance() {
          instance || (instance = init());
          return instance;
        }
      };
    }();
    var instance = Tutor.getInstance();
    var _default = instance;
    exports["default"] = _default;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  UIManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1fd5cXDSNHA4q6bYuhlB7i", "UIManager");
    "use strict";
    var Plan = require("./models/Plan.js");
    var PersonInfo = require("./models/PersonInfo");
    var MiniGame = require("./models/MiniGame");
    var Note = require("./models/Note");
    var Calendar = require("./Calendar");
    var self;
    var originalColor = "#FFFFFF";
    cc.Class({
      extends: cc.Component,
      properties: {
        agePrefab: cc.Prefab
      },
      init: function init() {
        var _this = this;
        this.date;
        this.FirebaseInstance = cc.find("Canvas").getComponent("Firebase");
        this.BookOverviewManager = cc.find("Canvas").getComponent("BookOverviewManager");
        this.scrollBadge = cc.find(PROFILE_PIC.SCROLL_BADGE);
        this.badgeList = cc.find(PROFILE_PIC.BADGE_LIST).children;
        this.buttonContainer = cc.find(CHALLENGE_PANEL.BUTTON_CONTAINER);
        this.chakBtnContainer = cc.find(CHAKREN_TRAINING_PANEL.CHA_BUTTON_CONTAINER);
        this.ageDataContainer = cc.find(PROFILE_PIC.AGE_DATA_CONTAINER);
        this.modeButtons = this.buttonContainer.children;
        this.chakModeButtons = this.chakBtnContainer.children;
        this.ageButtons = [];
        this.sexButtons = [];
        this.religionButtons = [];
        this.btnStopHolder = cc.find(CHALLENGE_PANEL.BTN_STOP_HOLDER);
        this.inputField = cc.find(PROFILE_PIC.INPUT_FIELD);
        this.pageAlarmDays = cc.find(PLAN_PANEL.PAGE_ALARM_DAYS).getComponent(cc.PageView);
        this.pageHour = cc.find(PLAN_PANEL.PAGE_HOUR).getComponent(cc.PageView);
        this.pageMin = cc.find(PLAN_PANEL.PAGE_MIN).getComponent(cc.PageView);
        this.brownChakrenPanel = cc.find(CHAKREN_TRAINING_PANEL.BROW_CHKAKREN_PANEL);
        this.planListPanel = cc.find(CALENDAR_PANEL.NOTE_PANEL.PLAN_LIST_PANEL);
        this.discountList = cc.find(TICKET_PANEL.DISCOUNT_LIST);
        this.cuponPanel = cc.find(TICKET_PANEL.CUPON_PANEL);
        this.shards = cc.find(TICKET_PANEL.SHARDS);
        this.ticket = cc.find(TICKET_PANEL.TICKET);
        this.cupon = cc.find(TICKET_PANEL.CUPON);
        this.shardsPanel = cc.find(TICKET_PANEL.SHARDS_PANEL);
        this.addFriendPanel = cc.find(FRIEND_PANEL.ADD_FRI_PANEL);
        this.aboutProfilePic = cc.find(PROFILE_PIC.ABOUT_PROFILE_PIC);
        this.typeList = cc.find(CALENDAR_PANEL.DIARY_PANEL.TYPE_PANEL);
        this.moodList = cc.find(CALENDAR_PANEL.DIARY_PANEL.MOOD_PANEL);
        this.whowhatList = cc.find(CALENDAR_PANEL.DIARY_PANEL.WHO_WHAT_PANEL);
        this.trainingMode = cc.find(CALENDAR_PANEL.TRAINING_MODE.SELF);
        this.planMode = cc.find(CALENDAR_PANEL.PLAN_MODE.SELF);
        this.diaryMode = cc.find(CALENDAR_PANEL.DIARY_MODE.SELF);
        this.stabilityMenu = cc.find(STABILITY_PANEL.STABILITY_MENU);
        this.trainMenu = cc.find(TRAIN_PANEL.TRAIN_MENU);
        this.notePanel = cc.find(CALENDAR_PANEL.NOTE_PANEL.SELF);
        this.pausePanel = cc.find(STABILITY_PANEL.PAUSE_PANEL);
        this.bookInfo = cc.find(BOOK_INFO.SELF);
        this.tutorInfo = cc.find(TUTOR_INFO.SELF);
        this.bookOverView = cc.find(BOOK_OVERVIEW.SELF);
        this.classInfo = cc.find(CLASS_INFO.SELF);
        this.achPanel = cc.find(ACHIEVEMENT_PANEL.SELF);
        this.friendPanel = cc.find(FRIEND_PANEL.SELF);
        this.ticketPanel = cc.find(TICKET_PANEL.SELF);
        this.profilePicPanel = cc.find(PROFILE_PIC.SELF);
        this.chapterContent = cc.find(CHAPTER_CONTENT.SELF);
        this.planPanel = cc.find(PLAN_PANEL.SELF);
        this.calendarPanel = cc.find(CALENDAR_PANEL.SELF);
        this.clientBanner = cc.find(CLIENT_BANNER_PANEL.SELF);
        this.purchasePanel = cc.find(BOOK_INFO.PURCHASE_PANEL);
        this.bgOverlay = cc.find(BOOK_INFO.BG_OVERLAY);
        this.aboutPanel = cc.find(PROFILE_PIC.ABOUT_PANEL);
        this.goalPanel = cc.find(PROFILE_PIC.GOAL_PANEL);
        this.typeDataPanel = cc.find(ACHIEVEMENT_PANEL.ACH_TYPE_DATA);
        this.beansPanel = cc.find(TICKET_PANEL.BEANS_PART);
        this.agePanel = cc.find(PROFILE_PIC.AGE_PANEL);
        this.sexPanel = cc.find(PROFILE_PIC.SEX_PANEL);
        this.religionPanel = cc.find(PROFILE_PIC.RELIGION_PANEL);
        this.trainPanel = cc.find(TRAIN_PANEL.SELF);
        this.descPanel = cc.find(TRAIN_PANEL.DESC_PANEL);
        this.eyePanel = cc.find(TRAIN_PANEL.EYE_PANEL);
        this.breathPanel = cc.find(TRAIN_PANEL.BREATH_PANEL);
        this.phonePanel = cc.find(TRAIN_PANEL.PHONE_PANEL);
        this.phone = cc.find(TRAIN_PANEL.PHONE);
        this.closeDescPanel = cc.find(TRAIN_PANEL.CLOSE_DESC_PANEL);
        this.challengePanel = cc.find(CHALLENGE_PANEL.SELF);
        this.hourPanel = cc.find(PLAN_PANEL.HOUR_PANEL);
        this.alarmDaysHourPanel = cc.find(PLAN_PANEL.ALARM_DAYS_HOUR_PANEL);
        this.minPanel = cc.find(PLAN_PANEL.MIN_PANEL);
        this.eyeTrainingPanel = cc.find(EYE_TRAINING_PANEL.SELF);
        this.eyePanel1 = cc.find(EYE_TRAINING_PANEL.EYE_PANEL_1);
        this.eyePanel2 = cc.find(EYE_TRAINING_PANEL.EYE_PANEL_2);
        this.stabilityPanel = cc.find(STABILITY_PANEL.SELF);
        this.closeChallengePanel = cc.find(CHALLENGE_PANEL.CLOSE_CHALLENGE_PANEL);
        this.closetapToStopChallenge = cc.find(CHALLENGE_PANEL.CLOSE_TAP_TO_STOP);
        this.zenBreathPanel = cc.find(ZEN_BREATH_PANEL.SELF);
        this.chakrenTrainPanel = cc.find(CHAKREN_TRAINING_PANEL.SELF);
        this.achRewardPanel = cc.find(ACHIEVEMENT_PANEL.ACH_REWARD_PANEL);
        this.achRewardClosePanel = cc.find(ACHIEVEMENT_PANEL.ACH_REWARD_PANEL).children[0];
        this.loginPanel = cc.find(LOGIN.SELF);
        this.imgBackground = cc.find(IMG_BACKGROUND.IMG).getComponent(cc.Sprite);
        this.arrow = cc.find(TICKET_PANEL.ARROW).getComponent(cc.Button);
        this.achBody = cc.find(ACHIEVEMENT_PANEL.ACH_BODY);
        this.diaryUI = cc.find(CALENDAR_PANEL.DIARY_PANEL.DIARY_UI);
        this.imgProfilePic = cc.find(TOP_UI.IMG_PROFILE_PIC).getComponent(cc.Sprite);
        this.btnEye = cc.find(TRAIN_PANEL.BTN_EYE);
        this.btnSit = cc.find(TRAIN_PANEL.BTN_SIT);
        this.pausePanelOverLay = cc.find(STABILITY_PANEL.PAUSE_PANEL_OVERLAY);
        this.btnChangeRight = cc.find(CHAKREN_TRAINING_PANEL.BTN_CHANGE_RIGHT).getComponent(cc.Button);
        this.btnChangeLeft = cc.find(CHAKREN_TRAINING_PANEL.BTN_CHANGE_LEFT).getComponent(cc.Button);
        this.btnSubtractTime = cc.find(CHAKREN_TRAINING_PANEL.BTN_SUBTRACT_TIME).getComponent(cc.Button);
        this.btnSubtractTimes = cc.find(CHAKREN_TRAINING_PANEL.BTN_SUBTRACT_TIMES).getComponent(cc.Button);
        this.btnAddTime = cc.find(CHAKREN_TRAINING_PANEL.BTN_ADD_TIME).getComponent(cc.Button);
        this.btnAddTimes = cc.find(CHAKREN_TRAINING_PANEL.BTN_ADD_TIMES).getComponent(cc.Button);
        this.btnNext = cc.find(CHAKREN_TRAINING_PANEL.BTN_NEXT).getComponent(cc.Button);
        this.btnClose = cc.find(CALENDAR_PANEL.NOTE_PANEL.BTN_CLOSE).getComponent(cc.Button);
        this.btnNotePanelBack = cc.find(CALENDAR_PANEL.NOTE_PANEL.BTN_BACK).getComponent(cc.Button);
        this.btnBackTrain = cc.find(TRAIN_PANEL.BTN_BACK).getComponent(cc.Button);
        this.btnTutorList = cc.find(CLASS_INFO.BTN_TUTOR_LIST).children;
        this.btnTicketDiscount = cc.find(TICKET_PANEL.BTN_DISCOUNT).getComponent(cc.Button);
        this.btnSave = cc.find(TICKET_PANEL.BTN_SAVE).getComponent(cc.Button);
        this.btnCashout = cc.find(TICKET_PANEL.BTN_CASHOUT).getComponent(cc.Button);
        this.btnBack = cc.find(FRIEND_PANEL.BTN_BACK).getComponent(cc.Button);
        this.btnAddFriend = cc.find(FRIEND_PANEL.BTN_ADD).getComponent(cc.Button);
        this.achBtnTrain = cc.find(ACHIEVEMENT_PANEL.BTN_TRAIN).getComponent(cc.Button);
        this.achBtnRead = cc.find(ACHIEVEMENT_PANEL.BTN_READ).getComponent(cc.Button);
        this.achBtnRecord = cc.find(ACHIEVEMENT_PANEL.BTN_RECORD).getComponent(cc.Button);
        this.achBtnGain = cc.find(ACHIEVEMENT_PANEL.BTN_GAIN).getComponent(cc.Button);
        this.achBtnFriend = cc.find(ACHIEVEMENT_PANEL.BTN_FRIEND).getComponent(cc.Button);
        this.btnBadge = cc.find(PROFILE_PIC.BTN_BAGE).getComponent(cc.Button);
        this.btnAchPoint = cc.find(PROFILE_PIC.BTN_ACH_POINT).getComponent(cc.Button);
        this.btnChangePic = cc.find(PROFILE_PIC.BTN_CHANGE_PROFILE_PIC).getComponent(cc.Button);
        this.btnAlarmDays = cc.find(PLAN_PANEL.BTN_ALARM_DAYS).getComponent(cc.Button);
        this.btnChapterRead = cc.find(CALENDAR_PANEL.NOTE_PANEL.BTN_CHAPTER_READ).getComponent(cc.Button);
        this.btnTrainTime = cc.find(CALENDAR_PANEL.NOTE_PANEL.BTN_TRAIN_TIME).getComponent(cc.Button);
        this.btnAchievement = cc.find(CALENDAR_PANEL.NOTE_PANEL.BTN_ACHIEVEMENT).getComponent(cc.Button);
        this.btnDiary = cc.find(CALENDAR_PANEL.NOTE_PANEL.BTN_DIARY).getComponent(cc.Button);
        this.btnPlan = cc.find(CALENDAR_PANEL.NOTE_PANEL.BTN_PLAN).getComponent(cc.Button);
        this.btnStopStability = cc.find(STABILITY_PANEL.BTN_STOP).getComponent(cc.Button);
        this.btnTimer1 = cc.find(STABILITY_PANEL.BUTTON1).getComponent(cc.Button);
        this.btnTimer2 = cc.find(STABILITY_PANEL.BUTTON2).getComponent(cc.Button);
        this.btnTimer3 = cc.find(STABILITY_PANEL.BUTTON3).getComponent(cc.Button);
        this.btnRegularTrain = cc.find(EYE_TRAINING_PANEL.BTN_REGULAR_TRAIN).getComponent(cc.Button);
        this.btnChallenge = cc.find(EYE_TRAINING_PANEL.BTN_CHALLENGE).getComponent(cc.Button);
        this.btnCouple = cc.find(CLIENT_BANNER_PANEL.BTN_COUPLE).getComponent(cc.Button);
        this.btnFamily = cc.find(CLIENT_BANNER_PANEL.BTN_FAMILY).getComponent(cc.Button);
        this.btnWorkPlace = cc.find(CLIENT_BANNER_PANEL.BTN_WORKPLACE).getComponent(cc.Button);
        this.btnSelfImprovement = cc.find(CLIENT_BANNER_PANEL.BTN_SELF_IMPROVEMENT).getComponent(cc.Button);
        this.btnCompetiveMind = cc.find(CLIENT_BANNER_PANEL.BTN_COMPETIVEMIND).getComponent(cc.Button);
        this.btnPressure = cc.find(CLIENT_BANNER_PANEL.BTN_PRESSURE).getComponent(cc.Button);
        this.btnReward = cc.find(TOP_UI.BTN_REWARD).getComponent(cc.Button);
        this.btnDiscount = cc.find(TOP_UI.BTN_DISCOUNT).getComponent(cc.Button);
        this.btnClassInfo = cc.find(TOP_UI.BTN_CLASS_INFO).getComponent(cc.Button);
        this.btnCoin = cc.find(BOOK_INFO.BTN_COIN).getComponent(cc.Button);
        this.btnCupon = cc.find(BOOK_INFO.BTN_CUPON).getComponent(cc.Button);
        this.btnRecord = cc.find(BOTTOM_UI.BTN_RECORD).getComponent(cc.Button);
        this.btnTicket = cc.find(BOTTOM_UI.BTN_TICKET).getComponent(cc.Button);
        this.btnFriend = cc.find(BOTTOM_UI.BTN_FRIEND).getComponent(cc.Button);
        this.btnAch = cc.find(BOTTOM_UI.BTN_ACHIEVEMENT).getComponent(cc.Button);
        this.btnInfo = cc.find(TRAIN_PANEL.BTN_INFO).getComponent(cc.Button);
        this.btnProfile = cc.find(TOP_UI.BTN_PROFILE_PIC).getComponent(cc.Button);
        this.btnTrain = cc.find(BOTTOM_UI.BTN_TRAIN).getComponent(cc.Button);
        this.btnBackBottom = cc.find(BOTTOM_UI.BTN_BACK).getComponent(cc.Button);
        this.btnRightArrow = cc.find(CHALLENGE_PANEL.BTN_RIGHT_ARROW).getComponent(cc.Button);
        this.btnLeftArrow = cc.find(CHALLENGE_PANEL.BTN_LEFT_ARROW).getComponent(cc.Button);
        this.btnDiff = cc.find(CHALLENGE_PANEL.BTN_DIFFICULTY).getComponent(cc.Button);
        this.btnNormal = cc.find(CHALLENGE_PANEL.BTN_NORMAL).getComponent(cc.Button);
        this.btnHard = cc.find(CHALLENGE_PANEL.BTN_HARD).getComponent(cc.Button);
        this.btnStart = cc.find(CHALLENGE_PANEL.BTN_START).getComponent(cc.Button);
        this.btnStop = cc.find(CHALLENGE_PANEL.BTN_STOP).getComponent(cc.Button);
        this.btntapToStopChallenge = cc.find(CHALLENGE_PANEL.BTN_TAP_TO_STOP).getComponent(cc.Button);
        this.btnShards = cc.find(TICKET_PANEL.BTN_SHARDS).getComponent(cc.Button);
        this.btnDraw = cc.find(TICKET_PANEL.BTN_DRAW).getComponent(cc.Button);
        this.btnAge = cc.find(PROFILE_PIC.BTN_AGE).getComponent(cc.Button);
        this.btnSex = cc.find(PROFILE_PIC.BTN_SEX).getComponent(cc.Button);
        this.btnReligion = cc.find(PROFILE_PIC.BTN_RELIGION).getComponent(cc.Button);
        this.plantPanel = cc.find(TICKET_PANEL.PLANT_PART).getComponent(cc.Button);
        this.btnArrow = cc.find(TUTOR_INFO.ARROW).getComponent(cc.Button);
        this.btnChangeID = cc.find(PROFILE_PIC.BTN_CHANGE_ID).getComponent(cc.Button);
        this.btnChangeTitle = cc.find(PROFILE_PIC.BTN_CHANGE_TITLE).getComponent(cc.Button);
        this.btn_ID_OK = cc.find(PROFILE_PIC.BTN_OK).getComponent(cc.Button);
        this.btn_ID_Cancel = cc.find(PROFILE_PIC.BTN_CANCEL).getComponent(cc.Button);
        this.btnAbout = cc.find(PROFILE_PIC.BTN_ABOUT).getComponent(cc.Button);
        this.btnGoal = cc.find(PROFILE_PIC.BTN_GOAL).getComponent(cc.Button);
        this.btnTraining = cc.find(ZEN_BREATH_PANEL.BTN_TRAINING).getComponent(cc.Button);
        this.btnChallenge = cc.find(ZEN_BREATH_PANEL.BTN_CHALLENGE).getComponent(cc.Button);
        this.btnBase = cc.find(CHAKREN_TRAINING_PANEL.BTN_BASE).getComponent(cc.Button);
        this.btnSacral = cc.find(CHAKREN_TRAINING_PANEL.BTN_SACRAL).getComponent(cc.Button);
        this.btnSolar = cc.find(CHAKREN_TRAINING_PANEL.BTN_SOLAR).getComponent(cc.Button);
        this.btnHeart = cc.find(CHAKREN_TRAINING_PANEL.BTN_HEART).getComponent(cc.Button);
        this.btnThroat = cc.find(CHAKREN_TRAINING_PANEL.BTN_THROAT).getComponent(cc.Button);
        this.btnBrow = cc.find(CHAKREN_TRAINING_PANEL.BTN_BROW).getComponent(cc.Button);
        this.btnCrown = cc.find(CHAKREN_TRAINING_PANEL.BTN_CROWN).getComponent(cc.Button);
        this.btnChakRightArrow = cc.find(CHAKREN_TRAINING_PANEL.BTN_CHA_RIGHT_ARROW).getComponent(cc.Button);
        this.btnChakLeftArrow = cc.find(CHAKREN_TRAINING_PANEL.BTN_CHA_LEFT_ARROW).getComponent(cc.Button);
        this.btnChakStart = cc.find(CHAKREN_TRAINING_PANEL.BTN_START).getComponent(cc.Button);
        this.btnChakStop = cc.find(CHAKREN_TRAINING_PANEL.BTN_STOP).getComponent(cc.Button);
        this.btnFreq = cc.find(CHAKREN_TRAINING_PANEL.BTN_FREQ).getComponent(cc.Button);
        this.btnFreqRightArrow = cc.find(CHAKREN_TRAINING_PANEL.BTN_FRE_RIGHT_ARROW).getComponent(cc.Button);
        this.btnFreqLeftArrow = cc.find(CHAKREN_TRAINING_PANEL.BTN_FRE_LEFT_ARROW).getComponent(cc.Button);
        this.btnPulse = cc.find(CHAKREN_TRAINING_PANEL.BTN_PULSE).getComponent(cc.Button);
        this.btnType = cc.find(ACHIEVEMENT_PANEL.ACH_BTN_TYPE).getComponent(cc.Button);
        this.btnBackPlan = cc.find(PLAN_PANEL.BTN_BACK_PLAN).getComponent(cc.Button);
        this.btnStartPlan = cc.find(CHAPTER_CONTENT.BTN_START_PLAN).getComponent(cc.Button);
        this.btnBackChapterContent = cc.find(CHAPTER_CONTENT.BTN_BACK_CHAPTER_CONTENT).getComponent(cc.Button);
        this.btnLeftClassInfo = cc.find(CLASS_INFO.BTN_LEFT).getComponent(cc.Button);
        this.btnRightClassInfo = cc.find(CLASS_INFO.BTN_RIGHT).getComponent(cc.Button);
        this.btnFacebook = cc.find(LOGIN.BTN_FB).getComponent(cc.Button);
        this.btnGoogle = cc.find(LOGIN.BTN_GOOGLE).getComponent(cc.Button);
        this.btnGuest = cc.find(LOGIN.BTN_GUEST).getComponent(cc.Button);
        this.lblMinClick = cc.find(PLAN_PANEL.LBL_MIN);
        this.lblHourClick = cc.find(PLAN_PANEL.LBL_HOUR);
        this.btnEbook = cc.find(BOOK_OVERVIEW.BTN_EBOOK).getComponent(cc.Sprite);
        this.lblStability = cc.find(CALENDAR_PANEL.NOTE_PANEL.LBL_STABILITY).getComponent(cc.Label);
        this.lblChakren = cc.find(CHAKREN_TRAINING_PANEL.LBL_CHAKREN).getComponent(cc.Label);
        this.lblTime = cc.find(CHAKREN_TRAINING_PANEL.LBL_TIME).getComponent(cc.Label);
        this.lblTimes = cc.find(CHAKREN_TRAINING_PANEL.LBL_TIMES).getComponent(cc.Label);
        this.lblBadge = cc.find(PROFILE_PIC.LBL_BADGE).getComponent(cc.Label);
        this.lblAchPoint = cc.find(PROFILE_PIC.LBL_ACH_POINT).getComponent(cc.Label);
        this.lblName = cc.find(TOP_UI.LBL_NAME).getComponent(cc.Label);
        this.lblChangeId = cc.find(PROFILE_PIC.LBL_CHANGE_ID).getComponent(cc.Label);
        this.lblTitle = cc.find(TOP_UI.LBL_TITLE).getComponent(cc.Label);
        this.lblHour = cc.find(PLAN_PANEL.LBL_HOUR).getComponent(cc.Label);
        this.lblMin = cc.find(PLAN_PANEL.LBL_MIN).getComponent(cc.Label);
        this.lblPause = cc.find(STABILITY_PANEL.LBL_PAUSE);
        this.lblTimer = cc.find(CHALLENGE_PANEL.LBL_TIMER).getComponent(cc.Label);
        this.lblChaTimer = cc.find(CHAKREN_TRAINING_PANEL.LBL_CHA_TIMER).getComponent(cc.Label);
        this.edbGoal = cc.find(PROFILE_PIC.EDB_GOAL).getComponent(cc.EditBox);
        this.edbChangeTitle = cc.find(PROFILE_PIC.EDB_CHANGE_TITLE).getComponent(cc.EditBox);
        this.edbAboutMe = cc.find(PROFILE_PIC.EDB_ABOUT_ME).getComponent(cc.EditBox);
        this.edbID = cc.find(PROFILE_PIC.ID_EDITBOX).getComponent(cc.EditBox);
        this.edbPlanDiscription = cc.find(PLAN_PANEL.EDB_PLAN_DISCRIPTION).getComponent(cc.EditBox);
        this.tglSoundNoti = cc.find(PLAN_PANEL.TGL_SOUND_NOTI).getComponent(cc.Toggle);
        this.timerLabel = cc.find(STABILITY_PANEL.TIMER_LABEL).getComponent(cc.Label);
        this.btnTimer1Lbl = cc.find(STABILITY_PANEL.BUTTON1_LBL).getComponent(cc.Label);
        this.btnTimer2Lbl = cc.find(STABILITY_PANEL.BUTTON2_LBL).getComponent(cc.Label);
        this.btnTimer3Lbl = cc.find(STABILITY_PANEL.BUTTON3_LBL).getComponent(cc.Label);
        this.showBadgeList();
        for (var i = 0; i < this.btnTutorList.length; i++) this.btnTutorList[i].on("click", function() {
          _this.showClientBanner();
        });
        this.btnChangeRight.node.on("click", function() {
          _this.chakrenCounter++;
          _this.ChakrenList();
        });
        this.btnChangeLeft.node.on("click", function() {
          _this.chakrenCounter--;
          _this.checkChakrenList();
        });
        this.btnSubtractTime.node.on("click", function() {
          _this.timeValue--;
          _this.timeValue <= 0 && (_this.timeValue = 0);
          _this.lblTime.string = _this.timeValue;
        });
        this.btnSubtractTimes.node.on("click", function() {
          _this.timesValue -= 5;
          _this.timesValue <= 0 && (_this.timesValue = 0);
          _this.lblTimes.string = _this.timesValue;
        });
        this.btnAddTime.node.on("click", function() {
          _this.timeValue++;
          _this.lblTime.string = _this.timeValue;
        });
        this.btnAddTimes.node.on("click", function() {
          _this.timesValue += 5;
          _this.lblTimes.string = _this.timesValue;
          console.log("TIMES VSALUE " + _this.timesValue);
        });
        this.btnNext.node.on("click", function() {
          _this.brownChakrenPanel.active = true;
        });
        this.btnClose.node.on("click", function() {
          _this.planListPanel.active = false;
        });
        this.btnNotePanelBack.node.on("click", function() {
          _this.notePanel.active = false;
        });
        this.btnBackTrain.node.on("click", function() {
          _this.phone.active = false;
          _this.btnBackBottom.node.active = true;
        });
        this.btnBackBottom.node.on("click", function() {
          console.log("BTN BACK BOOLEAN " + _this.btnBackBottom.active);
          _this.btnBackBottom.node.active = false;
          _this.planListPanel.active = false;
          _this.showBookOverView();
          clearInterval(_this.Calendar.intervalEmoji);
        });
        this.btnTicketDiscount.node.on("click", function() {
          _this.discountList.active = !_this.discountList.active;
        });
        this.btnSave.node.on("click", function() {
          _this.cuponPanel.active = false;
        });
        this.btnCashout.node.on("click", function() {
          _this.cuponPanel.active = !_this.cuponPanel.active;
        });
        this.arrow.node.on("click", function() {
          _this.swapShardsTicket();
        });
        this.btnBack.node.on("click", function() {
          _this.addFriendPanel.active = false;
        });
        this.btnAddFriend.node.on("click", function() {
          _this.addFriendPanel.active = true;
        });
        this.btnEbook.node.on("touchstart", function() {
          _this.btnBackBottom.node.active = true;
          _this.showBookInfo();
        }, this);
        this.btnCoin.node.on("click", function() {
          _this.zoomEffect(_this.btnCoin.node);
          _this.hidePurchasePanel();
          cc.game.emit("specialEvent");
          _this.purchaseChapter = true;
        }, this);
        this.btnCupon.node.on("click", function() {
          _this.zoomEffect(_this.btnCupon.node);
          _this.hidePurchasePanel();
          _this.purchaseChapter = true;
        }, this);
        this.achBtnTrain.node.on("click", function() {
          _this.typeDataPanel.active = false;
        });
        this.achBtnRead.node.on("click", function() {
          _this.typeDataPanel.active = false;
        });
        this.achBtnRecord.node.on("click", function() {
          _this.typeDataPanel.active = false;
        });
        this.achBtnGain.node.on("click", function() {
          _this.typeDataPanel.active = false;
        });
        this.achBtnFriend.node.on("click", function() {
          _this.typeDataPanel.active = false;
        });
        this.achBody.on("touchstart", function() {
          _this.typeDataPanel.active = false;
        });
        this.achPanel.on("touchstart", function() {
          _this.typeDataPanel.active = false;
        });
        this.btnBadge.node.on("click", function() {
          _this.resetAboutData();
        });
        this.btnAchPoint.node.on("click", function() {
          _this.resetAboutData();
          _this.scrollBadge.active = false;
        });
        this.btnChangePic.node.on("click", function() {
          _this.scrollBadge.active = false;
          _this.resetAboutData();
        });
        this.profilePicPanel.on("touchstart", function() {
          _this.resetAboutData();
          _this.scrollBadge.active = false;
        });
        this.diaryUI.on("touchstart", function() {
          _this.whowhatList.active = false;
          _this.typeList.active = false;
          _this.moodList.active = false;
        });
        this.lblBadge.node.on("touchstart", function() {
          _this.showscrollBadge();
        });
        this.btnChangeTitle.node.on("click", function() {
          _this.showChangeTitle();
          _this.resetAboutData();
          _this.scrollBadge.active = false;
        });
        this.pageAlarmDays.node.on("page-turning", function() {
          _this.NextPage(_this.pageAlarmDays);
        });
        this.pageHour.node.on("page-turning", function() {
          _this.NextPage(_this.pageHour);
        });
        this.pageMin.node.on("page-turning", function() {
          _this.NextPage(_this.pageMin);
        });
        this.btnAlarmDays.node.on("click", function() {
          _this.showAlarmDaysHourPanel();
        });
        this.btnPlan.node.on("click", function() {
          _this.showPlanList();
        });
        this.btnDiary.node.on("click", function() {
          _this.showDiaryPanel();
        });
        this.btnChapterRead.node.on("click", function() {
          _this.showBookInfo();
        });
        this.btnTrainTime.node.on("click", function() {
          _this.showTrainPanel();
        });
        this.btnAchievement.node.on("click", function() {
          _this.showAchievementPanel();
        });
        this.btnStopStability.node.on("click", function() {
          clearInterval(_this.interval);
          _this.saveStabilityData();
          _this.showTrainPanel();
        });
        this.pausePanelOverLay.on("touchstart", function() {
          clearInterval(_this.interval);
          clearInterval(_this.Calendar.intervalEmoji);
          _this.showPauseAndStop();
          if (false == _this.lblPause.active) {
            _this.setTimer(self.time);
            _this.Calendar.changeButterfly(self.secs);
          }
        });
        this.phonePanel.on("touchend", function() {
          _this.savePhoneData();
          _this.btnBackBottom.node.active = false;
          _this.phone.active = true;
        });
        this.btnSit.on("touchend", function() {
          _this.showStabilityPanel();
        });
        this.btnTimer1.node.on("click", function() {
          var countDown = _this.btnTimer1Lbl.string.split(":");
          var countMin = parseInt(countDown[0], 10);
          var secs = 60 * countMin;
          _this.Calendar.changeButterfly(secs);
          _this.setTimer(_this.btnTimer1Lbl.string);
          _this.showPausePanel();
        });
        this.btnTimer2.node.on("click", function() {
          var countDown = _this.btnTimer2Lbl.string.split(":");
          var countMin = parseInt(countDown[0], 10);
          var secs = 60 * countMin;
          _this.Calendar.changeButterfly(secs);
          _this.setTimer(_this.btnTimer2Lbl.string);
          _this.showPausePanel();
        });
        this.btnTimer3.node.on("click", function() {
          var countDown = _this.btnTimer3Lbl.string.split(":");
          var countMin = parseInt(countDown[0], 10);
          var secs = 60 * countMin;
          _this.Calendar.changeButterfly(secs);
          _this.setTimer(_this.btnTimer3Lbl.string);
          _this.showPausePanel();
        });
        this.btnRegularTrain.node.on("click", function() {
          _this.showEyePanel2();
        });
        this.btnChallenge.node.on("click", function() {
          _this.showEyePanel2();
        });
        this.btnCouple.node.on("click", function() {
          _this.showClassInfo();
          _this.clientBanner.active = false;
        });
        this.btnFamily.node.on("click", function() {
          _this.showClassInfo();
          _this.clientBanner.active = false;
        });
        this.btnWorkPlace.node.on("click", function() {
          _this.showClassInfo();
          _this.clientBanner.active = false;
        });
        this.btnSelfImprovement.node.on("click", function() {
          _this.showClassInfo();
          _this.clientBanner.active = false;
        });
        this.btnCompetiveMind.node.on("click", function() {
          _this.showClassInfo();
          _this.clientBanner.active = false;
        });
        this.btnPressure.node.on("click", function() {
          _this.showClassInfo();
          _this.clientBanner.active = false;
        });
        this.btnArrow.node.on("click", function() {
          _this.hideTutorInfo();
          _this.clientBanner.active = true;
        });
        this.lblMinClick.on("touchstart", function() {
          _this.showMinPanel();
        }, this);
        this.lblHourClick.on("touchstart", function() {
          _this.showHourPanel();
        }, this);
        this.btnType.node.on("click", function() {
          _this.zoomEffect(_this.btnType.node);
          _this.showHideTypeDataPanel();
        }, this);
        this.btnShards.node.on("click", function() {
          _this.zoomEffect(_this.btnShards.node);
          _this.showHideShardsPanel();
        }, this);
        this.btnDraw.node.on("click", function() {
          _this.zoomEffect(_this.btnDraw.node);
          _this.showPlantPanel();
        }, this);
        this.plantPanel.node.on("click", function() {
          _this.showBeanPanel();
        }, this);
        this.btnChangeID.node.on("click", function() {
          _this.zoomEffect(_this.btnChangeID.node);
          _this.scrollBadge.active = false;
        }, this);
        this.btn_ID_OK.node.on("click", function() {
          _this.zoomEffect(_this.btn_ID_OK.node);
        }, this);
        this.btn_ID_Cancel.node.on("click", function() {
          _this.zoomEffect(_this.btn_ID_Cancel.node);
          _this.ShowHideedbID();
        }, this);
        this.btnAge.node.on("click", function() {
          _this.showAgePanel();
          _this.setAgeData();
          _this.scrollBadge.active = false;
        }, this);
        this.btnSex.node.on("click", function() {
          _this.showSexPanel();
          _this.clickSexLabel();
        }, this);
        this.btnReligion.node.on("click", function() {
          _this.showReligionPanel();
          _this.clickReligionLabel();
        }, this);
        this.btnProfile.node.on("click", function() {
          _this.changeProfilePic();
          _this.zoomEffect(_this.btnProfile.node);
          _this.togglePanel(_this.profilePicPanel);
          _this.showAboutPanel();
          _this.resetAboutData();
        }, this);
        this.btnAbout.node.on("click", function() {
          _this.showAboutPanel();
          _this.resetAboutData();
          _this.scrollBadge.active = false;
        }, this);
        this.btnGoal.node.on("click", function() {
          _this.showGoalPanel();
          _this.scrollBadge.active = false;
        }, this);
        this.btnFriend.node.on("click", function() {
          _this.zoomEffect(_this.btnFriend.node);
          _this.togglePanel(_this.friendPanel);
          _this.btnBackBottom.node.active = false;
          _this.imgBackground.node.color = new cc.Color().fromHEX("#FFC0CB");
          _this.btnRecord.node.getChildByName("Background").getChildByName("Note").color = new cc.Color().fromHEX(originalColor);
          _this.btnAch.node.getChildByName("Background").getChildByName("achievement").color = new cc.Color().fromHEX(originalColor);
          _this.btnTrain.node.getChildByName("Background").getChildByName("Yoga").color = new cc.Color().fromHEX(originalColor);
          _this.btnFriend.node.getChildByName("Background").getChildByName("hand shake").color = new cc.Color().fromHEX("#FFC0CB");
          _this.btnTicket.node.getChildByName("Background").getChildByName("gift").color = new cc.Color().fromHEX(originalColor);
          _this.planListPanel.active = false;
        }, this);
        this.ticketPanel.on("touchstart", function() {
          _this.shardsPanel.active = false;
          _this.cuponPanel.active = false;
        }, this);
        this.btnTicket.node.on("click", function() {
          _this.zoomEffect(_this.btnTicket.node);
          _this.togglePanel(_this.ticketPanel);
          _this.btnBackBottom.node.active = false;
          _this.showBeanPanel();
          _this.imgBackground.node.color = new cc.Color().fromHEX("#008000");
          _this.btnRecord.node.getChildByName("Background").getChildByName("Note").color = new cc.Color().fromHEX(originalColor);
          _this.btnAch.node.getChildByName("Background").getChildByName("achievement").color = new cc.Color().fromHEX(originalColor);
          _this.btnTrain.node.getChildByName("Background").getChildByName("Yoga").color = new cc.Color().fromHEX(originalColor);
          _this.btnFriend.node.getChildByName("Background").getChildByName("hand shake").color = new cc.Color().fromHEX(originalColor);
          _this.btnTicket.node.getChildByName("Background").getChildByName("gift").color = new cc.Color().fromHEX("#008000");
          _this.planListPanel.active = false;
        }, this);
        this.btnAch.node.on("click", function() {
          _this.zoomEffect(_this.btnAch.node);
          _this.togglePanel(_this.achPanel);
          _this.btnBackBottom.node.active = false;
          _this.imgBackground.node.color = new cc.Color().fromHEX("#FFD700");
          _this.btnRecord.node.getChildByName("Background").getChildByName("Note").color = new cc.Color().fromHEX(originalColor);
          _this.btnAch.node.getChildByName("Background").getChildByName("achievement").color = new cc.Color().fromHEX("#FFD700");
          _this.btnTrain.node.getChildByName("Background").getChildByName("Yoga").color = new cc.Color().fromHEX(originalColor);
          _this.btnFriend.node.getChildByName("Background").getChildByName("hand shake").color = new cc.Color().fromHEX(originalColor);
          _this.btnTicket.node.getChildByName("Background").getChildByName("gift").color = new cc.Color().fromHEX(originalColor);
          _this.planListPanel.active = false;
        }, this);
        this.btnFacebook.node.on("click", function() {
          _this.zoomEffect(_this.btnFacebook.node);
          _this.togglePanel(_this.loginPanel);
        }, this);
        this.btnGoogle.node.on("click", function() {
          _this.zoomEffect(_this.btnGoogle.node);
          _this.togglePanel(_this.loginPanel);
        }, this);
        this.btnGuest.node.on("click", function() {
          _this.zoomEffect(_this.btnGuest.node);
          _this.togglePanel(_this.loginPanel);
        }, this);
        this.btnTrain.node.on("click", function() {
          _this.hideAllPanels();
          _this.zoomEffect(_this.btnTrain.node);
          _this.descPanel.active = false;
          _this.challengePanel.active = false;
          _this.phone.active = false;
          _this.showHideTimer(false);
          _this.btnBackBottom.node.active = true;
          _this.trainPanel.active = true;
          _this.showHidebtnInfo();
          _this.todayDate();
          _this.imgBackground.node.color = new cc.Color().fromHEX("#0000FF");
          _this.btnRecord.node.getChildByName("Background").getChildByName("Note").color = new cc.Color().fromHEX(originalColor);
          _this.btnAch.node.getChildByName("Background").getChildByName("achievement").color = new cc.Color().fromHEX(originalColor);
          _this.btnTrain.node.getChildByName("Background").getChildByName("Yoga").color = new cc.Color().fromHEX("#0000FF");
          _this.btnFriend.node.getChildByName("Background").getChildByName("hand shake").color = new cc.Color().fromHEX(originalColor);
          _this.btnTicket.node.getChildByName("Background").getChildByName("gift").color = new cc.Color().fromHEX(originalColor);
          _this.planListPanel.active = false;
        }, this);
        this.btnInfo.node.on("click", function() {
          _this.zoomEffect(_this.btnInfo.node);
          _this.showHideDescPanel();
        }, this);
        this.btnEye.on("touchstart", function() {
          _this.saveEyeData();
          _this.showEyeTrainingPanel();
        }, this);
        this.closeDescPanel.on("touchend", function() {
          _this.showHideDescPanel();
        }, this);
        this.breathPanel.on("touchend", function() {
          _this.showHideZenBreathPanel();
        }, this);
        this.btnRightArrow.node.on("click", function() {
          _this.zoomEffect(_this.btnRightArrow.node);
          _this.rightArrowClick();
        }, this);
        this.btnLeftArrow.node.on("click", function() {
          _this.zoomEffect(_this.btnLeftArrow.node);
          _this.leftArrowClick();
        }, this);
        this.btnStart.node.on("touchend", function() {
          _this.zoomEffect(_this.btnStart.node);
          _this.startTimer();
        }, this);
        this.btnStop.node.on("touchend", function() {
          _this.zoomEffect(_this.btnStop.node);
          _this.stopTimer();
        }, this);
        this.btntapToStopChallenge.node.on("click", function() {
          _this.zoomEffect(_this.btntapToStopChallenge.node);
          _this.taptoStopChallenge();
        }, this);
        this.btnChallenge.node.on("touchend", function() {
          _this.zoomEffect(_this.btnChallenge.node);
          _this.zenBreathPanel.active = false;
          _this.shwoHideChallengePanel();
          _this.showHideDiffUI(true);
          _this.showHideTimer(false);
          _this.defaultMode();
          _this.btntapToStopChallenge.node.active = false;
        }, this);
        this.btnTraining.node.on("touchstart", function() {
          _this.zoomEffect(_this.btnTraining.node);
          _this.zenBreathPanel.active = false;
          _this.chakrenTrainPanel.active = true;
          _this.showHideChaTrainingUI(true);
          _this.showHideChakTimer(false);
          _this.btnPulse.node.active = false;
          _this.defaultChakMode();
        }, this);
        this.btnChakRightArrow.node.on("click", function() {
          _this.zoomEffect(_this.btnChakRightArrow.node);
          _this.chakRightArrowClick();
        }, this);
        this.btnChakLeftArrow.node.on("click", function() {
          _this.zoomEffect(_this.btnChakLeftArrow.node);
          _this.chakLeftArrowClick();
        }, this);
        this.btnChakStart.node.on("touchend", function() {
          _this.zoomEffect(_this.btnChakStart.node);
          _this.startChakTimer();
        }, this);
        this.btnChakStop.node.on("touchend", function() {
          _this.zoomEffect(_this.btnStop.node);
          _this.stopChakTimer();
        }, this);
        this.btnPulse.node.on("click", function() {
          _this.zoomEffect(_this.btnPulse.node);
          _this.clickPulse();
        }, this);
        this.btnRecord.node.on("click", function() {
          _this.zoomEffect(_this.btnRecord.node);
          _this.imgBackground.node.color = new cc.Color().fromHEX("#FFA500");
          _this.btnRecord.node.getChildByName("Background").getChildByName("Note").color = new cc.Color().fromHEX("#FFA500");
          _this.btnAch.node.getChildByName("Background").getChildByName("achievement").color = new cc.Color().fromHEX(originalColor);
          _this.btnTrain.node.getChildByName("Background").getChildByName("Yoga").color = new cc.Color().fromHEX(originalColor);
          _this.btnFriend.node.getChildByName("Background").getChildByName("hand shake").color = new cc.Color().fromHEX(originalColor);
          _this.btnTicket.node.getChildByName("Background").getChildByName("gift").color = new cc.Color().fromHEX(originalColor);
          _this.node.emit("reset-calendar");
          _this.btnBackBottom.node.active = false;
          _this.togglePanel(_this.calendarPanel);
          _this.planListPanel.active = false;
          console.log("PLAN LIST ACTIVE " + _this.planListPanel.active);
        }, this);
        this.btnBackPlan.node.on("click", function() {
          _this.zoomEffect(_this.btnBackPlan.node);
          _this.showChapterContent();
        }, this);
        this.btnStartPlan.node.on("click", function() {
          _this.zoomEffect(_this.btnStartPlan.node);
          _this.showPlanPanel();
        }, this);
        this.btnBackChapterContent.node.on("click", function() {
          _this.zoomEffect(_this.btnBackChapterContent.node);
          _this.showBookInfo();
        }, this);
        this.bgOverlay.on("touchend", function() {
          _this.hidePurchasePanel();
        }, this);
        this.btnReward.node.on("click", function() {
          _this.zoomEffect(_this.btnDiscount.node);
          _this.onClickBtnReward();
        }, this);
        this.btnDiscount.node.on("click", function() {
          _this.zoomEffect(_this.btnDiscount.node);
        }, this);
        this.btnClassInfo.node.on("click", function() {
          _this.zoomEffect(_this.btnClassInfo.node);
          _this.showClientBanner();
          _this.planListPanel.active = false;
        }, this);
        this.btnLeftClassInfo.node.on("click", function() {
          _this.zoomEffect(_this.btnLeftClassInfo.node);
        });
        this.btnRightClassInfo.node.on("click", function() {
          _this.zoomEffect(_this.btnRightClassInfo.node);
        });
        this.btnTest = cc.find(BOOK_INFO.BTN_TEST).getComponent(cc.Button);
        this.btnTest.node.on("click", function() {
          _this.zoomEffect(_this.btnTest.node);
          _this.hideBookInfo();
        }, this);
        this.edbAboutMe.node.on("touchstart", function() {
          _this.resetAboutData();
          _this.scrollBadge.active = false;
        });
        this.edbAboutMe.node.on("text-changed", function() {
          PersonInfo.person.aboutMe = _this.edbAboutMe.string;
        });
        this.edbGoal.node.on("touchstart", function() {
          _this.resetAboutData();
          _this.scrollBadge.active = false;
        });
        this.edbGoal.node.on("text-changed", function() {
          PersonInfo.person.goal = _this.edbGoal.string;
        });
        this.edbChangeTitle.node.on("text-changed", function() {
          _this.lblTitle.string = _this.edbChangeTitle.string;
          PersonInfo.person.title = _this.edbChangeTitle.string;
        });
        this.edbChangeTitle.node.on("touchstart", function() {
          _this.resetAboutData();
        });
      },
      showProfileData: function showProfileData() {
        this.lblChangeId.string = PersonInfo.person.id;
        this.edbChangeTitle.string = PersonInfo.person.title;
        this.lblTitle.string = PersonInfo.person.title;
        this.edbAboutMe.string = PersonInfo.person.aboutMe;
        this.edbGoal.string = PersonInfo.person.goal;
        this.lblName.string = PersonInfo.person.name;
        this.lblAchPoint.string = PersonInfo.person.achievementPoint;
        this.lblBadge.string = PersonInfo.person.badge;
      },
      onLoad: function onLoad() {},
      start: function start() {
        self = this;
        this.init();
        this.showProfileData();
        this.hideAllPanels();
        this.loginPanel.active = true;
        this.btnDiscount.node.active = false;
        this.bookOverView.active = true;
        this.btnReward.node.active = true;
        this.hourPanel.active = false;
        this.minPanel.active = false;
        this.eyePanel1.active = true;
        this.edbChangeTitle.active = false;
        this.scrollBadge.active = false;
        this.whowhatList.active = false;
        this.addFriendPanel.active = false;
        this.shardsPanel.active = false;
        this.cuponPanel.active = false;
        this.discountList.active = false;
        this.phone.active = false;
        this.planListPanel.active = false;
        this.brownChakrenPanel.active = false;
        this.swapCounter = 0;
        this.swapShards = [ this.shards, this.ticket, this.cupon ];
        this.swapShardsTicket();
        this.btnBackBottom.node.active = false;
        self.images = [];
        this.timeValue = 0;
        this.timesValue = 0;
        this.chakrenList = [ "BASE", "SACRAL", "SOLAR PLEXUS", "HEART", "THROAT", "BROW", "CROWN" ];
        this.chakrenCounter = 0;
        this.Calendar = cc.find("Canvas").getComponent("Calendar");
        this.eye = 0;
        this.chair = 0;
        this.countMin = 0;
        this.stabilityCounter = 0;
        this.breathCounter = 0;
      },
      hideAllPanels: function hideAllPanels() {
        this.pausePanel.active = false;
        this.bookInfo.active = false;
        this.tutorInfo.active = false;
        this.bookOverView.active = false;
        this.classInfo.active = false;
        this.purchasePanel.active = false;
        this.chapterContent.active = false;
        this.bgOverlay.active = false;
        this.planPanel.active = false;
        this.calendarPanel.active = false;
        this.achPanel.active = false;
        this.friendPanel.active = false;
        this.ticketPanel.active = false;
        this.profilePicPanel.active = false;
        this.typeDataPanel.active = false;
        this.agePanel.active = false;
        this.sexPanel.active = false;
        this.trainPanel.active = false;
        this.descPanel.active = false;
        this.challengePanel.active = false;
        this.clientBanner.active = false;
        this.eyeTrainingPanel.active = false;
        this.eyePanel2.active = false;
        this.inputField.active = false;
        this.stabilityPanel.active = false;
        this.btnInfo.node.active = false;
        this.zenBreathPanel.active = false;
        this.chakrenTrainPanel.active = false;
        this.alarmDaysHourPanel.active = false;
        this.achRewardPanel.active = false;
        this.pageAlarmDays.active = false;
        this.pageHour.active = false;
        this.pageMin.active = false;
        this.brownChakrenPanel.active = false;
        this.BookOverviewManager.hideAllPanels();
      },
      checkChakrenList: function checkChakrenList() {
        this.chakrenCounter < 0 ? this.chakrenCounter = 0 : this.chakrenCounter > this.chakrenList.length - 1 && (this.chakrenCounter = this.chakrenList.length - 1);
        this.lblChakren.string = this.chakrenList[this.chakrenCounter] + "\nCHAKREN";
      },
      hideTutorInfo: function hideTutorInfo() {
        this.tutorInfo.active = false;
      },
      showGoalPanel: function showGoalPanel() {
        this.resetAboutGoal();
        this.goalPanel.active = true;
      },
      showAboutPanel: function showAboutPanel() {
        this.resetAboutGoal();
        this.aboutPanel.active = true;
      },
      resetAboutGoal: function resetAboutGoal() {
        this.aboutPanel.active = false;
        this.goalPanel.active = false;
      },
      resetAboutData: function resetAboutData() {
        this.agePanel.active = false;
        this.sexPanel.active = false;
        this.religionPanel.active = false;
      },
      showAgePanel: function showAgePanel() {
        this.agePanel.active = !this.agePanel.active;
        true == this.sexPanel.active && (this.sexPanel.active = false);
        true == this.religionPanel.active && (this.religionPanel.active = false);
      },
      setAgeData: function setAgeData() {
        if (this.ageDataContainer.children.length > 0) return;
        for (var i = 0; i < 100; i++) {
          var temp = cc.instantiate(this.agePrefab);
          this.ageDataContainer.addChild(temp);
          temp.getComponent(cc.Label).string = i + 1;
          temp.name = (i + 1).toString();
          var ageTemp = this.ageDataContainer.children;
          this.ageButtons[i] = ageTemp[i].getComponent(cc.Label);
        }
        for (var i = 0; i < this.ageButtons.length; i++) this.ageButtons[i].node.on("touchend", this.fillAgeData, this);
      },
      fillAgeData: function fillAgeData(event) {
        this.btnAge.node.getChildByName("Label").getComponent(cc.Label).string = event.currentTarget.name;
        this.resetAboutData();
      },
      showSexPanel: function showSexPanel() {
        this.sexPanel.active = !this.sexPanel.active;
        true == this.agePanel.active && (this.agePanel.active = false);
        true == this.religionPanel.active && (this.religionPanel.active = false);
      },
      clickSexLabel: function clickSexLabel() {
        this.sexButtons = this.sexPanel.children;
        for (var i = 0; i < this.sexButtons.length; i++) this.sexButtons[i].on("touchstart", this.fillSexData, this);
      },
      fillSexData: function fillSexData(event) {
        this.btnSex.node.getChildByName("Label").getComponent(cc.Label).string = event.currentTarget.getComponent(cc.Label).string;
        this.resetAboutData();
      },
      showReligionPanel: function showReligionPanel() {
        this.religionPanel.active = !this.religionPanel.active;
        true == this.agePanel.active && (this.agePanel.active = false);
        true == this.sexPanel.active && (this.sexPanel.active = false);
      },
      clickReligionLabel: function clickReligionLabel() {
        this.religionButtons = this.religionPanel.children;
        for (var i = 0; i < this.religionButtons.length; i++) this.religionButtons[i].on("touchstart", this.fillReligionData, this);
      },
      fillReligionData: function fillReligionData(event) {
        this.btnReligion.node.getChildByName("Label").getComponent(cc.Label).string = event.currentTarget.getComponent(cc.Label).string;
        this.resetAboutData();
      },
      showHideTypeDataPanel: function showHideTypeDataPanel() {
        this.typeDataPanel.active = !this.typeDataPanel.active;
      },
      showHideShardsPanel: function showHideShardsPanel() {
        this.shardsPanel.active = !this.shardsPanel.active;
      },
      showPlantPanel: function showPlantPanel() {
        this.beansPanel.active = false;
        this.plantPanel.node.active = true;
      },
      showBeanPanel: function showBeanPanel() {
        this.plantPanel.node.active = false;
        this.beansPanel.active = true;
      },
      showPlanPanel: function showPlanPanel() {
        this.hideAllPanels();
        this.planPanel.active = true;
      },
      showBookInfo: function showBookInfo() {
        this.hideAllPanels();
        this.bookInfo.active = true;
      },
      hideBookInfo: function hideBookInfo() {
        this.bookInfo.active = false;
        this.bookOverView.active = true;
      },
      showBookOverView: function showBookOverView() {
        this.hideAllPanels();
        this.bookOverView.active = true;
      },
      showChapterContent: function showChapterContent() {
        this.hideAllPanels();
        this.chapterContent.active = true;
      },
      hideChapterContent: function hideChapterContent() {
        this.chapterContent.active = false;
      },
      onClickBtnReward: function onClickBtnReward() {
        this.btnDiscount.node.active = true;
        this.btnReward.node.active = false;
      },
      showTutorInfo: function showTutorInfo() {
        this.tutorInfo.active = !this.tutorInfo.active;
      },
      showClassInfo: function showClassInfo() {
        this.classInfo.active = true;
      },
      hideClassInfo: function hideClassInfo() {
        this.tutorInfo.active = false;
        this.classInfo.active = false;
      },
      showPurchasePanel: function showPurchasePanel() {
        this.purchasePanel.active = true;
      },
      hidePurchasePanel: function hidePurchasePanel() {
        this.purchasePanel.active = false;
      },
      showHidebtnInfo: function showHidebtnInfo() {
        this.btnInfo.node.active = !this.btnInfo.node.active;
        false == this.trainPanel.active && (this.btnInfo.node.active = false);
      },
      showHideDescPanel: function showHideDescPanel() {
        this.descPanel.active = !this.descPanel.active;
      },
      shwoHideChallengePanel: function shwoHideChallengePanel() {
        this.challengePanel.active = !this.challengePanel.active;
      },
      defaultMode: function defaultMode() {
        for (var i = 0; i < this.modeButtons.length; i++) this.modeButtons[i].active = 0 == i;
      },
      rightArrowClick: function rightArrowClick() {
        if (true == this.modeButtons[0].active) {
          this.resetDiff();
          this.modeButtons[1].active = true;
        } else if (true == this.modeButtons[1].active) {
          this.resetDiff();
          this.modeButtons[2].active = true;
        } else if (true == this.modeButtons[2].active) return;
      },
      leftArrowClick: function leftArrowClick() {
        if (true == this.modeButtons[2].active) {
          this.resetDiff();
          this.modeButtons[1].active = true;
        } else if (true == this.modeButtons[1].active) {
          this.resetDiff();
          this.modeButtons[0].active = true;
        } else if (true == this.modeButtons[0].active) return;
      },
      resetDiff: function resetDiff() {
        for (var i = 0; i < this.modeButtons.length; i++) this.modeButtons[i].active = false;
      },
      startTimer: function startTimer() {
        this.checkingTimerChal();
      },
      checkingTimerChal: function checkingTimerChal() {
        if (true == this.modeButtons[0].active) return;
        if (true == this.modeButtons[1].active) {
          this.lblTimer.string = "10:00";
          this.showHideDiffUI(false);
          this.showHideTimer(true);
          this.closeChallengePanel.active = false;
          this.setChallengeTimer("10:00");
        } else if (true == this.modeButtons[2].active) {
          this.lblTimer.string = "20:00";
          this.showHideDiffUI(false);
          this.showHideTimer(true);
          this.closeChallengePanel.active = false;
          this.setChallengeTimer("20:00");
        }
      },
      stopTimer: function stopTimer() {
        this.btntapToStopChallenge.node.active = true;
        this.btnStop.interactable = false;
        clearInterval(this.interval);
      },
      cancelStop: function cancelStop() {
        this.btntapToStopChallenge.node.active = false;
      },
      taptoStopChallenge: function taptoStopChallenge() {
        this.btntapToStopChallenge.node.active = false;
        this.showHideTimer(false);
        this.showHideDiffUI(true);
        this.defaultMode();
      },
      showHideTimer: function showHideTimer(isActive) {
        this.lblTimer.node.active = isActive;
        this.btnStopHolder.active = isActive;
      },
      showHideDiffUI: function showHideDiffUI(isActive) {
        this.buttonContainer.active = isActive;
        this.btnStart.node.active = isActive;
        this.btnRightArrow.node.active = isActive;
        this.btnLeftArrow.node.active = isActive;
      },
      ShowHideedbID: function ShowHideedbID() {
        this.inputField.active = !this.inputField.active;
      },
      showHideZenBreathPanel: function showHideZenBreathPanel() {
        this.zenBreathPanel.active = !this.zenBreathPanel.active;
        true == this.zenBreathPanel.active && (this.trainPanel.active = false);
      },
      showHideChaTrainingUI: function showHideChaTrainingUI(isActive) {
        this.chakBtnContainer.active = isActive;
        this.btnChakStart.node.active = isActive;
        this.btnChakRightArrow.node.active = isActive;
        this.btnChakLeftArrow.node.active = isActive;
      },
      showHideChakTimer: function showHideChakTimer(isActive) {
        this.lblChaTimer.node.active = isActive;
        this.btnFreq.node.active = isActive;
        this.btnChakStop.node.active = isActive;
        this.btnFreqRightArrow.node.active = isActive;
        this.btnFreqLeftArrow.node.active = isActive;
      },
      startChakTimer: function startChakTimer() {
        if (true != this.chakModeButtons[0].active) return;
        this.lblChaTimer.string = "20:00";
        this.showHideChaTrainingUI(false);
        this.showHideChakTimer(true);
        this.btnPulse.node.active = false;
        this.setChakrenTimer("20:00");
      },
      stopChakTimer: function stopChakTimer() {
        this.btnPulse.node.active = true;
        this.btnChakStop.interactable = false;
        this.saveBreathData();
        clearInterval(this.interval);
      },
      clickPulse: function clickPulse() {
        this.showHideChakTimer(false);
        this.showHideChaTrainingUI(true);
        this.btnPulse.node.active = false;
        this.btnChakStop.interactable = true;
      },
      chakRightArrowClick: function chakRightArrowClick() {
        if (true == this.chakModeButtons[0].active) {
          this.resetChakMode();
          this.chakModeButtons[1].active = true;
        } else if (true == this.chakModeButtons[1].active) {
          this.resetChakMode();
          this.chakModeButtons[2].active = true;
        } else if (true == this.chakModeButtons[2].active) {
          this.resetChakMode();
          this.chakModeButtons[3].active = true;
        } else if (true == this.chakModeButtons[3].active) {
          this.resetChakMode();
          this.chakModeButtons[4].active = true;
        } else if (true == this.chakModeButtons[4].active) {
          this.resetChakMode();
          this.chakModeButtons[5].active = true;
        } else if (true == this.chakModeButtons[5].active) {
          this.resetChakMode();
          this.chakModeButtons[6].active = true;
        } else if (true == this.chakModeButtons[6].active) return;
      },
      chakLeftArrowClick: function chakLeftArrowClick() {
        if (true == this.chakModeButtons[6].active) {
          this.resetChakMode();
          this.chakModeButtons[5].active = true;
        } else if (true == this.chakModeButtons[5].active) {
          this.resetChakMode();
          this.chakModeButtons[4].active = true;
        } else if (true == this.chakModeButtons[4].active) {
          this.resetChakMode();
          this.chakModeButtons[3].active = true;
        } else if (true == this.chakModeButtons[3].active) {
          this.resetChakMode();
          this.chakModeButtons[2].active = true;
        } else if (true == this.chakModeButtons[2].active) {
          this.resetChakMode();
          this.chakModeButtons[1].active = true;
        } else if (true == this.chakModeButtons[1].active) {
          this.resetChakMode();
          this.chakModeButtons[0].active = true;
        } else if (true == this.chakModeButtons[0].active) return;
      },
      defaultChakMode: function defaultChakMode() {
        this.resetChakMode();
        this.chakModeButtons[0].active = true;
      },
      resetChakMode: function resetChakMode() {
        for (var i = 0; i < this.chakModeButtons.length; i++) this.chakModeButtons[i].active = false;
      },
      getTodayDate: function getTodayDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0");
        var yyyy = today.getFullYear();
        today = mm + "/" + dd + "/" + yyyy;
        return today;
      },
      zoomEffect: function zoomEffect(targetNode) {
        targetNode.scale = 1.25;
        setTimeout(function() {
          targetNode.scale = 1;
        }, 250);
      },
      togglePanel: function togglePanel(nodePanel) {
        var isActive = nodePanel.active;
        this.hideAllPanels();
        nodePanel.active = isActive;
        nodePanel.active = !nodePanel.active;
        isActive && this.showBookOverView();
      },
      showHourPanel: function showHourPanel() {
        this.pageAlarmDays.node.active = false;
        this.pageMin.node.active = false;
        this.hourPanel.active = !this.hourPanel.active;
      },
      showMinPanel: function showMinPanel() {
        this.pageAlarmDays.node.active = false;
        this.pageHour.node.active = false;
        this.minPanel.active = !this.minPanel.active;
      },
      showEyeTrainingPanel: function showEyeTrainingPanel() {
        this.eyeTrainingPanel.active = true;
      },
      showEyePanel2: function showEyePanel2() {
        this.eyePanel2.active = true;
      },
      showStabilityPanel: function showStabilityPanel() {
        this.stabilityPanel.active = true;
        this.stabilityMenu.active = true;
        this.pausePanel.active = false;
      },
      showPausePanel: function showPausePanel() {
        this.hideAllPanels();
        this.stabilityPanel.active = true;
        this.stabilityMenu.active = false;
        this.pausePanel.active = true;
        this.timerLabel.node.active = true;
        this.lblPause.active = false;
        this.btnStopStability.node.active = false;
      },
      hidePausePanel: function hidePausePanel() {
        this.pausePanel.active = false;
      },
      showTrainPanel: function showTrainPanel() {
        this.hideAllPanels();
        this.descPanel.active = false;
        this.challengePanel.active = false;
        this.trainPanel.active = true;
      },
      showAchievementPanel: function showAchievementPanel() {
        this.hideAllPanels();
        this.achPanel.active = true;
      },
      showDiaryPanel: function showDiaryPanel() {
        this.notePanel.active = false;
        this.trainingMode.active = true;
        this.diaryUI.active = true;
      },
      showPlanList: function showPlanList() {
        this.planListPanel.active = true;
      },
      showPauseAndStop: function showPauseAndStop() {
        this.btnStopStability.node.active = !this.btnStopStability.node.active;
        this.lblPause.active = !this.lblPause.active;
        this.timerLabel.node.active = !this.timerLabel.node.active;
      },
      showAlarmDaysHourPanel: function showAlarmDaysHourPanel() {
        this.pageHour.node.active = false;
        this.pageMin.node.active = false;
        this.alarmDaysHourPanel.active = !this.alarmDaysHourPanel.active;
      },
      setTimer: function setTimer(time) {
        var countDown = time.split(":");
        var countSec = parseInt(countDown[1], 10);
        var countMin = parseInt(countDown[0], 10);
        var secs = 60 * countMin;
        clearInterval(this.interval);
        this.interval = setInterval(function() {
          if (0 == countMin & 0 == countSec) {
            clearInterval(self.interval);
            self.saveStabilityData();
          }
          var output = "";
          if (0 == countSec) {
            countMin -= 1;
            countSec = 60;
          }
          countSec--;
          secs--;
          output = countMin < 10 ? "0" + countMin : countMin;
          output += countSec < 10 ? ": 0" + countSec : ":" + countSec;
          self.secs = secs;
          self.time = output;
          self.timerLabel.string = output;
          self.saveStabilityData();
        }, 1e3);
      },
      setChallengeTimer: function setChallengeTimer(time) {
        var countDown = time.split(":");
        var countSec = parseInt(countDown[1], 10);
        var countMin = parseInt(countDown[0], 10);
        clearInterval(this.interval);
        this.interval = setInterval(function() {
          1 == countMin & 1 == countSec && clearInterval(self.interval);
          var output = "";
          if (0 == countSec) {
            countMin -= 1;
            countSec = 60;
          }
          countSec--;
          output = countMin < 10 ? "0" + countMin : countMin;
          output += countSec < 10 ? ": 0" + countSec : ":" + countSec;
          self.time = output;
          self.lblTimer.string = output;
        }, 1e3);
      },
      setChakrenTimer: function setChakrenTimer(time) {
        var countDown = time.split(":");
        var countSec = parseInt(countDown[1], 10);
        var countMin = parseInt(countDown[0], 10);
        clearInterval(this.interval);
        this.interval = setInterval(function() {
          if (1 == countMin & 1 == countSec) {
            this.saveBreathData();
            clearInterval(self.interval);
          }
          var output = "";
          if (0 == countSec) {
            countMin -= 1;
            countSec = 60;
          }
          countSec--;
          output = countMin < 10 ? "0" + countMin : countMin;
          output += countSec < 10 ? ": 0" + countSec : ":" + countSec;
          self.time = output;
          self.lblChaTimer.string = output;
          self.saveBreathData();
        }, 1e3);
      },
      NextPage: function NextPage(pView) {
        pView.setCurrentPageIndex((pView.getCurrentPageIndex() + 1) % pView.getPages().length);
      },
      showChangeTitle: function showChangeTitle() {
        this.btnChangeTitle.node.active = false;
        this.edbChangeTitle.active = true;
      },
      changeProfilePic: function changeProfilePic() {},
      showscrollBadge: function showscrollBadge() {
        this.scrollBadge.active = !this.scrollBadge.active;
      },
      showBadgeList: function showBadgeList() {
        for (var i = 0; i < this.badgeList.length; i++) {
          this.badgeList[i].on("touchstart", this.targetBadgeItem, this);
          this.badgeList[i].myParam = i;
        }
      },
      targetBadgeItem: function targetBadgeItem(event) {
        this.arr = [ "GrandMaster", "Topson", "Ceb" ];
        var target = this.arr[event.currentTarget.myParam];
        PersonInfo.person.badge = target;
        this.scrollBadge.active = false;
        this.lblBadge.string = PersonInfo.person.badge;
      },
      swapShardsTicket: function swapShardsTicket() {
        this.hideShards();
        this.swapCounter > 2 && (this.swapCounter = 0);
        this.swapShards[this.swapCounter].active = true;
        this.swapCounter++;
      },
      hideShards: function hideShards() {
        for (var i = 0; i < this.swapShards.length; i++) this.swapShards[i].active = false;
      },
      savePhoneData: function savePhoneData() {
        var date = this.getTodayDate();
        if (null == date) return;
        var _game = MiniGame.getGameByDate(date);
        null == _game && (_game = MiniGame.getNewGame(date));
        _game.phone = true;
        Note.saveGameID(date, _game.id);
      },
      saveStabilityData: function saveStabilityData() {
        var date = this.getTodayDate();
        if (null == date) return;
        var _game = MiniGame.getGameByDate(date);
        if (null == _game) {
          this.stabilityCounter = 0;
          _game = MiniGame.getNewGame(date);
          _game.stability = this.stabilityCounter;
        } else {
          this.stabilityCounter++;
          _game.stability = this.stabilityCounter;
        }
        Note.saveGameID(date, _game.id);
      },
      saveBreathData: function saveBreathData() {
        var date = this.getTodayDate();
        if (null == date) return;
        var _game = MiniGame.getGameByDate(date);
        if (null == _game) {
          this.breathCounter = 0;
          _game = MiniGame.getNewGame(date);
          _game.breath = this.breathCounter;
        } else {
          this.breathCounter++;
          _game.breath = this.breathCounter;
          console.log("Shi tal" + this.breathCounter);
        }
        Note.saveGameID(date, _game.id);
      },
      saveEyeData: function saveEyeData() {
        var date = this.getTodayDate();
        if (null == date) return;
        var _game = MiniGame.getGameByDate(date);
        null == _game && (_game = MiniGame.getNewGame(date));
        _game.eyeMovement = true;
        Note.saveGameID(date, _game.id);
      },
      showGameData: function showGameData() {
        var date = this.getClickedDate();
        var _game = MiniGame.getGameByDate(date);
        MiniGame.showMiniGameData(_game);
      },
      getClickedDate: function getClickedDate() {
        var _date = this.date;
        console.log("...............................Date : " + _date);
        return _date;
      },
      todayDate: function todayDate() {
        var temp = this.getTodayDate();
        var array = temp.split("/");
        var _today = array[1] + "/" + array[0] + "/" + array[2];
        this.date = _today;
      },
      showClientBanner: function showClientBanner() {
        this.togglePanel(this.clientBanner);
      },
      showImgBackground: function showImgBackground() {
        cc.loader.loadResDir("", cc.SpriteFrame, function(err, assets) {
          self.images = assets;
        });
      }
    });
    cc._RF.pop();
  }, {
    "./Calendar": "Calendar",
    "./models/MiniGame": "MiniGame",
    "./models/Note": "Note",
    "./models/PersonInfo": "PersonInfo",
    "./models/Plan.js": "Plan"
  } ]
}, {}, [ "AchData", "AchievementManager", "Alarm", "BookInfoManager", "BookOverviewManager", "Calendar", "ChapterController", "ClassController", "Day", "Firebase", "FriendData", "FriendManager", "GLOBALS", "ItemController", "Notification", "SpawnEmojis", "SpawnSurprise", "UIManager", "Achievement", "Chapter", "Class", "Diary", "Friend", "MiniGame", "Note", "PersonInfo", "Plan", "PowerLevel", "Tutor" ]);