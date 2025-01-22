module.exports = class TextAlignmentCustomPlugin extends require('obsidian').Plugin {
    async onload() {
      console.log('Text Alignment Plugin loaded');
  
      // Add commands for text alignment
      this.addCommand({
        id: 'align-text-left',
        name: 'Align Text Left',
        editorCallback: (editor) => this.alignText(editor, 'left')
      });
  
      this.addCommand({
        id: 'align-text-right',
        name: 'Align Text Right',
        editorCallback: (editor) => this.alignText(editor, 'right')
      });
  
      this.addCommand({
        id: 'align-text-center',
        name: 'Align Text Center',
        editorCallback: (editor) => this.alignText(editor, 'center')
      });
  
      this.addCommand({
        id: 'align-text-justify',
        name: 'Justify Text',
        editorCallback: (editor) => this.alignText(editor, 'justify')
      });
    }
  
    onunload() {
      console.log('Text Alignment Plugin unloaded');
    }
  
    /**
     * Aligns the selected text in the editor.
     * @param {CodeMirror.Editor} editor - The editor instance.
     * @param {string} alignment - The alignment type ('left', 'right', 'center', 'justify').
     */
    alignText(editor, alignment) {
      const selectedText = editor.getSelection();
      if (!selectedText) {
        new Notice('No text selected!');
        return;
      }
  
      // Wrap the selected text in an HTML span with style
      const alignmentStyle = `style="text-align: ${alignment}; display: block;"`;
      const alignedText = `<span ${alignmentStyle}>${selectedText}</span>`;
  
      // Replace the selected text with aligned text
      editor.replaceSelection(alignedText);
    }
  };
  