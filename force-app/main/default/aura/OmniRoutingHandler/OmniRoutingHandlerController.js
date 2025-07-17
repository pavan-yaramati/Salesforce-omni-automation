({
    onWorkAssigned : function(component, event, helper) {
        const workItems = event.getParam("workItems");
        if (!component.get("v.hasAccepted") && workItems && workItems.length > 0) {
            const workId = workItems[0].Id;
            const omniAPI = component.find("omniToolkit");

            omniAPI.acceptAgentWork(workId).then(() => {
                component.set("v.hasAccepted", true);
                // Optionally fire a toast or log
            }).catch(err => {
                console.error("Failed to accept work: ", err);
            });
        }
    }
})
