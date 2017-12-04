
function translate(message)
{
  if(typeof(message) === 'string' || typeof(window.message) === 'string') {
    return message;
  }

  console.log('invalid translate variable');
  return false;
}

export default translate;