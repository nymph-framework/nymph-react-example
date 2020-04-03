from yaat import Yaat
from yaat.staticfiles import StaticFiles
from yaat.templating import Jinja2Template


# Configure Static and Template instances
static = StaticFiles(path="/static", directory="./src/static")
templates = Jinja2Template(directory="src/templates")

app = Yaat()
app.mount(static)

@app.route("/")
async def index(req):
    res = templates.TemplateResponse("index.html", {
        "message": "This is Yaat-React example."
    })
    return res
