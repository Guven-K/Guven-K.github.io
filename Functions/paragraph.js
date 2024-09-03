const paragraphText = `
    I am an experienced software developer who thrives on crafting software and desktop applications using a variety of programming languages.
    My expertise lies in C#, .NET, Java, and C++. Particularly proficient in C#.
    In addition, I also specialie in GUI frameworks such as WPF and Avalonia.
`;

const lines = paragraphText.trim().split('\n');
const container = document.getElementById('code-container');

lines.forEach((line, index) => {
    const lineNumber = index + 1;
    
    const lineElement = document.createElement('div');
    lineElement.style.display = 'flex';
    
    const numberElement = document.createElement('span');
    numberElement.style.color = '#888';
    numberElement.style.width = '30px';
    numberElement.style.textAlign = 'right';
    numberElement.style.marginRight = '10px';
    numberElement.textContent = lineNumber;
    
    const textElement = document.createElement('span');
    textElement.style.fontFamily = `'Courier New', Courier, monospace`;
    textElement.textContent = line.trim();
    
    lineElement.appendChild(numberElement);
    lineElement.appendChild(textElement);
    container.appendChild(lineElement);
});
