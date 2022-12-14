const formSendButton = document.getElementById('send-form');
formSendButton.addEventListener('click', (event) => {
  event.preventDefault();
  if(!checkPermission()){
    window.alert('Para enviar o formulário é necessário autorizar o uso das Imagens');
  }
});

const checkPermission = () => {
  const permissionCheckBox = document.getElementById('permissao-imagens');
  return permissionCheckBox.checked;
};

const verifyMinCharacters = (id) => {
  const verifyingField = document.getElementById(id);
  return verifyingField.length < 10 ? true : false;
};