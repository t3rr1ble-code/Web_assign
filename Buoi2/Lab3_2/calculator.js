// Lưu trữ lịch sử các phép tính
let calculationHistory = [];

// Hàm thêm ký tự vào màn hình hiển thị
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Thêm ký tự vào ô hiển thị
}

// Hàm xóa màn hình hiển thị
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = ''; // Xóa nội dung trong ô hiển thị
}

// Hàm chuyển đổi biểu thức trung tố (infix) sang hậu tố (postfix)
function infixToPostfix(infix) {
    const stack = [];
    let postfix = '';
    const precedence = (operator) => {
        if (operator === '+' || operator === '-') return 1;
        if (operator === '*' || operator === '/') return 2;
        return 0;
    };

    for (let i = 0; i < infix.length; i++) {
        const token = infix[i];

        if (!isNaN(token)) {
            // Nếu là số, thêm vào chuỗi hậu tố
            postfix += token;
        } else if (token === '(') {
            // Nếu là dấu mở ngoặc, đẩy vào stack
            stack.push(token);
        } else if (token === ')') {
            // Nếu là dấu đóng ngoặc, lấy các toán tử ra khỏi stack cho đến khi gặp dấu mở ngoặc
            while (stack.length && stack[stack.length - 1] !== '(') {
                postfix += stack.pop();
            }
            stack.pop(); // Bỏ dấu mở ngoặc
        } else {
            // Nếu là toán tử, xử lý độ ưu tiên
            while (
                stack.length &&
                precedence(token) <= precedence(stack[stack.length - 1])
            ) {
                postfix += stack.pop();
            }
            stack.push(token); // Thêm toán tử vào stack
        }
    }

    // Lấy các toán tử còn lại trong stack
    while (stack.length) {
        postfix += stack.pop();
    }

    return postfix;
}

// Hàm tính toán biểu thức hậu tố (postfix)
function evaluatePostfix(postfix) {
    const stack = [];
    for (let i = 0; i < postfix.length; i++) {
        const token = postfix[i];
        if (!isNaN(token)) {
            // Nếu là số, thêm vào stack
            stack.push(Number(token));
        } else {
            // Nếu là toán tử, lấy hai toán hạng từ stack và thực hiện phép tính
            const b = stack.pop();
            const a = stack.pop();
            switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
            }
        }
    }
    return stack.pop(); // Kết quả cuối cùng
}

// Hàm tính toán biểu thức
function calculate() {
    const display = document.getElementById('display');
    const infixExpression = display.value;

    try {
        const postfixExpression = infixToPostfix(infixExpression); // Chuyển đổi sang hậu tố
        const result = evaluatePostfix(postfixExpression); // Tính toán biểu thức hậu tố
        display.value = result; // Hiển thị kết quả
        addToHistory(`${infixExpression} = ${result}`); // Thêm vào lịch sử
    } catch (error) {
        display.value = 'Error'; // Hiển thị lỗi nếu có
    }
}

// Hàm thêm phép tính vào lịch sử
function addToHistory(calculation) {
    calculationHistory.push(calculation);
    displayHistory();
}

// Hàm hiển thị lịch sử
function displayHistory() {
    const historyContainer = document.getElementById('history');
    historyContainer.innerHTML = ''; // Xóa lịch sử cũ
    calculationHistory.forEach((calc, index) => {
        const historyItem = document.createElement('div');
        historyItem.textContent = `${index + 1}: ${calc}`;
        historyContainer.appendChild(historyItem);
    });
}

// Hàm xóa lịch sử
function clearHistory() {
    calculationHistory = [];
    displayHistory();
}