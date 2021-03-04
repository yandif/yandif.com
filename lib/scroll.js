export default function scroll() {
  let isEdge = /Edge/.test(navigator.userAgent);
  let _isBot,
    _useHash,
    _scrollX,
    _scrollY,
    _nodeX,
    _nodeY,
    _itFrame,
    _scrollId = -1,
    _bookMark,
    /*
     * nDuration：每帧的持续时间（以毫秒为单位）
     * nFrames：每次滚动的帧数
     */
    nDuration = 100,
    nFrames = 60;

  function _next() {
    if (_itFrame > nFrames) {
      clearInterval(_scrollId);
      _scrollId = -1;
      return;
    }
    _isBot = true;
    if (isEdge) {
      document.body.scrollTop = Math.round(
        _scrollY + ((_nodeY - _scrollY) * _itFrame) / nFrames
      );
      document.body.scrollLeft = Math.round(
        _scrollX + ((_nodeX - _scrollX) * _itFrame) / nFrames
      );
    } else {
      document.documentElement.scrollTop = Math.round(
        _scrollY + ((_nodeY - _scrollY) * _itFrame) / nFrames
      );
      document.documentElement.scrollLeft = Math.round(
        _scrollX + ((_nodeX - _scrollX) * _itFrame) / nFrames
      );
    }

    if (_useHash && _itFrame === nFrames) {
      location.hash = _bookMark;
    }
    _itFrame++;
  }

  function _chkOwner() {
    if (_isBot) {
      _isBot = false;
      return;
    }
    if (_scrollId > -1) {
      clearInterval(_scrollId);
      _scrollId = -1;
    }
  }

  if (window.addEventListener) {
    window.addEventListener("scroll", _chkOwner, false);
  } else if (window.attachEvent) {
    window.attachEvent("onscroll", _chkOwner);
  }
  scroll = function (sBookmark, bUseHash) {
    if (isEdge) {
      _scrollY = document.body.scrollTop;
      _scrollX = document.body.scrollLeft;
    } else {
      _scrollY = document.documentElement.scrollTop;
      _scrollX = document.documentElement.scrollLeft;
    }

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
}
