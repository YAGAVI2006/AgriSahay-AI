import React, { useState } from 'react';
import { Bot, Send, Volume2, Mic, Sparkles, RefreshCw, HelpCircle, User, CheckCircle2 } from 'lucide-react';

export default function AIAssistantView({ farmerProfile, selectedLanguage }) {
  const isTamil = selectedLanguage === 'ta';

  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'bot',
      text: isTamil 
        ? `வணக்கம் ${farmerProfile.name || 'விவசாயி'}! நான் உங்கள் AgriSahay AI வேளாண்மை உதவி கருவி. கொத்தமல்லி, புதினா, கீரை வகைகள், நெல், உரம், நீர் பாசனம் மற்றும் அரசு மானியங்கள் பற்றி எந்த கேள்வியும் கேட்கலாம்.`
        : `Hello ${farmerProfile.name || 'Farmer'}! I am your AI Agriculture Assistant (AgriBot). Ask me any question about Coriander, Mint, Amaranthus Keerai, leaf disease cures, fertilizer dosages, or market prices.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const quickPromptsEn = [
    "🌿 How to grow Coriander (Kothamalli) in 35 days?",
    "🌱 How to cultivate Mint (Pudina) for multi-cutting income?",
    "🥬 Best fertilizer & pest control for Amaranthus Keerai?",
    "🍅 My tomato leaves are turning yellow. How to fix it?",
    "🌾 Which fertilizer is best for Paddy in Karur?"
  ];

  const quickPromptsTa = [
    "🌿 35 நாட்களில் கொத்தமல்லி சாகுபடி செய்வது எப்படி?",
    "🌱 புதினா சாகுபடி செய்து தொடர் வருமானம் பெறுவது எப்படி?",
    "🥬 கீரை வகைகளுக்கு சிறந்த இயற்கை உரம் எது?",
    "🍅 என் தக்காளி இலைகள் மஞ்சளாக மாறுகின்றன. அதை சரி செய்வது எப்படி?",
    "🌾 கரூரில் நெல் பயிருக்கு எந்த உரம் சிறந்தது?"
  ];

  const quickPrompts = isTamil ? quickPromptsTa : quickPromptsEn;

  const handleSend = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botReplyText = generateIntelligentResponse(text, farmerProfile, isTamil);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1100);
  };

  const handleVoiceListen = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = isTamil ? 'ta-IN' : 'en-US';
      recognition.onstart = () => setIsTyping(true);
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsTyping(false);
      };
      recognition.onerror = () => setIsTyping(false);
      recognition.start();
    } else {
      setInputText(isTamil ? "கொத்தமல்லி புதினா சாகுபடி வழிகாட்டி" : "Coriander & Mint cultivation guide");
    }
  };

  const handleSpeakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = isTamil ? 'ta-IN' : 'en-US';
      utterance.rate = 0.95;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', height: 'calc(100vh - 120px)' }}>
      
      {/* Header Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-blue" style={{ marginBottom: '0.35rem' }}>
            <Sparkles size={12} /> {isTamil ? 'அறிவார்ந்த அக்ரிபோட் பதில் கருவி' : 'Precision Intelligent AgriBot Knowledge Engine'}
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>🤖 AI Agriculture Assistant (AgriBot)</h2>
        </div>

        {/* Voice Status Indicator */}
        {isSpeaking && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--primary-50)', padding: '0.4rem 0.85rem', borderRadius: '9999px', border: '1px solid var(--primary-100)' }}>
            <Volume2 size={16} color="var(--primary-600)" className="animate-pulse" />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-800)' }}>
              {isTamil ? 'தமிழ் குரல் ஆடியோ...' : 'Speaking Audio...'}
            </span>
          </div>
        )}
      </div>

      {/* Main Chat Box Wrapper */}
      <div className="card-glass" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1.25rem', overflow: 'hidden' }}>
        
        {/* Messages Stream */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingRight: '0.5rem' }}>
          {messages.map((msg) => (
            <div 
              key={msg.id}
              style={{
                display: 'flex',
                justify: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                gap: '0.75rem'
              }}
            >
              {msg.sender === 'bot' && (
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Bot size={20} />
                </div>
              )}

              <div style={{
                maxWidth: '82%',
                background: msg.sender === 'user' ? 'linear-gradient(135deg, #059669 0%, #047857 100%)' : 'var(--bg-main)',
                color: msg.sender === 'user' ? '#ffffff' : 'var(--text-main)',
                padding: '0.95rem 1.25rem',
                borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                border: msg.sender === 'user' ? 'none' : '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ whiteSpace: 'pre-line', fontSize: '0.9rem', lineHeight: 1.55 }}>
                  {msg.text}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem', opacity: 0.7, fontSize: '0.725rem' }}>
                  <span>{msg.timestamp}</span>
                  {msg.sender === 'bot' && (
                    <button 
                      onClick={() => handleSpeakText(msg.text)}
                      style={{ background: 'transparent', border: 'none', color: 'var(--primary-700)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.2rem', fontWeight: 600 }}
                      title="Listen Audio"
                    >
                      <Volume2 size={13} /> {isTamil ? 'ஒலி கேட்க' : 'Listen Audio'}
                    </button>
                  )}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--accent-amber-light)', color: 'var(--accent-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>
                  👨‍🌾
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <RefreshCw className="animate-spin" size={16} color="var(--primary-600)" />
              <span>{isTamil ? 'அக்ரிபோட் விடை தயாரிக்கிறது...' : 'AgriBot is analyzing question & formulating exact advisory...'}</span>
            </div>
          )}
        </div>

        {/* Quick Suggestions Chips */}
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', padding: '0.75rem 0', borderTop: '1px solid var(--border-light)', marginTop: '0.75rem' }}>
          {quickPrompts.map((prompt, i) => (
            <button 
              key={i}
              onClick={() => handleSend(prompt)}
              className="btn-outline"
              style={{ fontSize: '0.775rem', padding: '0.35rem 0.75rem', borderRadius: '9999px', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar Form */}
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
          <button
            type="button"
            onClick={handleVoiceListen}
            className="btn-secondary"
            style={{ padding: '0.75rem', borderRadius: '12px' }}
            title="Click to Speak Question"
          >
            <Mic size={20} color="var(--primary-700)" />
          </button>

          <input 
            type="text"
            placeholder={isTamil ? "கொத்தமல்லி, புதினா, கீரை உரம், தக்காளி இலை மஞ்சள் பற்றி கேட்கவும்..." : "Ask about Mint, Coriander, Amaranthus Keerai, Paddy, fertilizers..."}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              borderRadius: '12px',
              border: '1px solid var(--border-light)',
              background: 'var(--bg-main)',
              color: 'var(--text-main)',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          />

          <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.25rem', borderRadius: '12px' }}>
            <Send size={18} /> {isTamil ? 'அனுப்புக' : 'Send'}
          </button>
        </form>

      </div>

    </div>
  );
}

// Knowledge Base Engine
function generateIntelligentResponse(query, profile, isTamil) {
  const q = query.toLowerCase();

  // LEAFY GREENS & HERBS (CORIANDER, MINT, KEERAI, FENUGREEK)
  if (q.includes('coriander') || q.includes('kothamalli') || q.includes('கொத்தமல்லி')) {
    return isTamil
      ? `🌿 **கொத்தமல்லி (Coriander) சாகுபடி வழிகாட்டி (35 நாட்கள் குறுகிய கால வருமானம்):**

1. **நிலம் தயாரிப்பு & மண்:**
   • மணல் சார்ந்த செம்மண் அல்லது வண்டல் மண் மிகவும் ஏற்றது.
   • ஏக்கருக்கு 5 தொன் மக்கிய தொழுவுரம் (FYM) இட்டு நன்கு உழவு செய்யவும்.

2. **விதை அளவு & விதை நேர்த்தி:**
   • ஏக்கருக்கு 8 - 10 கிலோ கொத்தமல்லி விதை. விதையை இரண்டாக உடைத்து ட்ரைக்கோடர்மா விரிடி (4 கிராம்/கிலோ) கலந்து விதைக்கவும்.

3. **நீர் மேலாண்மை & உரம்:**
   • தெளிப்பு நீர் (Sprinkler) அல்லது லேசான பாசனம் 3 நாட்களுக்கு ஒருமுறை.
   • 15 ஆம் நாள் பஞ்சகவ்யா 3% இலைவழி தெளிப்பால் இலை வளர்ச்சி 40% அதிகரிக்கும்.

4. **அறுவடை & சந்தை விலை:**
   • 30-35 நாட்களில் அறுவடை. கரூர் உழவர் சந்தையில் கிலோ ₹35 - ₹50 வரை விற்பனையாகிறது.`
      : `🌿 **Coriander / Kothamalli Cultivation Guide (35-Day High Returns):**

1. **Soil & Land Prep:**
   • Sandy loam or well-drained red soil. Incorporate 5 tonnes FYM compost per acre.

2. **Seed Rate & Treatment:**
   • 8-10 kg split coriander seed per acre. Treat with Trichoderma viride (4g/kg seed).

3. **Irrigation & Bio-Nutrition:**
   • Light sprinkler or drip irrigation every 3 days.
   • Spray Panchagavya (3%) at 15th day to boost vibrant green leaf expansion by 40%.

4. **Harvest & Mandi Price:**
   • Ready for harvest in 30-35 days. Fetches ₹35 - ₹50/kg in Karur & Trichy vegetable mandis.`;
  }

  if (q.includes('mint') || q.includes('pudina') || q.includes('புதினா')) {
    return isTamil
      ? `🌱 **புதினா (Mint) சாகுபடி & தொடர் அறுவடை வழிகாட்டி:**

1. **நடுதல் முறை:**
   • வேர் அல்லது தண்டு கட்டி (Suckers / Stem cuttings) மூலம் நடவு செய்யவும்.

2. **நீர்ப்பாசனம் & உரம்:**
   • மண் எப்போதும் ஈரப்பதமாக இருக்க வேண்டும் (2 நாட்களுக்கு ஒருமுறை நீர்).
   • ஒவ்வொரு அறுவடைக்கு பின்பும் ஏக்கருக்கு 500 கிலோ மண்புழு உரம் இடவும்.

3. **அறுவடை:**
   • முதல் அறுவடை 40 நாட்களில். தொடர்ந்து 25 நாட்களுக்கு ஒருமுறை என பல ஆண்டுகள் அறுவடை செய்யலாம்!`
      : `🌱 **Mint / Pudina Cultivation Guide (Multi-Cutting Continuous Income):**

1. **Planting Method:**
   • Plant healthy root suckers or stem cuttings spaced 15cm x 15cm apart on raised beds.

2. **Irrigation & Soil Nutrition:**
   • Keep soil consistently moist (irrigate every 2 days).
   • Apply 500 kg Vermicompost per acre after every cutting to stimulate fresh shoot flushing.

3. **Harvesting Cycle:**
   • First harvest in 40 days; subsequent cuttings every 25 days continuously!`;
  }

  if (q.includes('keerai') || q.includes('spinach') || q.includes('கீரை') || q.includes('அரைக்கீரை') || q.includes('சிறுகீரை')) {
    return isTamil
      ? `🥬 **அரைக்கீரை / சிறுகீரை (Amaranthus) சாகுபடி குறிப்புகள் (25 நாட்கள் பயிர்):**

1. **விதைத்தல்:** ஏக்கருக்கு 1.5 - 2 கிலோ கீரை விதை. மணலுடன் கலந்து சமமாக தூவவும்.
2. **உரம்:** ரசாயன உரம் தவிர்க்கவும். பஞ்சகவ்யா (3%) அல்லது ஜீவாமிர்தம் தெளித்தால் பூச்சியற்ற பசுமையான கீரை கிடைக்கும்.
3. **அறுவடை:** 25-28 நாட்களில் வேருடன் பிடுங்கி கட்டுகளாக சந்தைக்கு அனுப்பலாம். ஏக்கருக்கு ₹45,000+ நிகர லாபம்.`
      : `🥬 **Amaranthus Spinach / Keerai Cultivation Guide (25-Day Crop):**

1. **Sowing:** Broadcast 1.5 - 2 kg seed per acre mixed with fine sand.
2. **Organic Care:** Avoid chemical pesticides. Spray Panchagavya 3% or Jeevamrutham for glossy, pest-free green leaves.
3. **Harvest:** Pull up at 25-28 days. Yields 3,500 - 4,200 kg/acre fetching ₹45,000+ net profit.`;
  }

  // YELLOW LEAVES
  if (q.includes('yellow') || q.includes('மஞ்சள்') || q.includes('spot') || q.includes('புள்ளி')) {
    return isTamil
      ? `🍅 **தக்காளி / பயிர்களில் இலை மஞ்சள் நிறமாவதற்கான நிவாரணம்:**
• **பூஞ்சை கருகல் (Blight):** மேன்கோசெப் 2 கிராம்/லிட்டர் தெளிக்கவும்.
• **சத்து குறைபாடு:** NPK 19:19:19 5 கிராம்/லிட்டர் + மக்னீசியம் சல்பேட் 3 கிராம்/லிட்டர் தெளிக்கவும்.`
      : `🍅 **Remedy for Yellow Leaves & Leaf Spots:**
• **Fungal Blight:** Spray Mancozeb 75% WP @ 2g/L or Copper Oxychloride 2.5g/L.
• **Nutrient Deficiency:** Foliar spray NPK 19:19:19 @ 5g/L + Magnesium Sulphate @ 3g/L.`;
  }

  // FERTILIZER
  if (q.includes('fertilizer') || q.includes('உரம்') || q.includes('urea') || q.includes('dap')) {
    return isTamil
      ? `🌱 **${profile.primaryCrop ? profile.primaryCrop.toUpperCase() : 'பயிர்'} உர அளவு (${profile.landSizeAcres || 4.5} ஏக்கர்):**
• அடி உரம்: DAP ${Math.round((profile.landSizeAcres||4.5)*50)} கிலோ + Potash ${Math.round((profile.landSizeAcres||4.5)*25)} கிலோ.
• மேலுரம் (21 ஆம் நாள்): வேப்பம்பூசிய யூரியா ${Math.round((profile.landSizeAcres||4.5)*35)} கிலோ.`
      : `🌱 **Precision Fertilizer Schedule (${profile.landSizeAcres || 4.5} Acres of ${profile.primaryCrop ? profile.primaryCrop.toUpperCase() : 'PADDY'}):**
• Basal Dose: DAP ${Math.round((profile.landSizeAcres||4.5)*50)} kg + Potash ${Math.round((profile.landSizeAcres||4.5)*25)} kg.
• 21st Day Top Dressing: Neem-Coated Urea ${Math.round((profile.landSizeAcres||4.5)*35)} kg.`;
  }

  // GENERAL DEFAULT
  return isTamil
    ? `🌾 **அக்ரிபோட் வேளாண்மை ஆலோசனை:**
கொத்தமல்லி, புதினா, கீரை வகைகள், நெல், கரும்பு, வாழை பயிர் பராமரிப்பு, பூச்சி எதிர்ப்பு மற்றும் சந்தை விலைகள் பற்றி மேலும் கேட்கலாம்.`
    : `🌾 **AgriBot Precision Advisory:**
Ask me anything about Coriander (Kothamalli), Mint (Pudina), Amaranthus Keerai, Paddy, Banana, fertilizer dosages, or market prices.`;
}
