<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LumaHub - Get Your Key</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔑 LumaHub Key System</h1>
            <p>Complete the checkpoint to get your key</p>
        </div>

        <div class="card">
            <div class="step" id="step1">
                <div class="step-header">
                    <span class="step-number">1</span>
                    <h2>Enter Your HWID</h2>
                </div>
                <input type="text" id="hwidInput" placeholder="Your HWID (User ID from Roblox)">
                <button onclick="startCheckpoint()" class="btn btn-primary">Start Checkpoint</button>
            </div>

            <div class="step hidden" id="step2">
                <div class="step-header">
                    <span class="step-number">2</span>
                    <h2>Complete Lootlabs Offers</h2>
                </div>
                <p class="info">Complete the offers below to proceed. This helps keep LumaHub free!</p>
                
                <!-- Lootlabs Widget -->
                <div id="lootlabs-container">
                    <iframe 
                        id="lootlabs-iframe"
                        style="width: 100%; height: 500px; border: none; border-radius: 12px; background: #1a1a1a;"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
                
                <button onclick="checkCompletion()" class="btn btn-secondary" style="margin-top: 20px;">
                    I Completed the Offers
                </button>
            </div>

            <div class="step hidden" id="step3">
                <div class="step-header">
                    <span class="step-number">3</span>
                    <h2>Your Key is Ready!</h2>
                </div>
                <div class="key-display">
                    <input type="text" id="keyOutput" readonly>
                    <button onclick="copyKey()" class="btn btn-success">
                        📋 Copy Key
                    </button>
                </div>
                <div class="key-info">
                    <p>✅ Key generated successfully!</p>
                    <p>⏰ Expires: <span id="expiryTime">24 hours</span></p>
                    <p>💡 Paste this key in the LumaHub script</p>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>Need help? Contact us on Discord</p>
            <div class="stats">
                <div class="stat">
                    <span class="stat-value" id="totalKeys">0</span>
                    <span class="stat-label">Total Keys</span>
                </div>
                <div class="stat">
                    <span class="stat-value" id="activeKeys">0</span>
                    <span class="stat-label">Active Keys</span>
                </div>
            </div>
        </div>
    </div>

    <div id="notification" class="notification hidden"></div>

    <script src="script.js"></script>
</body>
</html>
