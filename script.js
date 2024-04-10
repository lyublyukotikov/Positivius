function toggleDropdown(event) {
  event.preventDefault(); // Предотвращаем действие по умолчанию (переход по ссылке)
 
  const dropdownText = event.target.closest('.about_working__wrapper').querySelector('.about_working__drop__text');
  const plusIcon = event.target.closest('.about_working__link').querySelector('.plus-icon');
  const minusIcon = event.target.closest('.about_working__link').querySelector('.minus-icon');

  if (dropdownText.style.display === 'none') {
    // Если текст скрыт, отображаем его и меняем иконку на минус
    dropdownText.style.display = 'block';
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'inline-block';
  
  } else {
    // Если текст отображен, скрываем его и меняем иконку на плюс
    dropdownText.style.display = 'none';
    plusIcon.style.display = 'inline-block';
    minusIcon.style.display = 'none';
    
}
}