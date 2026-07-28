import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Mic, Volume2, Sparkles, RefreshCw, ThumbsUp, Copy, Check, MicOff } from 'lucide-react';

export default function AIAssistantView({ farmerProfile, selectedLanguage = 'en' }) {
  const isTa = selectedLanguage === 'ta';

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: isTa 
        ? 'வணக்கம்! நான் உங்கள் அக்ரிசஹாய் AI விவசாய உதவி பாட். பயிர் சாகுபடி, மஞ்சள் இலை சிகிச்சை, NPK உர அளவு, சொட்டு நீர் பாசனம் அல்லது கரூர் அரசு மானியங்கள் பற்றி எதையும் கேளுங்கள்.'
        : 'Vanakkam! I am your AgriSahay AI Farming Assistant. Ask me anything about crop cultivation, yellow leaf remedies, NPK fertilizer dosages, drip irrigation, or Karur government subsidies.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const chatEndRef = useRef(null);

  const suggestedPrompts = isTa ? [
    "🌿 நெல் & புதினாவில் மஞ்சள் இலையை எப்படி குணப்படுத்துவது?",
    "🧪 1 ஏக்கர் கொத்தமல்லிக்கு NPK உர அளவு என்ன?",
    "💧 கரூர் செம்மண்ணுக்கு சொட்டு நீர் பாசன அட்டவணை?",
    "🏛️ PM-KISAN ₹6,000 மானியத்திற்கு எவ்வாறு விண்ணப்பிப்பது?"
  ] : [
    "🌿 How to cure yellow leaf in Paddy & Mint?",
    "🧪 NPK fertilizer dosage for 1 acre Coriander?",
    "💧 Drip irrigation schedule for Karur red soil?",
    "🏛️ How to apply for PM-KISAN ₹6,000 subsidy?"
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Voice Listening Handler (Web Speech API)
  const handleVoiceListen = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert(isTa ? 'உங்கள் உலாவி குரல் உள்ளீட்டை ஆதரிக்கவில்லை.' : 'Voice recognition is not supported in this browser.');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = isTa ? 'ta-IN' : 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputQuery(transcript);
      setIsListening(false);
      handleSendMessage(transcript);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleSendMessage = async (textToSend = null) => {
    const text = textToSend || inputQuery;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    let botText = "";

    // Try Spring Boot Backend REST API first
    try {
      const res = await fetch('http://localhost:8080/api/v1/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: text })
      });
      if (res.ok) {
        const data = await res.json();
        botText = data.reply;
      }
    } catch (e) {
      console.log("Using localized AI response engine fallback");
    }

    // Localized Intelligent Fallback Engine
    if (!botText) {
      const lower = text.toLowerCase();
      if (isTa) {
        botText = "கரூர் மாவட்டத்திற்கான TNAU வேளாண்மை ஆராய்ச்சியின் அடிப்படையில்: ";
        if (lower.includes('மஞ்சள்') || lower.includes('yellow')) {
          botText += "இலைகள் மஞ்சள் நிறமாக மாறுவது நைட்ரஜன் குறைபாடு அல்லது துத்தநாக (Zinc) குளோரோசிஸ் காரணமாகும். பஞ்சகவ்யா 3% (30ml/லிட்டர் நீர்) தெளிக்கவும் அல்லது ஏக்கருக்கு 10கிலோ துத்தநாக சல்பேட் பயன்படுத்தவும்.";
        } else if (lower.includes('உரம்') || lower.includes('npk') || lower.includes('fertilizer')) {
          botText += "1 ஏக்கர் கொத்தமல்லி/கீரைகளுக்கு: 500கிலோ மண்புழு உரம் (Vermicompost) அடி உரமாகவும், 15வது நாளில் பஞ்சகவ்யா 3% தெளிக்கவும். இலைகள் கருகுவதைத் தவிர்க்க அதிக யூரியா பயன்படுத்துவதைத் தவிர்க்கவும்.";
        } else if (lower.includes('பாசனம்') || lower.includes('நீர்') || lower.includes('drip')) {
          botText += "கரூர் செம்மண்ணிற்கு: தினமும் அதிகாலை (காலை 6 - 8 மணி) 45 நிமிடங்கள் சொட்டு நீர் பாசனம் செய்யவும். நெற்பயிருக்கு மாறி மாறி நனைத்து உலர்த்தும் முறையைப் பின்பற்றவும்.";
        } else if (lower.includes('மானிய') || lower.includes('திட்டம்') || lower.includes('kisan')) {
          botText += "PM-KISAN ₹6,000 ஆண்டு தவணையைப் பெற: குளித்தலை / கரூர் வேளாண்மை அலுவலகத்திலோ அல்லது PM-KISAN இணையதளத்திலோ உங்கள் ஆதார் எண்ணை நிலச் சிட்டாவுடன் இணைக்கவும்.";
        } else {
          botText += "கரூரில் அதிக மகசூல் பெற, மண்ணின் pH 6.5-7.5 ஆக பராமரிக்கவும், சூடோமோனாஸ் புளோரசன்ஸ் மூலம் விதை நேர்த்தி செய்யவும், சொட்டு நீர் பாசனத்தைப் பயன்படுத்தவும்.";
        }
      } else {
        botText = "Based on TNAU agronomic research for Karur district: ";
        if (lower.includes('yellow') || lower.includes('மஞ்சள்')) {
          botText += "Yellowing in leaves is usually caused by Nitrogen deficiency or Zinc chlorosis. Apply Panchagavya 3% (30ml/L water) foliar spray or Zinc Sulphate @ 10kg/acre mixed with sand.";
        } else if (lower.includes('npk') || lower.includes('fertilizer') || lower.includes('உரம்')) {
          botText += "For 1 acre Coriander/Greens: Apply 500kg Vermicompost basal + Panchagavya 3% spray at 15th day. Avoid high Urea chemical dose to prevent leaf burning.";
        } else if (lower.includes('drip') || lower.includes('irrigation') || lower.includes('பாசனம்')) {
          botText += "For Karur Red Soil: Run drip fertigation for 45 minutes daily early morning (6 AM - 8 AM). Maintain Alternate Wetting & Drying (AWD) for rice.";
        } else if (lower.includes('pm-kisan') || lower.includes('scheme') || lower.includes('மானிய')) {
          botText += "To claim PM-KISAN ₹6,000 annual installment: Ensure your Aadhaar is linked with land Chitta/Adangal at Kulithalai / Karur Agriculture Office or via PM-KISAN portal.";
        } else {
          botText += "For optimal yield in Karur, maintain soil pH 6.5-7.5, perform seed treatment with Pseudomonas fluorescens (10g/kg seed), and use drip fertigation.";
        }
      }
    }

    const botMsg = {
      id: Date.now() + 1,
      sender: 'bot',
      text: botText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, botMsg]);
    setIsTyping(false);
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeech = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = isTa ? 'ta-IN' : 'en-IN';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', height: 'calc(100vh - 140px)' }}>
      
      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-green" style={{ marginBottom: '0.35rem' }}>
            <Sparkles size={12} /> {isTa ? 'உழவர் AI சாட்பாட் இன்ஜின்' : 'Uzhavar AI Chatbot Engine'}
          </div>
          <h2 style={{ fontSize: '1.65rem', fontWeight: 800 }}>🤖 {isTa ? 'அக்ரிபாட் AI விவசாய உதவியாளர்' : 'AgriBot AI Assistant'}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            {isTa ? 'தமிழ் மற்றும் ஆங்கிலத்தில் உடனடி விவசாய பதில்கள், சிகிச்சைகள் மற்றும் உர ஆலோசனைகள்.' : 'Instant agricultural answers, remedies & dosage recommendations in Tamil & English.'}
          </p>
        </div>
      </div>

      {/* Main Chat Box Container (ChatGPT UI Style) */}
      <div className="card-glass" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1.25rem', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
        
        {/* Messages Stream */}
        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {messages.map((msg) => (
            <div 
              key={msg.id}
              style={{
                display: 'flex',
                gap: '0.85rem',
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%'
              }}
            >
              {msg.sender === 'bot' && (
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary-600)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Bot size={20} />
                </div>
              )}

              <div style={{
                background: msg.sender === 'user' ? 'linear-gradient(135deg, #059669 0%, #047857 100%)' : 'var(--bg-slate)',
                color: msg.sender === 'user' ? '#FFFFFF' : 'var(--text-main)',
                padding: '0.9rem 1.15rem',
                borderRadius: '16px',
                borderTopLeftRadius: msg.sender === 'bot' ? '2px' : '16px',
                borderTopRightRadius: msg.sender === 'user' ? '2px' : '16px',
                boxShadow: 'var(--shadow-xs)',
                fontSize: '0.9rem',
                lineHeight: 1.55
              }}>
                <p>{msg.text}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem', fontSize: '0.725rem', opacity: 0.8 }}>
                  <span>{msg.timestamp}</span>

                  {msg.sender === 'bot' && (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button onClick={() => handleSpeech(msg.text)} title="Read Aloud" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
                        <Volume2 size={14} />
                      </button>
                      <button onClick={() => handleCopy(msg.id, msg.text)} title="Copy Text" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
                        {copiedId === msg.id ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--accent-amber-dark)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>
                  <User size={20} />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div style={{ display: 'flex', gap: '0.85rem', alignSelf: 'flex-start' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary-600)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={20} />
              </div>
              <div style={{ background: 'var(--bg-slate)', padding: '0.75rem 1.15rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <RefreshCw className="animate-spin" size={16} color="var(--primary-600)" />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {isTa ? 'அக்ரிபாட் யோசிக்கிறது...' : 'AgriBot AI is thinking...'}
                </span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Suggested Prompts Bar */}
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', padding: '0.75rem 0 0.5rem', borderTop: '1px solid var(--border-light)', marginTop: '0.5rem' }}>
          {suggestedPrompts.map((p, idx) => (
            <button 
              key={idx}
              onClick={() => handleSendMessage(p)}
              className="btn-outline"
              style={{ fontSize: '0.775rem', padding: '0.35rem 0.75rem', whitespace: 'nowrap', borderRadius: '9999px' }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
          style={{ display: 'flex', gap: '0.65rem', marginTop: '0.5rem' }}
        >
          <input 
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder={isTa ? "மஞ்சள் இலை, NPK உரம், சொட்டு நீர் பாசனம் பற்றி அக்ரிபாட்டிடம் கேளுங்கள்..." : "Ask AgriBot AI about yellow leaves, NPK fertilizers, drip irrigation..."}
            style={{
              flex: 1,
              padding: '0.85rem 1.15rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              background: 'var(--bg-slate)',
              fontSize: '0.9rem',
              color: 'var(--text-main)',
              outline: 'none'
            }}
          />

          {/* Voice Microphone Input Button */}
          <button 
            type="button" 
            onClick={handleVoiceListen}
            className="btn-outline" 
            style={{ 
              padding: '0.85rem',
              background: isListening ? '#FEE2E2' : 'transparent',
              borderColor: isListening ? '#EF4444' : 'var(--border-light)'
            }}
            title={isListening ? "Listening..." : "Speak Query"}
          >
            {isListening ? <MicOff size={18} color="#EF4444" className="animate-pulse" /> : <Mic size={18} color="var(--primary-600)" />}
          </button>

          <button type="submit" className="btn-primary" style={{ padding: '0.85rem 1.5rem' }}>
            <Send size={18} /> {isTa ? 'அனுப்பு' : 'Send'}
          </button>
        </form>

      </div>

    </div>
  );
}
