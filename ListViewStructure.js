'use strict';

var ListViewDataSource = require('ListViewDataSource');
var React = require('React');
var ReactNative = require('ReactNative');
var RCTScrollViewManager = require('NativeModules').ScrollViewManager;
var ScrollView = require('ScrollView');
var ScrollResponder = require('ScrollResponder');
var StaticRenderer = require('StaticRenderer');
var TimerMixin = require('react-timer-mixin');
var cloneReferencedElement = require('react-clone-referenced-element');
var isEmpty = require('isEmpty');
var merge = require('merge');
var PropTypes = React.PropTypes;
var ListView = React.createClass({},
  propTypes: {
    ...ScrollView.propTypes,
    dataSource: PropTypes.instanceOf(ListViewDataSource).isRequired,
    renderSeparator: PropTypes.func,
    renderRow: PropTypes.func.isRequired,
    initialListSize: PropTypes.number.isRequired,
    onEndReached: PropTypes.func,
    onEndReachedThreshold: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    renderFooter: PropTypes.func,
    renderHeader: PropTypes.func,
    renderSectionHeader: PropTypes.func,
    renderScrollComponent: React.PropTypes.func.isRequired,
    scrollRenderAheadDistance: React.PropTypes.number.isRequired,
    onChangeVisibleRows: React.PropTypes.func,
    removeClippedSubviews: React.PropTypes.bool,
    stickySectionHeadersEnabled: React.PropTypes.bool,
    stickyHeaderIndices: PropTypes.arrayOf(PropTypes.number).isRequired,
    enableEmptySections: PropTypes.bool,
  },
  getMetrics: function() {},
  getScrollResponder: function() {},
  getScrollableNode: function() {},
  scrollTo: function(...args: Array<mixed>) {},
  scrollToEnd: function(options?: { animated?: boolean }) {},
  setNativeProps: function(props: Object) {},
  getDefaultProps: function() {},
  getInitialState: function() {},
  getInnerViewNode: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  componentWillReceiveProps: function(nextProps: Object) {},
  componentDidUpdate: function() {},
  _onRowHighlighted: function(sectionID: string, rowID: string) {},
  render: function() {},
  _measureAndUpdateScrollProps: function() {},
  _setScrollComponentRef: function(scrollComponent: Object) {},
  _onContentSizeChange: function(width: number, height: number) {},
  _onLayout: function(event: Object) {},
  _maybeCallOnEndReached: function(event?: Object) {},
  _renderMoreRowsIfNeeded: function() {},
  _pageInNewRows: function() {},
  _getDistanceFromEnd: function(scrollProperties: Object) {},
  _updateVisibleRows: function(updatedFrames?: Array<Object>) {},
  _onScroll: function(e: Object) {},
});
module.exports = ListView;
