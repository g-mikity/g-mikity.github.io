{
let outputText = "";
$("#timecardList tbody").has($(".check-ymd")).each(function(tbodyIndex, tbodyElement) {
	// ���͍s�̂ݎ擾
	// ToolTip�p�̍s�����݂��邽�ߓ��t�̃N���X�����邩�ǂ����Ŕ��f
	$(tbodyElement).children("tr").has($(".check-ymd")).each(function(trIndex, trElement) {
		let funcAddStr = function(text, addStr) {
			addStr = (addStr && addStr.trim().length) ? addStr : "";
			text = text + addStr + "\t";
			return text;
		};
		
		// td�^�O�擾
		$(trElement).children($("td")).each(function(tdIndex, tdElement) {
			// �K�v�ȏ����擾
			if (tdIndex == 0) {
				// ���t
				let text = $(tdElement).find(".check-ymd").attr("ymd");
				text = text.substr(0,4) + "/" + text.substr(4,2) + "/" + text.substr(6,2)
				outputText = outputText + text + "\t";
			} else if (tdIndex == 7) {
				// �J�n����
				let text = $(tdElement).find("input").val();
				outputText = funcAddStr(outputText, text);
			} else if (tdIndex == 9) {
				// �I������
				let text = $(tdElement).find("input").val();
				outputText = funcAddStr(outputText, text);
			} else if (tdIndex == 13) {
				// �R�����g
				let text = $(tdElement).find(".is-comment").text();
				outputText = funcAddStr(outputText, text) + "\r\n";
			}
		});
	});
});

// �e�L�X�g�G���A��p�ӂ���
let copyFrom = document.createElement("textarea");
// �e�L�X�g�G���A�֒l���Z�b�g
copyFrom.textContent = outputText;
 
// body�^�O�̗v�f���擾
let bodyElm = document.getElementsByTagName("body")[0];
// �q�v�f�Ƀe�L�X�g�G���A��z�u
bodyElm.appendChild(copyFrom);
 
// �e�L�X�g�G���A�̒l��I��
copyFrom.select();
// �R�s�[�R�}���h���s
let retVal = document.execCommand('copy');
// �ǉ��e�L�X�g�G���A���폜
bodyElm.removeChild(copyFrom);
};