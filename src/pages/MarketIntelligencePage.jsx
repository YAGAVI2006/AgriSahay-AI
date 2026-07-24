import React, { useState, useEffect } from 'react';
import { TrendingUp, MapPin, Sparkles, DollarSign, ArrowUpRight, ArrowDownRight, CheckCircle2, Building2, Calculator, Plus, Tag } from 'lucide-react';
import { marketService } from '../services/marketService';
import MarketPriceChart from '../components/MarketPriceChart';

export default function MarketIntelligencePage({ farmerProfile }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Interactive Product Selector & Price Calculator States
  const [selectedProduct, setSelectedProduct] = useState('coriander');
  const [harvestQuantity, setHarvestQuantity] = useState(50);
  const [unitType, setUnitType] = useState('kg');
  const [customPriceInput, setCustomPriceInput] = useState(38);

  // Custom User Market Entry State
  const [newCropName, setNewCropName] = useState('Coriander / Kothamalli');
  const [newCropPrice, setNewCropPrice] = useState(3800);
  const [newMandiName, setNewMandiName] = useState('Karur Regulated Market & Uzhavar Sandhai');
  const [userEntries, setUserEntries] = useState([]);

  const commodityOptions = [
    { id: 'coriander', name: 'Coriander / Kothamalli (கொத்தமல்லி)', defaultPricePerKg: 38, defaultUnit: 'kg', icon: '🌿' },
    { id: 'mint', name: 'Mint / Pudina (புதினா)', defaultPricePerKg: 32, defaultUnit: 'kg', icon: '🌱' },
    { id: 'keerai', name: 'Amaranthus Keerai (அரைக்கீரை / சிறுகீரை)', defaultPricePerKg: 18, defaultUnit: 'bundle', icon: '🥬' },
    { id: 'paddy', name: 'Paddy / Rice (நெல்)', defaultPricePerKg: 23, defaultUnit: 'qtl', icon: '🌾' },
    { id: 'banana', name: 'Banana (வாழை)', defaultPricePerKg: 18, defaultUnit: 'kg', icon: '🍌' },
    { id: 'groundnut', name: 'Groundnut Pods (நிலக்கடலை)', defaultPricePerKg: 68, defaultUnit: 'qtl', icon: '🥜' },
    { id: 'cotton', name: 'Cotton / Kapas (பருத்தி)', defaultPricePerKg: 74, defaultUnit: 'qtl', icon: '☁️' },
    { id: 'turmeric', name: 'Turmeric Finger (மஞ்சள்)', defaultPricePerKg: 138, defaultUnit: 'qtl', icon: '🟡' },
    { id: 'tomato', name: 'Tomato (தக்காளி)', defaultPricePerKg: 34, defaultUnit: 'kg', icon: '🍅' },
    { id: 'onion', name: 'Small Onion / Shallot (சின்ன வெங்காயம்)', defaultPricePerKg: 34, defaultUnit: 'kg', icon: '🧅' }
  ];

  useEffect(() => {
    setLoading(true);
    marketService.getMarketIntelligence({ district: farmerProfile.district || 'Karur' }).then(res => {
      setData(res);
      setLoading(false);
    });
  }, [farmerProfile]);

  const handleProductSelect = (prodId) => {
    setSelectedProduct(prodId);
    const item = commodityOptions.find(c => c.id === prodId);
    if (item) {
      setCustomPriceInput(item.defaultPricePerKg);
      setUnitType(item.defaultUnit);
    }
  };

  const handleAddCustomMarketEntry = (e) => {
    e.preventDefault();
    if (!newCropPrice) return;
    const entry = {
      id: Date.now(),
      crop: newCropName,
      pricePerQuintal: parseFloat(newCropPrice),
      mandi: newMandiName,
      change: '+Custom',
      trend: 'up'
    };
    setUserEntries(prev => [entry, ...prev]);
    alert(`Added ${newCropName} @ ₹${newCropPrice} to ${newMandiName}!`);
  };

  // Earnings calculation
  const totalQty = parseFloat(harvestQuantity) || 0;
  const currentPrice = parseFloat(customPriceInput) || 0;
  
  // Calculate revenue based on unit type (kg, qtl, bundle)
  let totalRevenue = 0;
  if (unitType === 'qtl') {
    totalRevenue = totalQty * currentPrice * 100; // Qtl rate usually given per 100kg
  } else {
    totalRevenue = totalQty * currentPrice;
  }

  const estTransportCost = Math.round(totalRevenue * 0.05); // 5% approx transport
  const netProfit = Math.max(0, totalRevenue - estTransportCost);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="badge badge-amber" style={{ marginBottom: '0.35rem' }}>
            <TrendingUp size={12} /> Interactive Mandi Price Calculator
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>📈 Smart Market Intelligence & Commodity Selector</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Select any crop, enter your custom selling price & quantity to calculate total market revenue in Karur & nearby mandis.
          </p>
        </div>

        <div style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-100)', padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-800)' }}>
          📍 Location: {farmerProfile.district || 'Karur'} District, Tamil Nadu
        </div>
      </div>

      {/* 🌟 INTERACTIVE PRODUCT PRICE SELECTOR & CALCULATOR WIDGET */}
      <div className="card-glass" style={{ border: '2px solid var(--primary-500)', background: 'linear-gradient(135deg, #ecfdf5 0%, #ffffff 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--primary-600)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Calculator size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary-900)' }}>
              Interactive Product Selector & Earnings Calculator
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Select a crop below or enter your own custom price to estimate your net profit!
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
          
          {/* Product Dropdown Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-800)', marginBottom: '0.35rem' }}>
              Select Crop Product:
            </label>
            <select
              value={selectedProduct}
              onChange={(e) => handleProductSelect(e.target.value)}
              style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: '#ffffff', fontWeight: 700, fontSize: '0.875rem' }}
            >
              {commodityOptions.map(item => (
                <option key={item.id} value={item.id}>
                  {item.icon} {item.name}
                </option>
              ))}
            </select>
          </div>

          {/* Enter Selling Price Input */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-800)', marginBottom: '0.35rem' }}>
              Enter Selling Price (₹):
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <input
                type="number"
                value={customPriceInput}
                onChange={(e) => setCustomPriceInput(e.target.value)}
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: '#ffffff', fontWeight: 800, fontSize: '1.05rem', color: 'var(--primary-800)' }}
              />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                ₹ / {unitType}
              </span>
            </div>
          </div>

          {/* Harvest Quantity Input */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-800)', marginBottom: '0.35rem' }}>
              Harvest Quantity:
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <input
                type="number"
                value={harvestQuantity}
                onChange={(e) => setHarvestQuantity(e.target.value)}
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: '#ffffff', fontWeight: 800, fontSize: '1.05rem' }}
              />
              <select
                value={unitType}
                onChange={(e) => setUnitType(e.target.value)}
                style={{ padding: '0.65rem 0.35rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: '#ffffff', fontWeight: 700, fontSize: '0.8rem' }}
              >
                <option value="kg">kg</option>
                <option value="qtl">Quintals</option>
                <option value="bundle">Bundles</option>
              </select>
            </div>
          </div>

          {/* Net Profit Result Display Box */}
          <div style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', color: '#ffffff', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.725rem', opacity: 0.9, textTransform: 'uppercase' }}>Net Revenue Estimate</span>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fef08a', lineHeight: 1.2 }}>
              ₹{netProfit.toLocaleString('en-IN')}
            </div>
            <span style={{ fontSize: '0.7rem', opacity: 0.85, marginTop: '2px' }}>
              Gross: ₹{totalRevenue.toLocaleString('en-IN')} (Trans: -₹{estTransportCost})
            </span>
          </div>

        </div>
      </div>

      {/* 📝 FORM: SUBMIT NEW CUSTOM MANDI PRICE BOARD */}
      <div className="card-glass" style={{ padding: '1.25rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Tag size={18} color="var(--primary-600)" /> Submit Local Market / Trader Price
        </h3>

        <form onSubmit={handleAddCustomMarketEntry} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.5fr 1fr', gap: '1rem', alignItems: 'center' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, marginBottom: '2px' }}>Product / Commodity Name</label>
            <input 
              type="text" 
              value={newCropName} 
              onChange={(e) => setNewCropName(e.target.value)} 
              placeholder="e.g. Coriander / Kothamalli"
              style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', fontSize: '0.85rem' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, marginBottom: '2px' }}>Market Price (₹ / Qtl or kg)</label>
            <input 
              type="number" 
              value={newCropPrice} 
              onChange={(e) => setNewCropPrice(e.target.value)} 
              placeholder="Price in ₹"
              style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', fontSize: '0.85rem', fontWeight: 700 }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, marginBottom: '2px' }}>Mandi / Trader Location</label>
            <input 
              type="text" 
              value={newMandiName} 
              onChange={(e) => setNewMandiName(e.target.value)} 
              placeholder="e.g. Karur Uzhavar Sandhai"
              style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', fontSize: '0.85rem' }} 
            />
          </div>

          <button type="submit" className="btn-primary" style={{ marginTop: '1.25rem', padding: '0.6rem', borderRadius: '6px', fontSize: '0.85rem' }}>
            <Plus size={16} /> Add to Board
          </button>
        </form>
      </div>

      {loading ? (
        <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Fetching live APMC mandi prices for Karur & Trichy...</p>
        </div>
      ) : (
        <>
          {/* AI Sell / Hold Advisory Hero Box */}
          <div className="card-glass" style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', color: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                💡
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Recommended Destination: {data.bestMarket}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '2px', lineHeight: 1.4 }}>
                  {data.aiRecommendation}
                </h3>
              </div>
            </div>
          </div>

          {/* Mandi Price Trend Chart */}
          <div className="card-glass">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <TrendingUp size={18} color="var(--primary-600)" /> 4-Week Commodity Price Trend (₹ / Quintal)
              </h3>
              <span className="badge badge-green">Karur APMC</span>
            </div>
            <MarketPriceChart trendData={data.priceTrendHistory} />
          </div>

          {/* Nearby Mandi Markets List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Nearby Regulated Mandi Yards & Live Rates</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.25rem' }}>
              {data.markets.map((market) => (
                <div key={market.id} className="card-glass">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-900)' }}>{market.name}</h4>
                      <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={12} /> {market.location} ({market.distance})
                      </p>
                    </div>
                    <span className="badge badge-amber">Active Auctions</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {/* User submitted price entries first */}
                    {userEntries.map((ue) => (
                      <div key={ue.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', background: '#ecfdf5', borderRadius: '8px', border: '1px solid #6ee7b7' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#047857' }}>⭐ {ue.crop}</span>
                        <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#047857' }}>₹{ue.pricePerQuintal.toLocaleString('en-IN')}</span>
                      </div>
                    ))}

                    {market.commodities.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', background: 'var(--bg-main)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.crop}</span>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--primary-800)' }}>
                            ₹{item.pricePerQuintal.toLocaleString('en-IN')}
                          </span>
                          <span style={{ fontSize: '0.725rem', color: item.trend === 'up' ? '#059669' : '#dc2626', display: 'block', fontWeight: 700 }}>
                            {item.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  );
}
