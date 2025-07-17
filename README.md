# 📦 Salesforce Omni-Channel Custom Routing Engine

This project demonstrates a production-level solution to enforce **presence-based routing** in Salesforce Omni-Channel. It ensures that agents receive **only one case at a time**, regardless of capacity, and automatically flips their presence status to **Busy** after accepting a case. This prevents overload and enforces better SLA adherence.

---

## 🚀 Features

✅ Enforces **1-case-at-a-time** assignment  
✅ Auto-flips presence status to `Busy` after accepting a case  
✅ Supports **auto-decline / timeout logic** for additional assignments  
✅ **Resets eligibility** when all assigned cases reach `Escalated`, `On Hold`, or `Validation`  
✅ Works with **auto-accept enabled**, bypassing default Salesforce capacity models  
✅ Aura utility bar with `omniToolkitAPI` + Apex controller for dynamic logic  
✅ Highly customizable and scalable

---

## 🧠 Problem Solved

In native Salesforce Omni-Channel, setting user capacity to >1 results in multiple cases being pushed simultaneously. This causes stress, mistakes, and capacity mismanagement.

**This solution intercepts assignments and programmatically:**
- Accepts only one case
- Declines or lets other cases timeout
- Changes presence status to block further routing

---

## 🛠️ Technologies Used

- `lightning:omniToolkitAPI`
- Aura Utility Bar Component
- Apex (`OmniAutoBusySetter`, `AgentWorkStatusChecker`)
- Flows (status-based routing triggers)
- UserServicePresence updates
- Case Status/Event Monitoring

---

## 🧩 Architecture Overview

```mermaid
flowchart TD
    A[Agent sets status to Ready] --> B[Omni assigns multiple cases]
    B --> C[Component accepts first case only]
    C --> D[Updates presence status to Busy]
    D --> E[Push timeout returns other cases]
    E --> F[Agent manually returns to Ready]
    F --> G[New case assigned]
