module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [{ 'id': 0, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Smile]', 'code': '/::)', 'web_code': '/??????', 'style': 'smiley_0' }, { 'id': 1, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Grimace]', 'code': '/::~', 'web_code': '/??????', 'style': 'smiley_1' }, { 'id': 2, 'cn': '[???]', 'hk': '[???]', 'us': '[Drool]', 'code': '/::B', 'web_code': '/???', 'style': 'smiley_2' }, { 'id': 3, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Scowl]', 'code': '/::|', 'web_code': '/??????', 'style': 'smiley_3' }, { 'id': 4, 'cn': '[??????]', 'hk': '[??????]', 'us': '[CoolGuy]', 'code': '/:8-)', 'web_code': '/??????', 'style': 'smiley_4' }, { 'id': 5, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Sob]', 'code': '/::<', 'web_code': '/??????', 'style': 'smiley_5' }, { 'id': 6, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Shy]', 'code': '/::$', 'web_code': '/??????', 'style': 'smiley_6' }, { 'id': 7, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Silent]', 'code': '/::X', 'web_code': '/??????', 'style': 'smiley_7' }, { 'id': 8, 'cn': '[???]', 'hk': '[???]', 'us': '[Sleep]', 'code': '/::Z', 'web_code': '/???', 'style': 'smiley_8' }, { 'id': 9, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Cry]', 'code': '/::"(', 'web_code': '/??????', 'style': 'smiley_9' }, { 'id': 10, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Awkward]', 'code': '/::-|', 'web_code': '/??????', 'style': 'smiley_10' }, { 'id': 11, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Angry]', 'code': '/::@', 'web_code': '/??????', 'style': 'smiley_11' }, { 'id': 12, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Tongue]', 'code': '/::P', 'web_code': '/??????', 'style': 'smiley_12' }, { 'id': 13, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Grin]', 'code': '/::D', 'web_code': '/??????', 'style': 'smiley_13' }, { 'id': 14, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Surprise]', 'code': '/::O', 'web_code': '/??????', 'style': 'smiley_14' }, { 'id': 15, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Frown]', 'code': '/::(', 'web_code': '/??????', 'style': 'smiley_15' }, { 'id': 16, 'cn': '[???]', 'hk': '[???]', 'us': '[Ruthless]', 'code': '/::+', 'web_code': '/???', 'style': 'smiley_16' }, { 'id': 17, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Blush]', 'code': '/:--b', 'web_code': '/??????', 'style': 'smiley_17' }, { 'id': 18, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Scream]', 'code': '/::Q', 'web_code': '/??????', 'style': 'smiley_18' }, { 'id': 19, 'cn': '[???]', 'hk': '[???]', 'us': '[Puke]', 'code': '/::T', 'web_code': '/???', 'style': 'smiley_19' }, { 'id': 20, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Chuckle]', 'code': '/:,@P', 'web_code': '/??????', 'style': 'smiley_20' }, { 'id': 21, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Joyful]', 'code': '/:,@-D', 'web_code': '/??????', 'style': 'smiley_21' }, { 'id': 22, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Slight]', 'code': '/::d', 'web_code': '/??????', 'style': 'smiley_22' }, { 'id': 23, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Smug]', 'code': '/:,@o', 'web_code': '/??????', 'style': 'smiley_23' }, { 'id': 24, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Hungry]', 'code': '/::g', 'web_code': '/??????', 'style': 'smiley_24' }, { 'id': 25, 'cn': '[???]', 'hk': '[???]', 'us': '[Drowsy]', 'code': '/:|-)', 'web_code': '/???', 'style': 'smiley_25' }, { 'id': 26, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Panic]', 'code': '/::!', 'web_code': '/??????', 'style': 'smiley_26' }, { 'id': 27, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Sweat]', 'code': '/::L', 'web_code': '/??????', 'style': 'smiley_27' }, { 'id': 28, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Laugh]', 'code': '/::>', 'web_code': '/??????', 'style': 'smiley_28' }, { 'id': 29, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Commando]', 'code': '/::,@', 'web_code': '/??????', 'style': 'smiley_29' }, { 'id': 30, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Determined]', 'code': '/:,@f', 'web_code': '/??????', 'style': 'smiley_30' }, { 'id': 31, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Scold]', 'code': '/::-S', 'web_code': '/??????', 'style': 'smiley_31' }, { 'id': 32, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Shocked]', 'code': '/:?', 'web_code': '/??????', 'style': 'smiley_32' }, { 'id': 33, 'cn': '[???]', 'hk': '[???]', 'us': '[Shhh]', 'code': '/:,@x', 'web_code': '/???', 'style': 'smiley_33' }, { 'id': 34, 'cn': '[???]', 'hk': '[???]', 'us': '[Dizzy]', 'code': '/:,@@', 'web_code': '/???', 'style': 'smiley_34' }, { 'id': 35, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Tormented]', 'code': '/::8', 'web_code': '/??????', 'style': 'smiley_35' }, { 'id': 36, 'cn': '[???]', 'hk': '[???]', 'us': '[Toasted]', 'code': '/:,@!', 'web_code': '/???', 'style': 'smiley_36' }, { 'id': 37, 'cn': '[??????]', 'hk': '[?????????]', 'us': '[Skull]', 'code': '/:!!!', 'web_code': '/??????', 'style': 'smiley_37' }, { 'id': 38, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Hammer]', 'code': '/:xx', 'web_code': '/??????', 'style': 'smiley_38' }, { 'id': 39, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Wave]', 'code': '/:bye', 'web_code': '/??????', 'style': 'smiley_39' }, { 'id': 40, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Speechless]', 'code': '/:wipe', 'web_code': '/??????', 'style': 'smiley_40' }, { 'id': 41, 'cn': '[??????]', 'hk': '[??????]', 'us': '[NosePick]', 'code': '/:dig', 'web_code': '/??????', 'style': 'smiley_41' }, { 'id': 42, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Clap]', 'code': '/:handclap', 'web_code': '/??????', 'style': 'smiley_42' }, { 'id': 43, 'cn': '[?????????]', 'hk': '[??????]', 'us': '[Shame]', 'code': '/:&-(', 'web_code': '/?????????', 'style': 'smiley_43' }, { 'id': 44, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Trick]', 'code': '/:B-)', 'web_code': '/??????', 'style': 'smiley_44' }, { 'id': 45, 'cn': '[?????????]', 'hk': '[?????????]', 'us': '[Bah???L]', 'code': '/:<@', 'web_code': '/?????????', 'style': 'smiley_45' }, { 'id': 46, 'cn': '[?????????]', 'hk': '[?????????]', 'us': '[Bah???R]', 'code': '/:@>', 'web_code': '/?????????', 'style': 'smiley_46' }, { 'id': 47, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Yawn]', 'code': '/::-O', 'web_code': '/??????', 'style': 'smiley_47' }, { 'id': 48, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Pooh-pooh]', 'code': '/:>-|', 'web_code': '/??????', 'style': 'smiley_48' }, { 'id': 49, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Shrunken]', 'code': '/:P-(', 'web_code': '/??????', 'style': 'smiley_49' }, { 'id': 50, 'cn': '[?????????]', 'hk': '[?????????]', 'us': '[TearingUp]', 'code': '/::"|', 'web_code': '/?????????', 'style': 'smiley_50' }, { 'id': 51, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Sly]', 'code': '/:X-)', 'web_code': '/??????', 'style': 'smiley_51' }, { 'id': 52, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Kiss]', 'code': '/::*', 'web_code': '/??????', 'style': 'smiley_52' }, { 'id': 53, 'cn': '[???]', 'hk': '[???]', 'us': '[Wrath]', 'code': '/:@x', 'web_code': '/???', 'style': 'smiley_53' }, { 'id': 54, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Whimper]', 'code': '/:8*', 'web_code': '/??????', 'style': 'smiley_54' }, { 'id': 55, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Cleaver]', 'code': '/:pd', 'web_code': '/??????', 'style': 'smiley_55' }, { 'id': 56, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Watermelon]', 'code': '/:<W>', 'web_code': '/??????', 'style': 'smiley_56' }, { 'id': 57, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Beer]', 'code': '/:beer', 'web_code': '/??????', 'style': 'smiley_57' }, { 'id': 58, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Basketball]', 'code': '/:basketb', 'web_code': '/??????', 'style': 'smiley_58' }, { 'id': 59, 'cn': '[??????]', 'hk': '[??????]', 'us': '[PingPong]', 'code': '/:oo', 'web_code': '/??????', 'style': 'smiley_59' }, { 'id': 60, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Coffee]', 'code': '/:coffee', 'web_code': '/??????', 'style': 'smiley_60' }, { 'id': 61, 'cn': '[???]', 'hk': '[???]', 'us': '[Rice]', 'code': '/:eat', 'web_code': '/???', 'style': 'smiley_61' }, { 'id': 62, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Pig]', 'code': '/:pig', 'web_code': '/??????', 'style': 'smiley_62' }, { 'id': 63, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Rose]', 'code': '/:rose', 'web_code': '/??????', 'style': 'smiley_63' }, { 'id': 64, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Wilt]', 'code': '/:fade', 'web_code': '/??????', 'style': 'smiley_64' }, { 'id': 65, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Lips]', 'code': '/:showlove', 'web_code': '/??????', 'style': 'smiley_65' }, { 'id': 66, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Heart]', 'code': '/:heart', 'web_code': '/??????', 'style': 'smiley_66' }, { 'id': 67, 'cn': '[??????]', 'hk': '[??????]', 'us': '[BrokenHeart]', 'code': '/:break', 'web_code': '/??????', 'style': 'smiley_67' }, { 'id': 68, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Cake]', 'code': '/:cake', 'web_code': '/??????', 'style': 'smiley_68' }, { 'id': 69, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Lightning]', 'code': '/:li', 'web_code': '/??????', 'style': 'smiley_69' }, { 'id': 70, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Bomb]', 'code': '/:bome', 'web_code': '/??????', 'style': 'smiley_70' }, { 'id': 71, 'cn': '[???]', 'hk': '[???]', 'us': '[Dagger]', 'code': '/:kn', 'web_code': '/???', 'style': 'smiley_71' }, { 'id': 72, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Soccer]', 'code': '/:footb', 'web_code': '/??????', 'style': 'smiley_72' }, { 'id': 73, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Ladybug]', 'code': '/:ladybug', 'web_code': '/??????', 'style': 'smiley_73' }, { 'id': 74, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Poop]', 'code': '/:shit', 'web_code': '/??????', 'style': 'smiley_74' }, { 'id': 75, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Moon]', 'code': '/:moon', 'web_code': '/??????', 'style': 'smiley_75' }, { 'id': 76, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Sun]', 'code': '/:sun', 'web_code': '/??????', 'style': 'smiley_76' }, { 'id': 77, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Gift]', 'code': '/:gift', 'web_code': '/??????', 'style': 'smiley_77' }, { 'id': 78, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Hug]', 'code': '/:hug', 'web_code': '/??????', 'style': 'smiley_78' }, { 'id': 79, 'cn': '[???]', 'hk': '[???]', 'us': '[ThumbsUp]', 'code': '/:strong', 'web_code': '/???', 'style': 'smiley_79' }, { 'id': 80, 'cn': '[???]', 'hk': '[???]', 'us': '[ThumbsDown]', 'code': '/:weak', 'web_code': '/???', 'style': 'smiley_80' }, { 'id': 81, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Shake]', 'code': '/:share', 'web_code': '/??????', 'style': 'smiley_81' }, { 'id': 82, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Peace]', 'code': '/:v', 'web_code': '/??????', 'style': 'smiley_82' }, { 'id': 83, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Fight]', 'code': '/:@)', 'web_code': '/??????', 'style': 'smiley_83' }, { 'id': 84, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Beckon]', 'code': '/:jj', 'web_code': '/??????', 'style': 'smiley_84' }, { 'id': 85, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Fist]', 'code': '/:@@', 'web_code': '/??????', 'style': 'smiley_85' }, { 'id': 86, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Pinky]', 'code': '/:bad', 'web_code': '/??????', 'style': 'smiley_86' }, { 'id': 87, 'cn': '[??????]', 'hk': '[??????]', 'us': '[RockOn]', 'code': '/:lvu', 'web_code': '/??????', 'style': 'smiley_87' }, { 'id': 88, 'cn': '[NO]', 'hk': '[NO]', 'us': '[Nuh-uh]', 'code': '/:no', 'web_code': '/NO', 'style': 'smiley_88' }, { 'id': 89, 'cn': '[OK]', 'hk': '[OK]', 'us': '[OK]', 'code': '/:ok', 'web_code': '/OK', 'style': 'smiley_89' }, { 'id': 90, 'cn': '[??????]', 'hk': '[??????]', 'us': '[InLove]', 'code': '/:love', 'web_code': '/??????', 'style': 'smiley_90' }, { 'id': 91, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Blowkiss]', 'code': '/:<L>', 'web_code': '/??????', 'style': 'smiley_91' }, { 'id': 92, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Waddle]', 'code': '/:jump', 'web_code': '/??????', 'style': 'smiley_92' }, { 'id': 93, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Tremble]', 'code': '/:shake', 'web_code': '/??????', 'style': 'smiley_93' }, { 'id': 94, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Aaagh!]', 'code': '/:<O>', 'web_code': '/??????', 'style': 'smiley_94' }, { 'id': 95, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Twirl]', 'code': '/:circle', 'web_code': '/??????', 'style': 'smiley_95' }, { 'id': 96, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Kotow]', 'code': '/:kotow', 'web_code': '/??????', 'style': 'smiley_96' }, { 'id': 97, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Dramatic]', 'code': '/:turn', 'web_code': '/??????', 'style': 'smiley_97' }, { 'id': 98, 'cn': '[??????]', 'hk': '[??????]', 'us': '[JumpRope]', 'code': '/:skip', 'web_code': '/??????', 'style': 'smiley_98' }, { 'id': 99, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Surrender]', 'code': '/:oY', 'web_code': '/??????', 'style': 'smiley_99' }, { 'id': 100, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Hooray]', 'code': '/:#-0', 'web_code': '/??????', 'style': 'smiley_100' }, { 'id': 101, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Meditate]', 'code': '/:hiphot', 'web_code': '/??????', 'style': 'smiley_101' }, { 'id': 102, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Smooch]', 'code': '/:kiss', 'web_code': '/??????', 'style': 'smiley_102' }, { 'id': 103, 'cn': '[?????????]', 'hk': '[?????????]', 'us': '[TaiChi L]', 'code': '/:<&', 'web_code': '/?????????', 'style': 'smiley_103' }, { 'id': 104, 'cn': '[?????????]', 'hk': '[?????????]', 'us': '[TaiChi R]', 'code': '/:&>', 'web_code': '/?????????', 'style': 'smiley_104' }, { 'id': 204, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Hey]', 'code': '', 'web_code': '', 'style': 'e2_04' }, { 'id': 205, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Facepalm]', 'code': '', 'web_code': '', 'style': 'e2_05' }, { 'id': 202, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Smirk]', 'code': '', 'web_code': '', 'style': 'e2_02' }, { 'id': 206, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Smart]', 'code': '', 'web_code': '', 'style': 'e2_06' }, { 'id': 212, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Moue]', 'code': '', 'web_code': '', 'style': 'e2_12' }, { 'id': 211, 'cn': '[???]', 'hk': '[??????]', 'us': '[Yeah!]', 'code': '', 'web_code': '', 'style': 'e2_11' }, { 'id': 207, 'cn': '[???]', 'hk': '[???]', 'us': '[Tea]', 'code': '', 'web_code': '', 'style': 'e2_07' }, { 'id': 209, 'cn': '[??????]', 'hk': '[Packet]', 'us': '[Packet]', 'code': '', 'web_code': '', 'style': 'e2_09' }, { 'id': 210, 'cn': '[??????]', 'hk': '[??????]', 'us': '[Candle]', 'code': '', 'web_code': '', 'style': 'e2_10' }, { 'id': 215, 'cn': '[???]', 'hk': '[???]', 'us': '[Blessing]', 'code': '', 'web_code': '', 'style': 'e2_15' }, { 'id': 214, 'cn': '[???]', 'hk': '[??????]', 'us': '[Chick]', 'code': '', 'web_code': '', 'style': 'e2_14' }, { 'id': 300, 'cn': '[??????]', 'emoji': '????', 'hk': '', 'us': '', 'code': "\\ue415", 'web_code': '', 'style': 'u1F604' }, { 'id': 301, 'cn': '[??????]', 'emoji': '????', 'hk': '', 'us': '', 'code': "\\ue40c", 'web_code': '', 'style': 'u1F637' }, { 'id': 302, 'cn': '[????????????]', 'emoji': '????', 'hk': '', 'us': '', 'code': "\\ue412", 'web_code': '', 'style': 'u1F602' }, { 'id': 303, 'cn': '[??????]', 'emoji': '????', 'hk': '', 'us': '', 'code': "\\ue409", 'web_code': '', 'style': 'u1F61D' }, { 'id': 304, 'cn': '[??????]', 'emoji': '????', 'hk': '', 'us': '', 'code': "\\ue40d", 'web_code': '', 'style': 'u1F633' }, { 'id': 305, 'cn': '[??????]', 'emoji': '????', 'hk': '', 'us': '', 'code': "\\ue107", 'web_code': '', 'style': 'u1F631' }, { 'id': 306, 'cn': '[??????]', 'emoji': '????', 'hk': '', 'us': '', 'code': "\\ue403", 'web_code': '', 'style': 'u1F614' }, { 'id': 307, 'cn': '[??????]', 'emoji': '????', 'hk': '', 'us': '', 'code': "\\ue40e", 'web_code': '', 'style': 'u1F612' }, { 'id': 308, 'cn': '[??????]', 'emoji': '????', 'hk': '', 'us': '', 'code': "\\ue11b", 'web_code': '', 'style': 'u1F47B' }, { 'id': 309, 'cn': '[??????]', 'emoji': '????', 'hk': '', 'us': '', 'code': "\\ue41d", 'web_code': '', 'style': 'u1F64F' }, { 'id': 310, 'cn': '[??????]', 'emoji': '????', 'hk': '', 'us': '', 'code': "\\ue14c", 'web_code': '', 'style': 'u1F4AA' }, { 'id': 311, 'cn': '[??????]', 'emoji': '????', 'hk': '', 'us': '', 'code': "\\ue312", 'web_code': '', 'style': 'u1F389' }, { 'id': 312, 'cn': '[??????]', 'hk': '', 'us': '', 'code': "\\ue112", 'web_code': '', 'style': 'u1F381' }, { 'id': 313, 'cn': '[??????]', 'hk': '[]', 'us': '[]', 'code': '', 'web_code': '', 'style': 'smiley_313' }, { 'id': 314, 'cn': '[??????]', 'hk': '[]', 'us': '[]', 'code': '', 'web_code': '', 'style': 'smiley_314' }, { 'id': 315, 'cn': '[???]', 'hk': '[]', 'us': '[]', 'code': '', 'web_code': '', 'style': 'smiley_315' }, { 'id': 316, 'cn': '[??????]', 'hk': '[]', 'us': '[]', 'code': '', 'web_code': '', 'style': 'smiley_316' }, { 'id': 317, 'cn': '[Emm]', 'hk': '[]', 'us': '[]', 'code': '', 'web_code': '', 'style': 'smiley_317' }, { 'id': 318, 'cn': '[????????????]', 'hk': '[]', 'us': '[]', 'code': '', 'web_code': '', 'style': 'smiley_318' }, { 'id': 319, 'cn': '[??????]', 'hk': '[]', 'us': '[]', 'code': '', 'web_code': '', 'style': 'smiley_319' }, { 'id': 320, 'cn': '[??????]', 'hk': '[]', 'us': '[]', 'code': '', 'web_code': '', 'style': 'smiley_320' }, { 'id': 321, 'cn': '[??????]', 'hk': '[]', 'us': '[]', 'code': '', 'web_code': '', 'style': 'smiley_321' }, { 'id': 322, 'cn': '[???]', 'hk': '[]', 'us': '[]', 'code': '', 'web_code': '', 'style': 'smiley_322' }];

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var emoji_data_1 = __webpack_require__(0);
var emoji_panel_data_1 = __webpack_require__(3);
var parser_1 = __webpack_require__(4);
var EMOTION_SIZE = 40;
var emotionMap = {};
var emotionNames = [];
emoji_data_1.default.forEach(function (item) {
    emotionMap[item.id] = item;
    emotionNames.push(item.cn);
});
var emotions = [];
emoji_panel_data_1.default.forEach(function (id) {
    return emotions.push(emotionMap[id]);
});
Component({
    options: {
        styleIsolation: 'page-shared',
        addGlobalClass: true,
        pureDataPattern: /^_/
    },
    properties: {
        padding: {
            type: Number,
            value: 15
        },
        backgroundColor: {
            type: String,
            value: '#EDEDED'
        },
        showSend: {
            type: Boolean,
            value: true
        },
        showDel: {
            type: Boolean,
            value: true
        },
        showHistory: {
            type: Boolean,
            value: true
        },
        height: {
            type: Number,
            value: 300
        },
        source: {
            type: String,
            value: ''
        }
    },
    data: {
        history: [],
        emotions: emotions,
        extraPadding: 0,
        perLine: 0
    },
    lifetimes: {
        attached: function attached() {
            var padding = this.data.padding;
            var systemInfo = wx.getSystemInfoSync();
            var areaWidth = systemInfo.windowWidth;
            var perLine = Math.floor((areaWidth - padding * 2) / 45);
            var extraPadding = Math.floor((areaWidth - padding * 2 - perLine * EMOTION_SIZE) / (perLine - 1));
            this.setData({
                perLine: perLine,
                extraPadding: extraPadding,
                hasSafeBottom: systemInfo.model.indexOf('iPhone X') >= 0
            });
        }
    },
    methods: {
        getEmojiNames: function getEmojiNames() {
            return emotionNames;
        },

        parseEmoji: parser_1.parseEmoji,
        insertEmoji: function insertEmoji(evt) {
            var data = this.data;
            var idx = evt.currentTarget.dataset.idx;
            var emotionName = data.emotions[idx].cn;
            this.LRUCache(data.history, data.perLine, idx);
            this.setData({ history: data.history });
            this.triggerEvent('insertemoji', { emotionName: emotionName });
        },
        deleteEmoji: function deleteEmoji() {
            this.triggerEvent('delemoji');
        },
        send: function send() {
            this.triggerEvent('send');
        },
        LRUCache: function LRUCache(arr, limit, data) {
            var idx = arr.indexOf(data);
            if (idx >= 0) {
                arr.splice(idx, 1);
                arr.unshift(data);
            } else if (arr.length < limit) {
                arr.push(data);
            } else if (arr.length === limit) {
                arr[limit - 1] = data;
            }
        }
    }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 60, 62, 63, 64, 65, 66, 67, 68, 70, 74, 75, 76, 78, 79, 80, 81, 82, 83, 84, 85, 89, 92, 93, 94, 95, 300, 301, 302, 303, 304, 305, 306, 307, 204, 205, 202, 206, 212, 211, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 308, 309, 310, 311, 312, 209];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEmoji = void 0;
var emoji_data_1 = __webpack_require__(0);
var emotionMap = {};
emoji_data_1.default.forEach(function (item, index) {
    if (item.cn) {
        emotionMap[item.cn] = item;
    }
    if (item.code) emotionMap[item.code] = item;
    if (item.us) emotionMap[item.us] = item;
});
var parseEmoji = function parseEmoji(content) {
    var emojiIndexList = [];
    for (var k in emotionMap) {
        var idx = content.indexOf(k);
        while (idx >= 0) {
            emojiIndexList.push({ idx: idx, code: k, type: 2 });
            idx = content.indexOf(k, idx + k.length);
        }
    }
    emojiIndexList = emojiIndexList.sort(function (a, b) {
        return a.idx - b.idx;
    });
    var newContentList = [];
    var lastTextIndex = 0;
    emojiIndexList.forEach(function (item) {
        if (lastTextIndex !== item.idx) {
            newContentList.push({
                type: 1,
                content: content.substring(lastTextIndex, item.idx)
            });
        }
        if (item.type === 2) {
            newContentList.push({
                type: item.type,
                content: content.substr(item.idx, item.code.length),
                imageClass: emotionMap[item.code].style
            });
        } else {
            newContentList.push({
                type: item.type,
                content: item.code,
                imageClass: item.value
            });
        }
        lastTextIndex = item.idx + item.code.length;
    });
    var lastText = content.substring(lastTextIndex);
    if (lastText) {
        newContentList.push({
            type: 1,
            content: lastText
        });
    }
    return newContentList;
};
exports.parseEmoji = parseEmoji;

/***/ })
/******/ ]);