_updateVisibleRows: function(updatedFrames?: Array<Object>) {
    if (!this.props.onChangeVisibleRows) {
      return; // No need to compute visible rows if there is no callback
    }
    if (updatedFrames) {
      updatedFrames.forEach((newFrame) => {
        this._childFrames[newFrame.index] = merge(newFrame);
      });
    }
    var isVertical = !this.props.horizontal;
    var dataSource = this.props.dataSource;
    var visibleMin = this.scrollProperties.offset;
    var visibleMax = visibleMin + this.scrollProperties.visibleLength;
    var allRowIDs = dataSource.rowIdentities;

    var header = this.props.renderHeader && this.props.renderHeader();
    var totalIndex = header ? 1 : 0;
    var visibilityChanged = false;
    var changedRows = {};
    for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
      var rowIDs = allRowIDs[sectionIdx];
      if (rowIDs.length === 0) {
        continue;
      }
      var sectionID = dataSource.sectionIdentities[sectionIdx];
      if (this.props.renderSectionHeader) {
        totalIndex++;
      }
      var visibleSection = this._visibleRows[sectionID];
      if (!visibleSection) {
        visibleSection = {};
      }
      for (var rowIdx = 0; rowIdx < rowIDs.length; rowIdx++) {
        var rowID = rowIDs[rowIdx];
        var frame = this._childFrames[totalIndex];
        totalIndex++;
        if (this.props.renderSeparator &&
           (rowIdx !== rowIDs.length - 1 || sectionIdx === allRowIDs.length - 1)){
          totalIndex++;
        }
        if (!frame) {
          break;
        }
        var rowVisible = visibleSection[rowID];
        var min = isVertical ? frame.y : frame.x;
        var max = min + (isVertical ? frame.height : frame.width);
        if ((!min && !max) || (min === max)) {
          break;
        }
        if (min > visibleMax || max < visibleMin) {
          if (rowVisible) {
            visibilityChanged = true;
            delete visibleSection[rowID];
            if (!changedRows[sectionID]) {
              changedRows[sectionID] = {};
            }
            changedRows[sectionID][rowID] = false;
          }
        } else if (!rowVisible) {
          visibilityChanged = true;
          visibleSection[rowID] = true;
          if (!changedRows[sectionID]) {
            changedRows[sectionID] = {};
          }
          changedRows[sectionID][rowID] = true;
        }
      }
      if (!isEmpty(visibleSection)) {
        this._visibleRows[sectionID] = visibleSection;
      } else if (this._visibleRows[sectionID]) {
        delete this._visibleRows[sectionID];
      }
    }
    visibilityChanged && this.props.onChangeVisibleRows(this._visibleRows, changedRows);
  },
