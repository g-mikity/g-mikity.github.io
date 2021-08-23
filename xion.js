{
let outputText = "";
$("#timecardList tbody").has($(".check-ymd")).each(function(tbodyIndex, tbodyElement) {
	// 入力行のみ取得
	// ToolTip用の行が存在するため日付のクラスがあるかどうかで判断
	$(tbodyElement).children("tr").has($(".check-ymd")).each(function(trIndex, trElement) {
		let funcAddStr = function(text, addStr) {
			addStr = (addStr && addStr.trim().length) ? addStr : "";
			text = text + addStr + "\t";
			return text;
		};
		
		// tdタグ取得
		$(trElement).children($("td")).each(function(tdIndex, tdElement) {
			// 必要な情報を取得
			if (tdIndex == 0) {
				// 日付
				let text = $(tdElement).find(".check-ymd").attr("ymd");
				text = text.substr(0,4) + "/" + text.substr(4,2) + "/" + text.substr(6,2)
				outputText = outputText + text + "\t";
			} else if (tdIndex == 7) {
				// 開始時刻
				let text = $(tdElement).find("input").val();
				outputText = funcAddStr(outputText, text);
			} else if (tdIndex == 9) {
				// 終了時刻
				let text = $(tdElement).find("input").val();
				outputText = funcAddStr(outputText, text);
			} else if (tdIndex == 13) {
				// コメント
				let text = $(tdElement).find(".is-comment").text();
				outputText = funcAddStr(outputText, text) + "\r\n";
			}
		});
	});
});

// テキストエリアを用意する
let copyFrom = document.createElement("textarea");
// テキストエリアへ値をセット
copyFrom.textContent = outputText;
 
// bodyタグの要素を取得
let bodyElm = document.getElementsByTagName("body")[0];
// 子要素にテキストエリアを配置
bodyElm.appendChild(copyFrom);
 
// テキストエリアの値を選択
copyFrom.select();
// コピーコマンド発行
let retVal = document.execCommand('copy');
// 追加テキストエリアを削除
bodyElm.removeChild(copyFrom);
};