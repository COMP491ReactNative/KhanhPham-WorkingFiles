_maybeCallOnEndReached: function(event?: Object) {
  console.log("_maybeCallOnEndReached");
  console.log("this.props.onEndReached", this.props.onEndReached);
  console.log("this.scrollProperties.contentLength !== this._sentEndForContentLength", this.scrollProperties.contentLength !== this._sentEndForContentLength);
  console.log("this._getDistanceFromEnd(this.scrollProperties) < this.props.onEndReachedThreshold", this._getDistanceFromEnd(this.scrollProperties) < this.props.onEndReachedThreshold);
  console.log("this.state.curRenderedRowsCount === (this.props.enableEmptySections ? this.props.dataSource.getRowAndSectionCount() : this.props.dataSource.getRowCount()", this.state.curRenderedRowsCount === (this.props.enableEmptySections ? this.props.dataSource.getRowAndSectionCount() : this.props.dataSource.getRowCount());
  if (this.props.onEndReached &&
      this.scrollProperties.contentLength !== this._sentEndForContentLength &&
      this._getDistanceFromEnd(this.scrollProperties) < this.props.onEndReachedThreshold &&
      this.state.curRenderedRowsCount === (this.props.enableEmptySections ? this.props.dataSource.getRowAndSectionCount() : this.props.dataSource.getRowCount()
    ))
      {
    this._sentEndForContentLength = this.scrollProperties.contentLength;
    this.props.onEndReached(event);
    console.log("will return true");
    return true;
  }
  console.log("will return false");
  return false;
},
