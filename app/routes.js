//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/op1/linked-profiles/security-check', function(request, response) {

    var manageaccounts = request.session.data['manageaccounts']
    if (manageaccounts == "Bella Philips"){
        response.redirect("/OP1/linked-profiles/security-check-bella")
    } else {
        response.redirect("/OP1/linked-profiles/security-check")
    }
})