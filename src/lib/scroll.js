export default (() => {
  let _useHash,
    _scrollX,
    _scrollY,
    _nodeX,
    _nodeY,
    _itFrame,
    _scrollId = -1,
    _bookMark,
    nDuration = 100,
    nFrames = 60;

  function _next() {
    if (_itFrame > nFrames) {
      clearInterval(_scrollId);
      _scrollId = -1;
      return;
    }

    document.documentElement.scrollTop = Math.round(
      _scrollY + ((_nodeY - _scrollY) * _itFrame) / nFrames
    );
    document.documentElement.scrollLeft = Math.round(
      _scrollX + ((_nodeX - _scrollX) * _itFrame) / nFrames
    );

    if (_useHash && _itFrame === nFrames) {
      location.hash = _bookMark;
    }
    _itFrame++;
  }

  return function (sBookmark, bUseHash) {
    _scrollY = document.documentElement.scrollTop;
    _scrollX = document.documentElement.scrollLeft;
    _bookMark = sBookmark;
    _useHash = arguments.length === 1 || bUseHash;
    for (
      var nLeft = 0, nTop = 0, oNode = document.querySelector(sBookmark);
      oNode;
      nLeft += oNode.offsetLeft,
        nTop += oNode.offsetTop,
        oNode = oNode.offsetParent
    );
    (_nodeX = nLeft), (_nodeY = nTop), (_itFrame = 1);
    if (_scrollId === -1) {
      _scrollId = setInterval(_next, Math.round(nDuration / nFrames));
    }
  };
})();
