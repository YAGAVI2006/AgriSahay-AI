import React, { useState } from 'react';
import { CalendarDays, CheckSquare, Square, Sparkles, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';
import { CROP_LIST } from '../data/crops';
import { getCalendarForCrop } from '../data/calendarData';

export default function CalendarView({ farmerProfile }) {
  const [selectedCropId, setSelectedCropId] = useState(farmerProfile.primaryCrop || 'paddy');

  const calendar = getCalendarForCrop(selectedCropId);

  // State to track task completion status
  const [tasksState, setTasksState] = useState(() => {
    const initialState = {};
    calendar.months.forEach(month => {
      month.tasks.forEach(task => {
        initialState[task.id] = task.completed;
      });
    });
    return initialState;
  });

  const toggleTask = (taskId) => {
    setTasksState(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  // Calculate overall progress %
  const totalTasks = Object.keys(tasksState).length;
  const completedCount = Object.values(tasksState).filter(Boolean).length;
  const progressPercent = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header Title & Extra Innovation Highlight */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="badge badge-purple" style={{ marginBottom: '0.35rem' }}>
            <Sparkles size={12} /> ⭐ Seasonal Farming Roadmap
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>🌾 AI Seasonal Farming Calendar</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Generates month-by-month precision farming activities and checklists tailored to your crop cycle.
          </p>
        </div>

        {/* Crop Switcher Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Select Crop Timeline:</span>
          <select 
            value={selectedCropId} 
            onChange={(e) => setSelectedCropId(e.target.value)}
            style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 700 }}
          >
            {CROP_LIST.map(cr => (
              <option key={cr.id} value={cr.id}>{cr.icon} {cr.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Progress Bar & Crop Overview Hero */}
      <div className="card-glass" style={{ background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)', color: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {calendar.season} • Total Duration: {calendar.totalDuration}
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '2px' }}>
              {calendar.cropName} AI Activity Roadmap
            </h3>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>Seasonal Progress</span>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fef08a' }}>
              {progressPercent}% Complete
            </div>
          </div>
        </div>

        {/* Progress Bar Gauge */}
        <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.2)', borderRadius: '5px', overflow: 'hidden' }}>
          <div 
            style={{ 
              width: `${progressPercent}%`, 
              height: '100%', 
              background: 'linear-gradient(90deg, #f59e0b, #10b981)',
              borderRadius: '5px',
              transition: 'width 0.4s ease'
            }} 
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', opacity: 0.85, marginTop: '0.4rem' }}>
          <span>{completedCount} of {totalTasks} Field Tasks Completed</span>
          <span>Target Crop Yield: High (Optimum Agronomic Care)</span>
        </div>
      </div>

      {/* Month-by-Month Activity Timeline Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {calendar.months.map((month, idx) => (
          <div 
            key={idx} 
            className="card-glass"
            style={{
              borderLeft: idx === 0 ? '4px solid var(--primary-500)' : '4px solid var(--border-light)'
            }}
          >
            {/* Month Header Banner */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--primary-50)', color: 'var(--primary-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800 }}>
                  {month.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-800)' }}>
                    {month.monthName} — {month.stageTitle}
                  </h4>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>{month.description}</p>
                </div>
              </div>

              <span className="badge badge-green">{month.status}</span>
            </div>

            {/* Task Checklist Items */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
              {month.tasks.map((task) => {
                const isChecked = tasksState[task.id] || false;
                return (
                  <div 
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    style={{
                      background: isChecked ? 'var(--primary-50)' : 'var(--bg-main)',
                      border: isChecked ? '1px solid var(--primary-400)' : '1px solid var(--border-light)',
                      borderRadius: '8px',
                      padding: '0.75rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ marginTop: '2px', color: isChecked ? 'var(--primary-600)' : 'var(--text-muted)' }}>
                      {isChecked ? <CheckSquare size={18} /> : <Square size={18} />}
                    </div>
                    <span style={{ 
                      fontSize: '0.85rem', 
                      fontWeight: isChecked ? 600 : 400,
                      textDecoration: isChecked ? 'line-through' : 'none',
                      color: isChecked ? 'var(--primary-900)' : 'var(--text-main)',
                      lineHeight: 1.4
                    }}>
                      {task.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Agronomic Proactive Advisory Box */}
            <div style={{ background: '#fef3c7', border: '1px solid #fde68a', padding: '0.65rem 0.85rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: '#92400e' }}>
              <AlertCircle size={16} style={{ flexShrink: 0 }} />
              <span><strong>AI Agronomist Note:</strong> {month.advisory}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
