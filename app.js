' + jsFile + '</s' + 'cript></body>');
          }

          container.innerHTML = `
          <div class="preview-iframe-container">
            <iframe class="preview-iframe" id="previewFrame"></iframe>
          </div>`;

          const iframe = $('previewFrame');
          if (iframe) {
            const doc = iframe.contentWindow || iframe.contentDocument?.document || iframe.contentDocument;
            doc.document.open();
            doc.document.write(combined);
            doc.document.close();
          }
        } else {
          if (copyBtn) copyBtn.style.display = 'flex';

          let fileIndex = tabIndex - 1;
          const fileNames = ['index.html', 'styles.css', 'script.js'];
          const targetName = fileNames[fileIndex];
          const content = generatedFiles[targetName] || '';
          const languages = ['html', 'css', 'javascript'];

          const lineCount = content.split('\n').length;
          const gutterHTML = Array.from({ length: lineCount }, (_, i) => `<span>${i + 1}</span>`).join('');

          container.innerHTML = `
          <div class="code-pre-container">
            <div class="line-numbers-gutter" id="streamingGutter">${gutterHTML}</div>
            <pre class="code-pre"><code class="language-${languages[fileIndex]}" id="codeBlock"></code></pre>
          </div>`;

          const codeBlock = $('codeBlock');
          if (codeBlock) {
            codeBlock.textContent = content;
            if (window.Prism) {
              Prism.highlightElement(codeBlock);
            }
          }
        }
      }

      function copyActiveCode() {
        if (!generatedFiles || activeTab === 0) return;
        const fileNames = ['index.html', 'styles.css', 'script.js'];
        const targetName = fileNames[activeTab - 1];
        const content = generatedFiles[targetName];
        if (!content) return;

        navigator.clipboard.writeText(content).then(() => {
          const btn = $('copyCodeBtn');
          const originalHTML = btn.innerHTML;
          btn.innerHTML = `
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg> Copied!`;
          setTimeout(() => {
            btn.innerHTML = originalHTML;
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      }

      function downloadZip() {
        if (!generatedFiles || !window.JSZip) {
          alert('Dependencies not loaded. Please try again.');
          return;
        }

        const zip = new JSZip();
        Object.entries(generatedFiles).forEach(([filename, content]) => {
          zip.file(filename, content);
        });

        const title = lastPipelineData?.plan?.project_title || 'web-project';
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'web-project';

        zip.generateAsync({ type: 'blob' }).then(content => {
          const url = URL.createObjectURL(content);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${slug}-code.zip`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }).catch(err => {
          console.error('Failed to generate ZIP: ', err);
          alert('Error generating ZIP file.');
        });
      }

      function applySuggestion(index) {
        // Apply suggestion from filter result, then analyze again
        const el = document.querySelector('#resultArea');
        const btns = el.querySelectorAll('.ex-pill');
        if (!btns || !btns[index]) return;
        const txt = btns[index].textContent || btns[index].innerText;
        $('promptInput').value = txt;
        $('charCount').textContent = txt.length + ' chars';
        analyzePrompt();
      }
    }