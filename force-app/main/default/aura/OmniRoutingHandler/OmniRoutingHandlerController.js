({
    onWorkAssigned : function(component, event, helper) {
        const workItems = event.getParam("workItems");

        // Accept only one case
        if (!component.get("v.hasAccepted") && workItems && workItems.length > 0) {
            const workId = workItems[0].Id;
            const omniAPI = component.find("omniToolkit");

            omniAPI.acceptAgentWork(workId).then(() => {
                component.set("v.hasAccepted", true);
                component.set("v.acceptedWorkId", workId);

                // Flip to Busy immediately after accepting
                omniAPI.setServicePresenceStatus({ statusName: "Busy" });
            }).catch(err => {
                console.error("Failed to accept work:", err);
            });
        }
    },

    onStatusChanged: function(component, event, helper) {
        const newStatus = event.getParam("statusName");

        // Reset when agent goes back to Ready
        if (newStatus === "Ready") {
            component.set("v.hasAccepted", false);
            component.set("v.acceptedWorkId", "");
        }
    }
})
