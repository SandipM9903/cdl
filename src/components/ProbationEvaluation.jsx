import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

const ProbationEvaluation = ({ onClose }) => {
    // Defines the criteria used for evaluating the employee's performance.
    const evaluationCriteria = [
        "Performance Standard",
        "Quality of Work",
        "Subject Knowledge & Competence level",
        "Initiative & willingness to take responsibilities",
        "Attendance & Consistency in work",
        "Team work & Cooperation",
        "Organizing & time Management",
        "Attitude towards Work",
        "Well versed with Company Policies",
        "Thorough with Company's Code of Conduct"
    ];

    // Defines the available feedback options for each criterion.
    const feedbackOptions = ["Excellent", "Very good", "Good", "Average", "Poor"];

    // Initializes the feedback state for all criteria to "Excellent" for both evaluation periods.
    const initialFeedbackState = evaluationCriteria.reduce((acc, _, index) => {
        acc[index] = "Excellent";
        return acc;
    }, {});

    // State hooks to manage feedback for the third month, sixth month, and general remarks.
    const [thirdMonthFeedback, setThirdMonthFeedback] = useState(initialFeedbackState);
    const [sixthMonthFeedback, setSixthMonthFeedback] = useState(initialFeedbackState);
    const [remarks, setRemarks] = useState("");

    /**
     * Handles changes to the feedback dropdowns.
     * @param {string} type - Indicates whether it's "thirdMonth" or "sixthMonth" feedback.
     * @param {number} index - The index of the evaluation criteria being updated.
     * @param {string} value - The new feedback value (e.g., "Excellent", "Good").
     */
    const handleFeedbackChange = (type, index, value) => {
        if (type === "thirdMonth") {
            setThirdMonthFeedback(prev => ({ ...prev, [index]: value }));
        } else if (type === "sixthMonth") {
            setSixthMonthFeedback(prev => ({ ...prev, [index]: value }));
        }
    };

    /**
     * Handles the form submission. Logs the current state of the evaluations and remarks,
     * then calls the onClose prop to close the modal.
     * @param {Object} e - The event object from the form submission.
     */
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior (page reload).
        console.log("Third Month Evaluation:", thirdMonthFeedback);
        console.log("Sixth Month Evaluation:", sixthMonthFeedback);
        console.log("Remarks:", remarks);
        onClose(); // Closes the evaluation form.
    };

    return (
        // Modal overlay for the probation evaluation form.
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 p-1 font-inter">
            {/* Main container for the form, styled as a modal. */}
            <div className="bg-white shadow-xl max-w-5xl w-full max-h-[98vh] min-h-[90vh] overflow-y-auto relative rounded-lg">
                {/* Close button for the modal. */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-red-500 hover:text-red-700 transition duration-200"
                    aria-label="Close"
                >
                    <IoIosCloseCircleOutline className="w-6 h-6" />
                </button>

                {/* Content area of the form. */}
                <div className="py-6 px-8">
                    {/* Form title. */}
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Probation Evaluation & Confirmation Form</h1>

                    {/* Introductory paragraph. */}
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                        To understand the progress of a new joinee, to support him/her during the initial probation period with necessary trainings & to evaluate his/her performance, probation evaluation is carried out on completion of Third month from the Date of Joining (DOJ) while final employment confirmation is carried out on completion of Sixth month from DOJ.
                    </p>

                    {/* The main form. */}
                    <form onSubmit={handleSubmit}>
                        {/* Third Month Evaluation Section */}
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">Probation Evaluation: Third Month from DOJ</h2>
                        <p className="text-gray-600 mb-5 text-sm">(*Rate the employee's overall performance on the scale given below)</p>

                        {/* Table for Third Month Evaluation Criteria. */}
                        <div className="overflow-x-auto mb-6 max-w-4xl mx-auto">
                            <table className="w-full bg-white border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                        <th className="py-3 px-4 text-left border-b border-gray-300 w-[10%]">S.NO</th>
                                        <th className="py-3 px-4 text-left border-b border-gray-300 w-[60%]">EVALUATION CRITERIA</th>
                                        <th className="py-3 px-4 text-left border-b border-gray-300 w-[30%]">FEEDBACK</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700 text-sm">
                                    {evaluationCriteria.map((criteria, index) => (
                                        <tr key={`third-month-${index}`} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                                            <td className="py-2.5 px-4">{index + 1}</td>
                                            <td className="py-2.5 px-4">{criteria}</td>
                                            <td className="py-2.5 px-4">
                                                <select
                                                    className="block w-full p-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                                                    value={thirdMonthFeedback[index]}
                                                    onChange={(e) => handleFeedbackChange("thirdMonth", index, e.target.value)}
                                                >
                                                    {feedbackOptions.map(option => (
                                                        <option key={option} value={option}>{option}</option>
                                                    ))}
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Remarks Box Section - Modified for inline display. */}
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">Additional Remark(s) and Improvement Plan (Training) if Needed</h2>
                        <div className="mb-6 flex justify-center border-b border-gray-300">
                            <div className="w-full max-w-xl flex items-start">
                                <label htmlFor="remarks" className="flex-shrink-0 text-gray-700 text-sm font-medium pt-2 mr-2">Remarks</label>
                                <textarea
                                    id="remarks"
                                    // Increased rows from 3 to 5 to increase height
                                    rows="5"
                                    className="flex-grow p-2.5 border mb-5 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 resize-y"
                                    value={remarks}
                                    onChange={(e) => setRemarks(e.target.value)}
                                    placeholder="Enter additional remarks or improvement plans here..."
                                ></textarea>
                            </div>
                        </div>

                        {/* Sixth Month Evaluation Section */}
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">Employment Confirmation Evaluation</h2>
                        <p className="text-gray-600 mb-5 text-sm">(*Rate the employee's overall performance on the scale given below) After 6 Month From DOJ</p>

                        {/* Table for Sixth Month Evaluation Criteria. */}
                        <div className="overflow-x-auto mb-8 max-w-4xl mx-auto">
                            <table className="w-full bg-white border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                        <th className="py-3 px-4 text-left border-b border-gray-300 w-[10%]">S.NO</th>
                                        <th className="py-3 px-4 text-left border-b border-gray-300 w-[60%]">EVALUATION CRITERIA</th>
                                        <th className="py-3 px-4 text-left border-b border-gray-300 w-[30%]">FEEDBACK</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700 text-sm">
                                    {evaluationCriteria.map((criteria, index) => (
                                        <tr key={`sixth-month-${index}`} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                                            <td className="py-2.5 px-4">{index + 1}</td>
                                            <td className="py-2.5 px-4">{criteria}</td>
                                            <td className="py-2.5 px-4">
                                                <select
                                                    className="block w-full p-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                                                    value={sixthMonthFeedback[index]}
                                                    onChange={(e) => handleFeedbackChange("sixthMonth", index, e.target.value)}
                                                >
                                                    {feedbackOptions.map(option => (
                                                        <option key={option} value={option}>{option}</option>
                                                    ))}
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">Additional Remark(s) and Improvement Plan (Training) if Needed</h2>
                        <div className="mb-6 flex justify-center">
                            {/* Changed max-w-2xl to max-w-xl to decrease width */}
                            <div className="w-full max-w-xl flex items-start">
                                <label htmlFor="remarks" className="flex-shrink-0 text-gray-700 text-sm font-medium pt-2 mr-2">Remarks</label>
                                <textarea
                                    id="remarks"
                                    // Increased rows from 3 to 5 to increase height
                                    rows="5"
                                    className="flex-grow p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 resize-y"
                                    value={remarks}
                                    onChange={(e) => setRemarks(e.target.value)}
                                    placeholder="Enter additional remarks or improvement plans here..."
                                ></textarea>
                            </div>
                        </div>

                        {/* Form submission and cancel buttons. */}
                        <div className="flex justify-end space-x-3 mt-6">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProbationEvaluation;
