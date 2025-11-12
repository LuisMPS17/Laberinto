const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const mainMenu = document.getElementById('mainMenu');
const gameArea = document.getElementById('gameArea');
const recordsScreen = document.getElementById('recordsScreen');
const nameInputScreen = document.getElementById('nameInputScreen');
const startGameBtn = document.getElementById('startGameBtn');
const recordsBtn = document.getElementById('recordsBtn');
const exitBtn = document.getElementById('exitBtn');
const backToMenuBtn = document.getElementById('backToMenuBtn');
const backFromRecordsBtn = document.getElementById('backFromRecordsBtn');
const restartBtn = document.getElementById('restartBtn');
const helpBtn = document.getElementById('helpBtn');
const helpWarning = document.getElementById('helpWarning');
const messageDiv = document.getElementById('message');
const memoryTimeDisplay = document.getElementById('memoryTime');
const memoryTimeContainer = document.getElementById('memoryTimeContainer');
const gameTimeContainer = document.getElementById('gameTimeContainer');
const progressBar = document.getElementById('progressBar');
const progressTime = document.getElementById('progressTime');
const playerNameInput = document.getElementById('playerNameInput');
const saveRecordBtn = document.getElementById('saveRecordBtn');
const recordTime = document.getElementById('recordTime');
const recordLevel = document.getElementById('recordLevel');
const recordsContent = document.getElementById('recordsContent');
const recordsTabs = document.getElementById('recordsTabs');
const clearRecordsBtn = document.getElementById('clearRecordsBtn');

let currentRecordsLevel = 0; // nivel actualmente mostrado en la pantalla de records

/* --------------------------------------------------------------------
   definición de niveles
   - cada nivel contiene: nombre, matriz del laberinto (grid), inicio,
     meta, tiempo de memorización y tiempo de juego.
   -------------------------------------------------------------------- */
