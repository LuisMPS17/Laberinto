
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



        let currentLevelIndex = 0;
        let maze = levels[currentLevelIndex].grid;
        let ROWS = maze.length;
        let COLS = maze[0].length;
        let CELL_SIZE = Math.floor(canvas.width / COLS);
        let player = { ...levels[currentLevelIndex].start };
        let goal = { ...levels[currentLevelIndex].goal };
        let gameState = 'ready';
        let showMaze = true;
        let memoryTimer = levels[currentLevelIndex].memoryTime;
        let gameTimer = levels[currentLevelIndex].gameTime;
        let gameMaxTime = levels[currentLevelIndex].gameTime;
        let timerInterval = null;
        let helpActive = false;
        const normalTimerSpeed = 1000;

        // ====== AUDIO MANAGEMENT ======
        let currentAmbientSound = null;
        let currentHelpSound = null;

        const audioFiles = {
            tickLento: 'audio/TicTac Lento.mp3',
            tickRapido: 'audio/TicTac Rapido.mp3',
            finalLose: 'audio/Final.mp3',
            finalWin: 'audio/Final2.mp3'
        };

        function playAmbientSound(filePath, loop = true) {
            stopAmbientSound();
            const audio = new Audio(filePath);
            audio.loop = loop;
            audio.volume = 0.5;
            audio.play().catch(err => console.warn('No se pudo reproducir sonido:', err));
            currentAmbientSound = audio;
            return audio;
        }

        function stopAmbientSound() {
            if (currentAmbientSound) {
                currentAmbientSound.pause();
                currentAmbientSound.currentTime = 0;
                currentAmbientSound = null;
            }
        }

        function playHelpSound() {
            stopHelpSound();
            const audio = new Audio(audioFiles.tickRapido);
            audio.loop = true;
            audio.volume = 0.5;
            audio.play().catch(err => console.warn('No se pudo reproducir sonido de ayuda:', err));
            currentHelpSound = audio;
            return audio;
        }

        function stopHelpSound() {
            if (currentHelpSound) {
                currentHelpSound.pause();
                currentHelpSound.currentTime = 0;
                currentHelpSound = null;
            }
        }

        function playSoundEffect(filePath, volume = 0.5) {
            const audio = new Audio(filePath);
            audio.volume = volume;
            audio.play().catch(err => console.warn('No se pudo reproducir efecto de sonido:', err));
            return audio;
        }

        function getHelpMultiplier() {
            // Devuelve la aceleración deseada según el nivel:
            // Nivel 1 -> 5x, Nivel 2 -> 10x, Nivel 3 -> 15x
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
                        ctx.fillStyle = '#1a1a2e';
                        ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
                    }
                }
            }
        }

        function drawGoal() {
            if (showMaze) {
                ctx.fillStyle = '#16c79a';
                ctx.beginPath();
                ctx.arc(goal.x * CELL_SIZE + CELL_SIZE / 2, goal.y * CELL_SIZE + CELL_SIZE / 2, CELL_SIZE / 3, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function drawPlayer() {
            ctx.fillStyle = '#f39c12';
            ctx.beginPath();
            ctx.arc(player.x * CELL_SIZE + CELL_SIZE / 2, player.y * CELL_SIZE + CELL_SIZE / 2, CELL_SIZE / 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawMaze();
            drawGoal();
            drawPlayer();
        }

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
       
        // --- daño: overlay flash + sonido con WebAudio ---
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
                // silent fail si AudioContext bloqueado
                console.warn('No se pudo reproducir sonido de impacto:', e);
            }
        }

        function damageFlash() {
            if (!damageOverlay) return;
            damageOverlay.classList.add('active');
            // quitar después breve tiempo
            setTimeout(() => {
                damageOverlay.classList.remove('active');
            }, 260);
        }

        // Overlay persistente para timeout (mismo estilo que el mensaje de -10s)
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
        // reemplazado: evitar interferir con inputs (ej. playerNameInput)
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

        function startGameFromMenu() {
            mainMenu.style.display = 'none';
            gameArea.style.display = 'block';
            startGame();
        }

        function startGame() {
            // Si había un mensaje de timeout en pantalla, quitarlo al iniciar/reintentar
            removeTimeoutOverlay();
            // Detener cualquier sonido anterior
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
            // Reproducir sonido de tic-tac lento
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

        function activateHelp() {
            if (gameState !== 'playing') return;
            helpActive = true;
            showMaze = true;
            helpBtn.classList.add('active');
            const mult = getHelpMultiplier();
            helpWarning.textContent = `⚠️ ¡El tiempo corre ${mult}x más rápido mientras usas la ayuda!`;
            helpWarning.style.display = 'block';
            render();
            // Reproducir sonido de tic-tac rápido
            playHelpSound();
            restartGameTimer();
        }

        function deactivateHelp() {
            if (gameState !== 'playing') return;
            helpActive = false;
            showMaze = false;
            helpBtn.classList.remove('active');
            helpWarning.style.display = 'none';
            // Detener sonido de ayuda y volver al tic-tac lento
            stopHelpSound();
            playAmbientSound(audioFiles.tickLento, true);
            render();
            restartGameTimer();
        }

        function winGame() {
            gameState = 'won';
            clearInterval(timerInterval);
            stopAmbientSound();
            stopHelpSound();
            showMaze = true;
            render();
            // Reproducir sonido de victoria
            playSoundEffect(audioFiles.finalWin, 0.7);
            checkAndSaveRecord();
        }

        // --- added: storage wrapper with fallback a localStorage ---
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

        async function checkAndSaveRecord() {
            // Guardar tiempo transcurrido en lugar del tiempo restante.
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
                // Determinar si es nuevo record. Ahora los tiempos menores son mejores (menos tiempo transcurrido).
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
                // Ahora los tiempos menores son mejores (tiempo transcurrido), ordenar ascendente
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

        function loseGame() {
            gameState = 'lost';
            stopAmbientSound();
            stopHelpSound();
            showMaze = true;
            render();
            // Reproducir sonido de derrota
            playSoundEffect(audioFiles.finalLose, 0.7);
            // Mostrar overlay persistente con estilo similar al mensaje de -10s
            showTimeoutOverlay('⏰ ¡Se acabó el tiempo! Inténtalo de nuevo');
            restartBtn.style.display = 'inline-block';
        }

        function backToMenu() {
            // Quitar overlay de timeout si existe
            removeTimeoutOverlay();
            // Detener todos los sonidos
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

        // Lógica para limpiar records con confirmación
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
        helpBtn.addEventListener('mousedown', activateHelp);
        helpBtn.addEventListener('mouseup', deactivateHelp);
        helpBtn.addEventListener('mouseleave', deactivateHelp);
        helpBtn.addEventListener('touchstart', (e) => { e.preventDefault(); activateHelp(); });
        helpBtn.addEventListener('touchend', (e) => { e.preventDefault(); deactivateHelp(); });

        setLevel(currentLevelIndex);
        render();
