document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['notes'], (result) => {
      document.getElementById('notes').value = result.notes || '';
    });
  });
  
  document.getElementById('save').addEventListener('click', () => {
    const notes = document.getElementById('notes').value;
    
    chrome.storage.sync.set({ notes }, () => {
      alert('Anotações salvas!');
      
      const doc = new jsPDF();
      doc.text(notes, 10, 10);
      doc.save('anotacoes.pdf');
    });
  });
  