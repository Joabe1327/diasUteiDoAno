function calculateWeekdays() {
    const year = parseInt(document.getElementById('year').value);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpa o resultado anterior

    const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    months.forEach((month, index) => {
        const daysInMonth = new Date(year, index + 1, 0).getDate();
        let weekdaysCount = 0;

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, index, day);
            const dayOfWeek = date.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclui domingos (0) e sábados (6)
                weekdaysCount++;
            }
        }

        const monthResult = document.createElement('div');
        monthResult.className = 'month-result';
        monthResult.textContent = `${month}: ${weekdaysCount} dias úteis`;
        resultDiv.appendChild(monthResult);
    });
}