const levels = [
    {
        name: 'Nivel 1',
        grid: [
            [1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,1,0,0,0,0,0,1],
            [1,0,1,1,0,1,0,1,1,1,0,1],
            [1,0,1,0,0,0,0,0,0,1,0,1],
            [1,0,1,0,1,1,1,1,0,1,0,1],
            [1,0,0,0,0,0,0,1,0,0,0,1],
            [1,1,1,1,1,1,0,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,1,0,1],
            [1,0,1,1,1,1,1,1,0,1,0,1],
            [1,0,1,0,0,0,0,1,0,0,0,1],
            [1,0,0,0,1,1,0,0,0,1,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        start: {x:1, y:1},
        goal: {x:10, y:10},
        memoryTime: 5,
        gameTime: 30
    },
    {
        name: 'Nivel 2',
        grid: [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,1,0,0,0,0,0,1,0,1],
            [1,0,1,1,0,1,1,1,0,1,0,1,0,1],
            [1,0,0,0,0,0,0,1,0,1,0,0,0,1],
            [1,1,1,1,1,1,0,1,0,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,0,0,0,1,0,1],
            [1,0,1,1,1,1,0,1,1,1,0,1,0,1],
            [1,0,0,0,0,0,0,0,0,1,0,0,0,1],
            [1,0,1,1,1,1,1,1,0,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,0,0,0,1,0,1],
            [1,1,1,1,1,1,0,1,1,1,0,1,0,1],
            [1,0,0,0,0,0,0,0,0,1,0,0,0,1],
            [1,0,1,1,1,1,1,1,0,1,1,1,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        start: {x:1, y:1},
        goal: {x:12, y:12},
        memoryTime: 5,
        gameTime: 30
    },
    {
        name: 'Nivel 3',
        grid: [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
            [1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
            [1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1],
            [1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
            [1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1],
            [1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1],
            [1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1],
            [1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1],
            [1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1],
            [1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1],
            [1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1],
            [1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1],
            [1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        start: {x:1, y:1},
        goal: {x:16, y:16},
        memoryTime: 5,
        gameTime: 30
    }
];

/* --------------------------------------------------------------------
   estado del juego y variables globales
   - posición del jugador, objetivo, temporizadores, flags, etc.
   -------------------------------------------------------------------- */
let currentLevelIndex = 0;
let maze = levels[currentLevelIndex].grid;
let ROWS = maze.length;
let COLS = maze[0].length;
let CELL_SIZE = Math.floor(canvas.width / COLS);
let player = { ...levels[currentLevelIndex].start };
let goal = { ...levels[currentLevelIndex].goal };
let gameState = 'ready'; // 'ready' | 'memorizing' | 'playing' | 'won' | 'lost'
let showMaze = true;
let memoryTimer = levels[currentLevelIndex].memoryTime;
let gameTimer = levels[currentLevelIndex].gameTime;
let gameMaxTime = levels[currentLevelIndex].gameTime;
let timerInterval = null;
let helpActive = false;
const normalTimerSpeed = 1000;

/* --------------------------------------------------------------------
   audio: gestión de sonidos ambientales y de ayuda
   - funciones para reproducir, detener y manejar efectos.
   -------------------------------------------------------------------- */
let currentAmbientSound = null;
let currentHelpSound = null;

const audioFiles = {
    tickLento: 'audio/TicTac Lento.mp3',
    tickRapido: 'audio/TicTac Rapido.mp3',
    finalLose: 'audio/Final.mp3',
    finalWin: 'audio/Final2.mp3'
};

// reproduce un sonido ambiental y lo deja en bucle
function playAmbientSound(filePath, loop = true) {
    stopAmbientSound();
    const audio = new Audio(filePath);
    audio.loop = loop;
    audio.volume = 0.5;
    audio.play().catch(err => console.warn('No se pudo reproducir sonido:', err));
    currentAmbientSound = audio;
    return audio;
}

// detiene el sonido ambiental en reproducción
function stopAmbientSound() {
    if (currentAmbientSound) {
        currentAmbientSound.pause();
        currentAmbientSound.currentTime = 0;
        currentAmbientSound = null;
    }
}

// reproduce el sonido rápido de ayuda (tic-tac rápido) en bucle
function playHelpSound() {
    stopHelpSound();
    const audio = new Audio(audioFiles.tickRapido);
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch(err => console.warn('No se pudo reproducir sonido de ayuda:', err));
    currentHelpSound = audio;
    return audio;
}

// detiene el sonido de ayuda
function stopHelpSound() {
    if (currentHelpSound) {
        currentHelpSound.pause();
        currentHelpSound.currentTime = 0;
        currentHelpSound = null;
    }
}

// reproducir un efecto de sonido puntual
function playSoundEffect(filePath, volume = 0.5) {
    const audio = new Audio(filePath);
    audio.volume = volume;
    audio.play().catch(err => console.warn('No se pudo reproducir efecto de sonido:', err));
    return audio;
}

/* --------------------------------------------------------------------
   ayuda: multiplicador de velocidad del temporizador mientras se usa la ayuda
   - función utilitaria para calcular el multiplicador según el nivel
   -------------------------------------------------------------------- */
function getHelpMultiplier() {
    // devuelve la aceleración deseada según el nivel:
    // nivel 1 -> 5x, nivel 2 -> 10x, nivel 3 -> 15x
    switch (currentLevelIndex) {
        case 0: return 5;
        case 1: return 10;
        case 2: return 15;
        default: return 5;
    }
}
function getHelpTimerSpeedMs() { 
    const mult = getHelpMultiplier();
    return Math.max(50, Math.round(normalTimerSpeed / mult));
}

/* --------------------------------------------------------------------
   selector de nivel dinámico en el menú principal
   - crea botones para cada nivel y los añade al menú
   -------------------------------------------------------------------- */
(function createLevelSelector() {
    const selector = document.createElement('div');
    selector.style.marginTop = '20px';
    selector.style.display = 'flex';
    selector.style.justifyContent = 'center';
    selector.style.gap = '8px';
    levels.forEach((lvl, idx) => {
        const b = document.createElement('button');
        b.textContent = lvl.name;
        b.style.padding = '10px 14px';
        b.style.fontSize = '0.9em';
        b.addEventListener('click', () => {
            setLevel(idx);
            Array.from(selector.children).forEach(ch => ch.classList.remove('active'));
            b.classList.add('active');
        });
        if (idx === currentLevelIndex) b.classList.add('active');
        selector.appendChild(b);
    });
    mainMenu.querySelector('.menu-buttons').appendChild(selector);
})();

/* --------------------------------------------------------------------
   setLevel: cambiar el nivel actual y actualizar estado relacionado
   - reasigna matriz, tamaños, jugador, meta, temporizadores y render
   -------------------------------------------------------------------- */
function setLevel(index) {
    currentLevelIndex = index;
    maze = levels[index].grid;
    ROWS = maze.length;
    COLS = maze[0].length;
    CELL_SIZE = Math.floor(canvas.width / COLS);
    player = {...levels[index].start};
    goal = {...levels[index].goal};
    memoryTimer = levels[index].memoryTime;
    gameTimer = levels[index].gameTime;
    gameMaxTime = levels[index].gameTime;
    memoryTimeDisplay.textContent = memoryTimer;
    updateProgressBar();
    render();
}

/* --------------------------------------------------------------------
   dibujo del laberinto, jugador y meta
   - funciones dedicadas al render en canvas
   -------------------------------------------------------------------- */
function drawMaze() {
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (showMaze) {
                if (maze[row][col] === 1) {
                    ctx.fillStyle = '#2d3561';
                    ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
                    ctx.strokeStyle = '#1a1a2e';
                    ctx.strokeRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
                } else {
                    ctx.fillStyle = '#0f3460';
                    ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
                }
            } else {
                // cuando no se debe mostrar el laberinto, dibujar fondo oscuro
                ctx.fillStyle = '#1a1a2e';
                ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            }
        }
    }
}

// dibuja la meta (círculo verde) si se está mostrando el laberinto
function drawGoal() {
    if (showMaze) {
        ctx.fillStyle = '#16c79a';
        ctx.beginPath();
        ctx.arc(goal.x * CELL_SIZE + CELL_SIZE / 2, goal.y * CELL_SIZE + CELL_SIZE / 2, CELL_SIZE / 3, 0, Math.PI * 2);
        ctx.fill();
    }
}

// dibuja al jugador (círculo naranja)
function drawPlayer() {
    ctx.fillStyle = '#f39c12';
    ctx.beginPath();
    ctx.arc(player.x * CELL_SIZE + CELL_SIZE / 2, player.y * CELL_SIZE + CELL_SIZE / 2, CELL_SIZE / 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// renderiza toda la escena (limpia canvas y dibuja elementos)
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMaze();
    drawGoal();
    drawPlayer();
}

/* --------------------------------------------------------------------
   movimiento del jugador
   - valida colisiones con muros, actualiza temporizador si colisiona,
     aplica efecto gráfico y sonido de daño, y detecta victoria.
   -------------------------------------------------------------------- */
function movePlayer(dx, dy) {
    if (gameState !== 'playing') return;
    const newX = player.x + dx;
    const newY = player.y + dy;
    if (newX >= 0 && newX < COLS && newY >= 0 && newY < ROWS) {
        if (maze[newY][newX] === 0) {
            player.x = newX;
            player.y = newY;
            if (player.x === goal.x && player.y === goal.y) {
                winGame();
            }
            render();
        } else {
            // penaliza tiempo por movimiento inválido y muestra mensaje temporal
            gameTimer = Math.max(0, gameTimer - 10);
            updateProgressBar();
            const tempMsg = document.createElement('div');
            tempMsg.textContent = '❌ -10 segundos por movimiento incorrecto!';
            tempMsg.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(231,76,60,0.95);color:white;padding:20px 40px;border-radius:10px;font-size:1.2em;font-weight:bold;z-index:1000;box-shadow:0 5px 20px rgba(0,0,0,0.3);`;
            document.body.appendChild(tempMsg);
            // efecto visual y sonido de impacto
            damageFlash();
            playHitSound();
            setTimeout(() => tempMsg.remove(), 1500);
            if (gameTimer <= 0) {
                clearInterval(timerInterval);
                loseGame();
            }
        }
    }
}

/* --------------------------------------------------------------------
   efecto de daño: flash y sonido generado con web audio api
   - se intenta crear un sonido sintetizado si el browser lo permite
   -------------------------------------------------------------------- */
const damageOverlay = document.getElementById('damageOverlay');
let audioCtx = null;
function playHitSound() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const ctx = audioCtx;
        const now = ctx.currentTime;
        // capa grave (golpe thud)
        const osc1 = ctx.createOscillator();
        const g1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(120, now);
        g1.gain.setValueAtTime(0.0001, now);
        g1.gain.exponentialRampToValueAtTime(0.8, now + 0.005);
        g1.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
        osc1.connect(g1).connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.3);
        // capa aguda (clic rápido)
        const osc2 = ctx.createOscillator();
        const g2 = ctx.createGain();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(1200, now);
        g2.gain.setValueAtTime(0.0001, now);
        g2.gain.exponentialRampToValueAtTime(0.25, now + 0.002);
        g2.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
        osc2.connect(g2).connect(ctx.destination);
        osc2.start(now);
        osc2.stop(now + 0.12);
    } catch (e) {
        // si no se puede reproducir, fallar en silencio y mostrar aviso en consola
        console.warn('No se pudo reproducir sonido de impacto:', e);
    }
}

// flash visual breve para indicar daño
function damageFlash() {
    if (!damageOverlay) return;
    damageOverlay.classList.add('active');
    // quitar después breve tiempo
    setTimeout(() => {
        damageOverlay.classList.remove('active');
    }, 260);
}

/* --------------------------------------------------------------------
   overlay persistente para cuando se acaba el tiempo (mensaje central)
   -------------------------------------------------------------------- */
function showTimeoutOverlay(text) {
    removeTimeoutOverlay();
    const el = document.createElement('div');
    el.id = 'timeoutOverlay';
    el.textContent = text;
    el.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(231,76,60,0.95);color:white;padding:20px 40px;border-radius:10px;font-size:1.2em;font-weight:bold;z-index:1000;box-shadow:0 5px 20px rgba(0,0,0,0.3);`;
    document.body.appendChild(el);
}

function removeTimeoutOverlay() {
    const existing = document.getElementById('timeoutOverlay');
    if (existing) existing.remove();
}

/* --------------------------------------------------------------------
   manejo de teclas:
   - permite controlar al jugador con flechas o wasd
   - evita interferir cuando el foco está en un input/textarea
   -------------------------------------------------------------------- */
document.addEventListener('keydown', (e) => {
    const active = document.activeElement;
    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable)) {
        // dejar que el input reciba la tecla (permite escribir "a", "w", "s", "d")
        return;
    }
    switch(e.key) {
        case 'ArrowUp': case 'w': case 'W': e.preventDefault(); movePlayer(0, -1); break;
        case 'ArrowDown': case 's': case 'S': e.preventDefault(); movePlayer(0, 1); break;
        case 'ArrowLeft': case 'a': case 'A': e.preventDefault(); movePlayer(-1, 0); break;
        case 'ArrowRight': case 'd': case 'D': e.preventDefault(); movePlayer(1, 0); break;
    }
});

/* --------------------------------------------------------------------
   utilidades de interfaz:
   - showMessage: muestra un mensaje con una clase (tipo visual)
   - updateProgressBar: actualiza barra de tiempo y color según porcentaje
   -------------------------------------------------------------------- */
function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
}

function updateProgressBar() {
    const percentage = (gameTimer / gameMaxTime) * 100;
    progressBar.style.width = percentage + '%';
    progressTime.textContent = gameTimer + 's';
    if (percentage > 50) {
        progressBar.style.background = 'linear-gradient(90deg, #16c79a 0%, #11998e 100%)';
    } else if (percentage > 25) {
        progressBar.style.background = 'linear-gradient(90deg, #f39c12 0%, #e67e22 100%)';
    } else {
        progressBar.style.background = 'linear-gradient(90deg, #e74c3c 0%, #c0392b 100%)';
    }
}

/* --------------------------------------------------------------------
   inicio de juego desde el menú y flujo principal:
   - startGameFromMenu: oculta menú y lanza startGame
   - startGame: fase de memorización, inicia temporizador de memoria
   - startPlayPhase: cambio a fase de juego (laberinto oculto, tiempo activo)
   -------------------------------------------------------------------- */
function startGameFromMenu() {
    mainMenu.style.display = 'none';
    gameArea.style.display = 'block';
    startGame();
}

// inicia una partida: reinicia estados, reproduce tic-tac lento y cuenta memoria
function startGame() {
    // si había un mensaje de timeout en pantalla, quitarlo al iniciar/reintentar
    removeTimeoutOverlay();
    // detener cualquier sonido anterior
    stopAmbientSound();
    stopHelpSound();
    const lvl = levels[currentLevelIndex];
    maze = lvl.grid;
    ROWS = maze.length;
    COLS = maze[0].length;
    CELL_SIZE = Math.floor(canvas.width / COLS);
    player = {...lvl.start};
    goal = {...lvl.goal};
    memoryTimer = lvl.memoryTime;
    gameTimer = lvl.gameTime;
    gameMaxTime = lvl.gameTime;
    gameState = 'memorizing';
    showMaze = true;
    helpActive = false;
    restartBtn.style.display = 'none';
    helpBtn.style.display = 'none';
    helpWarning.style.display = 'none';
    messageDiv.style.display = 'none';
    memoryTimeContainer.style.display = 'block';
    gameTimeContainer.style.display = 'none';
    render();
    showMessage(`¡Memoriza el laberinto! ${memoryTimer}s`, 'memorize');
    // reproducir sonido de tic-tac lento
    playAmbientSound(audioFiles.tickLento, true);
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        memoryTimer--;
        memoryTimeDisplay.textContent = memoryTimer;
        showMessage(`¡Memoriza el laberinto! ${memoryTimer}s`, 'memorize');
        if (memoryTimer <= 0) {
            clearInterval(timerInterval);
            startPlayPhase();
        }
    }, 1000);
}

// cambia a fase de juego: oculta laberinto, muestra temporizador, permite movimiento
function startPlayPhase() {
    gameState = 'playing';
    showMaze = false;
    memoryTimeContainer.style.display = 'none';
    gameTimeContainer.style.display = 'block';
    helpBtn.style.display = 'inline-block';
    render();
    updateProgressBar();
    showMessage('¡Encuentra la salida!', 'play');
    startGameTimer();
}

/* --------------------------------------------------------------------
   temporizador de juego:
   - startGameTimer: inicia cuenta atrás del juego, respeta velocidad de ayuda
   - restartGameTimer: reinicia el intervalo con la velocidad actual
   -------------------------------------------------------------------- */
function startGameTimer() {
    if (timerInterval) clearInterval(timerInterval);
    const currentSpeed = helpActive ? getHelpTimerSpeedMs() : normalTimerSpeed;
    timerInterval = setInterval(() => {
        gameTimer--;
        updateProgressBar();
        if (gameTimer <= 0) {
            clearInterval(timerInterval);
            loseGame();
        }
    }, currentSpeed);
}

function restartGameTimer() {
    if (timerInterval) clearInterval(timerInterval);
    startGameTimer();
}

/* --------------------------------------------------------------------
   funciones para activar/desactivar ayuda:
   - activar ayuda muestra el laberinto pero acelera el tiempo y suena tic-tac rápido
   - desactivar restaura el tic-tac lento y la velocidad normal
   -------------------------------------------------------------------- */
function activateHelp() {
    if (gameState !== 'playing') return;
    helpActive = true;
    showMaze = true;
    helpBtn.classList.add('active');
    const mult = getHelpMultiplier();
    helpWarning.textContent = `⚠️ ¡El tiempo corre ${mult}x más rápido mientras usas la ayuda!`;
    helpWarning.style.display = 'block';
    render();
    // reproducir sonido de tic-tac rápido
    playHelpSound();
    restartGameTimer();
}

function deactivateHelp() {
    if (gameState !== 'playing') return;
    helpActive = false;
    showMaze = false;
    helpBtn.classList.remove('active');
    helpWarning.style.display = 'none';
    // detener sonido de ayuda y volver al tic-tac lento
    stopHelpSound();
    playAmbientSound(audioFiles.tickLento, true);
    render();
    restartGameTimer();
}

/* --------------------------------------------------------------------
   winGame/loseGame: acciones al ganar o perder
   - winGame: detiene temporizadores, reproduce sonido de victoria y
     verifica/guarda récord
   - loseGame: muestra overlay de tiempo agotado y ofrece reintento
   -------------------------------------------------------------------- */
function winGame() {
    gameState = 'won';
    clearInterval(timerInterval);
    stopAmbientSound();
    stopHelpSound();
    showMaze = true;
    render();
    // reproducir sonido de victoria
    playSoundEffect(audioFiles.finalWin, 0.7);
    checkAndSaveRecord();
}

/* --------------------------------------------------------------------
   wrapper de almacenamiento (storage)
   - intenta usar window.storage si existe (p. ej. api nativa externa),
     si no, usa localStorage como respaldo.
   - devuelve/acepta objetos con { value } para get, y set guarda string.
   -------------------------------------------------------------------- */
const storage = {
    async get(key) {
        if (window.storage && typeof window.storage.get === 'function') {
            return window.storage.get(key);
        }
        const value = localStorage.getItem(key);
        return { value };
    },
    async set(key, value) {
        if (window.storage && typeof window.storage.set === 'function') {
            return window.storage.set(key, value);
        }
        localStorage.setItem(key, value);
        return;
    }
};

/* --------------------------------------------------------------------
   gestión de records:
   - checkAndSaveRecord: comprueba si el tiempo es un nuevo récord y
     muestra la pantalla para introducir nombre si corresponde.
   - se guarda el tiempo transcurrido (mejor si es menor).
   -------------------------------------------------------------------- */
async function checkAndSaveRecord() {
    // guardar tiempo transcurrido en lugar del tiempo restante.
    const remainingTime = gameTimer;
    const elapsedTime = gameMaxTime - remainingTime; // ejemplo: si quedaban 22s en 30s -> elapsed = 8
    const levelIndex = currentLevelIndex;
    try {
        const key = `records:level${levelIndex}`;
        let records = [];
        try {
            const result = await storage.get(key);
            if (result && result.value) {
                records = JSON.parse(result.value);
            }
        } catch (error) {
            console.log('No hay records previos');
        }
        // determinar si es nuevo record. ahora los tiempos menores son mejores (menos tiempo transcurrido).
        let isNewRecord = false;
        if (records.length < 10) {
            isNewRecord = true;
        } else {
            // encontrar el peor (max) de los registrados
            const worst = Math.max(...records.map(r => r.time));
            if (elapsedTime < worst) isNewRecord = true;
        }
        if (isNewRecord) {
            showNameInput(elapsedTime, levelIndex);
        } else {
            showMessage('🎉 ¡Felicidades! ¡Has completado el laberinto!', 'win');
            restartBtn.style.display = 'inline-block';
        }
    } catch (error) {
        console.error('Error al verificar records:', error);
        showMessage('🎉 ¡Felicidades! ¡Has completado el laberinto!', 'win');
        restartBtn.style.display = 'inline-block';
    }
}

/* --------------------------------------------------------------------
   pantalla de ingreso de nombre y guardado de récord
   - showNameInput: muestra formulario para que el jugador ponga su nombre
   - saveRecord: guarda el record ordenando ascendente por tiempo (mejor = menor)
   -------------------------------------------------------------------- */
function showNameInput(time, levelIndex) {
    gameArea.style.display = 'none';
    nameInputScreen.style.display = 'block';
    recordTime.textContent = time + 's';
    recordLevel.textContent = levels[levelIndex].name;
    playerNameInput.value = '';
    playerNameInput.focus();
    nameInputScreen.dataset.time = time;
    nameInputScreen.dataset.level = levelIndex;
}

async function saveRecord() {
    const name = playerNameInput.value.trim().toUpperCase() || 'PLAYER';
    const time = parseInt(nameInputScreen.dataset.time);
    const levelIndex = parseInt(nameInputScreen.dataset.level);
    try {
        const key = `records:level${levelIndex}`;
        let records = [];
        try {
            const result = await storage.get(key);
            if (result && result.value) {
                records = JSON.parse(result.value);
            }
        } catch (error) {}
        records.push({
            name: name,
            time: time,
            date: new Date().toISOString()
        });
        // ahora los tiempos menores son mejores (tiempo transcurrido), ordenar ascendente
        records.sort((a, b) => a.time - b.time);
        records = records.slice(0, 10);
        await storage.set(key, JSON.stringify(records));
        nameInputScreen.style.display = 'none';
        mainMenu.style.display = 'block';
        const successMsg = document.createElement('div');
        successMsg.textContent = '✨ ¡Record guardado exitosamente! ✨';
        successMsg.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(22,199,154,0.95);color:white;padding:30px 50px;border-radius:15px;font-size:1.5em;font-weight:bold;z-index:1000;box-shadow:0 10px 30px rgba(0,0,0,0.3);`;
        document.body.appendChild(successMsg);
        setTimeout(() => successMsg.remove(), 2000);
    } catch (error) {
        console.error('Error al guardar record:', error);
        alert('Error al guardar el record. Por favor intenta de nuevo.');
    }
}

/* --------------------------------------------------------------------
   pantalla de records:
   - showRecordsScreen: muestra la pantalla de records para un nivel dado
   - loadRecords: carga los records desde storage y renderiza la tabla
   -------------------------------------------------------------------- */
async function showRecordsScreen(levelIndex = 0) {
    mainMenu.style.display = 'none';
    recordsScreen.style.display = 'block';
    document.querySelectorAll('.tab-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === levelIndex);
    });
    currentRecordsLevel = levelIndex;
    await loadRecords(levelIndex);
}

async function loadRecords(levelIndex) {
    try {
        const key = `records:level${levelIndex}`;
        let records = [];
        try {
            const result = await storage.get(key);
            if (result && result.value) {
                records = JSON.parse(result.value);
            }
        } catch (error) {}
        if (records.length === 0) {
            recordsContent.innerHTML = '<div class="no-records">No hay records todavía.<br>¡Sé el primero en completar este nivel!</div>';
        } else {
            let html = '<table class="record-table">';
            html += '<thead><tr><th class="record-rank">Pos</th><th>Jugador</th><th>Tiempo</th><th>Fecha</th></tr></thead>';
            html += '<tbody>';
            records.forEach((record, index) => {
                const date = new Date(record.date);
                const dateStr = date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' });
                const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';
                html += `<tr>
                    <td class="record-rank">${medal} ${index + 1}</td>
                    <td class="record-name">${record.name}</td>
                    <td class="record-time">${record.time}s</td>
                    <td class="record-date">${dateStr}</td>
                </tr>`;
            });
            html += '</tbody></table>';
            recordsContent.innerHTML = html;
        }
    } catch (error) {
        console.error('Error al cargar records:', error);
        recordsContent.innerHTML = '<div class="no-records">Error al cargar los records.</div>';
    }
}

/* --------------------------------------------------------------------
   perder la partida:
   - muestra overlay persistente y sonido de derrota
   -------------------------------------------------------------------- */
function loseGame() {
    gameState = 'lost';
    stopAmbientSound();
    stopHelpSound();
    showMaze = true;
    render();
    // reproducir sonido de derrota
    playSoundEffect(audioFiles.finalLose, 0.7);
    // mostrar overlay persistente con estilo similar al mensaje de -10s
    showTimeoutOverlay('⏰ ¡Se acabó el tiempo! Inténtalo de nuevo');
    restartBtn.style.display = 'inline-block';
}

/* --------------------------------------------------------------------
   volver al menú principal:
   - restablece estado, detiene sonidos y temporizadores, muestra menú
   -------------------------------------------------------------------- */
function backToMenu() {
    // quitar overlay de timeout si existe
    removeTimeoutOverlay();
    // detener todos los sonidos
    stopAmbientSound();
    stopHelpSound();
    if (timerInterval) clearInterval(timerInterval);
    gameState = 'ready';
    showMaze = true;
    const lvl = levels[currentLevelIndex];
    memoryTimer = lvl.memoryTime;
    gameTimer = lvl.gameTime;
    player = {...lvl.start};
    gameArea.style.display = 'none';
    recordsScreen.style.display = 'none';
    nameInputScreen.style.display = 'none';
    mainMenu.style.display = 'block';
    messageDiv.style.display = 'none';
}

/* --------------------------------------------------------------------
   enlaces y listeners de botones:
   - conexión entre botones de la interfaz y funciones internas
   -------------------------------------------------------------------- */
startGameBtn.addEventListener('click', startGameFromMenu);
backToMenuBtn.addEventListener('click', backToMenu);
backFromRecordsBtn.addEventListener('click', backToMenu);
restartBtn.addEventListener('click', startGame);
exitBtn.addEventListener('click', () => { window.close(); });
recordsBtn.addEventListener('click', () => showRecordsScreen(0));
saveRecordBtn.addEventListener('click', saveRecord);
playerNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        saveRecord();
    }
});
recordsTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
        const levelIndex = parseInt(e.target.dataset.level);
        loadRecords(levelIndex);
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        currentRecordsLevel = levelIndex;
    }
});

/* --------------------------------------------------------------------
   limpiar records con confirmación:
   - borra los registros del nivel actual usando el wrapper storage
   -------------------------------------------------------------------- */
if (clearRecordsBtn) {
    clearRecordsBtn.addEventListener('click', async () => {
        const ok = confirm('¿Seguro que desea eliminar todos los registros?');
        if (!ok) return;
        try {
            const key = `records:level${currentRecordsLevel}`;
            // guardar lista vacía
            await storage.set(key, JSON.stringify([]));
            await loadRecords(currentRecordsLevel);
            const info = document.createElement('div');
            info.textContent = '🧹 Registros eliminados correctamente.';
            info.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(22,199,154,0.95);color:white;padding:18px 30px;border-radius:12px;font-size:1em;font-weight:bold;z-index:1000;box-shadow:0 8px 24px rgba(0,0,0,0.3);`;
            document.body.appendChild(info);
            setTimeout(() => info.remove(), 1800);
        } catch (err) {
            console.error('Error al limpiar records:', err);
            alert('No se pudo eliminar los registros. Intenta de nuevo.');
        }
    });
}

/* --------------------------------------------------------------------
   eventos de ayuda (mousedown/up/leave/touch):
   - mantener pulsado para mostrar la ayuda y acelerar el tiempo
   -------------------------------------------------------------------- */
helpBtn.addEventListener('mousedown', activateHelp);
helpBtn.addEventListener('mouseup', deactivateHelp);
helpBtn.addEventListener('mouseleave', deactivateHelp);
helpBtn.addEventListener('touchstart', (e) => { e.preventDefault(); activateHelp(); });
helpBtn.addEventListener('touchend', (e) => { e.preventDefault(); deactivateHelp(); });

/* --------------------------------------------------------------------
   inicialización: establecer nivel por defecto y render inicial
   -------------------------------------------------------------------- */
setLevel(currentLevelIndex);
render();
