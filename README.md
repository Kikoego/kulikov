Дипломный проект на React

Используеться TS, React, Tailwind, CSS

Ссылка для просмотра - github pages: https://kikoego.github.io/kulikov/

Важно!
Проект сделан по видео-уроку: https://www.youtube.com/watch?v=mUvYGUYMvKo
В проекте есть дополнения и изменённая логика, в основном в движении фигур и логике создания игры для просмотра изменённой логики посмотрите компоненты фигур, cell, board. Для просмотра логики создания игры посмотрите 

Документация по компонентам:

Компонент Cell:

1. `constructor`: Конструктор класса, который устанавливает начальные значения для координат ячейки, цвета, фигуры и доски.

2. `isEmpty`: Метод, который проверяет, пустая ли ячейка (не содержит ли фигуры).

3. `isEnemy`: Метод, который проверяет, является ли фигура в целевой ячейке враждебной по отношению к фигуре в текущей ячейке.

4. `isEmptyVertical`, `isEmptyHorizontal`, `isEmptyDiagonal`: Методы, которые проверяют, есть ли пустые ячейки между текущей ячейкой и целевой ячейкой по вертикали, горизонтали и диагонали соответственно.

5. `setFigure`: Метод, который устанавливает фигуру в ячейку и устанавливает эту ячейку как ячейку фигуры.

6. `addLostFigure`: Метод, который добавляет фигуру в массив потерянных фигур в зависимости от цвета.

7. `moveFigure`: Метод, который перемещает фигуру из текущей ячейки в целевую ячейку, если фигура может переместиться, и обновляет соответствующие свойства.

Этот класс реализует функциональность для игровой ячейки в шахматах, включая проверку наличия фигуры в ячейке, перемещение фигур, проверку возможности хода и так далее.

Компонент Board:

1. `initCells`: Метод для инициализации ячеек доски. Создает 64 ячейки (8x8) и заполняет их чередующимися цветами.

2. `getCopyBoard`: Метод для создания копии доски.

3. `highlightCells`: Метод для подсветки доступных ячеек для хода выбранной фигуры.

4. `getCell`: Метод для получения ячейки по её координатам x и y.

5. `addPawns`, `addKings`, `addQueens`, `addBishops`, `addKnights`, `addRooks`: Приватные методы для добавления фигур на доску в начале игры. Создают и располагают на доске пешки, королей, ферзей, слонов, коней и ладей соответственно.

6. `addFigures`: Метод для вызова приватных методов добавления фигур на доску.

Данный класс представляет основную логику для управления доской и взаимодействия с игровыми ячейками и фигурами. Как указано в комментарии, код может быть улучшен, чтобы избежать взаимной зависимости между доской и ячейками, но он выполняет функцию размещения фигур на доске и инициализации игрового поля.

Компонент Figure:

1. `constructor`: Конструктор класса, который устанавливает цвет, начальную позицию фигуры на доске, логотип фигуры, название и уникальный идентификатор. Он также устанавливает ссылку на эту фигуру в соответствующую ячейку.

2. `canMove`: Абстрактный метод, который проверяет возможность хода фигуры на указанную целевую ячейку. Реализация этого метода должна выполнять специфичную для каждой фигуры логику проверки возможности хода.

3. `moveFigure`: Метод, который будет реализован в подклассах и отвечает за перемещение фигуры на указанную целевую ячейку.

Этот класс предоставляет базовую реализацию для всех шахматных фигур, включая логику проверки возможности хода. Конкретная логика хода реализуется в подклассах (например, в Bishop, King, Knight и т. д.) через переопределение метода `canMove`.

Классы Фигур:

1. `constructor`: Конструктор класса, который устанавливает цвет и начальную позицию фигуры на доске. Он также определяет логотип (изображение) слона в зависимости от цвета.

2. `canMove`: Метод для проверки возможности хода для фигуры. Сначала вызывается метод `canMove` из родительского класса (Figure) для проверки базовых условий перемещения фигуры. Затем метод проверяет, может ли фигура переместиться на целевую ячейку по диагонали, используя методы `isEmptyDiagonal`, `isEmptyVertical`, `isEmptyHorizontal` из класса `Cell`.
