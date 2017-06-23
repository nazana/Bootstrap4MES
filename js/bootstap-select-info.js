/*
Selectpicker.prototype = {
    constructor: Selectpicker,
    init: function () {},
    createDropdown: function() {},
    createView: function() {},
    reloadLi: function() {},
    createLi: function() {},
    findLis: function() {},
    render: function(updateLi) {},
    setStyle: function(style, status) {},
    liHeight: function(refresh) {},
    setSize: function() {},
    setWidth: function() {},
-->    selectPosition: function() {},
    setSelected: function(index, selected, $lis) {},
    setDisabled: function(index, disabled, $lis) {},
    isDisabled: function() {},
    checkDisabled: function() {},
    togglePlaceholder: function() {},
    tabIndex: function() {},
    clickListener: function() {},
-->    liveSearchListener: function() {},
    _searchStyle: function() {},
    val: function() {value},
    changeAll: function(status) {},
    selectAll: function() {},
    deselectAll: function() {},
    toggle: function(e) {},
    keydown: function(e) {},
    mobile: function() {},
    refresh: function() {},
    hide: function() {},
    show: function() {},
    remove: function() {},
    destroy: function() {}

  }
  */
(function ($) {
    'use strict';
  
  var Selectpicker = function (element, options) {

    this.$element = $(element);
    this.$newElement = null;
    this.$button = null;
    this.$menu = null;
    this.$lis = null;
    this.options = options;

    // If we have no title yet, try to pull it from the html title attribute (jQuery doesnt' pick it up as it's not a
    // data-attribute)
    if (this.options.title === null) {
      this.options.title = this.$element.attr('title');
    }

    // Format window padding
    var winPad = this.options.windowPadding;
    if (typeof winPad === 'number') {
      this.options.windowPadding = [winPad, winPad, winPad, winPad];
    }

    //Expose public methods
    this.val = Selectpicker.prototype.val;
    this.render = Selectpicker.prototype.render;
    this.refresh = Selectpicker.prototype.refresh;
    this.setStyle = Selectpicker.prototype.setStyle;
    this.selectAll = Selectpicker.prototype.selectAll;
    this.deselectAll = Selectpicker.prototype.deselectAll;
    this.destroy = Selectpicker.prototype.destroy;
    this.remove = Selectpicker.prototype.remove;
    this.show = Selectpicker.prototype.show;
    this.hide = Selectpicker.prototype.hide;

    this.init();
  };

  Selectpicker.prototype = {
    constructor: Selectpicker,
    init: function () {
      var that = this,
          id = this.$element.attr('id');
      
      this.$element.addClass('bs-select-hidden');
      
      this.liObj = {};
      this.$newElement = this.createView();
      
      
    },
    createDropdown: function() {
      // Options
      // If we are multiple or showTick option is set, then add the show-tick class
      var showTick = (this.multiple || this.options.showTick) ? ' show-tick' : '',
          inputGroup = this.$element.parent().hasClass('input-group') ? ' input-group-btn' : '',
          autofocus = this.autofocus ? ' autofocus' : '';
      // Elements
      var header = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + '</div>' : '';
      var searchbox = this.options.liveSearch ?
      '<div class="bs-searchbox">' +
      '<input type="text" class="form-control" autocomplete="off"' +
      (null === this.options.liveSearchPlaceholder ? '' : ' placeholder="' + htmlEscape(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search">' +
      '</div>'
          : '';
      var actionsbox = this.multiple && this.options.actionsBox ?
      '<div class="bs-actionsbox">' +
      '<div class="btn-group btn-group-lg btn-block">' +
      '<button type="button" class="actions-btn bs-select-all btn btn-default">' +
      this.options.selectAllText +
      '</button>' +
      '<button type="button" class="actions-btn bs-deselect-all btn btn-default">' +
      this.options.deselectAllText +
      '</button>' +
      '</div>' +
      '</div>'
          : '';
      var donebutton = this.multiple && this.options.doneButton ?
      '<div class="bs-donebutton">' +
      '<div class="btn-group btn-block">' +
      '<button type="button" class="btn btn-lg btn-default">' +
      this.options.doneButtonText +
      '</button>' +
      '</div>' +
      '</div>'
          : '';
      var drop =
          '<div class="btn-group bootstrap-select' + showTick + inputGroup + '">' +
          '<button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + autofocus + ' role="button">' +
          '<span class="filter-option pull-left"></span>&nbsp;' +
          '<span class="bs-caret">' +
          this.options.template.caret +
          '</span>' +
          '</button>' +
          '<div class="dropdown-menu open" role="combobox">' +
          header +
          searchbox +
          actionsbox +
          '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false">' +
          '</ul>' +
          donebutton +
          '</div>' +
          '</div>';

      return $(drop);
    },
    createView: function() {
      var $drop = this.createDropdown(),
          li = this.createLi();

      $drop.find('ul')[0].innerHTML = li;
      return $drop;
    },
    reloadLi: function() {},
    createLi: function() {},
    findLis: function() {},
    render: function(updateLi) {},
    setStyle: function(style, status) {},
    liHeight: function(refresh) {},
    setSize: function() {},
    setWidth: function() {},
    selectPosition: function() {},
    setSelected: function(index, selected, $lis) {},
    setDisabled: function(index, disabled, $lis) {},
    isDisabled: function() {},
    checkDisabled: function() {},
    togglePlaceholder: function() {},
    tabIndex: function() {},
    clickListener: function() {},
    liveSearchListener: function() {},
    _searchStyle: function() {},
    val: function() {value},
    changeAll: function(status) {},
    selectAll: function() {},
    deselectAll: function() {},
    toggle: function(e) {},
    keydown: function(e) {},
    mobile: function() {},
    refresh: function() {},
    hide: function() {},
    show: function() {},
    remove: function() {},
    destroy: function() {}

  }
  });