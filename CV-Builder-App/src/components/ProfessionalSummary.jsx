export default function ProfessionalSummary({formData, handleChange}) {
  return (
    <>
      <h1 className="professional-summary">Professional Summary</h1>
      <label className="professional-summary-label">
        Write 2-4 short sentences about yourself to impress the reader! Mention your role, experience, and what sets you apart from others. Highlight your best qualities.
        <textarea
        name="summary"
        value={formData.summary}
        onChange={handleChange}
        placeholder="Passionate programmer with 5 years of experience and a track record of ..." />
      </label>
    </>
  );
}