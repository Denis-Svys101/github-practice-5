// Тест валидации
const result = main('World');
console.assert(result === 'Hello World!', 'Test failed');

try {
    main('');
    console.assert(false, 'Empty input should throw error');
} catch (e) {
    console.log('Validation works correctly');
}
